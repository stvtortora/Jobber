class FixExperienceTypo < ActiveRecord::Migration[5.2]
  def change
    remove_column :job_posts, :exeperience
    add_column :job_posts, :experience, :string
  end
end
