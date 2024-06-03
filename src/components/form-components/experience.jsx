import { useState, useEffect } from 'react';

export default function Experience({ setFormData, formData }) {
    const initialExpData = {
        jobRole: '',
        companyName: '',
        durationStartExp: '',
        durationEndExp: '',
        descriptionExp: '',
        jobRole2: '',
        companyName2: '',
        durationStartExp2: '',
        durationEndExp2: '',
        descriptionExp2: '',
        jobRole3: '',
        companyName3: '',
        durationStartExp3: '',
        durationEndExp3: '',
        descriptionExp3: '',
    };

    const [expData, setLocalexpData] = useState(formData?.expData || initialExpData);

    useEffect(() => {
        setLocalexpData(formData?.expData || initialExpData);
    }, [formData]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setLocalexpData({ ...expData, [id]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData((prevData) => ({ ...prevData, expData }));
    };

    return (
        <div className="flex flex-col justify-center w-full items-center p-4">
            <form className="flex flex-col justify-center m-4 w-full" onSubmit={handleSubmit}>
                {/* Job 1 */}
                <label>Job Role:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="jobRole" 
                    value={expData.jobRole}
                    onChange={handleChange} 
                />
                <label>Company Name:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="companyName" 
                    value={expData.companyName}
                    onChange={handleChange} 
                />
                <label>Duration:</label>
                <div className="flex justify-between">
                    <label>Start:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationStartExp" 
                        value={expData.durationStartExp}
                        onChange={handleChange} 
                    />
                    <label>End:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationEndExp" 
                        value={expData.durationEndExp}
                        onChange={handleChange} 
                    />
                </div>
                <label>Description:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="descriptionExp" 
                    value={expData.descriptionExp}
                    onChange={handleChange} 
                />

                {/* Job 2 */}
                <label className="mt-8">Job Role:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="jobRole2" 
                    value={expData.jobRole2}
                    onChange={handleChange} 
                />
                <label>Company Name:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="companyName2" 
                    value={expData.companyName2}
                    onChange={handleChange} 
                />
                <label>Duration:</label>
                <div className="flex justify-between">
                    <label>Start:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationStartExp2" 
                        value={expData.durationStartExp2}
                        onChange={handleChange} 
                    />
                    <label>End:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationEndExp2" 
                        value={expData.durationEndExp2}
                        onChange={handleChange} 
                    />
                </div>
                <label>Description:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="descriptionExp2" 
                    value={expData.descriptionExp2}
                    onChange={handleChange} 
                />

                {/* Job 3 */}
                <label className="mt-8">Job Role:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="jobRole3" 
                    value={expData.jobRole3}
                    onChange={handleChange} 
                />
                <label>Company Name:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="companyName3" 
                    value={expData.companyName3}
                    onChange={handleChange} 
                />
                <label>Duration:</label>
                <div className="flex justify-between">
                    <label>Start:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationStartExp3" 
                        value={expData.durationStartExp3}
                        onChange={handleChange} 
                    />
                    <label>End:</label>
                    <input 
                        className="border" 
                        type="date" 
                        id="durationEndExp3" 
                        value={expData.durationEndExp3}
                        onChange={handleChange} 
                    />
                </div>
                <label>Description:</label>
                <input 
                    className="border" 
                    type="text" 
                    id="descriptionExp3" 
                    value={expData.descriptionExp3}
                    onChange={handleChange} 
                />

                <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
            </form>
        </div>
    );
}
