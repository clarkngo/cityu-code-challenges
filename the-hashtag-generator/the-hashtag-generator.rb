def generateHashtag(str)
  if str == ""
    false
  else
    arr = str.split(" ")
    arr.each {|char| 
      char[0] = char[0].upcase
    }
    str = arr.join("")
    if str.length >= 140
      false
    elsif str == ""
      false
    else
      "#" + str
    end
  end
end

# other solution
def generateHashtag(str)
  str = "#" << str.split.map(&:capitalize).join
  str.size <= 140 && str.size > 1 ? str : false
end

# other solution
def generateHashtag(str)
  str = str.split.map(&:capitalize).join
  (str.empty? or str.length > 139 or str=="#") ? false : "##{str}"
end

# other solution
def generateHashtag(str)
  hashtag = '#' + str.scan(/\w+/).map(&:capitalize).join
  hashtag.length.between?(2, 140) ? hashtag : false
end
