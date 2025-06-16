const form = document.getElementById('project-form');
const projectsEl = document.getElementById('projects');
let projects = JSON.parse(localStorage.getItem('projects')) || [];

function saveAndRender() {
  localStorage.setItem('projects', JSON.stringify(projects));
  renderProjects();
}

function renderProjects() {
  projectsEl.innerHTML = '';
  projects.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = `project ${p.status}`;
    div.innerHTML = `
      <div>
        <strong>${p.title}</strong> (${p.dueDate || 'No due date'})
      </div>
      <div>
        <select data-index="${i}" class="status-select">
          <option value="planned" ${p.status==='planned'?'selected':''}>Planned</option>
          <option value="in-progress" ${p.status==='in-progress'?'selected':''}>In Progress</option>
          <option value="completed" ${p.status==='completed'?'selected':''}>Completed</option>
        </select>
        <button data-index="${i}" class="delete-btn">&times;</button>
      </div>
    `;
    projectsEl.appendChild(div);
  });
  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      projects.splice(btn.dataset.index, 1);
      saveAndRender();
    });
  });
  document.querySelectorAll('.status-select').forEach(sel => {
    sel.addEventListener('change', () => {
      projects[sel.dataset.index].status = sel.value;
      saveAndRender();
    });
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const title = document.getElementById('title').value.trim();
  const dueDate = document.getElementById('due-date').value;
  const status = document.getElementById('status').value;
  if (!title) return;
  projects.push({ title, dueDate, status });
  form.reset();
  saveAndRender();
});

// initial render
renderProjects();
