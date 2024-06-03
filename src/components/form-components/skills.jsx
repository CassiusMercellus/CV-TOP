import { useState } from 'react'

export default function Skills() {

    return (
        <>
            <form className="flex flex-col justify-center m-4 w-full">
                <label>Skills:</label>
                <input className="border" type="text" id="skills" required />
                <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
            </form>
        </>
    )
}
