import React, { useState, useEffect, useRef } from 'react';
import { supabase, TABLES } from './supabase';
import AdminPanel from './AdminPanel';
import AdminLogin from './components/AdminLogin';
import HomePage from './components/HomePage';
import WaitingPage from './components/WaitingPage';
import ResultPage from './components/ResultPage';
import QuestionMultipleChoice from './components/QuestionMultipleChoice';
import QuestionInstructionSet from './components/QuestionInstructionSet';
import QuestionMatchingTask from './components/QuestionMatchingTask';
import QuestionSimulatedUI from './components/QuestionSimulatedUI';
import FaceRegistrationModal from './components/FaceRegistrationModal';
import FaceProctoringWidget from './components/FaceProctoringWidget';
import AntiScreenCaptureShield from './components/AntiScreenCaptureShield';
import { examQuestions as q1 } from './test.js';

const getInitialSession = () => {
  try {
    const hash = typeof window !== 'undefined' ? window.location.hash : '';
    const isAdminAuth = typeof window !== 'undefined' ? localStorage.getItem('gre_admin_auth') === 'true' : false;
    const saved = typeof window !== 'undefined' ? localStorage.getItem('gre_session') : null;
    const parsed = saved ? JSON.parse(saved) : null;

    // 1. Check URL hash first
    if (hash.includes('admin')) {
      return { appState: 'ADMIN' };
    }
    if (hash.includes('exam') && parsed && parsed.appState === 'EXAM') {
      return parsed;
    }
    if (hash.includes('waiting') && parsed && parsed.appState === 'WAITING') {
      return parsed;
    }
    if (hash.includes('result') && parsed && parsed.appState === 'RESULT') {
      return parsed;
    }

    // 2. If no matching hash or on root URL, check saved session or admin auth
    if (parsed && parsed.appState && parsed.appState !== 'HOME') {
      return parsed;
    }
    if (isAdminAuth) {
      return { appState: 'ADMIN' };
    }
  } catch (e) {
    console.error("Session restore failed:", e);
  }
  return null;
};

function App() {
  const initialSession = getInitialSession();
  const [sessionId, setSessionId] = useState(initialSession?.sessionId || null);
  const [questions, setQuestions] = useState(initialSession?.questions || []);
  const [currentIndex, setCurrentIndex] = useState(initialSession?.currentIndex ?? 0);
  const [openDropdownId, setOpenDropdownId] = useState(null); 
  const [appState, setAppState] = useState(initialSession?.appState || 'HOME'); // 'HOME', 'WAITING', 'ADMIN', 'EXAM', 'RESULT'
  const [registration, setRegistration] = useState(initialSession?.registration || { firstName: '', lastName: '', email: '' });
  
  const [registrationErrors, setRegistrationErrors] = useState({ firstName: false, lastName: false, email: false });
  const [requestId, setRequestId] = useState(initialSession?.requestId || null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFaceModal, setShowFaceModal] = useState(false);
  const [modalMode, setModalMode] = useState('ENROLL'); // 'ENROLL' | 'VERIFY'
  const [adminApprovedPhoto, setAdminApprovedPhoto] = useState(null);
  const [adminApprovedDescriptor, setAdminApprovedDescriptor] = useState(null);

  const [adminCreds, setAdminCreds] = useState({ firstName: 'admin', email: '0807' });
  const [isAdminAuth, setIsAdminAuth] = useState(() => {
    return typeof window !== 'undefined' ? localStorage.getItem('gre_admin_auth') === 'true' : false;
  });
  const [mobileSidebar, setMobileSidebar] = useState(null);
  const [selectedSourceId, setSelectedSourceId] = useState(null);

  const currentNavBtnRef = useRef(null);

  // Faol savol o'zgarganda navigatsiyada avtomatik ko'rsatish
  useEffect(() => {
    if (currentNavBtnRef.current) {
      try {
        currentNavBtnRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } catch (e) {}
    }
  }, [currentIndex]);

  // Save session to localStorage on active state change
  useEffect(() => {
    if (appState === 'EXAM' || appState === 'WAITING' || appState === 'RESULT') {
      localStorage.setItem('gre_session', JSON.stringify({
        sessionId,
        requestId,
        appState,
        questions,
        currentIndex,
        registration
      }));
    } else if (appState === 'ADMIN') {
      if (isAdminAuth) {
        localStorage.setItem('gre_admin_auth', 'true');
      }
    } else if (appState === 'HOME') {
      localStorage.removeItem('gre_session');
    }
  }, [appState, sessionId, requestId, questions, currentIndex, registration, isAdminAuth]);

  // Synchronize appState with URL hash
  useEffect(() => {
    if (appState === 'ADMIN') {
      const currentTab = localStorage.getItem('gre_admin_tab') || 'dashboard';
      if (!window.location.hash.includes('admin')) {
        window.location.hash = `#/admin?tab=${currentTab}`;
      }
    } else if (appState === 'EXAM') {
      if (!window.location.hash.includes('exam')) {
        window.location.hash = '#/exam';
      }
    } else if (appState === 'WAITING') {
      if (!window.location.hash.includes('waiting')) {
        window.location.hash = '#/waiting';
      }
    } else if (appState === 'RESULT') {
      if (!window.location.hash.includes('result')) {
        window.location.hash = '#/result';
      }
    } else if (appState === 'HOME') {
      if (window.location.hash && window.location.hash !== '#/' && window.location.hash !== '#/home') {
        window.location.hash = '#/home';
      }
    }
  }, [appState]);

  // Listen for browser navigation (back, forward, hash change)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash.includes('admin')) {
        setAppState('ADMIN');
      } else if (hash.includes('exam')) {
        const saved = localStorage.getItem('gre_session');
        if (saved) {
          try {
            const p = JSON.parse(saved);
            if (p.appState === 'EXAM') setAppState('EXAM');
          } catch (e) {}
        }
      } else if (hash.includes('waiting')) {
        setAppState('WAITING');
      } else if (hash.includes('result')) {
        setAppState('RESULT');
      } else if (hash.includes('home') || !hash || hash === '#/') {
        setAppState('HOME');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Anti-cheat protection — faqat EXAM holatida ishlaydi
  useEffect(() => {
    if (appState !== 'EXAM') return;

    const handleKeyDown = (e) => {
      // Prevent F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+P, Ctrl+S, Ctrl+C
      if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) || 
        (e.ctrlKey && (e.key === 'U' || e.key === 'u' || e.key === 'p' || e.key === 'P' || e.key === 's' || e.key === 'S' || e.key === 'c' || e.key === 'C'))
      ) {
        e.preventDefault();
      }
      // Clear clipboard if PrintScreen is pressed
      if (e.key === 'PrintScreen' || e.keyCode === 44) {
        e.preventDefault();
        if (navigator.clipboard) navigator.clipboard.writeText('');
      }
      // Mac screenshot shortcuts
      if (e.metaKey && e.shiftKey && (e.key === '3' || e.key === '4' || e.key === '5')) {
        e.preventDefault();
      }
    };

    const handleContextMenu = (e) => e.preventDefault();

    const handleCopy = (e) => {
      e.preventDefault();
      if (e.clipboardData) e.clipboardData.setData('text/plain', '');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCopy);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCopy);
    };
  }, [appState]);

  useEffect(() => {
    async function loadSettings() {
      const { data } = await supabase.from(TABLES.SETTINGS).select('*');
      if (data) {
        const admin = data.find(d => d.key === 'admin_creds');
        if (admin) setAdminCreds(admin.value);
      }
    }
    loadSettings();
  }, []);

  useEffect(() => {
    if (appState === 'HOME') {
      localStorage.removeItem('gre_session');
      setQuestions([]);
      setCurrentIndex(0);
      setSessionId(null);
      setRequestId(null);
    }
  }, [appState]);

  useEffect(() => {
    if (sessionId && appState !== 'HOME' && appState !== 'ADMIN') {
      const timer = setTimeout(async () => {
        try {
          await supabase.from(TABLES.EXAM_SESSIONS).update({
            questions,
            current_index: currentIndex,
            app_state: appState,
            registration
          }).eq('id', sessionId);
        } catch (e) {
          console.error("Session sync error:", e);
        }
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [questions, currentIndex, appState, registration, sessionId]);

  useEffect(() => {
    async function loadQuestions() {
      if (appState === 'EXAM' && questions.length === 0) {
        let rawQuestions = [];

        // Avval bazadan yuklashga urinib ko'ramiz, agar bo'lmasa lokal fayldan olamiz
        const { data, error } = await supabase
          .from(TABLES.QUESTIONS)
          .select('*')
          .order('id', { ascending: true });

        if (!error && data && data.length >= 100) {
          rawQuestions = data.map(dbQ => ({ id: dbQ.id, prompt: dbQ.prompt, type: dbQ.type, ...dbQ.data }));
        } else {
          // Bazada to'liq 100 savol bo'lmasa yoki ulanish bo'lmasa — 100 talik rasmiy GRE Physics testini lokal yuklaymiz
          rawQuestions = q1;
        }

        const shuffleArray = (arr) => {
          if (!Array.isArray(arr)) return arr;
          const clone = [...arr];
          for (let i = clone.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [clone[i], clone[j]] = [clone[j], clone[i]];
          }
          return clone;
        };

        const initial = rawQuestions.map((q, idx) => {
          let normalizedQ = JSON.parse(JSON.stringify(q));
          normalizedQ.id = idx + 1;
          
          if (normalizedQ.type === 'SINGLE CHOICE') {
            normalizedQ.type = 'MULTIPLE CHOICE';
          }

          if (normalizedQ.type === 'MATCHING') {
            if (normalizedQ.options && normalizedQ.options.some(opt => opt.text && opt.text.includes('->'))) {
              normalizedQ.type = 'MATCHING TASK';
              normalizedQ.sourceItems = [];
              normalizedQ.targetAreas = [];
              
              normalizedQ.options.forEach((opt) => {
                const parts = opt.text.split('->');
                const leftText = parts[0].trim();
                const rightText = parts.slice(1).join('->').trim();
                const srcId = `src_${opt.id}`;
                const tgtId = `tgt_${opt.id}`;
                normalizedQ.targetAreas.push({ id: tgtId, label: rightText || leftText, correctAnswer: srcId });
              });

              const shuffledOptions = shuffleArray(normalizedQ.options);
              shuffledOptions.forEach((opt) => {
                const parts = opt.text.split('->');
                const leftText = parts[0].trim();
                const srcId = `src_${opt.id}`;
                normalizedQ.sourceItems.push({ id: srcId, text: leftText });
              });

              delete normalizedQ.options;
              delete normalizedQ.correctAnswers;
            } else {
              normalizedQ.type = 'MULTIPLE CHOICE';
            }
          }
          
          if (normalizedQ.type === 'TRUE_FALSE_MATRIX' || normalizedQ.type === 'YES_NO_MATRIX') {
            normalizedQ.type = 'INSTRUCTION SET';
            normalizedQ.statements = (normalizedQ.options || []).map((opt, i) => ({
              id: opt.id || `s${i}`,
              text: opt.text,
              options: q.type === 'TRUE_FALSE_MATRIX' ? ['True', 'False'] : ['Yes', 'No'],
              correctAnswer: opt.answer || opt.correctAnswer
            }));
          }

          if (normalizedQ.options && Array.isArray(normalizedQ.options) && normalizedQ.shuffle !== false) {
            normalizedQ.options = shuffleArray(normalizedQ.options);
          }

          if (normalizedQ.statements && Array.isArray(normalizedQ.statements)) {
            normalizedQ.statements = shuffleArray(normalizedQ.statements);
          }

          if (normalizedQ.sourceItems && Array.isArray(normalizedQ.sourceItems)) {
            normalizedQ.sourceItems = shuffleArray(normalizedQ.sourceItems);
          }

          return {
            ...normalizedQ,
            userAnswers: (normalizedQ.type === 'INSTRUCTION SET' || normalizedQ.type === 'MATCHING TASK') ? {} : [],
            status: 'Not Started' 
          };
        });

        setQuestions(initial);
        setCurrentIndex(0);
      }
    }
    loadQuestions();
  }, [appState, questions.length]);

  useEffect(() => {
    let intervalId;
    if (appState === 'WAITING' && requestId) {
      intervalId = setInterval(async () => {
        const { data } = await supabase
          .from(TABLES.REQUESTS)
          .select('*')
          .eq('id', requestId)
          .single();
          
        if (data) {
          if (data.status === 'approved') {
            clearInterval(intervalId);
            setQuestions([]);
            setCurrentIndex(0);
            const approvedCredentials = {
              firstName: data.firstName,
              lastName: data.lastName,
              email: (data.email || '').trim().toLowerCase(),
              photo: data.photo
            };
            setRegistration(approvedCredentials);
            const { data: newSession } = await supabase
              .from(TABLES.EXAM_SESSIONS)
              .insert([{ 
                email: approvedCredentials.email, 
                registration: approvedCredentials, 
                app_state: 'EXAM' 
              }])
              .select();
            if (newSession && newSession.length > 0) {
              setSessionId(newSession[0].id);
            }
            setAppState('EXAM');
          } else if (data.status === 'rejected') {
            alert('Sizning so\'rovingiz admin tomonidan rad etildi.');
            setAppState('HOME');
            clearInterval(intervalId);
          }
        }
      }, 2000);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [appState, requestId, registration]);

  const safeIndex = questions.length > 0 ? Math.max(0, Math.min(currentIndex, questions.length - 1)) : 0;
  const currentQ = questions[safeIndex] || null;

  if (appState === 'EXAM' && (!currentQ || questions.length === 0)) return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf0] font-semibold text-[#1a446b]">
      <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-sm shadow-md">
        <svg className="w-6 h-6 animate-spin text-[#1a446b]" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        Loading Exam Workspace...
      </div>
    </div>
  );
  
  const startedCount = questions.filter(q => q.status !== 'Not Started').length;
  const correctCount = questions.filter(q => q.status === 'Correct').length;
  const reviewCount = questions.filter(q => q.status === 'Review').length;
  const progressPercent = questions.length > 0 ? Math.round((startedCount / questions.length) * 100) : 0;

  // --- Handlers for MULTIPLE CHOICE ---
  const toggleOption = (optId) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;
    if (currentQ.type !== 'MULTIPLE CHOICE' && currentQ.type !== 'SIMULATED_UI') return;

    let newAnswers = [...(currentQ.userAnswers || [])];
    const isSelected = newAnswers.includes(optId);
    const requiredCount = currentQ.answersRequired || 1;
    
    if (isSelected) {
      newAnswers = newAnswers.filter(id => id !== optId);
    } else {
      if (newAnswers.length < requiredCount) {
        newAnswers.push(optId);
      } else if (requiredCount === 1) {
        newAnswers = [optId];
      } else {
        newAnswers = [...newAnswers.slice(1), optId];
      }
    }
    
    setQuestions(prev => prev.map((q, i) => {
      if (i === currentIndex) {
        return { 
          ...q, 
          userAnswers: newAnswers,
          status: newAnswers.length > 0 ? 'In Progress' : 'Not Started'
        };
      }
      return q;
    }));
  };

  // --- Handlers for INSTRUCTION SET ---
  const handleSelectAnswer = (stmtId, value) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;

    const newAnswers = { ...(currentQ.userAnswers || {}), [stmtId]: value };
    const answeredCount = Object.keys(newAnswers).length;
    
    setQuestions(prev => prev.map((q, i) => {
      if (i === currentIndex) {
        return {
          ...q,
          userAnswers: newAnswers,
          status: answeredCount > 0 ? 'In Progress' : 'Not Started'
        };
      }
      return q;
    }));
    setOpenDropdownId(null);
  };

  // --- Handlers for MATCHING TASK ---
  const handleSourceClick = (sourceId) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;
    if (selectedSourceId === sourceId) {
      setSelectedSourceId(null);
    } else {
      setSelectedSourceId(sourceId);
    }
  };

  const handleTargetClick = (targetId) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;
    if (!selectedSourceId) return;

    const newAnswers = { ...(currentQ.userAnswers || {}) };
    for (const [key, val] of Object.entries(newAnswers)) {
      if (val === selectedSourceId) {
        delete newAnswers[key];
      }
    }
    newAnswers[targetId] = selectedSourceId;
    
    const answeredCount = Object.keys(newAnswers).length;
    setQuestions(prev => prev.map((q, i) => {
      if (i === currentIndex) {
        return {
          ...q,
          userAnswers: newAnswers,
          status: answeredCount > 0 ? 'In Progress' : 'Not Started'
        };
      }
      return q;
    }));
    
    setSelectedSourceId(null);
  };

  const handleDragStart = (e, sourceId) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('sourceId', sourceId);
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;
    const sourceId = e.dataTransfer.getData('sourceId');
    if (!sourceId) return;

    const newAnswers = { ...(currentQ.userAnswers || {}) };
    for (const [key, val] of Object.entries(newAnswers)) {
      if (val === sourceId) {
        delete newAnswers[key];
      }
    }
    newAnswers[targetId] = sourceId;
    
    const answeredCount = Object.keys(newAnswers).length;
    setQuestions(prev => prev.map((q, i) => {
      if (i === currentIndex) {
        return {
          ...q,
          userAnswers: newAnswers,
          status: answeredCount > 0 ? 'In Progress' : 'Not Started'
        };
      }
      return q;
    }));
  };

  const handleClearTarget = (targetId) => {
    if (!currentQ || currentQ.status === 'Correct' || currentQ.status === 'Review') return;
    const newAnswers = { ...(currentQ.userAnswers || {}) };
    delete newAnswers[targetId];
    
    const answeredCount = Object.keys(newAnswers).length;
    setQuestions(prev => prev.map((q, i) => {
      if (i === currentIndex) {
        return {
          ...q,
          userAnswers: newAnswers,
          status: answeredCount > 0 ? 'In Progress' : 'Not Started'
        };
      }
      return q;
    }));
  };

  // --- Navigation & Submission ---
  const handleNext = async () => {
    setOpenDropdownId(null);
    setMobileSidebar(null);
    setSelectedSourceId(null);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setAppState('RESULT'); 
      
      const finalCorrectCount = questions.filter(q => q.status === 'Correct').length;
      const finalScore = Math.round((finalCorrectCount / (questions.length || 1)) * 100);
      
      try {
        await supabase.from(TABLES.LEADERBOARD).insert([{
          username: `${registration.firstName || ''} ${registration.lastName || ''}`.trim() || 'Student',
          score: finalScore,
          level_num: 1
        }]);
      } catch (err) {
        console.error("Failed to save score to leaderboard:", err);
      }
    }
  };

  const handlePrev = () => {
    setOpenDropdownId(null);
    setMobileSidebar(null);
    setSelectedSourceId(null);
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const isSubmitReady = currentQ && (
    ((currentQ.type === 'MULTIPLE CHOICE' || currentQ.type === 'SIMULATED_UI') && (currentQ.userAnswers || []).length === (currentQ.answersRequired || 1)) ||
    (currentQ.type === 'INSTRUCTION SET' && Object.keys(currentQ.userAnswers || {}).length === (currentQ.statements || []).length) ||
    (currentQ.type === 'MATCHING TASK' && Object.keys(currentQ.userAnswers || {}).length === (currentQ.targetAreas || []).length)
  );

  const handleSubmitTask = () => {
    if (isSubmitReady && currentQ) {
      let isCorrect = false;

      if (currentQ.type === 'MULTIPLE CHOICE' || currentQ.type === 'SIMULATED_UI') {
        const userAns = currentQ.userAnswers || [];
        const correctList = currentQ.correctAnswers || [];
        isCorrect = 
          userAns.length === correctList.length &&
          userAns.every(ans => correctList.includes(ans));
      } else if (currentQ.type === 'INSTRUCTION SET') {
        const stmts = currentQ.statements || [];
        const userAns = currentQ.userAnswers || {};
        isCorrect = stmts.every(stmt => userAns[stmt.id] === (stmt.correctAnswer || stmt.answer));
      } else if (currentQ.type === 'MATCHING TASK') {
        const tgts = currentQ.targetAreas || [];
        const userAns = currentQ.userAnswers || {};
        isCorrect = tgts.every(tgt => userAns[tgt.id] === tgt.correctAnswer);
      }

      setQuestions(prev => prev.map((q, i) => {
        if (i === currentIndex) {
          return { ...q, status: isCorrect ? 'Correct' : 'Review' };
        }
        return q;
      }));
    }
  };

  const isEvaluated = currentQ && (currentQ.status === 'Correct' || currentQ.status === 'Review');
  const firstUnansweredIndex = questions.findIndex(q => q.status !== 'Correct' && q.status !== 'Review');
  const maxAllowedIndex = firstUnansweredIndex === -1 ? questions.length - 1 : firstUnansweredIndex;

  const handleRestartExam = async () => {
    if (sessionId) {
      try {
        await supabase.from(TABLES.EXAM_SESSIONS).delete().eq('id', sessionId);
      } catch (e) {
        console.error("Session deletion error:", e);
      }
    }
    localStorage.removeItem('gre_session');
    setQuestions([]);
    setCurrentIndex(0);
    setSessionId(null);
    setRequestId(null);
    setRegistration({ firstName: '', lastName: '', email: '' });
    window.location.hash = '#/home';
    setAppState('HOME');
  };

  const handleGoHome = () => {
    if (appState === 'EXAM') {
      const confirmExit = window.confirm("Imtihon davom etmoqda. Rostdan ham bosh sahifaga qaytmoqchimisiz?");
      if (!confirmExit) return;
    }
    handleRestartExam();
  };

  const handleConfirmRestart = () => {
    const confirmRestart = window.confirm("Rostdan ham imtihonni qaytadan boshlamoqchimisiz? Barcha javoblaringiz o'chiriladi.");
    if (confirmRestart) {
      handleRestartExam();
    }
  };

  const handleStartExam = async () => {
    if (isSubmitting) return;

    const trimmedFirstName = (registration.firstName || '').trim();
    const trimmedLastName = (registration.lastName || '').trim();
    const trimmedEmail = (registration.email || '').trim().toLowerCase();

    const isFirstNameValid = trimmedFirstName.length > 0;
    const isLastNameValid = trimmedLastName.length > 0;
    const isEmailValid = /^[^\s@]+@gmail\.com$/.test(trimmedEmail);
    
    // Check if Admin
    const targetAdminFirstName = (adminCreds.firstName || 'admin').trim().toLowerCase();
    const targetAdminEmail = (adminCreds.email || '0807').trim().toLowerCase();

    if (
      trimmedFirstName.toLowerCase() === targetAdminFirstName &&
      trimmedEmail === targetAdminEmail
    ) {
      setIsAdminAuth(true);
      localStorage.setItem('gre_admin_auth', 'true');
      const currentTab = localStorage.getItem('gre_admin_tab') || 'dashboard';
      window.location.hash = `#/admin?tab=${currentTab}`;
      setAppState('ADMIN');
      return;
    }

    if (isFirstNameValid && isLastNameValid && isEmailValid) {
      setIsSubmitting(true);
      try {
        // Query all requests for this email
        const { data, error } = await supabase
          .from(TABLES.REQUESTS)
          .select('*')
          .ilike('email', trimmedEmail)
          .order('created_at', { ascending: false });

        if (!error && data && data.length > 0) {
          // 1. Check if user has an APPROVED record
          const approved = data.find(r => r.status === 'approved');
          if (approved) {
            // Ism va familiya tekshiruvi (to'g'ri yoki almashgan tartibda):
            const approvedFirst = (approved.firstName || '').trim().toLowerCase();
            const approvedLast = (approved.lastName || '').trim().toLowerCase();

            const isExact = (trimmedFirstName.toLowerCase() === approvedFirst && trimmedLastName.toLowerCase() === approvedLast);
            const isSwapped = (trimmedFirstName.toLowerCase() === approvedLast && trimmedLastName.toLowerCase() === approvedFirst);

            if (!isExact && !isSwapped) {
              alert(`Xatolik: Kiritilgan nomzod ma'lumotlari ("${trimmedFirstName} ${trimmedLastName}") admin tasdiqlagan nomzod ("${approved.firstName} ${approved.lastName}") bilan mos kelmadi!`);
              setIsSubmitting(false);
              return;
            }

            if (!approved.photo) {
              alert(`Xatolik: "${approved.email}" uchun admin tasdiqlagan fotosurat mavjud emas! Iltimos, admindan qayta ro'yxatdan o'tkazishni so'rang.`);
              setIsSubmitting(false);
              return;
            }

            // C) YUZ (FACE ID) TEKSHIRUVI:
            setRegistration({
              firstName: approved.firstName,
              lastName: approved.lastName,
              email: approved.email,
              photo: approved.photo,
              descriptor: approved.descriptor || null
            });
            setModalMode('VERIFY');
            setAdminApprovedPhoto(approved.photo);
            setAdminApprovedDescriptor(approved.descriptor || null);
            setRequestId(approved.id);
            setShowFaceModal(true);
            setIsSubmitting(false);
            return;
          }

          // 2. Check if user is PENDING admin approval
          const pending = data.find(r => r.status === 'pending');
          if (pending) {
            setRequestId(pending.id);
            setIsSubmitting(false);
            alert(`Sizning ro'yxatdan o'tish so'rovingiz (${pending.firstName} ${pending.lastName}) yuborilgan, ammo admin tomonidan hali tasdiqlanmagan. Iltimos, admin tasdiqlashini kuting.`);
            setAppState('WAITING');
            return;
          }
        }

        // 3. New candidate: Biometric Face Registration (ENROLL)
        setModalMode('ENROLL');
        setAdminApprovedPhoto(null);
        setAdminApprovedDescriptor(null);
        setShowFaceModal(true);
      } catch (err) {
        console.error("Error checking user approval status:", err);
        setModalMode('ENROLL');
        setAdminApprovedPhoto(null);
        setAdminApprovedDescriptor(null);
        setShowFaceModal(true);
      } finally {
        setIsSubmitting(false);
      }

    } else {
      let emailErrorMsg = false;
      if (!trimmedEmail) {
        emailErrorMsg = 'Please enter email.';
      } else if (!isEmailValid) {
        emailErrorMsg = "Email @gmail.com bo'lishi kerak (masalan: example@gmail.com)";
      }

      setRegistrationErrors({
        firstName: !isFirstNameValid,
        lastName: !isLastNameValid,
        email: emailErrorMsg
      });
    }
  };

  // Face Unlock verification success (Only admin-approved face can enter)
  const handleVerifiedFace = async (verifiedPhoto) => {
    setIsSubmitting(true);
    const trimmedFirstName = (registration.firstName || '').trim();
    const trimmedLastName = (registration.lastName || '').trim();
    const trimmedEmail = (registration.email || '').trim().toLowerCase();

    try {
      const { data: sessionData } = await supabase
        .from(TABLES.EXAM_SESSIONS)
        .select('*')
        .ilike('email', trimmedEmail)
        .order('updated_at', { ascending: false });
        
      const activeSession = sessionData?.find(s => s.app_state !== 'RESULT');

      if (activeSession) {
        setSessionId(activeSession.id);
        setQuestions(activeSession.questions || []);
        setCurrentIndex(activeSession.current_index || 0);
        setAppState(activeSession.app_state || 'EXAM');
      } else {
        setQuestions([]);
        setCurrentIndex(0);
        const { data: newSession } = await supabase
          .from(TABLES.EXAM_SESSIONS)
          .insert([{ 
            email: trimmedEmail, 
            registration: { 
              firstName: trimmedFirstName, 
              lastName: trimmedLastName, 
              email: trimmedEmail, 
              photo: verifiedPhoto
            }, 
            app_state: 'EXAM' 
          }])
          .select();
        if (newSession && newSession.length > 0) {
          setSessionId(newSession[0].id);
        }
        setAppState('EXAM');
      }
    } catch (e) {
      console.error("Error setting up exam session after face unlock:", e);
      setAppState('EXAM');
    }
    setShowFaceModal(false);
    setIsSubmitting(false);
  };

  // Initial Enrollment confirmation (sends request to admin with photo and descriptor)
  const handleConfirmFace = async (capturedData) => {
    setIsSubmitting(true);
    const capturedPhoto = typeof capturedData === 'object' && capturedData !== null ? capturedData.photo : capturedData;
    const capturedDescriptor = typeof capturedData === 'object' && capturedData !== null ? capturedData.descriptor : null;

    const trimmedFirstName = (registration.firstName || '').trim();
    const trimmedLastName = (registration.lastName || '').trim();
    const trimmedEmail = (registration.email || '').trim().toLowerCase();

    try {
      const { data } = await supabase
        .from(TABLES.REQUESTS)
        .select('id, status')
        .ilike('email', trimmedEmail)
        .in('status', ['pending', 'approved']);
        
      if (data && data.length > 0) {
        const pending = data.find(r => r.status === 'pending');
        if (pending) {
          try {
            await supabase
              .from(TABLES.REQUESTS)
              .update({ photo: capturedPhoto, descriptor: capturedDescriptor })
              .eq('id', pending.id);
          } catch (e) {
            console.warn("Could not update photo in pending request:", e);
          }

          setRequestId(pending.id);
          setShowFaceModal(false);
          setAppState('WAITING');
          setIsSubmitting(false);
          return;
        }
      }

      const insertPayload = {
        firstName: trimmedFirstName,
        lastName: trimmedLastName,
        email: trimmedEmail,
        level: 'GRE - Graduate Record Examination',
        photo: capturedPhoto,
        descriptor: capturedDescriptor,
        status: 'pending'
      };

      let { data: insertData, error: insertErr } = await supabase
        .from(TABLES.REQUESTS)
        .insert([insertPayload])
        .select();

      if (insertErr) {
        console.warn("Supabase insert error, trying fallback payload:", insertErr);
        // Fallback without descriptor if column does not exist yet in DB
        const fallbackPayload = {
          firstName: trimmedFirstName,
          lastName: trimmedLastName,
          email: trimmedEmail,
          level: 'GRE - Graduate Record Examination',
          photo: capturedPhoto,
          status: 'pending'
        };
        const retryRes = await supabase.from(TABLES.REQUESTS).insert([fallbackPayload]).select();
        if (retryRes.error) {
          console.error("Supabase fallback insert error:", retryRes.error);
          throw new Error(retryRes.error.message || insertErr.message || "Baza bilan aloqa xatosi");
        }
        insertData = retryRes.data;
      }
      
      if (insertData && insertData.length > 0) {
        setRequestId(insertData[0].id);
        setShowFaceModal(false);
        setAppState('WAITING');
      } else {
        alert("So'rov yuborishda xatolik yuz berdi. Iltimos, Supabase jadvallari (setup_tables.sql) to'g'ri yaratilganligini tekshiring.");
      }
    } catch (e) {
      console.error("Error submitting request:", e);
      alert("So'rov yuborishda xatolik: " + (e.message || 'Tarmoq xatosi') + "\n\nIltimos, Supabase SQL Editor'da setup_tables.sql kodini ishga tushirganingizni tekshiring.");
    }
    setIsSubmitting(false);
  };

  // --- Render Home Screen ---
  if (appState === 'HOME') {
    return (
      <>
        <HomePage 
          registration={registration}
          setRegistration={setRegistration}
          registrationErrors={registrationErrors}
          setRegistrationErrors={setRegistrationErrors}
          handleStartExam={handleStartExam}
          isSubmitting={isSubmitting}
        />
        <FaceRegistrationModal
          isOpen={showFaceModal}
          onClose={() => setShowFaceModal(false)}
          onConfirm={handleConfirmFace}
          onVerifySuccess={handleVerifiedFace}
          mode={modalMode}
          adminApprovedPhoto={adminApprovedPhoto}
          adminApprovedDescriptor={adminApprovedDescriptor}
          registration={registration}
          isSubmitting={isSubmitting}
        />
      </>
    );
  }

  // --- Render Waiting Screen ---
  if (appState === 'WAITING') {
    return <WaitingPage registration={registration} setAppState={setAppState} />;
  }

  // --- Render Admin Panel or Admin Login ---
  if (appState === 'ADMIN') {
    if (!isAdminAuth) {
      return (
        <AdminLogin 
          adminCreds={adminCreds} 
          onSuccess={() => {
            setIsAdminAuth(true);
            localStorage.setItem('gre_admin_auth', 'true');
            const currentTab = localStorage.getItem('gre_admin_tab') || 'dashboard';
            window.location.hash = `#/admin?tab=${currentTab}`;
          }} 
          onCancel={() => {
            window.location.hash = '#/home';
            setAppState('HOME');
          }} 
        />
      );
    }

    return (
      <AdminPanel 
        setAppState={(newState) => {
          if (newState !== 'ADMIN') {
            setIsAdminAuth(false);
            localStorage.removeItem('gre_admin_auth');
          }
          setAppState(newState);
        }} 
        setRegistration={setRegistration} 
        adminCreds={adminCreds} 
        setAdminCreds={setAdminCreds} 
      />
    );
  }

  // --- Render Result Screen ---
  if (appState === 'RESULT') {
    return (
      <ResultPage 
        questions={questions} 
        correctCount={correctCount} 
        handleRestartExam={handleRestartExam} 
      />
    );
  }

  // --- Render Main Exam Screen ---
  return (
    <div className="min-h-screen lg:h-screen lg:max-h-screen flex flex-col font-sans select-none selection:bg-[#1a446b] selection:text-white lg:overflow-hidden" onClick={(e) => {
      if (!e.target.closest('.dropdown-container')) {
        setOpenDropdownId(null);
      }
    }}>
      {/* Header - Bo'yiga siqilgan (h-[50px]) */}
      <header className="min-h-[48px] md:h-[50px] py-2 md:py-0 bg-[#1a446b] text-white flex flex-col md:flex-row justify-between items-center px-4 md:px-6 flex-shrink-0 gap-2 md:gap-0">
        <div className="text-center md:text-left">
          <div className="text-[9px] text-[#8baecf] font-bold tracking-widest uppercase mb-[1px]">Official GRE® Subject Test</div>
          <h1 className="text-[14px] md:text-[16px] font-semibold tracking-wide">GRE Physics (GR0877) — 100-Question Exam Workspace</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-1.5 md:gap-3">
          <div className="bg-[#153655] rounded-sm px-3 py-1 border border-[#1a446b] flex flex-col items-center">
            <div className="text-[#8baecf] text-[8.5px] font-bold tracking-widest uppercase mb-[1px]">Current Task</div>
            <div className="text-[12px] font-semibold tracking-wide">Question {currentIndex + 1} of {questions.length}</div>
          </div>
          <div className="bg-[#153655] rounded-sm px-3 py-1 border border-[#1a446b] flex flex-col items-center">
            <div className="text-[#8baecf] text-[8.5px] font-bold tracking-widest uppercase mb-[1px]">Completed</div>
            <div className="text-[12px] font-semibold tracking-wide">{correctCount + reviewCount} / {questions.length}</div>
          </div>
          <button onClick={handleGoHome} className="text-[#8baecf] hover:text-white flex items-center gap-1 bg-transparent px-2.5 py-1 rounded-sm font-semibold hover:bg-white/10 transition-colors text-xs ml-1" title="Bosh sahifaga qaytish">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Home
          </button>
          <button onClick={handleConfirmRestart} className="border border-white text-white bg-transparent px-3 py-1 rounded-sm font-semibold hover:bg-white/10 transition-colors text-xs ml-1">
            Restart Exam
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Toggle */}
      <div className="lg:hidden flex bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm flex-shrink-0">
        <button 
          onClick={() => setMobileSidebar(mobileSidebar === 'nav' ? null : 'nav')}
          className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider flex justify-center items-center gap-2 transition-colors ${mobileSidebar === 'nav' ? 'text-[#1a446b] border-b-2 border-[#1a446b] bg-blue-50/30' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          Task Navigation (1-100)
        </button>
      </div>

      {/* Main Content Area - Bo'yiga siqilgan (py-1.5 md:py-2), yon taraf kengligi qulay */}
      <main className="flex-1 min-h-0 max-w-[1580px] w-full mx-auto py-1.5 md:py-2 px-2.5 sm:px-3.5 md:px-4 flex flex-col lg:flex-row gap-2.5 md:gap-3.5 overflow-y-auto lg:overflow-hidden">
        
        {/* Left Sidebar - Task Navigation (Kengligi qulay: 260px, bo'yiga ixcham) */}
        <aside className={`w-full lg:w-[260px] xl:w-[275px] bg-white border border-gray-200 rounded-sm shadow-sm flex flex-col flex-shrink-0 min-h-0 lg:h-full lg:max-h-full overflow-hidden ${mobileSidebar === 'nav' ? 'flex' : 'hidden lg:flex'}`}>
          <div className="px-3.5 py-1.5 border-b border-gray-100 flex-shrink-0">
            <h3 className="text-[9.5px] font-bold text-[#6f93b5] uppercase tracking-widest">Task Navigation</h3>
          </div>
          <div className="px-3.5 py-1.5 border-b border-gray-100 flex-shrink-0">
            <div className="flex justify-between text-[11px] text-gray-500 font-medium mb-1">
              <span>Session progress</span>
              <span>{progressPercent}%</span>
            </div>
            <div className="w-full bg-[#e6ebf0] rounded-none h-[3px]">
              <div className="bg-[#1a446b] h-[3px] rounded-none transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
            </div>
          </div>
          
          {/* Scrollable Questions Grid */}
          <div className="flex-1 min-h-0 overflow-y-auto px-2.5 py-2 max-h-[250px] lg:max-h-none">
            <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
              {questions.map((q, idx) => {
                let statusClass = '';
                if (idx === currentIndex) {
                  statusClass = 'current';
                } else if (q.status === 'Correct') {
                  statusClass = 'border-[#059669] text-[#059669] bg-white font-bold';
                } else if (q.status === 'Review') {
                  statusClass = 'border-[#e11d48] text-[#e11d48] bg-white font-bold';
                } else if (q.status === 'In Progress') {
                  statusClass = 'border-[#ffc107] text-[#ffc107] bg-white';
                }

                return (
                  <button 
                    key={q.id} 
                    ref={idx === currentIndex ? currentNavBtnRef : null}
                    onClick={() => {
                      setCurrentIndex(idx);
                      setOpenDropdownId(null);
                      setMobileSidebar(null);
                      setSelectedSourceId(null);
                    }}
                    disabled={idx > maxAllowedIndex}
                    className={`grid-btn ${statusClass} ${idx > maxAllowedIndex ? 'opacity-50 cursor-not-allowed hover:bg-white text-gray-300' : ''}`}
                  >
                    {q.id}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="px-3.5 py-1.5 border-t border-gray-100 bg-[#f8f9fb] flex-shrink-0">
            <div className="space-y-0.5 mb-1.5 text-[11px] font-medium">
              <div className="flex justify-between">
                <span className="text-gray-500">Started</span>
                <span className="text-[#1a446b] font-semibold">{startedCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Correct</span>
                <span className="text-[#059669] font-semibold">{correctCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Review</span>
                <span className="text-[#e11d48] font-semibold">{reviewCount}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-1 text-[8.5px] font-bold text-center tracking-wider">
              <div className="border border-gray-200 text-gray-400 uppercase py-0.5 rounded-sm bg-white">Pending</div>
              <div className="border border-[#ffc107] text-[#ffc107] uppercase py-0.5 rounded-sm bg-white">Progress</div>
              <div className="border border-[#059669] text-[#059669] uppercase py-0.5 rounded-sm bg-white">Correct</div>
              <div className="border border-[#e11d48] text-[#e11d48] uppercase py-0.5 rounded-sm bg-white">Review</div>
            </div>
          </div>
        </aside>

        {/* Center Workspace (Bo'yiga ixchamlashtirilgan) */}
        <section className={`flex-1 min-h-0 flex flex-col gap-2 min-w-0 lg:h-full ${mobileSidebar !== null ? 'hidden lg:flex' : 'flex'}`}>
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm px-3 md:px-4 py-1.5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 sm:gap-0 flex-shrink-0">
             <div>
                <div className="text-[9px] font-bold text-[#6f93b5] uppercase tracking-widest">Exam Workspace</div>
                <h2 className="text-sm sm:text-base font-semibold text-gray-800">Question {currentQ.id}</h2>
             </div>
             <div className="flex gap-2">
                <span className="badge-outline multiple-choice">
                  {currentQ.type} {currentQ.type === 'MULTIPLE CHOICE' && `(${currentQ.answersRequired})`}
                </span>
                <span className={`badge-outline uppercase ${
                  currentQ.status === 'Correct' ? 'border-[#059669] text-[#059669] bg-[#ecfdf5]' :
                  currentQ.status === 'Review' ? 'border-[#e11d48] text-[#e11d48] bg-[#fff1f2]' : 
                  currentQ.status === 'In Progress' ? 'border-[#ffc107] text-[#ffc107] bg-[#fffbeb]' : 'not-started'
                }`}>
                  {currentQ.status === 'In Progress' ? 'IN PROGRESS' : 
                   currentQ.status === 'Correct' ? 'ACCEPTED' : 
                   currentQ.status === 'Review' ? 'NEEDS REVIEW' : 'NOT STARTED'}
                </span>
             </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-3 sm:p-3.5 flex-1 min-h-0 flex flex-col overflow-y-auto">
             <div className="bg-[#f5f8fa] p-2 sm:p-2.5 rounded-sm border border-gray-200 mb-2 flex-shrink-0">
                <div className="text-[9px] font-bold text-[#6f93b5] uppercase tracking-widest mb-1">Task Prompt</div>
                <p className="text-[13px] sm:text-[14px] text-gray-800 font-medium leading-relaxed whitespace-pre-line">{currentQ.prompt}</p>
                {currentQ.image && (
                   <div className="mt-2.5 p-2 bg-white rounded border border-gray-200 flex justify-center items-center">
                      <img src={currentQ.image} alt={`Question ${currentQ.id} diagram`} className="max-h-60 max-w-full object-contain" />
                   </div>
                )}
             </div>

             <div className="w-full flex-1">
                {currentQ.type === 'MULTIPLE CHOICE' && (
                  <QuestionMultipleChoice currentQ={currentQ} isEvaluated={isEvaluated} toggleOption={toggleOption} />
                )}
                {isEvaluated && currentQ.explanation && (
                   <div className="mt-3 p-3 bg-emerald-50/80 border border-emerald-200 rounded-sm text-gray-800 text-[12.5px] leading-relaxed shadow-sm">
                      <div className="font-bold text-[#065f46] flex items-center gap-1.5 mb-1 text-[13px]">
                         <span>💡</span> Physics Solution & Explanation:
                      </div>
                      <p className="whitespace-pre-line leading-relaxed text-gray-700">{currentQ.explanation}</p>
                   </div>
                )}

                {currentQ.type === 'INSTRUCTION SET' && (
                  <QuestionInstructionSet 
                    currentQ={currentQ} 
                    isEvaluated={isEvaluated} 
                    openDropdownId={openDropdownId} 
                    setOpenDropdownId={setOpenDropdownId} 
                    handleSelectAnswer={handleSelectAnswer} 
                  />
                )}

                {currentQ.type === 'MATCHING TASK' && (
                  <QuestionMatchingTask 
                    currentQ={currentQ} 
                    isEvaluated={isEvaluated} 
                    selectedSourceId={selectedSourceId} 
                    handleSourceClick={handleSourceClick} 
                    handleTargetClick={handleTargetClick} 
                    handleDragStart={handleDragStart} 
                    handleDrop={handleDrop} 
                    handleClearTarget={handleClearTarget} 
                  />
                )}

                {currentQ.type === 'SIMULATED_UI' && (
                  <QuestionSimulatedUI currentQ={currentQ} isEvaluated={isEvaluated} toggleOption={toggleOption} />
                )}
             </div>
          </div>

          {/* Pastki boshqaruv tugmalari paneli (Bo'yiga ixcham: min-h-[44px]) */}
          <div className="bg-white border border-gray-200 rounded-sm shadow-sm px-3 md:px-4 py-1.5 flex flex-col md:flex-row justify-between items-center min-h-[44px] gap-2 md:gap-0 flex-shrink-0">
             {isEvaluated ? (
                <span className="text-[11px] md:text-[11.5px] text-gray-600 font-medium md:w-1/2 text-center md:text-left">
                   Task submitted. Review the highlighted response before moving on.
                </span>
             ) : (
                <span className="text-[11px] md:text-[11.5px] text-gray-500 font-medium text-center md:text-left">
                   Answer the task and use Submit Task when ready.
                </span>
             )}
             
             <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                <button className="action-btn" onClick={handlePrev} disabled={currentIndex === 0}>PREVIOUS</button>
                
                {!isEvaluated ? (
                   <button className="action-btn" onClick={handleSubmitTask} disabled={!isSubmitReady}>
                      SUBMIT TASK
                   </button>
                ) : (
                   <button className={`action-btn evaluated ${currentQ.status === 'Correct' ? 'correct' : 'review'}`} disabled>
                      {currentQ.status === 'Correct' ? 'ACCEPTED' : 'REVIEW NEEDED'}
                   </button>
                )}

                <button className="action-btn" onClick={handleNext} disabled={!isEvaluated}>
                   {currentIndex === questions.length - 1 ? 'FINISH EXAM' : 'NEXT TASK'}
                </button>
             </div>
          </div>
        </section>
      </main>

      {/* Real-time AI Face Proctoring Widget */}
      <FaceProctoringWidget 
        studentName={`${registration.firstName || ''} ${registration.lastName || ''}`} 
      />

      {/* Anti-Screenshot & Anti-Screen-Recording Security Shield */}
      <AntiScreenCaptureShield 
        registration={registration} 
      />
    </div>
  );
}

export default App;