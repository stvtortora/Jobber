class JobPost < ApplicationRecord
  validates :title, :city, :description, :job_category, :job_type, :company, presence: true

  validates :job_type,
  inclusion: {
    in: ['Full_Time', 'Part_Time', 'Contract', 'Internship'],
    message: "'%{value}' is not a valid job type."
  }

  validates :salary,
  inclusion: {
    in: ['$20000-$30000', '$30000-$40000','$40000-$50000','$50000-$60000','$60000-$70000','$70000-$80000','$80000-$90000','$90000-$100000','$100000-$1100000', '$110000-$1200000','$120000-$1300000','$130000-$1400000','$140000-$1500000','$150000-$1600000','$160000-$1700000','$170000-$1800000','$180000-$1900000','$190000-$2000000','$200000+'],
    message: "'%{value}' is not a valid job salary range."
  }, allow_nil: true

  validates :career_level,
  inclusion: {
    in: ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant_Manager', 'Manager', 'Department_Head', 'Executive'],
    message: "'%{value}' is not a valid job career level."
  }, allow_nil: true

  validates :experience,
  inclusion: {
    in: ['0-2_Years', '2-3_Years', '3-5_Years', '6-7_Years', '6-7_Years', '8-9_Years', '9-10_Years', '10+_Years'],
    message: "'%{value}' is not a valid job type."
  }, allow_nil: true

  validates :industry,
  inclusion: {
    in: ['AdTech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital_Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional_Services', 'Machine_Learning', 'HR_Tech'],
    message: "'%{value}' is not a valid job industry."
  }, allow_nil: true

  validates :qualification,
  inclusion: {
    in: ['Associate_Degree', 'Bachelor_Degree', 'Master_Degree', 'Doctorate_Degree'],
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

  include PgSearch
  pg_search_scope :search_by_query,
  against: [
    :city,
    :job_type,
    :title,
    :keyword_a,
    :keyword_b,
    :keyword_c
  ],
  associated_against: {
    job_category: [:name],
    company: [:title]
  },
  using: {
    tsearch: { any_word: true }
  }
end
