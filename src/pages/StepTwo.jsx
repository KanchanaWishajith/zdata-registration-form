import { useForm } from '../context/FormContext';
import { useState } from 'react';
import { registerUser } from '../services/registerService';
import './StepTwo.css';

export default function StepTwo() {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.password || formData.password.length < 6)
      errs.password = 'Minimum 6 characters required';
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = 'Passwords do not match';
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);

    try {
      await registerUser(formData);
      setMessage('Registration successful!');
    } catch (err) {
      setMessage('Registration failed.');
    }
  };

  return (
    <div className="step-container">
      <div className="step-box">
        <h2>Secure Account</h2>
        <p>Step 2: Set Your Password</p>

        {/* Password */}
        <label className="form-label">Password</label>
        <div className="input-group">
          <input
            type="password"
            placeholder="Enter password"
            onChange={e =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        {errors.password && <div className="error-text">{errors.password}</div>}

        {/* Confirm Password */}
        <label className="form-label">Confirm Password</label>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm password"
            onChange={e =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
          />
        </div>
        {errors.confirmPassword && (
          <div className="error-text">{errors.confirmPassword}</div>
        )}

        <button className="step-button" onClick={handleSubmit}>
          Submit Registration
        </button>

        {message && <div className="message-text">{message}</div>}
      </div>
    </div>
  );
}
