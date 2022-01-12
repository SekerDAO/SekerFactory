import {parse} from "query-string"
import {FunctionComponent} from "react"
import {useLocation, useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import SubscribeForm from "../../components/Subscribe"
import EVENTS from "../../data/events"
import {isEventUpcoming} from "../../utils"
import "./index.scss"

const EventsList: FunctionComponent = () => {
	const navigate = useNavigate()
	const {search} = useLocation()
	const {sort} = parse(search)
	const sortedEvents = EVENTS.sort((a, b) => {
		if (sort === "asc") {
			return a.date.getTime() - b.date.getTime()
		}
		return b.date.getTime() - a.date.getTime()
	})

	return (
		<main className="events-list-page">
			{sortedEvents.map(event => (
				<section
					className="events-list-page__item"
					key={event.slug}
					onClick={() => navigate(`/events/${event.slug}`)}
				>
					<div className="events-list-page__item-col">
						{event.bannerSrc ? (
							<img src={event.bannerSrc} alt={event.title} />
						) : (
							<ImagePlaceholder />
						)}
					</div>
					<div className="events-list-page__item-col">
						<h1>
							{event.title} <br /> {event.dateReadable}
						</h1>
						<div className="events-list-page__item-col-hosted-by">
							<p>Hosted by:</p>
							<h2>
								<p>Seker Factory 001</p>
								<p>836 S Los Angeles Street</p>
								<p>Los Angeles, CA 90014</p>
							</h2>
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
