import {parse} from "query-string"
import {FunctionComponent} from "react"
import {useLocation} from "react-router-dom"
import EventListItem from "../../components/Event/EventListItem"
import SubscribeForm from "../../components/Subscribe"
import {useEvents} from "../../hooks/useAddEvent"
import {isEventUpcoming} from "../../utils"

const EventsList: FunctionComponent = () => {
	const {search} = useLocation()
	const {sort} = parse(search)
	const {events} = useEvents({sort})

	return (
		<main className="events-list-page">
			{events
				.filter(event => !isEventUpcoming(event))
				.map(event => (
					<EventListItem event={event} showRSVP={false} showSchedule={false} key={event.id} />
				))}
			<SubscribeForm />
		</main>
	)
}

export default EventsList
