class Company < ApplicationRecord
  validates :title, :website, :tagline, :description, :city, :employer_id, presence: true

  validate :phone_number, length { is: 7, allow_nil: true }

  validates :industry,
  inclusion: {
    in: ['AdTech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital Media', 'Internet of Things', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional Services', 'Machine Learning', 'HR Tech'],
    message: "'%{value}' is not a valid job industry."
  }, allow_nil: true

  validates :team_size,
  inclusion: {
    in: ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+'],
    message: "'%{value}' is not a valid job team size."
  }, allow_nil: true

  belongs_to(
    :employer,
    class_name: 'User',
    foreign_key: :employer_id,
    primary_key: :id,
    optional: true
  )
  
  has_many :job_posts
end
