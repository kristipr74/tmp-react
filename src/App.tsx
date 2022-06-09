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
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ellipse, square, list, triangle, options } from "ionicons/icons";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Games from "./pages/Games";
import Results from "./pages/Results";

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
              <IonItem button routerLink="/games" routerDirection="none">
                <IonIcon slot="start" icon={list} />
                <IonLabel>Kõik tulemused</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
              <IonItem button routerLink="/results" routerDirection="none">
                <IonIcon slot="start" icon={options} />
                <IonLabel>Ülevaade</IonLabel>
              </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>

      <IonTabs>
        <IonRouterOutlet id="main">
          <Route exact path="/home">
            <Home />
          </Route>

          <Route exact path="/games">
            <Games />
          </Route>
          <Route exact path="/calendar">
            <Calendar />
          </Route>
          <Route exact path="/results">
            <Results />
          </Route>

          <Route exact path="/">
            <Redirect to="/calendar" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="home" href="/home">
            {<IonIcon icon={triangle} />}
            <IonLabel>Avaleht</IonLabel>
          </IonTabButton>
          <IonTabButton tab="calendar" href="/calendar">
            {<IonIcon icon={ellipse} />}
            <IonLabel>Kalender</IonLabel>
          </IonTabButton>
          <IonTabButton tab="games" href="/games">
            {<IonIcon icon={square} />}
            <IonLabel>Mäng</IonLabel>
          </IonTabButton>
          <IonTabButton tab="result" href="/results">
            {<IonIcon icon={list} />}
            <IonLabel>Tulemused</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
