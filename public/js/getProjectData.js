/* eslint-disable */
export const getProjectData = () => {
  const data = {
    title: document.getElementById('title').value,
    subtitle: document.getElementById('subtitle').value,
    description: document.getElementById('description').value,
    dateFirstCompleted: document.getElementById('dateFirstCompleted').value,
    siteLink: document.getElementById('siteLink').value,
    techniquesUsed: document.getElementById('techniquesUsed').value,
    githubRepo: document.getElementById('githubRepo').value,
  };
  return data;
};
