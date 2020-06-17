import { extend, localize } from "vee-validate";
import { required, min, integer } from "vee-validate/dist/rules";
import en from 'vee-validate/dist/locale/en.json'

extend('required', required)
extend('min', min)
extend('integer', integer)

localize('en', en)