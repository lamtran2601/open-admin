import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Menu.html';
import './Menu.scss';

@WithRender
@Component
export class Menu extends Vue {
}
