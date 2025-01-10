import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white py-6 px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">João Vitor Caversan</h1>
          <p className="text-sm text-gray-400">
            Desenvolvedor Mobile React Native
          </p>
        </div>
        <Link
          href="https://github.com/jvcaversan"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
        >
          <Image
            src="/icons/github.svg"
            alt="GitHub"
            width={24}
            height={24}
            className="w-6 h-6"
          />
          <span className="text-sm">GitHub</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
