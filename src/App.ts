import { Component, Vue } from 'vue-property-decorator';
import WithRender from './App.html';
import './styles/App.scss';

@WithRender
@Component
export class App extends Vue {

}
