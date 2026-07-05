document.addEventListener('DOMContentLoaded', () => {
  const userMenuBtn = document.getElementById('userMenuBtn');
  const userDropdown = document.getElementById('userDropdown');

  userMenuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = userMenuBtn.getAttribute('aria-expanded') === 'true';
    userMenuBtn.setAttribute('aria-expanded', !isExpanded);
    userDropdown.classList.toggle('show');
  });

  document.addEventListener('click', (e) => {
    if (!userMenuBtn.contains(e.target) && !userDropdown.contains(e.target)) {
      userMenuBtn.setAttribute('aria-expanded', 'false');
      userDropdown.classList.remove('show');
    }
  });
});
