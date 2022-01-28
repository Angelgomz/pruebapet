import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome,faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHome,faShoppingBag)
Vue.component('font-awesome-icon', FontAwesomeIcon)