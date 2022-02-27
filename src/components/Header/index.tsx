import BurnerConnectProvider from "@burner-wallet/burner-connect-provider"
// @ts-expect-error module doesn't have types
import MewConnect from "@myetherwallet/mewconnect-web-client"
import Torus from "@toruslabs/torus-embed"
import WalletConnectProvider from "@walletconnect/web3-provider"
import Authereum from "authereum"
// @ts-expect-error module doesn't have types
import ethProvider from "eth-provider"
import {ethers} from "ethers"
import {useContext, useEffect, useState, FunctionComponent, useCallback} from "react"
import {useNavigate} from "react-router-dom"
import Web3Modal from "web3modal"
import logo from "../../assets/images/logo.svg"
import Button from "../../components/Button"
import config from "../../config/infura"
import {Web3Context} from "../../context"
import useResetScroll from "../../hooks/useResetScroll"
import Image from "../Image"
import "./index.scss"

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: config.INFURA_ID // required
		}
	},
	torus: {
		package: Torus
	},
	authereum: {
		package: Authereum
	},
	frame: {
		package: ethProvider
	},
	burnerconnect: {
		package: BurnerConnectProvider
	},
	mewconnect: {
		package: MewConnect,
		options: {
			infuraId: config.INFURA_ID
		}
	}
}

const Header: FunctionComponent = () => {
	const {web3Context, setWeb3Context} = useContext(Web3Context)
	const [buttonText, setButtonText] = useState("Connect")
	const navigate = useNavigate()
	useResetScroll()

	useEffect(() => {
		const getAddress = async () => {
			if (web3Context.signer) {
				setButtonText(await web3Context.signer.getAddress())
			}
		}
		getAddress()
	}, [web3Context, setButtonText])

	const onConnect = useCallback(async () => {
		if (!web3Context.signer) {
			const web3Modal = new Web3Modal({
				network: "mainnet", // optional
				cacheProvider: true, // optional
				providerOptions // required
			})
			// sign in
			await web3Modal.clearCachedProvider()
			const instance = await web3Modal.connect()
			const provider = new ethers.providers.Web3Provider(instance)
			const signer = provider.getSigner()
			setWeb3Context({instance, signer})
		} else {
			setWeb3Context({})
		}
	}, [web3Context.signer, setWeb3Context])

	return (
		<header className="header">
			<div className="header__logo-container" onClick={() => navigate("/")}>
				<Image src={logo} className="header__logo" alt="logo" width={230} height={40} />
				<Button
					style={{
						float: "right",
						verticalAlign: "center",
						textAlign: "right",
						marginRight: 20
					}}
					onClick={onConnect}
				>
					{buttonText}
				</Button>
			</div>
		</header>
	)
}

export default Header
