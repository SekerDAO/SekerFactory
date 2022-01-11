import {EventContent} from "../types/event"

export const isEventUpcoming = (event: EventContent) => event.date.getTime() > new Date().getTime()
