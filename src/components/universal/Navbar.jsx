import { Link } from "react-router-dom"; // Import Link from React Router

const Navbar = () => {
  return (
    <nav className="rounded-full w-full h-[50px] bg-slate-800 flex justify-between items-center text-white px-4">
      {/* Logo */}
      {/* <h1 className="text-2xl font-bold">BrandLogo</h1> */}

      {/* Navigation Links */}
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="hover:text-green-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/services" className="hover:text-green-500">
            Services
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-green-500">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/contacts" className="hover:text-green-500">
            Contacts
          </Link>
        </li>
      </ul>
      <ul className="flex gap-4">
        <li>
          <Link className="border border-slate-800 text-white bg-slate-800 py-2 px-1">
            Get A Delivery
          </Link>
        </li>
        <li>
          <Link className="border border-slate-800 text-slate-800 py-2 px-1">
            Sponsor Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
