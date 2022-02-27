import React from "react"

interface IWeb3Context {
	web3Context?: any
	setWeb3Context?: any
}

export const initWeb3Context = {
	instance: null,
	signer: null
}

export const Web3Context = React.createContext<IWeb3Context>({
	web3Context: initWeb3Context,
	setWeb3Context: () => null
})
