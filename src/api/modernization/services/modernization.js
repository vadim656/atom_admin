'use strict';

/**
 * modernization service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::modernization.modernization');
