class Company < ApplicationRecord
  validates :title, :website, :tagline, :description, :city, :user_id, presence: true

  validates :phone_number, length: { is: 10, allow_nil: true }

  validates :industry,
  inclusion: {
    in: ['AdTech', 'Agriculture', 'Arts', 'FinTech', 'eCommerce', 'Digital_Media', 'Sales', 'Software', 'GreenTech', 'Payments', 'Professional_Services', 'Machine_Learning', 'HR_Tech'],
    message: "'%{value}' is not a valid job industry."
  }, allow_nil: true

  validates :team_size,
  inclusion: {
    in: ['<10', '10-25', '25-50', '50-100', '100-200', '200-300', '300-500', '500+'],
    message: "'%{value}' is not a valid job team size."
  }, allow_nil: true


  belongs_to :user
  has_many :job_posts
end