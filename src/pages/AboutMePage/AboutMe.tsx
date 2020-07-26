import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import BasicInfoCard from './BasicInfoCard';
import './BasicInfoCard.css';
import ButtonItem from '../../basic/ButtonItem';
import { book, people, gameController } from 'ionicons/icons';
import ButtonGroup from '../../basic/ButtonGroup';

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
        <ButtonGroup>
          <ButtonItem label='Skills' icon={book}/>
          <ButtonItem label='Hobbies' icon={gameController}/>
          <ButtonItem label='Social Relationships' icon={people}/>
        </ButtonGroup>
      </IonContent>
    </IonPage>
  );
};

export default AboutMe;
