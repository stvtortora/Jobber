class JobPost < ApplicationRecord
  validates :title, :city, :description, :job_category, :job_type, :company, presence: true

  validates :job_type,
  inclusion: {
    in: ['Full Time', 'Part Time', 'Contract', 'Internship'],
    message: "'%{value}' is not a valid job type."
  }

  validates :salary,
  inclusion: {
    in: ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+'],
    message: "'%{value}' is not a valid job salary range."
  }, allow_nil: true

  validates :career_level,
  inclusion: {
    in: ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manager', 'Manager', 'Department Head', 'Executive'],
    message: "'%{value}' is not a valid job career level."
  }, allow_nil: true

  validates :experience,
  inclusion: {
    in: ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years'],
    message: "'%{value}' is not a valid job type."
  }, allow_nil: true

  validates :industry,
  inclusion: {
    in: ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning'],
    message: "'%{value}' is not a valid job industry."
  }, allow_nil: true

  validates :qualification,
  inclusion: {
    in: ['Associate Degree', 'Bachelor Degree', 'Master Degree', 'Doctorate Degree'],
    message: "'%{value}' is not a valid job qualification."
  }, allow_nil: true

  validates :language,
  inclusion: {
    in: ['Arabic', 'English', 'Spanish', 'Mandarin', 'French', 'Portuguese', 'Hindi'],
    message: "'%{value}' is not a valid job language."
  }, allow_nil: true

  belongs_to :company
  belongs_to :job_category
  has_one_attached :picture

  # first, we use pg search to filter out based on keyWords
  # then, we use scopes to filter out the rest of the query
  # finally, we apply order, limit, and offset

  include Filterable
  include PgSearch

  pg_search_scope :search_by_keyword,
  lambda { |keyword, order| {
    against: [:keyword_a, :keyword_b, :keyword_c, :title],
    associated_against: {
      job_category: [:name],
      company: [:title]
    },
    order_within_rank: order,
    query: keyword
    }
  }

  scope :city, -> (city) { where("lower(city) = ?", city) }
  scope :job_type, -> (job_type) { where("lower(job_type) = ?", job_type.downcase) }
  scope :job_category, -> (job_category) { where joins(:job_category).where("lower(job_category.name) = ?", job_category.downcase) }

  def self.search_by_query (query_params)
    keyword_matches = search_by_keyword(query_params[:keyword], query_params[:order]).includes(:job_category, :company)
    filter(query_params.slice(:city, :job_type, :job_category), keyword_matches)
    .limit(query_params[:limit].to_i)
    .offset(query_params[:offset].to_i * query_params[:limit].to_i - query_params[:limit].to_i)
  end

  def self.count_by_groups
    job_posts = JobPost.all.includes(:job_category)
    category_counts = Hash.new(0)
    job_type_counts = Hash.new(0)

    job_posts.each do |job_post|
      category_counts[job_post.job_category.name] += 1
      job_type_counts[job_post.job_type] +=1
    end

    {
      category: category_counts,
      job_type: job_type_counts
    }
  end
end





# def self.search_by_query(query_params)
#   filters = query_params[:filters]
#   order = query_params[:sort].split(':').join(" ")
#   limit = query_params[:limit].to_i
#   puts 'limit:'
#   puts query_params[:limit]
#   offset = query_params[:offset].to_i * limit - limit
#
#   search_by_filters_and_order(filters, order).includes(:job_category, :company).limit(limit).offset(offset)
# end
#
# include PgSearch
# pg_search_scope :search_by_filters_and_order,
#   lambda { |filters, order| {
#     against: [
#       :city,
#       :job_type,
#       :title,
#       :keyword_a,
#       :keyword_b,
#       :keyword_c
#     ],
#     associated_against: {
#       job_category: [:name],
#       company: [:title]
#     },
#     using: {
#       tsearch: { any_word: true }
#     },
#     order_within_rank: order,
#     query: filters
#   }
# }
