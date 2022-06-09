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
								Are you a digital artist looking for a gallery where you can truly stretch your
								creative chops, co-own, and help build from the ground-up?
							</li>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a futurist wanting to learn, explore, and collaborate on leading-edge
								technology in the new digital age?
							</li>
							<li>
								<div className="about__col-perk-icon">
									<StarIcon width="20px" height="20px" />
								</div>
								Are you a patron of digital art ... a supporter of the creative commons?{" "}
								{`Do you have some ideas you'd like to see come to life?`}
							</li>
						</ul>
					</Grid>
					<Grid size={4} xs={12} sm={12} lg={12} className="about__col">
						<p className="bold">
							In the cradle of civilization Seker was known as the patron of builders, craftsmen,
							and sacred objects. It stood at the crossroads of the physical world and the spirit
							world. Today, Seker Factory is a bridge between our tangible reality and the metaverse
							where creators gather to connect, learn, and build together. Through an autonomous
							community utilizing blockchain tech, members collectively own a commons to shape
							seasonal physical / digital experiences that can only happen at Seker Factory.
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
