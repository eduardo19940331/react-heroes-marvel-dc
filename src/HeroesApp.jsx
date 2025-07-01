import React from 'react'
import AppRouter from './router/AppRouter'

import './ui'
import { AuthProvider } from './auth'

const Heroes = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}

export default Heroes
