'use strict';

/**
 * tip-rabot service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tip-rabot.tip-rabot');
