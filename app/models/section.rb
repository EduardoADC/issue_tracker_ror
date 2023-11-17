class Section < ApplicationRecord
  belongs_to :project, optional: true
  has_many :tasks
  accepts_nested_attributes_for :tasks
end
