import {FunctionComponent} from "react"
import Button from "../Button"
import Input from "../Input"
import useSubscribeForm from "./hooks"
import "./index.scss"

const SubscribeForm: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const {email, formActionUrl, handleSubmit, setEmail, success, error} = useSubscribeForm()
	return (
		<section className="subscribe">
			{!success && <h1>Stay in the loop. Sign up for our newsletter!</h1>}
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
						placeholder="Email Address"
						borders="bottom"
						name="EMAIL"
						type="email"
						required
						value={email}
						onChange={event => setEmail(event.target.value)}
					/>
					<Button variant="primary" type="submit">
						Sign Up
					</Button>
					{error && <p className="subscribe__error">{error}</p>}
				</form>
			)}
		</section>
	)
}

export default SubscribeForm
