import AuthNav from "./AuthNav";
import AuthTopBar from "./AuthTopBar";
export default function AuthLayout({ children }) {
  return (
    <div className="flex">
      <AuthNav />
      <AuthTopBar />
      <main className="flex-1 max-h-screen ml-96 mt-24 px-7 fade-in-down">
        {children}
      </main>
    </div>
  );
}
