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
		formActionUrl
	} = useAllowlist(joinAllowlistType)
	return (
		<Modal open={!!joinAllowlistType} onClose={() => setJoinAllowlistType(undefined)}>
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
					<h2>Join Allowlist</h2>
					<label>Email</label>
					<Input
						name="EMAIL"
						type="email"
						required
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<label>ETH Wallet Addrsss</label>
					<Input
						name="WALLET"
						type="text"
						required
						value={wallet}
						onChange={event => setWallet(event.target.value)}
					/>
					<label>Social Media</label>
					<Input
						placeholder="(Twitter/Facebook/anything)"
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
