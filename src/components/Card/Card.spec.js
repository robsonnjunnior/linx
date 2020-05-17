import React from 'react'
import { render } from '@testing-library/react'
import Card from '.'

const currentDay = {
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

let mockCurrentDay = currentDay
const mockCity = {
  id: 3469968,
  name: 'Blumenau',
  coord: {
    lat: -26.9194,
    lon: -49.0661
  },
  country: 'BR',
  population: 293949,
  timezone: -10800,
  sunrise: 1589709008,
  sunset: 1589747727
}

jest.mock('react-redux', () => ({
  useSelector: () => ({
    currentDay: mockCurrentDay,
    city: mockCity
  })
}))

describe('Card', () => {
  beforeEach(() => {
    mockCurrentDay = currentDay
  })

  it('`container-card-id` must be renderer when currentDay is not null', async () => {
    const { getByTestId } = render(<Card />)
    const containerCard = getByTestId('container-card-id')

    expect(containerCard).toBeDefined()
  })


  it('firstChild must be null when currenDay is null', async () => {
    mockCurrentDay = null
    await jest.resetAllMocks()

    const { container } = render(<Card />)
    expect(container.firstChild).toBeNull()
  })
})
