import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <div class="content">
        <h2 class="content__like">Your Liked Restaurant</h2>
        <div id="restaurants" class="restaurants">
 
        </div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    if (restaurants.length === 0) {
      restaurantsContainer.innerHTML = '<p class="restaurant-item_not_found">Tidak ada restaurant untuk ditampilkan</p>';
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML = '';

      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Like;
