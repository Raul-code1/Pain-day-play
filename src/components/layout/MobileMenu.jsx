import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../helpers/styles/MobileMenu.css";
import { navLinks, networksIcons } from "../../utils/constants";
import { closeMenuMobile } from "../../feautres/ui/uiSlice";
import { logout } from "../../feautres/user/userSlice";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useSelector((store) => store.ui);
  const { user,isUserLoggedOut } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  return (
    <div className={`${isMobileMenuOpen && "open-menu"}  mobile-menu  `}>
      <div
        className="close-mobile-menu-btn"
        onClick={() => dispatch(closeMenuMobile())}
      >
        <MdOutlineClose />
      </div>
      <div className="mobile-menu-links">
        {navLinks.map((l) => (
          <Link
            to={l.url}
            key={l.id}
            className="link"
            onClick={() => dispatch(closeMenuMobile())}
          >
            {l.text}
          </Link>
        ))}
        {user && isUserLoggedOut!=='logout' && (
          <Link to="/profile" className="link" onClick={() => dispatch(closeMenuMobile())}>
            Perfil
          </Link>
        )}
        <a
          href="https://google.com"
          target="_blank"
          className="link"
          onClick={() => dispatch(closeMenuMobile())}
        >
          E-commerce
        </a>
      </div>
      <div className="mobile-auth-btn">
        {user && isUserLoggedOut!=='logout' ? (
          <Link to='/' className="btn" onClick={() => {
            dispatch(closeMenuMobile())
            dispatch(logout('Nos vemos pronto 🚀'))
          }} >Logout</Link>
        ) : (
          <Link
            className="btn"
            to="/register"
            onClick={() => dispatch(closeMenuMobile())}
          >
            Login
          </Link>
        )}
      </div>
      <hr />
      <div className="network-icons-mobile">
        {networksIcons.map((icon, i) => (
          <a href="#" key={i} className="link">
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
