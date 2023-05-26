const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
  });

  Scenario('showing empty liked restaurants', ({ I }) => {
    //I.seeElement('#query');
    // I.seeElement('.query'); Menyebabkan error
    I.waitForElement('.restaurant-item_not_found', 5);
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');
  });

  Scenario('liking one restaurant', async ({ I }) => {
    I.waitForElement('.restaurant-item_not_found', 5);
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item_not_found');

    I.amOnPage('/');
    //pause();

    I.waitForElement('.restaurant-list__content', 5);
    I.seeElement('.restaurant-list__content a');

    const firstRestaurant = locate('.restaurant-list__content a').first();
    const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
    I.click(firstRestaurant);
    //I.click(locate('.restaurant-list__content a').first());

    I.waitForElement('#likeButton', 5);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    
    I.amOnPage('/#/like');

    I.waitForElement('.restaurant-item', 5);
    I.seeElement('.restaurant-item');
    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-list__content');
    
    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
  });
