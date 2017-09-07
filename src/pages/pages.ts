import { TodoPage } from './tabs-todo/tabs-todo';
import { HistoryPage } from './tabs-history/tabs-history';
import { MyPage } from './tabs-my/tabs-my';
import { TabsPage } from './tabs/tabs';
import { LoginPage } from './login/login';
import { TutorialPage } from './tutorial/tutorial';

// The page the user lands on after opening the app and without a session
export const FirstRunPage = LoginPage;

// The main page the user will see as they use the app over a long period of time.
// Change this if not using tabs
export const MainPage = TabsPage;

// The initial root pages for our tabs (remove if not using tabs)
export const Tab1Root = TodoPage;
export const Tab2Root = HistoryPage;
export const Tab3Root = MyPage;
