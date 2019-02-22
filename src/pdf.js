'use strict';

import {
    Platform
} from 'react-native';

import {
    Launch
} from './launcher';

import _ from 'lodash';

/**
 * @type {string}
 */
//const PDF = 'pdf:';


/**
 * Launches a PDF request
 * @param filename
 * @returns {Promise}
 * @constructor
 */
const PDF = (filename) =>
{
    return new Promise((resolve, reject) => {

        if (!_.isString(phone)) reject('The provided filename number must be a string');

        Launch(url).then(() => resolve()).catch(error => {

            reject(error);
        });
    });
}

/**
 * @exports
 */
export {
    PDF
}
