import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Footer.html';
import './Footer.scss';

@WithRender
@Component
export class Footer extends Vue {
}
