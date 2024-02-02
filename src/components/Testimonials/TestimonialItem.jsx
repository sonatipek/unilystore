import { UserCircleIcon } from "@heroicons/react/24/solid";
import Rating from "../ui/Rating";

export default function TestimonialItem({ testimonialContent }) {
  const { name, comment, rate } = testimonialContent;
  return (
    <li className="px-6 py-5 bg-indigo-700 rounded-lg snap-start snap-always min-w-full sm:min-w-[50%] lg:min-w-[33%] relative overflow-hidden group">
      <div className="rounded-full w-96 h-96 bg-indigo-800 absolute -left-60 -bottom-32 opacity-30 group-hover:scale-[3.1] transition-transform duration-1000 delay-75"></div>
      <div className="flex gap-5 items-center justify-start mb-3">
        <UserCircleIcon className="size-12 fill-slate-50" />
        <h1 className="leading-relaxed text-3xl font-light text-slate-100">
          {name}
        </h1>
      </div>
      <p className="w-full text-balance text-slate-200">{comment}</p>
      <Rating rate={rate} className="mt-5" />
    </li>
  );
}
