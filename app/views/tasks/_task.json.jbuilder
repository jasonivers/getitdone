json.extract! task, :id, :task_list_id, :user_id, :title, :description, :state, :created_by, :updated_by, :created_at, :updated_at
json.creator User.find(task.created_by)
json.task_list task.task_list
json.notes task.notes do |note|
    json.partial! partial: 'notes/note', locals: {note: note}
end
json.url task_url(task, format: :json)
