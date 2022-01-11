import {FunctionComponent} from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import EventDetails from "../components/EventDetails"
import EventsList from "../components/EventsList"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomePage from "../components/Home"

const App: FunctionComponent = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/events" element={<EventsList />} />
			<Route path="/events/:eventSlug" element={<EventDetails />} />
		</Routes>
		<Footer />
	</Router>
)

export default App
