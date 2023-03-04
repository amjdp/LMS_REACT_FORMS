import React, { useState } from 'react';

function CourseRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [course, setCourse] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <div>
      {isSubmitted ? (
        <div>
          <h2>Thank you for registering for {course}!</h2>
          <p>We will contact you at {email} or {phone} with further details.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <br />
          <label>
            Phone:
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>
          <br />
          <label>
            Course:
            <select value={course} onChange={(e) => setCourse(e.target.value)}>
              <option value="">Select a course</option>
              <option value="React">React</option>
              <option value="Node">Node</option>
              <option value="MongoDB">MongoDB</option>
            </select>
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default CourseRegistrationForm;
