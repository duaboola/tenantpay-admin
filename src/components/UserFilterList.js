import React from 'react'
import { useEffect, useState } from 'react'
import { CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'
import { Link } from 'react-router-dom'

let MY_LIST = []

function UserFilterList() {
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
    fetch('http://192.168.100.96:8888/tenantpay/users/list.php')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        MY_LIST = data
      })
  }

  useEffect(() => {
    console.log('useEffect')
    fetchData()
  })

  useEffect(() => {
    const filteredList = MY_LIST.filter((item) => {
      let all_str =
        `${item.id} ${item.email} ${item.usertype} ${item.fname} ${item.lname} ${item.cpr} ${item.mobile}`.toLowerCase()
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
          placeholder="Enter Email or Name or Mobile"
          onKeyUp={onKeyUpHandler}
        />
      </div>
      {/* <div>
        <h6>
          Selected Item : {selected.id}) {selected.warehouse_name} , {selected.building_name} ,
          {selected.location}
        </h6>
      </div> */}
      <table className="table table-bordered table-striped">
        <tbody>
          {filterlist.map((item, key) => (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>{item.secretword}</td>
              <td>{item.fname}</td>
              <td>{item.lname}</td>
              <td>{item.cpr}</td>
              <td>{item.mobile}</td>
              <td>{item.usertype}</td>
              <td>
                <Link to={`/user/details:${item.id}`} className="btn btn-dark btn-xs">
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserFilterList
