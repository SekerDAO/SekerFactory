import {FunctionComponent} from "react"
import {ReactComponent as ClearanceCardPlaceholder} from "../../assets/icons/clearance-card-placeholder.svg"
import {ReactComponent as DiscordIcon} from "../../assets/icons/discord-grayscale.svg"
import {ReactComponent as DoneCircle} from "../../assets/icons/done-circle.svg"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter-grayscale.svg"
import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import Loading from "../../components/Loading"
import SubscribeForm from "../../components/Subscribe"
import {useEvents} from "../../hooks/useAddEvent"
import {getDateReadable, isEventUpcoming, openRSVPForm} from "../../utils"
import Allowlist from "./components/Allowlist"
import Schedule from "./components/Schedule"
import useHomePage from "./hooks"
import "./index.scss"

const HomePage: FunctionComponent = () => {
	const {viewScheduleOpen, joinAllowlistType, setViewScheduleOpen, setJoinAllowlistType} =
		useHomePage()
	const {events, loading} = useEvents({upcoming: "now"})
	if (loading || !events || !events.length) {
		return <Loading />
	}
	const FEATURED_EVENT = events[0]
	const UPCOMING_EVENTS = events
		.filter(event => event.id !== FEATURED_EVENT.id && isEventUpcoming(event))
		.slice(0, 2)
	return (
		<>
			<Schedule viewScheduleOpen={viewScheduleOpen} setViewScheduleOpen={setViewScheduleOpen} />
			<Allowlist
				joinAllowlistType={joinAllowlistType}
				setJoinAllowlistType={setJoinAllowlistType}
			/>
			<main className="home-page">
				<section className="featured-event">
					<div className="featured-event__col-wrapper">
						<div className="featured-event__col">
							<Image src={FEATURED_EVENT?.custom_data?.bannerSrc} alt={FEATURED_EVENT.title} />
						</div>
						<div className="featured-event__col">
							<h1
								dangerouslySetInnerHTML={{
									__html: `${FEATURED_EVENT.title} <br /> ${getDateReadable(FEATURED_EVENT)}`
								}}
							/>
							<div className="featured-event__col-hosted-by">
								<h3>Hosted by:</h3>
								<h2 dangerouslySetInnerHTML={{__html: FEATURED_EVENT.location}} />
							</div>
							<p className="featured-event__col-description">{FEATURED_EVENT.description}</p>
							<Button variant="secondary" onClick={() => setViewScheduleOpen(true)}>
								View Schedule
							</Button>
							<Button onClick={() => openRSVPForm(FEATURED_EVENT)}>RSVP</Button>
						</div>
					</div>
				</section>
				<SubscribeForm />
				<section className="upcoming-events">
					<div className="upcoming-events__header">
						<h3>Upcoming Events</h3>
						<Button variant="link" disabled>
							Previous Events
						</Button>
					</div>
					<section className="upcoming-events__list">
						{UPCOMING_EVENTS.slice(0, 2).map(eventContent => (
							<div className="upcoming-events__list-item" key={eventContent.id}>
								<Image
									alt={eventContent.title}
									src={eventContent?.custom_data?.bannerSrc}
									className="upcoming-events__list-item-banner"
								/>
							</div>
						))}
					</section>
					<section className="upcoming-events__about">
						<h3>
							Seker Factory is building an immersive tech noir of dystopian hangouts - the premier
							spot to adventure from physical to digital. We are gathering like-minded individuals
							to form a global community of digital artists, hackers, avatars, and futurists of all
							kinds to navigate the metaverse.
						</h3>
						<h3 className="purple">Come for the vibes. Stay for the revolution.</h3>
						<h3>
							Co-own our vision of the future, party in dystopia, and build for a wagmi horizon.
						</h3>
						<div className="upcoming-events__about-buttons">
							<Button onClick={() => window.open("https://discord.gg/8BguJkDkkU", "_blank")}>
								<DiscordIcon height="20px" width="20px" />
								Join the Community
							</Button>
							<Button onClick={() => window.open("https://twitter.com/SekerFactory", "_blank")}>
								<TwitterIcon height="20px" width="20px" />
								Follow Us on Twitter
							</Button>
						</div>
						<p>
							For inquiries, email us at{" "}
							<a href="mailto:info@sekerfactory.com">info@sekerfactory.com</a>
						</p>
					</section>
					<section className="upcoming-events__purchase">
						<div className="upcoming-events__purchase-item">
							<div className="upcoming-events__purchase-item-img-container">
								<ClearanceCardPlaceholder width={250} height={250} />
							</div>
							<h3>001 Clearance Cards</h3>
							<p>1000 total</p>
							<p className="upcoming-events__purchase-item-address">
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
									Allowlist to all current and future generative NFT series released by Seker
									Factory 001.
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
							<Button onClick={() => setJoinAllowlistType("001")}>Join Allowlist</Button>
						</div>
						<div className="upcoming-events__purchase-item">
							<div className="upcoming-events__purchase-item-img-container">
								<ClearanceCardPlaceholder width={250} height={250} />
							</div>
							<h3>Top Clearance Cards</h3>
							<p>1000 total</p>
							<p className="upcoming-events__purchase-item-address bold">All Seker Factories</p>
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
							<Button onClick={() => setJoinAllowlistType("top")}>Join Allowlist</Button>
						</div>
					</section>
				</section>
				<section className="about-us">
					<div className="about-us__inner-container">
						<h2>
							Ran as a truly decentralized autonomous organization (DAO), we are a community of
							collectors, artists, technologists, and dreamers — curating our own journey and
							experiences every step of the way.
						</h2>
						<h2>
							With the backing of extensive Ethereum core developer experience, access to the most
							cutting-edge DAO tooling, artists from around the globe, and an exciting physical
							space (with more to come), Seker Factory aims to explore the leisure of an
							intergalactic cruise ship, the boundaries between the digital and physical, the
							promotion and expansion of the creative commons and public goods, and the
							technological advancement within the NFT and DAO ecosystems.
						</h2>
						<ul>
							<li>
								<div className="phase__content-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a digital artist looking for a gallery where you can truly stretch your
								creative chops, co-own, and help build from the ground-up?
							</li>
							<li>
								<div className="phase__content-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a futurist wanting to learn, explore, and collaborate on leading-edge
								technology in the new digital age?
							</li>
							<li>
								<div className="phase__content-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a patron of digital art...a supporter of the creative commons?{" "}
								{`Do you have some ideas you'd like to see come to life?`}
							</li>
						</ul>
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}

export default HomePage
