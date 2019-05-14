json.extract! job_post, :title, :city, :id, :job_type
json.company_title job_post.company.title
json.created_at job_post.created_at
if job_post.picture.attached?
  json.picture_url url_for(job_post.picture)
end
