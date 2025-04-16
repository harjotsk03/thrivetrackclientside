import { TeamCard } from "./TeamCard";

export const Teams = () => {
  return (
    <div className="col-span-1 row-span-2 bg-white rounded-xl p-4 overflow-hidden">
      <h2 className="text-lg poppins-medium">Teams</h2>
      <div className="flex flex-col gap-2 mt-2 overflow-auto scrollbar-hide pb-20 h-full">
        <TeamCard name="Software Engineering" navigate={() => {}} />
        <TeamCard name="Product Design" navigate={() => {}} />
        <TeamCard name="Product Management" navigate={() => {}} />
        <TeamCard name="Marketing" navigate={() => {}} />
        <TeamCard name="Sales" navigate={() => {}} />
        <TeamCard name="Customer Success" navigate={() => {}} />
        <TeamCard name="People and Culture" navigate={() => {}} />
        <TeamCard name="Engineering Operations" navigate={() => {}} />
      </div>
    </div>
  );
};
