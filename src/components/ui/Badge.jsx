export default function Badge({ badgeText, className }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-indigo-50 px-2 py-1 text-xs font-bold text-indigo-700 ring-1 ring-inset ring-indigo-700/10 ${className}`}
    >
      {badgeText}
    </span>
  );
}
