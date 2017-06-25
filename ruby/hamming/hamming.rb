class Hamming
  def self.compute(a, b)
    if a.length != b.length
      throw ArgumentError
    else
      [a.length].min.times.count { |i| a[i] != b[i] }
    end
  end
end

module BookKeeping
  VERSION = 3
end
