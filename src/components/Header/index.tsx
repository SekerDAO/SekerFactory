import {FunctionComponent} from "react"
import logo from "../../assets/images/logo.svg"
import "./index.scss"

const Header: FunctionComponent = () => (
	<header className="header">
		{" "}
		<div className="header__logo-container">
			<img src={logo} className="header__logo" alt="logo" width={230} height={30} />
		</div>
	</header>
)

export default Header
