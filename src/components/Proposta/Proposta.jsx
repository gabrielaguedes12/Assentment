import React from "react";
import Slider from "react-slick";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import styles from "./Proposta.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Proposta() {
  const proposta = [
    {
      image: "https://images.pexels.com/photos/771319/pexels-photo-771319.jpeg",
      titulo: "Reflorestamento",
      descricao: "Mais áreas verdes para o Rio de Janeiro.",
    },
    {
      image:
        "https://images.pexels.com/photos/38442/police-fog-seaside-38442.jpeg",
      titulo: "Segurança Pública",
      descricao: "Segurança com cidadania e inclusão.",
    },
    {
      image:
        "https://images.pexels.com/photos/5088017/pexels-photo-5088017.jpeg",
      titulo: "Educação de 1° mundo",
      descricao: "Mais investimento em educação pública.",
    },
    {
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg",
      titulo: "Saúde de qualidade",
      descricao: "Postos 24h com profissionais qualificados.",
    },
    {
      image: "https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg",
      titulo: "Trabalho digno",
      descricao: "Emprego com carteira assinada e segurança.",
    },
  ];

  const maisPropostas = [
    "Transporte público eficiente",
    "Mais empregos e qualificação",
    "Apoio à cultura e esporte",
    "Incentivo à economia local",
    "Programa para Equidade de gênero",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <section id="proposta" className={styles.container}>
      <Typography variant="h4" component="h2" className={styles.titulo}>
        Nossas Propostas
      </Typography>

      <Slider {...settings} className={styles.slider}>
        {proposta.map((item, index) => (
          <Card key={index} className={styles.card}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
              alt={item.titulo}
            />
            <CardContent>
              <Typography variant="h6">{item.titulo}</Typography>
              <Typography variant="body2" color="text.secondary">
                {item.descricao}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Slider>

      <Typography variant="h6" component="h3" className={styles.subtitulo}>
        Outras Propostas
      </Typography>
      <ul className={styles.lista}>
        {maisPropostas.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
