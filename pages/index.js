import Layout from "../components/Layout";
import Hero from "../components/Home/Hero.js";
import TrustedBy from "../components/Home/TrustedBy";
import EverythingYourNeedToKnow from "../components/Home/EverythingYourNeedToKnow";
import HealthyTeamsOutperform from "../components/Home/HealthyTeamsOutperform";
import JoinNow from "../components/Home/JoinNow";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <TrustedBy />
      <EverythingYourNeedToKnow />
      <HealthyTeamsOutperform />
      <JoinNow />
    </Layout>
  );
}
