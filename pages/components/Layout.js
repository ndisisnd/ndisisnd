import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="px-12 sm:px-36 md:px-48 lg:px-84 xl:px-96">
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}

// <div className=" md:pl-12 lg:pl-20 flex flex-col gap-4 md:gap-12 lg:gap-16 xl:gap-24 "></div>
