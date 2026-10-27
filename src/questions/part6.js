export const part6 = [
  {
    "id": 126,
    "prompt": "Consider the kinetic energy operator T̂ = p̂² / 2m and the Hamiltonian operator Ĥ = p̂² / 2m + V(x̂). Which of the following pairs of observables can be measured simultaneously with no restriction on their precision?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "x̂ and p̂" },
      { "id": "B", "text": "x̂ and T̂" },
      { "id": "C", "text": "Ĥ and p̂" },
      { "id": "D", "text": "Ĥ and T̂" },
      { "id": "E", "text": "T̂ and p̂" }
    ],
    "correctAnswers": ["E"],
    "explanation": "According to quantum mechanics, two physical observables can be measured simultaneously with arbitrary precision if and only if their operators commute: [Â, B̂] = 0. Since T̂ = p̂² / 2m is an algebraic function solely of the momentum operator p̂, it automatically commutes with p̂: [p̂² / 2m, p̂] = 0. In contrast, x̂ and p̂ do not commute ([x̂, p̂] = iℏ), which prevents simultaneous precision for the other pairs when V(x̂) depends on position."
  },
  {
    "id": 127,
    "prompt": "Electromagnetic radiation emitted from a nucleus is most likely to be in the form of",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "gamma rays" },
      { "id": "B", "text": "microwaves" },
      { "id": "C", "text": "ultraviolet radiation" },
      { "id": "D", "text": "visible light" },
      { "id": "E", "text": "infrared radiation" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Nuclear energy levels are separated by typical energies ranging from dozens of keV to several MeV. Photons emitted during transitions between nuclear states therefore fall into the gamma-ray portion of the electromagnetic spectrum."
  },
  {
    "id": 128,
    "prompt": "A sample of nitrogen gas undergoes the cyclic thermodynamic process shown above. Which of the following gives the net heat transferred to the system in one complete cycle 1 → 2 → 3 → 1 ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q128.svg",
    "options": [
      { "id": "A", "text": "-80 J" },
      { "id": "B", "text": "-40 J" },
      { "id": "C", "text": "40 J" },
      { "id": "D", "text": "80 J" },
      { "id": "E", "text": "180 J" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Over a complete cycle, the change in internal energy is zero (ΔU = 0), so the first law gives Q_net = W_net. The net work done is the area enclosed by the triangular cycle in the P-V diagram. Since the cycle traverses clockwise (1 → 2 → 3 → 1), the net work is positive. Base = ΔV = 0.03 m³ - 0.01 m³ = 0.02 m³, and height = ΔP = 6,000 Pa - 2,000 Pa = 4,000 Pa. Enclosed area = ½ × base × height = ½ × (0.02 m³) × (4,000 Pa) = +40 J."
  },
  {
    "id": 129,
    "prompt": "For an ideal gas, consider the three thermodynamic processes—labeled 1, 2, and 3 —shown in the PV diagram above. Each process has the same initial state and the same final volume. One process is adiabatic, one is isobaric, and one is isothermal. Which of the following correctly identifies the three processes?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q129.svg",
    "options": [
      { "id": "A", "text": "Adiabatic: 1, Isobaric: 2, Isothermal: 3" },
      { "id": "B", "text": "Adiabatic: 2, Isobaric: 1, Isothermal: 3" },
      { "id": "C", "text": "Adiabatic: 2, Isobaric: 3, Isothermal: 1" },
      { "id": "D", "text": "Adiabatic: 3, Isobaric: 1, Isothermal: 2" },
      { "id": "E", "text": "Adiabatic: 3, Isobaric: 2, Isothermal: 1" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Curve 1 has constant pressure as volume increases, so it is isobaric. For gas expansion, the adiabatic slope (dP/dV = -γ P/V) is steeper than the isothermal slope (dP/dV = -P/V) because the adiabatic index γ > 1. Therefore, curve 3 drops more steeply and represents the adiabatic process, while curve 2 represents the isothermal process. Thus: Adiabatic: 3, Isobaric: 1, Isothermal: 2."
  },
  {
    "id": 130,
    "prompt": "The driver of a police car hears an echo of the car’s siren from a wall toward which the car is moving with a speed of 3.5 m/s. If the speed of sound is 350 m/s and the frequency of the siren is 600 Hz, the driver hears the echo at a frequency nearest to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "588 Hz" },
      { "id": "B", "text": "594 Hz" },
      { "id": "C", "text": "600 Hz" },
      { "id": "D", "text": "606 Hz" },
      { "id": "E", "text": "612 Hz" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The siren (source) approaches the stationary wall: f_wall = f_0 [v / (v - u_s)]. The wall reflects sound at f_wall. The moving driver (observer) approaches the wall: f_observed = f_wall [(v + u_o) / v] = f_0 [(v + u) / (v - u)], where u = 3.5 m/s and v = 350 m/s. Thus f_observed = 600 × [(350 + 3.5) / (350 - 3.5)] = 600 × (353.5 / 346.5) ≈ 612.1 Hz ≈ 612 Hz."
  },
  {
    "id": 131,
    "prompt": "The first five harmonics produced by an organ pipe open at both ends are 50 Hz, 100 Hz, 150 Hz, 200 Hz, and 250 Hz. Which of the harmonics, if any, will survive once the pipe is closed at one end?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "50 Hz, 150 Hz, and 250 Hz only" },
      { "id": "B", "text": "100 Hz and 200 Hz only" },
      { "id": "C", "text": "150 Hz and 250 Hz only" },
      { "id": "D", "text": "200 Hz only" },
      { "id": "E", "text": "None" }
    ],
    "correctAnswers": ["E"],
    "explanation": "An open pipe of length L has harmonics f_n = n (v / 2L) with fundamental f_1 = 50 Hz. When closed at one end, the fundamental becomes f_1' = v / 4L = 25 Hz, and only odd harmonics can resonate: f_m' = m × 25 Hz for m = 1, 3, 5, 7, 9... yielding 25, 75, 125, 175, 225, 275 Hz... All the original frequencies (50, 100, 150, 200, 250 Hz) are even multiples of 25 Hz, so none of them can exist in the closed pipe."
  },
  {
    "id": 132,
    "prompt": "A refracting telescope consists of two converging lenses separated by 100 cm. The eye-piece lens has a focal length of 20 cm. The angular magnification of the telescope is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "4" },
      { "id": "B", "text": "5" },
      { "id": "C", "text": "6" },
      { "id": "D", "text": "20" },
      { "id": "E", "text": "100" }
    ],
    "correctAnswers": ["A"],
    "explanation": "For an astronomical refracting telescope in normal adjustment, the lens separation equals the sum of the focal lengths: L = f_obj + f_eye. With L = 100 cm and f_eye = 20 cm, the objective focal length is f_obj = 100 - 20 = 80 cm. The angular magnification magnitude is m = f_obj / f_eye = 80 / 20 = 4."
  },
  {
    "id": 133,
    "prompt": "The best type of laser with which to do spectroscopy over a range of visible wavelengths is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "a dye laser" },
      { "id": "B", "text": "a helium-neon laser" },
      { "id": "C", "text": "an excimer laser" },
      { "id": "D", "text": "a ruby laser" },
      { "id": "E", "text": "a neodymium-YAG laser" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Dye lasers use fluorescent organic dyes in liquid solution whose broad emission bands permit continuous tuning across a wide range of visible wavelengths, making them the standard choice for tunable visible spectroscopy. Other choices (He-Ne, ruby, Nd:YAG) emit only at discrete, fixed wavelengths."
  },
  {
    "id": 134,
    "prompt": "A rod measures 1.00 m in its rest system. How fast must an observer move parallel to the rod to measure its length to be 0.80 m?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.50c" },
      { "id": "B", "text": "0.60c" },
      { "id": "C", "text": "0.70c" },
      { "id": "D", "text": "0.80c" },
      { "id": "E", "text": "0.90c" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Special relativity predicts length contraction along the direction of relative motion: L = L_0 √(1 - v²/c²). Setting 0.80 = 1.00 √(1 - v²/c²) gives 1 - v²/c² = 0.64, so v²/c² = 0.36, which yields v = 0.60c."
  },
  {
    "id": 135,
    "prompt": "A particle decays in 2.0 μs in its rest frame. If the same particle moves at v = 0.60c in the lab frame, how far will it travel in the lab before decaying?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "150 m" },
      { "id": "B", "text": "288 m" },
      { "id": "C", "text": "360 m" },
      { "id": "D", "text": "450 m" },
      { "id": "E", "text": "750 m" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Due to time dilation, the laboratory lifetime is t_lab = γ τ_0, where γ = 1 / √(1 - 0.60²) = 1 / 0.80 = 1.25. Thus, t_lab = 1.25 × 2.0 × 10⁻⁶ s = 2.5 × 10⁻⁶ s. The distance traveled before decay is d = v t_lab = (0.60 × 3.0 × 10⁸ m/s)(2.5 × 10⁻⁶ s) = 450 m."
  },
  {
    "id": 136,
    "prompt": "The rest mass of a particle with total energy 5.0 GeV and momentum 4.9 GeV/c is approximately",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.1 GeV/c²" },
      { "id": "B", "text": "0.2 GeV/c²" },
      { "id": "C", "text": "0.5 GeV/c²" },
      { "id": "D", "text": "1.0 GeV/c²" },
      { "id": "E", "text": "1.5 GeV/c²" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Using the relativistic invariant relation E² = (pc)² + (m_0 c²)²: (m_0 c²)² = E² - (pc)² = (5.0)² - (4.9)² = 25.00 - 24.01 = 0.99 (GeV)². Taking the square root gives m_0 c² ≈ 1.0 GeV, so m_0 ≈ 1.0 GeV/c²."
  },
  {
    "id": 137,
    "prompt": "If charge +Q is located in space at the point (x = 1 m, y = 10 m, z = 5 m), what is the total electric flux that passes through the yz-plane?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "∞" },
      { "id": "B", "text": "1" },
      { "id": "C", "text": "Q / ε_0" },
      { "id": "D", "text": "Q / (2ε_0)" },
      { "id": "E", "text": "0" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The yz-plane (x = 0) is an infinite plane dividing space into two equal half-spaces. Because the charge +Q is located in the region x > 0 (at x = 1 m) and its electric field is radially symmetric, exactly half of its total flux (which is Q/ε_0 by Gauss's law) radiates into the negative x half-space and penetrates the yz-plane: Φ = Q / (2ε_0)."
  },
  {
    "id": 138,
    "prompt": "A point charge Q is placed at the center of a hollow, conducting spherical shell of inner radius a and outer radius b, as shown above. A net charge q is placed on the conducting shell. If the electric potential is assumed to be 0 at infinity, the magnitude of the electric potential at r, where a < r < b, is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q138.svg",
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "Q / (4πε_0 r)" },
      { "id": "C", "text": "(Q + q) / (4πε_0 r)" },
      { "id": "D", "text": "Q / (4πε_0 a)" },
      { "id": "E", "text": "(Q + q) / (4πε_0 b)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Inside the metallic conducting material (a < r < b), the electrostatic field must vanish (E = 0). As a result, the conductor is an equipotential volume, so V(r) equals the potential at its outer surface r = b. Outside the shell (r ≥ b), Gauss's law shows that the field is that of a point charge of total charge Q + q. Integrating E from infinity to b gives V(b) = (Q + q) / (4πε_0 b). Thus V(r) = (Q + q) / (4πε_0 b) everywhere within the shell body."
  },
  {
    "id": 139,
    "prompt": "The figure above shows three arrangements of one electron (e) and two protons (p). Which of the following is true about the magnitude F of the net electrostatic force acting on the electron due to the protons?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q139.svg",
    "options": [
      { "id": "A", "text": "F_1 > F_2 > F_3" },
      { "id": "B", "text": "F_1 = F_2 > F_3" },
      { "id": "C", "text": "F_1 > F_3 > F_2" },
      { "id": "D", "text": "F_2 > F_1 > F_3" },
      { "id": "E", "text": "F_2 > F_3 > F_1" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Let F_d = k e² / d² and F_D = k e² / D² (with F_d > F_D since d < D). In arrangement 1, both protons lie on the same side and pull the electron in the same direction, so the forces add: F_1 = F_d + F_D. In arrangement 2, the protons pull in opposite directions, so the forces oppose: F_2 = F_d - F_D. In arrangement 3, the forces are perpendicular, giving F_3 = √(F_d² + F_D²). Squaring each magnitude reveals F_1² = F_d² + F_D² + 2F_d F_D > F_3² = F_d² + F_D² > F_2² = F_d² + F_D² - 2F_d F_D. Therefore, F_1 > F_3 > F_2."
  },
  {
    "id": 140,
    "prompt": "A series AC circuit with impedance Z consists of resistor R, inductor L, and capacitor C, as shown above. The ideal emf source has a sinusoidal output given by ε = ε_max sin(ωt), and the current is given by I = I_max sin(ωt - ϕ). What is the average power dissipated in the circuit? (I_rms is the root-mean-square current.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q140.svg",
    "options": [
      { "id": "A", "text": "I_rms² R" },
      { "id": "B", "text": "½ I_rms² R" },
      { "id": "C", "text": "½ I_rms² Z" },
      { "id": "D", "text": "½ I_rms² R cosϕ" },
      { "id": "E", "text": "½ I_rms² Z cosϕ" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Ideal reactive components (inductors and capacitors) store and release energy alternately without net cycle dissipation. All real electrical energy dissipation occurs as Joule heating in the resistor: P_avg = I_rms² R. Note that if peak current I_max were used, the formula would be ½ I_max² R."
  },
  {
    "id": 141,
    "prompt": "The quantum efficiency of a photon detector is 0.1. If 100 photons are sent into the detector, one after the other, the detector will detect photons",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "exactly 10 times" },
      { "id": "B", "text": "an average of 10 times, with an rms deviation of about 0.1" },
      { "id": "C", "text": "an average of 10 times, with an rms deviation of about 1" },
      { "id": "D", "text": "an average of 10 times, with an rms deviation of about 2" },
      { "id": "E", "text": "an average of 10 times, with an rms deviation of about 3" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Photon detection obeys binomial statistics with N = 100 independent trials and detection probability p = 0.1. The mean number of detections is μ = N p = 100 × 0.1 = 10. The root-mean-square (standard) deviation is σ = √(N p (1 - p)) = √(100 × 0.1 × 0.9) = √9 = 3."
  },
  {
    "id": 142,
    "prompt": "Two students perform an experiment in which they drop a ball from rest from a known height above the ground and measure the speed of the ball just before it strikes the ground. From repeated measurement, the students estimate the uncertainty in the measured speed of the ball to be 10 percent. Which of the following gives the uncertainty in the kinetic energy of the ball? (Assume the uncertainty in the ball’s mass is negligibly small.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "5%" },
      { "id": "B", "text": "10%" },
      { "id": "C", "text": "15%" },
      { "id": "D", "text": "20%" },
      { "id": "E", "text": "40%" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Kinetic energy is given by K = ½ m v². In fractional uncertainty propagation for powers, ΔK / K ≈ 2 (Δv / v). For an uncertainty of 10% in velocity, the resulting fractional uncertainty in kinetic energy is 2 × 10% = 20%."
  },
  {
    "id": 143,
    "prompt": "Which of the following wave functions represents a solution to the Schrödinger equation for an electron in the 2s state of a hydrogen atom? (c is a constant and a_0 is the Bohr radius.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "c cosθ" },
      { "id": "B", "text": "c exp(-r / a_0)" },
      { "id": "C", "text": "c (1 - r / 2a_0) exp(-r / 2a_0)" },
      { "id": "D", "text": "c (1 - r / 2a_0) exp(-r / 2a_0) cosθ" },
      { "id": "E", "text": "c (1 - r / 2a_0) exp(-r / 2a_0) sinθ exp(±iϕ)" }
    ],
    "correctAnswers": ["C"],
    "explanation": "A 2s atomic orbital has principal quantum number n = 2 and orbital angular momentum l = 0. Because l = 0, the spherical harmonic is Y_0^0 = constant, which requires complete angular symmetry (no θ or ϕ dependence). The radial part for n = 2 contains an exponential damping term exp(-r / 2a_0) and an associated Laguerre polynomial with one radial node, which takes the form (1 - r / 2a_0). Thus, ψ_2s(r) = c (1 - r / 2a_0) exp(-r / 2a_0)."
  },
  {
    "id": 144,
    "prompt": "A particle in an infinite square well has as its initial wave function an equal mixture of the first three orthonormal stationary states: Ψ(x, 0) = A [ψ_1(x) + ψ_2(x) + ψ_3(x)]. The value of the normalization constant A is equal to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1 / √3" },
      { "id": "B", "text": "1 / √2" },
      { "id": "C", "text": "1" },
      { "id": "D", "text": "√2" },
      { "id": "E", "text": "√3" }
    ],
    "correctAnswers": ["A"],
    "explanation": "By orthonormality of the energy eigenstates, ∫ |Ψ(x,0)|² dx = |A|² (⟨ψ_1|ψ_1⟩ + ⟨ψ_2|ψ_2⟩ + ⟨ψ_3|ψ_3⟩) = |A|² (1 + 1 + 1) = 3 |A|² = 1. Therefore, A = 1 / √3."
  },
  {
    "id": 145,
    "prompt": "A matter wave of energy E > 0 and wave number k is incident from the left on a potential well of width L and depth V_0. The top of the well is at zero energy and the bottom of the well is at -V_0, as shown in the figure above. The spatial part of the wave function in region 3 has which of the following forms? (A is a constant.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q145.svg",
    "options": [
      { "id": "A", "text": "A e^(ikx)" },
      { "id": "B", "text": "A sin(kx)" },
      { "id": "C", "text": "A cos(kx)" },
      { "id": "D", "text": "A e^(ik'x) (k' < k)" },
      { "id": "E", "text": "A e^(-κx) (κ real and positive)" }
    ],
    "correctAnswers": ["A"],
    "explanation": "In region 3 (x > L), the potential is V = 0, exactly identical to region 1 (V = 0). The wave number is therefore unchanged: k_3 = √(2mE) / ℏ = k. Since particles are incident from the left, region 3 contains only a rightward-propagating transmitted wave, which is represented by A e^(ikx)."
  },
  {
    "id": 146,
    "prompt": "Spring 1 has force constant k_1 and spring 2 has force constant k_2, where k_1 > k_2. If the same external force is applied to both springs, which of the following is true about the extensions (Δx_1 and Δx_2) and the stored potential energies (U_1 and U_2) of the two springs?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Δx_1 < Δx_2 and U_1 < U_2" },
      { "id": "B", "text": "Δx_1 < Δx_2 and U_1 > U_2" },
      { "id": "C", "text": "Δx_1 = Δx_2 and U_1 < U_2" },
      { "id": "D", "text": "Δx_1 = Δx_2 and U_1 = U_2" },
      { "id": "E", "text": "Δx_1 > Δx_2 and U_1 = U_2" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Hooke's law gives extension Δx = F / k. For equal applied force F, the stiffer spring (k_1 > k_2) undergoes a smaller extension: Δx_1 < Δx_2. The stored elastic potential energy is U = ½ F Δx = F² / (2k). Because k_1 > k_2, U_1 < U_2."
  },
  {
    "id": 147,
    "prompt": "A stone is glued to the top of a light wooden block that floats in a pool of water, as shown in Figure 1 above. Assume that exactly 50 percent of the block is under water, and that the stone has half the weight of the block. If the block and stone are flipped over, as shown in Figure 2, and replaced in the pool, the amount of the block under water will be",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q147.svg",
    "options": [
      { "id": "A", "text": "less than 50%" },
      { "id": "B", "text": "still 50%" },
      { "id": "C", "text": "between 50% and 75%" },
      { "id": "D", "text": "between 75% and 100%" },
      { "id": "E", "text": "100%, since the stone and block sink" }
    ],
    "correctAnswers": ["A"],
    "explanation": "In Figure 1, the stone is in air, so only the submerged portion of the wood displaces water to support the combined weight: F_b(wood) = W_wood + W_stone = 1.5 W_wood, corresponding to 50% submersion of the block. In Figure 2, the stone is fully submerged in water, so it experiences its own buoyant force: F_b(stone) = ρ_water g V_stone > 0. The remaining buoyant force needed from the wood is F_b(wood)' = (W_wood + W_stone) - F_b(stone) < 1.5 W_wood. Consequently, a smaller volume of wood must be submerged, meaning less than 50% of the block is under water."
  },
  {
    "id": 148,
    "prompt": "A uniform solid disk starts from rest and rolls down an inclined plane without slipping. After some time, what fraction of the disk’s total kinetic energy is rotational kinetic energy?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/4" },
      { "id": "B", "text": "1/3" },
      { "id": "C", "text": "1/2" },
      { "id": "D", "text": "2/3" },
      { "id": "E", "text": "3/4" }
    ],
    "correctAnswers": ["B"],
    "explanation": "For a uniform solid disk, I_cm = ½ M R². Rolling without slipping requires v = ω R. Translational kinetic energy is K_trans = ½ M v², while rotational kinetic energy is K_rot = ½ I ω² = ½ (½ M R²) (v/R)² = ¼ M v². The total kinetic energy is K_tot = ½ M v² + ¼ M v² = ¾ M v². The fraction that is rotational is K_rot / K_tot = (¼) / (¾) = 1/3."
  },
  {
    "id": 149,
    "prompt": "Two projectiles are launched from ground level with the same initial speed. The maximum height h_1 reached by projectile 1 is twice the maximum height h_2 reached by projectile 2. If θ_1 and θ_2 denote the respective launch angles, as measured from the horizontal, these angles satisfy which of the following relationships?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "cosθ_1 = √2 cosθ_2" },
      { "id": "B", "text": "sinθ_1 = √2 sinθ_2" },
      { "id": "C", "text": "tanθ_1 = √2 tanθ_2" },
      { "id": "D", "text": "sinθ_1 = 2 sinθ_2" },
      { "id": "E", "text": "cosθ_1 = 2 cosθ_2" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The maximum height attained by a projectile launched at angle θ with speed v_0 is h = (v_0 sinθ)² / (2g). For equal launch speeds v_0, h is proportional to sin²θ. Given h_1 = 2 h_2, we have sin²θ_1 = 2 sin²θ_2, which yields sinθ_1 = √2 sinθ_2."
  },
  {
    "id": 150,
    "prompt": "When an object is located 25 cm from lens 1, an inverted image is produced 100 cm from the lens, as shown in Figure 1 above. A second lens with a focal length of +20 cm is placed 110 cm from the first lens, as shown in Figure 2 above. Which of the following is true of the image produced by lens 2 ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q150.svg",
    "options": [
      { "id": "A", "text": "It is real and inverted relative to the object." },
      { "id": "B", "text": "It is real and upright relative to the object." },
      { "id": "C", "text": "It is virtual and inverted relative to the object." },
      { "id": "D", "text": "It is virtual and upright relative to the object." },
      { "id": "E", "text": "An image cannot be produced in this situation." }
    ],
    "correctAnswers": ["C"],
    "explanation": "The first lens produces a real, inverted image I_1 located 100 cm behind lens 1. Lens 2 is placed at 110 cm behind lens 1, meaning image I_1 acts as an object for lens 2 at a distance d_o2 = 110 - 100 = +10 cm in front of lens 2. Using the thin lens equation for lens 2: 1/d_i2 = 1/f_2 - 1/d_o2 = 1/20 - 1/10 = -1/20 cm⁻¹, yielding d_i2 = -20 cm. Because d_i2 < 0, the image formed by lens 2 is virtual. The magnification of lens 2 is m_2 = -d_i2 / d_o2 = -(-20) / (+10) = +2 > 0, which preserves the orientation of its object (I_1). Since I_1 was already inverted relative to the original object, the final image remains inverted relative to the original object."
  }
];
