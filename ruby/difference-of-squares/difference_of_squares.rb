class Squares
  def initialize(num)
    @numbers = 0.upto(num)
  end

  def square_of_sum
    @square_of_sum = numbers.reduce { |a, b| a + b**2 }
  end

  def sum_of_squares
    @sum_of_squares = numbers.reduce(:+) **2
  end

  def difference
    (square_of_sum - sum_of_squares).abs
  end

  private

  attr_reader :numbers
end

module BookKeeping
  VERSION = 4
end
