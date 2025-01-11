import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-28 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Sobre Mim
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-48 h-48 relative">
            <Image
              src="/images/profile.jpg" // Substitua pelo caminho da sua foto
              alt="João Vitor Caversan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="max-w-2xl text-center md:text-left ml-6">
            <p className="text-lg text-gray-700">
              Olá! Eu sou João Vitor Caversan, um desenvolvedor mobile
              especializado em React Native. Tenho experiência em criar
              aplicativos escaláveis e de alta performance, com foco em
              experiência do usuário e boas práticas de desenvolvimento. Adoro
              aprender novas tecnologias e enfrentar desafios que me permitem
              crescer profissionalmente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
