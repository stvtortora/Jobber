class CreateJobPosts < ActiveRecord::Migration[5.2]
  def change
    create_table :job_posts do |t|
      t.string :title, null: false
      t.string :city, null: false
      t.string :description, null: false
      t.string :category, null: false
      t.string :type, null: false
      t.string :salary, null: true
      t.string :career_level, null: true
      t.string :exeperience, null: true
      t.string :industry, null: true
      t.string :qualification, null: true
      t.string :language, null: true
      t.string :keyword_a, null: true
      t.string :keyword_b, null: true
      t.string :keyword_c, null: true
    end
  end
end
