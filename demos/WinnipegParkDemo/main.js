/**
 * Assignment 4 - AJAX with Open Data
 * Name: David Sawatzky
 * Course: WEBD-2008 Web Development 2
 * Date: June 25, 2022
 */

const url = 'https://data.winnipeg.ca/resource/tx3d-pfxq.json'

document.addEventListener('DOMContentLoaded', load)

async function load() {
  let result = await fetch(url)
  let data = await result.json()

  let searchbutton = document.getElementById('search-button')
  searchbutton?.addEventListener('click', search)

  let ccaSet = new Set(data.map((x) => x.cca))
  let districtSet = new Set(data.map((x) => x.district))
  let neighbourhoodSet = new Set(data.map((x) => x.neighbourhood))

  let cca = Array.from(ccaSet)
  cca.sort()
  let district = Array.from(districtSet)
  district.sort()
  let neighbourhood = Array.from(neighbourhoodSet)
  neighbourhood.sort()

  let ccaSelect = document.getElementById('cca-select')
  let districtSelect = document.getElementById('district-select')
  let neighbourhoodSelect = document.getElementById('neighbourhood-select')
  cca.forEach((element) => {
    ccaSelect?.insertAdjacentHTML(
      'beforeend',
      `<option class="cca-option" value="${element}">${element}</option>`
    )
  })
  district.forEach((element) => {
    districtSelect?.insertAdjacentHTML(
      'beforeend',
      `<option class="district-option" value="${element}">${element}</option>`
    )
  })
  neighbourhood.forEach((element) => {
    neighbourhoodSelect?.insertAdjacentHTML(
      'beforeend',
      `<option class="neighbourhood-option" value="${element}">${element}</option>`
    )
  })
}

async function search() {
  let filteroption = document.querySelector(
    'input[name="filter-option"]:checked'
  )?.value

  let selection = document.getElementById(filteroption + '-select')?.value
  const filterUrl =
    url +
    '?$select=park_name AS Name, ' +
    'location_description AS Address, ' +
    'district AS District, ' +
    'neighbourhood AS Neighbourhood, ' +
    'electoral_ward AS Ward, ' +
    'cca AS CCA' +
    `&$where=${filteroption} LIKE "%${selection}%"` +
    '&$order=park_name ASC' +
    '&$limit=100'
  let encodedURL = encodeURI(filterUrl)
  let result = await fetch(encodedURL)
  let data = await result.json()
  let count = document.getElementById('recordcount')
  if (!data || data.length == 0) {
    count.textContent = 'The query returned no records'
  } else {
    count.textContent = data.length + ' records returned'
  }
  const tbl = document.querySelector('table')
  tbl?.deleteTHead()
  tbl?.removeChild(tbl.getElementsByTagName('tbody')[0])

  const tbody = tbl?.createTBody()
  const thead = tbl?.createTHead()
  const tblHeaderRow = thead?.insertRow()

  const columnHeadings = Object.keys(data[0])
  for (let heading of columnHeadings) {
    let th = document.createElement('th')
    let text = document.createTextNode(heading)
    th.appendChild(text)
    tblHeaderRow?.appendChild(th)
  }
  for (let park of data) {
    let tr = tbody?.insertRow()
    for (let key in park) {
      let td = tr?.insertCell()
      let text = document.createTextNode(park[key])
      td?.appendChild(text)
    }
  }
}
