import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Main.html';
import './Main.scss';

@WithRender
@Component
export class Main extends Vue {

}
