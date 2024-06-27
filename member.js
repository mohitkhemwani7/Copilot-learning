function skillsMember() {
  return {
    skills: ['JS', 'React', 'Node', 'MongoDB'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
  };
}