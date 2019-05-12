json.extract! job_post,
:title, :city, :description,
:company_id, :category_id,, :id
:type, :salary, :career_level,
:experience, :industry, :qualification,
:language, :keyword_a, :keyword_b, :keyword_c
json.company_name job_post.company.title
json.category_name job_post.category.name
