import React from 'react'
import { Route } from 'react-router-dom'

function Status({ code, children }) {
    return <Route render={({ staticContext }) => {
        if (staticContext) {
            staticContext.statusCode = code
        }
        return children
    }}></Route>
}

function Notfound(props) {
    return <Status code={404}>
        <h1>error Notfound</h1>
    </Status>
}

export default Notfound