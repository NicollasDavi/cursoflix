// components/CardSlider.tsx
'use client';

import React from 'react';
import Slider from 'react-slick';
import Card from './Card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider.css'; // Importando o CSS para customização das setas

interface CardSliderProps {
  courses: {
    id: string;
    nome: string;
    instrutor: string;
    duracao: string;
    imageurl: string;
    area: string;
  }[];
}

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow-right`} onClick={onClick}>
      <span>&#10095;</span> {/* Ícone de seta para a direita */}
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} custom-arrow-left`} onClick={onClick}>
      <span>&#10094;</span> {/* Ícone de seta para a esquerda */}
    </div>
  );
};

const CardSlider: React.FC<CardSliderProps> = ({ courses }) => {
  const settings = {
    dots: false, // Removemos os pontos
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className="px-4">
      {courses.map((course) => (
        <div key={course.id} className="px-2">
          <Card 
            id={course.id}
            title={course.nome} 
            description={`Instrutor: ${course.instrutor} | Duração: ${course.duracao}`} 
            imageUrl={course.imageurl} 
          />
        </div>
      ))}
    </Slider>
  );
};

export default CardSlider;
