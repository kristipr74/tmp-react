import React from "react";
import {
  IonTabs,
  IonRouterOutlet,
  IonTabButton,
  IonTabBar,
  IonIcon,
  IonLabel,
} from "@ionic/react";
import { Redirect, Route, Switch } from "react-router-dom";
import { list, square, triangle, trophyOutline } from "ionicons/icons";

//import Calendar from "./Calendar";
import Games from "./Games";
import Results from "./Results";
import Calendar from "./Calendar";
import Home from "./Home";

const GamesTabs: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route exact path="/home">
          <Home />
        </Route>
        <Redirect path="/home" to="/home" exact />
        <Switch>
          <Route exact path="/calendar/list">
            <Calendar />
          </Route>
          <Route exact path="/calendar/games">
            <Games />
          </Route>
          <Route exact path="/calendar/results">
            <Results />
          </Route>
          <Route path="/calendar/:calendarId">
            <Calendar />
          </Route>
        </Switch>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="home" href="/home">
          <IonIcon icon={triangle} />
          <IonLabel>Avaleht</IonLabel>
        </IonTabButton>
        <IonTabButton tab="calendar" href="/calendar/list">
          <IonIcon icon={square} />
          <IonLabel>Kalender</IonLabel>
        </IonTabButton>
        <IonTabButton tab="results" href="/calendar/results">
          <IonIcon icon={trophyOutline} />
          <IonLabel>Mängud</IonLabel>
        </IonTabButton>

        <IonTabButton tab="games" href="/calendar/calendarId">
          <IonIcon icon={list} />
          <IonLabel>Tulemused</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};
export default GamesTabs;
