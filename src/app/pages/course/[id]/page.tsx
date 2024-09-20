// app/course/[id]/page.tsx
import Link from "next/link";
import { getCourses } from "./../../../server/courses"; // Pegando os dados dos cursos
import Header from "./../../../components/Header"; // Importando o Header

interface CourseDetailsProps {
  params: {
    id: string;
  };
}

const CourseDetails = async ({ params }: CourseDetailsProps) => {
  const { id } = params;

  // Procurando o curso pelo ID
  const course = getCourses.find((course) => course.id === id);

  if (!course) {
    return <p>Curso não encontrado</p>; // Caso o curso não seja encontrado
  }

  return (
    <>
      {/* Incluímos o Header */}
      <Header />

      <div className="container mx-auto my-8">
        {/* Título e imagem de fundo do curso */}
        <div
          className="bg-cover bg-center bg-no-repeat p-6 mb-6 text-white"
          style={{
            backgroundImage: `url(${course.imageurl})`, // Imagem de fundo do curso
            height: "400px", // Altura para destacar o curso
          }}
        >
          <h1 className="text-4xl font-bold bg-opacity-50 bg-black p-2 inline-block">
            {course.nome}
          </h1>
          <p className="text-gray-200">{course.instrutor}</p>
        </div>

        {/* Informações detalhadas */}
        <div className="mb-6">
          <p className="text-lg text-gray-800">Valor: R$ {course.valor}</p> {/* Mostra o valor do curso */}

          {/* Link para a página de formulário */}
          <Link href={`/pages/form?courseId=${course.id}`} passHref>
            <button className="bg-gray-200 py-2 px-4 mt-2">Matricular-se</button>
          </Link>
        </div>

        <div>
          <h3 className="text-xl font-bold">Detalhes do curso</h3>
          <p>{course.detalhes}</p> {/* Exibe os detalhes do curso */}
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
