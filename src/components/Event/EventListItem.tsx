import {FunctionComponent, PropsWithChildren} from "react"
import {Link} from "react-router-dom"
import {EventData} from "../../config/events"
import {getDateReadable, getTimeReadable} from "../../utils"
import Button from "../Button"
import Grid from "../Grid"
import "./EventListItem.scss"

const EventListItem: FunctionComponent<
	PropsWithChildren<{
		event: EventData
		showSchedule?: boolean
		onShowSchedule?: () => void
		className?: string
	}>
> = ({event, showSchedule, onShowSchedule, className, children}) => (
	<Grid container className="event-list-item__outer-container">
		<section className={`event-list-item ${className ?? ""}`}>
			<div className="event-list-item__content">
				<div className="image" style={{backgroundImage: `url("${event.image}")`}} />
				{event.dates.map((date, index) => (
					<p className="event-list-item__content-date" key={index}>
						{getDateReadable(date)} {date.date_start_time && date.date_end_time && "|"}{" "}
						{getTimeReadable(date)}
					</p>
				))}
				<h1>{event.title}</h1>
				{event.location && (
					<div className="event-list-item__content-hosted-by">
						<h3>{event.location}</h3>
					</div>
				)}
				{showSchedule && (
					<Button variant="secondary" onClick={onShowSchedule}>
						View Schedule
					</Button>
				)}
				{event.homePageInfo && <p>{event.homePageInfo}</p>}
				{event.showDescription && <p dangerouslySetInnerHTML={{__html: event.description}} />}
				<div className="event-list-item__buttons">
					{event.links.map((link, index) => (
						<a key={index} href={link.url} target="_blank" rel="noreferrer noopener">
							<Button color="white">{link.title}</Button>
						</a>
					))}
					{event.showMoreInfo && (
						<Link to={`/event/${event.id}`}>
							<Button color="white" variant="secondary">
								More Info
							</Button>
						</Link>
					)}
				</div>
				{children}
			</div>
		</section>
	</Grid>
)

export default EventListItem
