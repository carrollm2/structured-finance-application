class Report < ApplicationRecord
  belongs_to :deal

  validates_inclusion_of :category, :in => ['Pre-Sale', 'Downgrade', 'Press Release']
  validates_inclusion_of :rating_agency, :in => ['Moodys', 'Standard Poors', 'Fitch', 'Kroll']
end
