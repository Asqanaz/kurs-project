import React, {useState} from "react"

export const Exercise = () => {
	let [row, setRow] = useState()
	let [column, setColumn] = useState()
 	let newestArr = []
	const [initArr, setInitArr] = useState()
	const [resArr, setResArr] = useState()
	const [maxEl, setMaxEl] = useState()

	function deletingMaxElement(arr) {
		let newArr = []
		let maxOfRow = []
		for (let i = 0; i < arr.length; i++) {
			newArr[i] = [...arr[i]]
			for (let j = 0; j < arr[i].length; j++) {
				newArr[i][j] = arr[i][j]
			}
			maxOfRow = [...maxOfRow, Math.max(...newArr[i])]
		}
		let maxOfArr = Math.max(...maxOfRow)

		setMaxEl(maxOfArr)

		for (let i = 0; i < newArr.length; i++) {
			for (let j = 0; j < newArr[i].length; j++) {
				if (newArr[i][j] === maxOfArr) {
					for (let l = 0; l < newArr.length; l++) {
						delete newArr[l][j]
						for (let p = 0; p < newArr[i].length; p++) {
							delete newArr[i][p]
						}
					}
				}
			}
		}

		return newArr
	}
	const runTask = () => {
		let arr = []
		for (let i = 0; i < row; i++) {
			arr[i] = []
			for (let j = 0; j < column; j++) {
				arr[i][j] = Math.round(Math.random() * 1000)
			}
		}
		setInitArr(arr)
		setResArr(deletingMaxElement(arr))
	}

	console.log(initArr)
	console.log(resArr)
	console.log(maxEl)
	return (
		<div className="flex flex-row justify-between w-full">
			<div className="flex flex-col gap-10">
				<input type="number" placeholder="Row" value = {row} onChange={(e) => setRow(e.target.value)} />
				<input type="number" placeholder="Column" value = {column} onChange={(e) => setColumn(e.target.value)}/>
				<button className="text-white" onClick={runTask}>
					Submit
				</button>
				{maxEl && <span>Max element of matrix: {maxEl}</span>}
			</div>
			<table border="1">
				<tbody>
					{initArr?.map(row => (
						<tr>
							{row.map(col => (
								<td>{col}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
			<table border="1">
				<tbody>
					{resArr?.map(row => (
						<tr>
							{row.map(col => (
								<td>{col}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
