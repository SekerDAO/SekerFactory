import {FunctionComponent} from "react"
import {ReactComponent as DiscordIcon} from "../../../../assets/icons/discord-grayscale.svg"
import {ReactComponent as IGIcon} from "../../../../assets/icons/instagram-grayscale.svg"
import {ReactComponent as StarIcon} from "../../../../assets/icons/star.svg"
import {ReactComponent as TwitterIcon} from "../../../../assets/icons/twitter-grayscale.svg"
import Button from "../../../../components/Button"
import Grid from "../../../../components/Grid"
import "./index.scss"

const About: FunctionComponent = () => (
	<Grid Component="section" row className="about">
		<Grid container>
			<Grid row className="about__top">
				<Grid row>
					<Grid size={2} xs={12} sm={12} lg={12} className="about__header">
						<p className="bold">About</p>
					</Grid>
					<Grid size={4} xs={12} sm={12} lg={12} className="about__subheader">
						<h3>
							A DAO for creators.
							<br />
							Come for the vibes.
							<br />
							Stay for the revolution.
						</h3>
					</Grid>
				</Grid>
				<Grid row className="about__content">
					<Grid size={2} xs={12} sm={12} lg={12} />
					<Grid size={4} xs={12} sm={12} lg={12} className="about__col about__col--no-left-gutters">
						<ul>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a digital artist looking for a gallery where a DAO is the curator,
								empowering you as the value creator?
							</li>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a musician looking to be discovered and you want to own and monetize your
								music career with Web3?
							</li>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a builder that wants to work with other skilled builders in the
								entertainment industry?
							</li>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a patron of the arts ... a supporter of the creative commons that wants to
								be involved in your favorite artists careers from the beginning?{" "}
								{`Do you have some ideas you'd like to see come to life?`}
							</li>
						</ul>
					</Grid>
					<Grid size={4} xs={12} sm={12} lg={12} className="about__col">
						<p className="bold">
							In the cradle of civilization Seker was known as the patron of builders, craftsmen,
							and sacred objects -- standing at the crossroads of the physical world and the spirit
							world. Today, Seker Factory DAO gathers creators to connect, learn, and build together
							in order to disrupt culture through supporting public goods and decentralized
							curation.
						</p>
						<a
							className="learn-more-link"
							href="https://sekerfactory.medium.com/welcome-to-seker-factory-dao-c9cb3cfc9d3"
							target="_blank"
							rel="noopener noreferrer"
						>
							Learn More
						</a>
					</Grid>
					<Grid size={2} xs={12} sm={12} lg={12} className="about__col">
						<div className="contact">
							<Button variant="secondary" color="white">
								<a href="https://discord.gg/rju5QnZmpM" target="_blank" rel="noopener noreferrer">
									<DiscordIcon height="20px" width="20px" />
									Join Our Discord
								</a>
							</Button>
							<Button variant="secondary" color="white">
								<a
									href="https://twitter.com/SekerFactory"
									target="_blank"
									rel="noopener noreferrer"
								>
									<TwitterIcon height="20px" width="20px" />
									Follow Our Twitter
								</a>
							</Button>
							<Button variant="secondary" color="white">
								<a
									href="https://www.instagram.com/sekerfactory/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<IGIcon height="20px" width="20px" />
									Follow Our IG
								</a>
							</Button>
						</div>
						<p className="contact__email">
							For inquiries, email us at{" "}
							<a href="mailto:info@sekerfactory.com">info@sekerfactory.com</a>
						</p>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Grid>
)

export default About
