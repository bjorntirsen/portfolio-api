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
      showAlert('success', 'Sucessfully added project!');
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

    await axios({
      method: 'DELETE',
      url,
    });

    showAlert('success', 'Sucessfully deleted project!');
    const el = document.getElementById(`row${id}`);
    if (el) el.parentElement.removeChild(el);
  } catch (err) {
    console.error('error', err);
  }
};
