import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainerHome from "../components/ExploreContainerHome";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">SASKUMÄNGIJA ABIMEES</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="kaardid" fullscreen>
        <ExploreContainerHome name="SASKUMÄNGIJA ABIMEES" />
      </IonContent>
      <IonButton
        routerLink="calendar"
        expand="block"
        size="small"
        shape="round"
      >
        Sisene
      </IonButton>
    </IonPage>
  );
};

export default Home;
