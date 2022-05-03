import {FunctionComponent} from "react"
import {EventContent} from "../../types/event"
import {getDateReadable, getTimeReadable, openRSVPForm} from "../../utils"
import Button from "../Button"
import Image from "../Image"
import "./EventListItem.scss"

const EventListItem: FunctionComponent<
	React.PropsWithChildren<{
		event: EventContent
		dateTitle?: string
		showRSVP: boolean
		showMoreInfo?: boolean
		showSchedule: boolean
		onShowSchedule?: () => void
		className?: string
	}>
> = ({event, dateTitle, showRSVP, showMoreInfo, showSchedule, onShowSchedule, className}) => (
	<section className={`event-list-item ${className ?? ""}`}>
		<Image src={event?.custom_data?.bannerSrc} alt={event.title} />
		<div className="event-list-item__content">
			<p>{dateTitle ?? `${getDateReadable(event)} <br /> ${getTimeReadable(event)}`}</p>
			<h1
				dangerouslySetInnerHTML={{
					__html: event.title
				}}
			/>
			<div className="event-list-item__content-hosted-by">
				<h3 dangerouslySetInnerHTML={{__html: event.location}} />
			</div>
			{showSchedule && (
				<Button variant="secondary" onClick={onShowSchedule}>
					View Schedule
				</Button>
			)}
			{showRSVP && (
				<Button onClick={() => openRSVPForm(event)} color="white">
					RSVP
				</Button>
			)}
			{showMoreInfo && (
				<Button color="white" variant="secondary">
					More Info
				</Button>
			)}
			{!showRSVP && !showMoreInfo && <p dangerouslySetInnerHTML={{__html: event.description}} />}
		</div>
	</section>
)

export default EventListItem
