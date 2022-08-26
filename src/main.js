import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/tailwind.css'
import routes from './routes/routes'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
const app = createApp(App);
app.use(routes);
library.add(fas);
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#root');
app.config.productionTip = false