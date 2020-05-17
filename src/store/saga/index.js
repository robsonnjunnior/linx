import axios from 'axios'
import { put, takeLatest, all } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import parseWeatherData from 'utils/parsers/weatherData'
import { Types } from 'store/saga/types'
import { Types as LoaderTypes } from 'store/ducks/loader'
import { Types as WeatherTypes } from 'store/ducks/weather'

function* fetchWeather({ payload, t }) {
  const params = { q: payload }

  yield put({ type: LoaderTypes.SET_LOADING, payload: true })

  try {
    const { data } = yield axios.get('/forecast', { params })

    const city = data.city
    const weather = parseWeatherData(data.list)

    yield all([
      put({ type: WeatherTypes.SET_LIST, payload: weather }),
      put({ type: WeatherTypes.SET_CITY, payload: city }),
      put({ type: WeatherTypes.SET_CURRENT_DAY, payload: weather[0] })
    ])
  } catch (e) {
    toast.error(t('CITY_NOT_FOUND'))
  } finally {
    yield put({ type: LoaderTypes.SET_LOADING, payload: false })
  }
}

function* mySaga() {
  yield all([
    takeLatest(Types.FETCH_WEATHER, fetchWeather)
  ])
}

export default mySaga
