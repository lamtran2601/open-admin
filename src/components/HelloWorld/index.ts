import { Component, Vue } from 'vue-property-decorator';
import WithRender from './template.html';
import './template.scss';

@WithRender
@Component({
  props: {
    msg: {
      type: String,
      default: 'I am using TypeScript classes with Vue!',
    },
  },
})
export class HelloWorld extends Vue {

}
