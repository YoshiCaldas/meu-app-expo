import { TextInput } from 'react-native'

export default function CustomInput({
  placeholder,
  secureTextEntry = false,
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor='#94A3B8'
      secureTextEntry={secureTextEntry}
      style={{
        backgroundColor: '#1E293B',
        padding: 18,
        borderRadius: 14,
        color: '#fff',
        marginBottom: 15,
      }}
    />
  )
}