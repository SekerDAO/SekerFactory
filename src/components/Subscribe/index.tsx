import {FunctionComponent} from "react"
import Button from "../Button"
import Input from "../Input"
import useSubscribeForm from "./hooks"
import "./index.scss"

const SubscribeForm: FunctionComponent = () => {
	const {email, formActionUrl, handleSubmit, setEmail, success, error} = useSubscribeForm()
	return (
		<section className="subscribe">
			{!success && <h1>Keep in Touch for Future Events</h1>}
			{success ? (
				<section className="subscribe__success-message">
					<h2>Success!</h2>
					<p>You have successfully subscribed to our newsletter.</p>
				</section>
			) : (
				<form
					className="subscribe__input-container"
					action={formActionUrl}
					method="get"
					onSubmit={handleSubmit}
				>
					<Input
						placeholder="Enter your email"
						borders="bottom"
						name="EMAIL"
						type="email"
						required
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<Button variant="secondary" type="submit">
						Join Now
					</Button>
					{error && <p className="subscribe__error">{error}</p>}
				</form>
			)}
		</section>
	)
}

export default SubscribeForm
