import { isPlatform } from "@ionic/core";
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonFab,
  IonFabButton,
  IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { addOutline } from "ionicons/icons";
import React, { useContext, useState } from "react";
import GamesItem from "../components/GamesItem";

import CalendarResults from "../data/calendar-context";
import AddGameModal from "../modals/addGameModal";

import "./Calendar.css";

const Calendar: React.FC = () => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const calendarCtx = useContext(CalendarResults);

  const startAddCalendarHandler = () => {
    setIsAdding(true);
  };
  const cancelAddCalenadrHandler = () => {
    setIsAdding(false);
  };

  const saveAddCalendarHandler = (title: string, date: Date) => {
    setIsAdding(false);
    calendarCtx.addCalendar(title, date);
  };

  return (
    <React.Fragment>
      <AddGameModal
        show={isAdding}
        onCancel={cancelAddCalenadrHandler}
        onSave={saveAddCalendarHandler}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle>Kalender</IonTitle>
            {!isPlatform("android") && (
              <IonButtons slot="end">
                <IonButton onClick={startAddCalendarHandler}>
                  <IonIcon slot="icon-only" icon={addOutline}></IonIcon>
                </IonButton>
              </IonButtons>
            )}
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Calendar</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid>
            {calendarCtx.calendar.map((calendar) => (
              <IonRow key={calendar.id}>
                <IonCol size="8" offset="2">
                  <GamesItem
                    id={calendar.id}
                    title={calendar.title}
                    enrollmentDate={calendar.enrollmentDate}
                  />
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>
          {isPlatform("android") && (
            <IonFab horizontal="end" vertical="bottom" slot="fixed">
              <IonFabButton onClick={startAddCalendarHandler}>
                <IonIcon icon={addOutline}></IonIcon>
              </IonFabButton>
            </IonFab>
          )}

          {/*         <h2>Kalender</h2>
        <IonButton routerLink="/games">Kinnita valik</IonButton> */}
        </IonContent>
      </IonPage>
    </React.Fragment>
  );
};

export default Calendar;
