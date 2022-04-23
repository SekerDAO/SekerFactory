import {FunctionComponent, useState} from "react"
import {Carousel} from "react-responsive-carousel"
import {ReactComponent as DiscordIcon} from "../../assets/icons/discord-grayscale.svg"
import {ReactComponent as DoneCircle} from "../../assets/icons/done-circle.svg"
import {ReactComponent as LeftArrowActive} from "../../assets/icons/leftarrow_active.svg"
import {ReactComponent as LeftArrowInactive} from "../../assets/icons/leftarrow_inactive.svg"
import {ReactComponent as RightArrowActive} from "../../assets/icons/rightarrow_active.svg"
import {ReactComponent as RightArrowInactive} from "../../assets/icons/rightarrow_inactive.svg"
import {ReactComponent as StarIcon} from "../../assets/icons/star.svg"
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter-grayscale.svg"
import seedImage from "../../assets/images/seeds.png"
// @ts-expect-error no types for video import
import clearanceCardOneSrc from "../../assets/videos/Clearence_Card_00.mp4"
// @ts-expect-error no types for video import
import topClearanceCardSrc from "../../assets/videos/Top_Clearance_Card_01.mp4"
import Button from "../../components/Button"
import EventListItem from "../../components/Event/EventListItem"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import Input from "../../components/Input"
import Loading from "../../components/Loading"
import ImageModal from "../../components/Modal/ImageModal"
import SubscribeForm from "../../components/Subscribe"
import {useEvents} from "../../hooks/useAddEvent"
import {EventContent} from "../../types/event"
import BuyClearanceCard from "./components/BuyClearanceCard"
import Schedule from "./components/Schedule"
import useHomePage from "./hooks"
import "./index.scss"

const HomePage: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const [fullVideoSrc, setFullVideoSrc] = useState<string | undefined>(undefined)
	const {
		viewScheduleOpen,
		buyingClearanceCardType,
		setViewScheduleOpen,
		setBuyingClearanceCardType,
		onPurchaseSupportUkraine,
		onPurchaseClearanceCard,
		onPurchaseTopClearanceCard,
		mintValue,
		clearanceCardMintValue,
		setMintValue,
		setClearanceCardMintValue,
		processingClearanceCardPurchase,
		clearanceCardTotal,
		topClearanceCardTotal
	} = useHomePage()
	const {events, loading} = useEvents({})

	if (loading || !events || !events.length) {
		return <Loading />
	}
	const FEATURED_EVENT = events.find(event => event.eventname === "DAO Party") as EventContent
	const handleOpenFullVideo = (src: string) => setFullVideoSrc(src)

	return (
		<>
			<Schedule viewScheduleOpen={viewScheduleOpen} setViewScheduleOpen={setViewScheduleOpen} />
			<BuyClearanceCard
				buyingClearanceCardType={buyingClearanceCardType}
				setBuyingClearanceCardType={setBuyingClearanceCardType}
				clearanceCardMintValue={clearanceCardMintValue}
				setClearanceCardMintValue={setClearanceCardMintValue}
				onPurchaseClearanceCard={onPurchaseClearanceCard}
				onPurchaseTopClearanceCard={onPurchaseTopClearanceCard}
				processing={processingClearanceCardPurchase}
			/>
			<ImageModal
				src={fullVideoSrc}
				open={!!fullVideoSrc}
				onClose={() => setFullVideoSrc(undefined)}
				video
			/>
			<main className="home-page">
				<Carousel
					swipeable
					autoPlay
					showThumbs={false}
					showIndicators={false}
					statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
					interval={60000}
					renderArrowPrev={(clickHandler, hasPrev) => (
						<Button
							onClick={clickHandler}
							disabled={!hasPrev}
							className="carousel-arrow-prev"
							variant="link"
						>
							{hasPrev ? (
								<LeftArrowActive width={40} height={20} />
							) : (
								<LeftArrowInactive width={40} height={20} />
							)}
						</Button>
					)}
					renderArrowNext={(clickHandler, hasNext) => (
						<Button
							onClick={clickHandler}
							disabled={!hasNext}
							className="carousel-arrow-next"
							variant="link"
						>
							{hasNext ? (
								<RightArrowActive width={40} height={20} />
							) : (
								<RightArrowInactive width={40} height={20} />
							)}
						</Button>
					)}
				>
					<section className="charity">
						<Image src={seedImage} alt={"Join Seker Factory in Supporting Ukraine"} />
						<div className="charity__content">
							<h1>
								Join Seker Factory in <br />
								Supporting Ukraine
							</h1>
							<p className="charity__content-description">
								Over the last couple days, hundreds of thousands of Ukrainian people have fled their
								homes to seek refuge in neighboring European countries. Millions more are attempting
								to escape the chaos but are stranded on roadways due to traffic, abandoned cars, and
								lack of gas. Banks across the country have been overwhelmed and Ukrainians, who
								still rely heavily on cash payments, are unable to cover the costs of getting
								themselves out. The developer of this site — a member of Seker DAO and a good friend
								of all of ours — is currently in the midst of this struggle. The artist of this NFT,
								another DAO member, grew up in the Ukraine and has family there. This war hits close
								to home for all. Purchasing a print of this NFT will be your badge of support. 100%
								of the proceeds go to humanitarian aid for those trying to evacuate including the
								members of Seker Factory trapped in this conflict. We all thank you for your
								support.
							</p>
							<br />
							<p>Please install MetaMask or WalletConnect before donating.</p>
							<div className="charity__mint">
								<h3>Mint Amount</h3>
								<div>
									<Input
										type="number"
										min="1"
										value={mintValue}
										onChange={(e: React.FormEvent<HTMLInputElement>) => {
											setMintValue(e.currentTarget.value)
										}}
									/>
									<Button onClick={onPurchaseSupportUkraine}>Donate</Button>
								</div>
							</div>
						</div>
					</section>
					<EventListItem event={FEATURED_EVENT} showRSVP showSchedule={false} />
				</Carousel>
				<section className="about">
					<div className="about__cols-wrapper">
						<div className="about__col about__header">
							<p className="bold">About</p>
						</div>
						<div className="about__col">
							<h3 className="purple">
								Come for the vibes.
								<br />
								Stay for the revolution.
							</h3>
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
						</div>
						<div className="about__col">
							<p className="bold">
								Seker Factory is at the heart of the digital revolution where artists, tech
								pioneers, collectors, curators, and spectators of all walks come together to create,
								inspire, and explore. Through the collective power of DAOs and NFTs, Seker Factory
								strives to define a truly inclusive and expansive metaverse for the people, by the
								people.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
								irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
								pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim id est laborum.
							</p>
						</div>
						<div className="about__col">
							<div className="contact">
								<Button
									onClick={() => window.open("https://discord.gg/rju5QnZmpM", "_blank")}
									variant="secondary"
									color="white"
								>
									<DiscordIcon height="20px" width="20px" />
									Join Our Discord
								</Button>
								<Button
									onClick={() => window.open("https://twitter.com/SekerFactory", "_blank")}
									variant="secondary"
									color="white"
								>
									<TwitterIcon height="20px" width="20px" />
									Follow Our Twitter
								</Button>
							</div>
							<p>
								For inquiries, email us at{" "}
								<a href="mailto:info@sekerfactory.com">info@sekerfactory.com</a>
							</p>
						</div>
					</div>
					<div className="about__footer">
						<Button variant="link">Learn More</Button>
					</div>
				</section>
				<section className="membership">
					<div className="membership__description">
						<h3>
							Introducing the Seker Factory Clearance Cards. These limited edition NFTs represent
							our way of opening our factory up to patrons of the Seker intergalactic metaverse
							community. We are calling on you to help crowd source the wisdom of curation. We
							believe a community of art appreciators should be the driving force of defining what
							is authentic digital art. We have written custom smart contract code that lets you
							level up these cards over time as you participate in events, add valuable
							contributions to the community, or simply hang out and enjoy the productions. The
							higher your level, the more rep, merited governance rights on some proposals, and
							rewards you have in your community. More details on this system coming soon.
						</h3>
					</div>
					<div className="membership__item">
						<div className="membership__item-img-container">
							<video
								src={clearanceCardOneSrc}
								muted
								autoPlay
								loop
								onClick={() => handleOpenFullVideo(clearanceCardOneSrc)}
							/>
						</div>
						<h3>001 Clearance Cards</h3>
						<p>{clearanceCardTotal} minted / 3000 total</p>
						<p className="membership__item-address">
							<span className="bold">Seker Factory 001</span> (Downtown Los Angeles)
						</p>
						<ul>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								{`Access to all visitor areas at Seker Factory 001 as well as that of future locations
							at a "first come, first serve" basis.`}
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Patron governance rights for Seker Factory 001 including curation voting.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Early access to NFTs released by Seker Factory 001 artists.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Access to all general IRL and metaverse events hosted by Seker Factory 001.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Discounts to Seker Factory 001 merch.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Level starts at 0
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								More to come!
							</li>
						</ul>
						<Button onClick={() => setBuyingClearanceCardType("001")}>Mint</Button>
					</div>
					<div className="membership__item">
						<div className="membership__item-img-container">
							<video
								src={topClearanceCardSrc}
								muted
								autoPlay
								loop
								onClick={() => handleOpenFullVideo(topClearanceCardSrc)}
							/>
						</div>
						<h3>Top Clearance Cards</h3>
						<p>{topClearanceCardTotal} minted / 1500 total</p>
						<p className="membership__item-address bold">All Seker Factories</p>
						<ul>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								{`Access to all visitor areas at all Seker Factory locations with ability to reserve "special" exhibits / experiences.`}
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Extended patron governance rights for all Seker Factory locations including curation
								voting on all locations virtual or real.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Early access to NFTs released NFTs released by all Seker Factory locations.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Access to all IRL and metaverse events at all Seker Factory locations, including
								exclusive VIP cyber gala events.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Free exclusive Seker Factory merch redemption.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								Level boost starting at level 1 for being an early supporter.
							</li>
							<li>
								<div className="membership__item-icon-container">
									<DoneCircle width="20px" height="20px" />
								</div>
								More to come!
							</li>
						</ul>
						<Button onClick={() => setBuyingClearanceCardType("TOP")}>Mint</Button>
					</div>
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
					</div>
				</section>
				<SubscribeForm />
			</main>
			<Footer />
		</>
	)
}

export default HomePage
