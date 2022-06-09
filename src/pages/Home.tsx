import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainerHome";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      {/*       <IonHeader>
        <IonToolbar>
          <IonTitle>Avaleht</IonTitle>
        </IonToolbar>
      </IonHeader> */}
      <IonContent class="kaardid" fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">SASKUMÄNGIJA ABIMEES</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="SASKUMÄNGIJA ABIMEES" />
        <IonButton routerLink="calendar" color="primary" shape="round" >Sisene
          </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
