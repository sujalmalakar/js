const restaurantURL =
  'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

const restaurantList = document.querySelector('#restaurant-list');
const modal = document.querySelector('#restaurant-modal');
const modalContent = document.querySelector('#modal-content');
const closeModal = document.querySelector('#close-modal');
const message = document.querySelector('#message');

async function fetchData(url, options = {}) {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(
      `Request failed: ${response.status} ${response.statusText}`
    );
  }

  return response.json();
}

async function getRestaurants() {
  try {
    message.textContent = 'Loading restaurants...';

    const restaurants = await fetchData(restaurantURL);

    message.textContent = '';

    displayRestaurants(restaurants);
  } catch (error) {
    console.error(error);

    message.textContent =
      'Could not load restaurants. Make sure you are connected to the Metropolia network or VPN.';
  }
}

function displayRestaurants(restaurants) {
  restaurantList.innerHTML = '';

  restaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement('div');

    restaurantCard.classList.add('restaurant');

    restaurantCard.innerHTML = `
      <h2>${restaurant.name}</h2>

      <p>
        ${restaurant.address || ''}
      </p>

      <p>
        ${restaurant.postalCode || ''}
        ${restaurant.city || ''}
      </p>

      <p>
        ${restaurant.company || ''}
      </p>
    `;

    restaurantCard.addEventListener('click', () => {
      showRestaurant(restaurant);
    });

    restaurantList.appendChild(restaurantCard);
  });
}

async function showRestaurant(restaurant) {
  modalContent.innerHTML = `
    <h2>${restaurant.name}</h2>

    <p>
      <strong>Company:</strong>
      ${restaurant.company || 'Not available'}
    </p>

    <p>
      <strong>Address:</strong>
      ${restaurant.address || ''}
      ${restaurant.postalCode || ''}
      ${restaurant.city || ''}
    </p>

    <p>
      <strong>Phone:</strong>
      ${restaurant.phone || 'Not available'}
    </p>

    <h3>Today's menu</h3>

    <p>Loading menu...</p>
  `;

  modal.showModal();

  try {
    const menuURL = `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${restaurant._id}/en`;

    const menu = await fetchData(menuURL);

    displayMenu(restaurant, menu);
  } catch (error) {
    console.error(error);

    modalContent.innerHTML += `
      <p class="error">
        Could not load today's menu.
      </p>
    `;
  }
}

function displayMenu(restaurant, menu) {
  let menuHTML = '';

  if (menu.courses && menu.courses.length > 0) {
    menu.courses.forEach((course) => {
      menuHTML += `
        <div class="menu-item">

          <h4>${course.name}</h4>

          <p>
            <strong>Price:</strong>
            ${course.price || 'Not available'}
          </p>

          <p>
            <strong>Diets:</strong>
            ${course.diets || 'Not specified'}
          </p>

        </div>
      `;
    });
  } else {
    menuHTML = `
      <p>No menu available for today.</p>
    `;
  }

  modalContent.innerHTML = `
    <h2>${restaurant.name}</h2>

    <p>
      <strong>Company:</strong>
      ${restaurant.company || 'Not available'}
    </p>

    <p>
      <strong>Address:</strong>
      ${restaurant.address || ''}
      ${restaurant.postalCode || ''}
      ${restaurant.city || ''}
    </p>

    <p>
      <strong>Phone:</strong>
      ${restaurant.phone || 'Not available'}
    </p>

    <h3>Today's menu</h3>

    ${menuHTML}
  `;
}

closeModal.addEventListener('click', () => {
  modal.close();
});

getRestaurants();
