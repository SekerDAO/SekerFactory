import {FunctionComponent} from "react"
import {Carousel} from "react-responsive-carousel"
import {ReactComponent as LeftArrowActive} from "../../../../assets/icons/leftarrow_active.svg"
import {ReactComponent as LeftArrowInactive} from "../../../../assets/icons/leftarrow_inactive.svg"
import {ReactComponent as RightArrowActive} from "../../../../assets/icons/rightarrow_active.svg"
import {ReactComponent as RightArrowInactive} from "../../../../assets/icons/rightarrow_inactive.svg"
import Button from "../../../../components/Button"
import EventListItem from "../../../../components/Event/EventListItem"
import Grid from "../../../../components/Grid"
import {useEvents} from "../../../../hooks/useAddEvent"
import {EventContent} from "../../../../types/event"
import "./index.scss"

// import Input from "../../../../components/Input"
// import useMediaQuery from "../../../../hooks/useMediaQuery"
// import {SUPPORT_UKRAINE_EVENT} from "../../../../config/addevent"

const Slides: FunctionComponent = () => {
	// const isMobile = useMediaQuery("(max-width: 1039px)")

	// const onPurchaseSupportUkraine = useCallback(async () => {
	// 	try {
	// 		await purchase({
	// 			contractAddress: config.SUPPORT_UKRAINE_CONTRACT_ADDRESS,
	// 			abi: Ukraine.abi,
	// 			etherValueString: "0.05",
	// 			mintAmount: mintValue
	// 		})
	// 	} catch (e) {
	// 		console.error(e)
	// 	}
	// }, [mintValue, web3Context.signer, setWeb3Context])

	const {events} = useEvents({})
	const FEATURED_EVENT = events.find(
		event => event.eventname === "SekerClub Saturday"
	) as EventContent
	const SOLSTICE_EVENT = events.find(event => event.eventname === "Summer Solstice") as EventContent

	return (
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
					{/*<EventListItem*/}
					{/*	event={SUPPORT_UKRAINE_EVENT}*/}
					{/*	showRSVP={false}*/}
					{/*	showSchedule={false}*/}
					{/*	showDescription={!isMobile}*/}
					{/*	dateTitle="Ongoing"*/}
					{/*>*/}
					{/*	<Grid row className="charity__mint">*/}
					{/*		<h3>Mint Amount</h3>*/}
					{/*		<Grid row>*/}
					{/*			<Input*/}
					{/*				type="number"*/}
					{/*				min="1"*/}
					{/*				step={1}*/}
					{/*				value={mintValue}*/}
					{/*				onChange={(e: React.FormEvent<HTMLInputElement>) => {*/}
					{/*					setMintValue(e.currentTarget.value)*/}
					{/*				}}*/}
					{/*			/>*/}
					{/*			<Button*/}
					{/*				onClick={onPurchaseSupportUkraine}*/}
					{/*				disabled={walletConnected && ethBalance < 0.05}*/}
					{/*			>*/}
					{/*				Donate*/}
					{/*			</Button>*/}
					{/*		</Grid>*/}
					{/*		{walletConnected && ethBalance < 0.05 && (*/}
					{/*			<p className="charity__helper-text">{`You don't have enough ETH in your wallet. Price per item is 0.05 ETH`}</p>*/}
					{/*		)}*/}
					{/*	</Grid>*/}
					{/*</EventListItem>*/}
				</Carousel>
			</Grid>
		</Grid>
	)
}

export default Slides
