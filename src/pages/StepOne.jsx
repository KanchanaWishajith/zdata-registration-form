import { useForm } from '../context/FormContext';
import { useState } from 'react';
import { validateEmail } from '../utils/validation';
import { User, Mail, Phone } from 'lucide-react';
import './StepOne.css'; // Import normal CSS

export default function StepOne({ onNext }) {
  const { formData, setFormData } = useForm();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!validateEmail(formData.email)) errs.email = 'Invalid Email address';
    return errs;
  };

  const handleNext = () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) setErrors(errs);
    else onNext();
  };

  return (
    <div className="step-container">
      <div className="step-box">
        <h2>Register</h2>
        <p>Step 1: Personal Information</p>

        {/* Full Name */}
        <label className="form-label">Full Name</label>
        <div className="input-group">
          <User size={18} color="#60a5fa" />
          <input
            type="text"
            placeholder="John Doe"
            value={formData.fullName}
            onChange={e => setFormData({ ...formData, fullName: e.target.value })}
          />
        </div>
        {errors.fullName && <div className="error-text">{errors.fullName}</div>}

        {/* Email */}
        <label className="form-label">Email Address</label>
        <div className="input-group">
          <Mail size={18} color="#60a5fa" />
          <input
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
        {errors.email && <div className="error-text">{errors.email}</div>}

        {/* Phone */}
        <label className="form-label">Phone (Optional)</label>
        <div className="input-group">
          <Phone size={18} color="#60a5fa" />
          <input
            type="text"
            placeholder="071 234 5678"
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <button onClick={handleNext} className="step-button">
          Continue to Step 2
        </button>
      </div>
    </div>
  );
}
