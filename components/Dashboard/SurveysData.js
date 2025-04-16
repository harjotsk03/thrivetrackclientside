import { NoSurveysCard } from "./NoSurveysCard";

export const SurveysData = () => {
  return (
    <div className="col-span-1 row-span-3 bg-white rounded-xl p-4 overflow-auto">
      <h2 className="text-lg poppins-medium">Created Surveys</h2>
      <div className="flex flex-col gap-2 w-full h-[93%] m-auto justify-center items-center">
        <NoSurveysCard />
      </div>
    </div>
  );
};
