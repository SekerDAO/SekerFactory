import {ethers} from "ethers"
import React from "react"
import Core from "web3modal"

interface IWeb3Context {
	instance?: Core
	signer?: ethers.Signer
}

interface IWeb3ContextContainer {
	web3Context: IWeb3Context
	setWeb3Context: (c: IWeb3Context) => void
}

export const Web3Context = React.createContext<IWeb3ContextContainer>({
	web3Context: {},
	setWeb3Context: () => null
})
