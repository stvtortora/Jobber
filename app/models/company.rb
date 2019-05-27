class Company < ApplicationRecord
  validates :title, :website, :tagline, :description, :city, :user_id, presence: true

  validates :phone_number, length: { is: 10, allow_nil: true }

  validates :industry,
  inclusion: {
    in: ['Ad Tech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning'],
    message: "'%{value}' is not a valid job industry."
  }, allow_nil: true

  validates :team_size,
  inclusion: {
    in: ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+'],
    message: "'%{value}' is not a valid job team size."
  }, allow_nil: true

  before_destroy :destroy_job_posts
  belongs_to :user
  has_many :job_posts
  has_one_attached :picture

  include Filterable

  scope :team_size, -> (team_size) { where("lower(team_size) = ?", team_size.downcase) }
  scope :industry, -> (industry) { where("lower(industry) = ?", industry.downcase) }
  scope :keyword, -> (title) { where("lower(title) = ?", title.downcase) }
  scope :city, -> (city) { where("lower(city) = ?", city.downcase) }

  def self.search_by_query(query_params)
    filter(query_params.slice(:team_size, :industry, :city, :keyword), nil)
  end

  def self.retrieve_by_query(query_params)
    search_by_query(query_params)
    .order(query_params[:order])
    .limit(query_params[:limit].to_i)
    .offset(query_params[:offset].to_i * query_params[:limit].to_i - query_params[:limit].to_i)
  end

  def self.filter_counts_by_query(query_params)
    industry = Hash.new(0)
    team_size = Hash.new(0)

    search_by_query(query_params).each do |company|
      industry[company.industry] += 1
      team_size[company.team_size] += 1
    end

    {
      'industry' => industry,
      'team_size' => team_size
    }
  end

  def destroy_job_posts
     self.job_posts.destroy_all
   end
end
