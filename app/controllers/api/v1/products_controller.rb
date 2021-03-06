class Api::V1::ProductsController < ApplicationController
  # before_action :require_signin, except: [:index, :show]
  before_action :find_product, only: [:show, :edit, :update, :destroy]
  # before_action :require_owner, only: [:edit, :update, :destroy]

  def index
    @products = Product.all

    respond_to do |format|
      format.json { 
        options = { include: [:user] }
        render json: ProductSerializer.new(@products).serializable_hash
      }

      format.html { render :index }
    end
  end

  def show
    respond_to do |format|
      format.json { render json: ProductSerializer.new(@product).serializable_hash }
    end

    # @comment = @product.comments.build
    # @comments = @product.comments
  end

  def create 
    
    @product = Product.new(product_params)
    @product.user_id = 4
    
    respond_to do |format|
      if @product.save
        format.json { render json: ProductSerializer.new(@product).serializable_hash }
      else
        byebug
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  end 

  def update  
    if @product.update(product_params)
      redirect_to root_path, flash: { notice: "Product was updated successfully!" }
    else
      flash.now[:alert] = "Product could not be updated!"
      render :edit
    end
  end

  def destroy
    @product.destroy
    redirect_to root_path
  end

  private

  def product_params
    params.require(:product).permit(:name, :price, :description, :image_url, :quantity)
  end

  def find_product
    begin
      @product = Product.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      redirect_to root_path
    end
  end

  def require_owner
    unless @product.owned_by?(current_user)
      redirect_to root_path, flash: { alert: "Access denied" }
    end
  end
end
