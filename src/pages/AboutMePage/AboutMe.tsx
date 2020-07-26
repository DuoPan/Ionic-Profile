import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import BasicInfoCard from './BasicInfoCard';
import './BasicInfoCard.css';

const AboutMe: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <BasicInfoCard 
          name={'Duo Pan'}
          title={'Full Stack Developer'}
          avatarPath={'https://test-avatar.s3-ap-southeast-2.amazonaws.com/tonypan2.jpeg'}
          experience={3}
          rate={5.0}
        />
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
