import {FunctionComponent} from "react"
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
			<a href="https://discord.gg/rju5QnZmpM" target="_blank" rel="noreferrer">
				<DiscordIcon height="30px" width="26px" />
			</a>
			<a href="https://www.instagram.com/sekerfactory/" target="_blank" rel="noreferrer">
				<InstagramIcon height="30px" width="30px" />
			</a>
			<a href="https://twitter.com/SekerFactory" target="_blank" rel="noreferrer">
				<TwitterIcon height="30px" width="37px" />
			</a>
			<a href="https://sekerfactory.medium.com/" target="_blank" rel="noreferrer">
				<MediumIcon height="30px" width="30px" />
			</a>
			<a
				href="https://www.youtube.com/channel/UC6LyJJipQM0qe3Jcq8pdHog"
				target="_blank"
				rel="noreferrer"
			>
				<YouTubeIcon height="30px" width="30px" />
			</a>
		</section>
	</footer>
)

export default Footer
