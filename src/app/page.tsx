import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      {/* Restante do conteúdo da página */}
      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-8">Meus Projetos</h2>
        {/* Aqui você adicionará a lista de projetos com horizontal scroll */}
      </main>
    </div>
  );
}
