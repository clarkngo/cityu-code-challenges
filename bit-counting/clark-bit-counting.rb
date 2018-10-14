def count_bits(n)
  # TODO: Program me
  bits = []
  while n >= 1
    if n == 0
      break
    end
    if n % 2 == 0
      bits.unshift(0)
    else
      bits.unshift(1)
    end
    n /= 2
  end
  filterOnes = bits.select {|x| x == 1}
  bitCount = filterOnes.length
end

# By pass conversion to correct binary numbers
def count_bits(n)
  # TODO: Program me
  bits = []
  while n >= 1

    if n % 2 == 1
      bits.unshift(1)
    end
    
    n /= 2
  end
  bits.length
end

# best practice
def count_bits(n)
  n.to_s(2).count "1"
end