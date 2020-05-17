import { createTypes } from 'reduxsauce';

export const Types = createTypes(`
  FETCH_WEATHER
`, { prefix: 'WEATHER:' }
);

export default Types;
