class ReplaceEmployerIdWithUserId < ActiveRecord::Migration[5.2]
  def change
    remove_column :companies, :employer_id
    add_column :companies, :user_id, :integer, null: false
  end
end
