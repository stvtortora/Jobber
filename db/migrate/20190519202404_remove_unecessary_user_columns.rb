class RemoveUnecessaryUserColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :email
    remove_column :users, :fname
    remove_column :users, :lname
    remove_column :users, :city 
  end
end
