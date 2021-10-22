class CreateDocuments < ActiveRecord::Migration[6.1]
  def change
    create_table :documents do |t|
      t.references :project, null: false, foreign_key: true
      t.string :name
      t.bigint :updated_by
      t.bigint :created_by

      t.timestamps
    end
  end
end
