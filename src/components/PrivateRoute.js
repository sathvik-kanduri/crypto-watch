import { Route, useHistory } from 'react-router-dom'
import React from 'react'

const PrivateRoute = ({ children, ...rest }) => {
    const credentials = localStorage.getItem('credentials')
    // console.log(credentials)
    const history = useHistory()
    return (

        <Route {...rest}>
            {
                credentials ? history.push('/') : children
            }
        </Route>


    )

}
export default PrivateRoute