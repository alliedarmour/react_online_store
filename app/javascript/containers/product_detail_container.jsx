import React from 'react'
import axios from 'axios'

class ProductDetail extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            product: {}
        }
    }

    componentDidMount() {
       this.loadProductFromServer()
    }

    loadProductFromServer() {
        const id = this.props.match.params.id
        axios
            .get(`/api/v1/products/${id}.json`)
            .then(response => {
                this.setState({ product: response.data.data })
            })
            .catch(error => console.log(error))
    }


    render() {
        const { product } = this.state

        if (product.attributes === undefined) {
            return <div>Loading...</div>
        } 

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <img className="img-fluid" src="http://placehold.it/350x150" width="100%" />
                    </div>

                    <div className="col-md-10 offset-md-1">
                        <div className="float-right">
                            <h3><span className="badge badge-pill badge-purple">${product.attributes.price}</span></h3>
                        </div>
                        <div>
                            <h3>{product.attributes.price}</h3>
                        </div>

                        <div className="mb-4">
                            {product.attributes.description}
                        </div>

                        <div className="float-right btn-edit-del">
                            <a href="#" className="btn btn-outline-danger btn-lg">Delete</a>
                        </div>

                        <div className="btn-edit-del">
                            <a href="#" className="btn btn-outline-purple btn-lg">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductDetail