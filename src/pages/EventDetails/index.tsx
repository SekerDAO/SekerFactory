import {FunctionComponent} from "react"
import {useParams, useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import SubscribeForm from "../../components/Subscribe"
import {useEvent} from "../../hooks/useAddEvent"
import {EventContent} from "../../types/event"
import {getDateReadable, isEventUpcoming} from "../../utils"
import "./index.scss"

const EventDetails: FunctionComponent = () => {
	const {id} = useParams()
	const navigate = useNavigate()
	const {event, loading} = useEvent(id)

	if (!id) {
		navigate("/404")
		return null
	}
	if (!event && !loading) {
		navigate("/404")
		return null
	}
	const currentEvent = event as EventContent
	const isUpcoming = isEventUpcoming(currentEvent)
	return (
		<main className="event-details-page">
			<section className="event-details-page__heading">
				<div className="event-details-page__heading-col">
					{currentEvent.custom_data?.bannerSrc ? (
						<img src={currentEvent.custom_data?.bannerSrc} alt={currentEvent.title} />
					) : (
						<ImagePlaceholder />
					)}
				</div>
				<div className="event-details-page__heading-col">
					<h1>
						{currentEvent.title} <br /> {getDateReadable(currentEvent)}
					</h1>
					<div className="event-details-page__heading-col-hosted-by">
						<p>Hosted by:</p>
						<h2>{currentEvent.location}</h2>
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
