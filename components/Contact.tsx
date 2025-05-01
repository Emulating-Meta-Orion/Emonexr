"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const Contact = () => {
  useEffect(() => {
    emailjs.init("GuE5-N2-vY81rbKHI");
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Animation on scroll effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'service_wee4tnr',
        'template_ned7dba',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'GuE5-N2-vY81rbKHI'
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 1000);
      
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-black to-gray-900" 
      id="contact"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-customBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-customBlue/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Animated glow effect */}
        <div className="absolute inset-0">
          <div className="glow-point absolute top-1/4 left-1/4"></div>
          <div className="glow-point absolute top-3/4 right-1/3"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section heading */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-customBlue to-white inline-block">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-customBlue/50 to-purple-500/50 mx-auto mt-6 rounded-full"></div>
          <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg">
            Don&apos;t hesitate to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side image with animations */}
          <div className={`relative ${isVisible ? 'animate-float' : 'opacity-0'}`} 
            style={{animationDelay: '0.3s'}}>
            <div className="aspect-square relative w-full max-w-lg mx-auto">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-customBlue/20 to-purple-500/20 rounded-full blur-2xl pulse-slow"></div>
              
              {/* Image container with explicit dimensions */}
              { <div className="relative z-10 w-full h-full">
                <Image
                  src="/assets/emofooter.gif"
                  alt="Contact Animation"
                  width={800}
                  height={800}
                  layout="responsive"
                  className="object-contain rotate-slow h-[100%] w-[100%] animate-float"
                  priority
                />
              </div> }
              {/*<div className="relative z-10 w-full h-full">*/}
              {/*  <img*/}
              {/*    src="/assets/emofooter.gif"*/}
              {/*    alt="Contact Animation"*/}
              {/*    className="object-contain rotate-slow h-full w-full animate-float"*/}
              {/*  />*/}
              {/*</div>*/}

              
              {/* Decorative circles */}
              <div className="absolute top-0 right-0 w-20 h-20 border border-customBlue/30 rounded-full animate-ping-slow"></div>
              <div className="absolute bottom-10 left-10 w-12 h-12 border border-purple-500/20 rounded-full animate-ping-slow" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Right side form with enhanced styling */}
          <div className={`relative ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`} 
            style={{animationDelay: '0.5s'}}>
            <div className="relative bg-gradient-to-br from-white/5 to-customBlue/5 p-8 md:p-10 rounded-2xl backdrop-blur-lg border border-customBlue/20 shadow-custom">
              {/* Glass effect overlay */}
              <div className="absolute inset-0 bg-white/5 rounded-2xl"></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="shine"></div>
              </div>
              
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                {/* Name input */}
                <div className="relative input-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`form-input ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'has-value' : ''}`}
                  />
                  <label className={`form-label ${formData.name || focusedField === 'name' ? 'active' : ''}`}>
                    Your Name
                  </label>
                  <div className="form-highlight"></div>
                </div>

                {/* Email input */}
                <div className="relative input-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`form-input ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}
                  />
                  <label className={`form-label ${formData.email || focusedField === 'email' ? 'active' : ''}`}>
                    Your Email
                  </label>
                  <div className="form-highlight"></div>
                </div>

                {/* Subject input */}
                <div className="relative input-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    required
                    className={`form-input ${focusedField === 'subject' ? 'focused' : ''} ${formData.subject ? 'has-value' : ''}`}
                  />
                  <label className={`form-label ${formData.subject || focusedField === 'subject' ? 'active' : ''}`}>
                    Subject
                  </label>
                  <div className="form-highlight"></div>
                </div>

                {/* Message input */}
                <div className="relative input-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={4}
                    className={`form-input form-textarea ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'has-value' : ''}`}
                  />
                  <label className={`form-label ${formData.message || focusedField === 'message' ? 'active' : ''}`}>
                    Your Message
                  </label>
                  <div className="form-highlight"></div>
                </div>

                {/* Submit button with advanced effects */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  <span className="button-text">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="button-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </span>
                </button>

                {/* Submission status messages with animations */}
                {submitStatus === 'success' && (
                  <div className="success-message">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                    <span>Message sent successfully!</span>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="error-message">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for advanced styling and animations */}
      <style jsx>{`
        /* Background grid pattern */
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
        
        /* Glow points */
        .glow-point {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(56, 182, 255, 0.15) 0%, rgba(56, 182, 255, 0) 70%);
          animation: pulse 4s infinite alternate;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0.2; }
        }
        
        /* Shadow for the form container */
        .shadow-custom {
          box-shadow: 0 0 40px rgba(56, 182, 255, 0.15), 
                      0 8px 32px rgba(0, 0, 0, 0.3), 
                      0 0 0 1px rgba(56, 182, 255, 0.1);
        }
        
        /* Animation for section elements */
        @keyframes fadeInUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeInRight {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease forwards;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
          opacity: 1;
        }
        
        .pulse-slow {
          animation: pulse 6s infinite alternate;
        }
        
        .rotate-slow {
          animation: rotate 20s linear infinite;
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-ping-slow {
          animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        
        /* Form styling */
        .form-input {
          width: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          color: white;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid rgba(56, 182, 255, 0.2);
          outline: none;
          transition: all 0.3s ease;
          font-size: 16px;
          position: relative;
          z-index: 2;
        }
        
        .form-input.focused {
          border-color: rgba(56, 182, 255, 0.5);
          box-shadow: 0 0 0 3px rgba(56, 182, 255, 0.15);
        }
        
        .form-textarea {
          resize: none;
          min-height: 120px;
        }
        
        .form-label {
          position: absolute;
          left: 16px;
          top: 16px;
          color: rgba(255, 255, 255, 0.6);
          font-size: 16px;
          pointer-events: none;
          transition: all 0.3s ease;
          z-index: 1;
        }
        
        .form-label.active {
          transform: translateY(-28px) scale(0.85);
          color: rgba(56, 182, 255, 0.8);
        }
        
        .form-highlight {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(56, 182, 255, 0.8), transparent);
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .input-group:hover .form-highlight,
        .form-input.focused ~ .form-highlight {
          width: 100%;
        }
        
        /* Submit button styling */
        .submit-button {
          position: relative;
          width: 100%;
          background: linear-gradient(90deg, rgba(56, 182, 255, 0.5), rgba(120, 87, 255, 0.5));
          color: white;
          padding: 16px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 18px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(56, 182, 255, 0.2);
          border: none;
          cursor: pointer;
          z-index: 2;
        }
        
        .submit-button:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg, 
            transparent, 
            rgba(255, 255, 255, 0.2), 
            transparent
          );
          transition: all 0.6s ease;
          z-index: -1;
        }
        
        .submit-button:hover {
          background: linear-gradient(90deg, rgba(56, 182, 255, 0.8), rgba(120, 87, 255, 0.8));
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(56, 182, 255, 0.3);
        }
        
        .submit-button:hover:before {
          left: 100%;
        }
        
        .submit-button:active {
          transform: scale(0.98);
        }
        
        .submit-button:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        
        .button-text {
          position: relative;
          z-index: 1;
        }
        
        .button-icon {
          display: inline-flex;
          transition: all 0.3s ease;
        }
        
        .submit-button:hover .button-icon {
          transform: translateX(4px);
        }
        
        /* Success and error messages */
        .success-message,
        .error-message {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border-radius: 8px;
          font-weight: 500;
          animation: fadeIn 0.5s ease forwards;
        }
        
        .success-message {
          background-color: rgba(16, 185, 129, 0.15);
          color: rgb(16, 185, 129);
          border: 1px solid rgba(16, 185, 129, 0.3);
        }
        
        .error-message {
          background-color: rgba(239, 68, 68, 0.15);
          color: rgb(239, 68, 68);
          border: 1px solid rgba(239, 68, 68, 0.3);
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Shine effect */
        .shine {
          position: absolute;
          top: -100%;
          left: -100%;
          width: 50%;
          height: 200%;
          background: linear-gradient(
            to right,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          transform: rotate(30deg);
          animation: shine 6s infinite;
        }
        
        @keyframes shine {
          0% { top: -100%; left: -100%; }
          20% { top: 100%; left: 100%; }
          100% { top: 100%; left: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Contact;