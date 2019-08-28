import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Home.html';
import './Home.scss';
import { Layout } from '@/modules/Layout';

@WithRender
@Component({
  components: {
    Layout,
  },
})
export class Home extends Vue {

}
