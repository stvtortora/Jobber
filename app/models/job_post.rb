class JobPost < ApplicationRecord
  validates :title, :city, :description, :category, :type, :company, presence: true

  validates :category,
  inclusion: {
    in: ['Engineer + Dev', 'Marketing', 'Sales', 'Quality Assurance', 'Design + UX', 'Project Management', 'Finance', 'HR', 'Product', 'Content', 'Legal', 'Operations'],
    message: "'%{value}' is not a valid job category."
  }

  validates :type,
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
    in: ['Junior', 'Mid', 'Senior', 'Lead', 'Assistant Manage', 'Manager', 'Department Head', 'Eecutive'],
    message: "'%{value}' is not a valid job career level."
  }, allow_nil: true

  validates :experience,
  inclusion: {
    in: ['0-2 Years', '2-3 Years', '3-5 Years', '6-7 Years', '6-7 Years', '8-9 Years', '9-10 Years', '10+ Years'],
    message: "'%{value}' is not a valid job type."
  }, allow_nil: true

  validates :industry,
  inclusion: {
    in: ['AdTech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Internet of Things', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning', 'HR Tech'],
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

  belongs_to :category
end
