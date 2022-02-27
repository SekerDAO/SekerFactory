import {useState, FunctionComponent, StrictMode} from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import {Web3Context} from "./context"
import "./index.scss"
import EventDetails from "./pages/EventDetails"
import EventsList from "./pages/EventsList"
import HomePage from "./pages/Home"

const App: FunctionComponent = () => {
	const [web3Context, setWeb3Context] = useState({})
	return (
		<Web3Context.Provider value={{web3Context, setWeb3Context}}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/events" element={<EventsList />} />
					<Route path="/events/:id" element={<EventDetails />} />
				</Routes>
			</Router>
		</Web3Context.Provider>
	)
}
ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
)
