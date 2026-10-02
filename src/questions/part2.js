export const part2 = [
  {
    "id": 26,
    "prompt": "The normalized ground state wave function of hydrogen is ψ_100 = [2 / ((4π)^(1/2) a_0^(3/2))] e^(-r / a_0), where a_0 is the Bohr radius. What is the most likely distance that the electron is from the nucleus?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "a_0 / 2" },
      { "id": "C", "text": "a_0 / √2" },
      { "id": "D", "text": "a_0" },
      { "id": "E", "text": "2a_0" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The radial probability distribution is P(r) dr = |ψ|² 4π r² dr ∝ r² e^(-2r / a_0). Finding the maximum: d/dr [r² e^(-2r / a_0)] = (2r - 2r² / a_0) e^(-2r / a_0) = 0 ⇒ r = a_0. Thus, the most probable distance of the electron from the nucleus in the ground state is the Bohr radius a_0."
  },
  {
    "id": 27,
    "prompt": "The lifetime for the 2p → 1s transition in hydrogen is 1.6 × 10⁻⁹ s. The natural line width for the radiation emitted during the transition is approximately",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "100 Hz" },
      { "id": "B", "text": "100 kHz" },
      { "id": "C", "text": "100 MHz" },
      { "id": "D", "text": "100 GHz" },
      { "id": "E", "text": "100 THz" }
    ],
    "correctAnswers": ["C"],
    "explanation": "From the energy-time uncertainty principle, ΔE Δt ≈ ℏ ⇒ h Δν τ ≈ ℏ ⇒ Δν ≈ 1 / (2πτ). For τ = 1.6 × 10⁻⁹ s: Δν ≈ 1 / (2π × 1.6 × 10⁻⁹ s) ≈ 10⁸ Hz = 100 MHz."
  },
  {
    "id": 28,
    "prompt": "A spring of force constant k is stretched a certain distance. It takes twice as much work to stretch a second spring by half this distance. The force constant of the second spring is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "k" },
      { "id": "B", "text": "2k" },
      { "id": "C", "text": "4k" },
      { "id": "D", "text": "8k" },
      { "id": "E", "text": "16k" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Work done in stretching a spring is W = ½ k x². For the first spring: W₁ = ½ k x². For the second spring stretched by x/2: W₂ = ½ k₂ (x/2)² = ⅛ k₂ x². Given W₂ = 2 W₁: ⅛ k₂ x² = 2 (½ k x²) = k x² ⇒ k₂ = 8k."
  },
  {
    "id": 29,
    "prompt": "On a frictionless surface, a block of mass M moving at speed v collides elastically with another block of the same mass that is initially at rest. After the collision, the first block moves at an angle θ to its initial direction and has a speed v/2. The second block's speed after the collision is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "√3 / 4 v" },
      { "id": "B", "text": "v / 2" },
      { "id": "C", "text": "√3 / 2 v" },
      { "id": "D", "text": "√5 / 2 v" },
      { "id": "E", "text": "v + ½ v cosθ" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Because the collision is elastic, total kinetic energy is conserved: ½ M v² = ½ M (v/2)² + ½ M v₂² ⇒ v² = v²/4 + v₂² ⇒ v₂² = ¾ v² ⇒ v₂ = (√3 / 2) v."
  },
  {
    "id": 30,
    "prompt": "Which of the following gives Hamilton's canonical equation(s) of motion? (H is the Hamiltonian, q_i are the generalized coordinates, and p_i are the generalized momenta.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "q̇_i = ∂H/∂p_i,  ṗ_i = ∂H/∂q_i" },
      { "id": "B", "text": "q̇_i = -∂H/∂q_i,  ṗ_i = ∂H/∂p_i" },
      { "id": "C", "text": "q̇_i = -∂H/∂q_i,  ṗ_i = -∂H/∂p_i" },
      { "id": "D", "text": "q̇_i = ∂H/∂p_i,  ṗ_i = -∂H/∂q_i" },
      { "id": "E", "text": "d/dt(∂H/∂ṗ_i) - ∂H/∂q_i = 0" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Hamilton's canonical equations of motion are the pair of first-order differential equations: q̇_i = ∂H / ∂p_i and ṗ_i = - ∂H / ∂q_i."
  },
  {
    "id": 31,
    "prompt": "A layer of oil with density 800 kg/m³ floats on top of a volume of water with density 1,000 kg/m³. A block floats at the oil-water interface with 1/4 of its volume in oil and 3/4 of its volume in water, as shown in the figure above. What is the density of the block?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q31.svg",
    "options": [
      { "id": "A", "text": "200 kg/m³" },
      { "id": "B", "text": "850 kg/m³" },
      { "id": "C", "text": "950 kg/m³" },
      { "id": "D", "text": "1,050 kg/m³" },
      { "id": "E", "text": "1,800 kg/m³" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In floating equilibrium, the block's weight equals the sum of buoyant forces: ρ_block V g = ρ_oil (V/4) g + ρ_water (3V/4) g ⇒ ρ_block = ¼ (800 kg/m³) + ¾ (1,000 kg/m³) = 200 + 750 = 950 kg/m³."
  },
  {
    "id": 32,
    "prompt": "An incompressible fluid of density ρ flows through a horizontal pipe of radius r and then passes through a constriction of radius r/2. If the fluid has pressure P₀ and velocity v₀ before the constriction, the pressure in the constriction is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "P₀ - 15/2 ρ v₀²" },
      { "id": "B", "text": "P₀ - 3/2 ρ v₀²" },
      { "id": "C", "text": "P₀ / 4" },
      { "id": "D", "text": "P₀ + 3/2 ρ v₀²" },
      { "id": "E", "text": "P₀ + 15/2 ρ v₀²" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Continuity equation: A₁ v₀ = A₂ v₂ ⇒ π r² v₀ = π (r/2)² v₂ ⇒ v₂ = 4 v₀. By Bernoulli's equation: P₀ + ½ ρ v₀² = P₂ + ½ ρ (4 v₀)² ⇒ P₂ = P₀ + ½ ρ v₀² - 8 ρ v₀² = P₀ - 15/2 ρ v₀²."
  },
  {
    "id": 33,
    "prompt": "A thermodynamic system, initially at absolute temperature T₁, contains a mass m of water with specific heat capacity c. Heat is added until the temperature rises to T₂. The change in entropy of the water is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "T₂ - T₁" },
      { "id": "C", "text": "m c T₂" },
      { "id": "D", "text": "m c (T₂ - T₁)" },
      { "id": "E", "text": "m c ln(T₂ / T₁)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The entropy change for heating a mass m with constant specific heat c is ΔS = ∫ dQ / T = ∫ (m c dT) / T = m c ln(T₂ / T₁)."
  },
  {
    "id": 34,
    "prompt": "Heat Q is added to a monatomic ideal gas under conditions of constant volume, resulting in a temperature change ΔT. How much heat will be required to produce the same temperature change, if it is added under conditions of constant pressure?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "3/5 Q" },
      { "id": "B", "text": "Q" },
      { "id": "C", "text": "5/3 Q" },
      { "id": "D", "text": "2Q" },
      { "id": "E", "text": "10/3 Q" }
    ],
    "correctAnswers": ["C"],
    "explanation": "For a monatomic ideal gas, C_V = 3/2 R and C_P = 5/2 R. At constant volume: Q = n C_V ΔT = (3/2) n R ΔT. At constant pressure: Q_P = n C_P ΔT = (5/2) n R ΔT. Thus Q_P / Q = C_P / C_V = (5/2) / (3/2) = 5/3 ⇒ Q_P = 5/3 Q."
  },
  {
    "id": 35,
    "prompt": "A heat pump is to extract heat from an outdoor environment at 7°C and heat the environment indoors to 27°C. For each 15,000 J of heat delivered indoors, the smallest amount of work that must be supplied to the heat pump is approximately",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "500 J" },
      { "id": "B", "text": "1,000 J" },
      { "id": "C", "text": "1,100 J" },
      { "id": "D", "text": "2,000 J" },
      { "id": "E", "text": "2,200 J" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Convert to Kelvin: T_C = 7 + 273 = 280 K, T_H = 27 + 273 = 300 K. The maximum Carnot COP of a heat pump is COP = Q_H / W = T_H / (T_H - T_C) = 300 / (300 - 280) = 15. The minimum work required is W = Q_H / COP = 15,000 J / 15 = 1,000 J."
  },
  {
    "id": 36,
    "prompt": "The capacitor in the circuit above is charged. If switch S is closed at time t = 0, which of the following represents the magnetic energy, U, in the inductor as a function of time? (Assume that the capacitor and inductor are ideal.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q36.svg",
    "options": [
      { "id": "A", "text": "Periodic positive oscillation starting at U = 0 and touching zero periodically" },
      { "id": "B", "text": "Oscillation with positive offset not touching zero" },
      { "id": "C", "text": "Constant non-zero horizontal line" },
      { "id": "D", "text": "Monotonically decaying exponential curve" },
      { "id": "E", "text": "Monotonically saturating exponential curve" }
    ],
    "correctAnswers": ["A"],
    "explanation": "At t = 0, current through the inductor is zero, so magnetic energy U_B(0) = ½ L i(0)² = 0. The current oscillates sinusoidally as i(t) = I₀ sin(ωt), giving magnetic energy U_B(t) = ½ L I₀² sin²(ωt), which oscillates strictly non-negatively between 0 and maximum energy, touching zero every half period (Graph A)."
  },
  {
    "id": 37,
    "prompt": "A pair of electric charges of equal magnitude q and opposite sign are separated by a distance ℓ, as shown in the figure above. Which of the following gives the approximate magnitude and direction of the electric field set up by the two charges at a point P on the y-axis, which is located a distance r >> ℓ from the x-axis?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q37.svg",
    "options": [
      { "id": "A", "text": "Magnitude: 1/(4πε₀) · (2q / r²), Direction: +y" },
      { "id": "B", "text": "Magnitude: 1/(4πε₀) · (2q / r²), Direction: +x" },
      { "id": "C", "text": "Magnitude: 1/(4πε₀) · (2q / r²), Direction: -x" },
      { "id": "D", "text": "Magnitude: 1/(4πε₀) · (qℓ / r³), Direction: +x" },
      { "id": "E", "text": "Magnitude: 1/(4πε₀) · (qℓ / r³), Direction: -x" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The charges form an electric dipole p = qℓ x̂ pointing along +x (from -q to +q). At a point on the perpendicular bisector (y-axis), the dipole electric field is directed antiparallel to the dipole moment (i.e. in the -x direction), and its magnitude is E = 1/(4πε₀) · (p / r³) = 1/(4πε₀) · (qℓ / r³)."
  },
  {
    "id": 38,
    "prompt": "Consider two very long, straight, insulated wires oriented at right angles. The wires carry currents of equal magnitude I in the directions shown in the figure above. What is the net magnetic field at point P(a, a)?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q38.svg",
    "options": [
      { "id": "A", "text": "(μ₀I / 2πa)(x̂ + ŷ)" },
      { "id": "B", "text": "-(μ₀I / 2πa)(x̂ + ŷ)" },
      { "id": "C", "text": "(μ₀I / πa) ẑ" },
      { "id": "D", "text": "-(μ₀I / πa) ẑ" },
      { "id": "E", "text": "0" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Using the right-hand rule: The wire along the x-axis carrying current in +x creates a magnetic field at (a, a) directed out of the page: B₁ = +(μ₀I / 2πa) ẑ. The wire along the y-axis carrying current in +y creates a magnetic field at (a, a) directed into the page: B₂ = -(μ₀I / 2πa) ẑ. They cancel exactly: B_net = B₁ + B₂ = 0."
  },
  {
    "id": 39,
    "prompt": "A beam of muons travels through the laboratory with speed v = 4/5 c. The lifetime of a muon in its rest frame is τ = 2.2 × 10⁻⁶ s. The mean distance traveled by the muons in the laboratory frame is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "530 m" },
      { "id": "B", "text": "660 m" },
      { "id": "C", "text": "880 m" },
      { "id": "D", "text": "1,100 m" },
      { "id": "E", "text": "1,500 m" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The Lorentz factor is γ = 1 / √(1 - (4/5)²) = 5/3. The laboratory lifetime is Δt = γ τ = (5/3)(2.2 × 10⁻⁶ s). The distance traveled is d = v Δt = (4/5 c)(5/3 τ) = (4/3) c τ = (4/3)(3 × 10⁸ m/s)(2.2 × 10⁻⁶ s) = 880 m."
  },
  {
    "id": 40,
    "prompt": "A particle of mass M decays from rest into two particles. One particle has mass m and the other particle is massless. The momentum of the massless particle is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "(M² - m²)c / 4M" },
      { "id": "B", "text": "(M² - m²)c / 2M" },
      { "id": "C", "text": "(M² - m²)c / M" },
      { "id": "D", "text": "2(M² - m²)c / M" },
      { "id": "E", "text": "4(M² - m²)c / M" }
    ],
    "correctAnswers": ["B"],
    "explanation": "By conservation of momentum, |p_massless| = |p_m| = p. Energy conservation gives: M c² = pc + √(p²c² + m²c⁴) ⇒ (Mc² - pc)² = p²c² + m²c⁴ ⇒ M²c⁴ - 2Mc³p = m²c⁴ ⇒ 2Mc³p = (M² - m²)c⁴ ⇒ p = (M² - m²)c / 2M."
  },
  {
    "id": 41,
    "prompt": "In an experimental observation of the photoelectric effect, the stopping potential was plotted versus the light frequency, as shown in the figure above. The best straight line was fitted to the experimental points. Which of the following gives the slope of the line? (The work function of the metal is ϕ.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q41.svg",
    "options": [
      { "id": "A", "text": "h / ϕ" },
      { "id": "B", "text": "h / e" },
      { "id": "C", "text": "e / h" },
      { "id": "D", "text": "e / ϕ" },
      { "id": "E", "text": "ϕ / e" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Einstein's photoelectric equation is e V_s = h ν - ϕ ⇒ V_s = (h / e) ν - (ϕ / e). The slope of the line relating stopping potential V_s to frequency ν is h / e."
  },
  {
    "id": 42,
    "prompt": "Two sinusoidal waveforms of the same frequency are displayed on an oscilloscope screen, as indicated above. The horizontal sweep of the oscilloscope is set to 100 ns/cm and the vertical gains of channels 1 and 2 are each set to 2 V/cm. The zero-voltage level of each channel is given at the right in the figure. The phase difference between the two waveforms is most nearly",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q42.svg",
    "options": [
      { "id": "A", "text": "30°" },
      { "id": "B", "text": "45°" },
      { "id": "C", "text": "60°" },
      { "id": "D", "text": "90°" },
      { "id": "E", "text": "120°" }
    ],
    "correctAnswers": ["E"],
    "explanation": "From the grid, one complete cycle spans 6 cm (6 divisions). The horizontal displacement between corresponding zero crossings is 2 cm (2 divisions). The phase difference is Δφ = (2 cm / 6 cm) × 360° = 120°."
  },
  {
    "id": 43,
    "prompt": "In the diamond structure of elemental carbon, the nearest neighbors of each C atom lie at the corners of a",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "square" },
      { "id": "B", "text": "hexagon" },
      { "id": "C", "text": "cube" },
      { "id": "D", "text": "tetrahedron" },
      { "id": "E", "text": "octahedron" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Each carbon atom in diamond has sp³ hybridization, bonding covalently to four nearest neighbors arranged symmetrically at the vertices of a regular tetrahedron."
  },
  {
    "id": 44,
    "prompt": "According to the BCS theory, the attraction between Cooper pairs in a superconductor is due to",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "the weak nuclear force" },
      { "id": "B", "text": "the strong nuclear force" },
      { "id": "C", "text": "vacuum polarization" },
      { "id": "D", "text": "interactions with the ionic lattice" },
      { "id": "E", "text": "the Casimir effect" }
    ],
    "correctAnswers": ["D"],
    "explanation": "In BCS theory, an electron deforms the positively charged ionic lattice as it moves, creating a region of slightly higher positive charge density that attracts another electron (electron-phonon interaction)."
  },
  {
    "id": 45,
    "prompt": "During a hurricane, a 1,200 Hz warning siren on the town hall sounds. The wind is blowing at 55 m/s in a direction from the siren toward a person 1 km away. With what frequency does the sound wave reach the person? (The speed of sound in air is 330 m/s.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1,000 Hz" },
      { "id": "B", "text": "1,030 Hz" },
      { "id": "C", "text": "1,200 Hz" },
      { "id": "D", "text": "1,400 Hz" },
      { "id": "E", "text": "1,440 Hz" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Since both source and observer are stationary relative to the ground, the frequency received by the observer equals the frequency emitted by the source: f_obs = f_source = 1,200 Hz. Wind changes sound velocity and wavelength relative to the ground, but not frequency."
  },
  {
    "id": 46,
    "prompt": "Sound waves moving at 350 m/s diffract out of a speaker enclosure with an opening that is a long rectangular slit 0.14 m across. At about what frequency will the sound first disappear at an angle of 45° from the normal to the speaker face?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "500 Hz" },
      { "id": "B", "text": "1,750 Hz" },
      { "id": "C", "text": "2,750 Hz" },
      { "id": "D", "text": "3,500 Hz" },
      { "id": "E", "text": "5,000 Hz" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The condition for the first single-slit diffraction minimum is a sinθ = λ = v / f. Solving for f: f = v / (a sin 45°) = 350 m/s / (0.14 m × sin 45°) = 350 / (0.14 × 0.707) ≈ 3,535 Hz ≈ 3,500 Hz."
  },
  {
    "id": 47,
    "prompt": "An organ pipe, closed at one end and open at the other, is designed to have a fundamental frequency of C (131 Hz). What is the frequency of the next higher harmonic for this pipe?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "44 Hz" },
      { "id": "B", "text": "196 Hz" },
      { "id": "C", "text": "262 Hz" },
      { "id": "D", "text": "393 Hz" },
      { "id": "E", "text": "524 Hz" }
    ],
    "correctAnswers": ["D"],
    "explanation": "A pipe closed at one end produces only odd harmonics: f_n = n f₁ (n = 1, 3, 5, ...). The fundamental is f₁ = 131 Hz. The next harmonic is n = 3: f₃ = 3 × 131 Hz = 393 Hz."
  },
  {
    "id": 48,
    "prompt": "For the logic circuit shown above, which of the following Boolean statements gives the output E in terms of inputs A, B, C, and D?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q48.svg",
    "options": [
      { "id": "A", "text": "E = A + B + C · D" },
      { "id": "B", "text": "E = A + B · C · D" },
      { "id": "C", "text": "E = (A + B)' · (C · D)'" },
      { "id": "D", "text": "E = A' · B' · C' · D'" },
      { "id": "E", "text": "E = A' · B · C · D" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The top gate is a NOR gate giving (A + B)'. The bottom gate is an AND gate giving C · D. The final gate is a NOR gate: E = ((A + B)' + C · D)'. By De Morgan's theorem, E = ((A + B)')' · (C · D)' = (A + B)' · (C · D)'."
  },
  {
    "id": 49,
    "prompt": "Which of the following lasers utilizes transitions that involve the energy levels of free atoms?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Diode laser" },
      { "id": "B", "text": "Dye laser" },
      { "id": "C", "text": "Free-electron laser" },
      { "id": "D", "text": "Gas laser" },
      { "id": "E", "text": "Solid-state laser" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Gas lasers (e.g., helium-neon, argon-ion) operate on optical transitions between discrete electronic energy states of neutral or ionized free atoms in a gas discharge."
  },
  {
    "id": 50,
    "prompt": "Which of the following expressions is proportional to the total energy for the levels of a one-electron Bohr atom? (m is the reduced mass, Z is the number of protons in the nucleus, -e is the charge on the electron, and n is the principal quantum number.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "m Z e² / n" },
      { "id": "B", "text": "m Z e² / n²" },
      { "id": "C", "text": "m Z² e⁴ / n²" },
      { "id": "D", "text": "m² Z² e² / n²" },
      { "id": "E", "text": "m² Z² e⁴ / n²" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In Bohr's theory, the total energy of level n is E_n = - (m Z² e⁴) / (8 ε₀² h² n²), which is directly proportional to m Z² e⁴ / n²."
  }
];
