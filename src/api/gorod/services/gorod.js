'use strict';

/**
 * gorod service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gorod.gorod');
