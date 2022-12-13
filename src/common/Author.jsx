import React, { useRef } from "react"

export const Author = () => {
	const spanRef = useRef()

	setInterval(() => {
		let r = Math.round(Math.random() * 255)
		let g = Math.round(Math.random() * 255)
		let b = Math.round(Math.random() * 255)
		spanRef.current.style.color = `rgb(${r}, ${g}, ${b})`
	}, 1000)
	return (
		<>
			<div readOnly className="p-5 focus:border-0 focus:outline-0 w-1/2 h-full text-white bg-blue-200">
				<p>
					Միքայել Շահինյան Հակոբի,{" "}
					<span className="colored" ref={spanRef}>
						Երևանի Ինֆորմատիկայի պետական քոլեջ, 15.10.2022 - 11․12.2022:
					</span>
					<br />
					Տրված է n բնական թիվը և ամբողջ տիպի n x n տարրեր պարունակող մատրիցը: (n-ը զույգ է): Տեղերով փոխել
					մատրիցի ձախ և աջ կեսերը:
				</p>
			</div>
			<img src="/matrix-columns-change-logo.png" alt="" />
		</>
	)
}
