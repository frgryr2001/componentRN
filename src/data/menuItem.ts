import {MenuItem} from '../interfaces/appInterfaces';

export const menuItems: MenuItem[] = [
  {
    name: 'Animation 101',
    icon: 'cube-outline',
    component: 'Animation101Screen',
  },
  {
    name: 'Animation 102',
    icon: 'albums-outline',
    component: 'Animation102Screen',
  },
  {
    name: 'Switches',
    icon: 'toggle-outline',
    component: 'SwitchScreen',
  },
  {
    name: 'Alerts',
    icon: 'alert-circle-outline',
    component: 'AlertScreen',
  },
  {
    name: 'Text inputs',
    icon: 'document-text-outline',
    component: 'TextInputScreen',
  },
  {
    name: 'Modal ',
    icon: 'document-text-outline',
    component: 'ModalScreen',
  },
  {
    name: 'InfiniteScroll',
    icon: 'document-text-outline',
    component: 'InfiniteScrollScreen',
  },
  {
    name: 'Slide',
    icon: 'document-text-outline',
    component: 'SlideScreen',
  },
  {
    name: 'ChangeTheme',
    icon: 'document-text-outline',
    component: 'ChangeThemeScreen',
  },
];
