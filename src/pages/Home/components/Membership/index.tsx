import {FunctionComponent, useContext, useState} from "react"
import {ReactComponent as DoneCircle} from "../../../../assets/icons/done-circle.svg"
// @ts-expect-error no types for video import
import clearanceCardOneSrc from "../../../../assets/videos/Clearence_Card_00.mp4"
// @ts-expect-error no types for video import
import topClearanceCardSrc from "../../../../assets/videos/Top_Clearance_Card_01.mp4"
import Button from "../../../../components/Button"
import Grid from "../../../../components/Grid"
import ImageModal from "../../../../components/Modal/ImageModal"
import {Web3Context} from "../../../../context"
import BuyClearanceCard from "../BuyClearanceCard"
import useMembership from "./hooks"
import "./index.scss"

const Membership: FunctionComponent = () => {
	const [fullVideoSrc, setFullVideoSrc] = useState<string | undefined>(undefined)
	const handleOpenFullVideo = (src: string) => setFullVideoSrc(src)

	const {
		buyingClearanceCardType,
		setBuyingClearanceCardType,
		onPurchaseClearanceCard,
		onPurchaseTopClearanceCard,
		clearanceCardMintValue,
		setClearanceCardMintValue,
		processingClearanceCardPurchase,
		clearanceCardTotal,
		topClearanceCardTotal
	} = useMembership()

	const {signIn} = useContext(Web3Context)

	return (
		<>
			<BuyClearanceCard
				buyingClearanceCardType={buyingClearanceCardType}
				setBuyingClearanceCardType={setBuyingClearanceCardType}
				clearanceCardMintValue={clearanceCardMintValue}
				setClearanceCardMintValue={setClearanceCardMintValue}
				onPurchaseClearanceCard={onPurchaseClearanceCard}
				onPurchaseTopClearanceCard={onPurchaseTopClearanceCard}
				processing={processingClearanceCardPurchase}
			/>
			<ImageModal
				src={fullVideoSrc}
				open={!!fullVideoSrc}
				onClose={() => setFullVideoSrc(undefined)}
				video
			/>
			<Grid Component="section" row className="membership">
				<Grid container>
					<Grid size={2} xs={12} sm={12} lg={12}>
						<p className="membership__heading bold">Membership</p>
					</Grid>
					<Grid size={8} xs={12} sm={12} lg={12} className="membership__content">
						<Grid size={12} xs={12} sm={12} lg={12} className="membership__description">
							<p className="membership__description-content">
								<span className="karla-bold">Introducing the Seker Factory Clearance Cards.</span>
								&nbsp; These limited-edition NFTs represent our way of opening our factory up to
								patrons and contributors. We are calling on you to help crowd source the wisdom of
								curation. We believe a community of art appreciators should be the driving force of
								defining what is authentic digital art. We have written custom smart contract code
								that lets you level up these cards over time as you participate in events, add
								valuable contributions to the community, or simply hang out and enjoy the
								productions and earn. The higher your level, the more representation, merited
								governance rights on some proposals, and rewards you have in your community.
							</p>
						</Grid>
						<Grid row className="membership__items-container">
							<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
								<Grid className="membership__item-img-container">
									<video
										src={clearanceCardOneSrc}
										muted
										autoPlay
										loop
										playsInline
										onClick={() => handleOpenFullVideo(clearanceCardOneSrc)}
									/>
									<h3>Seker Factory 001 Clearance Cards</h3>
									<p className="membership__item-minted">
										{clearanceCardTotal} minted / 3000 total
									</p>
									<Button
										onClick={async () => {
											await signIn()
											setBuyingClearanceCardType("001")
										}}
									>
										Mint NFT
									</Button>
								</Grid>
								<ul>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Access to All Factory Locations
											<br />
											<span className="italic">(first come, first serve)</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Factory 001 Governance Rights
											<br />
											<span className="italic">
												(including curation voting for IRL + metaverse)
											</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Early access to NFTs
											<br />
											<span className="italic">(by Factory 001 artists)</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>Access to All Factory 001 IRL + Metaverse Events</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>Level starts at 0</p>
									</li>
									<a
										href="https://sekerfactory.medium.com/power-over-9000-level-your-seker-factory-dao-nft-889bd6cd5577"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button variant="link">Learn More</Button>
									</a>
								</ul>
							</Grid>
							<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
								<Grid className="membership__item-img-container">
									<video
										src={topClearanceCardSrc}
										muted
										autoPlay
										loop
										playsInline
										onClick={() => handleOpenFullVideo(topClearanceCardSrc)}
									/>
									<h3>Seker Factory Top Clearance Cards</h3>
									<p className="membership__item-minted">
										{topClearanceCardTotal} minted / 1500 total
									</p>
									<Button
										onClick={async () => {
											await signIn()
											setBuyingClearanceCardType("TOP")
										}}
									>
										Mint NFT
									</Button>
								</Grid>
								<ul>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Access to All Factory Locations
											<br />
											<span className="italic">(special reservations available)</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Governance Rights for All Factory Locations
											<br />
											<span className="italic">
												(including curation voting for IRL + metaverse)
											</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Early access to NFTs
											<br />
											<span className="italic">(by artists from all Factory locations)</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Access to all IRL + Metaverse Events
											<br />
											<span className="italic">
												(all Factory locations including exclusive VIP Cyber Galas)
											</span>
										</p>
									</li>
									<li>
										<div className="membership__item-icon-container">
											<DoneCircle width="20px" height="20px" />
										</div>
										<p>
											Level Boost Starting at 1
											<br />
											<span className="italic">(early patron / supporter perk)</span>
										</p>
									</li>
									<a
										href="https://sekerfactory.medium.com/power-over-9000-level-your-seker-factory-dao-nft-889bd6cd5577"
										target="_blank"
										rel="noreferrer noopener"
									>
										<Button variant="link">Learn More</Button>
									</a>
								</ul>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={2} xs={12} sm={12} lg={12} />
				</Grid>
			</Grid>
		</>
	)
}

export default Membership
