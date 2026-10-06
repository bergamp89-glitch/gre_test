import React from 'react';

function WaitingPage({ registration = {}, selectedExam = 'GRE', setAppState }) {
  const isGMAT = selectedExam === 'GMAT' || registration?.selectedExam === 'GMAT';
  const examName = isGMAT ? 'GMAT™ Test' : 'GRE® Test';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf0] p-4">
      <div className="bg-white p-8 sm:p-10 rounded-sm shadow-md text-center max-w-md w-full border-t-4 border-[#1a446b]">
         <svg className="w-16 h-16 text-[#1a446b] mx-auto mb-5 animate-spin" fill="none" viewBox="0 0 24 24">
           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
         </svg>
         
         <div className={`inline-block px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3 ${isGMAT ? 'bg-purple-50 text-purple-800 border border-purple-200' : 'bg-blue-50 text-[#1a446b] border border-blue-200'}`}>
           {examName} So'rovi
         </div>

         <h2 className="text-xl sm:text-2xl font-bold text-[#1a446b] mb-3">So'rovingiz qabul qilindi</h2>
         <p className="text-gray-600 font-medium leading-relaxed text-sm">
            {registration?.firstName ? `${registration.firstName}, sizning ` : ''}
            <strong className="text-[#1a446b]">{examName}</strong> imtihoniga kirish so'rovingiz va yuz suratingiz adminga tasdiqlash uchun yuborildi.
         </p>
         <p className="text-xs text-gray-500 mt-4 bg-gray-50 py-2.5 px-3 rounded-sm border border-gray-100 mb-6">
           Iltimos, admin tasdiqlashini kuting. Sahifa avtomatik yangilanadi va imtihon boshlanadi.
         </p>
         <button 
           onClick={() => {
             localStorage.removeItem('gre_session');
             window.location.hash = '#/welcome';
             setAppState('WELCOME');
           }} 
           className="bg-transparent border border-[#1a446b] text-[#1a446b] px-6 py-2.5 rounded-sm font-semibold hover:bg-blue-50 transition-colors w-full text-sm"
         >
           Bosh sahifaga qaytish
         </button>
      </div>
    </div>
  );
}

export default WaitingPage;
