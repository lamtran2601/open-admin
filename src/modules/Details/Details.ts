import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Details.html';
import './Details.scss';

@WithRender
@Component
export class Details extends Vue {
}
