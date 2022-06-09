import {FunctionComponent, StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"
import Header from "./components/Header"
import {useWeb3, Web3Context} from "./context"
import useMediaQuery from "./hooks/useMediaQuery"
import "./index.scss"
import Event from "./pages/Event"
import HomePage from "./pages/Home"

const App: FunctionComponent<React.PropsWithChildren<unknown>> = () => {
	const isMobile = useMediaQuery("(max-width: 1039px)")
	const web3Context = useWeb3()

	return (
		<Web3Context.Provider value={web3Context}>
			<Router>
				<Header />
				<ToastContainer position={isMobile ? "bottom-center" : "bottom-right"} theme="colored" />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/event/:id" element={<Event />} />
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
