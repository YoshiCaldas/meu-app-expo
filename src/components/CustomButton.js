import { TouchableOpacity, Text } from 'react-native'

export default function CustomButton({
  title,
  onPress,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#2563EB',
        padding: 18,
        borderRadius: 14,
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}