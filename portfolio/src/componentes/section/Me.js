import React from 'react';
import Card from '../elements/Card';
import styles from './Me.module.css';
import ButtonB from '../elements/ButtonB';
import ipdnc from '../section/images/Projects/lpdnc.svg';
import Portfolio from '../section/images/Projects/Portfolio.svg';


function Me() {
  const steps = [
    { year: '2021', text: 'Inicio no Senai.Estudo focado em mecânica diesel.' },
    { year: '2022', text: 'Entrada Suecia Veiculos.Mecânico de veiculos pesados.' },
    { year: '2023', text: 'Formação em Tecnico Diesel.' },
    { year: '2024', text: ' Mudança de carreira para área da tecnológia.' },
  ];

  return (
    <div className={styles.Me} id="Me">
      <div><h1>Sobre mim</h1></div>
      <div className={styles.timeline}>
        
        {steps.map((step, index) => (
          <div key={index} className={styles.timelineStep}>
            <div className={styles.circle}></div>
            <div className={styles.year}>{step.year}</div>
            <div className={styles.text}>{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Me;
