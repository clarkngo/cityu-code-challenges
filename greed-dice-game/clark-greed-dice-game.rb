def score(dice)
  # You need to write this method
  # i need to refactor this
  count1s = 0
  count2s = 0
  count3s = 0
  count4s = 0
  count5s = 0
  count6s = 0
  sum = 0 

  dice.each do |die| 
    if die == 1
      count1s += 1
    elsif die == 2
      count2s += 1
    elsif die == 3
      count3s += 1
    elsif die == 4
      count4s += 1
    elsif die == 5
      count5s += 1
    elsif die == 6
      count6s += 1
    end 
    if count1s >= 3
      sum += 1000
      count1s -= 3
    end
    if count2s >= 3
      sum += 2 * 100
    end
    if count3s >= 3
      sum += 3 * 100
    end    
    if count4s >= 3
      sum += 4 * 100
    end    
    if count5s >= 3
      sum += 5 * 100
      count5s =- 3
    end    
    if count6s >= 3
      sum += 6 * 100
    end          
  end     
  if count1s == 1
    sum += 100
  elsif count1s == 2
    sum += 200
  end

  if count5s == 1
    sum += 50
  elsif count5s == 2
    sum += 100
  end
  
  sum
    
end