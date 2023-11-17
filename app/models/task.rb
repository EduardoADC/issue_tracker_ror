class Task < ApplicationRecord
  belongs_to :section, optional: true
end
