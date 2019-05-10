class CreateCompanies < ActiveRecord::Migration[5.2]
  def change
    create_table :companies do |t|
      t.string :title, null: false
      t.string :website, null: false
      t.string :tagline, null: false
      t.string :description, null: false
      t.string :city, null: false
      t.integer :employer_id, null: false
      t.string :linked_in, null: true
      t.string :twitter, null: true
      t.string :team_size, null: true
      t.string :industry, null: true
      t.integer :phone_number, null: true
    end
  end
end
