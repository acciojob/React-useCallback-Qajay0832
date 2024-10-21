import React, { useCallback, useState } from 'react'
import SkillList from './SkillList';

const UseCallbackComp = () => {
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);

    const addSkill=useCallback(()=>{
        if(!skills.includes(skill) &&skill.trim()){ 
            setSkills((prevSkills) => [...prevSkills, skill.trim()])
            setSkill('')
        }
        
    },[skills,skill]);
    const removeSkill=useCallback((skill)=>{
        setSkills((prevSkills) => [...prevSkills.filter((e)=>e!==skill)])
    },[])
    return (
        <div>
            <h2 id='heading'>Manage Your Skills</h2>
            <input
                id="skill-input"
                type="text"
                value={skill}
                onChange={(e) => setSkill((e.target.value))}
                placeholder="Add a skill"
            />
            <button id="skill-add-btn" onClick={addSkill}>Add Skill</button>
            <SkillList skills={skills} removeSkill={removeSkill} />
        </div>
    )
}

export default UseCallbackComp