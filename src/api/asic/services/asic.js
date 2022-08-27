'use strict';

/**
 * asic service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::asic.asic');
