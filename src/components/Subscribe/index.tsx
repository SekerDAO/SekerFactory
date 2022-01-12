import {FunctionComponent} from "react"
import Button from "../Button"
import Input from "../Input"
import "./index.scss"

const SubscribeForm: FunctionComponent = () => (
	<section className="subscribe">
		<h1>Keep in Touch for Future Events</h1>
		<div className="subscribe__input-container">
			<Input placeholder="Enter your email" borders="bottom" />
			<Button variant="secondary">Join Now</Button>
		</div>
	</section>
)

export default SubscribeForm
