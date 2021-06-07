class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find(params[:id])
    render :show
  end
  
  private

  def product_params
    params.require(:product).permit(:name, :description, :price, :seller_id, photos: [])
  end

end
