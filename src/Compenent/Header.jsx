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
        <Image src="./logo.jpg" style={{marginTop:10, marginBottom:10,height:100,width:100,opacity:0.5}} />
        <Image src="./logoText.JPG" style={{marginTop:10, marginBottom:10,height:90,width:300,opacity:0.5}} />
    </View>
    
    
)
export default Header;