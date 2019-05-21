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

  def destroy_job_posts
     self.job_posts.destroy_all
   end
end
