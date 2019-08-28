import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import './styles/App.scss';
import { Layout } from './views/Layout';

@WithRender
@Component({
  components: {
    Layout,
  },
})
export class App extends Vue {

}
