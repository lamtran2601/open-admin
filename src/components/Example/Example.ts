import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Example.html';
import './Example.scss';

@WithRender
@Component
export class Example extends Vue {
}
