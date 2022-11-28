// import { data } from './data'
import TextField from '@mui/material/TextField'
import SelectComponent from './Components.js/SelectComponent'
import { Button } from '@mui/material'
import Typography from '@mui/material/Typography'
// import Checkbox from '@mui/material'
import RenderComponent from './Components.js/RenderComponent'
import { Checkbox } from '@mui/material'
import TablePagination from '@mui/material/TablePagination'
import React, { useEffect } from 'react'
import Switch from '@mui/material/Switch'
import { useSelector } from 'react-redux'
import {
  filterwithname,
  filterArrayDidmount,
} from './Components.js/features/mainSlice'
import { useDispatch } from 'react-redux'
import { filterArray } from './Components.js/features/mainSlice'
import Card from '@mui/material/Card'

function App() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.main)
  const [datanew, setFinalData] = React.useState()

  const lenngth = data.length

  const [Display, setDisplay] = React.useState('')
  // const [arrayData, setArraydata] = React.useState(data[page])

  console.log(data, 'daa')
  useEffect(() => {
    // dispatch(filterArrayDidmount())
    setFinalData(data[page])
    console.log(data[page], 'new')
  }, [])

  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(1)

  const finalData = data.at(page)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 1))
    setPage(0)
    dispatch(filterArray(rowsPerPage))
  }

  const handleChangein = (e) => {
    const value = e.target.value
    setDisplay(value)
    dispatch(filterwithname(value))
  }

  const clearFun = () => {
    setDisplay('')
  }

  return (
    <div className='App'>
      <Card variant='outlined' sx={{ margin: '5vh', padding: '5vh' }}>
        <div className='mainForm'>
          <SelectComponent />
          <TextField
            id='outlined-basic'
            label='Outlined'
            variant='outlined'
            sx={{ width: Display ? '65vw' : '75vw' }}
            onChange={handleChangein}
          />
          {Display && (
            <Button variant='outlined' onClick={clearFun}>
              Outlined
            </Button>
          )}
        </div>
        <div className='componentdrirection size'>
          <Checkbox />
          <Typography variant='h7' component='h2'>
            Name
          </Typography>
          <Typography variant='h7' component='h2'>
            Company
          </Typography>
          <Typography variant='h7' component='h2'>
            Role
          </Typography>
          <Typography variant='h7' component='h2'>
            Veified
          </Typography>
        </div>
        {data.map((datas) => {
          return <RenderComponent data={datas} />
        })}
        <Switch defaultChecked />
        <TablePagination
          component='div'
          count={lenngth}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </div>
  )
}

// temp.name.toLowerCase().startsWith(text)
export default App
