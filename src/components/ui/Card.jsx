export default function Card({children}) {
  return (
    <div className="border rounded-lg shadow-md shadow-slate-300 cursor-pointer group bg-slate-100">
      {children}
    </div>
  );
}
