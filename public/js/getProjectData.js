/* eslint-disable */
export const getProjectData = () => {
  const data = {
    title: document.getElementById('title').value,
    subtitle: document.getElementById('subtitle').value,
    description: document.getElementById('description').value,
    dateFirstCompleted: document.getElementById('dateFirstCompleted').value,
    siteLink: document.getElementById('siteLink').value,
    techniquesUsed: document.getElementById('techniquesUsed').value,
    whatILearned: [{ paragraph: document.getElementById('paragraph').value, icons: document.getElementById('icons').value.split(', ') }],
    githubRepo: document.getElementById('githubRepo').value,
  };
  return data;
};
