import React from 'react';
import { IonText, IonIcon } from '@ionic/react';
import { caretForward } from 'ionicons/icons';

interface ButtonItemProps {
  label: string;
  icon: string;
}

const ButtonItem: React.FC<ButtonItemProps> = ({
  icon,
  label,
}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingRight: 16, paddingTop: 20, paddingBottom: 16}}>
      <IonIcon icon={icon} color={'primary'} style={{marginRight: 16, paddingLeft: 8, width: 24, height: 24}}/>
      <IonText style={{flexGrow: 1}} color={'dark'}>{label}</IonText>  
      <IonIcon icon={caretForward} style={{color: '#92949c', paddingRight: 8}}/>
    </div>
  );
};

export default ButtonItem;