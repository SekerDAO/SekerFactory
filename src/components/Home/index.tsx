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
				<h3>Upcoming Events</h3>
				<Button variant="link">Previous Events</Button>
			</div>
			<section className="upcoming-events__list">
				{UPCOMING_EVENTS.map(eventContent => (
					<div className="upcoming-events__list-item" key={eventContent.slug}>
						{eventContent.bannerSrc ? (
							<img
								alt={eventContent.title}
								src={eventContent.bannerSrc}
								className="upcoming-events__list-item-banner"
							/>
						) : (
							<ImagePlaceholder />
						)}
					</div>
				))}
			</section>
			<section className="upcoming-events__about">
				<p>
					Seker Factory is building an immersive cyber noise of dystopian hangouts - the premier
					spot to fight for our digital future. We are gathering like-minded individuals to form a
					global community of digital artists, hackers, and futurists of all kinds.
				</p>
				<p className="purple">Come for the vibes. Stay for the revolution.</p>
				<p>Come co-own our vision of the future, party in dystopia, and build for wagmi utopia.</p>
			</section>
			<section className="upcoming-events__purchase">
				<div className="upcoming-events__purchase-item">
					<div className="upcoming-events__purchase-item-img-container">
						<ImagePlaceholder />
					</div>
					<h1>General Clearance Cards</h1>
					<p>1000 total</p>
					<p className="upcoming-events__purchase-item-address orange">
						Seker Factory 001 (Downtown Los Angeles)
					</p>
					<ul>
						<li>Lorem Ipsum</li>
					</ul>
					<Button>Purchase</Button>
				</div>
				<div className="upcoming-events__purchase-item">
					<div className="upcoming-events__purchase-item-img-container">
						<ImagePlaceholder />
					</div>
					<h1>Top Clearance Cards</h1>
					<p>1000 total</p>
					<p className="upcoming-events__purchase-item-address orange">All Seker Factories</p>
					<ul>
						<li>Lorem Ipsum</li>
					</ul>
					<Button>Purchase</Button>
				</div>
			</section>
		</section>
	</main>
)

export default HomePage
