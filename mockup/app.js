document.addEventListener('DOMContentLoaded', () => {
  const roleButtons = document.querySelectorAll('.role-btn');
  const emailLabel = document.getElementById('emailLabel');
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const passwordToggle = document.getElementById('passwordToggle');
  const eyeIcon = document.getElementById('eyeIcon');
  const loginForm = document.getElementById('loginForm');
  const alertBanner = document.getElementById('alertBanner');
  const alertMessage = document.getElementById('alertMessage');
  const submitBtn = document.getElementById('submitBtn');

  const roleConfig = {
    student: {
      label: 'Student ID or email',
      placeholder: 'e.g. 24101A0061 or gaurav@vit.edu.in'
    },
    faculty: {
      label: 'Faculty ID or email',
      placeholder: 'e.g. INFT_RVD or name.surname@vit.edu.in'
    },
    admin: {
      label: 'Administrator email',
      placeholder: 'e.g. admin.office@vit.edu.in or admin_office'
    }
  };

  roleButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      roleButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');

      const selectedRole = button.getAttribute('data-role');
      if (roleConfig[selectedRole]) {
        emailLabel.textContent = roleConfig[selectedRole].label;
        emailInput.placeholder = roleConfig[selectedRole].placeholder;
        emailInput.value = '';
        hideAlert();
      }
    });
  });

  let showPassword = false;
  passwordToggle.addEventListener('click', () => {
    showPassword = !showPassword;
    passwordInput.type = showPassword ? 'text' : 'password';
    if (showPassword) {
      eyeIcon.innerHTML = `
        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
        <line x1="1" y1="1" x2="23" y2="23"></line>
      `;
      passwordToggle.setAttribute('aria-label', 'Hide password');
    } else {
      eyeIcon.innerHTML = `
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      `;
      passwordToggle.setAttribute('aria-label', 'Show password');
    }
  });

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    hideAlert();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    const activeRole = document.querySelector('.role-btn.active').getAttribute('data-role');

    if (!email) {
      showAlert('Please enter your ID.');
      emailInput.focus();
      return;
    }
    if (!password) {
      showAlert('Please enter your password.');
      passwordInput.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Authenticating...';

    setTimeout(() => {
      let isSuccess = false;
      let redirectUrl = '';

      if (activeRole === 'student') {
        if ((email === 'gaurav@vit.edu.in' || email === '24101A0061') && password === '12345678') {
          isSuccess = true;
          redirectUrl = 'stud_dash.html';
        }
      } else if (activeRole === 'faculty') {
        if (email === 'INFT_RVD' && password === '12345678') {
          isSuccess = true;
          redirectUrl = 'faculty_dash.html';
        }
      } else if (activeRole === 'admin') {
        if ((email === 'admin.office@vit.edu.in' || email === 'admin_office') && password === '12345678') {
          isSuccess = true;
          redirectUrl = 'admin_dash.html';
        }
      }

      if (isSuccess) {
        submitBtn.textContent = 'Redirecting...';
        submitBtn.style.backgroundColor = 'var(--success)';
        alertBanner.style.display = 'flex';
        alertBanner.style.backgroundColor = '#ecfdf5';
        alertBanner.style.borderColor = '#a7f3d0';
        alertBanner.style.color = 'var(--success)';
        alertBanner.querySelector('svg').style.color = 'var(--success)';
        alertMessage.textContent = 'Authentication successful. Welcome back!';
        
        setTimeout(() => {
          window.location.href = redirectUrl;
        }, 800);
      } else {
        showAlert('Incorrect ID or password. Please try again.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Sign in';
      }
    }, 1000);
  });

  function showAlert(message) {
    alertBanner.style.display = 'flex';
    alertBanner.style.backgroundColor = '#fde8e8';
    alertBanner.style.borderColor = '#f8b4b4';
    alertBanner.style.color = 'var(--danger)';
    alertBanner.querySelector('svg').style.color = 'var(--danger)';
    alertMessage.textContent = message;
  }

  function hideAlert() {
    alertBanner.style.display = 'none';
  }
});
