import { Component, Vue } from 'vue-property-decorator';
import WithRender from './SubHeader.html';
import './SubHeader.scss';

@WithRender
@Component
export class SubHeader extends Vue {
}
