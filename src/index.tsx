import {useState, FunctionComponent, StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Header from "./components/Header"
import {Web3Context} from "./context"
import "./index.scss"
import HomePage from "./pages/Home"

const App: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const [web3Context, setWeb3Context] = useState({})
	return (
		<Web3Context.Provider value={{web3Context, setWeb3Context}}>
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Router>
		</Web3Context.Provider>
	)
}
const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)
