import React, { useState } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import SalaryCertificate from './AttestationTravail';
import AttestationTravail from './AttestationTravail';
import Test from './Test';

const App = () => {
  const data={
    reference: 1,
    nom:"EL HAOUIL",
    prenom:"Youssef",
    cin:"P359232",
    matricule:"A123456",
    EnQualite:"Ma3rftch",
    Fonction:"Directeur Regional",    
  }

  const ComplexeData={
    Region:"Direction Régionale Draa Tafilalet",
    Complex:"Complexe de Formation Professionnelle Ouarzazate",
    Lieu:"Avenue Ennaceur, Ouarzazate",
    fix:"05 24 88 57 86 "
  }

  return (
    

      <div style={{ width: '600px', height: '800px' }}>
        <h1>Preview Attestation de Travail</h1>
        <PDFViewer style={{ width: '100%', height: '100%' }}>
          <Test employeeData={data} footerData={ComplexeData} />
        </PDFViewer>
    </div>
  );
};

export default App;
