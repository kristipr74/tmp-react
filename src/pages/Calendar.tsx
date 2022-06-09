import { IonButton, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';
import './Calendar.css';

const Calendar: React.FC = () => {
  const history = useHistory();
  const navToResults = () => {void 
    history.push('/games');
}

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton />
        </IonButtons>
        <IonTitle>Kalender</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size='large'>Calendar</IonTitle>
          </IonToolbar>
        </IonHeader>

        <h2>Kalender</h2>
        <IonButton routerLink='/games'>Kinnita valik</IonButton>
        <IonButton onClick={navToResults}>Kinnita valik</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Calendar;
