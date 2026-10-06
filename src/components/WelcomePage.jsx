import React from 'react';

export default function WelcomePage({ onSelectExam }) {
  return (
    <div className="min-h-screen bg-[#e6ebf0] flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Top Bar with brand */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between py-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-md bg-[#1a446b] flex items-center justify-center text-white shadow-sm">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
          </div>
          <div>
            <div className="text-[10px] font-bold text-[#1a446b] uppercase tracking-widest leading-none">
              Assessment Portal
            </div>
            <div className="text-base font-extrabold text-slate-800 tracking-tight">
              Practice Exam
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-4xl w-full mx-auto my-auto py-6 sm:py-10">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Imtihon turini tanlang
          </h1>
          <p className="text-sm text-slate-600 mt-2">
            Davom etish uchun kerakli testni tanlang
          </p>
        </div>

        {/* 2 Exam Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {/* Card 1: GRE Exam */}
          <div 
            onClick={() => onSelectExam('GRE')}
            className="group bg-white border-2 border-slate-200 hover:border-[#1a446b] rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-50 group-hover:bg-[#1a446b] text-[#1a446b] group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-4 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-[#1a446b] transition-colors">
              GRE Test
            </h2>
            <div className="text-xs text-slate-500 mt-1 mb-6">
              Graduate Record Examination
            </div>

            <button
              type="button"
              className="w-full bg-[#1a446b] group-hover:bg-[#153655] text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm tracking-wider uppercase transition-all shadow-sm"
            >
              Tanlash
            </button>
          </div>

          {/* Card 2: GMAT Exam */}
          <div 
            onClick={() => onSelectExam('GMAT')}
            className="group bg-white border-2 border-slate-200 hover:border-purple-600 rounded-xl shadow-sm hover:shadow-lg transition-all duration-200 p-6 sm:p-8 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-50 group-hover:bg-purple-600 text-purple-600 group-hover:text-white flex items-center justify-center transition-colors duration-200 mb-4 shadow-inner">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              GMAT Test
            </h2>
            <div className="text-xs text-slate-500 mt-1 mb-6">
              Graduate Management Admission Test
            </div>

            <button
              type="button"
              className="w-full bg-purple-600 group-hover:bg-purple-700 text-white py-2.5 sm:py-3 rounded-lg font-bold text-sm tracking-wider uppercase transition-all shadow-sm"
            >
              Tanlash
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-[11px] text-slate-400 py-2">
        Practice Exam Simulation Platform &bull; Barcha huquqlar himoyalangan
      </div>
    </div>
  );
}
