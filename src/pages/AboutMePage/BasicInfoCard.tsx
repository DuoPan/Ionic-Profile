import React from 'react';
import './BasicInfoCard.css';
import { IonText, IonAvatar, IonIcon } from '@ionic/react';
import { star} from 'ionicons/icons';

interface BasicInfoCardProps {
  name: string;
  title: string;
  avatarPath: string;
  experience: number,
  rate: number,
}

const BasicInfoCard: React.FC<BasicInfoCardProps> = ({ 
  name,
  title,
  avatarPath,
  experience,
  rate,
}) => {
  return (
    <div className="container">
      <div className='row' style={{marginBottom: 24}}>
        <IonText color='light' style={{flexGrow: 1}}>Working Years: {experience}</IonText>
        <IonIcon icon={star} style={{color: '#efce4a', marginBottom: 3, marginRight: 4}}/>
        <IonText color='light'>{rate.toFixed(1)}</IonText>
      </div>
      <IonAvatar style={{width: 80, height: 80}}>
        <img src={avatarPath} />
      </IonAvatar>
      <IonText color='light'><h5  style={{marginBottom: 0}}>{name}</h5></IonText>
      <IonText color='light'><h6 style={{marginTop: 4}}>{title}</h6></IonText>
    </div>
  );
};

export default BasicInfoCard;
