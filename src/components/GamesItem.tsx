/* eslint-disable no-template-curly-in-string */
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/react";
import React from "react";

const GameItem: React.FC<{
  id: string;
  title: string;
  enrollmentDate: Date;
}> = (props) => {
  return (
    <IonCard>
      <IonCardHeader>
        {" "}
        {props.title}{" "}
        <IonCardTitle>
          <IonCardSubtitle>
            {" "}
            Toimumise aeg{" "}
            {props.enrollmentDate.toLocaleDateString("et-EE", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
            })}
          </IonCardSubtitle>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="ion-text-center">
        <div className="ion-text-right">
        <IonButton fill='clear' color="secondary" routerLink={'/games/${props.id}'}>
          Vaata tulemusi
        </IonButton>
        </div>
      </IonCardContent>
    </IonCard>
  );
};

export default GameItem;
