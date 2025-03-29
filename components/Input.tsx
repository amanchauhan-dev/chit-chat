import { TextInput, TextInputProps } from "react-native"

export const Input = ({ className, style, placeholderTextColor = 'white', ...rest }: TextInputProps) => {
    return <TextInput
        className={`text-white p-3  rounded-lg ${className}`}
        style={[{
            borderWidth: 2,
            borderColor: '#27272a'
        }, style]}
        placeholderTextColor={placeholderTextColor}
        {...rest}
    />
}