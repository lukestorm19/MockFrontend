import React from 'react'
let today = new Date().toLocaleDateString()
export default function Cobdt() {
    return (
        <div>
            <h6>COB Date: {today}</h6>
        </div>
    )
}
