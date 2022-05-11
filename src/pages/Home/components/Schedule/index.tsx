import {Dispatch, FunctionComponent, SetStateAction} from "react"
import Modal from "../../../../components/Modal"

const Schedule: FunctionComponent<
	React.PropsWithChildren<{
		viewScheduleOpen: boolean
		setViewScheduleOpen: Dispatch<SetStateAction<boolean>>
	}>
> = ({viewScheduleOpen, setViewScheduleOpen}) => (
	<Modal open={viewScheduleOpen} onClose={() => setViewScheduleOpen(false)}>
		<ul className="schedule-list">
			<h2>Saturday, February 26</h2>
			<li className="schedule-list__item">
				<span>9:00AM PST</span>
				<div className="schedule-list__item-description">
					<p className="bold">Doors Open</p>
					<p className="grey">Available for viewing exhibit and hangout / work time.</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>3:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="orange bold">Happy Hour</p>
					<p className="grey">Panel talks (T.B.D.) and giveaways. Refreshments provided.</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>5:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="light-grey bold">Factory Closed for Set Up</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>8:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="purple bold">Rave Party</p>
				</div>
			</li>
		</ul>
		<ul className="schedule-list">
			<h2>Sunday, February 27</h2>
			<li className="schedule-list__item">
				<span>2:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="bold">Doors Open</p>
					<p className="grey">Available for viewing exhibit and hangout / work time.</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>3:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="orange bold">Happy Hour</p>
					<p className="grey">Panel talks (T.B.D.) and giveaways. Refreshments provided.</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>5:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="light-grey bold">Factory Closed for Set Up</p>
				</div>
			</li>
			<li className="schedule-list__item">
				<span>8:00PM PST</span>
				<div className="schedule-list__item-description">
					<p className="purple bold">Movie Night</p>
					<p className="grey">Double feature (T.B.D.). Refreshments provided.</p>
				</div>
			</li>
		</ul>
	</Modal>
)

export default Schedule
