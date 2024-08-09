import Link from "next/link";
import { ThemeToggle } from "../theme/theme-toggle";
import CoffeeButton from "./coffee-button";
import ContactButton from "./contact-button";
import LangSelection from "./lang-selection";
import Logo from "./logo";

const Navigation = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-5">
      <div className="w-full container flex justify-between">
        <Link href="/" className="text-primary" aria-label="Logo">
          <Logo height={80} width={80} />
        </Link>
        <div className="my-auto flex flex-row flex-wrap gap-2 md:gap-4 mr-2 w-full justify-end">
          <LangSelection />
          <ThemeToggle />
          <CoffeeButton />
          <ContactButton />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
