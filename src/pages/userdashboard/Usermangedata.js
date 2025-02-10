import React from "react";

const Usermangedata = () => {
  const inputStyle = "mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  return (
    <div className="w-[98%] mx-auto mt-2 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <h1 className="font-bold text-2xl text-blue-700 text-start">
        បញ្ជូលចំនួនសិស្សតាមថ្នាក់ស្ដង់ដាសាលាបឋមសិក្សាគំរូ
      </h1>
      <div className="mt-6">
        <form>
          {/* Form Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label htmlFor="kindergarten" className="block font-bold text-sm text-gray-700">
                ថ្នាក់មត្តេយ្យ
              </label>
              <input
                type="number"
                id="kindergarten"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-kindergarten" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-kindergarten"
                className={inputStyle}
                placeholder="  ចំនួនសិស្សសរុប"
                required
              />
            </div>
            <div>
              <label htmlFor="girls-kindergarten" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-kindergarten"
                className={inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
              />
            </div>
            <br/>
            {/* Grade 1 */}
            <div>
              <label htmlFor="grade1" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី១
              </label>
              <input
                type="number"
                id="grade1"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-grade1" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade1"
                className={inputStyle}
                required
                placeholder="     ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade1" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-grade1"
                className={inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
              />
            </div><br/>

            {/* Grade 2 */}
            <div>
              <label htmlFor="grade2" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី២
              </label>
              <input
                type="number"
                id="grade2"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-grade2" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade2"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade2" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                 id="girls-grade2"
                className={inputStyle}
      placeholder=" ចំនួនសិស្សស្រី"
                required
              />
            </div><br/>

            {/* Grade 3 */}
            <div>
              <label htmlFor="grade3" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី៣
              </label>
              <input
                type="number"
                id="grade3"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-grade3" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade3"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade3" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-grade3"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សស្រី"
              />
            </div>
            <br/>
            {/* Grade 4 */}
            <div>
              <label htmlFor="grade4" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី៤
              </label>
              <input
                type="number"
                id="grade4"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-grade4" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade4"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade4" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-grade4"
                className={inputStyle}
                required    placeholder="ចំនួនសិស្សស្រី"
              />
            </div>
            <br/>
            {/* Grade 5 */}
            <div>
              <label htmlFor="grade5" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី៥
              </label>
              <input
                type="number"
                id="grade5"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"

              />
            </div>
            <div>
              <label htmlFor="total-grade5" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade5"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade5" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-grade5"
                className={inputStyle}
                required   placeholder="ចំនួនសិស្សស្រី"
              />
            </div>
            <br/>
            {/* Grade 6 */}
            <div>
              <label htmlFor="grade6" className="block font-bold text-sm text-gray-700">
                ថ្នាក់ទី៦
              </label>
              <input
                type="number"
                id="grade6"
                className={inputStyle}
                required
                placeholder="ចំនួន​ថ្នាក់"
              />
            </div>
            <div>
              <label htmlFor="total-grade6" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="total-grade6"
                className={inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
              />
            </div>
            <div>
              <label htmlFor="girls-grade6" className="block font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girls-grade6"
                className={inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
              />
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermangedata;