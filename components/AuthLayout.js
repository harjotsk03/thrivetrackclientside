import AuthNav from "./AuthNav";
import AuthTopBar from "./AuthTopBar";
import { useProfile } from "../hooks/useProfile";
import { useRouter } from "next/router";

export default function AuthLayout({ children }) {
  const { profile, loading } = useProfile();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profile) {
    router.push("/application/login");
    return <div>No profile found</div>;
  }

  if (profile) {
    console.log(profile);
  }

  return (
    <div className="flex">
      <AuthNav />
      <AuthTopBar />
      <main className="flex-1 max-h-screen lg:ml-96 px-2 lg:px-7 fade-in-down overflow-y-hidden">
        {children}
      </main>
    </div>
  );
}
