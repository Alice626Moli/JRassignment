import React from 'react';
import CourseCard from './CourseCard';

const courses = [
    {
        id: 1,
        title: 'React Basics',
        description: 'Learn the basics of React including components and props.',
        duration: '2 hours',
        isCompleted: false
    },
    {
        id: 2,
        title: 'Advanced React',
        description: 'Dive deeper into hooks, context, and performance optimization.',
        duration: '5 hours',
        isCompleted: true
    }
];

function CourseCatalog() {
    return (
        <div className="row">
            {courses.map(course => (
                <div className="col-md-6" key={course.id}>
                    <CourseCard
                        title={course.title}
                        description={course.description}
                        duration={course.duration}
                        isCompleted={course.isCompleted}
                    />
                </div>
            ))}
        </div>
    );
}

export default CourseCatalog;
