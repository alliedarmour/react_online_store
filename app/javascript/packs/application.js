// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap/dist/css/bootstrap.min.css"
import "../stylesheets/custom.css"

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import App from '../containers/app'

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root')
    ReactDOM.render(
        <App />, 
        root
    )
})