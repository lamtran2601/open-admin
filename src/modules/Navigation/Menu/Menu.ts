import { Component, Vue } from 'vue-property-decorator';
import WithRender from './Menu.html';
import './Menu.scss';

const menus = [
  {
    title: 'User',
    path: '/user',
    icon: 'el-icon-user',
  },
  {
    title: 'Post',
    path: '/post',
    icon: 'el-icon-message',
    subMenu: [
      {
        title: 'Video',
        path: '/video',
      },
      {
        title: 'Music',
        path: '/music',
        icon: 'el-icon-message',
      },
    ],
  },

];

@WithRender
@Component
export class Menu extends Vue {
  public data() {
    return {
      menus,
    };
  }
}
