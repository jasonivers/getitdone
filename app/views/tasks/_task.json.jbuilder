json.extract! task, :id, :task_list_id, :user_id, :title, :description, :state, :created_by, :updated_by, :created_at, :updated_at
json.url task_url(task, format: :json)
