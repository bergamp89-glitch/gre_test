import React from 'react';

function HomePage({ 
  registration, 
  setRegistration, 
  registrationErrors, 
  setRegistrationErrors, 
  handleStartExam, 
  isSubmitting
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf0] p-4">
      <div className="w-full max-w-4xl bg-white rounded-sm shadow-md overflow-hidden">
        {/* Header - Ixchamlashtirilgan va Responsive */}
        <div className="bg-[#1a446b] text-white px-5 py-5 sm:px-8 sm:py-6 md:px-10 md:py-7 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4 pointer-events-none">
             <svg className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
             </svg>
          </div>
          <div className="relative z-10">
             <div className="text-[10.5px] sm:text-xs font-bold text-[#8baecf] uppercase tracking-widest mb-1 sm:mb-1.5">GRE® Physics Subject Test (GR0877)</div>
             <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide text-white">GRE Physics Official Practice Exam</h1>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-7 md:p-10">

          <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
            <div className="border border-gray-200/90 p-5 sm:p-8 md:p-9 rounded-md bg-white shadow-sm flex flex-col justify-center">
               <h3 className="text-sm sm:text-base md:text-[17px] font-bold text-[#1a446b] uppercase tracking-wider mb-4 sm:mb-5 flex items-center gap-2 sm:gap-2.5 pb-3 border-b border-gray-100">
                 <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#1a446b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                 </svg>
                 Candidate Registration
               </h3>
               
               <div className="space-y-4 sm:space-y-5">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                   <div>
                     <label className="block text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 sm:mb-2">First Name</label>
                     <input 
                       type="text" 
                       value={registration.firstName || ''}
                       onChange={(e) => {
                         setRegistration({...registration, firstName: e.target.value});
                         if (registrationErrors.firstName) setRegistrationErrors({...registrationErrors, firstName: false});
                       }}
                       className={`w-full border ${registrationErrors.firstName ? 'border-[#e11d48] bg-rose-50/20' : 'border-gray-300'} rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#1a446b] focus:ring-2 focus:ring-[#1a446b]/15 transition-all`} 
                       placeholder="John"
                     />
                     {registrationErrors.firstName && <p className="text-[#e11d48] text-xs mt-1.5 font-medium">Required.</p>}
                   </div>
                   <div>
                     <label className="block text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 sm:mb-2">Last Name</label>
                     <input 
                       type="text" 
                       value={registration.lastName || ''}
                       onChange={(e) => {
                         setRegistration({...registration, lastName: e.target.value});
                         if (registrationErrors.lastName) setRegistrationErrors({...registrationErrors, lastName: false});
                       }}
                       className={`w-full border ${registrationErrors.lastName ? 'border-[#e11d48] bg-rose-50/20' : 'border-gray-300'} rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#1a446b] focus:ring-2 focus:ring-[#1a446b]/15 transition-all`} 
                       placeholder="Doe"
                     />
                     {registrationErrors.lastName && <p className="text-[#e11d48] text-xs mt-1.5 font-medium">Required.</p>}
                   </div>
                 </div>

                 <div>
                   <label className="block text-xs sm:text-[13px] font-bold text-gray-600 uppercase tracking-wider mb-1.5 sm:mb-2">Email Address</label>
                   <input 
                     type="email" 
                     value={registration.email || ''}
                     onChange={(e) => {
                       setRegistration({...registration, email: e.target.value});
                       if (registrationErrors.email) setRegistrationErrors({...registrationErrors, email: false});
                     }}
                     className={`w-full border ${registrationErrors.email ? 'border-[#e11d48] bg-rose-50/20' : 'border-gray-300'} rounded-md px-3.5 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-[#1a446b] focus:ring-2 focus:ring-[#1a446b]/15 transition-all`} 
                     placeholder="example@gmail.com"
                   />
                    {registrationErrors.email && (
                      <p className="text-[#e11d48] text-xs mt-1.5 font-medium">
                        {typeof registrationErrors.email === 'string'
                          ? registrationErrors.email
                          : "Email @gmail.com bo'lishi kerak (masalan: example@gmail.com)"}
                      </p>
                    )}
                 </div>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
             <button 
               type="button"
               onClick={handleStartExam} 
               disabled={isSubmitting}
               className={`w-full sm:w-auto text-white px-8 py-3.5 sm:px-12 sm:py-4 rounded-md font-bold tracking-widest text-xs sm:text-sm md:text-[15px] transition-all flex items-center justify-center gap-2.5 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#1a446b] hover:bg-[#153655] hover:shadow-lg hover:-translate-y-0.5'}`}
             >
               <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
               </svg>
               PROCTORED & FACE ID
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
