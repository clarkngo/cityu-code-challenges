def catch_sign_change(arr)
  count = 0
  if arr == []
    return count
  end
  
  if arr[0] >= 0
    previous_sign = "positive"
  else
    previous_sign = "negative"
  end
  
  for i in 1...arr.length
    if arr[i] >= 0
      current_sign = "positive"
    else
      current_sign = "negative"
    end
    
    if current_sign != previous_sign
      count = count + 1
    end
    previous_sign = current_sign
  end
  count
end

# other solution
def catch_sign_change(arr)
  arr.each_cons(2).count { |x, y| (x >= 0) != (y >= 0) }
end

# other solution
def catch_sign_change(arr)
  arr.each_cons(2).count{ |x, y| x.negative? != y.negative? }
end
