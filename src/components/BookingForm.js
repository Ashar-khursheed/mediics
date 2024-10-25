import React, { useState, useEffect } from 'react';

const BookingForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        medicalType: '',
        clinicLocation: '',
        date: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        taxiCouncil: '',
        birthYear: '',
        noPromotion: false,
        paymentType: 'depositOnly',
    });
    
    const [timeSlots, setTimeSlots] = useState([]);
    
    // Set today's date for the date picker min attribute
    const today = new Date().toISOString().split('T')[0];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleContinue = () => {
        if (step === 1) {
            if (!formData.medicalType || !formData.clinicLocation) {
                alert('Please fill out both fields to continue.');
                return;
            }
        } else if (step === 2) {
            if (!formData.date || !timeSlots.some(slot => slot.selected)) {
                alert('Please select a date and a time slot.');
                return;
            }
        }
        setStep((prevStep) => prevStep + 1);
    };

    const handleConfirm = () => {
        alert('Form submitted with payment details.');
        // Handle the actual submission here
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setFormData(prevData => ({ ...prevData, date: selectedDate }));
        
        // Simulate available time slots based on selected date
        const slots = ['10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM'];
        const availableSlots = slots.map(slot => ({ time: slot, selected: false }));
        setTimeSlots(availableSlots);
    };

    const handleSlotSelect = (index) => {
        setTimeSlots(prevSlots => 
            prevSlots.map((slot, i) => ({ ...slot, selected: i === index }))
        );
    };

    const isWholeAmountSelected = formData.paymentType === 'wholeAmount';

    return (
        <div className="container mt-5 mb-5">
            <div className="form-container">
                <div className="newform">
                    {/* Step 1: Medical Type & Clinic Location */}
                    {step === 1 && (
                        <div className="form-step active">
                            <h2 className="form-title">Please select Medical type:</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="medicalType" className="form-label">
                                        Medical type: <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        className="form-select"
                                        id="medicalType"
                                        name="medicalType"
                                        value={formData.medicalType}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="" disabled>Select Medical type</option>
                                        <option value="Taxi Medical">Taxi Medical</option>
                                        <option value="Work Medical">Work Medical</option>
                                        <option value="Fitness Test">Fitness Test</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clinicLocation" className="form-label">
                                        Clinic location:
                                    </label>
                                    <select
                                        className="form-select"
                                        id="clinicLocation"
                                        name="clinicLocation"
                                        value={formData.clinicLocation}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Select Clinic location</option>
                                        <option value="Birmingham - Hall Green">Birmingham - Hall Green</option>
                                        <option value="London - Westminster">London - Westminster</option>
                                    </select>
                                </div>
                                <button type="button" className="buttonone" onClick={handleContinue}>
                                    Continue
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step 2: Date and Time Selection */}
                    {step === 2 && (
                        <div className="form-step">
                            <h2 className="form-title">Pick date & time:</h2>
                            <form>
                                <div className="calendar">
                                    <input
                                        type="date"
                                        id="datePicker"
                                        className="form-control"
                                        name="date"
                                        value={formData.date}
                                        onChange={handleDateChange}
                                        min={today}  // Set min date directly here
                                        required
                                    />
                                </div>
                                <div id="timeSlots" className="d-grid gap-2 mt-3">
                                    {timeSlots.map((slot, index) => (
                                        <div
                                            key={index}
                                            className={`time-slot ${slot.selected ? 'active' : ''}`}
                                            onClick={() => handleSlotSelect(index)}
                                        >
                                            {slot.time}
                                        </div>
                                    ))}
                                </div>
                                <button type="button" className="buttonone mt-3" onClick={handleContinue}>
                                    Continue
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Step 3: User Details & Payment */}
                    {step === 3 && (
                        <div className="form-step">
                            <h2 className="form-title">Drive Thru Medics</h2>
                            <div className="mb-3">
                                <label htmlFor="firstName" className="form-label">
                                    First Name: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastName" className="form-label">
                                    Last Name: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                    Email: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">
                                    Phone: <span className="text-danger">*</span>
                                </label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="taxiCouncil" className="form-label">
                                    Please select your taxi council:
                                </label>
                                <select
                                    className="form-select"
                                    id="taxiCouncil"
                                    name="taxiCouncil"
                                    value={formData.taxiCouncil}
                                    onChange={handleChange}
                                >
                                    <option value="" disabled>Select council</option>
                                    <option value="Council 1">Council 1</option>
                                    <option value="Council 2">Council 2</option>
                                    <option value="Council 3">Council 3</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="birthYear" className="form-label">
                                    Year of Birth:
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="birthYear"
                                    name="birthYear"
                                    value={formData.birthYear}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="noPromotion"
                                    name="noPromotion"
                                    checked={formData.noPromotion}
                                    onChange={handleChange}
                                />
                                <label htmlFor="noPromotion" className="form-check-label">
                                    Please tick if you do not want to receive future promotions.
                                </label>
                            </div>

                            <h5>Payment Type:</h5>
                            <div className="form-check">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="depositOnly"
                                    name="paymentType"
                                    value="depositOnly"
                                    checked={formData.paymentType === 'depositOnly'}
                                    onChange={handleChange}
                                />
                                <label htmlFor="depositOnly" className="form-check-label">Deposit only</label>
                            </div>
                            <div className="form-check mb-3">
                                <input
                                    type="radio"
                                    className="form-check-input"
                                    id="wholeAmount"
                                    name="paymentType"
                                    value="wholeAmount"
                                    checked={formData.paymentType === 'wholeAmount'}
                                    onChange={handleChange}
                                />
                                <label htmlFor="wholeAmount" className="form-check-label">Whole amount</label>
                            </div>

                            <div className="mb-3" id="paymentDetails">
                                <p>Base Price: £53.00</p>
                                {!isWholeAmountSelected && (
                                    <>
                                        <p id="depositAmount">Deposit Pay Now: £15.00</p>
                                        <p id="leftToPay">Left to pay: £38.00</p>
                                    </>
                                )}
                                <p id="totalCost">Total Cost: £53.00</p>
                            </div>

                            <button type="button" className="buttonone" onClick={handleConfirm}>
                                Confirm
                            </button>
                            <button type="button" className="buttonone btn-light" onClick={() => setStep(1)}>
                                Cancel
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookingForm;
