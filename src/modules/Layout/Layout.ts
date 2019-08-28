import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Layout.html';
import './Layout.scss';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';


@WithRender
@Component({
  components: {
    Navigation,
    Header,
    Main,
    Footer,
  },
})
export class Layout extends Vue {

}
