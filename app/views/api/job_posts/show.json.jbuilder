json.extract! @job_post,
:title, :city, :description,
:salary, :career_level, :industry,
:qualification, :language, :company_id,
:job_category_id, :job_type, :experience,
json.company @job_post.company.title
json.website @job_post.company.website
json.linked_in @job_post.company.linked_in
josn.job_category @job_post.job_category.name
