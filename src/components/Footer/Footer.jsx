import {
  FaSquareXTwitter,
  FaLinkedin,
  FaSquareGithub,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="border-t mt-24">
      <footer className="flex flex-col lg:flex-row gap-y-5 lg:gap-0 items-center justify-between container mx-auto my-3 lg:my-8 px-12">
        {/* Footer Logo */}
        <a href="/" className="flex items-center justify-center gap-3">
          <img src="/unily_logo.svg" alt="unily logo" className="size-12" />
          <h1 className="text-2xl font-bold text-indigo-950">
            Unily Store
          </h1>
        </a>

        {/* Developer Section */}
        <p className="flex items-center justify-center gap-2">
          Made with ❤ by
          <a href="https://sonatipek.com" target="_blank" rel="noreferrer">
            <img
              src="/sonatipek_logo.svg"
              alt="sonatipek web site logo"
              width={100}
            />
          </a>
        </p>

        {/* Socials */}
        <ul className="flex items-center justify-center gap-4">
          <li className="hover:scale-105 transition-transform duration-300">
            <a
              href="https://github.com/sonatipek"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareGithub className="size-8" />
            </a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a
              href="https://www.linkedin.com/in/sonatipek/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="size-8" />
            </a>
          </li>
          <li className="hover:scale-105 transition-transform duration-300">
            <a
              href="https://www.twitter.com/sonatipek/"
              target="_blank"
              rel="noreferrer"
            >
              <FaSquareXTwitter className="size-8" />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
