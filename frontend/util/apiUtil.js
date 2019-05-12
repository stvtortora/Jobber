export const searchJobPosts = query => {
  return $.ajax({
  method: 'GET',
  url: 'api/job_posts',
  data: { query }
  })
}
