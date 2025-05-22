


import React, { useEffect, useState } from 'react';

function Lecturers() {
    const [lecturers, setLecturers] = useState([]);
    const [error, setError] = useState(null);

    // First implementation: using fetch() with Promises
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/JustinHu8/courseCardMock/lecturers')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.json();
            })
            .then(data => setLecturers(data))
            .catch(err => setError(err.message));
    }, []);

    return (
        <div className="row">
            {error && <p className="text-danger">Error: {error}</p>}
            {lecturers.map(lect => (
                <div className="col-md-4 mb-3" key={lect.id}>
                    <div className="card p-3">
                        <h5>{lect.name}</h5>
                        <p className="text-muted">{lect.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Lecturers;