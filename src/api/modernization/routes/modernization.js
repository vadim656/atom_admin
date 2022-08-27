'use strict';

/**
 * modernization router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::modernization.modernization');
