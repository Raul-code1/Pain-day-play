import { MdOutlineClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "../../helpers/styles/MobileMenu.css";
import { navLinks, networksIcons } from "../../utils/constants";
import { closeMenuMobile } from "../../feautres/ui/uiSlice";

const MobileMenu = () => {
  const { isMobileMenuOpen } = useSelector((store) => store.ui);
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
          <Link to={l.url} key={l.id} className="link">
            {l.text}
          </Link>
        ))}
        <a href="#" className="link">
          E-commerce
        </a>
      </div>
      <div className="mobile-auth-btn">
        {/* //todo: auth functionality */}
        <button className="btn">Login</button>
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
