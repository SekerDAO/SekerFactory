import {FunctionComponent, useState} from "react"
import Footer from "../../components/Footer"
import Grid from "../../components/Grid"
import SubscribeForm from "../../components/Subscribe"
import About from "./components/About"
import Membership from "./components/Membership"
import Schedule from "./components/Schedule"
// import Slides from "./components/Slides"
import "./index.scss"

const HomePage: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const [viewScheduleOpen, setViewScheduleOpen] = useState(false)

	return (
		<>
			<Schedule viewScheduleOpen={viewScheduleOpen} setViewScheduleOpen={setViewScheduleOpen} />
			<main className="home-page">
				{/*<Slides />*/}
				<About />
				<Membership />
				<Grid container>
					<SubscribeForm />
				</Grid>
			</main>
			<Footer />
		</>
	)
}

export default HomePage
