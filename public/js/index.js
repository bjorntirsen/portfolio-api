/* eslint-disable */
import axios from 'axios';

import { login, logout } from './login';
import { showAlert } from './alerts';
import { sendProjectData } from './sendProjectData';

// DOM elements
const projectDataForm = document.querySelector('.form-project-data');
const loginForm = document.querySelector('.form-login');
const logOutBtn = document.querySelector('.nav__el--logout');

// DELEGATION
if (projectDataForm)
  projectDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const description = document.getElementById('description').value;
    const dateFirstCompleted =
      document.getElementById('dateFirstCompleted').value;
    const siteLink = document.getElementById('siteLink').value;
    const techniquesUsed = document.getElementById('techniquesUsed').value;
    const githubRepo = document.getElementById('githubRepo').value;

    const data = {
      title,
      subtitle,
      description,
      dateFirstCompleted,
      siteLink,
      techniquesUsed,
      githubRepo,
    };

    sendProjectData(data);
  });

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (logOutBtn) logOutBtn.addEventListener('click', logout);
