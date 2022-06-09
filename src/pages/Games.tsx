import {
    IonBackButton,
    IonButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import "./Games.css";

  export const GAMES_DATA = [
    {id: '1', title:'1 voor'},
    {id: '2', title:'2 voor'},
    {id: '3', title:'3 voor'},
    {id: '4', title:'4 voor'},
  ]
  
  const Games: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
              <IonBackButton defaultHref='/' />
            </IonButtons>
            <IonTitle>Sisesta mängu tulemused</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse='condense'>
            <IonToolbar>
              <IonTitle size="large">Result</IonTitle>
            </IonToolbar>
          </IonHeader>
          <h2>Mängu tulemused</h2>
          <IonGrid>
            {GAMES_DATA.map(games => (
              <IonRow key={games.id}>
                <IonCol size="4" offset="4">
                  <IonCard>
                    <IonCardContent className="ion-text-center">
                      <h2>{games.title}</h2>
                      <IonButton routerLink={'/games/${course.id'}>
                        Mängude tulemused
                      </IonButton>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          <IonButton routerLink='/results'>Sisesta tulemused</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Games;
  