class ReplaceCategoryIdWithJobCategoryId < ActiveRecord::Migration[5.2]
  def change
    remove_column :job_posts, :category_id
    add_column :job_posts, :job_category_id, :integer, null: false
  end
end
