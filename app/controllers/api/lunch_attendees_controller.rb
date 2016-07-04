class Api::LunchAttendeesController < ApplicationController

  def create

    @lunchattendee = LunchAttendee.new(lunch_params)
    if !@lunchattendee.save
			render json: @lunchattendee.errors, status: 422
		else
      render 'api/lunch_attendees/show'
    end
  end

  def destroy
    @lunchattendee = current_user.lunch_attendees.find_by(lunch_id: lunch_params[:lunch_id])
    if(@lunchattendee.destroy!)
      render 'api/lunch_attendees/show'
    else
      render status: 422
    end
  end


  private
  def lunch_params
    params.require(:lunch_attendees).permit(:lunch_id, :user_id)
  end
end
