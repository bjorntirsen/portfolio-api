/* eslint-disable */
import axios from 'axios';
//import { showAlert } from './alerts';

export const sendCoverImage = async (data) => {
  try {
    const id = document.getElementById('projectId').value;
    const url = `/admin/projects/image/${id}`;

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.data.status === 'success') {
      location.reload();
    }
  } catch (err) {
    console.error('error', err);
  }
};

export const sendProjectImages = async (data) => {
  try {
    const id = document.getElementById('projectId').value;
    const url = `/admin/projects/images/${id}`;

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.data.status === 'success') {
      location.reload();
    }
  } catch (err) {
    console.error('error', err);
  }
};
