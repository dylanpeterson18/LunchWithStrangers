json.array!(@lunches) do |lunch|
  json.extract! lunch, :host_id, :details, :place, :date_time, :id, :city_id
end
