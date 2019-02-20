def is_solved(board)
  row_value = row(board)
  return row_value if row_value == 1 || row_value == 2
  column_value = column(board)
  return column_value if column_value == 1 || column_value == 2
  diagonal_value = diagonal(board)
  return diagonal_value if diagonal_value == 1 || diagonal_value == 2
  empty_spots_value = empty_spots(board)
  return empty_spots_value if empty_spots_value == -1
  return 0
end



def row(two_d_arr)
  for i in 0...two_d_arr.length
    if two_d_arr[i][0] == two_d_arr[i][1] && two_d_arr[i][0] == two_d_arr[i][2]
      if two_d_arr[i][0] == 1
        return 1
      elsif two_d_arr[i][0] == 2
        return 2
      end
    end
  end  
end

def column(two_d_arr)
  for i in 0...two_d_arr.length
    if two_d_arr[0][i] == two_d_arr[1][i] && two_d_arr[0][i] == two_d_arr[2][i]
      if two_d_arr[0][i] == 1
        return 1
      elsif two_d_arr[0][i] == 2
        return 2
      end
    end
  end
end

def diagonal(two_d_arr)
  if two_d_arr[1][1] == two_d_arr[0][2] && two_d_arr[1][1] == two_d_arr[2][0]
    if two_d_arr[1][1] == 1
      return 1
    elsif two_d_arr[1][1] == 2
      return 2
    end
  end
  if two_d_arr[1][1] == two_d_arr[0][0] && two_d_arr[1][1] == two_d_arr[2][2]
    if two_d_arr[1][1] == 1
      return 1
    elsif two_d_arr[1][1] == 2
      return 2
    end
  end  
end

def empty_spots(two_d_arr)
  two_d_arr.each do |arr|
    if arr.include? 0
      return -1
    end
  end
end 

# other solution
def reduceCells cells
  (cells.include? 0) ? 0 : cells.reduce(:+)
end

def is_solved(board)
  redc = []
  redc[0] = reduceCells(board[0])
  redc[1] = reduceCells(board[1])
  redc[2] = reduceCells(board[2])
  redc[3] = reduceCells(board.transpose[0])
  redc[4] = reduceCells(board.transpose[1])
  redc[5] = reduceCells(board.transpose[2])  
  redc[6] = reduceCells([board[0][0], board[1][1], board[2][2]])
  redc[7] = reduceCells([board[0][2], board[1][1], board[2][0]])

  if redc.include? 3
    return 1
  elsif redc.include? 6
    return 2
  elsif redc.include? 0
    return -1
  end

  return 0
end

# other solution
def is_solved(board)
  case board.join
  when /1..(1|.1.)..1|1.1.1..$|111(...)*$/ then 1
  when /2..(2|.2.)..2|2.2.2..$|222(...)*$/ then 2
  when /0/ then -1
  else 0
  end
end
