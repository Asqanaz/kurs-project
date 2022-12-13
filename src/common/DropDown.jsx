import React, { useState, useEffect, useRef } from "react"

export const DropDown = ({ children, link }) => {
	const [dropOpen, setDropOpen] = useState(false)

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
		<li
			className={`cursor-pointer text-xs ${dropOpen ? "drop-active" : ""} relative`}
			onClick={() => setDropOpen(!dropOpen)}
			ref={dropRef}
		>
			<span>{link}</span>
			{dropOpen && (
				<ul
					className="text-center bg-blue-700 p-2 flex-col flex justify-center items-center absolute left-[0] gap-2 z-10"
					onClick={e => e.stopPropagation()}
				>
					{children}
				</ul>
			)}
		</li>
	)
}
