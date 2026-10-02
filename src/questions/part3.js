export const part3 = [
  {
    "id": 51,
    "prompt": "True statements about the absorption and emission of energy by an atom include which of the following?\nI. An atom can only absorb photons of light that have certain specific energies.\nII. An atom can emit photons of light of any energy.\nIII. At low temperature, the lines in the absorption spectrum of an atom coincide with the lines in its emission spectrum that represent transitions to the ground state.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "III only" },
      { "id": "C", "text": "I and II only" },
      { "id": "D", "text": "I and III only" },
      { "id": "E", "text": "I, II, and III" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Statement I is true because atomic bound-bound transitions are quantized. Statement II is false because bound-bound emission is likewise discrete and quantized. Statement III is true because at low temperatures, virtually all atoms populate the ground state, so absorption lines must originate from the ground state, matching the emission transitions terminating at the ground state."
  },
  {
    "id": 52,
    "prompt": "X rays of wavelength λ = 0.250 nm are incident on the face of a crystal at angle θ, measured from the crystal surface. The smallest angle that yields an intense reflected beam is θ = 14.5°. Which of the following gives the value of the interplanar spacing d? (sin 14.5° ≈ 1/4)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.125 nm" },
      { "id": "B", "text": "0.250 nm" },
      { "id": "C", "text": "0.500 nm" },
      { "id": "D", "text": "0.625 nm" },
      { "id": "E", "text": "0.750 nm" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Bragg's law is 2d sinθ = nλ. The smallest non-zero reflection angle corresponds to the first diffraction order n = 1: 2d sin(14.5°) = λ ⇒ 2d (1/4) = 0.250 nm ⇒ d / 2 = 0.250 nm ⇒ d = 0.500 nm."
  },
  {
    "id": 53,
    "prompt": "Astronomers observe two separate solar systems, each consisting of a planet orbiting a sun. The two orbits are circular and have the same radius R. It is determined that the planets have angular momenta of the same magnitude L about their suns, and that the orbital periods are in the ratio of three to one; i.e., T₁ = 3T₂. The ratio m₁/m₂ of the masses of the two planets is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "√3" },
      { "id": "C", "text": "2" },
      { "id": "D", "text": "3" },
      { "id": "E", "text": "9" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Orbital angular momentum is L = m v R = m (2πR / T) R = 2π m R² / T. With L₁ = L₂ and R₁ = R₂ = R: m₁ / T₁ = m₂ / T₂ ⇒ m₁ / m₂ = T₁ / T₂ = 3."
  },
  {
    "id": 54,
    "prompt": "If the Sun were suddenly replaced by a black hole of the same mass, it would have a Schwarzschild radius of 3,000 m. What effect, if any, would this change have on the orbits of the planets?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "The planets would move directly toward the Sun." },
      { "id": "B", "text": "The planets would move in spiral orbits." },
      { "id": "C", "text": "The planets would oscillate about their former elliptical orbits." },
      { "id": "D", "text": "The orbits would precess much more rapidly." },
      { "id": "E", "text": "The orbits would remain unchanged." }
    ],
    "correctAnswers": ["E"],
    "explanation": "According to Birkhoff's theorem in General Relativity (and Newton's shell theorem in Newtonian gravity), the exterior gravitational field of any spherically symmetric mass distribution depends only on its total mass M. Because the mass is unchanged, the orbital dynamics of all planets remain completely unaffected."
  },
  {
    "id": 55,
    "prompt": "A distant galaxy is observed to have its hydrogen-β line shifted to a wavelength of 580 nm, away from the laboratory value of 434 nm. Which of the following gives the approximate velocity of recession of the distant galaxy? (Note: 580 / 434 ≈ 4/3)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.28c" },
      { "id": "B", "text": "0.53c" },
      { "id": "C", "text": "0.56c" },
      { "id": "D", "text": "0.75c" },
      { "id": "E", "text": "0.86c" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The relativistic Doppler formula is λ_obs / λ_0 = √[(1 + β) / (1 - β)] = 4/3. Squaring gives (1 + β) / (1 - β) = 16/9 ⇒ 9 + 9β = 16 - 16β ⇒ 25β = 7 ⇒ β = 0.28, so the recession velocity is v = 0.28c."
  },
  {
    "id": 56,
    "prompt": "A small plane can fly at a speed of 200 km/h in still air. A 30 km/h wind is blowing from west to east. How much time is required for the plane to fly 500 km due north?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "50 / 23 h" },
      { "id": "B", "text": "50 / √409 h" },
      { "id": "C", "text": "50 / 20 h" },
      { "id": "D", "text": "50 / √391 h" },
      { "id": "E", "text": "50 / 17 h" }
    ],
    "correctAnswers": ["D"],
    "explanation": "To maintain a true heading due north against an eastward wind, the plane's ground speed vector must point due north: v_north = √(v_air² - v_wind²) = √(200² - 30²) = √(40,000 - 900) = √39,100 = 10√391 km/h. The travel time is t = 500 km / (10√391 km/h) = 50 / √391 h."
  },
  {
    "id": 57,
    "prompt": "Each of the figures above shows blocks of mass 2m and m acted on by an external horizontal force F. For each figure, which of the following statements about the magnitude of the force that one block exerts on the other (F₁₂) is correct? (Assume that the surface on which the blocks move is frictionless.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q57.svg",
    "options": [
      { "id": "A", "text": "Figure 1: F₁₂ = F/3,  Figure 2: F₁₂ = F/3" },
      { "id": "B", "text": "Figure 1: F₁₂ = F/3,  Figure 2: F₁₂ = 2F/3" },
      { "id": "C", "text": "Figure 1: F₁₂ = 2F/3,  Figure 2: F₁₂ = F/3" },
      { "id": "D", "text": "Figure 1: F₁₂ = 2F/3,  Figure 2: F₁₂ = 2F/3" },
      { "id": "E", "text": "Figure 1: F₁₂ = F,  Figure 2: F₁₂ = F" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Both systems accelerate at a = F / (2m + m) = F / (3m). In Figure 1, the contact force accelerates the front block of mass m: F₁₂ = m a = m (F / 3m) = F / 3. In Figure 2, the contact force accelerates the block of mass 2m: F₁₂ = 2m a = 2m (F / 3m) = 2F / 3."
  },
  {
    "id": 58,
    "prompt": "In the figure above, block A has mass m_A = 25 kg and block B has mass m_B = 10 kg. Both blocks move with constant acceleration a = 2 m/s² to the right, and the coefficient of static friction between the two blocks is μ_s = 0.8. The static frictional force acting between the blocks is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q58.svg",
    "options": [
      { "id": "A", "text": "20 N" },
      { "id": "B", "text": "50 N" },
      { "id": "C", "text": "78 N" },
      { "id": "D", "text": "196 N" },
      { "id": "E", "text": "274 N" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The only horizontal force acting on upper block B is static friction from block A. By Newton's second law, f_s = m_B a = 10 kg × 2 m/s² = 20 N. Since the maximum available static friction is f_{s,max} = μ_s m_B g = 0.8 × 10 × 9.8 = 78.4 N > 20 N, the actual static friction is exactly 20 N."
  },
  {
    "id": 59,
    "prompt": "A simple pendulum of length l is suspended from the ceiling of an elevator that is accelerating upward with constant acceleration a. For small oscillations, the period, T, of the pendulum is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "T = 2π √(l / g)" },
      { "id": "B", "text": "T = 2π √(l / (g - a))" },
      { "id": "C", "text": "T = 2π √(l / (g + a))" },
      { "id": "D", "text": "T = 2π √[l a / (g(g + a))]" },
      { "id": "E", "text": "T = 2π √[l(g + a) / (g a)]" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In an upwardly accelerating elevator frame, an inertial fictitious downward force acts on the pendulum bob. The effective gravity is g_eff = g + a, giving small-angle period T = 2π √(l / (g + a))."
  },
  {
    "id": 60,
    "prompt": "Three long, straight wires in the xz-plane, each carrying current I, cross at the origin of coordinates, as shown in the figure above. Let x̂, ŷ, and ẑ denote the unit vectors in the x-, y-, and z-directions, respectively. The magnetic field B as a function of x, with y = 0 and z = 0, is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q60.svg",
    "options": [
      { "id": "A", "text": "B = (3μ₀I / 2πx) x̂" },
      { "id": "B", "text": "B = (3μ₀I / 2πx) ŷ" },
      { "id": "C", "text": "B = (μ₀I / 2πx)(1 + 2√2) ŷ" },
      { "id": "D", "text": "B = (μ₀I / 2πx) x̂" },
      { "id": "E", "text": "B = (μ₀I / 2πx) ŷ" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Because all wires lie in the xz-plane, their magnetic fields at any point on the x-axis are purely in the +ŷ direction. The wire on the z-axis has perpendicular distance x, contributing B₁ = (μ₀I / 2πx) ŷ. The two wires at ±45° to the z-axis have perpendicular distance d = x sin 45° = x / √2, each contributing B = μ₀I / (2π d) = √2 (μ₀I / 2πx) ŷ. Adding them: B = (μ₀I / 2πx)(1 + 2√2) ŷ."
  },
  {
    "id": 61,
    "prompt": "A particle with mass m and charge q, moving with a velocity v, enters a region of uniform magnetic field B, as shown in the figure above. The particle strikes the wall at a distance d from the entrance slit. If the particle's velocity stays the same but its charge-to-mass ratio is doubled, at what distance from the entrance slit will the particle strike the wall?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q61.svg",
    "options": [
      { "id": "A", "text": "2d" },
      { "id": "B", "text": "√2 d" },
      { "id": "C", "text": "d" },
      { "id": "D", "text": "1/√2 d" },
      { "id": "E", "text": "½ d" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The radius of curvature in the magnetic field is R = m v / (q B) = v / [B (q/m)]. The striking distance is the circle diameter d = 2R = 2v / [B (q/m)]. Doubling (q/m) while keeping v and B constant cuts the diameter in half: d' = ½ d."
  },
  {
    "id": 62,
    "prompt": "Consider the closed cylindrical Gaussian surface above. Suppose that the net charge enclosed within this surface is +1 × 10⁻⁹ C and the electric flux out through the portion of the surface marked A is -100 N·m²/C. The flux through the rest of the surface is most nearly given by which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q62.svg",
    "options": [
      { "id": "A", "text": "-100 N·m²/C" },
      { "id": "B", "text": "0 N·m²/C" },
      { "id": "C", "text": "10 N·m²/C" },
      { "id": "D", "text": "100 N·m²/C" },
      { "id": "E", "text": "200 N·m²/C" }
    ],
    "correctAnswers": ["E"],
    "explanation": "By Gauss's law, total electric flux through the entire closed surface is Φ_total = q_enc / ε₀ = 10⁻⁹ C / (8.85 × 10⁻¹² F/m) ≈ 113 N·m²/C. Since Φ_total = Φ_A + Φ_rest, Φ_rest = Φ_total - Φ_A = 113 - (-100) ≈ 213 N·m²/C ≈ 200 N·m²/C."
  },
  {
    "id": 63,
    "prompt": "¹³N → ¹³C + e⁺ + ν_e\nThe nuclear decay above is an example of a process induced by the",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Mössbauer effect" },
      { "id": "B", "text": "Casimir effect" },
      { "id": "C", "text": "photoelectric effect" },
      { "id": "D", "text": "weak interaction" },
      { "id": "E", "text": "strong interaction" }
    ],
    "correctAnswers": ["D"],
    "explanation": "This reaction is positron emission (beta-plus decay), wherein a nuclear proton converts to a neutron (p → n + e⁺ + ν_e). All beta decay processes are mediated by the weak interaction."
  },
  {
    "id": 64,
    "prompt": "Consider a single electron atom with orbital angular momentum L = √2 ℏ. Which of the following gives the possible values of a measurement of L_z, the z-component of L?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "0, ℏ" },
      { "id": "C", "text": "0, ℏ, 2ℏ" },
      { "id": "D", "text": "-ℏ, 0, ℏ" },
      { "id": "E", "text": "-2ℏ, -ℏ, 0, ℏ, 2ℏ" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Orbital angular momentum eigenvalue is L² = l(l + 1)ℏ². Given |L| = √2 ℏ, l(l + 1) = 2 ⇒ l = 1. The allowed projections are L_z = m_l ℏ where m_l ∈ {-1, 0, +1}, yielding -ℏ, 0, ℏ."
  },
  {
    "id": 65,
    "prompt": "Characteristics of the quantum harmonic oscillator include which of the following?\nI. A spectrum of evenly spaced energy states\nII. A potential energy function that is linear in the position coordinate\nIII. A ground state that is characterized by zero kinetic energy\nIV. A nonzero probability of finding the oscillator outside the classical turning points",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "IV only" },
      { "id": "C", "text": "I and IV only" },
      { "id": "D", "text": "II and III only" },
      { "id": "E", "text": "I, II, III, and IV" }
    ],
    "correctAnswers": ["C"],
    "explanation": "I is true because E_n = (n + ½)ℏω (constant spacing ℏω). II is false because the potential is quadratic, V(x) = ½ mω²x². III is false because ground state kinetic energy is ⟨T⟩ = ¼ ℏω > 0. IV is true because the Gaussian tail extends beyond the classical turning points (quantum tunneling)."
  },
  {
    "id": 66,
    "prompt": "A muon can be considered to be a heavy electron with a mass m_μ = 207 m_e. Imagine replacing the electron in a hydrogen atom with a muon. What are the energy levels E_n for this new form of hydrogen in terms of the binding energy of ordinary hydrogen E_0, the mass of the proton m_p, and the principal quantum number n?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "E_n = (-E₀ / n²) (m_μ / m_e)" },
      { "id": "B", "text": "E_n = (-E₀ / n²) (m_e / m_μ)" },
      { "id": "C", "text": "E_n = (-E₀ / n²) [(m_p + m_e) / (m_p + m_μ)]" },
      { "id": "D", "text": "E_n = (-E₀ / n²) [m_μ (m_p + m_e) / (m_e (m_p + m_μ))]" },
      { "id": "E", "text": "E_n = (-E₀ / n²) [m_e (m_p + m_μ) / (m_μ (m_p + m_e))]" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The Rydberg energy of a two-body atom scales linearly with reduced mass: μ = (m₁ m₂) / (m₁ + m₂). For electronic hydrogen, μ_e = (m_e m_p)/(m_e + m_p); for muonic hydrogen, μ_μ = (m_μ m_p)/(m_μ + m_p). The ratio μ_μ / μ_e is [m_μ (m_p + m_e)] / [m_e (m_p + m_μ)], so E_n = (-E₀ / n²) [m_μ (m_p + m_e) / (m_e (m_p + m_μ))]."
  },
  {
    "id": 67,
    "prompt": "A large, parallel-plate capacitor consists of two square plates that measure 0.5 m on each side. A charging current of 9 A is applied to the capacitor. Which of the following gives the approximate rate of change of the electric field between the plates?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2 V/(m·s)" },
      { "id": "B", "text": "40 V/(m·s)" },
      { "id": "C", "text": "1 × 10¹² V/(m·s)" },
      { "id": "D", "text": "4 × 10¹² V/(m·s)" },
      { "id": "E", "text": "2 × 10¹³ V/(m·s)" }
    ],
    "correctAnswers": ["D"],
    "explanation": "From Maxwell's displacement current law, I_d = ε₀ A (dE/dt) = I. With plate area A = (0.5 m)² = 0.25 m²: dE/dt = I / (ε₀ A) = 9 / (8.85 × 10⁻¹² × 0.25) ≈ 4.07 × 10¹² V/(m·s) ≈ 4 × 10¹² V/(m·s)."
  },
  {
    "id": 68,
    "prompt": "The circuit shown in the figure above consists of eight resistors, each with resistance R, and a battery with terminal voltage V and negligible internal resistance. What is the current flowing through the battery?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q68.svg",
    "options": [
      { "id": "A", "text": "1/3 V/R" },
      { "id": "B", "text": "1/2 V/R" },
      { "id": "C", "text": "V/R" },
      { "id": "D", "text": "3/2 V/R" },
      { "id": "E", "text": "3 V/R" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Symmetry dictates that the middle nodes of all three vertical branches sit at the same potential (V/2). Consequently, no current passes through the horizontal resistors. The circuit reduces to 3 parallel branches of 2R in series. Equivalent resistance is R_eq = 2R / 3, yielding total current I = V / R_eq = 3V / (2R)."
  },
  {
    "id": 69,
    "prompt": "In the AC circuit above, V_i is the amplitude of the input voltage and V_o is the amplitude of the output voltage. If the angular frequency ω of the input voltage is varied, which of the following gives the ratio V_o / V_i = G as a function of ω?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q69.svg",
    "options": [
      { "id": "A", "text": "Constant gain G = 1" },
      { "id": "B", "text": "Linear increase with frequency" },
      { "id": "C", "text": "High-pass response starting at 0 and saturating at 1" },
      { "id": "D", "text": "Low-pass response starting at 1 at ω = 0 and rolling off toward 0" },
      { "id": "E", "text": "Band-pass resonant response" }
    ],
    "correctAnswers": ["D"],
    "explanation": "This circuit is an RC low-pass filter. Gain is G(ω) = 1 / √(1 + (ωRC)²). At low frequencies (ω → 0), G → 1; at high frequencies (ω → ∞), G falls off as 1/ω toward 0 (Graph D)."
  },
  {
    "id": 70,
    "prompt": "A wire loop that encloses an area of 10 cm² has a resistance of 5 Ω. The loop is placed in a magnetic field of 0.5 T with its plane perpendicular to the field. The loop is suddenly removed from the field. How much charge flows past a given point in the wire?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "10⁻⁴ C" },
      { "id": "B", "text": "10⁻³ C" },
      { "id": "C", "text": "10⁻² C" },
      { "id": "D", "text": "10⁻¹ C" },
      { "id": "E", "text": "1 C" }
    ],
    "correctAnswers": ["A"],
    "explanation": "By Faraday's law, induced charge flow is Q = ΔΦ_B / R. Initial flux is Φ_B = B A = (0.5 T)(10 × 10⁻⁴ m²) = 5 × 10⁻⁴ Wb. Thus Q = (5 × 10⁻⁴ Wb) / (5 Ω) = 10⁻⁴ C."
  },
  {
    "id": 71,
    "prompt": "Two nonrelativistic electrons move in circles under the influence of a uniform magnetic field B, as shown in the figure above. The ratio r₁/r₂ of the orbital radii is equal to 1/3. Which of the following is equal to the ratio v₁/v₂ of the speeds?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q71.svg",
    "options": [
      { "id": "A", "text": "1/9" },
      { "id": "B", "text": "1/3" },
      { "id": "C", "text": "1" },
      { "id": "D", "text": "3" },
      { "id": "E", "text": "9" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Cyclotron radius is r = (m v) / (q B) ∝ v. Therefore, the ratio of orbital speeds equals the ratio of radii: v₁ / v₂ = r₁ / r₂ = 1/3."
  },
  {
    "id": 72,
    "prompt": "Which of the following statements about bosons and/or fermions is true?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Bosons have symmetric wave functions and obey the Pauli exclusion principle." },
      { "id": "B", "text": "Bosons have antisymmetric wave functions and do not obey the Pauli exclusion principle." },
      { "id": "C", "text": "Fermions have symmetric wave functions and obey the Pauli exclusion principle." },
      { "id": "D", "text": "Fermions have antisymmetric wave functions and obey the Pauli exclusion principle." },
      { "id": "E", "text": "Bosons and fermions obey the Pauli exclusion principle." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Under the exchange of identical particles, fermion wavefunctions are antisymmetric and fermions obey the Pauli exclusion principle. Bosons have symmetric wavefunctions and do not obey Pauli exclusion."
  },
  {
    "id": 73,
    "prompt": "The discovery of the J/ψ particle was especially significant because it provided evidence for which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Parity violation in weak interactions" },
      { "id": "B", "text": "Massive neutrinos" },
      { "id": "C", "text": "Higgs bosons" },
      { "id": "D", "text": "Charmed quarks" },
      { "id": "E", "text": "Strange quarks" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The J/ψ meson is a charmonium bound state (c c̄). Its discovery in 1974 confirmed the Glashow-Iliopoulos-Maiani (GIM) prediction and established the existence of the charm quark."
  },
  {
    "id": 74,
    "prompt": "The figure above shows an object O placed at a distance R to the left of a convex spherical mirror that has a radius of curvature R. Point C is the center of curvature of the mirror. The image formed by the mirror is at",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q74.svg",
    "options": [
      { "id": "A", "text": "infinity" },
      { "id": "B", "text": "a distance R to the left of the mirror and inverted" },
      { "id": "C", "text": "a distance R to the right of the mirror and upright" },
      { "id": "D", "text": "a distance R/3 to the left of the mirror and inverted" },
      { "id": "E", "text": "a distance R/3 to the right of the mirror and upright" }
    ],
    "correctAnswers": ["E"],
    "explanation": "For a convex mirror, f = -R/2. Given d_o = +R: 1/d_o + 1/d_i = 1/f ⇒ 1/R + 1/d_i = -2/R ⇒ 1/d_i = -3/R ⇒ d_i = -R/3 (virtual, R/3 behind mirror). Magnification is m = -d_i / d_o = +1/3 > 0 (upright)."
  },
  {
    "id": 75,
    "prompt": "A uniform thin film of soapy water with index of refraction n = 1.33 is viewed in air via reflected light. The film appears dark for long wavelengths and first appears bright for λ = 540 nm. What is the next shorter wavelength at which the film will appear bright on reflection?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "135 nm" },
      { "id": "B", "text": "180 nm" },
      { "id": "C", "text": "270 nm" },
      { "id": "D", "text": "320 nm" },
      { "id": "E", "text": "405 nm" }
    ],
    "correctAnswers": ["B"],
    "explanation": "With one phase inversion upon reflection (air to film), constructive interference occurs when 2nt = (m - ½)λ. For the longest bright wavelength (m = 1): 2nt = ½ (540 nm) = 270 nm. For the next shorter wavelength (m = 2): 2nt = 3/2 λ₂ ⇒ 270 nm = 1.5 λ₂ ⇒ λ₂ = 180 nm."
  }
];
