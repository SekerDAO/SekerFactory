import {FunctionComponent, StrictMode} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import "./index.scss"
import EventDetails from "./pages/EventDetails"
import EventsList from "./pages/EventsList"
import HomePage from "./pages/Home"

const App: FunctionComponent = () => (
	<Router>
		<Header />
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/events" element={<EventsList />} />
			<Route path="/events/:id" element={<EventDetails />} />
		</Routes>
		<Footer />
	</Router>
)

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
)
