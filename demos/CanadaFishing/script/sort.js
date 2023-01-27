/**
 * Table Sorter
 */

let tableArray = []
let rowArray = []
let node

let nameHeading = document.getElementById('name-heading')
let createdHeading = document.getElementById('created-heading')
let updatedHeading = document.getElementById('updated-heading')

nameHeading.addEventListener('click', sort)
createdHeading.addEventListener('click', sort)
updatedHeading.addEventListener('click', sort)

let table = document.getElementsByTagName('tbody')
let rows = table[0].rows

function sort() {
	tableArray = []
	for (let i = 0; i < rows.length; i++) {
		rowArray = []
		for (let j = 0; j < rows[i].cells.length; j++) {
			rowArray.push(rows[i].cells[j].innerText)
		}
		tableArray.push(rowArray)
	}
	console.log(tableArray[1])
	let sortedTable = sortTable()
	console.log(sortedTable[1])
	for (let i = 0; i < rows.length; i++) {
		for (let j = 0; j < rows[i].cells.length; j++) {
			rows[i].cells[j].innerText = sortedTable[i][j]
		}
	}
}

function sortTable() {
	const sortedTable = tableArray.sort(function (a, b) {
		return b[1] - a[1]
	})
	return sortedTable
}
