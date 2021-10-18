class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :description
      t.bigint :created_by
      t.bigint :updated_by

      t.timestamps
    end
  end
end
