import React, {useState} from "react"
import {useEffect} from "react"

export const Home = () => {
	const [advice, setAdvice] = useState()

	useEffect(() => {
    getText()
  }, [])
  
  console.log(advice)
	async function getText() {
		await fetch("/kurs.txt")
			.then(response => response.blob())
			.then(text => setAdvice(text))
	}

	// useEffect(() => {
	// 	let fileReader = new FileReader()
	// 	fileReader.readAsText(advice)
	// 	fileReader.onloadend = function (e) {
	// 		console.log(e.target)
	// 	}
	// })


	// console.log(advice)
	return (
		<div>
			{/* <h1>{advice}</h1> */}
			<button>Close</button>
		</div>
	)
}
