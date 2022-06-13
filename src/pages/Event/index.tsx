import {FormEvent, FunctionComponent, useContext, useState} from "react"
import {Link, useParams} from "react-router-dom"
import Button from "../../components/Button"
import Footer from "../../components/Footer"
import Grid from "../../components/Grid"
import Input from "../../components/Input"
import {toastError, toastSuccess} from "../../components/Toast"
import {events} from "../../config/events"
import {Web3Context} from "../../context"
import {getDateReadable, getTimeReadable} from "../../utils"
import "./index.scss"

const Event: FunctionComponent = () => {
	const {id} = useParams()
	const event = events.find(ev => ev.id === id)

	const {walletConnected, purchase, signIn} = useContext(Web3Context)
	const [mintValue, setMintValue] = useState("1")
	const [loading, setLoading] = useState(false)

	if (!event) {
		return <div>No such event</div>
	}

	const onPurchase = async () => {
		if (!event.mint) return
		setLoading(true)
		try {
			await purchase({
				contractAddress: event.mint.address,
				abi: event.mint.abi,
				etherValueString: event.mint.etherValue,
				mintAmount: mintValue
			})
			toastSuccess("Success!")
		} catch (e) {
			console.error(e)
			toastError("Something went wrong")
		}
		setLoading(false)
	}

	return (
		<>
			{" "}
			<main className="event-page">
				<Grid Component="section" row className="event">
					<Grid container>
						<Grid row className="event__main">
							<Grid row className="event__link">
								<Grid size={2} xs={12} sm={12} lg={12} />
								<Grid size={4} xs={12} sm={12} lg={12}>
									<Link to="/">{"< Return to Home"}</Link>
								</Grid>
							</Grid>

							<Grid row className="event__title">
								<Grid size={2} xs={12} sm={12} lg={12} />
								<Grid size={4} xs={12} sm={12} lg={12}>
									<h3>{event.title}</h3>
								</Grid>
							</Grid>

							<Grid row className="event__content">
								<Grid size={2} xs={12} sm={12} lg={12} />
								<Grid size={4} xs={12} sm={12} lg={12}>
									<div
										className="event__image"
										style={{backgroundImage: `url("${event.subPageImage}")`}}
									/>
								</Grid>

								<Grid size={4} xs={12} sm={12} lg={12}>
									<div className="event__description">
										<div dangerouslySetInnerHTML={{__html: event.description}} />
										{event.dates.length > 0 && (
											<>
												<b>{event.dates.length === 1 ? "DATE" : "AVAILABLE DATES"}</b>
												{event.dates.map((date, index) => (
													<p className="event-list-item__content-date" key={index}>
														{getDateReadable(date)}{" "}
														{date.date_start_time && date.date_end_time && "|"}{" "}
														{getTimeReadable(date)}
													</p>
												))}
											</>
										)}
										{event.location && (
											<p>
												<b>LOCATION</b>
												<br />
												{event.location}
											</p>
										)}
										{event.description2 && (
											<div dangerouslySetInnerHTML={{__html: event.description2}} />
										)}
										<div className="event__buttons">
											{event.links.map((link, index) => (
												<a key={index} href={link.url} target="_blank" rel="noreferrer noopener">
													<Button>{link.title}</Button>
												</a>
											))}
										</div>
									</div>
								</Grid>

								{event.mint && (
									<Grid size={2} xs={12} sm={12} lg={12}>
										<div className="event__mint">
											<h3>Mint Amount</h3>
											<Input
												type="number"
												min="1"
												step={1}
												value={mintValue}
												onChange={(e: FormEvent<HTMLInputElement>) => {
													setMintValue(e.currentTarget.value)
												}}
											/>
											<Button onClick={walletConnected ? onPurchase : signIn} disabled={loading}>
												{walletConnected
													? loading
														? "Processing..."
														: event.mint.buttonText ?? "Mint"
													: "Connect wallet"}
											</Button>
										</div>
									</Grid>
								)}
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</main>
			<Footer />
		</>
	)
}

export default Event
