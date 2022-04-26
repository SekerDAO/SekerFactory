import {FunctionComponent} from "react"
import {Link} from "react-router-dom"
import {ReactComponent as DiscordIcon} from "../../assets/icons/discord-grayscale.svg"
import {ReactComponent as InstagramIcon} from "../../assets/icons/instagram_standard.svg"
import {ReactComponent as MediumIcon} from "../../assets/icons/medium_standard.svg"
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter-grayscale.svg"
import {ReactComponent as YouTubeIcon} from "../../assets/icons/youtube_standard.svg"
import "./index.scss"

const Footer: FunctionComponent<React.PropsWithChildren<unknown>> = () => (
	<footer className="footer">
		<section className="footer__left">
			<p>© 2022 Seker Factory DAO LLC</p>
		</section>
		<section className="footer__right">
			<Link to="https://discord.gg/rju5QnZmpM" target="_blank">
				<DiscordIcon height="30px" width="26px" />
			</Link>
			<Link to="https://instagram.com/">
				<InstagramIcon height="30px" width="30px" />
			</Link>
			<Link to="https://twitter.com/SekerFactory" target="_blank">
				<TwitterIcon height="30px" width="37px" />
			</Link>
			<Link to="https://medium.com/SekerFactory" target="_blank">
				<MediumIcon height="30px" width="30px" />
			</Link>
			<Link to="https://medium.com/SekerFactory" target="_blank">
				<YouTubeIcon height="30px" width="30px" />
			</Link>
		</section>
	</footer>
)

export default Footer
