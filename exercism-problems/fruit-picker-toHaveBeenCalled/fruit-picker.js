/// <reference path="./global.d.ts" />
//
// @ts-check
//
// The lines above enable type checking for this file. Various IDEs interpret
// the @ts-check and reference directives. Together, they give you helpful
// autocompletion when implementing this exercise. You don't need to understand
// them in order to use it.
//

'use strict';

// In your own projects, files, and code, you can play with @ts-check as well.
import { notify } from './notifier';
import { order } from './grocer';

/**
 * @desc Notifies about a successful operation by displaying a success message.
 */
export function onSuccess() {
  notify({ message: 'SUCCESS' });
}

/**
 * @desc Notifies about an error by displaying an error message.
 */
export function onError() {
  notify({ message: 'ERROR' });
}

/**
 * @desc Orders items from a grocer based on the provided query.
 * @param {GrocerQuery} query - The query specifying the items to order.
 * @param {FruitPickerSuccessCallback} onSuccessCallback - Callback function for successful orders.
 * @param {FruitPickerErrorCallback} onErrorCallback - Callback function for handling errors.
 */
export function orderFromGrocer(query, onSuccessCallback, onErrorCallback) {
  order(query, onSuccessCallback, onErrorCallback);
}

/**
 * @desc Places an order for a specific fruit variety and quantity.
 * @param {string} variety - The variety of the fruit to order.
 * @param {number} quantity - The quantity of the fruit to order.
 */
export function postOrder(variety, quantity) {
  order({ variety, quantity }, onSuccess, onError);
}