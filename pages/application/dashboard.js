import AuthLayout from "../../components/AuthLayout";
import { ParticipationCard } from "../../components/Dashboard/ParticipationCard";
import { SentimentCard } from "../../components/Dashboard/SentimentCard";
import { BelongingCard } from "../../components/Dashboard/BelongingCard";
import { SurveysData } from "../../components/Dashboard/SurveysData";
import { Teams } from "../../components/Dashboard/Teams";
import { Employees } from "../../components/Dashboard/Employees";
import { DeepDives } from "../../components/Dashboard/DeepDives";

export default function Dashboard() {
  return (
    <AuthLayout>
      <div className="w-full h-screen flex flex-col overflow-hidden mt-24">
        <div className="grid grid-cols-3 grid-rows-4 gap-4 h-5/6">
          <ParticipationCard />
          <SentimentCard />
          <BelongingCard />
          <SurveysData />
          <Teams />
          <Employees />
          <DeepDives />
        </div>
      </div>
    </AuthLayout>
  );
}
