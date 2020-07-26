import React from 'react';
import { IonText, IonIcon, IonRouterLink, IonRippleEffect } from '@ionic/react';
import { caretForward } from 'ionicons/icons';

interface ButtonItemProps {
  label: string;
  icon: string;
  toUri: string,
  // history: any,
}

const ButtonItem: React.FC<ButtonItemProps> = ({
  icon,
  label,
  toUri='/tab1',
}) => {
  return (
    <IonRouterLink
      href={toUri} 
    >
      <div className="ion-activatable" style={{position: 'relative', overflow: 'hidden'}}>
        <div 
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingLeft: 16, paddingRight: 16, paddingTop: 20, paddingBottom: 16}}
        >
          <IonIcon icon={icon} color={'secondary'} style={{marginRight: 16, paddingLeft: 8, width: 24, height: 24}}/>
          <IonText style={{flexGrow: 1}} color={'dark'}>{label}</IonText>  
          <IonIcon icon={caretForward} style={{color: '#92949c', paddingRight: 8}}/>
        </div>
        <IonRippleEffect></IonRippleEffect>
      </div>
    </IonRouterLink>
  );
};

export default ButtonItem;