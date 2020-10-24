import React, { useState, createContext } from 'React'

export const AuthContext = createContext ({
    isAuth: false,
    login: () => { },
    logout: () => { }
})
