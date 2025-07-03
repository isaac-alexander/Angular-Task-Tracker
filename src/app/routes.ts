import {Routes} from '@angular/router';
import { Tasks } from './components/tasks/tasks';
import { About } from './components/about/about';

const routeConfig: Routes = [
  {
    path: '',
    component: Tasks,
  },
  {
    path: 'about',
    component: About,
  },
];
export default routeConfig;