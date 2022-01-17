import {FunctionComponent, ReactElement} from "react"
import {ReactComponent as DiscordIcon} from "../../../assets/icons/discord-grayscale.svg"
import {ReactComponent as StarIcon} from "../../../assets/icons/star.svg"
import {ReactComponent as TwitterIcon} from "../../../assets/icons/twitter-grayscale.svg"
import Button from "../../Button"
import ImagePlaceholder from "../../ImagePlaceholder"
import "./steps.scss"

const Phase: FunctionComponent<{title: string; subTitle?: string; content?: ReactElement}> = ({
	title,
	subTitle,
	children,
	content
}) => (
	<section className="phase">
		<section className="phase__content">
			{subTitle && <h3>{subTitle}</h3>}
			<h1>{title}</h1>
			{content}
		</section>
		{children}
	</section>
)

export const GenesisStep: FunctionComponent = () => (
	<Phase
		title={`Where We're Going`}
		content={
			<>
				<p className="bold">
					Ran as truly decentralized autonomous organization (DAO), we are a community of
					collectors, artists, technologists, and dreamers - curating our own journey and
					experiences every step of the way.
				</p>
				<p className="bold">
					With the backing of extensive Ethereum core developer experience, access to the most
					cutting-edge DAO tooling, artists from around the globe, and an exciting physical space
					(with more to come), Seker Factory aims to explore the leisure of an intergalactic cruise
					ship, the boundaries between the digital and physical, the promotion and expansion of the
					creative commons and public goods, and the technological advancement within the NFT and
					DAO ecosystem.
				</p>
				<div className="genesis-step__buttons">
					<Button>
						<DiscordIcon height="20px" width="20px" />
						Join the Community
					</Button>
					<Button>
						<TwitterIcon height="20px" width="20px" />
						Follow Us on Twitter
					</Button>
				</div>
				<p>
					For inquiries, email as at{" "}
					<a href="mailto:info@sekerfactory.com">info@sekerfactory.com</a>
				</p>
			</>
		}
	/>
)

export const PhaseZero: FunctionComponent = () => (
	<Phase
		title="Where We Are"
		subTitle="Phase 0 | January 2022"
		content={
			<>
				<p className="bold">
					We have secured a 4000 sq ft location in the bustling heart of Downtown Los Angeles to
					serve as our first official Seker Factory(001), with ambitions for the space to become an
					exceptionally immersive digital art gallery, a pioneering hackerspace / artist studio, an
					exciting events venue, and much more
				</p>
				<p className="bold">
					{`While we have completed construction upgrade to the venue and have started designing out the
	space (including the installation of state-of-the-art sound systems and digital displays), we
	intend to continue expanding this creative center and its digital experiences with the help of
	our community's innovative input.`}
				</p>
				<ul>
					<li>
						<div className="phase__content-icon">
							<StarIcon width="20px" height="20px" />
						</div>
						Are you a digital artist looking for a gallery where you can truly stretch your creative
						choops, co-own, and help build from the ground-up?
					</li>
					<li>
						<div className="phase__content-icon">
							<StarIcon width="20px" height="20px" />
						</div>
						Are you a futurist wanting to learn, explore, and collaborate on leading-edge technology
						in the new digital age?
					</li>
					<li>
						<div className="phase__content-icon">
							<StarIcon width="20px" height="20px" />
						</div>
						Are you a patron of digital art...a supporter of the creative commons? <br />
						{`Do you have some
		ideas you'd like to see come to life?`}
					</li>
				</ul>
			</>
		}
	>
		<section className="phase__video-tour">
			<ImagePlaceholder />
			<div className="phase__video-tour-content">
				<h1>Take a Virtual 360° Tour!</h1>
				<p>
					If you would like an in-person walkthrough, <br />
					feel free to reach out to set up an appointment.
				</p>
			</div>
		</section>
	</Phase>
)

export const PhaseOne: FunctionComponent = () => (
	<Phase
		title={`Let's Get Started`}
		subTitle="Phase 1 | Q1 of 2022(In Progress)"
		content={
			<>
				<p className="bold">
					In early-February, Seker Factory 001 will be hosting recurring min events / meet-ups.
				</p>
				<p className="bold">In early-February, we will be releasing our NFT Clearance Card sale.</p>
				<p className="bold">{`On Feb 25-26, Seker Factory will be hosting our first "Post ETHDenver Defrost" event.`}</p>
				<p>
					Join us for two days of networking, workshops, after-hours partying, cult-classing
					back-to-back feature movie night, food and refreshments, and much more. This will be a
					free event (RSVP required due to venue capacity).
				</p>
				<p className="bold">
					In early-March, Seker Factory 001 will be having our official grand opening exhibition
					event.
				</p>
			</>
		}
	/>
)

export const PhaseTwo: FunctionComponent = () => (
	<Phase
		title="Community Building"
		subTitle="Phase 2 | Q2 of 2022"
		content={
			<>
				<p className="bold">
					In early-April, Seker Factory 001 will be releasing its official generative NFT series
					sale.
				</p>
				<p className="bold">
					In early-April, the Seker Factory 001 community will help determine the structure of the
					DAO as well as help design the tokenomics <br /> (moving from NFT governance to an ERC-20
					governance.)
				</p>
				<p className="bold">
					As a community, we will also be deciding on additional visual components at Seker Factory
					001 as well as planning out the next big events.
				</p>
				<p className="bold">
					In early-May, the community will vote on the location and roadmap for the expansion of
					Seker Facrtory into its next city (002).
				</p>
				<p className="bold">More to come!</p>
			</>
		}
	/>
)

export const PhaseThree: FunctionComponent = () => (
	<Phase
		title="Upward and Onward"
		subTitle="Phase 3 | Q3 of 2022 and Beyond"
		content={
			<>
				<p className="bold">
					An additional Seker Factory location will be added, estimated every 6 months.
				</p>
				<p className="bold">More to come!</p>
			</>
		}
	/>
)
