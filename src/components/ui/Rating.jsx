import { StarIcon } from "@heroicons/react/24/solid";

export default function Rating({ className, rate }) {
  const starClassList = [1, 2, 3, 4, 5];

  return (
    <div className={`flex items-center ${className}`}>
      {starClassList.map((value, index) => {
        if (value <= rate) {
          return <StarIcon key={index} className={`size-5 fill-yellow-500`} />;
        } else {
          return <StarIcon key={index} className={`size-5 fill-slate-300`} />;
        }
      })}
    </div>
  );
}
