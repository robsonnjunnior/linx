import React from 'react'
import { render } from '@testing-library/react'
import WeatherList from '.'

let mockList = []
const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  useSelector: () => ({ list: mockList }),
  useDispatch: () => mockDispatch
}))

describe('WeatherList', () => {
  it('firstChild must be null when list is a empty array', () => {
    const { container } = renderComponent()
    expect(container.firstChild).toBeNull()
  })

  it('FORECAST_FOR_THE_WEEK must be render when list is not empty', async () => {
    mockList = [
      {
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
    ]
    await jest.resetAllMocks()

    const { container } = renderComponent()
    expect(container.firstChild).toBeDefined()
  })
})

function renderComponent() {
  return render(<WeatherList />)
}
