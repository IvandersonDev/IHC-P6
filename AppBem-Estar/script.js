const apiUrl = 'http://localhost:5000/activities';

function fetchActivities() {
  const moods = Array.from(document.getElementById('mood').selectedOptions).map(option => option.value);
  const duration = document.getElementById('duration').value;
  const intensity = document.getElementById('intensity').value;

  if (moods.length === 0) {
    alert('Por favor, selecione pelo menos um humor.');
    return;
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const filteredActivities = data.filter(activity => {
        const hasMood = moods.some(mood => activity.mood.includes(mood));
        return hasMood && activity.duration === duration && activity.intensity === intensity;
      });
      displayActivities(filteredActivities);
    })
    .catch(error => console.error('Erro ao buscar atividades:', error));
}

function displayActivities(activities) {
  const activityList = document.getElementById('activity-list');
  activityList.innerHTML = ''; 

  if (activities.length === 0) {
    activityList.innerHTML = '<li class="list-group-item">Nenhuma atividade encontrada.</li>';
    return;
  }

  activities.forEach(activity => {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    
    const activityContent = `
      <div>
        <h5>${activity.name}</h5>
        <p>${activity.description}</p>
      </div>
    `;

    const favoriteButton = `<button class="btn btn-outline-primary" onclick="favoriteActivity(${activity.id})">Favoritar</button>`;

    li.innerHTML = activityContent + favoriteButton;
    activityList.appendChild(li);
  });
}

function favoriteActivity(activityId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  if (!favorites.includes(activityId)) {
    favorites.push(activityId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    alert('Atividade favoritada com sucesso!');
  }
  displayFavorites();
}

function displayFavorites() {
  const favoriteList = document.getElementById('favorite-list');
  favoriteList.innerHTML = ''; 
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  
  if (favorites.length === 0) {
    favoriteList.innerHTML = '<li class="list-group-item">Você ainda não tem atividades favoritas.</li>';
    return;
  }

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const favoriteActivities = data.filter(activity => favorites.includes(activity.id));
      favoriteActivities.forEach(activity => {
        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `<h5>${activity.name}</h5><p>${activity.description}</p>`;
        favoriteList.appendChild(li);
      });
    });
}

window.onload = displayFavorites;
