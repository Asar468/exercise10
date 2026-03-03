import React from "react";

const subjects = [
  { name: "Mathematics", attendance: 80 },
  { name: "Data Structures", attendance: 72 },
  { name: "Operating Systems", attendance: 58 },
  { name: "Computer Networks", attendance: 65 },
  { name: "Database Systems", attendance: 90 },
];

const getColor = (attendance) => {
  if (attendance > 75) return "bg-green-300";
  if (attendance >= 60) return "bg-yellow-300";
  return "bg-red-300";
};

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-xl font-bold">Student Attendance Dashboard</h1>
        </div>
        <div className="text-sm">
          <p>Student Name: Md Asar</p>
          <p>Register Number: 2500032723</p>
          <p>Department: Computer Science</p>
        </div>
      </nav>

      {/* Content Section */}
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md p-6 text-white ${getColor(
              subject.attendance
            )}`}
          >
            <h2 className="text-lg font-semibold">{subject.name}</h2>
            <p className="mt-2 text-xl">Attendance: {subject.attendance}%</p>
          </div>
        ))}
      </div>
    </div>
  );
}
