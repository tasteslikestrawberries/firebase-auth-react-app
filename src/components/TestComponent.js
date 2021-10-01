import React from 'react'
import { useTheme, useThemeUpdate} from '../contexts/ThemeContext'

export default function TestComponent() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#CCC' : '#333',
        padding: '2rem',
        marginBottom: '2rem'
    }

    return (
        <>
            
            <div style={themeStyles}>
            <button onClick={toggleTheme}>Toggle Theme</button>
            </div>
        </>
    )
}
