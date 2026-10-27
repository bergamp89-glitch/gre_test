export const part5 = [
  {
    "id": 101,
    "prompt": "A net force F_A acts on object A, and a net force F_B acts on object B. The mass of object B is twice the mass of object A, and the acceleration of object B is twice that of object A. Which of the following is true of forces F_A and F_B ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "F_B = 1/4 F_A" },
      { "id": "B", "text": "F_B = 1/2 F_A" },
      { "id": "C", "text": "F_B = F_A" },
      { "id": "D", "text": "F_B = 2 F_A" },
      { "id": "E", "text": "F_B = 4 F_A" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Newton's second law states F = ma. For object B, m_B = 2 m_A and a_B = 2 a_A. Therefore, F_B = m_B a_B = (2 m_A)(2 a_A) = 4 m_A a_A = 4 F_A."
  },
  {
    "id": 102,
    "prompt": "Two objects sliding on a frictionless surface, as represented above, collide and stick together. How much kinetic energy is converted to heat during the collision?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q102.svg",
    "options": [
      { "id": "A", "text": "1/9 J" },
      { "id": "B", "text": "1/6 J" },
      { "id": "C", "text": "1/2 J" },
      { "id": "D", "text": "3/4 J" },
      { "id": "E", "text": "5/6 J" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Initial kinetic energy: K_i = ½(0.5 kg)(2 m/s)² + ½(1.0 kg)(1 m/s)² = 1.0 J + 0.5 J = 1.5 J = 3/2 J. By momentum conservation in two dimensions, the momentum components are p_x = (0.5)(2) = 1 kg·m/s and p_y = (1.0)(1) = 1 kg·m/s, so p² = 1² + 1² = 2 (kg·m/s)². The total stuck mass is M = 0.5 + 1.0 = 1.5 kg. The final kinetic energy is K_f = p² / (2M) = 2 / (2 × 1.5) = 2/3 J. The kinetic energy converted to heat is ΔE = K_i - K_f = 3/2 - 2/3 = 5/6 J."
  },
  {
    "id": 103,
    "prompt": "Two simple pendulums A and B consist of identical masses suspended from strings of length L_A and L_B, respectively. The two pendulums oscillate in equal gravitational fields. If the period of pendulum B is twice the period of pendulum A, which of the following is true of the lengths of the two pendulums?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "L_B = 1/4 L_A" },
      { "id": "B", "text": "L_B = 1/2 L_A" },
      { "id": "C", "text": "L_B = L_A" },
      { "id": "D", "text": "L_B = 2 L_A" },
      { "id": "E", "text": "L_B = 4 L_A" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The period of a simple pendulum is given by T = 2π √(L/g). Hence, T_B / T_A = √(L_B / L_A). Given T_B = 2 T_A, we find √(L_B / L_A) = 2, which gives L_B / L_A = 4, so L_B = 4 L_A."
  },
  {
    "id": 104,
    "prompt": "For the circuit shown in the figure above, what is the current i through the 2 Ω resistor?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q104.svg",
    "options": [
      { "id": "A", "text": "2 A" },
      { "id": "B", "text": "4 A" },
      { "id": "C", "text": "5 A" },
      { "id": "D", "text": "10 A" },
      { "id": "E", "text": "20 A" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The parallel combination of the 1 Ω and 2 Ω resistors has equivalent resistance R_p = (1 × 2) / (1 + 2) = 2/3 Ω. The total equivalent circuit resistance is R_total = 1 + 2/3 = 5/3 Ω. The total current from the 20 V supply is I = V / R_total = 20 / (5/3) = 12 A. The voltage drop across the parallel section is V_p = I × R_p = 12 × (2/3) = 8 V. The current through the 2 Ω branch is i = V_p / 2 = 8 / 2 = 4 A."
  },
  {
    "id": 105,
    "prompt": "By definition, the electric displacement current through a surface S is proportional to the",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "magnetic flux through S" },
      { "id": "B", "text": "rate of change of the magnetic flux through S" },
      { "id": "C", "text": "time integral of the magnetic flux through S" },
      { "id": "D", "text": "electric flux through S" },
      { "id": "E", "text": "rate of change of the electric flux through S" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Maxwell's displacement current is defined as I_d = ε_0 (dΦ_E / dt). It is directly proportional to the time rate of change of the electric flux through surface S."
  },
  {
    "id": 106,
    "prompt": "The electric field of a plane electromagnetic wave of wave number k and angular frequency ω is given by E = E_0(e_x + e_y) sin(kz - ωt). Which of the following gives the direction of the associated magnetic field B?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "e_z" },
      { "id": "B", "text": "-e_x + e_y" },
      { "id": "C", "text": "-e_x - e_y" },
      { "id": "D", "text": "e_x - e_z" },
      { "id": "E", "text": "e_y - e_z" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In a transverse EM wave, the magnetic field direction is given by B̂ = k̂ × Ê. With propagation vector along +z (k̂ = e_z) and Ê along (e_x + e_y): e_z × (e_x + e_y) = (e_z × e_x) + (e_z × e_y) = e_y + (-e_x) = -e_x + e_y."
  },
  {
    "id": 107,
    "prompt": "Which of the following is true about any system that undergoes a reversible thermodynamic process?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "There are no changes in the internal energy of the system." },
      { "id": "B", "text": "The temperature of the system remains constant during the process." },
      { "id": "C", "text": "The entropy of the system and its environment remains unchanged." },
      { "id": "D", "text": "The entropy of the system and its environment must increase." },
      { "id": "E", "text": "The net work done by the system is zero." }
    ],
    "correctAnswers": ["C"],
    "explanation": "A reversible process is one that can be reversed without leaving any change in either system or surroundings. According to the Second Law of Thermodynamics, the total entropy change of the universe (system plus environment) is zero for a reversible process: ΔS_universe = ΔS_system + ΔS_environment = 0."
  },
  {
    "id": 108,
    "prompt": "For which of the following thermodynamic processes is the increase in the internal energy of an ideal gas equal to the heat added to the gas?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Constant temperature" },
      { "id": "B", "text": "Constant volume" },
      { "id": "C", "text": "Constant pressure" },
      { "id": "D", "text": "Adiabatic" },
      { "id": "E", "text": "Cyclic" }
    ],
    "correctAnswers": ["B"],
    "explanation": "According to the first law of thermodynamics, ΔU = Q - W. When volume is held constant (isochoric process), dV = 0 and mechanical work W = ∫ P dV = 0, so ΔU = Q."
  },
  {
    "id": 109,
    "prompt": "The root-mean-square speed of molecules in an ideal gas of molar mass M at temperature T is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "√(RT / M)" },
      { "id": "C", "text": "RT / M" },
      { "id": "D", "text": "√(3RT / M)" },
      { "id": "E", "text": "3RT / M" }
    ],
    "correctAnswers": ["D"],
    "explanation": "From kinetic theory, the average translational kinetic energy per mole is ½ M v_rms² = (3/2) RT. Solving for root-mean-square speed gives v_rms = √(3RT / M)."
  },
  {
    "id": 110,
    "prompt": "Light of variable frequency ν shines on the metal surface of a photoelectric tube. Einstein’s theory of the photoelectric effect predicts that the",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "work function of the metal is proportional to the frequency" },
      { "id": "B", "text": "work function of the metal is proportional to the wavelength" },
      { "id": "C", "text": "current in the tube is a linear function of the wavelength" },
      { "id": "D", "text": "potential difference necessary to stop the emitted electrons is a linear function of the frequency above the threshold frequency" },
      { "id": "E", "text": "potential difference necessary to stop the emitted electrons is equal to the work function" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Einstein's photoelectric equation states eV_s = hν - Φ, where V_s is stopping potential and Φ is the metal's work function. Thus, V_s = (h/e)ν - Φ/e, showing that V_s depends linearly on frequency ν for ν > ν_threshold."
  },
  {
    "id": 111,
    "prompt": "Characteristic X rays, appearing as sharp lines on a continuous background, are produced when high-energy electrons bombard a metal target. Which of the following processes results in the characteristic X rays?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Electrons producing Čerenkov radiation" },
      { "id": "B", "text": "Electrons colliding with phonons in the metal" },
      { "id": "C", "text": "Electrons filling inner shell vacancies that are created in the metal atoms" },
      { "id": "D", "text": "Electrons combining with protons to form neutrons" },
      { "id": "E", "text": "Electrons undergoing Coulomb scattering with nuclei" }
    ],
    "correctAnswers": ["C"],
    "explanation": "High-energy incident electrons eject atomic electrons from inner shells (such as the K-shell). When higher-energy outer-shell electrons transition downward to fill these inner vacancies, photons with discrete, element-characteristic energies (X-rays) are emitted."
  },
  {
    "id": 112,
    "prompt": "A single-electron atom has the electron in the l = 2 state. The number of allowed values of the quantum number m_l is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "3" },
      { "id": "D", "text": "4" },
      { "id": "E", "text": "5" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The magnetic orbital quantum number m_l can take integer values from -l to +l. For l = 2 (a d-orbital), m_l can be -2, -1, 0, 1, or 2, which is 2l + 1 = 5 distinct allowed values."
  },
  {
    "id": 113,
    "prompt": "A particle of mass m is confined inside a one-dimensional box (infinite square well) of length a. The particle’s ground state energy is which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "ℏ / (8ma)" },
      { "id": "B", "text": "ℏ² / (8ma²)" },
      { "id": "C", "text": "ℏ² / (ma²)" },
      { "id": "D", "text": "ℏ²π² / (2ma²)" },
      { "id": "E", "text": "ℏ²a² / (2mc²)" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The quantized energy levels of an infinite square well of width a are E_n = n²π²ℏ² / (2ma²). For the ground state n = 1, E_1 = π²ℏ² / (2ma²)."
  },
  {
    "id": 114,
    "prompt": "The Planck length is the only combination of the factors G (Newton’s gravitational constant), ℏ (Planck’s constant / 2π), and c (the speed of light) that has units of length. Which of the following gives the Planck length?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "(ℏG / c³)^(1/2)" },
      { "id": "B", "text": "ℏG / c³" },
      { "id": "C", "text": "G² / (ℏc)" },
      { "id": "D", "text": "ℏcG" },
      { "id": "E", "text": "ℏG / c" }
    ],
    "correctAnswers": ["A"],
    "explanation": "By dimensional analysis, [ℏ] = M L² T⁻¹, [G] = M⁻¹ L³ T⁻², and [c] = L T⁻¹. Then [ℏG] = L⁵ T⁻³, and dividing by c³ yields [ℏG / c³] = L². Taking the square root gives dimensions of length: l_p = √(ℏG / c³)."
  },
  {
    "id": 115,
    "prompt": "The speed of light inside of a nonmagnetic dielectric material with a dielectric constant of 4.0 is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1.2 × 10⁹ m/s" },
      { "id": "B", "text": "3.0 × 10⁸ m/s" },
      { "id": "C", "text": "1.5 × 10⁸ m/s" },
      { "id": "D", "text": "1.0 × 10⁸ m/s" },
      { "id": "E", "text": "7.5 × 10⁷ m/s" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In nonmagnetic media (μ_r ≈ 1), the refractive index is n = √(ε_r) = √4.0 = 2.0. The velocity of light is v = c / n = (3.0 × 10⁸ m/s) / 2.0 = 1.5 × 10⁸ m/s."
  },
  {
    "id": 116,
    "prompt": "Fermat’s principle of ray optics states, “A ray of light follows the path between two points which requires the least time.” This principle can be used to derive which of the following?\nI. Snell’s law of refraction\nII. The law of reflection\nIII. Rayleigh’s criterion for resolution",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "II only" },
      { "id": "C", "text": "III only" },
      { "id": "D", "text": "I and II" },
      { "id": "E", "text": "II and III" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Fermat's principle of stationary time is used in geometric optics to derive both the law of reflection and Snell's law of refraction (statements I and II). Statement III (Rayleigh's criterion) is a wave optics diffraction effect stemming from wave interference at an aperture, not Fermat's ray principle."
  },
  {
    "id": 117,
    "prompt": "Consider two identical systems, 1 and 2, each consisting of a planet in circular orbit about a much heavier star. For system 1 the radius of the orbit is a, and for system 2 the radius of the orbit is 4a. Which of the following gives the ratio, T_1 / T_2, of the period of system 1 to the period of system 2?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "T_1 / T_2 = 1" },
      { "id": "B", "text": "T_1 / T_2 = 1/2" },
      { "id": "C", "text": "T_1 / T_2 = 1/4" },
      { "id": "D", "text": "T_1 / T_2 = 1/8" },
      { "id": "E", "text": "T_1 / T_2 = 1/16" }
    ],
    "correctAnswers": ["D"],
    "explanation": "From Kepler's third law, T² ∝ r³ ⇒ T ∝ r^(3/2). Thus, T_1 / T_2 = (r_1 / r_2)^(3/2) = (a / 4a)^(3/2) = (1/4)^(3/2) = (1/2)³ = 1/8."
  },
  {
    "id": 118,
    "prompt": "Two identical satellites, A and B, are in circular orbits around Earth. The orbital radius of A is twice that of B. Which of the following gives the ratio of the angular momentum of A to the angular momentum of B?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "4" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "√2" },
      { "id": "D", "text": "1 / √2" },
      { "id": "E", "text": "1/2" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The circular orbital velocity is v = √(GM/r). The angular momentum is L = m v r = m √(GM/r) r = m √(GM r). Thus, L is proportional to √r. Since r_A / r_B = 2, L_A / L_B = √(r_A / r_B) = √2."
  },
  {
    "id": 119,
    "prompt": "A 10 kg box slides horizontally without friction at a speed of 1 m/s. At one point, a constant force is applied to the box in the direction of its motion. The box travels 5 m with the constant force applied. The force is then removed, leaving the box with a speed of 2 m/s. Which of the following gives the magnitude of the applied force?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1 N" },
      { "id": "B", "text": "2 N" },
      { "id": "C", "text": "3 N" },
      { "id": "D", "text": "4 N" },
      { "id": "E", "text": "5 N" }
    ],
    "correctAnswers": ["C"],
    "explanation": "By the work-energy theorem: W = F d = ΔK = ½ m (v_f² - v_i²). Inserting the numbers: F (5 m) = ½ (10 kg)(2² - 1²) = 5 × 3 = 15 J. Hence F = 15 / 5 = 3 N."
  },
  {
    "id": 120,
    "prompt": "What is the magnitude of the magnetic field at the center of a circular conducting loop of radius a that is carrying current I?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "4π μ_0 I a²" },
      { "id": "B", "text": "μ_0 I a" },
      { "id": "C", "text": "0" },
      { "id": "D", "text": "μ_0 I / (2a)" },
      { "id": "E", "text": "μ_0 I / (4π a²)" }
    ],
    "correctAnswers": ["D"],
    "explanation": "From the Biot-Savart law for a circular loop of radius a, B = (μ_0 I / 4π a²) ∫ dl = (μ_0 I / 4π a²)(2πa) = μ_0 I / (2a)."
  },
  {
    "id": 121,
    "prompt": "Let ω_p, ω_d, and ω_α be the cyclotron frequencies of protons, deuterons, and alpha particles, respectively, in the same magnetic field. The frequencies are related by which of the following? (Assume that the particle masses are in the ratio 1 : 2 : 4.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "ω_p = ω_d = ω_α" },
      { "id": "B", "text": "ω_p = ω_d > ω_α" },
      { "id": "C", "text": "ω_p = ω_d < ω_α" },
      { "id": "D", "text": "ω_p < ω_d = ω_α" },
      { "id": "E", "text": "ω_p > ω_d = ω_α" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Cyclotron frequency is given by ω = q B / m. For proton: q/m = 1/1 = 1. For deuteron: q/m = 1/2 = 0.5. For alpha particle: q/m = 2/4 = 0.5. Thus, ω_p > ω_d = ω_α."
  },
  {
    "id": 122,
    "prompt": "The emission spectrum of the doubly ionized lithium atom Li++ (Z = 3, A = 7) is identical to that of a hydrogen atom in which all the wavelengths are",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "decreased by a factor of 9" },
      { "id": "B", "text": "decreased by a factor of 49" },
      { "id": "C", "text": "decreased by a factor of 81" },
      { "id": "D", "text": "increased by a factor of 9" },
      { "id": "E", "text": "increased by a factor of 81" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The Rydberg transition energies scale with atomic number as ΔE ∝ Z². Since λ = hc / ΔE, the wavelengths scale as λ = λ_H / Z². For Li++, Z = 3, so Z² = 9. Hence all wavelengths are decreased by a factor of 9."
  },
  {
    "id": 123,
    "prompt": "In an atom of hydrogen, the electron is bound to a proton. In an atom of positronium, the electron is bound to a positron instead of a proton. Which of the following gives the approximate Rydberg constant for positronium? (For a nucleus of infinite mass, R_∞ = m_e e⁴ / (8 ε_0² c h³).)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.0005 R_∞" },
      { "id": "B", "text": "0.5 R_∞" },
      { "id": "C", "text": "0.999 R_∞" },
      { "id": "D", "text": "2 R_∞" },
      { "id": "E", "text": "1880 R_∞" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The Rydberg constant is proportional to the reduced mass μ of the system: R = (μ / m_e) R_∞. For positronium, the two particles have identical mass m_e, so μ = (m_e · m_e) / (m_e + m_e) = 0.5 m_e. Therefore, R_positronium ≈ 0.5 R_∞."
  },
  {
    "id": 124,
    "prompt": "Which of the following gives the total spin quantum number of the electrons in the ground state of neutral nitrogen (Z = 7)?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/2" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "3/2" },
      { "id": "D", "text": "5/2" },
      { "id": "E", "text": "7/2" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Ground-state nitrogen has electron configuration 1s² 2s² 2p³. The 1s and 2s closed subshells have S = 0. By Hund's rule of maximum multiplicity, the three 2p electrons occupy separate 2p_x, 2p_y, 2p_z orbitals with parallel spins, giving S = 1/2 + 1/2 + 1/2 = 3/2."
  },
  {
    "id": 125,
    "prompt": "Consider a Hermitian operator Â with the property Â⁴ = 1. Which of the following is an allowed pair of eigenvalues of Â?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0, 1" },
      { "id": "B", "text": "1, -1" },
      { "id": "C", "text": "1, i" },
      { "id": "D", "text": "1, -i" },
      { "id": "E", "text": "1 + i, 1 - i" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Hermitian operators must possess purely real eigenvalues. If λ is an eigenvalue of Â, then λ⁴ = 1, which yields four complex roots: {1, -1, i, -i}. Restricting to real roots leaves only {1, -1}. Hence, (1, -1) is an allowed pair of eigenvalues."
  }
];
