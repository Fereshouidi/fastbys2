import { diffieHellman } from "crypto"
import Link from "next/link"
import logoJPG from "../images/logo.png"
import '../header.css';


type headerParams = {
    logoJPG: string
}

const Header = () => {


    const handleSidebarContener = () => {
        const sidebarContener = document.getElementById('sidebar-contener');
        const sidebar = document.getElementById('sidebar');
        if (!sidebarContener.classList.contains('invisible-v')) {
            sidebarContener.classList.add('invisible-v');
            sidebar.classList.remove('active');
            sidebarContener.classList.remove('sidebar-contener');
            
        } else {
            sidebarContener.classList.remove('invisible-v');
            sidebarContener.classList.add('sidebar-contener');
            sidebar.classList.add('active');
        }
        
        
    }
    

    return (
        <header>
      <div id="logo">
          <img src={logoJPG.src} alt="logo"></img>
          <span>FASTBUY</span>
        </div>
        <div id="navigation">
            <div className="navigation-item" 
                  onClick={handleSidebarContener}>
              <i className="fa-solid fa-bars"></i>
              <span>Menu</span>
            </div>
            <div className="navigation-item">
              <i className="fa-solid fa-magnifying-glass"></i>
              <span>Search</span>
            </div>
            <div className="navigation-item">
              <i className="fas fa-layer-group"></i>
              <span>Categories</span>
            </div>
            <Link href={'/pages/purchase'} className="navigation-item" id="purchase">
              <i className="fa-solid fa-cart-shopping"></i>
              <span>Purchase</span>
              <span id="num">0</span>
            </Link>
            <div id="logo">
          <img src={logoJPG.src} alt="logo"></img>
          <span>FASTBUY</span>
        </div>
        </div>
        <div id="sidebar-contener"
        className="invisible-v"
            onClick={handleSidebarContener}>
        <div className="sidebar" id="sidebar">
          <ul className="sidebar-items">
            <li>
            <i className="fa-solid fa-house"></i>Home</li>
            <Link href={'/pages/purchase'}>
              <li><i className="fa-solid fa-cart-shopping"></i>Purchase</li>
            </Link>
            
            <Link href={'/pages/history'}>
              <li><i className="fas fa-history"></i>History</li>
            </Link>
            
            <Link href={'#about-section'}>
              <li><i className="fas fa-info-circle"></i>About</li>
            </Link>

            <Link href={'#contact-section'}>
              <li><i className="fa-solid fa-address-book"></i>Contact</li>
            </Link>

          </ul>
          <Link href={'/pages/account'}>
          <div id="account-item">
            <i className="fas fa-user"></i>
            <span>Account</span>
          </div></Link>
        </div>
        </div>
      </header>
    )
}

export default Header