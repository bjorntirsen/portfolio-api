/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const sendProjectData = async (data) => {
  try {
    const url = '/admin/projects';

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.data.status === 'success') {
      location.assign('/admin');
    }
  } catch (err) {
    console.error('error', err);
  }
};

export const updateProjectData = async (data) => {
  try {
    const id = document.getElementById('projectId').value;
    const url = `/admin/projects/${id}`;

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Sucessfully updated project!');
    }
  } catch (err) {
    console.error('error', err);
  }
};

export const deleteProject = async (id) => {
  try {
    const url = `/admin/projects/${id}`;

    const res = await axios({
      method: 'DELETE',
      url,
    });

    location.reload();
  } catch (err) {
    console.error('error', err);
  }
};
