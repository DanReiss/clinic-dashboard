import Navbar from './components/Navbar';

export default function Dashboard() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between">
      <Navbar />
      <div className="grid min-h-screen w-full grid-cols-12 grid-rows-12 p-12 gap-2">
        <div className="bg-[#EBF4F4] col-span-12">
          Barra de notificações
        </div>
        <div className="bg-[#EBF4F4] col-span-4 row-span-6">
          Buscar por Pessoas
        </div>
        <div className="bg-[#EBF4F4] col-span-4 row-span-6">
          Relatórios
        </div>
        <div className="bg-[#EBF4F4] col-span-4 row-span-3">
          Clima Agora
        </div>
        <div className="bg-[#EBF4F4] col-start-9 row-start-5 col-span-4 row-span-3">
          Horário Atual
        </div>
        <div className="bg-[#EBF4F4] col-span-8 row-span-5">
          Calendário
        </div>
        <div className="bg-[#EBF4F4] col-span-4 row-span-5">
          Vazio (Não Definido)
        </div>
      </div>
    </main>
  );
}
