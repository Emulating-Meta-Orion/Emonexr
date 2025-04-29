// "use client";
// import React, { useState } from 'react';
// import Image from 'next/image';
// import emailjs from 'emailjs-com';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus('idle');

//     try {
//       await emailjs.send(
//         'YOUR_SERVICE_ID',
//         'YOUR_TEMPLATE_ID',
//         formData,
//         'YOUR_USER_ID'
//       );
//       setSubmitStatus('success');
//       setFormData({ name: '', email: '', subject: '', message: '' });
//     } catch (error) {
//       setSubmitStatus('error');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <section className="bg-black py-20 overflow-hidden" id="contact">
//       <div className="container mx-auto px-4">
//         {/* <h2 className="text-4xl text-customBlue font-bold text-center mb-12" data-aos="fade-down">
//           Get in Touch
//         </h2> */}
//         <div className="grid md:grid-cols-2 gap-12 items-center">
          
//           <div className="relative" data-aos="fade-right">
//             <div className="aspect-square relative">
//               <Image
//                 src="/assets/emofooter.gif"
//                 alt="Contact Animation"
//                 fill
//                 className="object-contain"
//                 priority
//               />
//             </div>
//           </div>

//           <div className="relative" data-aos="fade-left">
//             <div className="relative bg-gradient-to-br from-white/5 to-customBlue/5 p-8 rounded-2xl backdrop-blur-md border border-customBlue/20 shadow-customBlue/10 shadow-lg">
//               <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
//                   />
//                   <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.name ? 'opacity-0' : 'opacity-100'}`}>
//                     Your Name
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
//                   />
//                   <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.email ? 'opacity-0' : 'opacity-100'}`}>
//                     Your Email
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <input
//                     type="text"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
//                   />
//                   <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.subject ? 'opacity-0' : 'opacity-100'}`}>
//                     Subject
//                   </label>
//                 </div>

//                 <div className="relative">
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={4}
//                     className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all resize-none"
//                   />
//                   <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.message ? 'opacity-0' : 'opacity-100'}`}>
//                     Your Message
//                   </label>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="relative group w-full bg-customBlue/50 text-white py-3 rounded-lg overflow-hidden font-semibold text-lg hover:bg-customBlue/80 transition-all duration-300 shadow-md hover:shadow-customBlue/30 active:scale-95 disabled:opacity-50"
//                 >
//                   <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
//                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
//                 </button>

//                 {submitStatus === 'success' && (
//                   <p className="text-green-400 text-center animate-fade-in">Message sent successfully!</p>
//                 )}
//                 {submitStatus === 'error' && (
//                   <p className="text-red-400 text-center animate-fade-in">Failed to send message. Please try again.</p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key (user ID)
      );
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-black py-20 overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side image */}
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square relative">
              <Image
                src="/assets/emofooter.gif"
                alt="Contact Animation"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Right side form */}
          <div className="relative" data-aos="fade-left">
            <div className="relative bg-gradient-to-br from-white/5 to-customBlue/5 p-8 rounded-2xl backdrop-blur-md border border-customBlue/20 shadow-customBlue/10 shadow-lg">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Name input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
                  />
                  <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.name ? 'opacity-0' : 'opacity-100'}`}>
                    Your Name
                  </label>
                </div>

                {/* Email input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
                  />
                  <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.email ? 'opacity-0' : 'opacity-100'}`}>
                    Your Email
                  </label>
                </div>

                {/* Subject input */}
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all"
                  />
                  <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.subject ? 'opacity-0' : 'opacity-100'}`}>
                    Subject
                  </label>
                </div>

                {/* Message input */}
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-black/40 text-white p-4 rounded-lg border border-customBlue/20 focus:border-customBlue/50 focus:ring-1 focus:ring-customBlue/30 outline-none transition-all resize-none"
                  />
                  <label className={`absolute left-4 top-4 text-gray-400 text-sm transition-all ${formData.message ? 'opacity-0' : 'opacity-100'}`}>
                    Your Message
                  </label>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group w-full bg-customBlue/50 text-white py-3 rounded-lg overflow-hidden font-semibold text-lg hover:bg-customBlue/80 transition-all duration-300 shadow-md hover:shadow-customBlue/30 active:scale-95 disabled:opacity-50"
                >
                  <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>

                {/* Submission messages */}
                {submitStatus === 'success' && (
                  <p className="text-green-400 text-center animate-fade-in">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-red-400 text-center animate-fade-in">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
