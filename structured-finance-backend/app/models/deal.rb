class Deal < ApplicationRecord
    has_many :reports

    validates_inclusion_of :asset_class, :in => ['rmbs', 'cmbs', 'clo', 'auto', 'card']
end
