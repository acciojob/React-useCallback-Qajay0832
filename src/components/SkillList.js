import React from 'react'

const SkillList = ({skills,removeSkill}) => {
    
  return (
    <ul id='skill-number-idx'>
        {skills.map((e,i)=><li key={i} id={'skill-number-'+i} onClick={()=>removeSkill(e)}>{e}</li>)}
    </ul>
  )
}

export default SkillList