ids = []

json.content do
  @companies.each do |company|
    ids << company.id
    json.set! company.id do
      json.partial! company, company: company
    end
  end
end

if @filter_counts
  json.filter_counts do
    json.industry @filter_counts['industry']
    json.team_size @filter_counts['team_size']
  end
end

json.ids ids
