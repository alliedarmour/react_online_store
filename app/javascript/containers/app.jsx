import React from 'react'
import Header from '../components/shared/header'
import Footer from '../components/shared/footer'
import Jumbotron from '../components/products/jumbotron'
import ProductList from './products_container'


const App = () => (
    <div>
        <Header />
        <Jumbotron />
        <ProductList />
        <Footer />
    </div>
)

export default App