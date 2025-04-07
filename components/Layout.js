import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="bg-[#E5E5E5]">
      <Navbar />

      <main>{children}</main>
      <Footer />
    </div>
  );
}
