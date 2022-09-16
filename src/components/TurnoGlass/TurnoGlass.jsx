import React from "react";
import "./TurnoGlass.css";
import calendar from "../../assets/calendar.svg";
import punto from "../../assets/punto.svg";
import clock from "../../assets/clock.svg";
import Punto from "./Punto";

function TurnosGlassItem(props) {
  return (
    <div className="turno-glass__body__container">
      <div className="turno-glass__body__info">
        <Punto color={props.color}></Punto>
        <div className="turno-glass__body__text">Recorrido Arte Europeo</div>
        <div className="hora__container">
          18:00 - 19:30
          <div className="icon__clock">
            <img src={clock} alt="icon" />
          </div>
        </div>
      </div>
      <div className="turno-glass__body__nombre">Daniel Chavez</div>
    </div>
  );
}

export default function TurnoGlass() {
  return (
    <div className="turno-glass__container">
      <div className="turno-glass__header">
        <div className="turno-glass__header__text">
          Turnos Pendientes
          <div className="icon__calendar">
            <img src={calendar} alt="icon" />
          </div>
        </div>
      </div>
      <div className="turno-glass__body">
        <div className="turno-glass__body__content">
          <TurnosGlassItem color="#9F51DD"></TurnosGlassItem>
          <TurnosGlassItem color="#E1B74A"></TurnosGlassItem>
          <TurnosGlassItem color="#78F165"></TurnosGlassItem>
          <TurnosGlassItem color="#78F165"></TurnosGlassItem>
          <TurnosGlassItem color="#78F165"></TurnosGlassItem>
        </div>
      </div>
    </div>
  );
}
