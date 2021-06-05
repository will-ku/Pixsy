class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
    render :show
  end
  
  private

  def product_params
    params.require(:products).permit(:name, :description, :price, :seller_id)
  end

end
