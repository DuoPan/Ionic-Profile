import React from 'react';
import { IonToolbar, IonButtons, IonTitle, IonBackButton } from '@ionic/react';

const Skills = () => {
  return (
    <IonToolbar color='secondary'>
      <IonButtons slot="start">
        <IonBackButton defaultHref="/about-me" />
      </IonButtons>
      <IonTitle>Skills</IonTitle>
    </IonToolbar>
  );
};

export default Skills;
