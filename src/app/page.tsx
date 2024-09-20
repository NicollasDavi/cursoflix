"use client";
import React, { useState } from "react";
import Link from "next/link"; // Importando o Link do Next.js
import CardSlider from "./components/CardSlider";
import { getCourses } from "./server/courses";
import Header from "./components/Header"; // Importando o Header diretamente

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Função para lidar com a busca
  const handleSearch = (term: string) => {
    setSearchTerm(term); // Atualiza o termo de busca
  };

  // Filtra os cursos com base no termo de busca
  const filteredCourses = getCourses.filter((course) =>
    course.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.instrutor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header onSearch={handleSearch} />

      <div className="container mx-auto my-8">
        {searchTerm === "" ? (
          // Exibe o Slider se não houver busca
          <>
          <h1>Cursos baratos</h1>
            <CardSlider courses={getCourses} />
            <h1>Cursos caros</h1>
            <CardSlider courses={getCourses} />
            <h1>Cursos que custam um rim</h1>
            <CardSlider courses={getCourses} />
          </>
        ) : (
          // Exibe a lista de cursos filtrados quando há busca
          <div className="grid grid-cols-1 gap-4">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <Link href={`/pages/course/${course.id}`} key={index} passHref>
                  <div className="border p-4 shadow-md cursor-pointer hover:bg-gray-100 transition grid grid-cols-2 gap-4">
                    {/* Imagem do curso */}
                    <img
                      src={course.imageurl}
                      alt={`Imagem do curso ${course.nome}`}
                      className="w-full h-32 object-cover"
                    />
                    {/* Informações do curso */}
                    <div>
                      <h3 className="text-xl font-bold">{course.nome}</h3>
                      <p>{`Instrutor: ${course.instrutor}`}</p>
                      <p>{`Duração: ${course.duracao}`}</p>
                      <p>{`Área: ${course.area}`}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>Nenhum curso encontrado.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
