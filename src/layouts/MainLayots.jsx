import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layouts/components/Navbar";
import Footer from "../layouts/components/Footer";

export default function MainLayots() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
