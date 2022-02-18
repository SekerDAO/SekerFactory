import {Dispatch, FunctionComponent, SetStateAction} from "react"
import Button from "../../../../components/Button"
import Checkbox from "../../../../components/Checkbox"
import Input from "../../../../components/Input"
import Modal from "../../../../components/Modal"
import useAllowlist from "./hooks"
import "./index.scss"

const Allowlist: FunctionComponent<{
	joinAllowlistType: "TOP" | "001" | undefined
	setJoinAllowlistType: Dispatch<SetStateAction<"TOP" | "001" | undefined>>
}> = ({joinAllowlistType, setJoinAllowlistType}) => {
	const {
		email,
		setEmail,
		wallet,
		setWallet,
		error,
		success,
		handleSubmit,
		handleClose,
		formActionUrl,
		shouldSubscribeToNewsletter,
		setShouldSubscribeToNewsletter
	} = useAllowlist({joinAllowlistType, setJoinAllowlistType})
	const title = joinAllowlistType === "001" ? "001 Clearance Cards" : "Top Clearance Cards"
	return (
		<Modal open={!!joinAllowlistType} onClose={handleClose}>
			{success ? (
				<section className="join-allowlist__success-message">
					<h2>Success!</h2>
					<p>You have successfully joined Allowlist ({title}).</p>
				</section>
			) : (
				<form
					className="join-allowlist"
					method="get"
					onSubmit={handleSubmit}
					action={formActionUrl}
				>
					<h2>Join Allowlist ({title})</h2>
					<label>Email</label>
					<Input
						name="EMAIL"
						type="email"
						required
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<label>ETH Wallet Address</label>
					<Input
						placeholder="0x..."
						name="WALLET"
						type="text"
						required
						value={wallet}
						onChange={event => setWallet(event.target.value)}
					/>
					<Checkbox
						label="Sign up for the Seker Factory newsletter to receive updates about our exciting upcoming events, projects, and releases."
						id="subscribe-to-newsletter-checkbox"
						checked={shouldSubscribeToNewsletter}
						onChange={() => setShouldSubscribeToNewsletter(!shouldSubscribeToNewsletter)}
					/>
					<Button variant="primary" type="submit" disabled={!email || !wallet}>
						Join Now
					</Button>
					{error && <p className="join-allowlist__error">{error}</p>}
				</form>
			)}
		</Modal>
	)
}

export default Allowlist
