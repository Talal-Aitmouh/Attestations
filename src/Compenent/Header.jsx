import React from "react";
import { Text, View, StyleSheet,Image } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  
});

const Header = () => (
    <View style={styles.header}>
        <Image src="./logo.jpg" style={{height:120,width:120}} />
        <Image src="./logoText.JPG" style={{height:90,width:300}} />
    </View>
    
    
)
export default Header;