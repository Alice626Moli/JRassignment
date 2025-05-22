import React from 'react';
import CourseCatalog from './components/CourseCatalog';
import Lecturers from './components/Lecturers';

function App() {
  return (
    <div className="container">
      <h1>My Courses</h1>
      <CourseCatalog />
      <h2 className="mt-5">Our Lecturers</h2>
      <Lecturers />
    </div>
  );
}

export default App;