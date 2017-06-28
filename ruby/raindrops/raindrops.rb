class Raindrops
  SOUNDS = {
    3 => 'Pling',
    5 => 'Plang',
    7 => 'Plong'
  }

  def self.convert n
    output = ''
    SOUNDS.map { |num, word| n % num == 0 ? output << word : ''}
    output.length == 0 ? output << String(n) : output
  end
end

module BookKeeping
  VERSION = 3
end
