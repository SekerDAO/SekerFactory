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
// @ts-expect-error no types for video import
import clearanceCardOneSrc from "../../assets/videos/Clearence_Card_00.mp4"
// @ts-expect-error no types for video import
import topClearanceCardSrc from "../../assets/videos/Top_Clearance_Card_01.mp4"
import Button from "../../components/Button"
import EventListItem from "../../components/Event/EventListItem"
import Footer from "../../components/Footer"
import Grid from "../../components/Grid"
import Input from "../../components/Input"
import ImageModal from "../../components/Modal/ImageModal"
import SubscribeForm from "../../components/Subscribe"
import {SUPPORT_UKRAINE_EVENT} from "../../config/addevent"
import {useEvents} from "../../hooks/useAddEvent"
import useMediaQuery from "../../hooks/useMediaQuery"
import {EventContent} from "../../types/event"
import BuyClearanceCard from "./components/BuyClearanceCard"
import Schedule from "./components/Schedule"
import useHomePage from "./hooks"
import "./index.scss"

const HomePage: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const [fullVideoSrc, setFullVideoSrc] = useState<string | undefined>(undefined)
	const isMobile = useMediaQuery("(max-width: 1039px)")
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
		topClearanceCardTotal,
		ethBalance,
		walletConnected,
		signIn
	} = useHomePage()
	const {events} = useEvents({})
	const FEATURED_EVENT = events.find(
		event => event.eventname === "SekerClub Saturday"
	) as EventContent
	const SOLSTICE_EVENT = events.find(event => event.eventname === "Summer Solstice") as EventContent
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
				<Grid Component="section" row className="carousel-wrapper">
					<Grid container>
						<Carousel
							swipeable
							showThumbs={false}
							showIndicators={false}
							statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
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
							<EventListItem
								event={FEATURED_EVENT}
								showRSVP={false}
								showSchedule={false}
								showDescription
							/>
							<EventListItem
								event={SOLSTICE_EVENT}
								showRSVP={false}
								showSchedule={false}
								showDescription
								dateTitle="Coming Late June 2022"
							/>
							<EventListItem
								event={SUPPORT_UKRAINE_EVENT}
								showRSVP={false}
								showSchedule={false}
								showDescription={!isMobile}
								dateTitle="Ongoing"
							>
								<Grid row className="charity__mint">
									<h3>Mint Amount</h3>
									<Grid row>
										<Input
											type="number"
											min="1"
											step={1}
											value={mintValue}
											onChange={(e: React.FormEvent<HTMLInputElement>) => {
												setMintValue(e.currentTarget.value)
											}}
										/>
										<Button
											onClick={onPurchaseSupportUkraine}
											disabled={walletConnected && ethBalance < 0.05}
										>
											Donate
										</Button>
									</Grid>
									{walletConnected && ethBalance < 0.05 && (
										<p className="charity__helper-text">{`You don't have enough ETH in your wallet. Price per item is 0.05 ETH`}</p>
									)}
								</Grid>
							</EventListItem>
						</Carousel>
					</Grid>
				</Grid>
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
								<Grid
									size={4}
									xs={12}
									sm={12}
									lg={12}
									className="about__col about__col--no-left-gutters"
								>
									<ul>
										<li>
											<div className="about__col-perk-icon">
												<StarIcon width="20px" height="20px" />
											</div>
											Are you a digital artist looking for a gallery where you can truly stretch
											your creative chops, co-own, and help build from the ground-up?
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
										In the cradle of civilization Seker was known as the patron of builders,
										craftsmen, and sacred objects. It stood at the crossroads of the physical world
										and the spirit world. Today, Seker Factory is a bridge between our tangible
										reality and the metaverse where creators gather to connect, learn, and build
										together. Through an autonomous community utilizing blockchain tech, members
										collectively own a commons to shape seasonal physical / digital experiences that
										can only happen at Seker Factory.
									</p>
								</Grid>
								<Grid size={2} xs={12} sm={12} lg={12} className="about__col">
									<div className="contact">
										<Button variant="secondary" color="white">
											<a href="https://discord.gg/rju5QnZmpM" target="_blank" rel="noreferrer">
												<DiscordIcon height="20px" width="20px" />
												Join Our Discord
											</a>
										</Button>
										<Button variant="secondary" color="white">
											<a href="https://twitter.com/SekerFactory" target="_blank" rel="noreferrer">
												<TwitterIcon height="20px" width="20px" />
												Follow Our Twitter
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
						<Grid row className="about__footer">
							<Button variant="link" disabled>
								Learn More
							</Button>
						</Grid>
					</Grid>
				</Grid>
				<Grid Component="section" row className="membership">
					<Grid container>
						<Grid size={2} xs={12} sm={12} lg={12}>
							<p className="membership__heading bold">Membership</p>
						</Grid>
						<Grid size={8} xs={12} sm={12} lg={12} className="membership__content">
							<Grid size={12} xs={12} sm={12} lg={12} className="membership__description">
								<p className="membership__description-content">
									<span className="bold">Introducing the Seker Factory Clearance Cards.</span>These
									limited-edition NFTs represent our way of opening our factory up to patrons of the
									Seker intergalactic metaverse community. We are calling on you to help crowd
									source the wisdom of curation. We believe a community of art appreciators should
									be the driving force of defining what is authentic digital art. We have written
									custom smart contract code that lets you level up these cards over time as you
									participate in events, add valuable contributions to the community, or simply hang
									out and enjoy the productions. The higher your level, the more representation,
									merited governance rights on some proposals, and rewards you have in your
									community.
								</p>
							</Grid>
							<Grid row className="membership__items-container">
								<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
									<Grid className="membership__item-img-container">
										<video
											src={clearanceCardOneSrc}
											muted
											autoPlay
											loop
											playsInline
											onClick={() => handleOpenFullVideo(clearanceCardOneSrc)}
										/>
										<h3>Seker Factory 001 Clearance Cards</h3>
										<p className="membership__item-address">Downtown Los Angeles</p>
										<p className="membership__item-minted">
											{clearanceCardTotal} minted / 3000 total
										</p>
										<Button
											onClick={async () => {
												await signIn()
												setBuyingClearanceCardType("001")
											}}
										>
											Mint NFT
										</Button>
									</Grid>
									<ul>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Access to All Factory Locations
												<br />
												<span className="italic">(first come, first serve)</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Factory 001 Governance Rights
												<br />
												<span className="italic">
													(including curation voting for IRL + metaverse)
												</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Early access to NFTs
												<br />
												<span className="italic">(by Factory 001 artists)</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>Access to All Factory 001 IRL + Metaverse Events</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>Level starts at 0</p>
										</li>
										<Button variant="link" disabled>
											Learn More
										</Button>
									</ul>
								</Grid>
								<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
									<Grid className="membership__item-img-container">
										<video
											src={topClearanceCardSrc}
											muted
											autoPlay
											loop
											playsInline
											onClick={() => handleOpenFullVideo(topClearanceCardSrc)}
										/>
										<h3>Seker Factory Top Clearance Cards</h3>
										<p className="membership__item-address">All Locations</p>
										<p className="membership__item-minted">
											{topClearanceCardTotal} minted / 1500 total
										</p>
										<Button
											onClick={async () => {
												await signIn()
												setBuyingClearanceCardType("TOP")
											}}
										>
											Mint NFT
										</Button>
									</Grid>
									<ul>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Access to All Factory Locations
												<br />
												<span className="italic">(special reservations available)</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Governance Rights for All Factory Locations
												<br />
												<span className="italic">
													(including curation voting for IRL + metaverse)
												</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Early access to NFTs
												<br />
												<span className="italic">(by artists from all Factory locations)</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Access to all IRL + Metaverse Events
												<br />
												<span className="italic">
													(all Factory locations including exclusive VIP Cyber Galas)
												</span>
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Level Boost Starting at 1
												<br />
												<span className="italic">(early patron / supporter perk)</span>
											</p>
										</li>
										<Button variant="link" disabled>
											Learn More
										</Button>
									</ul>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={2} xs={12} sm={12} lg={12} />
					</Grid>
				</Grid>
				<Grid container>
					<SubscribeForm />
				</Grid>
			</main>
			<Footer />
		</>
	)
}

export default HomePage
