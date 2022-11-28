import mainSlice from './features/mainSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    main: mainSlice,
  },
})
