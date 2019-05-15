export const searchJobPosts = query => {
  console.log(query, 'q')
  return $.ajax({
    method: 'GET',
    url: 'api/job_posts',
    data: { query }
  })
}
