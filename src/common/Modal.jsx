import React from "react"
import { Link } from "react-router-dom"

export const Modal = ({isOpen, setIsOpen}) => {
	return (
		<div
			className="w-full h-full absolute top-0 left-0 backdrop-blur-sm flex justify-center items-center z-0"
			onClick={() => setIsOpen(false)}
		>
			<div
				className="w-[435px] h-1/2 p-6 flex flex-col justify-center items-center bg-gray-600 z-50 rounded-2xl gap-16"
				onClick={e => e.stopPropagation()}
			>
				<span>Դուք արդյոք ցանկանում եք դուրս գալ ծրագրից</span>
				<div className="w-full flex justify-around items-center">
					<Link to = "/" state = {{from: location.pathname}} className="w-1/3"><button className="w-full text-white">Ok</button></Link>
					<button className = "w-1/3 text-white" onClick = {() => setIsOpen(false)}>Cancel</button>
				</div>
			</div>
		</div>
	)
}
