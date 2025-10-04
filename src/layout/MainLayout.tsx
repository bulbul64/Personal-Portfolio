import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

export default function MainLayout() {
  return (
    <div className="bg-[#0A0A0A] w-full">
      <div className=" text-white font-inter max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="min-h-screen">
          {/* Nested routes এখানে render হবে */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
