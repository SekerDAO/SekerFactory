import {FunctionComponent} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import SubscribeForm from "../../components/Subscribe"
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
					<div className="event-details-page__heading-col-hosted-by">
						<p>Hosted by:</p>
						<h2>
							<p>Seker Factory 001</p>
							<p>836 S Los Angeles Street</p>
							<p>Los Angeles, CA 90014</p>
						</h2>
					</div>
					<p className="event-details-page__heading-col-description">{currentEvent.description}</p>
					{isUpcoming && <Button>RSVP</Button>}
				</div>
			</section>
			<SubscribeForm />
		</main>
	)
}

export default EventDetails
