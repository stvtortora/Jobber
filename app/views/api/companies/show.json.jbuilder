json.extract! @company,
:title, :website, :tagline, :description, :city, :linked_in, :facebook,
:twitter, :team_size, :industry, :user_id, :phone_number, :id
if @company.picture.attached?
  json.picture_url url_for(@company.picture)
end
