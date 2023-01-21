import styled from "styled-components"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiLogIn,BiLogOut } from "react-icons/bi";

import {navLinks} from '../../utils/constants'

const NavBar = () => {



  return (
    <NavContainer>
      <div className="nav-main">
        <div className="logo"><span>Pain</span>Day<span>Play</span></div>
        {/* //Todo:mobile menu */}
        <div type="button" className="toggle-btn" > <GiHamburgerMenu /> </div>
          <ul className="links-container" >
            { navLinks.map((l)=>{
              return <li key={ l.id } >
                <Link className="link" to={`${l.url}`} >{ l.text }</Link>
              </li>
            }) }
            {/* //Todo: login/ logout function */}
            <button className="btn" >Login <BiLogIn /></button>                      
          </ul>
      </div>
    </NavContainer>
  )
}

export default NavBar

const NavContainer=styled.nav`
  height: 5rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  position: sticky;
  background: transparent;

  .links-container{
    display: none;
  }
  
  .nav-main{
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  
 
  .toggle-btn{
    font-size: 1.4rem;
  }

  @media  ( min-width:800px ) {

    padding: 0 4rem;

    .links-container{
      display: block;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 50%;
      .link{
        color: var( --headers-color);
        font-size: 1.3rem;
        transition: var( --transition-default);
      }

      .link:hover{
        color: var( --btn-bg-color);
      }
    }
    
    .toggle-btn{
      display: none;
    }
    
    .logo{
      font-size: 3.3rem;
    }
    
  }

`