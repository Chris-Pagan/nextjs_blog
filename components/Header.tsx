import Link from "next/link";
import Image from "next/image";
import ArtLogo from "../assets/fallingstar.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            height={50}
            width={50}
            src={ArtLogo}
            alt="logo"
          />
        </Link>
        <h2>FallingStar&apos;s Blog</h2>
      </div>

      <div>
        <Link
          href="https://portfolio-chris-pagan.vercel.app"
          className="px-5 py-3 test-sm md:text-base bg-gray-900 text-violet-400 flex items-center rounded-full text-center"
        >Check out my porfolio</Link>
      </div>
    </header>
  );
};

export default Header;
