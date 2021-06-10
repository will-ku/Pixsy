
class Api::CartItemsController < ApplicationController
  def index
    # @user = User.find_by(id: params[:user_id])
    @cart_items = CartItem.all
  end

  def show
    @cart_item = CartItem.find_by(id: params[:id])
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item && @cart_item.save
      render

    else
      render json: ["Cannot add quantity of zero to cart."], status: 404

    end
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])

    if @cart_item && @cart_item.save

    end
  end

  def destroy
  end

  private
  def cart_item_params
    params.requre(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
