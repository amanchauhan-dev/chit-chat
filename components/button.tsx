import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import React from 'react'
import { ThemedText } from './ThemedText'



const Button = ({ children, className,...rest }: TouchableOpacityProps) => {
    return (
        <TouchableOpacity {...rest} className={`p-2 bg-green-600 rounded-lg px-3 ${className}`}>
            <ThemedText>{children}</ThemedText>
        </TouchableOpacity>
    )
}

export default Button