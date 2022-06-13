import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
// import GamesContentProvider from "./data/GamesContextProvider";
import { list, options } from "ionicons/icons";
import Settings from "./pages/settings";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import CalendarContextProvider from "../src/data/CalendarContextProvider"
import GamesTabs from "./pages/GamesTabs";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Tulemused</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonMenuToggle>
              <IonItem
                button
                routerLink="/calendar/list"
                routerDirection="none"
              >
                <IonIcon slot="start" icon={list} />
                <IonLabel>Kõik tulemused</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/settings" routerDirection="none">
                <IonIcon slot="start" icon={options} />
                <IonLabel>Reeglid</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <CalendarContextProvider>
        <IonRouterOutlet id="main">
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route path="/home">
            <GamesTabs />
          </Route>
          <Redirect path="" to="/home" exact />
        </IonRouterOutlet>
      </CalendarContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
