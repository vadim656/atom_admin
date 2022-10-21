'use strict';

/**
 * tip-fermy service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tip-fermy.tip-fermy');
