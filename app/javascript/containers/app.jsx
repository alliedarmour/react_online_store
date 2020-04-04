import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
import ProductList from './products_container'
import ProductDetail from './product_detail_container'
import NewProductForm from '../components/products/new_product_form'


class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={ProductList} />
                        <Route path="/products/:id" component={ProductDetail} />

                        {/* This renders if no route is found */}   
                        <Route render={() => (
                            <div className="container">
                                <div className="row">
                                    <div className="card col-md-8 offset-md-2 mt-4 form-header-style">
                                        <h1 className="text-center m-4">404 - not found</h1>
                                        <p className="text-center m-4">The resource you are looking for could not be found</p>
                                    </div>
                                </div>
                            </div>
                        )}/>
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App