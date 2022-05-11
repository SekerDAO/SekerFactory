import {ethers} from "ethers"
import {useContext, useEffect, useState, FunctionComponent, useCallback} from "react"
import {useNavigate, Link} from "react-router-dom"
import logo from "../../assets/images/logo.svg"
import Button from "../../components/Button"
import {web3Modal} from "../../config/eth"
import {Web3Context} from "../../context"
import useMediaQuery from "../../hooks/useMediaQuery"
import useResetScroll from "../../hooks/useResetScroll"
import {formatReadableAddress} from "../../utils"
import Image from "../Image"
import "./index.scss"

const Header: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const {web3Context, setWeb3Context} = useContext(Web3Context)
	const [buttonText, setButtonText] = useState("Connect Wallet")
	const navigate = useNavigate()
	const isMobile = useMediaQuery("(max-width: 1039px)")
	useResetScroll()

	useEffect(() => {
		const getAddress = async () => {
			if (web3Context.signer) {
				setButtonText(formatReadableAddress(await web3Context.signer.getAddress()))
			}
		}
		getAddress()
	}, [web3Context, setButtonText])

	const onConnect = useCallback(async () => {
		if (!web3Context.signer) {
			// sign in
			await web3Modal.clearCachedProvider()
			const instance = await web3Modal.connect()
			const provider = new ethers.providers.Web3Provider(instance)
			const signer = provider.getSigner()
			setWeb3Context({instance, signer})
		}
	}, [web3Context.signer, setWeb3Context])

	const connectButton = (
		<Button onClick={onConnect} disabled={!!web3Context.signer}>
			{buttonText}
		</Button>
	)

	return (
		<header className="header">
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
						<Link to="#">Apply</Link>
					</li>
					<li>
						<Link to="#">Artists</Link>
					</li>
					<li>
						<Link to="#">About</Link>
					</li>
					<li>
						<Link to="#">Contact</Link>
					</li>
					{!isMobile && <li>{connectButton}</li>}
				</ul>
			</nav>
		</header>
	)
}

export default Header
