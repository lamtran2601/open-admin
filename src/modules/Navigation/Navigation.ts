import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Navigation.html';
import './Navigation.scss';

@WithRender
@Component
export class Navigation extends Vue {
}
