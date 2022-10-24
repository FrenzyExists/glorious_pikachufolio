import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter, faLinkedinIn, faLinux, faGithubAlt, faGitAlt, faPython, faJava, faVuejs, faReact, faHtml5, faCss3, faJs, faFigma, faDiscord } from '@fortawesome/free-brands-svg-icons'
import {faHeart, faDatabase, faMicrochip, faScroll, faCubes, faEnvelope, faBolt, faBoltLightning, faTerminal, faLayerGroup} from '@fortawesome/free-solid-svg-icons'
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'

import './assets/main.css'
import 'vue3-carousel/dist/carousel.css'

library.add(faTwitter, faLayerGroup, faScroll, faMicrochip, faGitAlt, faLinux, faLinkedinIn, faGithubAlt, faTerminal, faPython, faDiscord, faJava, faVuejs, faReact, faHtml5, faCss3, faJs, faFigma, faHeart, faDatabase, faCubes, faEnvelope, faBolt )
const app = createApp(App)
app.component('Carousel', Carousel)
app.component('Slide', Slide)
app.component('Navigation', Navigation)
app.component('Pagination', Pagination)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('')
app.use(router)

app.mount('#app')
