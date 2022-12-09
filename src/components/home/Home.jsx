import React, {useState} from "react"
import {useEffect} from "react"

export const Home = () => {
	const [advice, setAdvice] = useState()

	useEffect(() => {
		getText()
	}, [])
  
	async function getText() {
		await fetch("/kurs.txt")
		.then(response => response.text())
		.then(text => setAdvice(text))
	}
		
	console.log(advice)

	return (
		<div>
			<h1>{advice}</h1>
			<button>Close</button>
		</div>
	)
}	
