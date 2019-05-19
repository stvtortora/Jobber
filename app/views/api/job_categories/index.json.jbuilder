@job_categories.each do |job_category|
  json.set! job_category.id do
    json.partial! 'job_category', job_category: job_category
  end
end
