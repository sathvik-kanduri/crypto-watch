import { Route, useHistory } from 'react-router-dom'
import React from 'react'

const PublicRoute = ({ children, ...rest }) => {
    const credentials = localStorage.getItem('credentials')
    const history = useHistory()
    return (

        <Route {...rest}>
            {
                credentials ? children : history.push('/login')

            }
        </Route>


    )

}
export default PublicRoute