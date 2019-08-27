import { Component, Vue } from 'vue-property-decorator';
import { HelloWorld } from '@/components/HelloWorld';
import WithRender from './template.html';

@WithRender
@Component({
  components: {
    HelloWorld,
  },
})
export class Home extends Vue {

}
