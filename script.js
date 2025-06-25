const projects = [
  {
    title: 'Portfolio Website',
    description: 'A responsive, modern portfolio built with HTML, CSS, and JavaScript.',
    image: 'images/portfolio.png',
    link: 'https://github.com/yourname/portfolio'
  },
  {
    title: 'Task Manager App',
    description: 'A full-stack task manager using Node.js, Express, MongoDB.',
    image: 'images/task-manager.png',
    link: 'https://github.com/yourname/task-manager'
  },
  {
    title: 'Weather Dashboard',
    description: 'An interactive weather app consuming OpenWeatherMap API.',
    image: 'images/weather-dashboard.png',
    link: 'https://github.com/yourname/weather-dashboard'
  }
];

const container = document.getElementById('projects');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';

  const img = document.createElement('img');
  img.src = proj.image;
  img.alt = proj.title;
  card.appendChild(img);

  const content = document.createElement('div');
  content.className = 'project-content';

  const h3 = document.createElement('h3');
  h3.textContent = proj.title;
  content.appendChild(h3);

  const p = document.createElement('p');
  p.textContent = proj.description;
  content.appendChild(p);

  const a = document.createElement('a');
  a.href = proj.link;
  a.target = '_blank';
  a.textContent = 'View on GitHub';
  content.appendChild(a);

  card.appendChild(content);
  container.appendChild(card);
});
