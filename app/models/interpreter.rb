class Interpreter < ApplicationRecord

  def self.sort_by_language
    breakdown = Interpreter.group(:language).count
    breakdown.sort_by { |k,v| v }.reverse
  end
  
end
