class AddJobPostsTimeStamps < ActiveRecord::Migration[5.2]
  def change
    add_column :job_posts, :created_at, :datetime, null: false
  end
end
