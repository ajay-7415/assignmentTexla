import { createSlice } from '@reduxjs/toolkit'
import { data } from '../../data'

const mainSlice = createSlice({
  name: 'book',
  initialState: {
    data: data,
  },
  reducers: {
    filterdata: (state, { payload }) => {
      const newData = state.data.filter((datas) => {
        return datas.id !== payload
      })
      state.data = newData
    },
    filterwithname: (state, { payload }) => {
      const newData = state.data.filter((datas) => {
        return datas.name.toLowerCase().startsWith(payload)
      })
      state.data = newData
    },
    filterArray: (state, { payload }) => {
      const items = Array.from({ length: 25 }, (_, index) => {
        const start = index * payload
        const tempItems = data.slice(start, start + payload)
        console.log(tempItems, 'temp')
        return tempItems
      })
      state.data = items
    },
    filterArrayDidmount: (state) => {
      const items = Array.from({ length: 5 }, (_, index) => {
        const start = index * 5
        const tempItems = data.slice(start, start + 5)
        console.log(tempItems, 'temp')
        return tempItems
      })
      state.data = items
    },
  },
})

export default mainSlice.reducer
export const { filterdata, filterwithname, filterArray, filterArrayDidmount } =
  mainSlice.actions
