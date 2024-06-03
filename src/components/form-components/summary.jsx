import { useState } from 'react'

export default function Summary() {

    return (
        <>
            <form className="flex flex-col justify-center m-4 w-full">
                <label>Summary:</label>
                <textarea className="border h-64" name="summary" id="summary"></textarea>
                <button className="m-4 bg-blue-100 hover:bg-blue-200" type="submit">Add</button>
            </form>
        </>
    )
}