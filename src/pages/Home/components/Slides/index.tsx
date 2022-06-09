import {FunctionComponent} from "react"
import {Carousel} from "react-responsive-carousel"
import {ReactComponent as LeftArrowActive} from "../../../../assets/icons/leftarrow_active.svg"
import {ReactComponent as LeftArrowInactive} from "../../../../assets/icons/leftarrow_inactive.svg"
import {ReactComponent as RightArrowActive} from "../../../../assets/icons/rightarrow_active.svg"
import {ReactComponent as RightArrowInactive} from "../../../../assets/icons/rightarrow_inactive.svg"
import Button from "../../../../components/Button"
import EventListItem from "../../../../components/Event/EventListItem"
import Grid from "../../../../components/Grid"
import {events} from "../../../../config/events"
import "./index.scss"

const Slides: FunctionComponent = () => (
	<Grid Component="section" row className="carousel-wrapper">
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
			{events.map(event => (
				<EventListItem event={event} key={event.id} />
			))}
		</Carousel>
	</Grid>
)

export default Slides
