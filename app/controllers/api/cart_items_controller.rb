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
    
    if @cart_item.update(cart_item_params) && @cart_item.save
      render :show
    else
      render json: ["Unable to update quantity of cart item."],status: 404
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    @cart_item.destroy
    render :show
  end

  def destroy_all
    @user = User.find_by(id: params[:id])
    @cart_items = @user.cart_items
    if @cart_items.destroy_all
      render :index
    else
      render json: ["Unable to place order at this time."]
    end
  end

  private
  def cart_item_params
    params.require(:cart_item).permit(:user_id, :product_id, :quantity)
  end
end
