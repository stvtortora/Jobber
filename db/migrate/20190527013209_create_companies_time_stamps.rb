class CreateCompaniesTimeStamps < ActiveRecord::Migration[5.2]
  def change
    create_table :companies_time_stamps do |t|
      add_column :companies, :created_at, :datetime, null: false
    end
  end
end
