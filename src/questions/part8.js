export const part8 = [
  {
    "id": 176,
    "prompt": "A beam of positive ions is initially moving in the +x-direction with nonrelativistic velocity. The beam enters a velocity selector in which the electric field E is oriented along the +y-direction and the magnetic field B is oriented along the +z-direction, as shown above. Which of the following gives the critical speed v_c at which the ion beam is not deflected as it moves through the velocity selector?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q176.svg",
    "options": [
      { "id": "A", "text": "v_c = EB" },
      { "id": "B", "text": "v_c = 1 / (EB)" },
      { "id": "C", "text": "v_c = B² / E" },
      { "id": "D", "text": "v_c = B / E" },
      { "id": "E", "text": "v_c = E / B" }
    ],
    "correctAnswers": ["E"],
    "explanation": "For an ion to travel through a velocity selector undeflected, the net Lorentz force must be zero: F = q(E + v × B) = 0. Balancing the downward electric force qE with the upward magnetic force q v_c B gives q E = q v_c B ⇒ v_c = E / B."
  },
  {
    "id": 177,
    "prompt": "Under ideal conditions, the electric and magnetic fields inside a superconductor are zero. Maxwell’s equations imply that which of the following must be true just outside the surface of the superconductor?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "B = 0" },
      { "id": "B", "text": "B is perpendicular to the surface." },
      { "id": "C", "text": "B is tangential to the surface." },
      { "id": "D", "text": "B is time independent." },
      { "id": "E", "text": "The magnetic flux is quantized." }
    ],
    "correctAnswers": ["C"],
    "explanation": "Maxwell's divergence equation ∇ · B = 0 dictates that the perpendicular (normal) component of the magnetic field across any interface is continuous: B_⊥,out = B_⊥,in. Since B = 0 inside an ideal superconductor (Meissner effect), B_⊥,in = 0, which enforces B_⊥,out = 0. Therefore, the magnetic field immediately outside the surface must have only tangential components."
  },
  {
    "id": 178,
    "prompt": "A positive charge, +q, oscillates up and down, as represented in the figure above. What is the direction of the Poynting vector S at point P ? (Assume P is located far to the right of +q.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q178.svg",
    "options": [
      { "id": "A", "text": "Toward the left" },
      { "id": "B", "text": "Toward the right" },
      { "id": "C", "text": "Toward the top of the page" },
      { "id": "D", "text": "Toward the bottom of the page" },
      { "id": "E", "text": "Into the page" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The Poynting vector S = (1/μ_0)(E × B) represents the directional energy flux of emitted radiation. An accelerating charge radiates electromagnetic waves radially outward in all directions away from the source. For observer point P lying far to the right of the oscillating dipole, the radiated wave travels rightward away from +q, so S points toward the right."
  },
  {
    "id": 179,
    "prompt": "A block with mass m_1 that slides on a frictionless table is attached by a massless string over a massless, frictionless pulley to a hanging ball with mass m_2, as shown in the figure above. The tension in the string must be",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q179.svg",
    "options": [
      { "id": "A", "text": "equal to m_2 g" },
      { "id": "B", "text": "greater than m_2 g" },
      { "id": "C", "text": "less than m_2 g" },
      { "id": "D", "text": "equal to m_1 g" },
      { "id": "E", "text": "greater than m_1 g" }
    ],
    "correctAnswers": ["C"],
    "explanation": "For the hanging mass m_2 accelerating downward with acceleration a, Newton's second law gives m_2 g - T = m_2 a ⇒ T = m_2(g - a). Because mass m_1 is on a frictionless horizontal table, the system undergoes a non-zero downward acceleration a = m_2 g / (m_1 + m_2) > 0. Since a > 0, T = m_2 g - m_2 a < m_2 g."
  },
  {
    "id": 180,
    "prompt": "Two planets of mass m revolve around a star of mass M in a circle of radius r , as shown in the figure above. The two planets are always on opposite sides of the star. The orbital period T of the planets is of the form T = 2π √(r³ / (G M')). What is the value of M' ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q180.svg",
    "options": [
      { "id": "A", "text": "M - m/2" },
      { "id": "B", "text": "M - m/4" },
      { "id": "C", "text": "M" },
      { "id": "D", "text": "M + m/4" },
      { "id": "E", "text": "M + m/2" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Consider one planet of mass m. It experiences two inward gravitational forces: one from the central star of mass M at distance r (F_star = G M m / r²), and one from the opposite planet of mass m at distance 2r (F_planet = G m² / (2r)² = G m² / 4r²). The total centripetal force is F_net = (G m / r²)(M + m/4) = m ω² r. Hence, ω² = G(M + m/4) / r³, and the period is T = 2π / ω = 2π √[r³ / G(M + m/4)]. Comparing gives M' = M + m/4."
  },
  {
    "id": 181,
    "prompt": "White light is normally incident on a puddle of water (index of refraction 1.33). A thin (500 nm) layer of oil (index of refraction 1.5) floats on the surface of the puddle. Of the following, the most strongly reflected wavelength is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "500 nm" },
      { "id": "B", "text": "550 nm" },
      { "id": "C", "text": "600 nm" },
      { "id": "D", "text": "650 nm" },
      { "id": "E", "text": "700 nm" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Light reflects at two interfaces: air (n=1.0) to oil (n=1.5), which undergoes a phase shift of π, and oil (n=1.5) to water (n=1.33), which undergoes no phase shift (since n_oil > n_water). Due to the net π phase difference, constructive interference occurs when 2 n_oil t = (m + ½) λ (m = 0, 1, 2...). With n_oil = 1.5 and t = 500 nm, 2 n_oil t = 1,500 nm. For m = 2: (2 + 0.5) λ = 2.5 λ = 1,500 nm ⇒ λ = 600 nm, which falls cleanly into the visible spectrum."
  },
  {
    "id": 182,
    "prompt": "As represented in the figure above, a light ray refracts from air into a rectangular block of plastic with an index of refraction n > 1. At a point on the side of the block, the ray partly reflects (at an angle of 60°) and partly refracts. The value of the angle α is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q182.svg",
    "options": [
      { "id": "A", "text": "30°" },
      { "id": "B", "text": "60°" },
      { "id": "C", "text": "cos⁻¹(n / 2)" },
      { "id": "D", "text": "sin⁻¹(n / 2)" },
      { "id": "E", "text": "tan⁻¹ n" }
    ],
    "correctAnswers": ["D"],
    "explanation": "By the geometry of the rectangular block, the reflection angle at the side is 60°, meaning the ray hits the vertical surface at angle 60° to the surface (or 30° to the horizontal normal). This establishes the internal refraction angle at the top horizontal boundary to be θ = 30° (or sinθ = 1/2). Applying Snell's law at the top air-plastic interface: 1 · sinα = n sinθ = n sin(30°) = n/2. Thus, α = sin⁻¹(n / 2)."
  },
  {
    "id": 183,
    "prompt": "Assume that the solar flux at Earth’s surface is 1,000 W/m² and that the sunlight is normal to a completely reflecting surface with an area of 3 m². What is the total radiation force exerted on the surface?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2 × 10⁻⁶ N" },
      { "id": "B", "text": "1 × 10⁻⁵ N" },
      { "id": "C", "text": "2 × 10⁻⁵ N" },
      { "id": "D", "text": "3 N" },
      { "id": "E", "text": "6 N" }
    ],
    "correctAnswers": ["C"],
    "explanation": "For a completely reflecting surface at normal incidence, radiation pressure is P_rad = 2 I / c. The total radiation force is F = P_rad A = 2 I A / c = 2(1,000 W/m²)(3 m²) / (3.0 × 10⁸ m/s) = 6,000 / (3.0 × 10⁸) = 2.0 × 10⁻⁵ N."
  },
  {
    "id": 184,
    "prompt": "The hydrogen lines observed in the spectrum of the quasar 3C9 are shifted so far into the red that their wavelengths are three times as long as those observed in the light from hydrogen atoms at rest in a laboratory on Earth. If it is assumed that the shift is entirely due to the relative motion of 3C9 and Earth, the relative speed of the quasar is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2c" },
      { "id": "B", "text": "c" },
      { "id": "C", "text": "0.8c" },
      { "id": "D", "text": "0.5c" },
      { "id": "E", "text": "0.3c" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The relativistic Doppler formula for radial recession is λ_obs / λ_0 = √[(1 + β) / (1 - β)], where β = v/c. Given λ_obs / λ_0 = 3: 3 = √[(1 + β)/(1 - β)] ⇒ 9 = (1 + β)/(1 - β) ⇒ 9 - 9β = 1 + β ⇒ 10β = 8 ⇒ β = 0.8, meaning the speed is 0.8c."
  },
  {
    "id": 185,
    "prompt": "Protons used in cancer therapy are typically accelerated to about 0.6c . How much work must be done on a particle of mass m in order for it to reach this speed, assuming it starts at rest?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.25 mc²" },
      { "id": "B", "text": "0.60 mc²" },
      { "id": "C", "text": "0.67 mc²" },
      { "id": "D", "text": "1.25 mc²" },
      { "id": "E", "text": "1.60 mc²" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The work required to accelerate a particle from rest equals its relativistic kinetic energy: W = (γ - 1) mc². For v = 0.6c, γ = 1 / √(1 - 0.60²) = 1 / 0.80 = 1.25. Therefore, W = (1.25 - 1) mc² = 0.25 mc²."
  },
  {
    "id": 186,
    "prompt": "The sign of the charge carriers in a doped semiconductor can be deduced by measuring which of the following properties?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Specific heat" },
      { "id": "B", "text": "Thermal conductivity" },
      { "id": "C", "text": "Electrical resistivity" },
      { "id": "D", "text": "Magnetic susceptibility" },
      { "id": "E", "text": "Hall coefficient" }
    ],
    "correctAnswers": ["E"],
    "explanation": "The sign of the Hall voltage and Hall coefficient R_H = 1 / (n q) depends directly on the sign of the majority charge carriers q. In an n-type semiconductor, electrons (q = -e) deflect to one side, yielding a negative Hall voltage, whereas in a p-type semiconductor, holes (q = +e) yield a positive Hall voltage."
  },
  {
    "id": 187,
    "prompt": "In the experimental setup above, two masses, m_1 and m_2, are connected by a massless string over a massless pulley. Mass m_1 slides on a frictionless surface. The values of the two masses can be measured, as well as the distance d and the speed of mass m_1 as it passes x_1 and again at x_2. The experiment can be used to do which of the following?\nI. Demonstrate momentum conservation\nII. Demonstrate energy conservation\nIII. Measure the value of the acceleration due to gravity",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q187.svg",
    "options": [
      { "id": "A", "text": "I only" },
      { "id": "B", "text": "II only" },
      { "id": "C", "text": "III only" },
      { "id": "D", "text": "I and II" },
      { "id": "E", "text": "II and III" }
    ],
    "correctAnswers": ["E"],
    "explanation": "Because an external gravitational force acts on m_2, momentum of the two-mass system is not conserved (eliminating I). However, the work done by gravity equals the loss of gravitational potential energy m_2 g d, which equals the gain in kinetic energy ½(m_1 + m_2)(v_2² - v_1²). Measuring these values directly tests mechanical energy conservation (II) and allows calculating g = (m_1 + m_2)(v_2² - v_1²) / (2 m_2 d) (III). Thus, II and III."
  },
  {
    "id": 188,
    "prompt": "An airplane drops a payload while traveling due north, parallel to the ground, at a constant speed of 100 m/s. If air resistance is neglected, what is the velocity of the payload relative to the plane 4.0 s after it is released?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "40 m/s down" },
      { "id": "C", "text": "80 m/s down" },
      { "id": "D", "text": "100 m/s north and 40 m/s down" },
      { "id": "E", "text": "100 m/s south and 40 m/s down" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In the horizontal direction, both airplane and payload continue moving northward at 100 m/s (neglecting air drag), so their relative horizontal velocity is 0. In the vertical direction, the airplane maintains level flight while the payload accelerates downward under gravity: v_y = g t ≈ (9.8 or 10 m/s²)(4.0 s) ≈ 40 m/s downward. Relative to the plane, the payload simply moves straight down at 40 m/s."
  },
  {
    "id": 189,
    "prompt": "Two balls, identical in every way except that one has twice the mass of the other, are dropped from rest from the same height so that they both reach terminal speed before hitting the ground. If it is assumed that the drag force varies like the speed squared, what is the ratio of the terminal speeds of the balls? (Note: The subscripts h and l denote the heavy and light masses, respectively.)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "v_h / v_l = 1" },
      { "id": "B", "text": "v_h / v_l = √2" },
      { "id": "C", "text": "v_h / v_l = 2" },
      { "id": "D", "text": "v_h / v_l = 2√2" },
      { "id": "E", "text": "v_h / v_l = 4" }
    ],
    "correctAnswers": ["B"],
    "explanation": "At terminal speed, gravitational force equals quadratic aerodynamic drag: m g = C v_term² ⇒ v_term = √(m g / C). Since both balls have identical geometry and size (same C), the terminal velocity scales with the square root of mass: v_h / v_l = √(m_h / m_l) = √2."
  },
  {
    "id": 190,
    "prompt": "One end of a horizontal, massless spring is attached to a wall. A mass of 0.30 kg is attached to the other end of the spring and rests on a table. The mass is displaced 0.030 m from its equilibrium position and released. It has a speed of 0.040 m/s as it passes through its equilibrium position. In the absence of friction, what is the total mechanical energy of the system?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "0.24 mJ" },
      { "id": "B", "text": "0.38 mJ" },
      { "id": "C", "text": "0.48 mJ" },
      { "id": "D", "text": "0.75 mJ" },
      { "id": "E", "text": "0.96 mJ" }
    ],
    "correctAnswers": ["A"],
    "explanation": "At the equilibrium position, spring potential energy is zero, so the total mechanical energy equals the maximum kinetic energy: E = ½ m v_max² = ½ (0.30 kg)(0.040 m/s)² = ½ (0.30)(0.0016) = 0.00024 J = 0.24 mJ."
  },
  {
    "id": 191,
    "prompt": "The diagram above shows a Carnot cycle for an ideal air conditioner, which is to cool a house on a hot summer day. The air conditioner absorbs heat at the lower temperature inside and pumps it to the environment at the higher temperature outside. Which of the following gives the ratio of the heat Q_bc absorbed in the house (i.e., between points b and c on the cycle) to the work done during the cycle?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q191.svg",
    "options": [
      { "id": "A", "text": "0" },
      { "id": "B", "text": "0.033" },
      { "id": "C", "text": "0.97" },
      { "id": "D", "text": "1.0" },
      { "id": "E", "text": "30." }
    ],
    "correctAnswers": ["E"],
    "explanation": "The coefficient of performance (COP) of an ideal Carnot refrigerator/air-conditioner is COP = Q_c / W = T_c / (T_h - T_c). Using T_c = 295 K and T_h = 305 K from the diagram: COP = 295 / (305 - 295) = 295 / 10 = 29.5 ≈ 30."
  },
  {
    "id": 192,
    "prompt": "A particle in an infinite square well with walls at x = 0 and x = L has energy E = 9 ℏ² π² / (2m L²). The probability that the particle is between x = 0 and x = L/6 is",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/36" },
      { "id": "B", "text": "1/6" },
      { "id": "C", "text": "1/3" },
      { "id": "D", "text": "1/2" },
      { "id": "E", "text": "1" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The energy corresponds to quantum state n = 3, whose wave function is ψ_3(x) = √(2/L) sin(3π x / L). The probability of finding the particle in [0, L/6] is P = ∫_0^{L/6} (2/L) sin²(3π x / L) dx. By change of variables u = 3π x / L (with du = 3π/L dx), when x ranges from 0 to L/6, u ranges from 0 to π/2. Thus P = (2/L)(L / 3π) ∫_0^{π/2} sin²u du = (2 / 3π) (π / 4) = 2/12 = 1/6."
  },
  {
    "id": 193,
    "prompt": "An inertial reference frame S' moves at constant speed with respect to a second inertial reference frame S. An observer in S measures the energy E, momentum p, and position x of a moving particle at time t for a particular event. An observer in S' measures energy E' , momentum p' , and position x' at time t' for the same moving particle at the same event. Which of the following is an expression of a relativistic invariant for this event?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "x = x'" },
      { "id": "B", "text": "p = p'" },
      { "id": "C", "text": "t = t'" },
      { "id": "D", "text": "E = E'" },
      { "id": "E", "text": "E² - (pc)² = E'² - (p'c)²" }
    ],
    "correctAnswers": ["E"],
    "explanation": "In special relativity, the Minkowski scalar product of the energy-momentum four-vector P^μ = (E/c, p) is an invariant in all inertial frames: P_μ P^μ = (E/c)² - p² = (m_0 c)². Multiplying by c² gives the Lorentz invariant E² - (pc)² = E'² - (p'c)² = (m_0 c²)²."
  },
  {
    "id": 194,
    "prompt": "Consider three identical, ideal capacitors. The first capacitor is charged to a voltage V_0 and then disconnected from the battery. The other two capacitors, initially uncharged and connected in series, are then connected across the first capacitor. What is the final voltage on the first capacitor?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "V_0 / 5" },
      { "id": "B", "text": "V_0 / 3" },
      { "id": "C", "text": "V_0 / 2" },
      { "id": "D", "text": "2V_0 / 3" },
      { "id": "E", "text": "V_0" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Initial charge isolated on the first capacitor is Q_tot = C V_0. The two identical capacitors in series have equivalent capacitance C_series = C/2. When connected in parallel across the first capacitor, total equivalent capacitance becomes C_eq = C + C/2 = 3/2 C. By charge conservation, final voltage is V_final = Q_tot / C_eq = (C V_0) / (1.5 C) = 2V_0 / 3."
  },
  {
    "id": 195,
    "prompt": "A charge of -5.0 µC is distributed uniformly around a ring 1.0 m in radius. A point charge of +3.0 µC is at the center of the ring. The work required to move the point charge 1.0 m in a direction normal to the plane of the ring is most nearly",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "40 mJ" },
      { "id": "B", "text": "80 mJ" },
      { "id": "C", "text": "100 mJ" },
      { "id": "D", "text": "140 mJ" },
      { "id": "E", "text": "270 mJ" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Potential along the ring's central axis at distance z is V(z) = k Q / √(R² + z²). At z = 0, V(0) = k Q / R. At z = 1.0 m, V(1) = k Q / √(1² + 1²) = k Q / √2. The work required by an external agent to displace charge q is W = q [V(1) - V(0)] = k q Q (1/√2 - 1). With k ≈ 9.0 × 10⁹ N·m²/C², q = +3.0 × 10⁻⁶ C, and Q = -5.0 × 10⁻⁶ C: k q Q = -0.135 J = -135 mJ. Since (1/√2 - 1) ≈ -0.293, W = (-135 mJ)(-0.293) ≈ +39.6 mJ ≈ 40 mJ."
  },
  {
    "id": 196,
    "prompt": "The magnetic field inside a long coil of wire (solenoid) has a certain magnitude and direction when the coil is air filled. If a diamagnetic material is inserted in the coil, how do the magnitude and direction of the magnetic field change?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Magnitude Increases; Direction Same" },
      { "id": "B", "text": "Magnitude Increases; Direction Opposite" },
      { "id": "C", "text": "Magnitude Decreases; Direction Same" },
      { "id": "D", "text": "Magnitude Decreases; Direction Opposite" },
      { "id": "E", "text": "Magnitude No change; Direction Opposite" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Diamagnetic materials acquire a weak induced magnetization opposing the applied magnetic field (permeability μ_r is slightly less than 1). Consequently, the net magnetic field inside the core slightly decreases in magnitude, but retains the same overall direction."
  },
  {
    "id": 197,
    "prompt": "The figure above shows two identical simple pendulums, each with mass m and suspended by a massless rod of length a. The pendulums are coupled by a massless spring of force constant k. The coordinates θ_i measure the angular displacements from vertical, as shown. Which of the following gives the Lagrangian for the system? (Assume small angular displacements θ_i .)",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q197.svg",
    "options": [
      { "id": "A", "text": "L = ½ m a² (θ̇_1² + θ̇_2²) - ½ m g a (θ_1² + θ_2²) - ½ k a² (θ_2 - θ_1)²" },
      { "id": "B", "text": "L = ½ m a² (θ̇_1² + θ̇_2²) + ½ m g a (θ_1² + θ_2²) - ½ k a² (θ_2 - θ_1)²" },
      { "id": "C", "text": "L = ½ m a² (θ̇_1² + θ̇_2²) - ½ m g a (θ_1² + θ_2²) + ½ k a² (θ_2 - θ_1)²" },
      { "id": "D", "text": "L = ½ m a² (θ̇_1² + θ̇_2²) + ½ m g a (θ_1² + θ_2²)" },
      { "id": "E", "text": "L = ½ m a² (θ̇_1² + θ̇_2²) + ½ k a² (θ_2 - θ_1)²" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The Lagrangian is L = T - V. Kinetic energy is T = ½ m(a θ̇_1)² + ½ m(a θ̇_2)² = ½ m a² (θ̇_1² + θ̇_2²). In the small-angle approximation, gravitational potential energy is V_grav ≈ ½ m g a θ_1² + ½ m g a θ_2² = ½ m g a (θ_1² + θ_2²). The spring stretch is Δx ≈ a(θ_2 - θ_1), so elastic potential energy is V_spring = ½ k a² (θ_2 - θ_1)². Therefore, L = T - V = ½ m a² (θ̇_1² + θ̇_2²) - ½ m g a (θ_1² + θ_2²) - ½ k a² (θ_2 - θ_1)²."
  },
  {
    "id": 198,
    "prompt": "The spacing between the parallel Bragg planes in a certain crystal is d . Electrons of fixed energy, corresponding to a given wavelength λ, are incident on the crystal. Which of the following is the minimal condition for strong reflection for at least two different angles?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "λ > d" },
      { "id": "B", "text": "λ > d/2" },
      { "id": "C", "text": "λ < 2d" },
      { "id": "D", "text": "λ < d" },
      { "id": "E", "text": "λ < d/2" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Bragg's diffraction law is 2 d sinθ = n λ. For the n-th reflection peak to exist, sinθ = n λ / (2d) must be ≤ 1. For at least two distinct angles to exist, both the first order (n = 1) and second order (n = 2) must be physically possible: sinθ_2 = 2 λ / (2d) = λ / d < 1 ⇒ λ < d."
  },
  {
    "id": 199,
    "prompt": "Consider an electron in the n = 4, l = 1 state in hydrogen. Which of the following final states can NOT be reached by an allowed transition?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "n = 3, l = 2" },
      { "id": "B", "text": "n = 3, l = 1" },
      { "id": "C", "text": "n = 3, l = 0" },
      { "id": "D", "text": "n = 2, l = 0" },
      { "id": "E", "text": "n = 1, l = 0" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Electric dipole selection rules for photon emission require Δl = ±1. A transition from an l = 1 state to another l = 1 state has Δl = 0, which is forbidden under electric dipole selection rules. Therefore, (n = 3, l = 1) cannot be reached."
  },
  {
    "id": 200,
    "prompt": "A room-temperature Mössbauer absorption spectrum for the 14.4 keV gamma-ray transition of ⁵⁷Fe is illustrated in the figure above. From the data, it can be deduced that the lifetime of the 3/2⁻ excited state is approximately",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "image": "/diagrams/q200.svg",
    "options": [
      { "id": "A", "text": "100 ms" },
      { "id": "B", "text": "100 µs" },
      { "id": "C", "text": "100 ns" },
      { "id": "D", "text": "100 ps" },
      { "id": "E", "text": "100 fs" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The full-width at half-maximum (FWHM) of the Mössbauer resonance dip is approximately Δv ≈ 0.2 mm/s = 2 × 10⁻⁴ m/s. The corresponding energy resonance width is Γ = E_γ (Δv / c) = (14.4 × 10³ eV)(2 × 10⁻⁴ m/s) / (3.0 × 10⁸ m/s) ≈ 10⁻⁸ eV. From the Heisenberg uncertainty relation τ = ℏ / Γ: with ℏ ≈ 6.58 × 10⁻¹⁶ eV·s, τ ≈ (6.58 × 10⁻¹⁶ eV·s) / 10⁻⁸ eV ≈ 6.6 × 10⁻⁸ s ≈ 100 ns."
  }
];
