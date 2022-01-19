import {FunctionComponent} from "react"
import {useNavigate} from "react-router-dom"
import {ReactComponent as DoneCircle} from "../../assets/icons/done-circle.svg"
import Button from "../../components/Button"
import ImagePlaceholder from "../../components/ImagePlaceholder"
import SubscribeForm from "../../components/Subscribe"
import {UPCOMING_EVENTS, FEATURED_EVENT} from "../../data/events"
import "./index.scss"

const HomePage: FunctionComponent = () => {
	const navigate = useNavigate()
	return (
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
					<div className="featured-event__col-hosted-by">
						<h3>Hosted by:</h3>
						<h2>
							Seker Factory 001 <br />
							836 S Los Angeles Street <br />
							Los Angeles, CA 90014
						</h2>
					</div>
					<p className="featured-event__col-description">{FEATURED_EVENT.description}</p>
					<Button>RSVP</Button>
				</div>
			</section>
			<SubscribeForm />
			<section className="upcoming-events">
				<div className="upcoming-events__header">
					<h3>Upcoming Events</h3>
					<Button variant="link" onClick={() => navigate(`/events?sort=asc`)}>
						Previous Events
					</Button>
				</div>
				<section className="upcoming-events__list">
					{UPCOMING_EVENTS.map(eventContent => (
						<div
							className="upcoming-events__list-item"
							key={eventContent.slug}
							onClick={() => navigate(`/events/${eventContent.slug}`)}
						>
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
					<h3>
						Seker Factory is building an immersive tech noir of dystopian hangouts - the premier
						spot to adventure from phsyical to digital. We are gathering like-minded individuals to
						form a global community of digital artists, hackers, avatars, and futurists of all
						kinds.
					</h3>
					<h3 className="purple">Come for the vibes. Stay for the revolution.</h3>
					<h3>
						Come co-own our vision of the future, party in dystopia, and build for a wagmi horizon.
					</h3>
				</section>
				<section className="upcoming-events__purchase">
					<div className="upcoming-events__purchase-item">
						<div className="upcoming-events__purchase-item-img-container">
							<ImagePlaceholder />
						</div>
						<h3>001 Clearance Cards</h3>
						<p>1000 total</p>
						<p className="upcoming-events__purchase-item-address orange">
							<span className="bold">Seker Factory 001</span> (Downtown Los Angeles)
						</p>
						<ul>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								{`Access to all visitor areas at Seker Factory 001 as well as that of future locations
							at a "first come, first serve" basis.`}
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Patron governance rights for Seker Factory 001.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Allowlist to all current and future generative NFT series released by Seker Factory
								001.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Access to all general IRL and metaverse events hosted by Seker Factory 001.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Discounts to Seker Factory 001 merch.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								More to come!
							</li>
						</ul>
						<Button>Purchase</Button>
					</div>
					<div className="upcoming-events__purchase-item">
						<div className="upcoming-events__purchase-item-img-container">
							<ImagePlaceholder />
						</div>
						<h3>Top Clearance Cards</h3>
						<p>1000 total</p>
						<p className="upcoming-events__purchase-item-address orange bold">
							All Seker Factories
						</p>
						<ul>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								{`Access to all visitor areas at all Seker Factory locations with ability to reserve "special" exhibits / experiences.`}
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Patron governance rights for all Seker Factory locations.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Allowlist to all current and future generative NFT series released by all Seker
								Factory locations.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Access to all IRL and metaverse events at all Seker Factory locations, including
								exclusive VIP events.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Free exclusive Seker Factory merch redemption.
							</li>
							<li>
								<div className="upcoming-events__purchace-item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								More to come!
							</li>
						</ul>
						<Button>Purchase</Button>
					</div>
					<section className="upcoming-events__purchase-charity">
						<p>
							15% of DAO treasury generated from Clearance Card sales with go to the following
							foundations:
						</p>
					</section>
				</section>
			</section>
		</main>
	)
}

export default HomePage
