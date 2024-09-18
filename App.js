
import React, { useState } from 'react';

function CourseRegistration() {
  const [name, setName] = useState('');
  const [courseNumber, setCourseNumber] = useState('');
  const courses = ['Programowanie w C#', 'Angular dla początkujących', 'Kurs Django'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (courseNumber > 0 && courseNumber <= courses.length) {
      console.log(`Imię i nazwisko: ${name}`);
      console.log(`Wybrany kurs: ${courses[courseNumber - 1]}`);
    } else {
      console.log('Nieprawidłowy numer kursu');
    }
  };

  return (
    <div className="container mt-5">
      <h2>Liczba kursów: {courses.length}</h2>
      <ol>
        {courses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ol>

      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Imię i nazwisko:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="courseNumber" className="form-label">Numer kursu:</label>
          <input
            type="number"
            id="courseNumber"
            className="form-control"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Zapisz do kursu</button>
      </form>
    </div>
  );
}

export default CourseRegistration;
