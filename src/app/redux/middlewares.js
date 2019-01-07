import { createLogger } from 'redux-logger';
import { LOGGER } from '@config/development';

const logger =  createLogger()

const middlewares = [
];

if (__DEV__ && LOGGER) {
    middlewares.push(logger)
} 

export default middlewares;