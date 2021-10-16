json.extract! membership, :id, :user_id, :owner_id, :owner_type, :created_at, :updated_at
json.user membership.user
json.owner membership.owner
json.url membership_url(membership, format: :json)
