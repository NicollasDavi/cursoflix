// components/Card.tsx
import React from "react";
import Link from "next/link";
import { Card as MUICard, CardContent, Typography, CardMedia } from "@mui/material";

interface CardProps {
  id: string;  // Adicionando o ID do curso
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <Link href={`/pages/course/${id}`} passHref>
      <MUICard sx={{ maxWidth: 345, cursor: "pointer" }}>
        <CardMedia
          component="img"
          sx={{ height: 180, objectFit: "contain" }} // Definindo altura e cobertura da imagem
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </MUICard>
    </Link>
  );
};

export default Card;
