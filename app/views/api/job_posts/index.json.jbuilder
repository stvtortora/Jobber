@job_posts.each do |job_post|
  puts job_post
  json.set! job_post.id do
    josn.partial! 'job_post', job_post: job_post
  end
end
