/* eslint-disable */
export const getProjectData = () => {
  const getWhatILearnedArray = () => {
    let whatILearnedArray = [];
    const iconArrays = document.getElementsByName('icons');
    const paragraphs = document.getElementsByName('paragraph');
    iconArrays.forEach((array) => {
      if (array.value !== '') {
        const splitArray = array.value.split(', ');
        let obj = { icons: splitArray };
        whatILearnedArray.push(obj);
      }
    });
    paragraphs.forEach((paragraph, index) => {
      if (paragraph.value !== '') {
        whatILearnedArray[index].paragraph = paragraph.value;
      }
    });
    return whatILearnedArray;
  };

  const data = {
    title: document.getElementById('title').value,
    subtitle: document.getElementById('subtitle').value,
    description: document.getElementById('description').value,
    dateFirstCompleted: document.getElementById('dateFirstCompleted').value,
    siteLink: document.getElementById('siteLink').value,
    whatILearned: getWhatILearnedArray(),
    githubRepo: document.getElementById('githubRepo').value,
  };
  return data;
};
