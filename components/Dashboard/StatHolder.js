export const StatHolder = ({ value, growth }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <p className="text-3xl poppins-medium">{value}</p>
      <div
        className={`px-3 py-1 rounded-lg ${
          growth.includes("-")
            ? "bg-red-200/70 text-red-600"
            : "bg-green-200/70 text-green-600"
        }`}
      >
        <p className="text-xs">{growth}</p>
      </div>
    </div>
  );
};
