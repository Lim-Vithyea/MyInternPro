
import React from 'react'
import SaveBtn from '../../../components/SaveBtn'

const BuildingTable = () => {
  return (
    <div className='pt-2 overflow-x-auto'>
        <details className="border-2 khmer-text p-4 rounded-md shadow-lg">
            <summary className='khmer-text text-xl text-blue-500'>បញ្ចូលទិន្នន័យអគារ</summary>
            <div className="overflow-x-auto p-3">
                <form className=''>
                    {/* Table */}
                    <table className="min-w-full border border-gray-200 khmer-text lg:text-[15px]">
                        <thead className='border-2 border-b'>
                            <tr className="bg-gray-200 border-b khmer-text">
                                <th className="border py-2 khmer-text text-blue-500">ប្រភេទអគារសិក្សា</th>
                                <th className="border py-2 khmer-text text-blue-500">ប្រភេទជាន់នៃអគារ</th>
                                <th className="border py-2 khmer-text text-blue-500">ចំនួនអគារ</th>
                                <th className="border py-2 khmer-text text-blue-500">ចំនួនបន្ទប់រៀន</th>
                                <th className="border py-2 khmer-text text-blue-500">ចំនួនបន្ទប់សរុប</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="border p-2 khmer-text">អគារប្រក់ក្បឿង/ស័ង្គសី</td>
                                <td className=" p-2 khmer-text lg:flex sm:block gap-1">
                                    <div>
                                        <label className="block khmer-text sm:text-xs"><input type="radio" name='floor' className="mr-2" />ជាន់ផ្ទាល់ដី</label>
                                        <label className="block khmer-text sm:text-xs"><input type="radio" name='floor' className="mr-2" />1ជាន់</label>
                                    </div>
                                    <div>
                                        <label className="block khmer-text sm:text-xs"><input type="radio" name='floor' className="mr-2" />2ជាន់</label>
                                        <label className="block khmer-text sm:text-xs"><input type="radio" name='floor' className="mr-2" />លើសពី2ជាន់</label>
                                    </div>
                                </td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                            </tr>
                            <tr className="border-b">
                                <td className="border p-2 khmer-text">អគារឈើប្រក់ក្បឿង/ស័ង្គសី</td>
                                <td className="border p-2 khmer-text"></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                            </tr>
                            <tr className="border-b">
                                <td className="border p-2 khmer-text">អគាររោងដោល</td>
                                <td className="border p-2 khmer-text"></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                            </tr>
                            <tr>
                                <td className="border p-2 khmer-text">ចំនួនអគារសរុប</td>
                                <td className="border p-2 khmer-text"></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                                <td className="border p-2 khmer-text text-center"><input type="number" className="w-full p-2 border rounded" placeholder='បញ្ចូល' required /></td>
                            </tr>
                        </tbody>
                    </table>
                    <SaveBtn />
                </form>
            </div>
        </details>
    </div>
  )
}

export default BuildingTable


