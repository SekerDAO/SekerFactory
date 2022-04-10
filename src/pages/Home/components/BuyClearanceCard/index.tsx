import {Dispatch, FunctionComponent, SetStateAction, FormEventHandler} from "react"
import Button from "../../../../components/Button"
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
}> = ({
	buyingClearanceCardType,
	setBuyingClearanceCardType,
	clearanceCardMintValue,
	setClearanceCardMintValue,
	onPurchaseClearanceCard,
	onPurchaseTopClearanceCard
}) => {
	const handleClose = () => {
		setBuyingClearanceCardType(undefined)
	}
	const handleSubmit: FormEventHandler<HTMLFormElement> = async event => {
		event.preventDefault()
		if (buyingClearanceCardType === "001") {
			await onPurchaseClearanceCard()
		} else {
			await onPurchaseTopClearanceCard()
		}
	}
	const title = buyingClearanceCardType === "001" ? "001 Clearance Cards" : "Top Clearance Cards"
	const clearanceCardIntValue = parseInt(clearanceCardMintValue)
	return (
		<Modal open={!!buyingClearanceCardType} onClose={handleClose}>
			<form className="buy-clearance-card" onSubmit={handleSubmit}>
				<h2>Buy ({title})</h2>
				<label>Amount</label>
				<Input
					min={1}
					max={5}
					name="amount"
					type="number"
					required
					value={clearanceCardMintValue}
					onChange={event => setClearanceCardMintValue(event.target.value)}
				/>
				<Button
					variant="primary"
					type="submit"
					disabled={
						!clearanceCardMintValue || clearanceCardIntValue < 1 || clearanceCardIntValue > 5
					}
				>
					Mint
				</Button>
			</form>
		</Modal>
	)
}

export default BuyClearanceCard
