import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Home.html';
import './Home.scss';
import { Navigation } from '@/modules/Navigation';
import { Header } from '@/modules/Header';
import { Footer } from '@/modules/Footer';
import { Main } from '@/modules/Main';

@WithRender
@Component({
  components: {
    Navigation,
    Header,
    Main,
    Footer,
  },
})
export class Home extends Vue {

}
