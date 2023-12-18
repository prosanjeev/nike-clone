import './Navigation.css'

const Navigation = () => {
  return (
    
      <nav className="container">
        <div className="nav-logo">
          <img src="/images/brand_logo.png" alt="" />
        </div>
        <ul>
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>

        <div >
          <button className='nav-btn'>Login</button>
        </div>


      </nav>

   
  )
};

export default Navigation;
