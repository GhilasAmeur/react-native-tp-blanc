import { StyleSheet, Text } from "react-native";

export const Tittle = ({ text, action, onPress }) => {
  return (
    <Text style={styles.footer} onPress={onPress}>
      {action} <Text style={styles.action}>{text}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 15,
    fontSize: 14,
  },
  action: {
    fontSize: 14,
    color: "gray",
    fontWeight: "bold",
  },
});
