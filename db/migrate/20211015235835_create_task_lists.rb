class CreateTaskLists < ActiveRecord::Migration[6.1]
  def change
    create_table :task_lists do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name
      t.text :description
      t.bigint :created_by
      t.bigint :updated_by

      t.timestamps
    end
  end
end
