export const part1 = [
  {
    "id": 1,
    "prompt": "A ball is thrown out of the passenger window of a car moving to the right (ignore air resistance). If the ball is thrown out perpendicular to the velocity of the car, which of the following best depicts the path the ball takes, as viewed from above?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q1.svg",
    "options": [
      { "id": "A", "text": "Curved path deflecting rightward" },
      { "id": "B", "text": "Straight diagonal path moving forward and outward" },
      { "id": "C", "text": "Curved path deflecting leftward" },
      { "id": "D", "text": "Curved path deflecting backward" },
      { "id": "E", "text": "Straight path directed backward" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In the ground reference frame, no horizontal forces act on the ball after release (air resistance is neglected). The ball retains its initial forward velocity component (from the car, +x) and gains a constant perpendicular velocity component (+y) from the throw. Because both velocity components remain constant, the trajectory in the horizontal plane viewed from above is a straight diagonal line."
  },
  {
    "id": 2,
    "prompt": "An object is thrown horizontally from the open window of a building. If the initial speed of the object is 20 m/s and it hits the ground 2.0 s later, from what height was it thrown? (Neglect air resistance and assume the ground is level.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "4.9 m" },
      { "id": "B", "text": "9.8 m" },
      { "id": "C", "text": "10.0 m" },
      { "id": "D", "text": "19.6 m" },
      { "id": "E", "text": "39.2 m" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Horizontal and vertical motions are independent. The vertical initial velocity is zero (v_0y = 0). The height depends only on free fall under gravity: h = ½ g t² = ½ (9.8 m/s²)(2.0 s)² = 19.6 m."
  },
  {
    "id": 3,
    "prompt": "A resistor in a circuit dissipates energy at a rate of 1 W. If the voltage across the resistor is doubled, what will be the new rate of energy dissipation?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.25 W" },
      { "id": "B", "text": "0.5 W" },
      { "id": "C", "text": "1 W" },
      { "id": "D", "text": "2 W" },
      { "id": "E", "text": "4 W" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Electrical power dissipated by a resistor of resistance R is P = V² / R. If the voltage is doubled (V' = 2V), the power becomes P' = (2V)² / R = 4(V² / R) = 4 × 1 W = 4 W."
  },
  {
    "id": 4,
    "prompt": "An infinitely long, straight wire carrying current I₁ passes through the center of a circular loop of wire carrying current I₂, as shown above. The long wire is perpendicular to the plane of the loop. Which of the following describes the magnetic force on the loop?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q4.svg",
    "options": [
      { "id": "A", "text": "Outward, along a radius of the loop." },
      { "id": "B", "text": "Inward, along a radius of the loop." },
      { "id": "C", "text": "Upward, along the axis of the loop." },
      { "id": "D", "text": "Downward, along the axis of the loop." },
      { "id": "E", "text": "There is no magnetic force on the loop." }
    ],
    "correctAnswers": ["E"],
    "explanation": "The magnetic field produced by the long straight wire is azimuthal (B ∝ φ̂), directed along circles concentric with the wire. The current element dl of the circular loop also flows in the azimuthal direction (dl ∝ φ̂). Since dl and B are parallel, dl × B = 0, so the magnetic force dF = I₂(dl × B) is zero everywhere on the loop."
  },
  {
    "id": 5,
    "prompt": "De Broglie hypothesized that the linear momentum and wavelength of a free massive particle are related by which of the following constants?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Planck's constant" },
      { "id": "B", "text": "Boltzmann's constant" },
      { "id": "C", "text": "The Rydberg constant" },
      { "id": "D", "text": "The speed of light" },
      { "id": "E", "text": "Avogadro's number" }
    ],
    "correctAnswers": ["A"],
    "explanation": "According to Louis de Broglie's hypothesis (1924), every matter particle exhibits wave-like behavior with wavelength λ = h / p, where h is Planck's constant and p is linear momentum."
  },
  {
    "id": 6,
    "prompt": "An atom has filled n = 1 and n = 2 levels. How many electrons does the atom have?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "4" },
      { "id": "C", "text": "6" },
      { "id": "D", "text": "8" },
      { "id": "E", "text": "10" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The maximum capacity of principal shell n is 2n² electrons. For n = 1: 2(1)² = 2 electrons (1s²). For n = 2: 2(2)² = 8 electrons (2s² 2p⁶). Total electrons = 2 + 8 = 10 electrons (Neon configuration)."
  },
  {
    "id": 7,
    "prompt": "The root-mean-square speed of molecules of mass m in an ideal gas at temperature T is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "√(2kT / m)" },
      { "id": "C", "text": "√(3kT / m)" },
      { "id": "D", "text": "√(8kT / πm)" },
      { "id": "E", "text": "kT / m" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The average kinetic energy per molecule in 3D translational motion is ½ m (v_rms)² = 3/2 kT. Solving for root-mean-square speed gives v_rms = √(3kT / m)."
  },
  {
    "id": 8,
    "prompt": "The energy from electromagnetic waves in equilibrium in a cavity is used to melt ice. If the Kelvin temperature of the cavity is increased by a factor of two, the mass of ice that can be melted in a fixed amount of time is increased by a factor of",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "4" },
      { "id": "C", "text": "8" },
      { "id": "D", "text": "16" },
      { "id": "E", "text": "32" }
    ],
    "correctAnswers": ["D"],
    "explanation": "By the Stefan-Boltzmann law, radiation energy density and radiated power are proportional to T⁴. Doubling temperature (T' = 2T) increases power by 2⁴ = 16. Hence the heat delivered and mass of ice melted in a fixed time increase by a factor of 16."
  },
  {
    "id": 9,
    "prompt": "The figure above represents the orbit of a planet around a star, S, and the marks divide the orbit into 14 equal time intervals, t = T/14, where T is the orbital period. If the only force acting on the planet is Newtonian gravitation, then true statements about the situation include which of the following?\nI. Area A = area B\nII. The star S is at one focus of an elliptically shaped orbit.\nIII. T² = C a³, where a is the semimajor axis of the ellipse and C is a constant.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q9.svg",
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "II only" },
      { "id": "C", "text": "I and II only" },
      { "id": "D", "text": "II and III only" },
      { "id": "E", "text": "I, II, and III" }
    ],
    "correctAnswers": ["E"],
    "explanation": "All three statements are Kepler's three laws: I is Kepler's 2nd Law (equal swept areas in equal time intervals t = T/14); II is Kepler's 1st Law (elliptical orbit with central mass at a focus); III is Kepler's 3rd Law (T² = C a³)."
  },
  {
    "id": 10,
    "prompt": "A massless spring with force constant k launches a ball of mass m. In order for the ball to reach a speed v, by what displacement s should the spring be compressed?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "s = v √(k / m)" },
      { "id": "B", "text": "s = v √(m / k)" },
      { "id": "C", "text": "s = v √(2k / m)" },
      { "id": "D", "text": "s = v (m / k)" },
      { "id": "E", "text": "s = v² (m / 2k)" }
    ],
    "correctAnswers": ["B"],
    "explanation": "By conservation of mechanical energy, spring potential energy converts into ball kinetic energy: ½ k s² = ½ m v² ⇒ s² = v² (m / k) ⇒ s = v √(m / k)."
  },
  {
    "id": 11,
    "prompt": "A quantum mechanical harmonic oscillator has an angular frequency ω. The Schrödinger equation predicts that the ground state energy of the oscillator will be",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "-½ ℏω" },
      { "id": "B", "text": "0" },
      { "id": "C", "text": "½ ℏω" },
      { "id": "D", "text": "ℏω" },
      { "id": "E", "text": "3/2 ℏω" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The quantum harmonic oscillator energy eigenvalues are E_n = (n + ½)ℏω (n = 0, 1, 2, ...). The ground state (n = 0) has zero-point energy E_0 = ½ ℏω."
  },
  {
    "id": 12,
    "prompt": "In the Bohr model of the hydrogen atom, the linear momentum of the electron at radius r_n is given by which of the following? (n is the principal quantum number.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "n ℏ" },
      { "id": "B", "text": "n r_n ℏ" },
      { "id": "C", "text": "n ℏ / r_n" },
      { "id": "D", "text": "n² r_n ℏ" },
      { "id": "E", "text": "n² ℏ / r_n" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In Bohr's quantization condition, angular momentum is L = p r_n = nℏ. Solving for momentum gives p = nℏ / r_n."
  },
  {
    "id": 13,
    "prompt": "The figure above represents a log-log plot of variable y versus variable x. The origin represents the point x = 1 and y = 1. Which of the following gives the approximate functional relationship between y and x?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q13.svg",
    "options": [
      { "id": "A", "text": "y = 6 √x" },
      { "id": "B", "text": "y = ½ x + 6" },
      { "id": "C", "text": "y = 6x + 0.5" },
      { "id": "D", "text": "y = ⅙ x²" },
      { "id": "E", "text": "y = 6x²" }
    ],
    "correctAnswers": ["A"],
    "explanation": "On a log-log plot, log y = m log x + log C ⇒ y = C xᵐ. At x = 1, y = C ≈ 6. Over two decades in x (from 1 to 100), y increases by one decade (from 6 to 60), yielding slope m = 1/2. Thus y = 6 x^(1/2) = 6√x."
  },
  {
    "id": 14,
    "prompt": "Two experimental techniques determine the mass of an object to be 11 ± 1 kg and 10 ± 2 kg. These two measurements can be combined to give a weighted average. The uncertainty of the weighted average is equal to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "½ kg" },
      { "id": "B", "text": "2 / √5 kg" },
      { "id": "C", "text": "2 / √3 kg" },
      { "id": "D", "text": "2 kg" },
      { "id": "E", "text": "√5 kg" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The variance of the weighted average satisfies 1/σ² = 1/σ₁² + 1/σ₂² = 1/1² + 1/2² = 1 + 1/4 = 5/4. Inverting gives σ² = 4/5 ⇒ σ = 2 / √5 kg."
  },
  {
    "id": 15,
    "prompt": "If the five lenses shown below are made of the same material, which lens has the shortest positive focal length?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q15.svg",
    "options": [
      { "id": "A", "text": "Lens A (Biconcave)" },
      { "id": "B", "text": "Lens B (Plano-concave)" },
      { "id": "C", "text": "Lens C (Plano-convex)" },
      { "id": "D", "text": "Lens D (Thin biconvex)" },
      { "id": "E", "text": "Lens E (Thick biconvex with steep surface curvatures)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "By the lensmaker's formula 1/f = (n - 1)(1/R₁ - 1/R₂), a positive focal length requires a converging lens (thicker in middle). The shortest focal length corresponds to the largest optical power 1/f, which is achieved by the smallest radii of curvature on both surfaces. Lens E has the steepest convex curvature, giving the shortest positive focal length."
  },
  {
    "id": 16,
    "prompt": "Unpolarized light is incident on a pair of ideal linear polarizers whose transmission axes make an angle of 45° with each other. The transmitted light intensity through both polarizers is what percentage of the incident intensity?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "100%" },
      { "id": "B", "text": "75%" },
      { "id": "C", "text": "50%" },
      { "id": "D", "text": "25%" },
      { "id": "E", "text": "0%" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Unpolarized light of intensity I₀ passing through the first polarizer is halved: I₁ = ½ I₀. Passing through the second polarizer at 45° follows Malus's Law: I₂ = I₁ cos²(45°) = (½ I₀)(1/√2)² = ¼ I₀ = 25%."
  },
  {
    "id": 17,
    "prompt": "A very long, thin, straight wire carries a uniform charge density of λ per unit length. Which of the following gives the magnitude of the electric field at a radial distance r from the wire?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/(2πε₀) · (λ / r)" },
      { "id": "B", "text": "1/(2πε₀) · (r / λ)" },
      { "id": "C", "text": "1/(2πε₀) · (λ / r²)" },
      { "id": "D", "text": "1/(4πε₀) · (λ² / r²)" },
      { "id": "E", "text": "1/(4πε₀) · λ ln(r)" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Applying Gauss's law over a coaxial cylinder of radius r and length L: E(2πrL) = λL / ε₀ ⇒ E = λ / (2πε₀r) = 1/(2πε₀) · (λ/r)."
  },
  {
    "id": 18,
    "prompt": "The bar magnet shown in the figure above is moved completely through the loop. Which of the following is a true statement about the direction of the current flow between the two points a and b in the circuit?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q18.svg",
    "options": [
      { "id": "A", "text": "No current flows between a and b as the magnet passes through the loop." },
      { "id": "B", "text": "Current flows from a to b as the magnet passes through the loop." },
      { "id": "C", "text": "Current flows from b to a as the magnet passes through the loop." },
      { "id": "D", "text": "Current flows from a to b as the magnet enters the loop and from b to a as the magnet leaves the loop." },
      { "id": "E", "text": "Current flows from b to a as the magnet enters the loop and from a to b as the magnet leaves the loop." }
    ],
    "correctAnswers": ["E"],
    "explanation": "When the N-pole enters from above, downward magnetic flux increases. By Lenz's law, induced current opposes this with an upward field (CCW seen from above), which flows from b to a through resistor R. As the S-pole leaves below, downward flux decreases, reversing the current to flow from a to b."
  },
  {
    "id": 19,
    "prompt": "The surface of the Sun has a temperature close to 6,000 K and it emits a blackbody (Planck) spectrum that reaches a maximum near 500 nm. For a body with a surface temperature close to 300 K, at what wavelength would the thermal spectrum reach a maximum?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "10 μm" },
      { "id": "B", "text": "100 μm" },
      { "id": "C", "text": "10 mm" },
      { "id": "D", "text": "100 mm" },
      { "id": "E", "text": "10 m" }
    ],
    "correctAnswers": ["A"],
    "explanation": "By Wien's displacement law, λ_max T = const. Thus λ₂ = λ₁ (T₁ / T₂) = 500 nm × (6000 K / 300 K) = 500 nm × 20 = 10,000 nm = 10 μm."
  },
  {
    "id": 20,
    "prompt": "At the present time, the temperature of the universe (i.e., the microwave radiation background) is about 3 K. When the temperature was 12 K, typical objects in the universe, such as galaxies, were",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "one-quarter as distant as they are today" },
      { "id": "B", "text": "one-half as distant as they are today" },
      { "id": "C", "text": "separated by about the same distances as they are today" },
      { "id": "D", "text": "two times as distant as they are today" },
      { "id": "E", "text": "four times as distant as they are today" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The cosmic microwave background temperature scales inversely with the cosmological scale factor a: T ∝ 1/a. When T was 12 K (4 times 3 K), the scale factor was ¼ of today's value, meaning cosmological distances were one-quarter as distant as today."
  },
  {
    "id": 21,
    "prompt": "For an adiabatic process involving an ideal gas having volume V and temperature T, which of the following is constant? (γ = Cp / Cv)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "TV" },
      { "id": "B", "text": "TV^γ" },
      { "id": "C", "text": "TV^(γ - 1)" },
      { "id": "D", "text": "T^γ V" },
      { "id": "E", "text": "T^γ V^(γ - 1)" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In an adiabatic process of an ideal gas, P V^γ = const. Using P = nRT/V, (T/V) V^γ = const ⇒ T V^(γ - 1) = const."
  },
  {
    "id": 22,
    "prompt": "An electron has total energy equal to four times its rest energy. The momentum of the electron is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "m_e c" },
      { "id": "B", "text": "√2 m_e c" },
      { "id": "C", "text": "√15 m_e c" },
      { "id": "D", "text": "4 m_e c" },
      { "id": "E", "text": "2√15 m_e c" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The relativistic dispersion relation is E² = p²c² + m_e²c⁴. With E = 4 m_e c²: (4 m_e c²)² = 16 m_e²c⁴ = p²c² + m_e²c⁴ ⇒ p²c² = 15 m_e²c⁴ ⇒ p = √15 m_e c."
  },
  {
    "id": 23,
    "prompt": "Two spaceships approach Earth with equal speeds, as measured by an observer on Earth, but from opposite directions. A meterstick on one spaceship is measured to be 60 cm long by an occupant of the other spaceship. What is the speed of each spaceship, as measured by the observer on Earth?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.4c" },
      { "id": "B", "text": "0.5c" },
      { "id": "C", "text": "0.6c" },
      { "id": "D", "text": "0.7c" },
      { "id": "E", "text": "0.8c" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Lorentz contraction between the two ships: L = L₀ √(1 - v_rel²/c²) = 0.6 m ⇒ v_rel = 0.8c. Relativistic velocity addition gives v_rel = 2u / (1 + u²/c²) = 0.8c ⇒ 0.8u² - 2cu + 0.8c² = 0 ⇒ 2β² - 5β + 2 = 0 ⇒ β = 0.5, so u = 0.5c."
  },
  {
    "id": 24,
    "prompt": "A meter stick with a speed of 0.8c moves past an observer. In the observer's reference frame, how long does it take the stick to pass the observer?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1.6 ns" },
      { "id": "B", "text": "2.5 ns" },
      { "id": "C", "text": "4.2 ns" },
      { "id": "D", "text": "6.9 ns" },
      { "id": "E", "text": "8.3 ns" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In the observer's frame, the stick is length-contracted: L = 1.0 m × √(1 - 0.8²) = 0.6 m. The time required to pass is Δt = L / v = 0.6 m / (0.8 × 3 × 10⁸ m/s) = 2.5 × 10⁻⁹ s = 2.5 ns."
  },
  {
    "id": 25,
    "prompt": "Consider a set of wave functions ψ_i(x). Which of the following conditions guarantees that the functions are normalized and mutually orthogonal? (The indices i and j take on the values in the set {1, 2, ..., n}.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "ψ_i*(x) ψ_j(x) = 0" },
      { "id": "B", "text": "ψ_i*(x) ψ_j(x) = 1" },
      { "id": "C", "text": "∫ ψ_i*(x) ψ_j(x) dx = 0" },
      { "id": "D", "text": "∫ ψ_i*(x) ψ_j(x) dx = 1" },
      { "id": "E", "text": "∫ ψ_i*(x) ψ_j(x) dx = δ_ij" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Orthonormality means normalization (integral equals 1 when i = j) and mutual orthogonality (integral equals 0 when i ≠ j), which is defined by the Kronecker delta δ_ij: ∫ ψ_i*(x) ψ_j(x) dx = δ_ij."
  }
];
