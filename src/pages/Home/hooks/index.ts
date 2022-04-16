import {InfuraProvider} from "@ethersproject/providers"
import {ethers, BigNumber} from "ethers"
import {useState, useEffect, Dispatch, SetStateAction, useCallback, useContext} from "react"
import Web3Modal from "web3modal"
import ClearanceCard001 from "../../../abi/ClearanceCard001.json"
import TopClearanceCard from "../../../abi/TopClearanceCard.json"
import Ukraine from "../../../abi/Ukraine.json"
import config from "../../../config/eth"
import infuraConfig from "../../../config/infura"
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
	clearanceCardTotal: number
	topClearanceCardTotal: number
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
	const [clearanceCardTotal, setClearanceCardTotal] = useState(0)
	const [topClearanceCardTotal, setTopClearanceCardTotal] = useState(0)

	const infuraProvider = new InfuraProvider("mainnet", {
		projectId: infuraConfig.INFURA_ID
	})

	const getCardsTotal = async () => {
		const clearanceContract = new ethers.Contract(
			config.CLEARANCE_CARD_001_CONTRACT_ADDRESS,
			ClearanceCard001.abi,
			infuraProvider
		)

		const topClearanceContract = new ethers.Contract(
			config.TOP_CLEARANCE_CARD_CONTRACT_ADDRESS,
			TopClearanceCard.abi,
			infuraProvider
		)
		setClearanceCardTotal(BigNumber.from(await clearanceContract.totalSupply()).toNumber())
		setTopClearanceCardTotal(BigNumber.from(await topClearanceContract.totalSupply()).toNumber())
	}

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

	const purchase = async ({
		contractAddress,
		abi,
		etherValueString,
		mintAmount
	}: {
		contractAddress: string
		abi: ethers.ContractInterface
		etherValueString: string
		mintAmount: string
	}) => {
		const signer = await signIn()
		const saleContract = new ethers.Contract(contractAddress, abi, signer)
		const etherValue = ethers.utils.parseEther(etherValueString)
		const amount = parseInt(mintAmount)
		const value = etherValue.mul(amount)
		await saleContract.mint(amount, {value})
	}

	const purchaseClearanceCardSuccess = async () => {
		await getCardsTotal()
		setBuyingClearanceCardType(undefined)
		setProcessingClearanceCardPurchase(false)
	}

	const onPurchaseSupportUkraine = useCallback(async () => {
		try {
			await purchase({
				contractAddress: config.SUPPORT_UKRAINE_CONTRACT_ADDRESS,
				abi: Ukraine.abi,
				etherValueString: "0.05",
				mintAmount: mintValue
			})
		} catch (e) {
			console.error(e)
		}
	}, [mintValue, web3Context.signer, setWeb3Context])

	const onPurchaseClearanceCard = useCallback(async () => {
		setProcessingClearanceCardPurchase(true)
		try {
			await purchase({
				contractAddress: config.CLEARANCE_CARD_001_CONTRACT_ADDRESS,
				abi: ClearanceCard001.abi,
				etherValueString: "0.15",
				mintAmount: clearanceCardMintValue
			})
			setTimeout(purchaseClearanceCardSuccess, 5000)
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, web3Context.signer, setWeb3Context])

	const onPurchaseTopClearanceCard = useCallback(async () => {
		setProcessingClearanceCardPurchase(true)
		try {
			await purchase({
				contractAddress: config.TOP_CLEARANCE_CARD_CONTRACT_ADDRESS,
				abi: TopClearanceCard.abi,
				etherValueString: "0.5",
				mintAmount: clearanceCardMintValue
			})
			setTimeout(purchaseClearanceCardSuccess, 5000)
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, web3Context.signer, setWeb3Context])

	useEffect(() => {
		getCardsTotal()
	}, [])

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
		processingClearanceCardPurchase,
		clearanceCardTotal,
		topClearanceCardTotal
	}
}

export default useHomePage
