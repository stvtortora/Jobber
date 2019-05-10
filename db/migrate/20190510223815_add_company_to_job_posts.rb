class AddCompanyToJobPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :job_posts, :company_id, :integer, null: false
  end
end
