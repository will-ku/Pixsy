
class Api::CartItemsController < ApplicationController
  
  def index
    @user = User.find_by(id: params[:id])
    
    @cart_items = @user.cart_items
    render :index
  end

  def create
    @cart_item = CartItem.new(cart_item_params)
    
    deleted_cart_items = 
      CartItem.where(user: current_user.id).
      where(product_id: params[:cart_item][:product_id]).
      delete_all

    @cart_item.user_id = current_user.id

    if @cart_item.save
      render :show
    else
      render json: ["Cannot add quantity of zero to cart."], status: 404
    end
  end

  def update
    @cart_item = CartItem.find_by(id: params[:id])

    if @cart_item && @cart_item.quantity < 1
      @cart_item.destroy
      # render :show
    end
    
    if @cart_item && @cart_item.save
      render :show
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    @cart_item.destroy
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end

  def product_exists_in_cart_items?
    
  end
end
