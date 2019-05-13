json.extract! job_post,
:title, :city, :description,
:company_id, :job_category_id, :id,
:job_type, :salary, :career_level,
:experience, :industry, :qualification,
:language, :keyword_a, :keyword_b, :keyword_c
json.company_title job_post.company.title
json.categorytitle job_post.job_category.name
