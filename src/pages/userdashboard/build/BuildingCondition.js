import React from 'react'

const Value = [
    {name:"ប្រភេទអគារសិក្សា"},
    {name:"ចំនួនអគារល្អ"},
    {name:"ចំនួនអគារមធ្យម"},
    {name:"ចំនួនអគារអន់"},
    {name:"ចំនួនអគារសរុប"},
]


const BuildingCondition = () => {
  return (
    <div className='pt-4'>
        <details className="border-2 p-4 rounded-md shadow-sm">
            <summary className='khmer-text text-xl text-blue-500'>ស្ថានភាពអគារ</summary>
            <div className='pt-4'>
            <form>
                <table className="min-w-full border-gray-300 border-2 khmer-text">
                    <thead>
                        <tr>
                            {Value.map((Values)=>(
                                  <th key={Values.name} className="border p-4 khmer-text text-blue-500">{Values.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        <tr></tr>
                    </tbody>
                </table>
            </form>
            </div>
        </details>
    </div>
  )
}

export default BuildingCondition