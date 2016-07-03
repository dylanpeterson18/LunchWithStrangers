class Api::LunchEventsController < ApplicationController
  def create
		@lunch = LunchEvent.new(lunch_params)
		if !@lunch.save
			render json: @lunch.errors, status: 422
		end
	end

  def index
    @lunches = LunchEvent.all
  end

	private

	def lunch_params
		params.require(:lunch_events).permit(:date_time, :place, :host_id, :city_id, :details)
	end
end
