class Deal < ApplicationRecord
    has_many :reports

    validates :ticker, :series, :asset_class, presence: true
    validates_inclusion_of :asset_class, :in => ['rmbs', 'cmbs', 'clo', 'auto', 'card']
end
