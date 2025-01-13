import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-16">
          <div className="w-64 h-64 lg:w-1/3 relative flex-shrink-0">
            <Image
              src="/images/profile.jpg"
              alt="João Vitor Caversan"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <div className="max-w-xl lg:w-1/2 text-center lg:text-left">
            <p className="text-lg text-gray-700 mb-4">
              Olá! Eu sou um desenvolvedor mobile especializado em React Native.
              Tenho experiência em criar aplicativos escaláveis e de alta
              performance, com foco em experiência do usuário e boas práticas de
              desenvolvimento.
            </p>
            <p className="text-lg text-gray-700">
              Adoro aprender novas tecnologias e enfrentar desafios que me
              permitem crescer profissionalmente. Minha paixão pela programação
              me motiva a estar sempre atualizado com as últimas tendências e
              ferramentas do mercado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
