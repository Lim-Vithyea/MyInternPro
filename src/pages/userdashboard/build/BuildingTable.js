


import React from 'react';
import SaveBtn from '../../../components/SaveBtn';

const BuildingTable = () => {
  return (
    <div className="pt-2 overflow-x-auto">
      <details className="border-2 khmer-text p-4 rounded-md shadow-lg">
        <summary className="khmer-text text-lg sm:text-xl text-blue-500">
          បញ្ចូលទិន្នន័យអគារ
        </summary>
        <div className="overflow-x-auto p-1">
          <form>
            {/* Table */}
            <div className="overflow-x-auto">
              <table className="min-w-[600px] w-full border-2 border-gray-200 khmer-text text-xs khmer-text sm:text-sm md:text-base lg:text-[15px]">
                <thead className="border-2 border-b">
                  <tr className="bg-gray-200 border-b ">
                    <th className="border py-2 text-blue-500 w-[20%] sm:w-[15%] khmer-text">ប្រភេទអគារសិក្សា</th>
                    <th className="border py-2 text-blue-500 w-[25%] sm:w-[20%]  khmer-text">ប្រភេទជាន់នៃអគារ</th>
                    <th className="border py-2 text-blue-500 khmer-text">ចំនួនអគារ</th>
                    <th className="border py-2 text-blue-500 khmer-text">ចំនួនបន្ទប់រៀន</th>
                    <th className="border py-2 text-blue-500 khmer-text">ចំនួនបន្ទប់សរុប</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="border p-2  khmer-text">អគារប្រក់ក្បឿង/ស័ង្គសី</td>
                    <td className="p-2 flex flex-col sm:flex-row gap-1">
                      <div className="flex flex-col">
                        <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />ជាន់ផ្ទាល់ដី</label>
                        <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />1ជាន់</label>
                      </div>
                      <div className="flex flex-col">
                        <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />2ជាន់</label>
                        <label className="block sm:text-xs khmer-text"><input type="radio" name="floor" className="mr-2" />លើសពី2ជាន់</label>
                      </div>
                    </td>
                    <td className="border p-2 text-center">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text " placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center ">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text " placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center ">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text"placeholder="0" required/>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="border p-2 khmer-text">អគារឈើប្រក់ក្បឿង/ស័ង្គសី</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required/>
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="border p-2 khmer-text">អគាររោងដោល</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text"placeholder="0"required/>
                    </td>
                  </tr>
                  <tr>
                    <td className="border p-2 khmer-text">ចំនួនអគារសរុប</td>
                    <td className="border p-2"></td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required />
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0" required/>
                    </td>
                    <td className="border p-2 text-center khmer-text">
                      <input type="number" className="w-full p-1 sm:p-2 border rounded text-center khmer-text" placeholder="0"required />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <SaveBtn/>
          </form>
        </div>
      </details>
    </div>
  );
};

export default BuildingTable;
