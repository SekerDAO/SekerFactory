//import WalletConnectProvider from "@walletconnect/web3-provider"
import {ethers} from "ethers"
import {FunctionComponent} from "react"
import {useNavigate} from "react-router-dom"
import Web3Modal from "web3modal"
import logo from "../../assets/images/logo.svg"
import Button from "../../components/Button"
//import config from "../../config/infura"
import useResetScroll from "../../hooks/useResetScroll"
import Image from "../Image"
import "./index.scss"

const providerOptions = {
	// walletconnect: {
	// 	package: WalletConnectProvider, // required
	// 	options: {
	// 		infuraId: config.INFURA_ID // required
	// 	}
	// }
}

const web3Modal = new Web3Modal({
	network: "mainnet", // optional
	cacheProvider: true, // optional
	providerOptions // required
})

const Header: FunctionComponent = () => {
	const navigate = useNavigate()
	useResetScroll()

	return (
		<header className="header">
			<div className="header__logo-container" onClick={() => navigate("/")}>
				<Image src={logo} className="header__logo" alt="logo" width={230} height={40} />
			</div>
			<div
				style={{
					float: "right",
					verticalAlign: "center",
					textAlign: "right"
				}}
			>
				<Button
					onClick={async () => {
						const instance = await web3Modal.connect()
						const provider = new ethers.providers.Web3Provider(instance)
						const signer = provider.getSigner()
						console.log("signer", await signer.getAddress())
					}}
				>
					Connect
				</Button>
			</div>
		</header>
	)
}

export default Header
