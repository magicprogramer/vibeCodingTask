import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const submitPrompt = createAsyncThunk(
  'form/submitPrompt',
  async (prompt, thunkAPI) => {
    const response = await axios.post('http://localhost:4003/sections', { prompt })
    return response.data
  }
)

export const getOldSections = createAsyncThunk(
  'form/getOldSections',
  async () => {
    const response = await axios.get('http://localhost:4003/sections/old')
    return response.data
  }
)

const formSlice = createSlice({
  name: 'form',
  initialState: {
    prompt: '',
    loading: false,
    previewData: null,
    oldSections: [],
    loadingOld: false,
  },
  reducers: {
    setPrompt(state, action) {
      state.prompt = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitPrompt.pending, (state) => {
        state.loading = true
        state.previewData = null
      })
      .addCase(submitPrompt.fulfilled, (state, action) => {
        state.loading = false
        state.previewData = action.payload
      })
      .addCase(submitPrompt.rejected, (state) => {
        state.loading = false
        state.previewData = null
      })
      .addCase(getOldSections.pending, (state) => {
        state.loadingOld = true
      })
      .addCase(getOldSections.fulfilled, (state, action) => {
        state.loadingOld = false
        state.oldSections = action.payload
      })
      .addCase(getOldSections.rejected, (state) => {
        state.loadingOld = false
        state.oldSections = []
      })
  },
})

export const { setPrompt } = formSlice.actions
export default formSlice.reducer
