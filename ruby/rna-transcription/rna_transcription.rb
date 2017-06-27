class Complement
  SUBS = {
    'G' => 'C',
    'C' => 'G',
    'T' => 'A',
    'A' => 'U'
  }
  def self.of_dna rna
     new_rna = rna.chars.map { |c| SUBS.key?(c) ? SUBS[c] : '' }.join
     new_rna.length == rna.length ? new_rna : ''
  end
end

module BookKeeping
  VERSION = 4
end
