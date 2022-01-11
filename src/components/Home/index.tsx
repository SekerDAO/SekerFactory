import {FunctionComponent} from "react"
import {UPCOMING_EVENTS, FEATURED_EVENT} from "../../data/events"
import Button from "../Button"
import ImagePlaceholder from "../ImagePlaceholder"
import Input from "../Input"
import "./index.scss"

const HomePage: FunctionComponent = () => (
	<main className="home-page">
		<section className="featured-event">
			<div className="featured-event__col">
				{FEATURED_EVENT.bannerSrc ? (
					<img src={FEATURED_EVENT.bannerSrc} alt={FEATURED_EVENT.title} />
				) : (
					<ImagePlaceholder />
				)}
			</div>
			<div className="featured-event__col">
				<h1>
					{FEATURED_EVENT.title} <br /> {FEATURED_EVENT.dateReadable}
				</h1>
				<p>Hosted by:</p>
				<h2>
					<p>Seker Factory 001</p>
					<p>836 S Los Angeles Street</p>
					<p>Los Angeles, CA 90014</p>
				</h2>
				<p className="featured-event__col-description">{FEATURED_EVENT.description}</p>
				<Button>RSVP</Button>
			</div>
		</section>
		<section className="subscribe">
			<h1>Keep in Touch for Future Events</h1>
			<div className="subscribe__input-container">
				<Input placeholder="Enter your email" borders="bottom" />
				<Button variant="secondary">Join Now</Button>
			</div>
		</section>
		<section className="upcoming-events">
			<div className="upcoming-events__header">
				<h2>Upcoming Events</h2>
				<Button variant="link">Previous Events</Button>
			</div>
		</section>
		<section className="upcoming-events__list">
			{UPCOMING_EVENTS.map(eventContent => (
				<div className="upcoming-events__list-item" key={eventContent.slug}>
					<img
						alt={eventContent.title}
						src={eventContent.bannerSrc}
						className="upcoming-events__list-item-banner"
					/>
				</div>
			))}
		</section>
	</main>
)

export default HomePage
