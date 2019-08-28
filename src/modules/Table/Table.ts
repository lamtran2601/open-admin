import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Table.html';
import './Table.scss';

@WithRender
@Component({
  props: {
    data: Array,
  },
})
export class Table extends Vue {
}
