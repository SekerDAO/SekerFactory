import {FunctionComponent} from "react"
import {useNavigate} from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import useResetScroll from "../../hooks/useResetScroll"
import "./index.scss"

const Header: FunctionComponent = () => {
	const navigate = useNavigate()
	useResetScroll()
	return (
		<header className="header">
			<div className="header__logo-container" onClick={() => navigate("/")}>
				<img src={logo} className="header__logo" alt="logo" width={230} height={40} />
			</div>
		</header>
	)
}

export default Header
