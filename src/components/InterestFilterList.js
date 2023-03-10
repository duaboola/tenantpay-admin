import React from 'react'
import { useEffect, useState } from 'react'
import { CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'
import { Link } from 'react-router-dom'

let MY_LIST = []

function InterestFilterList() {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState({})
  const [filterlist, setFilterlist] = useState(MY_LIST)

  function onKeyUpHandler(e) {
    setSearch(e.target.value.toLowerCase())
  }

  function onSelectItem(e, item) {
    setSelected(item)

    setSearch('')
    clearFilter()
  }

  function clearFilter() {
    document.getElementById('searchFilter').value = ''
  }

  function fetchData() {
    fetch('http://192.168.100.96:8888/tenantpay/prop/interest/admin_list.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        MY_LIST = data
      })
  }

  useEffect(() => {
    console.log('useEffect')
    fetchData()
  }, [''])

  useEffect(() => {
    const filteredList = MY_LIST.filter((item) => {
      let all_str =
        `${item.id} ${item.prop_name} ${item.tenant_name} ${item.address} ${item.location} ${item.owner_email}`.toLowerCase()
      //return all_str.indexOf(search) > -1 // View All When Search Empty
      return all_str.indexOf(search) > -1 && search
    })
    setFilterlist(filteredList)
  }, [search])

  return (
    <div>
      <div className="mb-3">
        <input
          id="searchFilter"
          type="text"
          className="form-control"
          defaultValue={search}
          placeholder="Enter Interest or Building or Location"
          onKeyUp={onKeyUpHandler}
        />
      </div>
      {/* <div>
        <h6>
          Selected Item : {selected.id}) {selected.interest_name} , {selected.building_name} ,
          {selected.location}
        </h6>
      </div> */}
      <CTable align="middle" className="mb-0 border table-striped" hover responsive>
        <CTableBody>
          {filterlist.map((item, key) => (
            <CTableRow v-for="item in tableItems" key={key}>
              <CTableDataCell>
                <div>{item.id}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.owner_email}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.prop_name}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.location}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.price}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.type}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.tenant_email}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>{item.status}</div>
              </CTableDataCell>
              <CTableDataCell>
                <div>
                  <Link
                    to={`/properties/interest/details:${item.id}`}
                    className="btn btn-dark btn-xs"
                  >
                    Details
                  </Link>
                </div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default InterestFilterList
