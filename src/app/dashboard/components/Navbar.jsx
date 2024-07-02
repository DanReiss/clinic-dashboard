'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const path = usePathname();

  return (
    <aside
      className="relative bg-p_white text-p_black flex flex-col items-center min-w-[15vw] min-h-screen"
      style={{ borderRadius: '0 150px 0 0;' }}
    >
      <div className="self-end mr-12 mt-16 my-8">
        <button type="button" aria-label="Pesquisar" className="p-1 rounded-full mx-1 shadow-inner shadow-gray-400">
          <Image
            src="/icons/search.svg"
            width={25}
            height={25}
            alt="Ícone de uma engrenagem"
          />
        </button>
        <button type="button" aria-label="Notificações" className="p-1 rounded-full mx-1 shadow-inner shadow-gray-400">
          <Image
            src="/icons/notification.svg"
            width={23}
            height={23}
            alt="Ícone de uma engrenagem"
          />
        </button>
        <button type="button" aria-label="Configurações" className="p-1 rounded-full mx-1 shadow-inner shadow-gray-400">
          <Image
            src="/icons/config.svg"
            width={25}
            height={25}
            alt="Ícone de uma engrenagem"
          />
        </button>
      </div>

      <a href="/profile" className="flex flex-col gap-1 my-8 text-center font-medium">
        <Image className="rounded-full border-4 border-p_darkblue" src="/test/profile.jpg" width={165} height={165} alt="foto de perfil do usuário" />
        <h2>Agatha Rebskr</h2>
        <p className="text-p_gray">#3D2Y77</p>
      </a>

      <nav>
        <ul className="text-center flex flex-col gap-5 my-8">
          <li
            style={{ border: path === '/dashboard' && 'solid #D37045', borderWidth: path === '/dashboard' && '0 0 2px 0' }}
          >
            <a href="/dashboard">Dashboard</a>
          </li>
          <li
            style={{ border: path === '/schedule' && 'solid #D37045', borderWidth: path === '/schedule' && '0 0 2px 0' }}
          >
            <a href="/full-schedule">Schedule</a>
          </li>
          <li
            style={{ border: path === '/management' && 'solid #D37045', borderWidth: path === '/management' && '0 0 2px 0' }}
          >
            <a href="/management">Management</a>
          </li>
          <li
            style={{ border: path === '/reports' && 'solid #D37045', borderWidth: path === '/reports' && '0 0 2px 0' }}
          >
            <a href="/reports">Reports</a>
          </li>
        </ul>
      </nav>

      <Image className="absolute bottom-0 w-full max-h-min" src="/images/meshdashboard.png" width={200} height={200} alt="Elemento visual azul" />
    </aside>
  );
}
