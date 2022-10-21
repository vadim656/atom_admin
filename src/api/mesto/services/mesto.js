'use strict';

/**
 * mesto service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mesto.mesto');
