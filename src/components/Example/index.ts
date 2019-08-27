import { Component, Vue } from 'vue-property-decorator';
import WithRender from './template.html';
import './template.scss';

@WithRender
@Component
export class Example extends Vue {
}
