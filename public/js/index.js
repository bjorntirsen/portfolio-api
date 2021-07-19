/* eslint-disable */
import axios from 'axios';

import { login } from './login';
import { showAlert, hideAlert } from './alerts';
import { getProjectData } from './getProjectData';
import {
  sendProjectData,
  updateProjectData,
  deleteProject,
} from './sendProjectData';

window.setTimeout(hideAlert, 3000);

// DOM elements
const projectDataForm = document.querySelector('.form-project-data');
const projectDataFormUpdate = document.querySelector(
  '.form-project-data-update'
);
const loginForm = document.querySelector('.form-login');
const deleteBtn = document.getElementById('deleteBtn');

// DELEGATION
// 1) Create
if (projectDataForm)
  projectDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    data = getProjectData();
    sendProjectData(data);
  });

// 2) Update
if (projectDataFormUpdate)
  projectDataFormUpdate.addEventListener('submit', (e) => {
    e.preventDefault();
    data = getProjectData();
    updateProjectData(data);
  });

// 3) Delete
if (deleteBtn)
  deleteBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing...';
    const { projectId } = e.target.dataset;
    deleteProject(projectId);
  });

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

//Highlight the active page in nav
urlArray = window.location.href.split('/');
const currentPage = urlArray[urlArray.length - 1];
if (currentPage) {
  const currentLink = document.getElementById(currentPage);
  if (currentLink) currentLink.className += ' active text-decoration-underline';
}
