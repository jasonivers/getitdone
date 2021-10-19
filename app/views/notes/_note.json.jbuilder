json.extract! note, :id, :user_id, :owner_id, :body, :created_at, :updated_at
json.url note_url(note, format: :json)
