import { useState } from 'react'

export default function Education() {

    return (
        <>
            <form className="flex flex-col justify-center m-4 w-full">
                <label>Certificate/Degree:</label>
                <input className="border" type="text" id="school-credentials" required />
                <label>School Name:</label>
                <input className="border" type="text" id="school-name" required />
                <label>Duration:</label>
                <div className="flex justify-between">
                    <label>Start:</label>
                    <input className="border" type="date" id="school-duration-start" required />
                    <label>End:</label>
                    <input className="border" type="date" id="school-duration-end" required />
                </div>
                <label>Description:</label>
                <input className="border" type="text" id="school-description" required />
                <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
            </form>
        </>
    )
}
