import React, {useEffect, useState} from "react"
import {useLocation, useNavigate} from "react-router-dom"

export const StartPage = () => {
	const navigate = useNavigate()
	useEffect(() => {
		if (!location.state) {
			setTimeout(() => {
				navigate("/login")
			}, 15000)
		}
	}, [])

	const location = useLocation()

	console.log(location)
	return (
		<div className="container w-1/4 h-[30vh] bg-white flex flex-col align-center absolute container-animation bottom-0 right-0">
			<img src="/course-work-logo.png" alt="" className="absolute w-[20%] left-[20px] bottom-[5%]" />
			<h1 className="text-black text-center mt-[5%]">Course Work</h1>
			<h2 className="text-black text-center mt-[5%]">Ասքանազ Աշոտի Սմոյան</h2>
			<h3 className="text-black text-center mt-[5%]">12.11.2022</h3>
		</div>
	)
}
