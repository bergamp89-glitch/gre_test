export const part4 = [
  {
    "id": 76,
    "prompt": "A model of an optical fiber is shown in the figure above. The optical fiber has an index of refraction, n, and is surrounded by free space. What angles of incidence, θ, will result in the light staying in the optical fiber?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q76.svg",
    "options": [
      { "id": "A", "text": "θ > sin⁻¹(√(n² - 1))" },
      { "id": "B", "text": "θ < sin⁻¹(√(n² - 1))" },
      { "id": "C", "text": "θ > sin⁻¹(√(n² + 1))" },
      { "id": "D", "text": "θ < sin⁻¹(√(n² + 1))" },
      { "id": "E", "text": "sin⁻¹(√(n² - 1)) < θ < sin⁻¹(√(n² + 1))" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Snell's law at entrance face: sinθ = n sinθ_r. The angle of incidence at the fiber wall is φ = 90° - θ_r. For total internal reflection (TIR), sinφ ≥ 1/n ⇒ cosθ_r ≥ 1/n ⇒ sin²θ_r ≤ 1 - 1/n² = (n² - 1)/n². Since sin²θ = n² sin²θ_r, we get sin²θ ≤ n² - 1 ⇒ θ < sin⁻¹(√(n² - 1))."
  },
  {
    "id": 77,
    "prompt": "A gas at temperature T is composed of molecules of mass m. Which of the following describes how the average time between intermolecular collisions varies with m?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "It is proportional to 1/m." },
      { "id": "B", "text": "It is proportional to ⁴√m." },
      { "id": "C", "text": "It is proportional to √m." },
      { "id": "D", "text": "It is proportional to m." },
      { "id": "E", "text": "It is proportional to m²." }
    ],
    "correctAnswers": ["C"],
    "explanation": "The mean free path λ is independent of mass m. The mean molecular speed scales as v_avg ∝ 1/√m. The mean time between collisions is τ = λ / v_avg ∝ 1 / (1/√m) = √m."
  },
  {
    "id": 78,
    "prompt": "A particle can occupy two possible states with energies E₁ and E₂, where E₂ > E₁. At temperature T, the probability of finding the particle in state 2 is given by which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "e^(-E₁ / kT) / [e^(-E₁ / kT) + e^(-E₂ / kT)]" },
      { "id": "B", "text": "e^(-E₂ / kT) / [e^(-E₁ / kT) + e^(-E₂ / kT)]" },
      { "id": "C", "text": "e^(-(E₁ + E₂) / kT) / [e^(-E₁ / kT) + e^(-E₂ / kT)]" },
      { "id": "D", "text": "[e^(-E₁ / kT) + e^(-E₂ / kT)] / e^(-E₂ / kT)" },
      { "id": "E", "text": "[e^(-E₁ / kT) + e^(-E₂ / kT)] / e^(-E₁ / kT)" }
    ],
    "correctAnswers": ["B"],
    "explanation": "According to the Boltzmann distribution, the probability of occupying state 2 is P₂ = e^(-E₂ / kT) / Z, where the partition function is Z = e^(-E₁ / kT) + e^(-E₂ / kT)."
  },
  {
    "id": 79,
    "prompt": "Consider 1 mole of a real gas that obeys the van der Waals equation of state shown above: (p + a/V²)(V - b) = RT. If the gas undergoes an isothermal expansion at temperature T₀ from volume V₁ to volume V₂, which of the following gives the work done by the gas?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "RT₀ ln(V₂ / V₁)" },
      { "id": "C", "text": "RT₀ ln[(V₂ - b) / (V₁ - b)]" },
      { "id": "D", "text": "RT₀ ln[(V₂ - b) / (V₁ - b)] + a (1/V₂ - 1/V₁)" },
      { "id": "E", "text": "RT₀ [1/(V₂ - b)² - 1/(V₁ - b)²] + a (1/V₂³ - 1/V₁³)" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Solving for pressure gives p = RT₀ / (V - b) - a / V². Integrating work: W = ∫_{V₁}^{V₂} p dV = [RT₀ ln(V - b) + a / V]_{V₁}^{V₂} = RT₀ ln[(V₂ - b) / (V₁ - b)] + a (1/V₂ - 1/V₁)."
  },
  {
    "id": 80,
    "prompt": "A 1 kg block attached to a spring vibrates with a frequency of 1 Hz on a frictionless horizontal table. Two springs identical to the original spring are attached in parallel to an 8 kg block placed on the same table. Which of the following gives the frequency of vibration of the 8 kg block?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "¼ Hz" },
      { "id": "B", "text": "1 / (2√2) Hz" },
      { "id": "C", "text": "½ Hz" },
      { "id": "D", "text": "1 Hz" },
      { "id": "E", "text": "2 Hz" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Frequency is f = (1 / 2π) √(k_eff / m). Initially, f₁ = (1 / 2π) √(k / 1) = 1 Hz. With two springs in parallel, k_eff = 2k. For mass m = 8 kg: f₂ = (1 / 2π) √(2k / 8) = (1 / 2π) √(k / 4) = ½ f₁ = ½ Hz."
  },
  {
    "id": 81,
    "prompt": "A uniform disk with a mass of m and a radius of r rolls without slipping along a horizontal surface and ramp, as shown above. The disk has an initial velocity of v. What is the maximum height h to which the center of mass of the disk rises?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q81.svg",
    "options": [
      { "id": "A", "text": "h = v² / (2g)" },
      { "id": "B", "text": "h = 3v² / (4g)" },
      { "id": "C", "text": "h = v² / g" },
      { "id": "D", "text": "h = 3v² / (2g)" },
      { "id": "E", "text": "h = 2v² / g" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Total kinetic energy of a solid rolling disk is K = ½ m v² + ½ I ω² = ½ m v² + ¼ m v² = ¾ m v². Conservation of energy: m g h = ¾ m v² ⇒ h = 3v² / (4g)."
  },
  {
    "id": 82,
    "prompt": "A mass, m, is attached to a massless spring fixed at one end. The mass is confined to move in a horizontal plane, and its position is given by the polar coordinates r and θ. Both r and θ can vary. If the relaxed length of the spring is s and the force constant is k, what is the Lagrangian, L, for the system?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "L = ½ m ṙ² + ½ m r² θ̇² - ½ k(r cosθ - s)²" },
      { "id": "B", "text": "L = ½ m ṙ² + ½ m r² θ̇² - ½ k(r sinθ - s)²" },
      { "id": "C", "text": "L = ½ m ṙ² + ½ m r² θ̇² + ½ k(r - s)²" },
      { "id": "D", "text": "L = ½ m ṙ² + ½ m r² θ̇² - ½ k(r - s)²" },
      { "id": "E", "text": "L = -½ m ṙ² + ½ m r² θ̇² + ½ k(r - s)²" }
    ],
    "correctAnswers": ["D"],
    "explanation": "In 2D polar coordinates, kinetic energy is T = ½ m (ṙ² + r² θ̇²). Potential energy of the spring (with rest length s) is V = ½ k (r - s)². The Lagrangian is L = T - V = ½ m ṙ² + ½ m r² θ̇² - ½ k (r - s)²."
  },
  {
    "id": 83,
    "prompt": "A mass m attached to the end of a massless rod of length L is free to swing below the plane of support, as shown in the figure above. The Hamiltonian for this system is given by H = p_θ² / (2m L²) + p_ϕ² / (2m L² sin²θ) - mgL cosθ, where θ and ϕ are defined as shown in the figure. On the basis of Hamilton's equations of motion, the generalized coordinate or momentum that is a constant in time is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q83.svg",
    "options": [
      { "id": "A", "text": "θ" },
      { "id": "B", "text": "ϕ" },
      { "id": "C", "text": "θ̇" },
      { "id": "D", "text": "p_θ" },
      { "id": "E", "text": "p_ϕ" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The coordinate ϕ does not appear explicitly in the Hamiltonian H, meaning ϕ is a cyclic coordinate: ∂H / ∂ϕ = 0. By Hamilton's equations of motion, ṗ_ϕ = - ∂H / ∂ϕ = 0, proving p_ϕ is a constant of motion."
  },
  {
    "id": 84,
    "prompt": "A rod of length L and mass M is placed along the x-axis with one end at the origin, as shown in the figure above. The rod has linear mass density λ = (2M / L²) x, where x is the distance from the origin. Which of the following gives the x-coordinate of the rod's center of mass?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q84.svg",
    "options": [
      { "id": "A", "text": "1/12 L" },
      { "id": "B", "text": "1/4 L" },
      { "id": "C", "text": "1/3 L" },
      { "id": "D", "text": "1/2 L" },
      { "id": "E", "text": "2/3 L" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Center of mass: x_cm = (1/M) ∫₀ᴸ x λ dx = (1/M) ∫₀ᴸ x (2M/L² x) dx = (2/L²) ∫₀ᴸ x² dx = (2/L²)(L³/3) = ⅔ L."
  },
  {
    "id": 85,
    "prompt": "A particle is in an infinite square well potential with walls at x = 0 and x = L. If the particle is in the state ψ(x) = A sin(3πx / L), where A is a constant, what is the probability that the particle is between x = 1/3 L and x = 2/3 L?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "1/3" },
      { "id": "C", "text": "1 / √3" },
      { "id": "D", "text": "2/3" },
      { "id": "E", "text": "1" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The state is the n = 3 eigenstate. The probability density consists of three identical half-wave lobes over the three equal intervals [0, L/3], [L/3, 2L/3], and [2L/3, L]. By symmetry, the probability in the middle third [L/3, 2L/3] is exactly ⅓."
  },
  {
    "id": 86,
    "prompt": "Which of the following are the eigenvalues of the Hermitian matrix [[2, i], [-i, 2]]?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1, 0" },
      { "id": "B", "text": "1, 3" },
      { "id": "C", "text": "2, 2" },
      { "id": "D", "text": "i, -i" },
      { "id": "E", "text": "1 + i, 1 - i" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The secular equation is det(M - λI) = (2 - λ)² - 1 = 0 ⇒ 2 - λ = ±1 ⇒ λ = 1, 3."
  },
  {
    "id": 87,
    "prompt": "Consider the Pauli spin matrices σ_x = [[0, 1], [1, 0]], σ_y = [[0, -i], [i, 0]], σ_z = [[1, 0], [0, -1]], I = [[1, 0], [0, 1]]. The commutator [σ_x, σ_y] ≡ σ_x σ_y - σ_y σ_x is equal to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "I" },
      { "id": "B", "text": "2i σ_x" },
      { "id": "C", "text": "2i σ_y" },
      { "id": "D", "text": "2i σ_z" },
      { "id": "E", "text": "0" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The commutator of Pauli matrices is [σ_j, σ_k] = 2i ε_jkl σ_l. For x and y: [σ_x, σ_y] = 2i σ_z."
  },
  {
    "id": 88,
    "prompt": "A spin-½ particle is in a state described by the spinor χ = A [1 + i; 2], where A is a normalization constant. The probability of finding the particle with spin projection S_z = -½ ℏ is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/6" },
      { "id": "B", "text": "1/3" },
      { "id": "C", "text": "1/2" },
      { "id": "D", "text": "2/3" },
      { "id": "E", "text": "1" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Normalization requires |A|² (|1 + i|² + 2²) = |A|² (2 + 4) = 6|A|² = 1 ⇒ |A|² = 1/6. The spin-down component (S_z = -½ ℏ) has amplitude 2A, so probability is P_down = |2A|² = 4/6 = ⅔."
  },
  {
    "id": 89,
    "prompt": "An electron with total energy E in the region x < 0 is moving in the +x-direction. It encounters a step potential at x = 0. The wave function for x ≤ 0 is given by ψ = A e^(i k₁ x) + B e^(-i k₁ x), where k₁ = √(2mE / ℏ²), and the wave function for x > 0 is given by ψ = C e^(i k₂ x), where k₂ = √[2m(E - V₀) / ℏ²]. Which of the following gives the reflection coefficient for the system?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q89.svg",
    "options": [
      { "id": "A", "text": "R = 0" },
      { "id": "B", "text": "R = 1" },
      { "id": "C", "text": "R = k₂ / k₁" },
      { "id": "D", "text": "R = [(k₁ - k₂) / (k₁ + k₂)]²" },
      { "id": "E", "text": "R = 4 k₁ k₂ / (k₁ + k₂)²" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Boundary continuity of ψ and ψ' at x = 0 gives the reflected wave amplitude B / A = (k₁ - k₂) / (k₁ + k₂). The quantum reflection coefficient is R = |B/A|² = [(k₁ - k₂) / (k₁ + k₂)]²."
  },
  {
    "id": 90,
    "prompt": "Two thin, concentric, spherical conducting shells are arranged as shown in the figure above. The inner shell has radius a, charge +Q, and is at zero electric potential. The outer shell has radius b and charge -Q. If r is the radial distance from the center of the spheres, what is the electric potential in region I (a < r < b) and in region II (r > b)?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q90.svg",
    "options": [
      { "id": "A", "text": "Region I: Q/(4πε₀r),  Region II: 0" },
      { "id": "B", "text": "Region I: Q/(4πε₀)(1/r - 1/a),  Region II: 0" },
      { "id": "C", "text": "Region I: Q/(4πε₀)(1/r - 1/b),  Region II: Q/(4πε₀r)" },
      { "id": "D", "text": "Region I: Q/(4πε₀)(1/r - 1/a),  Region II: Q/(4πε₀)(1/b - 1/a)" },
      { "id": "E", "text": "Region I: Q/(4πε₀)(1/r - 1/b),  Region II: Q/(4πε₀)(1/a - 1/b)" }
    ],
    "correctAnswers": ["D"],
    "explanation": "For a < r < b, E = Q/(4πε₀r²). With V(a) = 0: V_I(r) = - ∫_a^r E dr' = Q/(4πε₀)(1/r - 1/a). At r = b, V(b) = Q/(4πε₀)(1/b - 1/a). For r > b, net enclosed charge is 0, so E = 0 and potential is constant: V_II(r) = V(b) = Q/(4πε₀)(1/b - 1/a)."
  },
  {
    "id": 91,
    "prompt": "In static electromagnetism, let E, B, J, and ρ be the electric field, magnetic field, current density, and charge density, respectively. Which of the following conditions allows the electric field to be written in the form E = -∇ϕ, where ϕ is the electrostatic potential?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "∇ · J = 0" },
      { "id": "B", "text": "∇ · E = ρ / ε₀" },
      { "id": "C", "text": "∇ × E = 0" },
      { "id": "D", "text": "∇ × B = μ₀ J" },
      { "id": "E", "text": "∇ · B = 0" }
    ],
    "correctAnswers": ["C"],
    "explanation": "A vector field can be expressed as the gradient of a scalar potential if and only if its curl vanishes: ∇ × E = 0 (electrostatic irrotational field)."
  },
  {
    "id": 92,
    "prompt": "A long, straight, hollow cylindrical wire with an inner radius R and an outer radius 2R carries a uniform current density. Which of the following graphs best represents the magnitude of the magnetic field as a function of the distance from the center of the wire?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q92.svg",
    "options": [
      { "id": "A", "text": "Graph (A)" },
      { "id": "B", "text": "Graph (B)" },
      { "id": "C", "text": "Graph (C)" },
      { "id": "D", "text": "Graph (D)" },
      { "id": "E", "text": "Graph (E)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Inside the hollow core (r < R), enclosed current is 0, so B = 0. Within the conductor (R ≤ r ≤ 2R), enclosed current rises as (r² - R²), so B rises from 0 to a maximum at 2R. Outside (r > 2R), B falls off as 1/r (Graph E)."
  },
  {
    "id": 93,
    "prompt": "A parallel-plate capacitor has plate separation d. The space between the plates is empty. A battery supplying voltage V₀ is connected across the capacitor, resulting in electromagnetic energy U₀ stored in the capacitor. A dielectric, of dielectric constant κ, is inserted so that it just fills the space between the plates. If the battery is still connected, what are the electric field E and the energy U stored in the dielectric, in terms of V₀ and U₀?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "E = V₀ / d,  U = U₀" },
      { "id": "B", "text": "E = V₀ / d,  U = κ U₀" },
      { "id": "C", "text": "E = V₀ / d,  U = κ² U₀" },
      { "id": "D", "text": "E = V₀ / (κd),  U = U₀" },
      { "id": "E", "text": "E = V₀ / (κd),  U = κ U₀" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Because the battery remains connected, voltage is held at V₀. Thus E = V₀ / d is unchanged. Capacitance increases to C = κ C₀, so stored energy is U = ½ C V₀² = κ (½ C₀ V₀²) = κ U₀."
  },
  {
    "id": 94,
    "prompt": "An observer O at rest midway between two sources of light at x = 0 and x = 10 m observes the two sources to flash simultaneously. According to a second observer O', moving at a constant speed parallel to the x-axis, one source of light flashes 13 ns before the other. Which of the following gives the speed of O' relative to O?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.13c" },
      { "id": "B", "text": "0.15c" },
      { "id": "C", "text": "0.36c" },
      { "id": "D", "text": "0.53c" },
      { "id": "E", "text": "0.62c" }
    ],
    "correctAnswers": ["C"],
    "explanation": "By the relativity of simultaneity, Δt' = γ (v/c) (Δx / c) = 13 ns. With Δx = 10 m, Δx / c = 33.33 ns ⇒ γ β = 13 / 33.33 = 0.39. Solving β / √(1 - β²) = 0.39 gives β² ≈ 0.132 ⇒ β ≈ 0.36, so v ≈ 0.36c."
  },
  {
    "id": 95,
    "prompt": "Let Ĵ be a quantum mechanical angular momentum operator. The commutator [Ĵ_x Ĵ_y, Ĵ_x] is equivalent to which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "iℏ Ĵ_z" },
      { "id": "C", "text": "iℏ Ĵ_z Ĵ_x" },
      { "id": "D", "text": "-iℏ Ĵ_x Ĵ_z" },
      { "id": "E", "text": "iℏ Ĵ_x Ĵ_y" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Using [AB, C] = A[B, C] + [A, C]B: [Ĵ_x Ĵ_y, Ĵ_x] = Ĵ_x [Ĵ_y, Ĵ_x] + [Ĵ_x, Ĵ_x] Ĵ_y = Ĵ_x (-iℏ Ĵ_z) + 0 = -iℏ Ĵ_x Ĵ_z."
  },
  {
    "id": 96,
    "prompt": "Which of the following ions CANNOT be used as a dopant in germanium to make an n-type semiconductor?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "As" },
      { "id": "B", "text": "P" },
      { "id": "C", "text": "Sb" },
      { "id": "D", "text": "B" },
      { "id": "E", "text": "N" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Germanium is a Group IV semiconductor. An n-type semiconductor requires pentavalent donor impurities (Group V: P, As, Sb). Boron (B) is a trivalent Group III acceptor, which creates a p-type semiconductor."
  },
  {
    "id": 97,
    "prompt": "In the Compton effect, a photon with energy E scatters through a 90° angle from a stationary electron of mass m. The energy of the scattered photon is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "E" },
      { "id": "B", "text": "E / 2" },
      { "id": "C", "text": "E² / (mc²)" },
      { "id": "D", "text": "E² / (E + mc²)" },
      { "id": "E", "text": "E mc² / (E + mc²)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Compton formula for energy: 1/E' - 1/E = (1 / mc²)(1 - cos 90°) = 1 / mc² ⇒ 1/E' = (mc² + E) / (E mc²) ⇒ E' = (E mc²) / (E + mc²)."
  },
  {
    "id": 98,
    "prompt": "Which of the following is the principal decay mode of the positive muon μ⁺?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "μ⁺ → e⁺ + ν_e" },
      { "id": "B", "text": "μ⁺ → p + ν_μ" },
      { "id": "C", "text": "μ⁺ → n + e⁺ + ν_e" },
      { "id": "D", "text": "μ⁺ → e⁺ + ν_e + ν̄_μ" },
      { "id": "E", "text": "μ⁺ → π⁺ + ν_e + ν_μ" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The muon decays purely through the weak force: μ⁺ → e⁺ + ν_e + ν̄_μ. This strictly conserves electric charge (+1), electron lepton number L_e (-1 + 1 = 0), and muon lepton number L_μ (-1 = -1)."
  },
  {
    "id": 99,
    "prompt": "A small particle of mass m is at rest on a horizontal circular platform that is free to rotate about a vertical axis through its center. The particle is located at a radius r from the axis, as shown in the figure above. The platform begins to rotate with constant angular acceleration α. Because of friction between the particle and the platform, the particle remains at rest with respect to the platform. When the platform has reached angular speed ω, the angle θ between the static frictional force f_s and the inward radial direction is given by which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q99.svg",
    "options": [
      { "id": "A", "text": "θ = ω² r / g" },
      { "id": "B", "text": "θ = ω² / α" },
      { "id": "C", "text": "θ = α / ω²" },
      { "id": "D", "text": "θ = tan⁻¹(ω² / α)" },
      { "id": "E", "text": "θ = tan⁻¹(α / ω²)" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The particle experiences inward radial acceleration a_r = ω² r and tangential acceleration a_t = α r. Static friction provides both accelerations: f_{s,r} = m ω² r, f_{s,t} = m α r. The angle with the inward radial direction satisfies tanθ = f_{s,t} / f_{s,r} = (α r) / (ω² r) = α / ω² ⇒ θ = tan⁻¹(α / ω²)."
  },
  {
    "id": 100,
    "prompt": "The partition function Z in statistical mechanics can be written as Z = ∑_r e^(-E_r / kT), where the index r ranges over all possible microstates of a system and E_r is the energy of microstate r. For a single quantum mechanical harmonic oscillator with energies E_n = (n + ½)ℏω, where n = 0, 1, 2, ..., the partition function Z is given by which of the following?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Z = e^(-½ ℏω / kT)" },
      { "id": "B", "text": "Z = e^(½ ℏω / kT)" },
      { "id": "C", "text": "Z = e^(½ ℏω / kT) - 1" },
      { "id": "D", "text": "Z = e^(½ ℏω / kT) + 1" },
      { "id": "E", "text": "Z = e^(½ ℏω / kT) / [e^(ℏω / kT) - 1]" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Evaluating the geometric sum: Z = ∑_{n=0}^∞ e^(- (n + ½)ℏω / kT) = e^(- ½ ℏω / kT) / [1 - e^(- ℏω / kT)]. Multiplying top and bottom by e^(ℏω / kT) yields Z = e^(½ ℏω / kT) / [e^(ℏω / kT) - 1]."
  }
];
