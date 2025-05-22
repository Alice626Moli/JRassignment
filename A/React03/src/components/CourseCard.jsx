import React, { useState } from 'react';

function CourseCard({ title, description, duration, isCompleted }) {
    const [enrollmentCount, setEnrollmentCount] = useState(0);
    const [showReviewInput, setShowReviewInput] = useState(false);
    const [reviewSubmitted, setReviewSubmitted] = useState(false);
    const [reviewText, setReviewText] = useState('');

    const handleCourseClick = () => {
        if (!isCompleted) {
            setEnrollmentCount(prev => prev + 1);
        }
    };

    const handleReviewSubmit = () => {
        setReviewSubmitted(true);
        setShowReviewInput(false);
    };

    return (
        <div className="card p-3 mb-3">
            <h3>{title}</h3>
            <p>{description}</p>
            <p><strong>Duration:</strong> {duration}</p>

            <button className="btn btn-primary" onClick={handleCourseClick}>
                {isCompleted ? 'Revisit Course' : 'Start Course'}
            </button>

            <p>Enrolled: {enrollmentCount} times</p>

            {!reviewSubmitted ? (
                showReviewInput ? (
                    <div className="mt-2">
                        <input
                            className="form-control mb-2"
                            type="text"
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            placeholder="Write your review..."
                        />
                        <button className="btn btn-success" onClick={handleReviewSubmit}>
                            Submit Review
                        </button>
                    </div>
                ) : (
                    <button className="btn btn-outline-secondary mt-2" onClick={() => setShowReviewInput(true)}>
                        Leave a Review
                    </button>
                )
            ) : (
                <p className="mt-2">Rev
