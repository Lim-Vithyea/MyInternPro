

import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const initialFormData = {
  kindergarten: "",
  total_kindergarten_students: "",
  female_kindergarten_students: "",
  grade1: "",
  total_grade1: "",
  female_grade1: "",
  grade2: "",
  total_grade2: "",
  female_grade2: "",
  grade3: "",
  total_grade3: "",
  female_grade3: "",
  grade4: "",
  total_grade4: "",
  female_grade4: "",
  grade5: "",
  total_grade5: "",
  female_grade5: "",
  grade6: "",
  total_grade6: "",
  female_grade6: "",
};

const Usermangedata = () => {
  const inputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const errorInputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500";

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessages, setErrorMessages] = useState({}); // For per-field errors
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Reset error messages before validation
    setErrorMessages({});
    setSuccessMessage("");
    setErrorMessage("");

    // Validation: Ensure girls count is not more than total students for each grade
    const grades = [
      {
        grade: "Kindergarten",
        total: formData.total_kindergarten_students,
        girls: formData.female_kindergarten_students,
      },
      {
        grade: "Grade1",
        total: formData.total_grade1,
        girls: formData.female_grade1,
      },
      {
        grade: "Grade2",
        total: formData.total_grade2,
        girls: formData.female_grade2,
      },
      {
        grade: "Grade3",
        total: formData.total_grade3,
        girls: formData.female_grade3,
      },
      {
        grade: "Grade4",
        total: formData.total_grade4,
        girls: formData.female_grade4,
      },
      {
        grade: "Grade5",
        total: formData.total_grade5,
        girls: formData.female_grade5,
      },
      {
        grade: "Grade6",
        total: formData.total_grade6,
        girls: formData.female_grade6,
      },
    ];

    let formIsValid = true;
    const errors = {};

    for (let grade of grades) {
      if (parseInt(grade.girls) > parseInt(grade.total)) {
        errors[grade.grade] = `${grade.grade} girls count should be less than or equal to total students`;
        formIsValid = false;
      }
    }

    if (!formIsValid) {
      setErrorMessages(errors);
      return;
    }

    // If validation passes, submit the form data
    try {
      const token = localStorage.getItem("token");
      const API = process.env.REACT_APP_API_URL;
      const response = await axios.post(
        `${API}addstudent`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // Show success message and clear the form
      setSuccessMessage(response.data.message);
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form");
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrorMessages({});
    setSuccessMessage("");
    setErrorMessage("");
  };

  return (
    <div className="w-[98%] mx-auto mt-2 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <h1 className="font-bold text-2xl text-blue-700 khmer-text text-start">
        បញ្ជូលចំនួនសិស្សតាមថ្នាក់ស្ដង់ដាសាលាបឋមសិក្សាគំរូ
      </h1>
      {/* Display success or error messages */}
      {successMessage && (
        <div className="mt-4 p-2 bg-green-100 text-green-700 rounded">
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div className="mt-4 p-2 bg-red-100 text-red-700 rounded">
          {errorMessage}
        </div>
      )}
      <div className="mt-6">
        <form className="khmer-text" onSubmit={handleSubmit}>
          <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-2 p-4 rounded-md">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់មត្តេយ្យ
              </p>
              <div>
                <label
                  htmlFor="kindergarten"
                  className="block py-4 khmer-text font-bold text-ms text-gray-700"
                >
                  ថ្នាក់មត្តេយ្យ
                </label>
                <input
                  type="number"
                  id="kindergarten"
                  className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.kindergarten}
                  onChange={handleChange}
                />
                {errorMessages.Kindergarten && (
                  <span className="text-red-500 text-sm">{errorMessages.Kindergarten}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_kidergarten_students"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_kindergarten_students"
                  className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_kindergarten_students}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_kindergarten_students"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_kindergarten_students"
                  className={errorMessages.Kindergarten ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_kindergarten_students}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="border-2 my-2 p-4 rounded-md">
              <p className="block py-4 khmer-text font-bold text-xl text-blue-600">
                បញ្ជូលចំនួនសិស្សថ្នាក់ទី ១ ដល់ទី ៦
              </p>

              {/* Grade 1 */}
              <div>
                <label
                  htmlFor="grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី១
                </label>
                <input
                  type="number"
                  id="grade1"
                  className={errorMessages.Grade1 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade1}
                  onChange={handleChange}
                />
                {errorMessages.Grade1 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade1}</span>
                )}
              </div>
              <div>
                <label
                  htmlFor="total_grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade1"
                  className={errorMessages.Grade1 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade1}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade1"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade1"
                  className={errorMessages.Grade1 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade1}
                  onChange={handleChange}
                />
              </div>
              <br />

              {/* Grade 2 */}
              <div>
                <label
                  htmlFor="grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី២
                </label>
                <input
                  type="number"
                  id="grade2"
                  className={errorMessages.Grade2 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade2}
                  onChange={handleChange}
                />
                {errorMessages.Grade2 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade2}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade2"
                  className={errorMessages.Grade2 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade2}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade2"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade2"
                  className={errorMessages.Grade2 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade2}
                  onChange={handleChange}
                />
              </div>
              <br />

              {/* Repeat similar blocks for Grade 3, Grade 4, Grade 5, and Grade 6 */}
              {/* Grade 3 */}
              <div>
                <label
                  htmlFor="grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី៣
                </label>
                <input
                  type="number"
                  id="grade3"
                  className={errorMessages.Grade3 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade3}
                  onChange={handleChange}
                />
                {errorMessages.Grade3 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade3}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade3"
                  className={errorMessages.Grade3 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade3}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade3"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade3"
                  className={errorMessages.Grade3 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade3}
                  onChange={handleChange}
                />
                <br />
              </div>
              <br />

              {/* Grade 4 */}
              <div>
                <label
                  htmlFor="grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី៤
                </label>
                <input
                  type="number"
                  id="grade4"
                  className={errorMessages.Grade4 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade4}
                  onChange={handleChange}
                />
                {errorMessages.Grade4 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade4}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade4"
                  className={errorMessages.Grade4 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade4}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade4"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade4"
                  className={errorMessages.Grade4 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade4}
                  onChange={handleChange}
                />
              </div>
              <br />

              {/* Grade 5 */}
              <div>
                <label
                  htmlFor="grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី៥
                </label>
                <input
                  type="number"
                  id="grade5"
                  className={errorMessages.Grade5 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade5}
                  onChange={handleChange}
                />
                {errorMessages.Grade5 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade5}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade5"
                  className={errorMessages.Grade5 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade5}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade5"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade5"
                  className={errorMessages.Grade5 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade5}
                  onChange={handleChange}
                />
                <br />
              </div>
              <br />

              {/* Grade 6 */}
              <div>
                <label
                  htmlFor="grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ថ្នាក់ទី៦
                </label>
                <input
                  type="number"
                  id="grade6"
                  className={errorMessages.Grade6 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនថ្នាក់"
                  value={formData.grade6}
                  onChange={handleChange}
                />
                {errorMessages.Grade6 && (
                  <span className="text-red-500 text-sm">{errorMessages.Grade6}</span>
                )}
                <br />
              </div>
              <div>
                <label
                  htmlFor="total_grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សសរុប
                </label>
                <input
                  type="number"
                  id="total_grade6"
                  className={errorMessages.Grade6 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សសរុប"
                  value={formData.total_grade6}
                  onChange={handleChange}
                />
                <br />
              </div>
              <div>
                <label
                  htmlFor="female_grade6"
                  className="block py-4 khmer-text font-bold text-sm text-gray-700"
                >
                  ចំនួនសិស្សស្រី
                </label>
                <input
                  type="number"
                  id="female_grade6"
                  className={errorMessages.Grade6 ? errorInputStyle : inputStyle}
                  required
                  placeholder="ចំនួនសិស្សស្រី"
                  value={formData.female_grade6}
                  onChange={handleChange}
                />
                <br />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold"
            >
              Save
            </button>
            <button
              type="button"
              className="ml-4 w-[180px] h-[50px] bg-red-700 rounded-xl hover:bg-red-400 transition-all duration-300 shadow-lg text-white font-bold"
              onClick={handleReset}
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermangedata;
