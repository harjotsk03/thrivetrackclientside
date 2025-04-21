export default function TextInput({ forLabel, label, className, required }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={forLabel}
        className={`text-base poppins-regular flex flex-row gap-0.5 items-start ${className}`}
      >
        {label}
        {required && <span className="text-xs text-red-500">*</span>}
      </label>
    </div>
  );
}
