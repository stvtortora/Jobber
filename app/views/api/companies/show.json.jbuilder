json.extract! @company,
:title, :website, :tagline, :description, :city, :linked_in,
:twitter, :team_size, :industry, :user_id, :phone_number
if @company.picture.attached?
  json.picture_url url_for(@company.picture)
end
