import { createTypes, createReducer } from 'reduxsauce'

export const Types = createTypes(`
  SET_CITY
  SET_LIST
  SET_CURRENT_DAY
`, { prefix: 'WEATHER:' }
)

export const initialState = {
  city: {},
  list: [],
  currentDay: null
}

const setCity = (state = initialState, { payload: city }) => ({ ...state, city })
const setList = (state = initialState, { payload: list }) => ({ ...state, list })
const setCurrentDay = (state = initialState, { payload: currentDay }) => ({ ...state, currentDay })

const reducer = createReducer(initialState, {
  [Types.SET_CITY]: setCity,
  [Types.SET_LIST]: setList,
  [Types.SET_CURRENT_DAY]: setCurrentDay
})

export default reducer
