class ReplaceCategoryStringWithCategoryIdInJobPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :job_posts, :category
    add_column :job_posts, :category_id, :integer, null: false
  end
end
