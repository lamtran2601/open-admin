import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import './styles/App.scss';
import { Home } from './views/Home/Home';

@WithRender
@Component({
  components: {
    Home,
  },
})
export class App extends Vue {

}
