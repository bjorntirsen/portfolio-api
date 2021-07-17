/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const sendProjectData = async (data) => {
  try {
    const url = '/api/v1/projects';

    const res = await axios({
      method: 'POST',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Sucessfully added project');
    }
  } catch (err) {
    console.error('error', err);
  }
};
