import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"

export const Tips = () => {
	const [advice, setAdvice] = useState()

	useEffect(() => {
		getText()
	}, [])

	async function getText() {
		const arrBuff = await fetch("/tips.txt").then(response => response.arrayBuffer())

		let enc = new TextDecoder()
		let dec = new Uint8Array(arrBuff)
		let newArr = enc.decode(dec).split("\r\n")
		setAdvice(newArr)
	}

	const handleNextTip = () => {
		let first = advice.shift()
		setAdvice(advice => [...advice, first])
	}

	return (
		<>
			<textarea
				name=""
				id=""
				cols="45"
				rows="200"
				className="w-1/2 h-full p-2 rounded-xl border-0 outline-0 resize-none text-white"
				value={advice?.[0]}
			></textarea>
			<div className="h-full flex flex-col justify-center gap-y-6 items-center w-1/2">
				<Link to="/home">
					<button className="w-[128px] text-white">Ok</button>
				</Link>
				<button className="w-[128px] text-white" onClick={handleNextTip}>
					Next
				</button>
			</div>
		</>
	)
}
