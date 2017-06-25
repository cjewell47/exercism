class PigLatin
  VOWELS = ["a", "e", "i", "o", "u"]

  def self.translate(word)
    return pigify word unless is_sentence?(word)
    word.split(" ").map!{ |item| pigify(item) }.join(" ")
  end

  def self.pigify word
    letters = word.chars
    letters.rotate! until is_first_letter_vowel?(letters) unless is_y_or_x_as_vowel?(letters)
    letters.rotate! if is_a_qu_word?(letters)
    letters.join << "ay"
  end

  def self.is_sentence? word
    word.include? " "
  end

  def self.is_first_letter_vowel? letters
    VOWELS.include? letters.first
  end

  def self.is_a_qu_word? letters
    letters.first == "u" && letters.last == "q"
  end

  def self.is_y_or_x_as_vowel? letters
    letters.first == "x" && !VOWELS.include?(letters[1]) || letters.first == "y" && !VOWELS.include?(letters[1])
  end
end

module BookKeeping
  VERSION = 1
end
