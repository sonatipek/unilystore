import Button from "../ui/Button";
import { CursorArrowRaysIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between container mx-auto mt-12 lg:pl-40 pl-3">
      <div className="lg:w-1/2 w-full pt-5 lg:pt-0">
        <span className="font-medium text-sm text-slate-600">
          Bu sezon herkes sizi konuşacak 🔥
        </span>
        <h2 className="text-4xl sm:text-6xl font-light leading-10 w-2/3">Güvenle alışveriş yapın!</h2>

        <Button
          icon={{ setIcon: <CursorArrowRaysIcon className="size-6" /> }}
          className="mb-3 mt-10 text-xl rounded-lg"
        >
          Şimdi Keşfet
        </Button>
      </div>

      <div className="relative w-1/2 self-start lg:self-baseline ">
        <img
          src="/unily_logo.svg"
          alt="unily logo"
          className="-z-50 blur-3xl opacity-90 absolute md:w-9/12 w-full"
        />
        <img
          src="/unily_hero_image3.png"
          alt="young lady standing with colorful shopping bags hands screaming"
          className=" top-0 right-0 md:w-9/12 w-full"
        />
      </div>
    </section>
  );
}
