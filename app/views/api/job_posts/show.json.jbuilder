json.extract! @job_post,
:title, :city, :description,
:salary, :career_level, :industry,
:qualification, :language, :company_id,
:job_category_id, :job_type, :experience, :id
json.company @job_post.company.title
json.website @job_post.company.website
json.linked_in @job_post.company.linked_in
json.job_category @job_post.job_category.name
if @job_post.company.picture.attached?
  json.picture_url url_for(@job_post.company.picture)
end
