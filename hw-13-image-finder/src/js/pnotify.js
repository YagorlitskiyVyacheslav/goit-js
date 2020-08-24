import {
  alert,
  defaultModules,
  success
} from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import * as PNotifyMobile from '@pnotify/mobile';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

export default {
    successSearch(formValue, amountImg) {
        return success({
          text: `${amountImg} results were found for the search result '${formValue}'`
        })
    },
    successLoad(formValue, amountImg) {
        return success({
          text: `Uploaded ${amountImg} images for '${formValue}'`
        })
    },
    error() {
        return alert({
          text: "No images found for your request",
          type: 'error'
        })
    }
}