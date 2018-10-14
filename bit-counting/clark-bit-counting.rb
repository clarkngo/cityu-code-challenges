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