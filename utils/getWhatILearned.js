module.exports = (project) => ({
  icons1: project.whatILearned[0]
    ? project.whatILearned[0].icons.join(', ')
    : '',
  para1: project.whatILearned[0] ? project.whatILearned[0].paragraph : '',
  icons2: project.whatILearned[1]
    ? project.whatILearned[1].icons.join(', ')
    : '',
  para2: project.whatILearned[1] ? project.whatILearned[1].paragraph : '',
  icons3: project.whatILearned[2]
    ? project.whatILearned[2].icons.join(', ')
    : '',
  para3: project.whatILearned[2] ? project.whatILearned[2].paragraph : '',
  icons4: project.whatILearned[3]
    ? project.whatILearned[3].icons.join(', ')
    : '',
  para4: project.whatILearned[3] ? project.whatILearned[3].paragraph : '',
});
