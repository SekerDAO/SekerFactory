import {FunctionComponent} from "react"
import {EventContent} from "../../types/event"
import {getDateReadable, getTimeReadable, openRSVPForm} from "../../utils"
import Button from "../Button"
import Image from "../Image"
import "./EventListItem.scss"

const EventListItem: FunctionComponent<{
	event: EventContent
	showRSVP: boolean
	showSchedule: boolean
	onShowSchedule?: () => void
	className?: string
}> = ({event, showRSVP, showSchedule, onShowSchedule, className}) => (
	<section className={`event-list-item ${className ?? ""}`}>
		<div className="event-list-item__col-wrapper">
			<div className="event-list-item__col">
				<Image src={event?.custom_data?.bannerSrc} alt={event.title} />
			</div>
			<div className="event-list-item__col">
				<h1
					dangerouslySetInnerHTML={{
						__html: `${event.title} <br /> ${getDateReadable(event)} <br /> ${getTimeReadable(
							event
						)}`
					}}
				/>
				<div className="event-list-item__col-hosted-by">
					<h3>Hosted by:</h3>
					<h2 dangerouslySetInnerHTML={{__html: event.location}} />
				</div>
				<p
					className="event-list-item__col-description"
					dangerouslySetInnerHTML={{
						__html: `${event.description}`
					}}
				/>
				{showSchedule && (
					<Button variant="secondary" onClick={onShowSchedule}>
						View Schedule
					</Button>
				)}
				{showRSVP && <Button onClick={() => openRSVPForm(event)}>RSVP</Button>}
			</div>
		</div>
	</section>
)

export default EventListItem
