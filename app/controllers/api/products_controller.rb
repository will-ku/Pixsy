class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end

  def cart_item_products
    @user = User.find_by(id: params[:id])
    @cart_items = @user.cart_items

    @products = @cart_items.map {|cart_item| Product.find(cart_item.product_id) }
    render :index    
  end
  
  def all_category_products
    category = Category.find(params[:category_id])
    @category_name = category.name
    @products = Product.where(category: params[:category_id])
    render "/api/products/search_results"
  end

  def search_products
    @products = Product.search(params[:search])
  
    if @products   
      render :index
    else
      render json: ["We couldn't find any results for #{params[:search]}"], status: 404
    end
  end

  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :seller_id, photos: [])
  end

end
