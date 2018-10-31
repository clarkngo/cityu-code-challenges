def sum_to_0(_array)
  # your implementation goes here
  postive_nums = []
  negative_nums = []

  # separate positive nums and negative nums
  for i in 0.._array.length - 1
    if _array[i] > 0
      postive_nums.push(_array[i])
    end
    if _array[i] < 0
      negative_nums.push(_array[i])
    end
  end

  store_nums = []

  # two positive nums and one negative num
  for m in 0..negative_nums.length - 1
    k = 1
    for i in 0..postive_nums.length - 2
      for j in k..postive_nums.length - 1
        store_nums.push([postive_nums[i], postive_nums[j], negative_nums[m]])
      end
      k = k + 1
    end
  end # end loop

  # one positive num and two negative nums
  for m in 0..postive_nums.length - 1
    k = 1
    for i in 0..negative_nums.length - 2
      for j in k..negative_nums.length - 1
        store_nums.push([negative_nums[i], negative_nums[j], postive_nums[m]])
      end
      k = k + 1
    end
  end # end loop

  sum_of_zero = []
  
  # if 3 integers sum is 0, push to sum_of_zero array
  for i in 0..store_nums.length - 1
    if store_nums[i].reduce(:+) == 0
      sum_of_zero.push(store_nums[i])
    end
  end # end loop
  
  sum_of_zero
  
end  
