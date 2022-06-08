import {InfuraProvider, JsonRpcProvider} from "@ethersproject/providers"
import {formatEther} from "@ethersproject/units"
import {ethers} from "ethers"
import React, {useEffect, useRef, useState} from "react"
import Core from "web3modal"
import {toastError} from "../components/Toast"
import {web3Modal} from "../config/eth"
import infuraConfig from "../config/infura"
import {formatReadableAddress} from "../utils"

interface IWeb3Context {
	instance?: Core
	signer?: ethers.Signer
}

interface IWeb3ContextContainer {
	ethBalance: number
	address: string | null
	walletConnected: boolean
	signIn: () => Promise<ethers.Signer>
	purchase: (params: {
		contractAddress: string
		abi: ethers.ContractInterface
		etherValueString: string
		mintAmount: string
	}) => Promise<boolean>
	infuraProvider: JsonRpcProvider
}

export const Web3Context = React.createContext<IWeb3ContextContainer>(
	{} as unknown as IWeb3ContextContainer
)

export const useWeb3 = (): IWeb3ContextContainer => {
	const [web3Context, setWeb3Context] = useState<IWeb3Context>({})
	const [ethBalance, setEthBalance] = useState(0)
	const [address, setAddress] = useState<string | null>(null)

	const infuraProvider = useRef(
		new InfuraProvider("mainnet", {
			projectId: infuraConfig.INFURA_ID
		})
	)

	const getBalance = async () => {
		if (web3Context.signer) {
			setEthBalance(Number(formatEther(await web3Context.signer.getBalance())))
		}
	}

	const getAddress = async () => {
		if (web3Context.signer) {
			setAddress(formatReadableAddress(await web3Context.signer.getAddress()))
		}
	}

	useEffect(() => {
		getBalance()
		getAddress()
	}, [web3Context.signer])

	const walletConnected = !!web3Context?.signer

	const signIn = async () => {
		let signer
		if (!web3Context.signer) {
			await web3Modal.clearCachedProvider()
			const instance = await web3Modal.connect()
			const provider = new ethers.providers.Web3Provider(instance)
			signer = provider.getSigner()
			setWeb3Context({instance, signer})
		} else {
			signer = web3Context.signer
		}

		return signer
	}

	const purchase = async ({
		contractAddress,
		abi,
		etherValueString,
		mintAmount
	}: {
		contractAddress: string
		abi: ethers.ContractInterface
		etherValueString: string
		mintAmount: string
	}): Promise<boolean> => {
		const signer = await signIn()
		const saleContract = new ethers.Contract(contractAddress, abi, signer)
		const etherValue = ethers.utils.parseEther(etherValueString)
		const amount = parseInt(mintAmount)
		const value = etherValue.mul(amount)
		const ethAmount = formatEther(value.toString())
		const _ethBalance = Number(formatEther(await signer.getBalance()))
		if (Number(ethAmount) > _ethBalance) {
			toastError(
				`Woops! You don't have enough ETH in your wallet. Your balance: ${_ethBalance} ETH, you need at least ${ethAmount} ETH.`
			)
			return false
		} else {
			await saleContract.mint(amount, {value})
			return true
		}
	}

	return {
		ethBalance,
		address,
		walletConnected,
		purchase,
		signIn,
		infuraProvider: infuraProvider.current
	}
}
