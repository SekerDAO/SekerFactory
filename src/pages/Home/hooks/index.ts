import {ethers} from "ethers"
import {useState, Dispatch, SetStateAction, useCallback, useContext} from "react"
import Web3Modal from "web3modal"
import Ukraine from "../../../abi/Ukraine.json"
import {Web3Context} from "../../../context"

export type AllowlistType = "TOP" | "001" | undefined
type HomePageState = {
	viewScheduleOpen: boolean
	joinAllowlistType: AllowlistType
	setViewScheduleOpen: Dispatch<SetStateAction<boolean>>
	setJoinAllowlistType: Dispatch<SetStateAction<AllowlistType>>
	mintValue: string
	setMintValue: Dispatch<SetStateAction<string>>
	onPurchase: () => Promise<void>
}

const providerOptions = {}

const web3Modal = new Web3Modal({
	network: "mainnet", // optional
	cacheProvider: true, // optional
	providerOptions // required
})

const useHomePage = (): HomePageState => {
	const {web3Context, setWeb3Context} = useContext(Web3Context)
	const [mintValue, setMintValue] = useState<string>("1")
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)
	const [joinAllowlistType, setJoinAllowlistType] = useState<AllowlistType>()

	const onPurchase = useCallback(async () => {
		let signer = null
		if (!web3Context.signer) {
			// sign in
			await web3Modal.clearCachedProvider()
			const instance = await web3Modal.connect()
			const provider = new ethers.providers.Web3Provider(instance)
			signer = provider.getSigner()
			setWeb3Context({instance, signer})
		} else {
			signer = web3Context.signer
		}
		const saleContract = new ethers.Contract(
			"0xb7419c7B3ABcf81666B4eD006fa3503aA14F9588",
			Ukraine.abi,
			signer
		)
		const etherValue = ethers.utils.parseEther("0.05")
		const amount = parseInt(mintValue)
		const value = etherValue.mul(amount)
		await saleContract.mint(amount, {value: value})
		// Do the purchase
	}, [mintValue, web3Context.signer, setWeb3Context])

	return {
		viewScheduleOpen,
		joinAllowlistType,
		setViewScheduleOpen,
		setJoinAllowlistType,
		onPurchase,
		mintValue,
		setMintValue
	}
}

export default useHomePage
