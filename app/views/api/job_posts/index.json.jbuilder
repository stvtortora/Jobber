ids = []
json.content do
  @job_posts.each do |job_post|
    ids << job_post.id
    json.set! job_post.id do
      json.partial! 'job_post', job_post: job_post
    end
  end
end
json.total_count @total_count
json.ids ids
