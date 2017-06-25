class PigLatin
  VOWELS = ["a", "e", "i", "o", "u"]

  def self.translate(word)
    return pigify word unless is_sentence?(word)
    word.split(" ").map!{ |item| pigify(item) }.join(" ")
  end

  def self.pigify word
    letters = word.chars
    letters.rotate! until is_first_letter_vowel?(letters) || is_exception?(letters)
    letters.rotate! if is_first_letter_u?(letters) && is_last_letter_q?(letters)
    letters.join << "ay"
  end

  def self.is_sentence? word
    word.include? " "
  end

  def self.is_first_letter_vowel? letters
    VOWELS.include? letters.first
  end

  def self.is_first_letter_u? letters
    letters.first == "u"
  end

  def self.is_last_letter_q? letters
    letters.last == "q"
  end

  def self.is_exception? letters
    letters.first == "x" && letters[1] == "r" ||
    letters.first == "y" && letters[1] == "t"
  end
end

module BookKeeping
  VERSION = 1
end
