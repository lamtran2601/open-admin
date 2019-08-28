import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Main.html';
import './Main.scss';
import { SubHeader } from '../SubHeader';
import { Table } from '../Table';
import { SubFooter } from '../SubFooter';

@WithRender
@Component({
  components: {
    SubHeader,
    Table,
    SubFooter,
  },
})
export class Main extends Vue {
  public data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles',
    };
    return {
      tableData: Array(20).fill(item),
    };
  }
}
