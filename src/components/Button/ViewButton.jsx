const ViewButton = ({
  onClick,
  disabled,
  children,
  ariaLabel,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-slate-700 text-white font-semibold px-4 py-2 rounded-md shadow hover:bg-slate-800 disabled:opacity-50 transition ${className}`}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
};

export default ViewButton;
