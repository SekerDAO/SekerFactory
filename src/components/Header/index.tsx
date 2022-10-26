import {useContext, FunctionComponent, PropsWithChildren} from "react"
import {useNavigate, Link} from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import Button from "../../components/Button"
import {Web3Context} from "../../context"
import useMediaQuery from "../../hooks/useMediaQuery"
import useResetScroll from "../../hooks/useResetScroll"
import Grid from "../Grid"
import Image from "../Image"
import "./index.scss"

const Header: FunctionComponent<PropsWithChildren<unknown>> = () => {
	const {address, walletConnected, signIn} = useContext(Web3Context)
	const navigate = useNavigate()
	const isMobile = useMediaQuery("(max-width: 1039px)")
	useResetScroll()

	const connectButton = (
		<Button onClick={signIn} disabled={walletConnected}>
			{address ?? "Connect Wallet"}
		</Button>
	)

	return (
		<header className="header">
			<Grid container className="header__inner-container">
				<div className="header__logo-container" onClick={() => navigate("/")}>
					<Image
						src={logo}
						className="header__logo"
						alt="logo"
						width={isMobile ? "auto" : 230}
						height={isMobile ? 30 : 40}
					/>
					{isMobile && connectButton}
				</div>
				<nav className="header__nav">
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<a href="https://seker-factory-dao.gitbook.io/" target="_blank" rel="noreferrer">
								Litepaper
							</a>
						</li>
						{!isMobile && <li>{connectButton}</li>}
					</ul>
				</nav>
			</Grid>
		</header>
	)
}

export default Header
