export default function ShortAnswerQuestion({ question }) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm poppins-regular">{question.question}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((option, index) => (
          <button key={index} className="text-sm poppins-regular">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
