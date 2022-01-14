import {FunctionComponent} from "react"
import Button from "../Button"
import Input from "../Input"
import useSubscribeForm from "./hooks"
import "./index.scss"

const SubscribeForm: FunctionComponent = () => {
	const {email, formActionUrl, handleSubmit, setEmail, success, error, isVisible} =
		useSubscribeForm()
	return (
		<section className={`subscribe${!isVisible ? " subscribe--hidden" : ""}`}>
			<h1>Keep in Touch for Future Events</h1>
			{success ? (
				<p>Success! You are subscribed to our newsletter :)</p>
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
