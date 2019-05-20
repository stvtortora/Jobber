class AddFacebookToCompany < ActiveRecord::Migration[5.2]
  def change
    add_column :companies, :facebook, :string, null: true
  end
end
