import React from "react";
import styles from "./Agenda.module.css";

export default function Agenda() {
  const agenda = [
    {
      id: 1,
      titulo: "Mutirão de Plantio de Árvores",
      data: "25/06/2025",
      local: "Parque Central",
      relacionado: "Reflorestamento",
    },
    {
      id: 2,
      titulo: "Audiência Pública sobre Segurança",
      data: "27/06/2025",
      local: "Câmara Municipal",
      relacionado: "Segurança Pública",
    },
    {
      id: 3,
      titulo: "Palestra: Educação de 1º Mundo é Possível",
      data: "30/06/2025",
      local: "Escola Municipal Paulo Freire",
      relacionado: "Educação de 1° mundo",
    },
    {
      id: 4,
      titulo: "Feira de Saúde e Bem-estar",
      data: "02/07/2025",
      local: "Praça da Saúde",
      relacionado: "Saúde de qualidade",
    },
    {
      id: 5,
      titulo: "Feirão de Empregos e Capacitação",
      data: "05/07/2025",
      local: "Centro de Convenções",
      relacionado: "Trabalho digno",
    },
    {
      id: 6,
      titulo: "Audiência sobre Transporte Público",
      data: "07/07/2025",
      local: "Câmara Municipal",
      relacionado: "Transporte público eficiente",
    },
    {
      id: 7,
      titulo: "Festival de Cultura e Esporte",
      data: "10/07/2025",
      local: "Ginásio Poliesportivo",
      relacionado: "Apoio à cultura e esporte",
    },
  ];

  return (
    <div className={styles.agendaContainer} id="agenda">
      <h2 className={styles.titulo}>Agenda de Eventos</h2>
      <div className={styles.timeline}>
        {agenda.map((evento) => (
          <div key={evento.id} className={styles.timelineEvent}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>{evento.titulo}</h3>
              <p>Data: {evento.data}</p>
              <p>Local: {evento.local}</p>
              <p>Proposta Relacionada:{evento.relacionado}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
