import React from 'react';

function ResultPage({ questions = [], correctCount = 0, handleRestartExam, selectedExam = 'GRE' }) {
  const total = questions.length || 1;
  const score = Math.round((correctCount / total) * 100);
  const reviewed = total - correctCount;

  const isPassed = score >= 95;
  const isGMAT = selectedExam === 'GMAT';
  const examName = isGMAT ? 'GMAT™' : 'GRE®';

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf0] p-3 sm:p-5">
      <div className="w-full max-w-lg md:max-w-xl bg-white rounded-lg shadow-lg overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-[#1a446b] text-white px-4 py-3.5 sm:px-6 sm:py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-4">
          <div>
            <div className="text-[10px] font-bold text-[#8baecf] uppercase tracking-wider mb-0.5">{examName} Exam Summary</div>
            <h1 className="text-lg sm:text-xl font-bold tracking-wide">{examName} Test Results</h1>
          </div>
          <div>
            <span className={`inline-flex items-center px-2.5 py-1 sm:px-3 sm:py-1 rounded text-xs font-bold tracking-wide uppercase shadow-sm ${
              isPassed 
                ? 'bg-emerald-500 text-white' 
                : 'bg-rose-500 text-white'
            }`}>
              {isPassed ? '✓ PASSED / Muvaffaqiyatli' : '✕ DID NOT PASS / O\'tmadi'}
            </span>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-5">
          {/* Status Message */}
          <div className={`p-3 sm:p-3.5 rounded-md border mb-3.5 sm:mb-4 flex items-center gap-3 ${
            isPassed 
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900' 
              : 'bg-rose-50/80 border-rose-200 text-rose-900'
          }`}>
            <div className="text-2xl sm:text-3xl flex-shrink-0">
              {isPassed ? '🎉' : '⚠️'}
            </div>
            <div className="min-w-0">
              <div className="font-bold text-xs sm:text-sm leading-snug">
                {isPassed 
                  ? `Tabriklaymiz! Siz ${examName} talab qilingan o'tish balidan muvaffaqiyatli o'tdingiz.` 
                  : 'Siz talab qilingan minimal 95% o\'tish balini to\'play olmadingiz.'}
              </div>
              <div className="text-[11px] sm:text-xs opacity-85 mt-0.5">
                Minimal o'tish talabi: 95% | Sizning natijangiz: <span className="font-semibold">{score}%</span>
              </div>
            </div>
          </div>

          {/* Stat Boxes */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-3.5 sm:mb-4">
            {/* Score Box */}
            <div className="border border-slate-200 bg-slate-50/40 rounded p-2.5 sm:p-3.5 text-center">
              <div className="text-[10px] sm:text-[11px] font-bold text-[#6f93b5] uppercase tracking-wider mb-1">Score</div>
              <div className={`text-xl sm:text-2xl md:text-3xl font-bold ${isPassed ? 'text-emerald-600' : 'text-[#1a446b]'}`}>{score}%</div>
            </div>
            
            {/* Correct Tasks Box */}
            <div className="border border-slate-200 bg-slate-50/40 rounded p-2.5 sm:p-3.5 text-center">
              <div className="text-[10px] sm:text-[11px] font-bold text-[#6f93b5] uppercase tracking-wider mb-1">Correct</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600">{correctCount}</div>
            </div>

            {/* Reviewed Tasks Box */}
            <div className="border border-slate-200 bg-slate-50/40 rounded p-2.5 sm:p-3.5 text-center">
              <div className="text-[10px] sm:text-[11px] font-bold text-[#6f93b5] uppercase tracking-wider mb-1">Reviewed</div>
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-600">{reviewed}</div>
            </div>
          </div>

          {/* Details summary */}
          <div className="border border-slate-200 rounded px-3 py-2 sm:px-4 sm:py-2.5 mb-4 sm:mb-5 bg-slate-50/60">
            <p className="text-xs sm:text-sm text-slate-700 font-medium">
              You answered <span className="font-bold text-slate-900">{correctCount}</span> out of <span className="font-bold text-slate-900">{questions.length}</span> tasks correctly.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2.5">
            <button 
              onClick={handleRestartExam} 
              className="w-full sm:w-auto bg-[#1a446b] text-white px-5 py-2.5 rounded font-semibold tracking-wide hover:bg-[#153655] transition-colors text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
              RESTART EXAM
            </button>
            <button 
              onClick={() => {
                localStorage.removeItem('gre_session');
                window.location.hash = '#/home';
                window.location.reload();
              }} 
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 px-4 py-2.5 rounded font-semibold tracking-wide transition-colors text-xs sm:text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
              Bosh sahifaga qaytish (Home)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
