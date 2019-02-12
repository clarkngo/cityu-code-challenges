def points(games)
  total_points = 0
  games.each do |game|
    if game[0].to_i > game[2].to_i
      total_points = total_points + 3
    elsif game[0].to_i == game[2].to_i
      total_points = total_points + 1
    end
  end
  total_points
end

# best practice
def points(games)
  games.sum { |score| [1, 3, 0][score[0] <=> score[2]] }
end

# other solution
APPING = {
  1 => 3,
  0 => 1,
 -1 => 0
}

def result(a,b)
 a <=> b
end

def points(games)
 points = games.map { |game| MAPPING[result *game.split(':').map(&:to_i)]}.sum
end

# other solution
def points(g)
  g.map {|n| n[0].to_i > n[2].to_i ? 3 : (n[0].to_i == n[2].to_i ? 1 : 0) }.sum
end

# other solution
def points(games)
  games.map{|i|i.split(':').map(&:to_i)}.map{|i|i[0]>i[1]?3:i[0]<i[1]?0:1}.sum
end
