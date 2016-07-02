class LunchEventsController < ApplicationController
  def create
		@lunch = LunchEvent.new(lunch_params)
		if !@lunch.save
			render json: @lunch.errors, status: 422
		end
	end

	private

	def lunch_params
		params.require(:lunch_events).permit(:date, :time, :place, :host_id, :city_id)
	end
end
