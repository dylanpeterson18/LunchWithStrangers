class Api::LunchEventsController < ApplicationController
  def create
		@lunch = LunchEvent.new(lunch_params)
		if !@lunch.save
			render json: @lunch.errors, status: 422
		else
      render 'api/lunch_events/show'
    end
	end

  def index
    @lunches = LunchEvent.all
  end

	private

	def lunch_params
		params.require(:lunch_events).permit(:date_time, :place, :host_id, :city_id, :details, :time)
	end
end
