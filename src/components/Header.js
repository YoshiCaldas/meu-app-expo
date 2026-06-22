import { View, Text } from 'react-native'

export default function Header({ title }) {
  return (
    <View
      style={{
        width: '100%',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20,
        backgroundColor: '#1E293B',
      }}
    >
      <Text
        style={{
          color: '#fff',
          fontSize: 28,
          fontWeight: 'bold',
        }}
      >
        {title}
      </Text>
    </View>
  )
}