class JobCategory < ApplicationRecord
  validates :name, presence: true
  has_many :job_posts
end
