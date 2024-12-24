import React from "react";
import { Text, View } from "@react-pdf/renderer";

const Reference = ({ Reference }) => {
  const CurrentYear = new Date().getFullYear();
  const CurrentDate = new Date().toLocaleDateString();


  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text>
        Réf : OFP/DRDT/CF OUARZAZATE. /N° {Reference}/{CurrentYear}
      </Text>
      <Text>Ouarzazate , le {CurrentDate}</Text>
    </View>
  );
};
export default Reference;
