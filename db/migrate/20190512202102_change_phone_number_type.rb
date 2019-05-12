class ChangePhoneNumberType < ActiveRecord::Migration[5.2]
  def change
    remove_column :companies, :phone_number
    add_column :companies, :phone_number, :string, null: false
  end
end
