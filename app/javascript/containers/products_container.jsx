import React from 'react'
import axios from 'axios'

import Product from '../components/products/product' 

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.loadProductsFromServer()
  }

  loadProductsFromServer() {
    axios
      .get('/api/v1/products.json')
      .then(response => {
        const products = response.data.data
        console.log(products)
        this.setState({ products })
        console.log(products)
      })
      .catch(error => console.log(error.response))
  }

  render() {
    const productList = this.state.products.map(product => <Product key={product.id} product={product.attributes} />)

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-2">
            <div className="row">
              <div className="card-deck"> 
                  { productList }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductList
