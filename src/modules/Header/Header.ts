import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Header.html';
import './Header.scss';

@WithRender
@Component
export class Header extends Vue {
}
