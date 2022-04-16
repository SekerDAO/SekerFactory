import {Dispatch, FunctionComponent, SetStateAction, FormEventHandler} from "react"
import Button from "../../../../components/Button"
import Copy from "../../../../components/Copy"
import Input from "../../../../components/Input"
import Modal from "../../../../components/Modal"
import {ClearanceCardType} from "../../hooks"
import "./index.scss"

const BuyClearanceCard: FunctionComponent<{
	buyingClearanceCardType: "TOP" | "001" | undefined
	setBuyingClearanceCardType: Dispatch<SetStateAction<ClearanceCardType>>
	clearanceCardMintValue: string
	setClearanceCardMintValue: Dispatch<SetStateAction<string>>
	onPurchaseClearanceCard: () => Promise<void>
	onPurchaseTopClearanceCard: () => Promise<void>
	processing: boolean
}> = ({
	buyingClearanceCardType,
	setBuyingClearanceCardType,
	clearanceCardMintValue,
	setClearanceCardMintValue,
	onPurchaseClearanceCard,
	onPurchaseTopClearanceCard,
	processing
}) => {
	const isTopCard = buyingClearanceCardType === "TOP"
	const title = isTopCard ? "Top Clearance Cards" : "001 Clearance Cards"
	const clearanceCardIntValue = parseInt(clearanceCardMintValue)

	const handleClose = () => {
		setBuyingClearanceCardType(undefined)
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		if (!isTopCard) {
			await onPurchaseClearanceCard()
		} else {
			await onPurchaseTopClearanceCard()
		}
	}
	return (
		<Modal open={!!buyingClearanceCardType} onClose={handleClose}>
			<form className="buy-clearance-card" onSubmit={handleSubmit}>
				<h2>Buy ({title})</h2>
				<label>Amount</label>
				<Input
					min={1}
					step={1}
					name="amount"
					type="number"
					required
					value={clearanceCardMintValue}
					onChange={event => setClearanceCardMintValue(event.target.value)}
				/>
				<Copy>Price per item: {isTopCard ? 0.5 : 0.15} (ETH)</Copy>
				<Copy>Total: {clearanceCardIntValue * (isTopCard ? 0.5 : 0.15)} (ETH)</Copy>
				<Button
					variant="primary"
					type="submit"
					disabled={processing || !clearanceCardMintValue || clearanceCardIntValue < 1}
				>
					{processing ? "Processing..." : "Mint"}
				</Button>
			</form>
		</Modal>
	)
}

export default BuyClearanceCard
