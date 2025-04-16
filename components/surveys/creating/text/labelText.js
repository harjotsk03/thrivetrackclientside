export default function TextInput({ forLabel, label, className }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={forLabel}
        className={`text-base poppins-regular ${className}`}
      >
        {label}
      </label>
    </div>
  );
}
