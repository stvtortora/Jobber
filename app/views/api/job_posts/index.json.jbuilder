ids = []
json.content do
  @job_posts.each do |job_post|
    ids << job_post.id
    puts "CITY"
    puts job_post.city
    json.set! job_post.id do
      json.partial! 'job_post', job_post: job_post
    end
  end
end

if @filter_counts
  json.filter_counts do
    json.job_category @filter_counts['job_category']
    json.job_type @filter_counts['job_type']
  end
end
json.ids ids
