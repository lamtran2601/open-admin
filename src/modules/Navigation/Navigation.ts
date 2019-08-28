import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Navigation.html';
import './Navigation.scss';
import { Menu } from './Menu';

@WithRender
@Component({
  components: {
    Menu,
  },
})
export class Navigation extends Vue {
}
