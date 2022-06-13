import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CalendarContext from "../data/calendar-context";

import "./Games.css";

const CalendarDetails: React.FC = () => {
  const selectedCalendarId = useParams<{ calendarId: string }>().calendarId;
  const calendarCtx = useContext(CalendarContext);


  const selectedCalendar = calendarCtx.calendar.find((c) => c.id === selectedCalendarId);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>
            {selectedCalendar
              ? selectedCalendar.title
              : "Selle mängu tulemusi veel ei ole!"}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              {selectedCalendar
                ? selectedCalendar.title
                : "Selle mängu tulemusi veel ei ole!"}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <h2>Tulemused</h2>
      </IonContent>
    </IonPage>
  );
};

export default CalendarDetails;
