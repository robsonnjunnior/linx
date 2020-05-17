import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Types } from 'store/ducks/weather'
import WeatherItem from '.'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch
}))

const weather = {
  dt: 1589749200,
  main: {
    temp: 19.77,
    feels_like: 21.59,
    temp_min: 18.81,
    temp_max: 19.77,
    pressure: 1015,
    sea_level: 1018,
    grnd_level: 1010,
    humidity: 79,
    temp_kf: 0.96
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01n'
    }
  ],
  clouds: {
    all: 0
  },
  wind: {
    speed: 0.25,
    deg: 281
  },
  sys: {
    pod: 'n'
  },
  dt_txt: '2020-05-17 21:00:00'
}

describe('WeatherItem', () => {
  it('firstChild should be defined', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeDefined()
  })

  it('dispatch should be called when container is clicked', () => {
    const { getByTestId } = renderComponent()

    const container = getByTestId('container-id')
    fireEvent.click(container)

    expect(mockDispatch).toHaveBeenCalledWith({
      type: Types.SET_CURRENT_DAY,
      payload: weather
    })
  })
})

function renderComponent() {
  const props = { weather }

  return render(<WeatherItem {...props} />)
}
