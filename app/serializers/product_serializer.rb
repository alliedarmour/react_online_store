class ProductSerializer
  include FastJsonapi::ObjectSerializer
  
  attributes :name, :price, :description, :image_url, :quantity
  belongs_to :user
  has_many :comments
end
