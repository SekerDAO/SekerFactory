import {FunctionComponent} from "react"
import {UPCOMING_EVENTS} from "../../data/events"
import Button from "../Button"

const HomePage: FunctionComponent = () => (
	<main>
		<section className="upcoming-events">
			<div className="upcoming-events-header">
				<h2>Upcoming Events</h2>
				<Button variant="link">Previous Events</Button>
			</div>
		</section>
		<div className="app__footer-upcoming-events-list">
			{UPCOMING_EVENTS.map(eventContent => (
				<div className="app__footer-upcoming-events-list-item" key={eventContent.slug}>
					<img
						alt={eventContent.title}
						src={eventContent.bannerSrc}
						className="app__footer-upcoming-events-list-item-banner"
					/>
				</div>
			))}
		</div>
	</main>
)

export default HomePage
