export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-12 md:py-14 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
            João Vitor Caversan
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
            Desenvolvedor Mobile Especializado em React Native
          </h2>

          <div className="h-1 w-16 bg-blue-500 rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-4 leading-relaxed">
            Olá! Sou um desenvolvedor mobile com paixão por criar aplicativos
            escaláveis e de alta performance. Minha experiência inclui a
            construção de soluções modernas, com foco em experiência do usuário,
            design responsivo e boas práticas de desenvolvimento.
          </p>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Adoro aprender novas tecnologias e encarar desafios que impulsionem
            meu crescimento profissional. Estou sempre em busca de inovação,
            acompanhando as tendências e ferramentas mais recentes do mercado.
          </p>

          <div className="mt-8">
            <a
              href="#projects"
              className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-all duration-300"
            >
              Veja Meus Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
