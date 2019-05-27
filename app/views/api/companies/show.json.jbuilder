json.extract! @company,
:title, :website, :tagline, :description, :city, :linked_in, :facebook,
:twitter, :team_size, :industry, :user_id, :phone_number, :id
json.job_posts @company.job_posts.length
if @company.picture.attached?
  json.picture_url url_for(@company.picture)
end
