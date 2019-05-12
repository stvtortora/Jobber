class RemoveTypeWithJobType < ActiveRecord::Migration[5.2]
  def change
    remove_column :job_posts, :type
    add_column :job_posts, :job_type, :string, null: false
  end
end
