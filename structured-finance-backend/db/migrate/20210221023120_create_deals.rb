class CreateDeals < ActiveRecord::Migration[6.0]
  def change
    create_table :deals do |t|
      t.string :ticker
      t.string :series
      t.string :asset_class

      t.timestamps
    end
  end
end
