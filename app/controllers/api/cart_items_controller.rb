
class Api::CartItemsController < ApplicationController
  def index
    @user = User.find_by(id: params[:user_id])

    @cart_items = @user.cart_items
    render :index
  end

  def create
    # @cart_item = CartItem.new(cart_item_params)
    @cart_item = CartItem.new(
    user_id: params[:user_id],
    product_id: params[:product_id],
    quantity: params[:quantity])
    if @cart_item.quantity > 0 && @cart_item.save
      render :index
    else
      render json: ["Cannot add quantity of zero to cart."], status: 404
    end
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])

    if @cart_item && @cart_item.quantity < 1
      @cart_item.destroy
      render :index
    end
    
    if @cart_item && @cart_item.save
      render :index
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    @cart_item.destroy
  end

  private
  def cart_item_params
    params.requre(:cart_item).permit(:user_id, :product_id, :quantity)
  end

end
