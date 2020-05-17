import weatherData from './weatherData';
import defaultData from './__mocks__/weatherDataRequest.json';

describe('weatherData', () => {
  it('weatherData should return only six items', () => {
    expect(weatherData(defaultData.list)).toHaveLength(6);
  });
});