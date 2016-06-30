json.array!(@cities) do |city|
  json.extract! city, :id, :name, :image_url
end
