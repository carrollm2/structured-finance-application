class DealSerializer < ActiveModel::Serializer
  attributes :id, :ticker, :series, :asset_class
  has_many :reports
end
