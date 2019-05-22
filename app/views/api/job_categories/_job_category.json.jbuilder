json.extract! job_category, :name, :id
json.openings job_category.job_posts.count
