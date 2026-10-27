export const part7 = [
  {
    "id": 151,
    "prompt": "A grating spectrometer can just barely resolve two wavelengths of 500 nm and 502 nm, respectively. Which of the following gives the resolving power of the spectrometer?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "250" },
      { "id": "C", "text": "5,000" },
      { "id": "D", "text": "10,000" },
      { "id": "E", "text": "250,000" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The chromatic resolving power of a spectrometer is defined as R = λ / Δλ. With average wavelength λ ≈ 500 nm and difference Δλ = 502 nm - 500 nm = 2 nm, R = 500 / 2 = 250."
  },
  {
    "id": 152,
    "prompt": "A gas cell with an optical path length of 10 cm is placed in one arm of a Michelson interferometer. If the light source for the interferometer is a laser with wavelength λ = 632.2 nm, then 100 fringes are counted as the gas cell is evacuated. What is the index of refraction of the original gas?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1.00063" },
      { "id": "B", "text": "1.00032" },
      { "id": "C", "text": "1.00016" },
      { "id": "D", "text": "0.99968" },
      { "id": "E", "text": "-1.00016" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Because light traverses the cell twice in a Michelson interferometer, the change in optical path length upon evacuating the gas is ΔOPD = 2(n - 1)L. Setting this equal to N λ yields: 2(n - 1)L = N λ ⇒ (n - 1) = N λ / (2L) = (100 × 632.2 × 10⁻⁹ m) / (2 × 0.10 m) = 6.322 × 10⁻⁵ / 0.20 ≈ 3.16 × 10⁻⁴ = 0.00032. Thus, n = 1 + 0.00032 = 1.00032."
  },
  {
    "id": 153,
    "prompt": "A microwave line has a laboratory wavelength of 1 µm. If the Hubble constant H ≈ 75 (km/s)/Mpc, the observed wavelength for the line from a galaxy 100 Mpc distant is about",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "250 nm shorter" },
      { "id": "B", "text": "25 nm shorter" },
      { "id": "C", "text": "the same" },
      { "id": "D", "text": "25 nm longer" },
      { "id": "E", "text": "250 nm longer" }
    ],
    "correctAnswers": ["D"],
    "explanation": "By Hubble's law, the recession velocity is v = H d = 75 (km/s)/Mpc × 100 Mpc = 7,500 km/s = 7.5 × 10⁶ m/s. The cosmological redshift is z = v / c = 7.5 × 10⁶ / (3.0 × 10⁸) = 0.025. The wavelength shift is Δλ = z λ_0 = 0.025 × 1 µm = 0.025 µm = 25 nm. Because the galaxy is receding, the wavelength is redshifted (longer by 25 nm)."
  },
  {
    "id": 154,
    "prompt": "The AC circuit shown above contains an ideal rectifying diode. If the function generator supplies ℰ(t) = V_0 sin(ωt), which of the following describes the voltage across the resistor?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q154.svg",
    "options": [
      { "id": "A", "text": "Continuous sinusoid identical to ℰ(t)" },
      { "id": "B", "text": "Series of positive half-sine wave pulses with zero voltage during negative half-cycles" },
      { "id": "C", "text": "Symmetric square wave with alternating polarity" },
      { "id": "D", "text": "Constant positive DC voltage" },
      { "id": "E", "text": "Full-wave rectified wave with both positive and negative lobes flipped positive" }
    ],
    "correctAnswers": ["B"],
    "explanation": "An ideal diode conducts only when forward-biased (positive polarity). During the positive half-cycle of ℰ(t), the diode acts as a short circuit and the entire sinusoidal voltage appears across the resistor. During the negative half-cycle, the diode is reverse-biased (open circuit), allowing zero current and zero resistor voltage. This corresponds to the standard half-wave rectified waveform shown in option (B)."
  },
  {
    "id": 155,
    "prompt": "The Fourier series expansion of a function f(x) that is periodic with period 2π is f(x) = a_0/2 + ∑ [a_n cos(nx) + b_n sin(nx)]. If f(x) is given by the graph above, which of the following statements about the coefficients is true?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q155.svg",
    "options": [
      { "id": "A", "text": "a_n = 0 for all n" },
      { "id": "B", "text": "b_n = 0 for all n" },
      { "id": "C", "text": "a_n = 0 for even n only" },
      { "id": "D", "text": "b_n = 0 for even n only" },
      { "id": "E", "text": "a_n = b_n for all n" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The plotted triangular wave is symmetric about the vertical y-axis: f(-x) = f(x), making it an even function. In Fourier analysis, an even function contains only cosine terms and no sine terms: b_n = (1/π) ∫_{-π}^{π} f(x) sin(nx) dx = 0 for all n."
  },
  {
    "id": 156,
    "prompt": "A sample of N molecules has the distribution of speeds shown in the figure above. P(v) dv is an estimate of the number of molecules with speeds between v and v + dv, and this number is nonzero only up to 3v_0, where v_0 is constant. Which of the following gives the value of a ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q156.svg",
    "options": [
      { "id": "A", "text": "a = N / (3v_0)" },
      { "id": "B", "text": "a = N / (2v_0)" },
      { "id": "C", "text": "a = N / v_0" },
      { "id": "D", "text": "a = 3N / (2v_0)" },
      { "id": "E", "text": "a = N" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The total number of molecules is the area under the P(v) curve: N = ∫ P(v) dv. The shape is a trapezoid with bottom base b_1 = 3v_0, top base b_2 = 2v_0 - v_0 = v_0, and height a. Area = ½ (b_1 + b_2) a = ½ (3v_0 + v_0) a = 2 a v_0. Equating 2 a v_0 = N gives a = N / (2v_0)."
  },
  {
    "id": 157,
    "prompt": "Which of the following statements is (are) true for a Maxwell-Boltzmann description of an ideal gas of atoms in equilibrium at temperature T ?\nI. The average velocity of the atoms is zero.\nII. The distribution of the speeds of the atoms has a maximum at v = 0.\nIII. The probability of finding an atom with zero kinetic energy is zero.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "II only" },
      { "id": "C", "text": "I and II" },
      { "id": "D", "text": "I and III" },
      { "id": "E", "text": "II and III" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Statement I is true because velocities are isotropically distributed in three dimensions, making ⟨v⃗⟩ = 0. Statement II is false because the speed distribution f(v) ∝ v² exp(-mv²/2kT) vanishes at v = 0 and peaks at the most probable speed v_p = √(2kT/m) > 0. Statement III is true because the probability density for kinetic energy P(E) ∝ √E exp(-E/kT) vanishes at E = 0, so the probability of finding an atom with exactly zero kinetic energy is zero. Hence, I and III only."
  },
  {
    "id": 158,
    "prompt": "A monatomic ideal gas changes from an initial state (P_i, V_i, T_i, n_i) to a final state (P_f, V_f, T_f, n_f), where P_i < P_f, V_i = V_f, T_i < T_f and n_i = n_f. Which of the following gives the change in entropy of the gas?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "(3/2) nR ln(T_f / T_i)" },
      { "id": "B", "text": "(3/2) nR ln(T_i / T_f)" },
      { "id": "C", "text": "(5/2) nR ln(T_f / T_i)" },
      { "id": "D", "text": "(5/2) nR ln(T_i / T_f)" },
      { "id": "E", "text": "0" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Because the volume is constant (V_i = V_f), the entropy change is ΔS = ∫ n C_v dT / T. For a monatomic ideal gas, the molar heat capacity at constant volume is C_v = (3/2) R. Therefore, ΔS = (3/2) nR ln(T_f / T_i)."
  },
  {
    "id": 159,
    "prompt": "Low-energy electrons are accelerated between electrodes in a tube filled with a gas in the Franck-Hertz apparatus represented above. A plot of current collected versus accelerating voltage is also shown. The data provide evidence for which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q159.svg",
    "options": [
      { "id": "A", "text": "Electronic energy losses due only to elastic collisions" },
      { "id": "B", "text": "Excitation energies of the gas atoms of 4.9, 9.8, and 14.7 eV" },
      { "id": "C", "text": "Excitation energy of the gas atoms of 4.9 eV only" },
      { "id": "D", "text": "Atomic energy levels of -4.9, -9.8, and -14.7 eV" },
      { "id": "E", "text": "Atomic energy levels of -4.9 and -9.8 eV only" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In the Franck-Hertz experiment, current dips repeat at regular voltage increments of 4.9 V (at 4.9 V, 9.8 V, 14.7 V...). These multiple peaks represent electrons undergoing successive, multiple inelastic collisions, in each of which exactly 4.9 eV of kinetic energy is transferred to excite a target atom to its first excited state. Thus, the data provide direct evidence for a single quantized excitation energy of 4.9 eV only."
  },
  {
    "id": 160,
    "prompt": "A photon of wavelength λ is scattered from an electron through an angle θ. Which of the following correctly gives the wavelength λ' of the scattered photon?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "λ' = λ + (h / mc)(1 - cosθ)" },
      { "id": "B", "text": "λ' = λ + (h / mc)(1 + cosθ)" },
      { "id": "C", "text": "λ' = λ - (h / mc)(1 - cosθ)" },
      { "id": "D", "text": "λ' = λ - (h / mc)(1 + cosθ)" },
      { "id": "E", "text": "λ' = (h / mc)(1 - cosθ)" }
    ],
    "correctAnswers": ["A"],
    "explanation": "According to the Compton scattering equation, the shift in wavelength is Δλ = λ' - λ = (h / mc)(1 - cosθ). Solving for the scattered wavelength yields λ' = λ + (h / mc)(1 - cosθ)."
  },
  {
    "id": 161,
    "prompt": "Excited states of the helium atom can be characterized as para- (antiparallel electron spins) and ortho- (parallel electron spins). The observation that an ortho- state has lower energy than the corresponding para- state can be understood in terms of which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "The Heisenberg uncertainty principle" },
      { "id": "B", "text": "The Pauli exclusion principle" },
      { "id": "C", "text": "The Bohr model of the atom" },
      { "id": "D", "text": "Nuclear hyperfine coupling" },
      { "id": "E", "text": "Maxwell-Boltzmann statistics" }
    ],
    "correctAnswers": ["B"],
    "explanation": "By the Pauli exclusion principle, the total electronic wave function must be antisymmetric under electron permutation. Orthohelium has a symmetric spin triplet state, which mandates a spatially antisymmetric wave function ψ(r_1, r_2) = -ψ(r_2, r_1). This spatial antisymmetry forces ψ to vanish when r_1 = r_2, effectively keeping the two electrons further apart on average, reducing their mutual Coulomb repulsion energy and resulting in a lower energy state."
  },
  {
    "id": 162,
    "prompt": "A particle of mass m and spin zero is in a three-dimensional isotropic well described by V(r) = ½ m ω² r², where r² = x² + y² + z². How many states have energy (7/2) ℏω ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "6" },
      { "id": "E", "text": "8" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The energy of a 3D isotropic harmonic oscillator is E = (n_x + n_y + n_z + 3/2) ℏω. For E = (7/2) ℏω, the total quantum number is N = n_x + n_y + n_z = 2. The degeneracy for a given N is ½ (N + 1)(N + 2). For N = 2: ½ (3)(4) = 6 states. These 6 combinations are (2,0,0), (0,2,0), (0,0,2), (1,1,0), (1,0,1), and (0,1,1)."
  },
  {
    "id": 163,
    "prompt": "The operators for the total angular momentum and its three projections are Ĵ and Ĵ_x, Ĵ_y, Ĵ_z, respectively. The commutator between two operators Â and B̂ is [Â, B̂] ≡ ÂB̂ - B̂Â. Which of the following is true?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "[Ĵ², Ĵ_z] = 0" },
      { "id": "B", "text": "[Ĵ², Ĵ_z] = iℏ Ĵ_y" },
      { "id": "C", "text": "[Ĵ_x, Ĵ_y] = 0" },
      { "id": "D", "text": "[Ĵ_x, Ĵ_z] = iℏ Ĵ_z" },
      { "id": "E", "text": "[Ĵ_x + iĴ_y, Ĵ_z] = 0" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The operator for total angular momentum squared Ĵ² commutes with all of its component operators: [Ĵ², Ĵ_x] = [Ĵ², Ĵ_y] = [Ĵ², Ĵ_z] = 0. Therefore, [Ĵ², Ĵ_z] = 0 is fundamentally true."
  },
  {
    "id": 164,
    "prompt": "The suspension cable of a 1,000 kg elevator snaps, sending the elevator moving downward through its shaft. The emergency brakes of the elevator stop the elevator shortly before it reaches the bottom of the shaft. If the elevator fell a distance of 100 m starting from rest, the heat that the brakes must dissipate to bring the elevator safely to rest is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "100 J" },
      { "id": "B", "text": "1,000 J" },
      { "id": "C", "text": "10,000 J" },
      { "id": "D", "text": "100,000 J" },
      { "id": "E", "text": "1,000,000 J" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Because the elevator starts at rest and finishes at rest, ΔK = 0. The total potential energy lost during the 100 m fall is converted entirely into thermal energy dissipated by the friction of the emergency brakes: Q = m g h = (1,000 kg)(9.8 m/s²)(100 m) = 980,000 J ≈ 1,000,000 J."
  },
  {
    "id": 165,
    "prompt": "A uniform rod of length L and mass M is released from rest at θ = 0 and rotates about a horizontal axis through its base, as shown in the figure above. What is the angular acceleration of the rod as a function of θ ? (Ignore the effects of friction and air resistance.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q165.svg",
    "options": [
      { "id": "A", "text": "g / (2L)" },
      { "id": "B", "text": "(g / L) θ" },
      { "id": "C", "text": "(6g / L) cosθ" },
      { "id": "D", "text": "(3g / 2L) sinθ" },
      { "id": "E", "text": "(12g / L) sinθ" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The moment of inertia of a uniform rod about an axis at its end is I = ⅓ M L². Gravity acts at the center of mass (distance L/2 from pivot), producing torque τ = M g (L/2) sinθ. Using τ = I α gives M g (L/2) sinθ = (⅓ M L²) α ⇒ α = (3g / 2L) sinθ."
  },
  {
    "id": 166,
    "prompt": "Two identical, ideal springs, each with force constant k, are attached in series and hung vertically. When a block of mass m is attached to the two-spring system, the block moves down a distance x from the relaxed state, as shown in the figure above. Which of the following gives the angular frequency of the block when it oscillates vertically?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q166.svg",
    "options": [
      { "id": "A", "text": "√(2k / m)" },
      { "id": "B", "text": "√(k / m)" },
      { "id": "C", "text": "√(k / 2m)" },
      { "id": "D", "text": "2π √(k / x)" },
      { "id": "E", "text": "2π √(2k / x)" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Two identical springs of constant k connected in series have an effective spring constant k_eq given by 1/k_eq = 1/k + 1/k = 2/k ⇒ k_eq = k/2. The angular frequency of harmonic vertical oscillation is ω = √(k_eq / m) = √(k / 2m)."
  },
  {
    "id": 167,
    "prompt": "A block attached to a spring is moving along the x-axis on a frictionless horizontal surface. What is the Hamiltonian for the block?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "H = 0" },
      { "id": "B", "text": "H = -kx" },
      { "id": "C", "text": "H = ½ k x²" },
      { "id": "D", "text": "H = p² / 2m - ½ k x²" },
      { "id": "E", "text": "H = p² / 2m + ½ k x²" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The Hamiltonian H represents the total mechanical energy written in canonical coordinates (position x and conjugate momentum p): H = T + V = p² / (2m) + ½ k x²."
  },
  {
    "id": 168,
    "prompt": "A conducting sphere is solid except for three spherical cavities inside. Cavity A contains a point charge of +2q, cavity B contains a point charge of -4q, and cavity C is empty, as shown above. What charges are induced on the inner surfaces of the spherical cavities?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q168.svg",
    "options": [
      { "id": "A", "text": "Cavity A: -2q, Cavity B: +4q, Cavity C: 0" },
      { "id": "B", "text": "Cavity A: -2q, Cavity B: +4q, Cavity C: -2q" },
      { "id": "C", "text": "Cavity A: -2q, Cavity B: +4q, Cavity C: -6q" },
      { "id": "D", "text": "Cavity A: +2q, Cavity B: -4q, Cavity C: 0" },
      { "id": "E", "text": "Cavity A: +2q, Cavity B: +2q, Cavity C: +2q" }
    ],
    "correctAnswers": ["A"],
    "explanation": "In electrostatic equilibrium, the electric field inside the conducting body must vanish: E = 0. By Gauss's law, a closed Gaussian surface drawn entirely within the conducting material surrounding each cavity must enclose zero net charge. Therefore, the inner surface charge must exactly cancel the cavity's interior point charge: q_induced = -q_inside. Thus: Cavity A (+2q) induces -2q; Cavity B (-4q) induces +4q; Cavity C (empty) induces 0."
  },
  {
    "id": 169,
    "prompt": "A magnetic field is directed perpendicular to the plane of a circular coil of area 0.2 m² and 250 turns. If the magnetic field is increased from 0.01 T to 0.06 T during a time interval of 0.25 s, the average induced EMF in the coil is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.04 V" },
      { "id": "B", "text": "0.1 V" },
      { "id": "C", "text": "2.5 V" },
      { "id": "D", "text": "10 V" },
      { "id": "E", "text": "50 V" }
    ],
    "correctAnswers": ["D"],
    "explanation": "By Faraday's law of electromagnetic induction, EMF = N |ΔΦ / Δt| = N A |ΔB / Δt|. Substituting: EMF = 250 × 0.2 m² × [(0.06 T - 0.01 T) / 0.25 s] = 50 × (0.05 / 0.25) = 50 × 0.20 = 10 V."
  },
  {
    "id": 170,
    "prompt": "The figure above depicts a step potential with U(x) = 0 for x ≤ 0 (region 1), and U(x) = -U_0 for x > 0 (region 2). A beam of particles with E > 0 is incident from the left. The momentum of the particle in each region has the form ℏk. The reflection coefficient R for the interface at x = 0 is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q170.svg",
    "options": [
      { "id": "A", "text": "R = 0" },
      { "id": "B", "text": "R = 4 k_1 k_2 / (k_1 + k_2)²" },
      { "id": "C", "text": "R = (k_1 + k_2)² / (k_1 - k_2)²" },
      { "id": "D", "text": "R = (k_1 - k_2)² / (k_1 + k_2)²" },
      { "id": "E", "text": "R = -4 k_1 k_2 / (k_1 + k_2)²" }
    ],
    "correctAnswers": ["D"],
    "explanation": "At a potential boundary, matching boundary conditions for ψ and dψ/dx at x = 0 gives the reflected amplitude ratio r = (k_1 - k_2) / (k_1 + k_2). The reflection probability coefficient R is the square of the amplitude magnitude: R = |r|² = (k_1 - k_2)² / (k_1 + k_2)²."
  },
  {
    "id": 171,
    "prompt": "Consider the Pauli spin matrices σ_x, σ_y, and σ_z. The product σ_x σ_y is equal to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "σ_z" },
      { "id": "C", "text": "-σ_z" },
      { "id": "D", "text": "σ_y σ_x" },
      { "id": "E", "text": "-σ_y σ_x" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Different Pauli matrices strictly anticommute: {σ_i, σ_j} = σ_i σ_j + σ_j σ_i = 0 for i ≠ j. Therefore, σ_x σ_y = -σ_y σ_x."
  },
  {
    "id": 172,
    "prompt": "The binding energy per nucleon is greatest for which of the following nuclei?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "³₂He" },
      { "id": "B", "text": "⁴₂He" },
      { "id": "C", "text": "⁵⁶₂₆Fe" },
      { "id": "D", "text": "²³⁵₉₂U" },
      { "id": "E", "text": "²³⁸₉₂U" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The curve of binding energy per nucleon rises from light elements to a maximum in the iron-group region around A ≈ 56–62 (approx. 8.8 MeV/nucleon for ⁵⁶Fe) and then gradually declines toward heavier nuclei like Uranium due to increasing Coulomb repulsion."
  },
  {
    "id": 173,
    "prompt": "The negative muon, μ⁻, has properties most similar to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Quark" },
      { "id": "B", "text": "Boson" },
      { "id": "C", "text": "Photon" },
      { "id": "D", "text": "Meson" },
      { "id": "E", "text": "Electron" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The muon (μ⁻) is a fundamental lepton with spin ½ and negative elementary charge -e, identically matching the quantum characteristics of the electron, differing only in its heavier rest mass (~105.7 MeV/c² vs 0.511 MeV/c²)."
  },
  {
    "id": 174,
    "prompt": "Which of the following correctly gives the quark and antiquark content of a lepton and a baryon?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Lepton: 0 Quarks, 0 Antiquarks; Baryon: 3 Quarks, 0 Antiquarks" },
      { "id": "B", "text": "Lepton: 0 Quarks, 0 Antiquarks; Baryon: 1 Quark, 1 Antiquark" },
      { "id": "C", "text": "Lepton: 1 Quark, 0 Antiquarks; Baryon: 1 Quark, 1 Antiquark" },
      { "id": "D", "text": "Lepton: 1 Quark, 1 Antiquark; Baryon: 2 Quarks, 0 Antiquarks" },
      { "id": "E", "text": "Lepton: 1 Quark, 1 Antiquark; Baryon: 3 Quarks, 0 Antiquarks" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Leptons are elementary point particles that do not participate in strong interactions and contain zero quarks and zero antiquarks. Baryons (such as protons and neutrons) are composite hadrons made of three valence quarks (3 quarks, 0 antiquarks)."
  },
  {
    "id": 175,
    "prompt": "Under certain conditions, a beam of electrons impinging on a crystal surface will diffract and a scattering pattern of the beam can be obtained. What is the approximate kinetic energy of the electrons needed in order to see the pattern? (Assume the lattice spacing of the crystal to be 0.4 nm.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.1 eV" },
      { "id": "B", "text": "1 eV" },
      { "id": "C", "text": "10 eV" },
      { "id": "D", "text": "100 eV" },
      { "id": "E", "text": "1000 eV" }
    ],
    "correctAnswers": ["C"],
    "explanation": "For observable crystal diffraction, the electron de Broglie wavelength must be on the order of the lattice spacing: λ ≈ d = 0.4 nm. The kinetic energy is K = p² / 2m_e = h² / (2 m_e λ²) = (hc)² / (2 m_e c² λ²). Using hc ≈ 1240 eV·nm and m_e c² ≈ 5.11 × 10⁵ eV: K ≈ (1240)² / [2 × (5.11 × 10⁵) × (0.4)²] ≈ 1.538 × 10⁶ / 1.635 × 10⁵ ≈ 9.4 eV ≈ 10 eV."
  }
];
