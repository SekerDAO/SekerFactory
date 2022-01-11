import {FunctionComponent} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Button from "../components/Button"
import EventDetails from "../components/EventDetails"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomePage from "../components/Home"
import ImagePlaceholder from "../components/ImagePlaceholder"
import {FEATURED_EVENT} from "../data/events"
import "./index.scss"

const App: FunctionComponent = () => (
	<Router>
		<div className="app">
			<Header>
				<div className="app__header-featured-event">
					<div className="app__header-featured-event-col">
						{FEATURED_EVENT.bannerSrc ? (
							<img src={FEATURED_EVENT.bannerSrc} alt={FEATURED_EVENT.title} />
						) : (
							<ImagePlaceholder />
						)}
					</div>
					<div className="app__header-featured-event-col">
						<h1>
							{FEATURED_EVENT.title} <br /> {FEATURED_EVENT.dateReadable}
						</h1>
						<p>Hosted by:</p>
						<h2>
							<p>Seker Factory 001</p>
							<p>836 S Los Angeles Street</p>
							<p>Los Angeles, CA 90014</p>
						</h2>
						<p className="app__header-featured-event-col-description">
							{FEATURED_EVENT.description}
						</p>
						<Button>RSVP</Button>
					</div>
				</div>
			</Header>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/events/:eventSlug" element={<EventDetails />} />
			</Routes>
			<Footer />
		</div>
	</Router>
)

export default App
