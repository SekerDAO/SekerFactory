import {ethers} from "ethers"
import {useState, Dispatch, SetStateAction, useCallback, useContext} from "react"
import Web3Modal from "web3modal"
import ClearanceCard001 from "../../../abi/ClearanceCard001.json"
import TopClearanceCard from "../../../abi/TopClearanceCard.json"
import Ukraine from "../../../abi/Ukraine.json"
import {Web3Context} from "../../../context"

export type ClearanceCardType = "TOP" | "001" | undefined
type HomePageState = {
	viewScheduleOpen: boolean
	buyingClearanceCardType: ClearanceCardType
	setViewScheduleOpen: Dispatch<SetStateAction<boolean>>
	setBuyingClearanceCardType: Dispatch<SetStateAction<ClearanceCardType>>
	mintValue: string
	setMintValue: Dispatch<SetStateAction<string>>
	clearanceCardMintValue: string
	setClearanceCardMintValue: Dispatch<SetStateAction<string>>
	onPurchaseSupportUkraine: () => Promise<void>
	onPurchaseClearanceCard: () => Promise<void>
	onPurchaseTopClearanceCard: () => Promise<void>
	processingClearanceCardPurchase: boolean
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
	const [processingClearanceCardPurchase, setProcessingClearanceCardPurchase] = useState(false)
	const [clearanceCardMintValue, setClearanceCardMintValue] = useState<string>("1")
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)
	const [buyingClearanceCardType, setBuyingClearanceCardType] = useState<ClearanceCardType>()

	const signIn = async () => {
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

		return signer
	}
	const onPurchaseSupportUkraine = useCallback(async () => {
		const signer = await signIn()
		try {
			const saleContract = new ethers.Contract(
				"0xb7419c7B3ABcf81666B4eD006fa3503aA14F9588",
				Ukraine.abi,
				signer
			)
			const etherValue = ethers.utils.parseEther("0.05")
			const amount = parseInt(mintValue)
			const value = etherValue.mul(amount)
			await saleContract.mint(amount, {value: value})
		} catch (e) {
			console.error(e)
		}
	}, [mintValue, web3Context.signer, setWeb3Context])

	const onPurchaseClearanceCard = useCallback(async () => {
		const signer = await signIn()
		setProcessingClearanceCardPurchase(true)
		try {
			const saleContract = new ethers.Contract(
				"0x0cB04a31d9c1c6201e7Bb881ECD332241b3d5AFD",
				ClearanceCard001.abi,
				signer
			)
			const etherValue = ethers.utils.parseEther("0.15")
			const amount = parseInt(clearanceCardMintValue)
			const value = etherValue.mul(amount)
			await saleContract.mint(amount, {value})
			setProcessingClearanceCardPurchase(false)
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, web3Context.signer, setWeb3Context])

	const onPurchaseTopClearanceCard = useCallback(async () => {
		const signer = await signIn()
		setProcessingClearanceCardPurchase(true)
		try {
			const saleContract = new ethers.Contract(
				"0x0cB04a31d9c1c6201e7Bb881ECD332241b3d5AFD",
				TopClearanceCard.abi,
				signer
			)
			const etherValue = ethers.utils.parseEther("0.5")
			const amount = parseInt(clearanceCardMintValue)
			const value = etherValue.mul(amount)
			await saleContract.mint(amount, {value})
			setProcessingClearanceCardPurchase(false)
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, web3Context.signer, setWeb3Context])

	return {
		viewScheduleOpen,
		buyingClearanceCardType,
		setViewScheduleOpen,
		setBuyingClearanceCardType,
		onPurchaseSupportUkraine,
		onPurchaseClearanceCard,
		onPurchaseTopClearanceCard,
		mintValue,
		clearanceCardMintValue,
		setMintValue,
		setClearanceCardMintValue,
		processingClearanceCardPurchase
	}
}

export default useHomePage
