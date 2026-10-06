import React, { useState } from 'react';
import { supabase, TABLES } from '../supabase';

export default function AdminLogin({ adminCreds, onSuccess, onCancel }) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    setError('');
    setIsLoading(true);

    const inputUser = username.trim().toLowerCase();
    const inputPass = password.trim();

    if (!inputPass) {
      setError('Iltimos, parolni kiriting.');
      setIsLoading(false);
      return;
    }

    try {
      // 1. Eng so'nggi admin_creds ma'lumotlarini bazadan olish
      let targetUser = (adminCreds?.firstName || 'admin').trim().toLowerCase();
      let targetPass = (adminCreds?.email || '0807').trim();

      try {
        const { data } = await supabase
          .from(TABLES.SETTINGS)
          .select('*')
          .eq('key', 'admin_creds')
          .single();

        if (data && data.value) {
          targetUser = (data.value.firstName || targetUser).trim().toLowerCase();
          targetPass = (data.value.email || targetPass).trim();
        }
      } catch (dbErr) {
        console.warn('DB dan admin_creds olishda ogohlantirish:', dbErr);
      }

      // 2. Login va parolni tekshirish
      if (inputUser === targetUser && inputPass === targetPass) {
        localStorage.setItem('gre_admin_auth', 'true');
        onSuccess();
      } else {
        setError("Login yoki parol noto'g'ri! Iltimos, qaytadan urinib ko'ring.");
      }
    } catch (err) {
      console.error('Admin login error:', err);
      setError('Tizimga kirishda xatolik yuz berdi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e6ebf0] p-4 select-none">
      <div className="w-full max-w-md bg-white rounded-sm shadow-xl overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-[#1a446b] text-white px-6 py-7 text-center relative">
          <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/20 shadow-inner">
            <svg className="w-7 h-7 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div className="text-[11px] font-bold text-[#8baecf] uppercase tracking-widest mb-1">
            Xavfsiz Boshqaruv
          </div>
          <h1 className="text-2xl font-bold tracking-wide">
            Admin Tizimiga Kirish
          </h1>
          <p className="text-xs text-blue-100/80 mt-1">
            Practice Exam boshqaruv paneliga kirish uchun parolni kiriting
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-4">
          {error && (
            <div className="bg-rose-50 border border-rose-200 rounded p-3 text-xs text-rose-700 flex items-start gap-2">
              <svg className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Login (Foydalanuvchi nomi)
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="admin"
              className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 text-sm focus:outline-none focus:border-[#1a446b] focus:ring-1 focus:ring-[#1a446b]/20"
              autoFocus
            />
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-1.5">
              Parol / Maxfiy Kod
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Parolni kiriting (masalan: 0807)"
                className="w-full border border-gray-300 rounded-sm px-3.5 py-2.5 pr-10 text-sm focus:outline-none focus:border-[#1a446b] focus:ring-1 focus:ring-[#1a446b]/20"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                title={showPassword ? 'Parolni yashirish' : "Parolni ko'rsatish"}
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#1a446b] hover:bg-[#153655] text-white py-3 rounded-sm font-bold tracking-wider text-xs md:text-sm uppercase transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Tekshirilmoqda...</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  <span>Admin Panelga Kirish</span>
                </>
              )}
            </button>
          </div>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={onCancel}
              className="text-xs text-gray-500 hover:text-[#1a446b] font-medium transition-colors inline-flex items-center gap-1"
            >
              ← Bosh sahifaga qaytish
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
