import { AjaxClient } from './AjaxClient.js';

export let ajax = new AjaxClient(); // eslint-disable-line import/no-mutable-exports

/**
 * setAjax allows the Application Developer to override the globally used instance of {@link:ajax}.
 * All interactions with {@link:ajax} after the call to setAjax will use this new instance
 * (so make sure to call this method before dependant code using {@link:ajax} is ran and this
 * method is not called by any of your (indirect) dependencies.)
 * @param {AjaxClient} newAjax the globally used instance of {@link:ajax}.
 */
export function setAjax(newAjax) {
  ajax = newAjax;
}
