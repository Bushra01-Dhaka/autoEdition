import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-black text-white mt-20">
        <aside>
        <Link className="bg-white rounded-[50px]"><img className="h-[50px] lg:h-[50px] object-cover " src="https://i.ibb.co/GcVLT2h/cover.png" alt="logo" /></Link>
        <p>Where Luxury Meets Performance</p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <Link to='/' className="link link-hover">Home</Link>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        
      </footer>
    </div>
  );
};

export default Footer;
