import {FunctionComponent} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import Input from "../../components/Input"
import EVENTS from "../../data/events"
import {isEventUpcoming} from "../../utils"
import "./index.scss"

const EventDetails: FunctionComponent = () => {
	const {slug} = useParams()
	const navigate = useNavigate()

	const currentEvent = EVENTS.find(event => event.slug === slug)
	if (!currentEvent) {
		navigate("/404")
		return null
	}
	const isUpcoming = isEventUpcoming(currentEvent)
	return (
		<main className="event-details-page">
			<section className="event-details-page__heading">
				<div className="event-details-page__heading-col">
					{currentEvent.bannerSrc ? (
						<img src={currentEvent.bannerSrc} alt={currentEvent.title} />
					) : (
						<ImagePlaceholder />
					)}
				</div>
				<div className="event-details-page__heading-col">
					<h1>
						{currentEvent.title} <br /> {currentEvent.dateReadable}
					</h1>
					<div className="featured-event__col-hosted-by">
						<p>Hosted by:</p>
						<h2>
							<p>Seker Factory 001</p>
							<p>836 S Los Angeles Street</p>
							<p>Los Angeles, CA 90014</p>
						</h2>
					</div>
					<p className="featured-event__col-description">{currentEvent.description}</p>
					{isUpcoming && <Button>RSVP</Button>}
				</div>
			</section>
			<section className="subscribe">
				<h1>Keep in Touch for Future Events</h1>
				<div className="subscribe__input-container">
					<Input placeholder="Enter your email" borders="bottom" />
					<Button variant="secondary">Join Now</Button>
				</div>
			</section>
		</main>
	)
}

export default EventDetails
