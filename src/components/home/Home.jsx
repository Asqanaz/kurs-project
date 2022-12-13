import React, { useRef, useState, useEffect } from "react"
import { Outlet, NavLink, Link } from "react-router-dom"
import { DropDown } from "../../common/DropDown"
import { Modal } from "../../common/Modal"

export const Home = () => {
	const [dropOpen, setDropOpen] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	const dropRef = useRef()
	useEffect(() => {
		document.addEventListener("click", handleDocumentClicked)

		return () => document.removeEventListener("click", handleDocumentClicked)
	}, [])

	const handleDocumentClicked = e => {
		if (dropRef.current && dropRef.current.contains(e.target)) {
			setDropOpen(true)
		} else {
			setDropOpen(false)
		}
	}

	return (
		<div className="container bg-gray-400 h-1/2">
			<div className="w-full bg-blue-700">
				<ul className="list-none flex flex-row gap-5 items-center p-2">
					<DropDown link={"Մենյու"}>
						<li>
							<Link to="/home/exercise">Խնդիր</Link>
						</li>
						<li>
							<Link to="/home/tip-of-the-day">Օրվա խորհուրդներ</Link>
						</li>
						<li className="cursor-pointer text-xs" onClick={() => setIsOpen(true)}>
							Ելք
						</li>
					</DropDown>
					<DropDown link={"Պատուհանների դասավորում"}>
						<li>Ուղղահայաց</li>
						<li>Minimaze</li>
						<li>
							<Link to="/home">Փակել բոլորը</Link>
						</li>
					</DropDown>
					<DropDown link={"Օգնություն"}>
						<NavLink to="/home/help-window">Օգնության պատուհան</NavLink>
						<NavLink to="/home/author">Հեղինակ</NavLink>
					</DropDown>
				</ul>
			</div>
			<main className="bg-white w-full h-full p-20 flex flex-row gap-10 relative">
				<Outlet />
				{isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
			</main>
		</div>
	)
}
