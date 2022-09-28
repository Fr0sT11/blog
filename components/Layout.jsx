import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
    return (
        <div className=''>
            <Header />
            {children}
        </div>
    )
}

export default Layout
