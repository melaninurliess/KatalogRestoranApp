import ExploreRestaurants from '../views/pages/explore-restaurant';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': ExploreRestaurants,
  '/home': ExploreRestaurants,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
