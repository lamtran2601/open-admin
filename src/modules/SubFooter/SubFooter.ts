import { Component, Vue } from 'vue-property-decorator';
import WithRender from './SubFooter.html';
import './SubFooter.scss';

@WithRender
@Component
export class SubFooter extends Vue {
}
