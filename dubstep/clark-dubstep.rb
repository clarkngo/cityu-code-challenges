def song_decoder(song)
  song = song.gsub("WUB"," ").split(" ").join(" ")
end

# other solution
def song_decoder(song)
  song.gsub(/(WUB)+/, ' ').strip
end

# other solution
def song_decoder(song)
  song.gsub('WUB', ' ').strip.squeeze(' ')
end

# other solution
def song_decoder(song)
  song.split('WUB').reject(&:empty?).join(' ')
end
