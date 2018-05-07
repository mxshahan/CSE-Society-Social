import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Components/Partials/Header'
import Footer from '../Components/Partials/Footer'
import { connect } from 'react-redux'

const PublicRoute = ({isAuthenticated, component: Component, ...rest }) => (
    !isAuthenticated ? (
        <Route {...rest} component={(props)=> (
            <div>
                <Component {...props}/>
            </div>
        )}/>
    ) 
    : <Redirect to="/myaccount"/>
)

const mapStateToProps = (state) => ({
    isAuthenticated: !!localStorage.getItem('auth')
})
export default connect(mapStateToProps)(PublicRoute);