class Api::ReviewsController < ApplicationController
  # def index
  #   @reviews = Review.all  #where product_id matches
  #   render :show
  # end

  def destroy
    @review = Review.find_by(id: params[:id])
    @review.destroy if @review.reviewer_id == current_user.id
  end

  def create
    @review = Review.new(review_params)
    if @review && @review.save
      render :show
    else
      render json: ["Please complete all required fields."], status: 404
    end
  end

  def update
    @review = Review.find_by(id: params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: ["Unable to update form. Please complete all required fields"], status: 404
    end

  end

  private

  def review_params
    params.require(:review).permit(:reviewer_id, :product_id, :comment, :rating)
  end

end
