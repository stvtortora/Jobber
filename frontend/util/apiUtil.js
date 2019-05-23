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

export const fetchJobPosts = current_user_id => {
  return $.ajax({
    method: 'GET',
    url: 'api/job_posts',
    data: { current_user_id }
  })
}

export const createJobPost = job_post => {
  return $.ajax({
    method: 'POST',
    url: `api/job_posts`,
    data: { job_post }
  })
}

export const updateJobPost = job_post => {
  return $.ajax({
    method: 'PATCH',
    url: `api/job_posts/${job_post.id}`,
    data: { job_post }
  })
}


export const deleteJobPost = jobPostId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/job_posts/${jobPostId}`
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
  const isFormData = company instanceof FormData

  return $.ajax({
    method: 'POST',
    url: `api/companies`,
    data: isFormData ? company : { company },
    contentType: isFormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: isFormData ? false : true
  })
}

export const fetchCompany = companyId => {
  return $.ajax({
    method: 'GET',
    url: `api/companies/${companyId}`
  })
}

export const fetchCompanies = current_user_id => {
  return $.ajax({
    method: 'GET',
    url: 'api/companies',
    data: { current_user_id }
  })
}

export const updateCompany = company => {
  const isFormData = company instanceof FormData
  
  return $.ajax({
    method: 'PATCH',
    url: `api/companies/${company.id}`,
    data: isFormData ? company : { company },
    contentType: isFormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
    processData: isFormData ? false : true
  })
}


export const deleteCompany = companyId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/companies/${companyId}`
  })
}
