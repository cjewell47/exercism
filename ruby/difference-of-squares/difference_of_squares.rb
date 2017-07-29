class Squares
  def initialize(num)
    @numbers = 0.upto(num)
  end

  def square_of_sum
    numbers.reduce(:+) **2
  end

  def sum_of_squares
    numbers.reduce { |a, b| a + b**2 }
  end

  def difference
    (square_of_sum - sum_of_squares)
  end

  private

  attr_reader :numbers
end

module BookKeeping
  VERSION = 4
end
