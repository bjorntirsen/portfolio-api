/* eslint-disable */
import { login } from './login';
import { showAlert, hideAlert } from './alerts';
import { getProjectData } from './getProjectData';
import { sendProjectData, updateProjectData } from './sendProjectData';
import {
  getPresentationData,
  updatePresentationData,
  addParagraph,
} from './updatePresentation';
import { sendCoverImage, sendProjectImages } from './sendImages';

window.setTimeout(hideAlert, 3000);

// DOM elements
const projectDataForm = document.querySelector('.form-project-data');
const projectDataFormUpdate = document.querySelector(
  '.form-project-data-update'
);
const presentationFormUpdate = document.querySelector(
  '.form-presentation-update'
);
const loginForm = document.querySelector('.form-login');
const deleteBtns = document.querySelectorAll('a.deleteBtn');
const addParagraphBtn = document.getElementById('addParagraphBtn');
const coverImageForm = document.querySelector('.form-project-cover');
const projectImagesForm = document.querySelector('.form-project-images');

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

if (presentationFormUpdate)
  presentationFormUpdate.addEventListener('submit', (e) => {
    e.preventDefault();
    data = getPresentationData();
    updatePresentationData(data);
  });

// 3) Delete
if (deleteBtns)
  deleteBtns.forEach((delBtn) => {
    delBtn.addEventListener('click', (e) => {
      e.target.textContent = 'Processing...';
    });
  });

if (addParagraphBtn)
  addParagraphBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addParagraph();
  });

if (loginForm)
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    login(email, password);
  });

if (coverImageForm)
  coverImageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (document.getElementById('image').files[0]) {
      document.getElementById('cover-img-submit').textContent = 'Processing...';
      const form = new FormData();
      form.append('image', document.getElementById('image').files[0]);
      sendCoverImage(form);
    } else showAlert('warning', 'Please select an image!', 5);
  });

if (projectImagesForm)
  projectImagesForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const images = document.getElementById('images');
    if (document.getElementById('images').files[0]) {
      document.getElementById('images-submit').textContent = 'Processing...';
      const form = new FormData();
      Array.from(images.files).forEach((image) => {
        form.append('images', image);
      });
      sendProjectImages(form);
    } else showAlert('warning', 'Please select at least one image!', 5);
  });

//Highlight the active page in nav
urlArray = window.location.href.split('/');
const currentPage = urlArray[urlArray.length - 1];
if (currentPage) {
  const currentLink = document.getElementById(currentPage);
  if (currentLink) currentLink.className += ' active text-decoration-underline';
}
