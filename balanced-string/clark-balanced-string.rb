def balanced(_string)
  # your implementation goes here

  # store opening brackets in array
  openers_arr = []
  # hash to assign same values on bracket pairings
  brackets = { 
    "{" => 1, 
    "}" => 1, 
    "[" => 2, 
    "]" => 2, 
    "(" => 3, 
    ")" => 3 
  }

  # loop through string
  for i in 0.._string.length - 1

    # if opening bracket, push to array 
    if _string[i] =~ /[\[{(]/
      openers_arr.push(_string[i])
    end

    # if closing bracket, assign to 'closing'
    if _string[i] =~ /[\]})]/
      closing = _string[i] 

      # get value from hash for
      # opening bracket and closing bracket
      if brackets[openers_arr.last] != brackets[closing]
        false
      else
        # if opening and closing bracket matches
        # pop the last opening bracket in array
        openers_arr.pop
      end

    end

  end
  # end loop

  # check if opening bracket has missing pair
  if openers_arr.empty?
    true
  else
    false
  end

end
