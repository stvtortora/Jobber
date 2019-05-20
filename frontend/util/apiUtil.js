export const searchJobPosts = query => {
  return $.ajax({
    method: 'GET',
    url: 'api/job_posts',
    data: { query }
  })
}

export const fetchJobPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `api/job_posts/${postId}`
  })
}

export const createJobPost = job_post => {
  return $.ajax({
    method: 'POST',
    url: `api/job_posts`,
    data: { job_post }
  })
}

export const createUser = user => {
  return $.ajax({
    method: 'POST',
    url: `api/users`,
    data: { user }
  })
}

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: `api/session`,
    data: { user }
  })
}

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: `api/session`
  })
}

export const fetchJobCategories = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/job_categories'
  })
}

export const createCompany = company => {
  return $.ajax({
    method: 'POST',
    url: `api/companies`,
    data: { company }
  })
}
