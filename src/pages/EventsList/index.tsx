import {parse} from "query-string"
import {FunctionComponent} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import SubscribeForm from "../../components/Subscribe"
import {useEvents} from "../../hooks/useAddEvent"
import {getDateReadable, isEventUpcoming} from "../../utils"
import "./index.scss"

const EventsList: FunctionComponent = () => {
	const navigate = useNavigate()
	const {search} = useLocation()
	const {sort} = parse(search)
	const {events} = useEvents({sort})

	return (
		<main className="events-list-page">
			{events.map(event => (
				<section
					className="events-list-page__item"
					key={event.id}
					onClick={() => navigate(`/events/${event.id}`)}
				>
					<div className="events-list-page__item-col">
						{event.custom_data?.bannerSrc ? (
							<img src={event.custom_data?.bannerSrc} alt={event.title} />
						) : (
							<ImagePlaceholder />
						)}
					</div>
					<div className="events-list-page__item-col">
						<h1>
							{event.title} <br /> {getDateReadable(event)}
						</h1>
						<div className="events-list-page__item-col-hosted-by">
							<p>Hosted by:</p>
							<h2>{event.location}</h2>
						</div>
						<p className="events-list-page__item-col-description">{event.description}</p>
						{isEventUpcoming(event) && <Button>RSVP</Button>}
					</div>
				</section>
			))}
			<SubscribeForm />
		</main>
	)
}

export default EventsList
