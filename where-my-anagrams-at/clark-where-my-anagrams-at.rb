def anagrams(word, words)
  anagram = []
  reference = hashMe(word)

  words.each {|word| 
    target = hashMe(word)
    puts reference.inspect
    puts target.inspect
    
    if reference == target
      anagram.push(word)
    end
  }
  anagram
end

def hashMe(word)
  charHash = Hash.new
  word.each_char {|c| 
    if charHash.has_key?(c) == false
      charHash[c] = 1
    else
      charHash[c] = charHash[c] + 1
    end
  }
  charHash
end

# best practice
def anagrams(word, words)
  words.select { |w| w.chars.sort == word.chars.sort }
end

# other solution
def anagrams(word, words)
  m = word.chars.sort
  words.select { |w| w.chars.sort == m }
end

# other solution
def anagrams(word, words)
  sorted_chars = word.chars.sort
  words.select { |word| word.chars.sort == sorted_chars }
end

# other solution
def anagrams(word, words)
  words.select{|w| w.sum == word.sum}
end
