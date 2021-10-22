json.extract! document, :id, :project_id, :name, :updated_by, :created_by, :created_at, :updated_at
json.creator User.find(document.created_by)
json.project document.project
json.notes document.notes do |note|
    json.partial! partial: 'notes/note', locals: {note: note}
end
json.memberships document.memberships do |membership|
    json.partial! partial: 'memberships/membership', locals: {membership: membership}
end
json.url document_url(document, format: :json)
