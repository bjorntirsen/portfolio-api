/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const getPresentationData = () => {
  let PresentaionArray = [];
  const paragraphs = document.getElementsByName('paragraph');
  paragraphs.forEach((paragraph, index) => {
    if (paragraph.value !== '') {
      PresentaionArray.push(paragraph.value);
    }
  });
  return {
    presentation: PresentaionArray,
  };
};

export const updatePresentationData = async (data) => {
  try {
    const url = `/admin/presentation`;

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', 'Sucessfully updated presentation!');
    }
  } catch (err) {
    console.error('error', err);
  }
};

export const addParagraph = () => {
  const presentationContainer = document.getElementById(
    'presentationContainer'
  );
  const newDiv = document.createElement('div');
  newDiv.classList.add('mb-3');
  const newTextarea = document.createElement('textarea');
  newTextarea.classList.add('form-control');
  newTextarea.setAttribute('type', 'text');
  newTextarea.setAttribute('name', 'paragraph');
  newTextarea.setAttribute('rows', 4);
  newTextarea.setAttribute('cols', 50);
  newDiv.appendChild(newTextarea);
  presentationContainer.appendChild(newDiv);
};
