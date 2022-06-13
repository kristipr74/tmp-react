import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useRef, useState } from "react";

const AddCalendarModal: React.FC<{
  show: boolean;
  onCancel: () => void;
  onSave: (title: string, date: Date) => void;
}> = (props) => {
  const [error, setError] = useState("");
  const titleRef = useRef<HTMLIonInputElement>(null);
  const dateRef = useRef<HTMLIonDatetimeElement>(null);

  const saveHandler = () => {
    const enterdTitle = titleRef.current!.value;
    const enteredDate = dateRef.current!.value;

    if (
      !enterdTitle ||
      !enteredDate ||
      enterdTitle.toString().trim().length === 0 ||
      enteredDate.trim().length === 0
    ) {
      //show error
      setError("Sisesta mängu formaat ja kuupäev");
      return;
    }
    setError("");

    props.onSave(enterdTitle.toString(), new Date(enteredDate));
  };

  return (
    <IonModal isOpen={props.show}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Lisa uus mäng</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Mängu formaat</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
            <IonCol>
              <IonItem>
                <IonLabel position="floating">Mängu toimumise koht</IonLabel>
                <IonInput type="text" ref={titleRef} />
              </IonItem>
            </IonCol>
            <IonRow>
              <IonCol>
                <IonItem>
                  <IonDatetime presentation="date" ref={dateRef} />
                </IonItem>
              </IonCol>
            </IonRow>
            {error && (
              <IonRow className="ion-text-center">
                <IonCol>
                  <IonText color="danger">{error}</IonText>
                </IonCol>
              </IonRow>
            )}

            <IonRow className="ion-text-center">
              <IonCol>
                <IonButton fill="clear" color="dark" onClick={props.onCancel}>
                  Tühista
                </IonButton>
              </IonCol>
            </IonRow>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonButton color="medium" expand="block" onClick={saveHandler}>
                Lisa
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonModal>
  );
};

export default AddCalendarModal;
