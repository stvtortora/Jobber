json.extract! job_post, :title, :city, :id, :job_type
json.company job_post.company.title
json.created_at job_post.created_at
json.job_category job_post.job_category.name
if job_post.company.picture.attached?
  json.picture_url url_for(job_post.company.picture)
end
