import BurnerConnectProvider from "@burner-wallet/burner-connect-provider"
// @ts-expect-error module doesn't have types
import MewConnect from "@myetherwallet/mewconnect-web-client"
import Torus from "@toruslabs/torus-embed"
import WalletConnectProvider from "@walletconnect/web3-provider"
import Authereum from "authereum"
// @ts-expect-error module doesn't have types
import ethProvider from "eth-provider"
import Web3Modal from "web3modal"
import infuraConfig from "./infura"

export default {
	CLEARANCE_CARD_001_CONTRACT_ADDRESS: "0xF03c626Bc5E28fD1F1e1cDEbAE32c4b3323aCa8e",
	TOP_CLEARANCE_CARD_CONTRACT_ADDRESS: "0xddD611f02695eBc4a2f2DcBb1553Dab1f9Cdb7dB",
	SUPPORT_UKRAINE_CONTRACT_ADDRESS: "0xb7419c7B3ABcf81666B4eD006fa3503aA14F9588"
}

const providerOptions = {
	walletconnect: {
		package: WalletConnectProvider, // required
		options: {
			infuraId: infuraConfig.INFURA_ID // required
		},
		display: {
			description:
				"Scan with WalletConnect to connect. Use it on mobile to connect with Metamask mobile app"
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
			infuraId: infuraConfig.INFURA_ID
		}
	}
}

export const web3Modal = new Web3Modal({
	network: "mainnet",
	cacheProvider: false,
	providerOptions,
	theme: "dark"
})
