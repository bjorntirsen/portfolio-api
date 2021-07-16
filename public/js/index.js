/* eslint-disable */
import axios from 'axios';

const sendProjectData = async (data) => {
  try {
    const url = '/api/v1/createProject';

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.data.status === 'success') {
      alert('Sucessfully added project');
    }
  } catch (err) {
    console.error('error', err);
  }
};

const projectDataForm = document.querySelector('.form-project-data');

if (projectDataForm)
  projectDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const subtitle = document.getElementById('subtitle').value;
    const description = document.getElementById('description').value;
    const dateFirstCompleted = document.getElementById('dateFirstCompleted').value;
    const siteLink = document.getElementById('siteLink').value;
    const techniquesUsed = document.getElementById('techniquesUsed').value;
    const githubRepo = document.getElementById('githubRepo').value;

    const data = {title, subtitle, description, dateFirstCompleted, siteLink, techniquesUsed, githubRepo}

    sendProjectData(data);
  });
