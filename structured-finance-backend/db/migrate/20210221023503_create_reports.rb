class CreateReports < ActiveRecord::Migration[6.0]
  def change
    create_table :reports do |t|
      t.string :category
      t.string :report_link
      t.datetime :report_date
      t.string :rating_agency
      t.references :deal, null: false, foreign_key: true

      t.timestamps
    end
  end
end
