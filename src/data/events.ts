import {EventContent} from "../types/event"

const EVENTS: EventContent[] = [
	{
		title: "Post-ETH Denver \n Defrost Meet-Up",
		date: new Date("February 26, 2022"),
		dateReadable: "Feb. 23-26, 2022",
		bannerSrc: "",
		description:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		slug: "post-eth-denver-meet-up"
	}
]

export const FEATURED_EVENT = EVENTS[0]
export const UPCOMING_EVENTS = EVENTS.filter(
	event => event.date.getTime() > new Date().getTime() && event.slug !== FEATURED_EVENT.slug
)

export default EVENTS
