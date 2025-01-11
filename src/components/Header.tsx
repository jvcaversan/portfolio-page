import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          JVC
        </Link>
        <nav className="flex items-center space-x-6">
          <Link
            href="/#about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Sobre Mim
          </Link>
          <Link
            href="/#projects"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projetos
          </Link>
          <Link
            href="/#skills"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Habilidades
          </Link>
          <a
            href="https://github.com/jvcaversan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/joaovitorcaversan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
        </nav>
      </div>
    </header>
  );
}
