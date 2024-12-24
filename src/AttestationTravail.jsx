import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import Header from "./Compenent/Header";
import Footer from "./Compenent/Footer";
import Reference from "./Compenent/Reference";

// Styles for the PDF
const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    fontSize: 12,
    lineHeight: 1.5,
  },
  header: {
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "extrabold",
  },
  section: { marginVertical: 20, fontSize: 18, lineHeight: 1.5 },
  info: {
    width: "100%",
    marginBottom: 10,
    marginLeft: 30,
    fontSize: 18,
    display: "flex",
    flexDirection: "row",
    alignItems: "center", 
  },
  label: {
    flex: 1, 
  },
  colon: {
    marginHorizontal: 10, 
  },
  value: {
    flex: 2, 
    fontWeight: "bold",
  },
  paragraph: { fontSize: 14, marginTop: 40 },
});

const CurrentYear = new Date().getFullYear();
const CurrentDate = new Date().toLocaleDateString();

const AttestationTravail = ({ employeeData, footerData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <Reference Reference={employeeData.reference} />
      

      <View style={styles.header}>
        <Text>Attestation de Travail</Text>
      </View>
      <View style={styles.section}>
        <Text style={{ textIndent: 30 }}>
          Nous, soussignés Office de la Formation Professionnelle et de la
          Promotion de Travail, attestons que :
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Madame/Monsieur</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.value}>
          {employeeData.nom || "________"}{" "}
          {employeeData.prenom || "________"}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Cin</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.value}>
          {employeeData.cin || "________________"}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Matricule</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.value}>
          {employeeData.matricule || "________________"}
        </Text>
      </View>

      <View style={styles.section}>
        <Text>Est employé au sein de notre organisme</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>En Qualité de</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.value}>
          {employeeData.EnQualite || "________________"}
        </Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Fonction</Text>
        <Text style={styles.colon}>:</Text>
        <Text style={styles.value}>
          {employeeData.Fonction || "________________"}
        </Text>
      </View>

      <View style={styles.paragraph}>
        <Text>
          La présente attestation est délivrée à l’intéressé suite à sa demande,
          pour servir et valoir ce que de droit.
        </Text>
      </View>
      <Footer Data={footerData} />
    </Page>
  </Document>
);

export default AttestationTravail;
