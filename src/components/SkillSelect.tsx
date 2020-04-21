import React, { ChangeEvent } from 'react';
import './SkillSelect.css';

const SkillSelect = (props: { value: string[]; skills: string[]; handleChangeSkill: (event: ChangeEvent<HTMLSelectElement>) => void; }) => {
  const { value, skills, handleChangeSkill } = props;
  return (
    <div>
      <label>Skill:</label>
      <input required className="skill" value={value.join(';')} />
      <select onChange={handleChangeSkill} multiple>
        {skills.map(skill => <option value={skill} key={skill}>{skill}</option>)}
      </select>
    </div>
  );
};

export default SkillSelect;
