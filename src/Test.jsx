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
  title: {
    textAlign: "center",
    fontSize: 14,
    marginBottom: 10,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  section: {
    marginVertical: 20,
  },
  info: {
    width: "100%",
    marginBottom: 10,
    marginLeft: 30,
    fontSize: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    flex: 1,
    fontSize: 12,
  },
  colon: {
    marginHorizontal: 10,
    fontSize: 12,
  },
  value: {
    flex: 2,
    fontWeight: "bold",
    fontSize: 12,
  },
  paragraph: {
    fontSize: 12,
    marginTop: 40,
    textAlign: "justify",
  },
  signature: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 12,
  },
});

const DemandeAutorisationAbsence = ({ employeeData, footerData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Header />
      <Reference Reference={employeeData.reference} />

      {/* Title */}
      <Text style={styles.title}>Demande d'Autorisation d'Absence</Text>

      {/* Personal Information */}
      <View style={styles.section}>
        <View style={styles.info}>
          <Text style={styles.label}>Nom et Prénom</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.nom || "________________"} {employeeData.prenom || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Matricule</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.matricule || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Grade</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.grade || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Échelle</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.echelle || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Fonction</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.fonction || "________________"}</Text>
        </View>
      </View>

      {/* Affectation Section */}
      <View style={styles.section}>
        <Text style={{ fontWeight: "bold", marginBottom: 4 }}>Affectation :</Text>
        <View style={styles.info}>
          <Text style={styles.label}>Direction</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.direction || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Division</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.division || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>EFP</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.efp || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Adresse Personnelle</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.adresse || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Téléphone</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.telephone || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Nature de Congé</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.nature || "Autorisation"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>À Comptes du</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.comptesDu || "________________"}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Motif</Text>
          <Text style={styles.colon}>:</Text>
          <Text style={styles.value}>{employeeData.motif || "Personnel"}</Text>
        </View>
      </View>

      {/* Signature Section */}
      <View style={styles.signature}>
        <Text>Signature de l'intéressé(e)</Text>
        <Text style={{ marginTop: 20 }}>Avis de Directeur DMC</Text>
        <Text style={{ marginTop: 20 }}>Avis de Directeur du Complexe</Text>
      </View>
      <Footer Data={footerData} />
    </Page>
  </Document>
);

export default DemandeAutorisationAbsence;
