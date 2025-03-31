import React, { useState } from 'react';


const FeedbackForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your feedback!');
        console.log('Form Data:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            feedback: '',
        });
    };

    return (
        <div className="feedback-form-container">
            <h2>We'd Love Your Feedback!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone No</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                </div>



                <div className="form-group">
                    <label htmlFor="feedback">Feedback</label>
                    <textarea
                        id="feedback"
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                        rows="5"
                        required
                    />
                </div>

                <button type="submit" className="submit-button">
                    Submit Feedback
                </button>
            </form>
        </div>
    );
};

export default FeedbackForm;