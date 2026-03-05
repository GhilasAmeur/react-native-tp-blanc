import { StyleSheet, Text } from 'react-native'

export const LastNameError = ({ text }) => {
  return <Text style={styles.headerTitle}>{text}</Text>
}

const styles = StyleSheet.create({
  headerTitle: {
    color: 'red',
    fontSize: 17,
    fontWeight:'condensed'
  }
})
