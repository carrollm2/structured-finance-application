class Report < ApplicationRecord
  belongs_to :deal

  validates_inclusion_of :category, in => ['pre-sale']
  validates_inclusion_of :rating_agency, in => ['moodys', 'standard_poors', 'fitch', 'kroll']
end
