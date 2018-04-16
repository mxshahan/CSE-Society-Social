import React from 'react'
import { Route } from 'react-router-dom'
import Header from '../Components/Partials/Header'
import Footer from '../Components/Partials/Footer'

const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} component={() => {
        <Component/>
    }}/>
)

export default PublicRoute;