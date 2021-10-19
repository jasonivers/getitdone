json.extract! project, :id, :name, :description, :created_by, :updated_by, :created_at, :updated_at
json.creator User.find(project.created_by)
json.task_lists project.task_lists do |task_list|
    json.partial! partial: 'task_lists/task_list', locals: {task_list: task_list}
end
json.memberships project.memberships do |membership|
    json.partial! partial: 'memberships/membership', locals: {membership: membership}
end
json.url project_url(project, format: :json)
