import { createBrowserRouter } from 'react-router-dom';

import Home from '../containers/Home';

const homeRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
]);

export default homeRouter;
