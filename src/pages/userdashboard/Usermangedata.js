import React, { useState } from "react";
import axios from "axios";
import "../../index.css";

const Usermangedata = () => {
  const inputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500";

  const errorInputStyle =
    "mt-1 khmer-text font-semibold p-2 w-full border border-red-500 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500"; // Red border for errors

  const [formData, setFormData] = useState({
    kindergarten: "",
    totalKindergarten: "",
    girlsKindergarten: "",
    grade1: "",
    totalGrade1: "",
    girlsGrade1: "",
    grade2: "",
    totalGrade2: "",
    girlsGrade2: "",
    grade3: "",
    totalGrade3: "",
    girlsGrade3: "",
    grade4: "",
    totalGrade4: "",
    girlsGrade4: "",
    grade5: "",
    totalGrade5: "",
    girlsGrade5: "",
    grade6: "",
    totalGrade6: "",
    girlsGrade6: "",
  });

  const [errorMessages, setErrorMessages] = useState({}); // Store error messages
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

    // Validation check: ensure girls are less than or equal to total for each grade
    const grades = [
      {
        grade: "Kindergarten",
        total: formData.totalKindergarten,
        girls: formData.girlsKindergarten,
      },
      {
        grade: "Grade1",
        total: formData.totalGrade1,
        girls: formData.girlsGrade1,
      },
      {
        grade: "Grade2",
        total: formData.totalGrade2,
        girls: formData.girlsGrade2,
      },
      {
        grade: "Grade3",
        total: formData.totalGrade3,
        girls: formData.girlsGrade3,
      },
      {
        grade: "Grade4",
        total: formData.totalGrade4,
        girls: formData.girlsGrade4,
      },
      {
        grade: "Grade5",
        total: formData.totalGrade5,
        girls: formData.girlsGrade5,
      },
      {
        grade: "Grade6",
        total: formData.totalGrade6,
        girls: formData.girlsGrade6,
      },
    ];

    let formIsValid = true;

    const errors = {};

    // Loop through grades to check for validation errors
    for (let grade of grades) {
      if (parseInt(grade.girls) > parseInt(grade.total)) {
        errors[
          grade.grade
        ] = `${grade.grade} girls count should be less than or equal to total students`;
        formIsValid = false;
      }
    }

    if (!formIsValid) {
      setErrorMessages(errors);
      setSuccessMessage(""); // Clear success message
      return;
    }

    // If validation passes, submit the form data
    try {
      const response = await axios.post(
        "http://localhost:3002/api/add-student-data",
        formData
      );
      setSuccessMessage(response.data.message);
      setErrorMessage(""); // Clear error message
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Error submitting form");
      setSuccessMessage(""); // Clear success message
    }
  };

  const handleReset = () => {
    setFormData({
      kindergarten: "",
      totalKindergarten: "",
      girlsKindergarten: "",
      grade1: "",
      totalGrade1: "",
      girlsGrade1: "",
      grade2: "",
      totalGrade2: "",
      girlsGrade2: "",
      grade3: "",
      totalGrade3: "",
      girlsGrade3: "",
      grade4: "",
      totalGrade4: "",
      girlsGrade4: "",
      grade5: "",
      totalGrade5: "",
      girlsGrade5: "",
      grade6: "",
      totalGrade6: "",
      girlsGrade6: "",
    });
    localStorage.removeItem("formData");
  };

  return (
    <div className="w-[98%] mx-auto mt-2 bg-white rounded-xl p-6 sm:p-8 lg:p-10 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
      <h1 className="font-bold text-2xl text-blue-700 khmer-text text-start">
        បញ្ជូលចំនួនសិស្សតាមថ្នាក់ស្ដង់ដាសាលាបឋមសិក្សាគំរូ
      </h1>

      <div className="mt-6">
        <form className="khmer-text" onSubmit={handleSubmit}>
          {/* Form Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Kindergarten */}
            <p className="block khmer-text font-bold text-sm text-gray-700">
              បញ្ជូលចំនួនសិស្សថ្នាក់មត្តេយ្យ
            </p>

            <div>
              <label
                htmlFor="kindergarten"
                className="block khmer-text font-bold text-sm text-gray-700">
                ថ្នាក់មត្តេយ្យ
              </label>
              <input
                type="number"
                id="kindergarten"
                className={
                  errorMessages.Kindergarten ? errorInputStyle : inputStyle
                }
                required
                placeholder="ចំនួនថ្នាក់"
                value={formData.kindergarten}
                onChange={handleChange}
              />
              {errorMessages.Kindergarten && (
                <span className="text-red-500 text-sm">
                  {errorMessages.Kindergarten}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalKindergarten"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalKindergarten"
                className={
                  errorMessages.Kindergarten ? errorInputStyle : inputStyle
                }
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalKindergarten}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsKindergarten"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsKindergarten"
                className={
                  errorMessages.Kindergarten ? errorInputStyle : inputStyle
                }
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsKindergarten}
                onChange={handleChange}
              />
            </div>

            <p className="block khmer-text font-bold text-sm text-gray-700">
              បញ្ជូលចំនួនសិស្សថ្នាក់មត្តេយ្យ
            </p>

            {/* Grade 1 */}

            <div>
              <label
                htmlFor="grade1"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade1}
                </span>
              )}
            </div>

            <div>
              <label
                htmlFor="totalGrade1"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade1"
                className={errorMessages.Grade1 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade1}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade1"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade1"
                className={errorMessages.Grade1 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade1}
                onChange={handleChange}
              />
            </div>
            <br />
            {/* Grade 2 */}
            <div>
              <label
                htmlFor="grade2"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade2}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalGrade2"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade2"
                className={errorMessages.Grade2 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade2}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade2"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade2"
                className={errorMessages.Grade2 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade2}
                onChange={handleChange}
              />
            </div>
            <br />
            {/* Repeat for Grade 3, Grade 4, Grade 5, and Grade 6 */}
            <div>
              <label
                htmlFor="grade3"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade3}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalGrade3"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade3"
                className={errorMessages.Grade3 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade3}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade3"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade3"
                className={errorMessages.Grade3 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade3}
                onChange={handleChange}
              />
              <br />
            </div>
            <br />
            {/* Continue this pattern for Grades 4, 5, and 6 */}
            {/* Grade 4 */}
            <div>
              <label
                htmlFor="grade4"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade4}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalGrade4"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade4"
                className={errorMessages.Grade4 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade4}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade4"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade4"
                className={errorMessages.Grade4 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade4}
                onChange={handleChange}
              />
            </div>
            <br />
            {/* Grade 5 */}
            <div>
              <label
                htmlFor="grade5"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade5}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalGrade5"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade5"
                className={errorMessages.Grade5 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade5}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade5"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade5"
                className={errorMessages.Grade5 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade5}
                onChange={handleChange}
              />
              <br />
            </div>
            <br />
            {/* Grade 6 */}
            <div>
              <label
                htmlFor="grade6"
                className="block khmer-text font-bold text-sm text-gray-700">
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
                <span className="text-red-500 text-sm">
                  {errorMessages.Grade6}
                </span>
              )}
              <br />
            </div>
            <div>
              <label
                htmlFor="totalGrade6"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សសរុប
              </label>
              <input
                type="number"
                id="totalGrade6"
                className={errorMessages.Grade6 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សសរុប"
                value={formData.totalGrade6}
                onChange={handleChange}
              />
              <br />
            </div>
            <div>
              <label
                htmlFor="girlsGrade6"
                className="block khmer-text font-bold text-sm text-gray-700">
                ចំនួនសិស្សស្រី
              </label>
              <input
                type="number"
                id="girlsGrade6"
                className={errorMessages.Grade6 ? errorInputStyle : inputStyle}
                required
                placeholder="ចំនួនសិស្សស្រី"
                value={formData.girlsGrade6}
                onChange={handleChange}
              />
              <br />
            </div>
          </div>

          <div className="flex justify-end mt-8">
            <button
              type="submit"
              className="w-[180px] h-[50px] bg-blue-700 rounded-xl hover:bg-blue-400 transition-all duration-300 shadow-lg text-white font-bold">
              Save
            </button>
            <button
              type="button"
              className="ml-4 w-[180px] h-[50px] bg-red-700 rounded-xl hover:bg-red-400 transition-all duration-300 shadow-lg text-white font-bold"
              onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Usermangedata;
