json.extract! company, :id, :title, :city, :industry
json.job_posts company.job_posts.length
if company.picture.attached?
  json.picture_url url_for(company.picture)
end
