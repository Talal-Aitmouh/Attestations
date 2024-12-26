import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    border: 2,
    borderStyle: "dotted",
    fontSize: 12,
    position: "absolute",
    bottom: 20,
    left: 15,
    right: 15,
    opacity: 0.5,
  },
});
const Footer = ({ Data }) => (
  <View style={styles.footer}>
    <View style={{ padding: 10 }}>
      <Text>{Data.Region}</Text>
      <Text>{Data.Complex}</Text>
    </View>
    <View
      style={{
        borderLeftWidth: 2,
        borderRightColor: "black",
        borderStyle: "dotted",
        padding: 10,
      }}
    >
      {" "}
      <Text>{Data.Lieu}</Text>
      <Text>{Data.fix}</Text>
    </View>
  </View>
);
export default Footer;
