import "./menu.css";
import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<div className="menu">
			<Link className="menu-item" to="/links">
				Meus Links
			</Link>
		</div>
	);
};

export default Menu;
