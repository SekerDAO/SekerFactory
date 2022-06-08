import {ethers, BigNumber} from "ethers"
import {useState, useEffect, Dispatch, SetStateAction, useCallback, useContext} from "react"
import ClearanceCard001 from "../../../../../abi/ClearanceCard001.json"
import TopClearanceCard from "../../../../../abi/TopClearanceCard.json"
import {toastSuccess} from "../../../../../components/Toast"
import config from "../../../../../config/eth"
import {Web3Context} from "../../../../../context"

export type ClearanceCardType = "TOP" | "001" | undefined
type MembershipState = {
	buyingClearanceCardType: ClearanceCardType
	setBuyingClearanceCardType: Dispatch<SetStateAction<ClearanceCardType>>
	clearanceCardMintValue: string
	setClearanceCardMintValue: Dispatch<SetStateAction<string>>
	onPurchaseClearanceCard: () => Promise<void>
	onPurchaseTopClearanceCard: () => Promise<void>
	processingClearanceCardPurchase: boolean
	clearanceCardTotal: number
	topClearanceCardTotal: number
}

const useMembership = (): MembershipState => {
	const {infuraProvider, purchase} = useContext(Web3Context)
	const [processingClearanceCardPurchase, setProcessingClearanceCardPurchase] = useState(false)
	const [clearanceCardMintValue, setClearanceCardMintValue] = useState<string>("1")
	const [buyingClearanceCardType, setBuyingClearanceCardType] = useState<ClearanceCardType>()
	const [clearanceCardTotal, setClearanceCardTotal] = useState(0)
	const [topClearanceCardTotal, setTopClearanceCardTotal] = useState(0)

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

	const purchaseClearanceCardSuccess = async () => {
		toastSuccess(
			`Congratulations! You successfully bought ${
				buyingClearanceCardType === "001" ? "001 Clearance Card" : "Top Clearance Card"
			}. Welcome to the Seker Factory family, dear friend :)`
		)
		await getCardsTotal()
		setBuyingClearanceCardType(undefined)
		setProcessingClearanceCardPurchase(false)
	}

	const onPurchaseClearanceCard = useCallback(async () => {
		setProcessingClearanceCardPurchase(true)
		try {
			const success = await purchase({
				contractAddress: config.CLEARANCE_CARD_001_CONTRACT_ADDRESS,
				abi: ClearanceCard001.abi,
				etherValueString: "0.15",
				mintAmount: clearanceCardMintValue
			})
			if (success) {
				setTimeout(purchaseClearanceCardSuccess, 5000)
			} else {
				setProcessingClearanceCardPurchase(false)
			}
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, purchase])

	const onPurchaseTopClearanceCard = useCallback(async () => {
		setProcessingClearanceCardPurchase(true)
		try {
			const success = await purchase({
				contractAddress: config.TOP_CLEARANCE_CARD_CONTRACT_ADDRESS,
				abi: TopClearanceCard.abi,
				etherValueString: "0.5",
				mintAmount: clearanceCardMintValue
			})
			if (success) {
				setTimeout(purchaseClearanceCardSuccess, 5000)
			} else {
				setProcessingClearanceCardPurchase(false)
			}
		} catch (e) {
			console.error(e)
			setProcessingClearanceCardPurchase(false)
		}
	}, [clearanceCardMintValue, purchase])

	useEffect(() => {
		getCardsTotal()
	}, [])

	return {
		buyingClearanceCardType,
		setBuyingClearanceCardType,
		onPurchaseClearanceCard,
		onPurchaseTopClearanceCard,
		clearanceCardMintValue,
		setClearanceCardMintValue,
		processingClearanceCardPurchase,
		clearanceCardTotal,
		topClearanceCardTotal
	}
}

export default useMembership
