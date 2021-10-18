class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.references :task_list, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.string :state
      t.bigint :created_by
      t.bigint :updated_by

      t.timestamps
    end
  end
end
