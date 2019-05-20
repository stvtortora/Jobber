ids = []

json.content do
  @companies.each do |company|
    ids << company.id
    json.set! company.id do
      json.partial! company, company: company
    end
  end
end

json.ids ids
