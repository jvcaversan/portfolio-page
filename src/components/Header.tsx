import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6 px-8 shadow-xl">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            João Vitor Caversan
          </h1>
          <p className="text-sm text-gray-300 mt-1">
            Desenvolvedor Mobile React Native
          </p>
        </div>
        <Link
          href="https://github.com/jvcaversan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-gray-700 hover:bg-gray-600 transition-colors rounded-lg px-4 py-2 shadow-md"
        >
          <FaGithub className="w-6 h-6" />
          <span className="text-sm font-medium">GitHub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
