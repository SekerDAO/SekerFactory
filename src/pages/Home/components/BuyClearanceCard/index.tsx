import {
	Dispatch,
	FunctionComponent,
	SetStateAction,
	FormEventHandler,
	useContext,
	PropsWithChildren
} from "react"
import Button from "../../../../components/Button"
import Copy from "../../../../components/Copy"
import Input from "../../../../components/Input"
import Modal from "../../../../components/Modal"
import {Web3Context} from "../../../../context"
import {ClearanceCardType} from "../Membership/hooks"
import "./index.scss"

const BuyClearanceCard: FunctionComponent<
	PropsWithChildren<{
		buyingClearanceCardType: "TOP" | "001" | undefined
		setBuyingClearanceCardType: Dispatch<SetStateAction<ClearanceCardType>>
		clearanceCardMintValue: string
		setClearanceCardMintValue: Dispatch<SetStateAction<string>>
		onPurchaseClearanceCard: () => Promise<void>
		onPurchaseTopClearanceCard: () => Promise<void>
		processing: boolean
	}>
> = ({
	buyingClearanceCardType,
	setBuyingClearanceCardType,
	clearanceCardMintValue,
	setClearanceCardMintValue,
	onPurchaseClearanceCard,
	onPurchaseTopClearanceCard,
	processing
}) => {
	const {ethBalance} = useContext(Web3Context)
	const isTopCard = buyingClearanceCardType === "TOP"
	const title = isTopCard ? "Top Clearance Cards" : "001 Clearance Cards"
	const clearanceCardIntValue = parseInt(clearanceCardMintValue)
	const transactionTotal = clearanceCardIntValue * (isTopCard ? 0.5 : 0.15)

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
				<Copy>Total: {transactionTotal} (ETH)</Copy>
				{ethBalance < transactionTotal && (
					<p className="buy-clearance-card__helper-text">
						{`You don't have enough ETH in your wallet. Your balance is: ${ethBalance.toFixed(
							5
						)} ETH`}
					</p>
				)}
				<Button
					variant="primary"
					type="submit"
					disabled={
						ethBalance < transactionTotal ||
						processing ||
						!clearanceCardMintValue ||
						clearanceCardIntValue < 1
					}
				>
					{processing ? "Processing..." : "Mint"}
				</Button>
			</form>
		</Modal>
	)
}

export default BuyClearanceCard
