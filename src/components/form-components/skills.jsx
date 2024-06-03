import { useState, useEffect } from 'react';

export default function Skills({ setFormData, formData }) {
    const initialSkillData = {
        skill1: '',
        skill1desc: '',

        skill2: '',
        skill2desc: '',

        skill3: '',
        skill3desc: '',

        skill4: '',
        skill4desc: '',

        skill5: '',
        skill5desc: '',

        skill6: '',
        skill6desc: '',

        skill7: '',
        skill7desc: '',

        skill8: '',
        skill8desc: '',
    };

    const [skillData, setLocalskillData] = useState(formData?.skillData || initialSkillData);

    useEffect(() => {
        setLocalskillData(formData?.skillData || initialSkillData);
    }, [formData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLocalskillData({ ...skillData, [id]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({ ...prevData, skillData }));
    };

    return (
        <>
            <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>

                {/* Skill 1 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill1" 
                    value={skillData.skill1}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill1-desc" 
                    id="skill1desc" 
                    value={skillData.skill1desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 2 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill2" 
                    value={skillData.skill2}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill2-desc" 
                    id="skill2desc" 
                    value={skillData.skill2desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 3 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill3" 
                    value={skillData.skill3}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill3-desc" 
                    id="skill3desc" 
                    value={skillData.skill3desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 4 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill4" 
                    value={skillData.skill4}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill4-desc" 
                    id="skill4desc" 
                    value={skillData.skill4desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 5 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill5" 
                    value={skillData.skill5}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill5-desc" 
                    id="skill5desc" 
                    value={skillData.skill5desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 6 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill6" 
                    value={skillData.skill6}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill6-desc" 
                    id="skill6desc" 
                    value={skillData.skill6desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 7 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill7" 
                    value={skillData.skill7}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill7-desc" 
                    id="skill7desc" 
                    value={skillData.skill7desc}
                    onChange={handleChange}
                ></textarea>

                {/* Skill 8 */}
                <label>Skill:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="skill8" 
                    value={skillData.skill8}
                    onChange={handleChange}
                />
                <label>Description:</label>
                <textarea 
                    className="border h-8" 
                    name="skill8-desc" 
                    id="skill8desc" 
                    value={skillData.skill8desc}
                    onChange={handleChange}
                ></textarea>

                <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
            </form>
        </>
    );
}
