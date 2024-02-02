import Badge from "./Badge";

export default function Button({
  children,
  badge,
  icon,
  className,
  onClick,
  buttonType,
  disabled,
}) {
  return (
    <button
      className={`flex items-center justify-center gap-2 font-semibold text-lg text-slate-50 bg-indigo-500  px-10 py-1.5 border border-indigo-500 transition duration-300 hover:scale-95 disabled:grayscale disabled:hover:scale-100 disabled:cursor-not-allowed ${className}`}
      type={!buttonType ? "button" : buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="inline-flex">{icon.setIcon}</span>}

      <span className="relative">
        {children}

        {badge && (
          <Badge
            badgeText={badge.initialValue}
            className="absolute -right-5 -top-1"
          />
        )}
      </span>
    </button>
  );
}
