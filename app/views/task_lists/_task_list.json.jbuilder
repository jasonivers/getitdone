json.extract! task_list, :id, :project_id, :name, :description, :created_by, :updated_by, :created_at, :updated_at
json.creator User.find(task_list.created_by)
json.project task_list.project
json.tasks task_list.tasks do |task|
    json.partial! partial: 'tasks/task', locals: {task: task}
end
json.memberships task_list.memberships do |membership|
    json.partial! partial: 'memberships/membership', locals: {membership: membership}
end
json.url task_list_url(task_list, format: :json)
