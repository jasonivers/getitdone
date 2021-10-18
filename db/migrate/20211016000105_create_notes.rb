class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.references :user, null: false, foreign_key: true
      t.references :owner, polymorphic: true, null: false
      t.text :body

      t.timestamps
    end
  end
end
