######################
# iterative solution #
######################
def sum_of_array(array)
  sum = 0
  array.each do |item|
    if item.is_a?(Integer) == true
      sum = sum + item
    else
      item.split('').each { |char|
        if char == " "
          next
        elsif char.is_lower? == true
          sum = sum + char.ord - 96
        elsif char.is_upper? == true
          sum = sum + char.ord - 38     
        end
      }
    end
  end
  sum
end

class String
  def is_upper?
    self == self.upcase
  end

  def is_lower?
    self == self.downcase
  end
end

value_array = [1, 'all', 4, 53, 'Cats', 24, 'Bilbo Swaggins', 12, 74, 'Wowwie', 23, 60, 13, 46, 'That is amazing']

sum_of_array(value_array)

########################################
# refactor and create method num_value #
########################################

def sum_of_array(array)
  sum = 0
  array.each do |item|
    if item.is_a?(Integer) == true
      sum = sum + item
    else
      sum = sum + num_value(item)
    end
  end
  sum
end

def num_value(item)
  total = 0
  item.split('').each { |char|
    if char == " "
      next
    elsif char.is_lower? == true
      total = total + char.ord - 96
    elsif char.is_upper? == true
      total = total + char.ord - 38     
    end
  }
  total
end

class String
  def is_upper?
    self == self.upcase
  end

  def is_lower?
    self == self.downcase
  end
end

value_array = [1, 'all', 4, 53, 'Cats', 24, 'Bilbo Swaggins', 12, 74, 'Wowwie', 23, 60, 13, 46, 'That is amazing']

sum_of_array(value_array)

########################################
# refactor to have recursion           #
########################################
def sum_of_array(array)
  if array.empty?
    return 0
  else
    item = array.shift
    if item.is_a?(String)
      puts item = num_value(item)
    end
    
  item = item + sum_of_array(array)
  end
end

def num_value(item)
  total = 0
  item.split('').each { |char|
    if char == " "
      next
    elsif char.is_lower? == true
      total = total + char.ord - 96
    elsif char.is_upper? == true
      total = total + char.ord - 38     
    end
  }
  total
end

class String
  def is_upper?
    self == self.upcase
  end

  def is_lower?
    self == self.downcase
  end
end

value_array = [1, 'all', 4, 53, 'Cats', 24, 'Bilbo Swaggins', 12, 74, 'Wowwie', 23, 60, 13, 46, 'That is amazing']

sum_of_array(value_array)
