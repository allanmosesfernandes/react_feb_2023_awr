import React from 'react'
import "./skills.scss";
import Robot from "../../assets/images/skills/robot.png"
import Analysis from "../../assets/images/skills/analysis.png"
import Tools from "../../assets/images/skills/digital-tools.png"
import ERP from "../../assets/images/skills/erp.png"
const SkillsComponent = () => {
  return (
    <div className='skills-container'>
        <h2>Skills / Tools </h2>
        <div className="skills__block__container">
        <div className="skills__tools__left">
            <div className="icons">
                <img src={Analysis} alt="Analysis" />
                <div className='skills__details'>
                    <h3>Analysis </h3>
                    <p>
                        As part of my portfolio, I possess a strong command of a range of analysis tools, including MS Excel, Power BI, Tableau, and PLM software, which enable me to perform efficient and accurate data analysis.
                    </p>
                </div>
            </div>
            <div className="icons">
                <img src={ERP} alt="Analysis" />
                <div className='skills__details'>
                    <h3>ERP Tools</h3>
                    <p>
                       With my proficiency in ERP tools, I am adept in utilizing SAP Logon to streamline and optimize various business processes, resulting in improved efficiency and productivity.
                    </p>
                </div>
            </div>
        </div>
        
        <img src={Robot} alt="Tools" />
        
        <div className="skills__tools__left">
            <div className="icons">
                <img src={Tools} alt="Analysis" />
                <div className='skills__details'>
                    <h3>Digital Tools</h3>
                    <p>
                        As an individual with a strong expertise in digital and presentation tools, my skills encompass Adobe Creative Suite, MS Word, and MS Powerpoint, enabling me to produce engaging and visually appealing content for various purposes.
                    </p>
                </div>
            </div>
        </div>
        </div>

    </div>
  )
}

export default SkillsComponent