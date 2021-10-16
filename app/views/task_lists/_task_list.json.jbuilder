json.extract! task_list, :id, :project_id, :name, :description, :created_by, :updated_by, :created_at, :updated_at
json.url task_list_url(task_list, format: :json)
