import {Dispatch, FunctionComponent, SetStateAction} from "react"
import Button from "../../../../components/Button"
import Input from "../../../../components/Input"
import Modal from "../../../../components/Modal"
import useAllowlist from "./hooks"
import "./index.scss"

const Allowlist: FunctionComponent<{
	joinAllowlistType: "top" | "001" | undefined
	setJoinAllowlistType: Dispatch<SetStateAction<"top" | "001" | undefined>>
}> = ({joinAllowlistType, setJoinAllowlistType}) => {
	const {
		email,
		setEmail,
		wallet,
		setWallet,
		social,
		setSocial,
		error,
		success,
		handleSubmit,
		handleClose,
		formActionUrl
	} = useAllowlist({joinAllowlistType, setJoinAllowlistType})
	return (
		<Modal open={!!joinAllowlistType} onClose={handleClose}>
			{success ? (
				<section className="join-allowlist__success-message">
					<h2>Success!</h2>
					<p>You have successfully joined Allowlist.</p>
				</section>
			) : (
				<form
					className="join-allowlist"
					method="get"
					onSubmit={handleSubmit}
					action={formActionUrl}
				>
					<h2>
						Join Allowlist (
						{joinAllowlistType === "001" ? "001 Clearance Cards" : "Top Clearance Cards"})
					</h2>
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
					<label>Social Media Link</label>
					<Input
						placeholder="Twitter, Instagram, etc."
						name="SOCIAL"
						type="url"
						required
						value={social}
						onChange={event => setSocial(event.target.value)}
					/>
					<Button variant="primary" type="submit" disabled={!email || !wallet || !social}>
						Join Now
					</Button>
					{error && <p className="join-allowlist__error">{error}</p>}
				</form>
			)}
		</Modal>
	)
}

export default Allowlist
