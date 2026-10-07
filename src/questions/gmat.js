export const gmatQuestions = [
  {
    "id": 1,
    "prompt": "If x is an integer and (x^2 - 5x + 6) / (x - 2) = 0, which of the following could be the value of x?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "2" },
      { "id": "B", "text": "3" },
      { "id": "C", "text": "-2" },
      { "id": "D", "text": "-3" },
      { "id": "E", "text": "6" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Factoring the numerator gives (x - 2)(x - 3). Thus the expression is (x - 2)(x - 3) / (x - 2). Note that x cannot equal 2 because that would make the denominator zero. For x != 2, the expression simplifies to x - 3 = 0, which yields x = 3."
  },
  {
    "id": 2,
    "prompt": "A merchant purchases a coat for $80 and marks up the price by 50%. During a sale, she discounts the marked price by 20%. What is her profit on the sale of the coat?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "$12" },
      { "id": "B", "text": "$16" },
      { "id": "C", "text": "$20" },
      { "id": "D", "text": "$24" },
      { "id": "E", "text": "$28" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Cost price = $80. Markup of 50%: Marked Price = 80 * 1.50 = $120. Sale discount of 20%: Selling Price = 120 * (1 - 0.20) = $96. Profit = Selling Price - Cost Price = 96 - 80 = $16."
  },
  {
    "id": 3,
    "prompt": "Is the integer n divisible by 6?\n(1) n is divisible by 3\n(2) n is divisible by 4",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["C"],
    "explanation": "For an integer to be divisible by 6, it must be divisible by both 2 and 3. Statement (1) alone tells us n is divisible by 3, but n could be odd (e.g. 9) or even (e.g. 12), so not sufficient. Statement (2) alone tells us n is divisible by 4 (hence divisible by 2), but n might not be divisible by 3 (e.g. 4 or 8), so not sufficient. Combining (1) and (2): n is divisible by both 3 and 4, which means n is a multiple of LCM(3, 4) = 12. Since every multiple of 12 is divisible by 6, both statements together are sufficient."
  },
  {
    "id": 4,
    "prompt": "If a train travels at an average speed of 60 miles per hour for the first 2 hours of a trip and 45 miles per hour for the next 3 hours, what is its average speed for the entire 5-hour trip?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "50.5 mph" },
      { "id": "B", "text": "51.0 mph" },
      { "id": "C", "text": "52.5 mph" },
      { "id": "D", "text": "54.0 mph" },
      { "id": "E", "text": "55.0 mph" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Total distance = (60 mph * 2 hrs) + (45 mph * 3 hrs) = 120 + 135 = 255 miles. Total time = 2 + 3 = 5 hours. Average speed = 255 / 5 = 51.0 mph."
  },
  {
    "id": 5,
    "prompt": "Critical Reasoning: A major publishing company reported that sales of printed books increased by 8% this year, while sales of digital e-books remained flat. The company's executives concluded that consumer preference is shifting decisively back toward traditional print media over digital formats.\n\nWhich of the following, if true, most seriously weakens the executives' conclusion?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "The prices of e-books published by the company were lower on average than the prices of its printed books." },
      { "id": "B", "text": "A nationwide supply shortage of electronic reading devices prevented many prospective digital readers from purchasing new e-books this year." },
      { "id": "C", "text": "Several competing publishers also experienced moderate increases in print book sales." },
      { "id": "D", "text": "The company invested more in social media marketing for printed books than for digital books." },
      { "id": "E", "text": "Most consumers who read e-books also read printed books on occasion." }
    ],
    "correctAnswers": ["B"],
    "explanation": "The executives conclude that a change in consumer preference caused the sales discrepancy. If a device hardware shortage temporarily constrained digital reading (Option B), the flat sales reflect a supply-chain bottleneck rather than an authentic shift in consumer preference, seriously weakening the argument."
  },
  {
    "id": 6,
    "prompt": "If x, y, and z are positive integers such that 2x = 3y = 5z, what is the least possible value of x + y + z?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "30" },
      { "id": "B", "text": "31" },
      { "id": "C", "text": "45" },
      { "id": "D", "text": "60" },
      { "id": "E", "text": "62" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Let 2x = 3y = 5z = k. For x, y, z to be integers, k must be a multiple of LCM(2, 3, 5) = 30. For the least positive value, let k = 30. Then x = 15, y = 10, z = 6. The sum x + y + z = 15 + 10 + 6 = 31."
  },
  {
    "id": 7,
    "prompt": "In a certain school, 40% of the students play soccer, and 50% play basketball. If 20% of the students play both soccer and basketball, what percentage of the students play neither sport?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "10%" },
      { "id": "B", "text": "20%" },
      { "id": "C", "text": "30%" },
      { "id": "D", "text": "40%" },
      { "id": "E", "text": "50%" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Using the union formula: P(Soccer U Basketball) = P(Soccer) + P(Basketball) - P(Both) = 40% + 50% - 20% = 70%. The percentage of students playing neither sport is 100% - 70% = 30%."
  },
  {
    "id": 8,
    "prompt": "Sentence Correction: Although the company's profits increased significantly last quarter, neither the CEO nor the board members was willing to guarantee year-end employee bonuses.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "neither the CEO nor the board members was willing" },
      { "id": "B", "text": "neither the CEO nor the board members were willing" },
      { "id": "C", "text": "neither the board members nor the CEO were willing" },
      { "id": "D", "text": "the CEO and the board members was not willing" },
      { "id": "E", "text": "neither the CEO or the board members were willing" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In 'neither... nor...' constructions, the verb agrees with the subject closest to it. Here, 'the board members' is plural and is closest to the verb, so the plural verb 'were' is required. Hence 'neither the CEO nor the board members were willing' is grammatically correct."
  },
  {
    "id": 9,
    "prompt": "If 3^(2x - 1) = 27^(x - 2), what is the value of x?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "3" },
      { "id": "B", "text": "4" },
      { "id": "C", "text": "5" },
      { "id": "D", "text": "6" },
      { "id": "E", "text": "7" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Rewrite 27 as 3^3: 3^(2x - 1) = (3^3)^(x - 2) = 3^(3x - 6). Equating exponents: 2x - 1 = 3x - 6. Subtracting 2x from both sides gives -1 = x - 6, so x = 5."
  },
  {
    "id": 10,
    "prompt": "What is the probability of rolling a sum of 8 when two standard fair six-sided dice are rolled simultaneously?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/6" },
      { "id": "B", "text": "5/36" },
      { "id": "C", "text": "1/9" },
      { "id": "D", "text": "7/36" },
      { "id": "E", "text": "1/12" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Total possible outcomes when rolling two dice = 6 * 6 = 36. Outcomes that sum to 8: (2,6), (3,5), (4,4), (5,3), (6,2). That is 5 favorable outcomes. Probability = 5/36."
  },
  {
    "id": 11,
    "prompt": "Data Sufficiency: What is the value of x + y?\n(1) 2x + 2y = 14\n(2) x - y = 3",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["A"],
    "explanation": "Statement (1): 2x + 2y = 14. Dividing both sides by 2 gives x + y = 7. Thus statement (1) alone directly answers the question. Statement (2): x - y = 3 tells us the difference, not the sum. Therefore, Statement (1) alone is sufficient."
  },
  {
    "id": 12,
    "prompt": "If a right circular cylinder has height h and base radius r, and its height is doubled while its radius is halved, what happens to its volume?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "It quadruples." },
      { "id": "B", "text": "It doubles." },
      { "id": "C", "text": "It remains unchanged." },
      { "id": "D", "text": "It is halved." },
      { "id": "E", "text": "It is quartered." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Original volume V = pi * r^2 * h. New radius = r/2, new height = 2h. New volume V' = pi * (r/2)^2 * (2h) = pi * (r^2 / 4) * 2h = (1/2) * pi * r^2 * h = V / 2. Thus, the volume is halved."
  },
  {
    "id": 13,
    "prompt": "A box contains 5 red balls, 4 blue balls, and 3 green balls. If two balls are drawn at random without replacement, what is the probability that both balls are red?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "5/33" },
      { "id": "B", "text": "5/36" },
      { "id": "C", "text": "25/144" },
      { "id": "D", "text": "1/6" },
      { "id": "E", "text": "10/33" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Total balls = 5 + 4 + 3 = 12. Probability first ball is red = 5/12. Probability second ball is red = 4/11. Combined probability = (5/12) * (4/11) = 20 / 132 = 5/33."
  },
  {
    "id": 14,
    "prompt": "Critical Reasoning: In City X, the installation of red-light safety cameras at major intersections led to a 30% reduction in broadside collision accidents. However, the number of rear-end collisions at the same intersections increased by 25%. Which of the following best resolves the apparent discrepancy?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Drivers approaching intersections with cameras brake abruptly to avoid running yellow lights, causing trailing cars to strike them from behind." },
      { "id": "B", "text": "City X increased traffic fines for running red lights simultaneously with the camera installation." },
      { "id": "C", "text": "Intersections without cameras saw no significant change in traffic accident rates." },
      { "id": "D", "text": "More drivers now choose alternate routes that do not have red-light cameras." },
      { "id": "E", "text": "Pedestrian safety improved moderately at all intersections equipped with cameras." }
    ],
    "correctAnswers": ["A"],
    "explanation": "Option A explains why rear-end collisions increased specifically at camera-equipped intersections: drivers brake suddenly to avoid fines, creating rear-end hazards for inattentive trailing vehicles while successfully eliminating red-light runners and broadside collisions."
  },
  {
    "id": 15,
    "prompt": "If x > 0 and x^4 - 10x^2 + 9 = 0, what are the possible values of x?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1 and 3" },
      { "id": "B", "text": "1 and 9" },
      { "id": "C", "text": "-1, 1, -3, and 3" },
      { "id": "D", "text": "2 and 4" },
      { "id": "E", "text": "3 and 9" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Let u = x^2. The equation becomes u^2 - 10u + 9 = 0. Factoring gives (u - 1)(u - 9) = 0, so u = 1 or u = 9. Since u = x^2, x^2 = 1 => x = +-1, and x^2 = 9 => x = +-3. Because x > 0, the only valid solutions are x = 1 and x = 3."
  },
  {
    "id": 16,
    "prompt": "A company has 120 employees, of whom 70 are full-time and 50 are part-time. If 40% of the full-time employees and 60% of the part-time employees participate in the voluntary savings plan, what percentage of all employees participate in the plan?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "45%" },
      { "id": "B", "text": "48.33%" },
      { "id": "C", "text": "50%" },
      { "id": "D", "text": "52.5%" },
      { "id": "E", "text": "55%" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Full-time participants = 0.40 * 70 = 28. Part-time participants = 0.60 * 50 = 30. Total participants = 28 + 30 = 58. Percentage = (58 / 120) * 100% = 48.33%."
  },
  {
    "id": 17,
    "prompt": "Sentence Correction: Due to the new government tariff, the price of imported steel has risen sharper than domestic manufacturers anticipated.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "has risen sharper than domestic manufacturers anticipated" },
      { "id": "B", "text": "has risen more sharply than domestic manufacturers anticipated" },
      { "id": "C", "text": "rose sharper than domestic manufacturers anticipated" },
      { "id": "D", "text": "have risen more sharply than domestic manufacturers anticipated" },
      { "id": "E", "text": "has risen sharp than domestic manufacturers anticipated" }
    ],
    "correctAnswers": ["B"],
    "explanation": "An adverb is required to modify the verb 'has risen'. 'Sharply' is the adverb form, and its comparative is 'more sharply'. 'The price' is singular, so 'has risen' is correct. Option B is correct."
  },
  {
    "id": 18,
    "prompt": "Data Sufficiency: If k is a positive constant, is x > y?\n(1) x + k > y + k\n(2) x / k > y / k",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["D"],
    "explanation": "From (1): Subtracting k from both sides gives x > y (sufficient). From (2): Since k is given to be positive, multiplying both sides by k does not flip the inequality sign, yielding x > y (sufficient). Thus, EACH statement ALONE is sufficient."
  },
  {
    "id": 19,
    "prompt": "Working alone at its constant rate, Machine A produces 60 widgets in 3 hours. Working alone at its constant rate, Machine B produces 60 widgets in 2 hours. How many hours will it take both machines working together at their respective rates to produce 100 widgets?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1.5 hours" },
      { "id": "B", "text": "2.0 hours" },
      { "id": "C", "text": "2.4 hours" },
      { "id": "D", "text": "2.5 hours" },
      { "id": "E", "text": "3.0 hours" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Rate of Machine A = 60 / 3 = 20 widgets/hr. Rate of Machine B = 60 / 2 = 30 widgets/hr. Combined rate = 20 + 30 = 50 widgets/hr. Time to produce 100 widgets = 100 / 50 = 2.0 hours."
  },
  {
    "id": 20,
    "prompt": "If the average (arithmetic mean) of 5 numbers is 18, and four of the numbers are 12, 15, 20, and 25, what is the fifth number?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "16" },
      { "id": "B", "text": "18" },
      { "id": "C", "text": "19" },
      { "id": "D", "text": "21" },
      { "id": "E", "text": "23" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Sum of 5 numbers = 5 * 18 = 90. Sum of the four known numbers = 12 + 15 + 20 + 25 = 72. Fifth number = 90 - 72 = 18."
  },
  {
    "id": 21,
    "prompt": "A committee of 3 people is to be chosen from a group of 4 men and 5 women. If the committee must include at least one man and at least one woman, how many different committees can be formed?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "60" },
      { "id": "B", "text": "64" },
      { "id": "C", "text": "70" },
      { "id": "D", "text": "74" },
      { "id": "E", "text": "80" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Total number of committees of 3 chosen from 9 people (4 + 5) is 9C3 = (9 * 8 * 7) / (3 * 2 * 1) = 84. The committees with no men (all 3 women) is 5C3 = 10. The committees with no women (all 3 men) is 4C3 = 4. Committees with at least one man and at least one woman = 84 - 10 - 4 = 70."
  },
  {
    "id": 22,
    "prompt": "Data Sufficiency: If x is a real number, is |x| < 3?\n(1) x^2 < 9\n(2) x > -3",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["A"],
    "explanation": "The condition |x| < 3 is equivalent to -3 < x < 3. Statement (1): x^2 < 9 means -3 < x < 3, so |x| < 3 is definitively true. Sufficient. Statement (2): x > -3 allows x = 1 (where |x| < 3) or x = 5 (where |x| >= 3). Not sufficient. Thus, Statement (1) alone is sufficient."
  },
  {
    "id": 23,
    "prompt": "Critical Reasoning: Company ABC's revenue from mobile application sales grew by 40% over the last fiscal year, while its research and development costs remained completely unchanged. Therefore, Company ABC's operating margin for this fiscal year must have increased.\n\nWhich of the following is an assumption required by the argument above?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Revenue from sources other than mobile applications did not decrease drastically enough to offset the growth in mobile revenue." },
      { "id": "B", "text": "Company ABC released more new mobile applications this year than it did in any previous year." },
      { "id": "C", "text": "Competitors of Company ABC experienced lower growth rates in mobile application revenue during the same period." },
      { "id": "D", "text": "The market price per share of Company ABC's common stock increased in proportion to its revenue growth." },
      { "id": "E", "text": "Company ABC did not lay off any software engineering personnel during the past fiscal year." }
    ],
    "correctAnswers": ["A"],
    "explanation": "Operating margin depends on total company revenue and total operating costs. If non-mobile revenue experienced a steep decline, total revenue and operating margin could decrease despite the growth in mobile applications. The author must assume non-mobile revenue did not suffer a catastrophic collapse that cancels out mobile growth."
  },
  {
    "id": 24,
    "prompt": "In the standard xy-coordinate plane, a circle has its center at the origin (0, 0) and passes through the point (3, 4). What is the area of this circle?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "5π" },
      { "id": "B", "text": "10π" },
      { "id": "C", "text": "20π" },
      { "id": "D", "text": "25π" },
      { "id": "E", "text": "50π" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The radius r of the circle is the distance from the origin (0, 0) to (3, 4): r = sqrt((3 - 0)^2 + (4 - 0)^2) = sqrt(9 + 16) = sqrt(25) = 5. The area of the circle is π * r^2 = π * 5^2 = 25π."
  },
  {
    "id": 25,
    "prompt": "Data Sufficiency: If m and n are integers, is mn even?\n(1) m + n is odd\n(2) m - n is odd",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Statement (1): If m + n is odd, one integer must be even and the other must be odd. The product of an even integer and an odd integer is always even. Thus mn is even (sufficient). Statement (2): If m - n is odd, again one integer is even and the other is odd, so mn must be even (sufficient). EACH statement ALONE is sufficient."
  },
  {
    "id": 26,
    "prompt": "A chemist has 40 liters of a solution that is 20% acid by volume. How many liters of pure water (0% acid) must be added to dilute the solution so that it becomes 16% acid by volume?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "5 liters" },
      { "id": "B", "text": "8 liters" },
      { "id": "C", "text": "10 liters" },
      { "id": "D", "text": "12 liters" },
      { "id": "E", "text": "15 liters" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Initial acid amount = 40 * 0.20 = 8 liters. Let w be the volume of water added. The total volume becomes 40 + w. We require: 8 / (40 + w) = 0.16 = 4/25. Cross multiplying: 8 * 25 = 4(40 + w) => 200 = 160 + 4w => 4w = 40 => w = 10 liters."
  },
  {
    "id": 27,
    "prompt": "Critical Reasoning: A clinical study found that participants who drank at least two cups of green tea daily experienced a 20% lower incidence of cardiovascular disease compared to non-drinkers. The researchers concluded that polyphenols in green tea provide active cardiovascular protection.\n\nWhich of the following, if true, most strengthens the researchers' conclusion?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Green tea contains substantially less caffeine than typical brewed coffee." },
      { "id": "B", "text": "In controlled laboratory tests on human vascular tissue, the polyphenols found in green tea directly inhibited the oxidation of LDL cholesterol, a primary cause of arterial plaque." },
      { "id": "C", "text": "Participants in the study lived in geographic regions where tea consumption is culturally widespread." },
      { "id": "D", "text": "Worldwide commercial sales of green tea have steadily increased over the past decade." },
      { "id": "E", "text": "Participants who consumed green tea also reported consuming higher amounts of citrus fruits." }
    ],
    "correctAnswers": ["B"],
    "explanation": "Option B provides a direct biological mechanism linking green tea polyphenols to cardiovascular disease prevention (inhibiting LDL oxidation), establishing causality and strongly reinforcing the researchers' hypothesis."
  },
  {
    "id": 28,
    "prompt": "Sentence Correction: The enterprise software platform is designed not only to streamline daily administrative workflows, but also helping corporate executives monitor team productivity in real time.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "but also helping corporate executives monitor team productivity in real time" },
      { "id": "B", "text": "but also to help corporate executives monitor team productivity in real time" },
      { "id": "C", "text": "but also for helping corporate executives monitor team productivity in real time" },
      { "id": "D", "text": "and also to help corporate executives monitor team productivity in real time" },
      { "id": "E", "text": "and helping corporate executives monitor team productivity in real time" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The correlative conjunction 'not only X but also Y' demands parallel grammatical structures. Since 'not only' is followed by the infinitive 'to streamline', 'but also' must be followed by an infinitive 'to help'. Hence Option B is correct."
  },
  {
    "id": 29,
    "prompt": "The first term of an arithmetic sequence is 7, and each subsequent term is obtained by adding 4 to the preceding term. What is the 25th term of this sequence?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "99" },
      { "id": "B", "text": "103" },
      { "id": "C", "text": "105" },
      { "id": "D", "text": "107" },
      { "id": "E", "text": "111" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In an arithmetic progression, the n-th term is given by a_n = a_1 + (n - 1) * d. Here, a_1 = 7, d = 4, and n = 25. Thus, a_25 = 7 + (25 - 1) * 4 = 7 + 24 * 4 = 7 + 96 = 103."
  },
  {
    "id": 30,
    "prompt": "Data Sufficiency: A set consists of five distinct positive integers: {3, 7, 9, x, y}. What is the median of the set?\n(1) x + y = 14\n(2) Both x and y are greater than 9",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient." },
      { "id": "B", "text": "Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient." },
      { "id": "C", "text": "BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient." },
      { "id": "D", "text": "EACH statement ALONE is sufficient." },
      { "id": "E", "text": "Statements (1) and (2) TOGETHER are NOT sufficient." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Statement (1): Since x and y are distinct positive integers different from {3, 7, 9} and sum to 14, one must be strictly less than 7 and one strictly greater than 7 (e.g. 1 and 13, 2 and 12, 4 and 10, or 6 and 8). When ordered, two values are < 7 and two values are > 7, so 7 is always the 3rd (median) value (sufficient). Statement (2): If both x > 9 and y > 9, the ordered set is 3, 7, 9, and then {x, y}. The middle value is definitively 9 (sufficient). Thus, EACH statement ALONE is sufficient."
  },
  {
    "id": 31,
    "prompt": "The table below represents the number of cars sold by four dealers P, Q, R and S in six months of a given year:\n\nMonths | P | Q | R | S | Total\nJanuary | 102 | 92 | 95 | 107 | 396\nFebruary | 94 | 96 | 104 | 106 | 400\nMarch | 85 | 94 | 100 | 90 | 369\nApril | 108 | 97 | 99 | 96 | 400\nMay | 98 | 102 | 100 | 89 | 389\nJune | 95 | 108 | 102 | 91 | 396\n\nWhat is the ratio of the total number of cars sold by dealer P in February, April and May to the total number of cars sold by dealer S in March, May and June?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "15 : 13" },
      { "id": "B", "text": "20 : 27" },
      { "id": "C", "text": "6 : 5" },
      { "id": "D", "text": "10 : 9" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Cars sold by dealer P in Feb, Apr, May = 94 + 108 + 98 = 300.\nCars sold by dealer S in Mar, May, June = 90 + 89 + 91 = 270.\nRequired ratio = 300 : 270 = 10 : 9."
  },
  {
    "id": 32,
    "prompt": "Based on the car sales table for dealers P, Q, R, and S:\nThe total number of cars sold by dealer P during February to June is what percent (%) more than the total cars sold by all the dealers in June?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "17.5%" },
      { "id": "B", "text": "25.3%" },
      { "id": "C", "text": "24.4%" },
      { "id": "D", "text": "21.2%" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Total cars sold by dealer P from Feb to June = 94 + 85 + 108 + 98 + 95 = 480.\nTotal cars sold by all dealers in June = 396.\nPercentage more = ((480 - 396) / 396) * 100 = (84 / 396) * 100 ≈ 21.2%."
  },
  {
    "id": 33,
    "prompt": "Based on the car sales table for dealers P, Q, R, and S:\nThe total number of cars sold by dealer Q in April, May and June is what percent of the total number of cars sold by all dealers in February and April?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "50 7/8%" },
      { "id": "B", "text": "43 6/7%" },
      { "id": "C", "text": "48 5/7%" },
      { "id": "D", "text": "38 3/8%" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Total cars sold by Q in April, May, June = 97 + 102 + 108 = 307.\nTotal cars sold by all dealers in Feb and April = 400 + 400 = 800.\nRequired percentage = (307 / 800) * 100 = 38.375% = 38 3/8%."
  },
  {
    "id": 34,
    "prompt": "The digit in the unit's place of the resulting number of the expression 48 * (234)^100 + (234)^101 is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "6" },
      { "id": "B", "text": "2" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "0" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Units digit of 4^even is 6, and 4^odd is 4. Thus (234)^100 ends in 6, and (234)^101 ends in 4. The units digit of 48 * (234)^100 is the units digit of 8 * 6 = 48, which is 8. Adding the units digit of (234)^101 (4): 8 + 4 = 12, so the units digit is 2."
  },
  {
    "id": 35,
    "prompt": "If A + 1 / (B + 1 / (C - 9)) = 29/5, where A, B, and C are positive integers, then the value of A + B + C is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "17" },
      { "id": "B", "text": "12" },
      { "id": "C", "text": "19" },
      { "id": "D", "text": "28" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Express 29/5 as a continued fraction: 29/5 = 5 + 4/5 = 5 + 1 / (5/4) = 5 + 1 / (1 + 1/4). Comparing with the given form: A = 5, B = 1, and C - 9 = 4 => C = 13. Therefore, A + B + C = 5 + 1 + 13 = 19."
  },
  {
    "id": 36,
    "prompt": "Consider the following three geometric figures:\n(I) A rectangle with length 9 cm and breadth 4 cm\n(II) A square with side length 6 cm\n(III) A right-angled triangle with base 8 cm and height 9 cm\n\nStatements:\nA. The areas of three figures are different\nB. The areas of three figures are equal\nC. The perimeters of three figures are equal\nD. Perimeters of figures (I) and (II) are equal\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A and C only" },
      { "id": "B", "text": "B and D only" },
      { "id": "C", "text": "B only" },
      { "id": "D", "text": "B and C only" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Area of (I) = 9 * 4 = 36 cm²; Perimeter = 2 * (9 + 4) = 26 cm.\nArea of (II) = 6² = 36 cm²; Perimeter = 4 * 6 = 24 cm.\nArea of (III) = 1/2 * 8 * 9 = 36 cm²; Hypotenuse = √(8² + 9²) = √145 ≈ 12.04 cm, Perimeter ≈ 29.04 cm.\nAll three areas are equal to 36 cm² (Statement B is true). The perimeters are all different. Hence, only statement B is correct."
  },
  {
    "id": 37,
    "prompt": "Even after reducing the marked price of an item by Rs. 32, a shopkeeper makes a profit of 15%. If the cost price is Rs. 320, what percentage of profit would he have made if he had sold the item at the marked price?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "25%" },
      { "id": "B", "text": "30%" },
      { "id": "C", "text": "27%" },
      { "id": "D", "text": "28%" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Cost Price = Rs. 320. Selling Price with 15% profit = 1.15 * 320 = Rs. 368. Marked Price = Selling Price + Discount = 368 + 32 = Rs. 400. Profit at Marked Price = ((400 - 320) / 320) * 100 = (80 / 320) * 100 = 25%."
  },
  {
    "id": 38,
    "prompt": "Raman can do a piece of work in 16 days. Satish can do the same work in 8 days while Ashok can do it in 32 days. All of them worked together when they started, but Satish left after 2 days. Raman left 3 days before the completion of work. How long did it take to complete the entire work?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "8 days" },
      { "id": "B", "text": "10 days" },
      { "id": "C", "text": "12 days" },
      { "id": "D", "text": "14 days" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Let total work = LCM(16, 8, 32) = 32 units. Work rates per day: Raman = 2 units, Satish = 4 units, Ashok = 1 unit. Let the work take X days. Satish worked 2 days (2 * 4 = 8 units). Raman worked (X - 3) days: 2*(X - 3). Ashok worked X days: 1*X. Total work = 8 + 2(X - 3) + X = 3X + 2 = 32 => 3X = 30 => X = 10 days."
  },
  {
    "id": 39,
    "prompt": "Four different electronic devices make a beep after every 30 minutes, 1 hour, 1½ hour and 1 hour 45 minutes, respectively. All these devices beeped together at 12 noon. They will again beep together at:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "12 midnight" },
      { "id": "B", "text": "3 AM" },
      { "id": "C", "text": "6 AM" },
      { "id": "D", "text": "9 AM" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Periods in minutes: 30, 60, 90, and 105. LCM(30, 60, 90, 105) = 1260 minutes = 21 hours. Beeping together at 12:00 noon + 21 hours = 9:00 AM next morning."
  },
  {
    "id": 40,
    "prompt": "Sudhir purchased a chair with three successive discounts of 20%, 12.5% and 5%. The equivalent single discount is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "33.5%" },
      { "id": "B", "text": "30%" },
      { "id": "C", "text": "32%" },
      { "id": "D", "text": "35%" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Remaining price fraction = (1 - 0.20) * (1 - 0.125) * (1 - 0.05) = 0.80 * 0.875 * 0.95 = 0.70 * 0.95 = 0.665. Single equivalent discount = (1 - 0.665) * 100 = 33.5%."
  },
  {
    "id": 41,
    "prompt": "In Kendriya Vidyalaya, Ujjain, 20 percent of students are athletes. In Navodaya Vidyalaya, Ujjain, 25 percent of students are athletes. If Navodaya Vidyalaya has 60% more students than Kendriya Vidyalaya, then the number of athletes in Navodaya Vidyalaya is what percent of the athletes of Kendriya Vidyalaya?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "50%" },
      { "id": "B", "text": "100%" },
      { "id": "C", "text": "200%" },
      { "id": "D", "text": "400%" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Let Kendriya Vidyalaya have 100 students => Athletes = 20. Navodaya Vidyalaya has 100 * 1.6 = 160 students => Athletes = 25% of 160 = 40. Ratio = (40 / 20) * 100 = 200%."
  },
  {
    "id": 42,
    "prompt": "Consider the following statements about numbers:\nA. There exists a smallest natural number.\nB. There exists a largest natural number.\nC. Every rational number is also a real number.\nD. Between two consecutive natural numbers, there is always a natural number.\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A only" },
      { "id": "B", "text": "C only" },
      { "id": "C", "text": "B and D only" },
      { "id": "D", "text": "A and C only" }
    ],
    "correctAnswers": ["D"],
    "explanation": "1 is the smallest natural number (Statement A is true). The set of natural numbers is infinite, so no largest exists (B is false). Every rational number is real (C is true). Consecutive natural numbers n and n+1 have no natural number between them (D is false). Thus, A and C only are true."
  },
  {
    "id": 43,
    "prompt": "If the height and radius of a right circular cylinder are equal and its volume is 176/7 cm³, then find the radius (take π = 22/7):",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "4 cm" },
      { "id": "B", "text": "8 cm" },
      { "id": "C", "text": "2 cm" },
      { "id": "D", "text": "5 cm" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Volume = π * r² * h. Since h = r, Volume = π * r³ = (22/7) * r³ = 176/7. Thus, 22 * r³ = 176 => r³ = 8 => r = 2 cm."
  },
  {
    "id": 44,
    "prompt": "In right-angled triangle ABC, ∠BAC = 90°. Altitude AD is drawn perpendicular to hypotenuse BC (∠ADC = 90°). If DC = 2 units and AC = 4 units, what is the length of hypotenuse BC?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "8 units" },
      { "id": "B", "text": "10 units" },
      { "id": "C", "text": "6√3 units" },
      { "id": "D", "text": "12√3 units" }
    ],
    "correctAnswers": ["A"],
    "explanation": "By the geometric mean theorem in right triangle ABC: AC² = DC * BC. 4² = 2 * BC => 16 = 2 * BC => BC = 8 units."
  },
  {
    "id": 45,
    "prompt": "A person buys two watches for a total sum of Rs. 1,000. He sells one watch at a loss of 5% and the other at a gain of 20% and on the whole, he gains Rs. 50. The cost prices of the two watches are:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Rs. 700, Rs. 300" },
      { "id": "B", "text": "Rs. 500, Rs. 500" },
      { "id": "C", "text": "Rs. 600, Rs. 400" },
      { "id": "D", "text": "Rs. 450, Rs. 550" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Let cost prices be x and y. x + y = 1000. Net gain: -0.05x + 0.20y = 50 => -x + 4y = 1000. Adding both equations gives 5y = 2000 => y = 400 and x = 600. The cost prices are Rs. 600 and Rs. 400."
  },
  {
    "id": 46,
    "prompt": "85 litres of a mixture contain milk and water in the ratio 27:7. How much more water is required to be added to the mixture so that the resulting mixture contains milk and water in the ratio 3:1?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "6 litres" },
      { "id": "B", "text": "8 litres" },
      { "id": "C", "text": "4 litres" },
      { "id": "D", "text": "5 litres" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Initial mixture: Milk = (27/34) * 85 = 67.5 L, Water = (7/34) * 85 = 17.5 L. In new ratio 3:1, milk remains 67.5 L. Water needed = 67.5 / 3 = 22.5 L. Water to add = 22.5 - 17.5 = 5 litres."
  },
  {
    "id": 47,
    "prompt": "The value of the following sum of terms:\n5/(2²·3²) + 7/(3²·4²) + 9/(4²·5²) + 11/(5²·6²) + 13/(6²·7²) + 15/(7²·8²) is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1/64" },
      { "id": "B", "text": "15/64" },
      { "id": "C", "text": "15/16" },
      { "id": "D", "text": "7/64" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Notice (2n + 1) / (n²(n+1)²) = 1/n² - 1/(n+1)². The sum telescopes: (1/2² - 1/3²) + (1/3² - 1/4²) + ... + (1/7² - 1/8²) = 1/2² - 1/8² = 1/4 - 1/64 = 15/64."
  },
  {
    "id": 48,
    "prompt": "The sum of three consecutive odd numbers is always divisible by:\nA. 2\nB. 3\nC. 5\nD. 6\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A and B only" },
      { "id": "B", "text": "B and D only" },
      { "id": "C", "text": "A and C only" },
      { "id": "D", "text": "B only" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Let the numbers be 2n+1, 2n+3, 2n+5. Their sum = 6n + 9 = 3(2n + 3). Since 2n+3 is always odd, the sum is an odd multiple of 3. Therefore, it is always divisible by 3, but never by 2 or 6. Hence B only."
  },
  {
    "id": 49,
    "prompt": "Four coins are tossed simultaneously. What is the probability that two consecutive heads never occur together?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "7/8" },
      { "id": "B", "text": "1/4" },
      { "id": "C", "text": "1/3" },
      { "id": "D", "text": "1/2" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Total outcomes = 2⁴ = 16. Favorable outcomes with no consecutive heads: TTTT (1), HTTT, THTT, TTHT, TTTH (4), HTHT, HTTH, THTH (3). Total favorable = 8. Probability = 8/16 = 1/2."
  },
  {
    "id": 50,
    "prompt": "The value of expression:\n(√(√5 + 2) + √(√5 - 2)) / √(√5 + 1) is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "1" },
      { "id": "B", "text": "√2" },
      { "id": "C", "text": "4" },
      { "id": "D", "text": "√5" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Let a = √(√5 + 2) + √(√5 - 2). Squaring a: a² = (√5 + 2) + (√5 - 2) + 2√((√5 + 2)(√5 - 2)) = 2√5 + 2√(5 - 4) = 2(√5 + 1). Thus a = √(2(√5 + 1)) = √2 * √(√5 + 1). Dividing by √(√5 + 1) yields √2."
  },
  {
    "id": 51,
    "prompt": "What will be the next term in the following alphanumeric series?\nC4X, F9U, I16R, ____",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "L25O" },
      { "id": "B", "text": "L25P" },
      { "id": "C", "text": "K25P" },
      { "id": "D", "text": "A25Z" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Letters 1: C (+3) -> F (+3) -> I (+3) -> L.\nNumbers: 2²=4, 3²=9, 4²=16, 5²=25.\nLetters 2: X (-3) -> U (-3) -> R (-3) -> O.\nNext term = L25O."
  },
  {
    "id": 52,
    "prompt": "The consonants of the English alphabet have been coded by digits 1 to 8:\nColumns: 5, 4, 1, 3, 2, 8, 7\nRow 1: G, B, K, H, Z, M, E\nRow 2: R, V, C, S, D, Q, X\nRow 3: J, N, T, L, W, Y, P\nVowel rule: If any vowel is not at the beginning or last, it is coded as 6. If any vowel is at the beginning only or last only, it is coded as 9. If the vowel is placed at both beginning and last, it is coded as '$' at both places.\nWith reference to this, choose the correct code for ENIANGE:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "6499456" },
      { "id": "B", "text": "$46645$" },
      { "id": "C", "text": "9466456" },
      { "id": "D", "text": "$4$$45$" }
    ],
    "correctAnswers": ["B"],
    "explanation": "ENIANGE begins and ends with vowel E => coded as '$' at both ends. N is coded as 4, G as 5. Interior vowels I and A (neither beginning nor last) are coded as 6. Hence the code is $46645$."
  },
  {
    "id": 53,
    "prompt": "Seven persons A, B, C, D, E, F and G are sitting in a straight line facing north. Only two persons sit between F and G, and G sits second to the left of B. D sits third to the left of C. E sits exactly between G and B, and B sits at the extreme right end of the row. Who sits exactly in the middle of the line?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A" },
      { "id": "B", "text": "C" },
      { "id": "C", "text": "E" },
      { "id": "D", "text": "G" }
    ],
    "correctAnswers": ["B"],
    "explanation": "B is at position 7 (right end). G is 2nd to the left of B (position 5), E is between G and B (position 6). Two persons sit between F and G => F is at position 2. D sits 3rd to the left of C => D is at 1, C is at 4. The arrangement is D-F-A-C-G-E-B. Position 4 (the middle) is C."
  },
  {
    "id": 54,
    "prompt": "If 'POND' is coded as 'RSTL', how will 'HEAR' be written in that code?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "ZGIJ" },
      { "id": "B", "text": "IJLZ" },
      { "id": "C", "text": "JILZ" },
      { "id": "D", "text": "JIGZ" }
    ],
    "correctAnswers": ["D"],
    "explanation": "P + 2 = R, O + 4 = S, N + 6 = T, D + 8 = L. Applying the same pattern (+2, +4, +6, +8) to HEAR: H+2=J, E+4=I, A+6=G, R+8=Z => JIGZ."
  },
  {
    "id": 55,
    "prompt": "Statement: Some hills are rivers. Some rivers are deserts. All deserts are roads.\nConclusions:\nI. Some roads are rivers.\nII. Some roads are hills.\nIII. Some deserts are hills.\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Only I follows" },
      { "id": "B", "text": "Only I and II follow" },
      { "id": "C", "text": "Only II and III follow" },
      { "id": "D", "text": "Only III follows" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Since some rivers are deserts and all deserts are roads, the part of rivers that are deserts must be roads. Hence 'Some roads are rivers' follows definitely. There is no definite relationship established between roads and hills or deserts and hills. Thus, only Conclusion I follows."
  },
  {
    "id": 56,
    "prompt": "Pointing to a photograph, Varun said, 'She is the mother of my son's wife's daughter.' How is Varun related to the lady in the photograph?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Uncle" },
      { "id": "B", "text": "Father" },
      { "id": "C", "text": "Daughter-in-law" },
      { "id": "D", "text": "Father-in-law" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Varun's son's wife is his daughter-in-law. Her daughter is Varun's granddaughter. The mother of this daughter is Varun's daughter-in-law. Therefore, Varun is her father-in-law."
  },
  {
    "id": 57,
    "prompt": "A man is facing west. He turns 45° in the clockwise direction and then another 180° in the same direction, and then 270° in the anti-clockwise direction. Which direction is he facing now?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "South" },
      { "id": "B", "text": "North-West" },
      { "id": "C", "text": "West" },
      { "id": "D", "text": "South-West" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Clockwise rotation: 45° + 180° = 225°. Anti-clockwise rotation: 270°. Net turn: 225° - 270° = -45° (i.e. 45° anti-clockwise). Facing West and turning 45° anti-clockwise results in facing South-West."
  },
  {
    "id": 58,
    "prompt": "In a queue, A is eighteenth from the front while B is sixteenth from the end. If C is twenty-fifth from the front and is exactly in the middle of A and B, then how many persons are there in the queue?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "47" },
      { "id": "B", "text": "42" },
      { "id": "C", "text": "51" },
      { "id": "D", "text": "64" }
    ],
    "correctAnswers": ["A"],
    "explanation": "A is 18th from the front and C is 25th from the front, so there are 25 - 18 - 1 = 6 persons between A and C. Since C is in the middle of A and B, there are also 6 persons between C and B. Thus, B is at position 25 + 6 + 1 = 32nd from the front. Since B is 16th from the end, total persons = 32 + 16 - 1 = 47."
  },
  {
    "id": 59,
    "prompt": "Consider the following relations:\n'P # Q' means 'P is the father of Q'\n'P + Q' means 'P is the mother of Q'\n'P - Q' means 'P is the brother of Q'\n'P * Q' means 'P is the sister of Q'\nGiven the expression A + B # C - D, how is A related to D?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Sister" },
      { "id": "B", "text": "Grandson" },
      { "id": "C", "text": "Mother" },
      { "id": "D", "text": "Grandmother" }
    ],
    "correctAnswers": ["D"],
    "explanation": "A + B means A is the mother of B. B # C means B is the father of C. C - D means C is the brother of D. Thus B is the father of D, and A is the mother of B. Therefore, A is the paternal grandmother of D."
  },
  {
    "id": 60,
    "prompt": "Find the missing number (?) in the following arrangement of three number boxes:\nBox 1: Top row = [15, 2], Bottom row = [5, 6], Center value = 40\nBox 2: Top row = [9, 7], Bottom row = [4, 5], Center value = 30\nBox 3: Top row = [17, 13], Bottom row = [13, 12], Center value = ?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "75" },
      { "id": "B", "text": "130" },
      { "id": "C", "text": "120" },
      { "id": "D", "text": "50" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Pattern: 1/2 * (Top left - Bottom left) * (Top right + Bottom right). Box 1: 1/2 * (15 - 5) * (2 + 6) = 1/2 * 10 * 8 = 40. Box 2: 1/2 * (9 - 4) * (7 + 5) = 1/2 * 5 * 12 = 30. Box 3: 1/2 * (17 - 13) * (13 + 12) = 1/2 * 4 * 25 = 50."
  },
  {
    "id": 61,
    "prompt": "Consider the following relations:\n'P # Q' means 'P is the father of Q'\n'P + Q' means 'P is the mother of Q'\n'P - Q' means 'P is the brother of Q'\n'P * Q' means 'P is the sister of Q'\nWhich of the following shows that A is the aunt of E?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A - B + C # D * E" },
      { "id": "B", "text": "A * B # C * D - E" },
      { "id": "C", "text": "A # B * C + D - E" },
      { "id": "D", "text": "A + B - C * D # E" }
    ],
    "correctAnswers": ["B"],
    "explanation": "In A * B # C * D - E: A * B means A is the sister of B. B # C means B is the father of C. C * D - E establishes that C, D, E are siblings. Since B is the father of E and A is B's sister, A is the paternal aunt of E."
  },
  {
    "id": 62,
    "prompt": "A pair of words is given below which have a certain relationship:\nHope : Aspire\nSelect the correct option that has the same relationship as the original pair of words:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Fake : Ordinary" },
      { "id": "B", "text": "Fib : Lie" },
      { "id": "C", "text": "Love : Elevate" },
      { "id": "D", "text": "Film : Flam" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Hope and Aspire are direct synonyms meaning to desire or aim for something. Similarly, Fib and Lie are synonyms referring to an untruth or falsehood."
  },
  {
    "id": 63,
    "prompt": "Statement: Should there be a complete ban on the use of all types of chemical pesticides in India?\nArguments:\nI. Yes, chemical pesticides used in agriculture pollute the underground water and thus they become a serious health hazard.\nII. No, the pests will destroy all the crops and farmers will have nothing to harvest.\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Only Argument I is strong" },
      { "id": "B", "text": "Only Argument II is strong" },
      { "id": "C", "text": "Neither Argument I nor Argument II is strong" },
      { "id": "D", "text": "Both Argument I and II are strong" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Both arguments are strong because they address significant, logical, and evidence-based aspects: Argument I highlights groundwater contamination and health safety, while Argument II highlights immediate food security and catastrophic crop loss in the absence of alternatives."
  },
  {
    "id": 64,
    "prompt": "What is the angle between the two hands of a clock at 3:15 P.M.?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "10 degree and 45 minutes" },
      { "id": "B", "text": "7 degree and 45 minutes" },
      { "id": "C", "text": "8 degree and 45 minutes" },
      { "id": "D", "text": "7 degree and 30 minutes" }
    ],
    "correctAnswers": ["D"],
    "explanation": "At 3:00, the angle between the hands is 90°. In 15 minutes, the hour hand advances 15 * 0.5° = 7.5°, while the minute hand moves to 15 * 6° = 90°. The angle between them = |90° + 7.5° - 90°| = 7.5° = 7 degrees and 30 minutes."
  },
  {
    "id": 65,
    "prompt": "Given below are two statements:\nAssertion [A]: Pressure cookers are fitted with Ebonite handles.\nReason [R]: Ebonite is a good conductor of heat.\nIn the light of the above statements, choose the most appropriate answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Both [A] and [R] are correct and [R] is the correct explanation of [A]" },
      { "id": "B", "text": "Both [A] and [R] are correct and [R] is NOT the correct explanation of [A]" },
      { "id": "C", "text": "[A] is correct but [R] is not correct" },
      { "id": "D", "text": "[A] is not correct but [R] is correct" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Assertion [A] is true because cookware handles use ebonite (hard vulcanized rubber) to prevent heat from reaching the user's hand. Reason [R] is false because ebonite is an insulator (poor conductor) of heat, which is precisely why it is used."
  },
  {
    "id": 66,
    "prompt": "Choose the alternative which best expresses the meaning of the underlined phrase in the sentence:\n'Satish cooked up a savoury tale.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "concocted" },
      { "id": "B", "text": "baked" },
      { "id": "C", "text": "roasted" },
      { "id": "D", "text": "boiled" }
    ],
    "correctAnswers": ["A"],
    "explanation": "'Cooked up' is an idiom meaning to fabricate, invent, or concoct a story, usually deceitfully."
  },
  {
    "id": 67,
    "prompt": "Which one of the following sentences is grammatically incorrect?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Mrs. Raphael ordered the naughty girl to get out of the class." },
      { "id": "B", "text": "The beggar begged in God’s name for a handful of rice." },
      { "id": "C", "text": "The teacher asked Amitav where he had been." },
      { "id": "D", "text": "Veena inquired of Manorama why she had taken her pen?" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Option D is reported (indirect) speech, not a direct question. Indirect questions must conclude with a period (full stop), not a question mark."
  },
  {
    "id": 68,
    "prompt": "Which one of the following is grammatically and logically correct?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Milton is the Surdas of England." },
      { "id": "B", "text": "Surdas is Milton of India." },
      { "id": "C", "text": "The Surdas is Milton of India." },
      { "id": "D", "text": "The Surdas is the Milton of India." }
    ],
    "correctAnswers": ["A"],
    "explanation": "When comparing an individual to a famous archetype or person of distinction, the definite article 'the' is placed before the archetype's name (e.g. 'the Surdas of England' or 'the Milton of India'). Option A uses this construction correctly without unneeded articles before the subject."
  },
  {
    "id": 69,
    "prompt": "Select the correct preposition to complete the following sentence:\n'His folly has brought __________ his ruins.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "in" },
      { "id": "B", "text": "up" },
      { "id": "C", "text": "about" },
      { "id": "D", "text": "forward" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The phrasal verb 'bring about' means to cause something to happen or result in (e.g., 'brought about his ruin')."
  },
  {
    "id": 70,
    "prompt": "Choose the odd one out among the following sentences:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "That Shankar is clever is certain." },
      { "id": "B", "text": "I do not know whether the Principal is in the office." },
      { "id": "C", "text": "Her fear is that she may fall ill." },
      { "id": "D", "text": "Rennie is not only kind but also devoted." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Options A, B, and C are complex sentences containing noun clauses ('That...', 'whether...', 'that...'). Option D is a compound sentence joined by correlative conjunctions ('not only... but also'). Hence D is the odd one out."
  },
  {
    "id": 71,
    "prompt": "Choose the alternative which best expresses the meaning of the underlined phrase in the sentence:\n'The ship was cast away on the coast of Africa.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "wrecked" },
      { "id": "B", "text": "rowed" },
      { "id": "C", "text": "anchored" },
      { "id": "D", "text": "sailed" }
    ],
    "correctAnswers": ["A"],
    "explanation": "'Cast away' means to be shipwrecked or left stranded by maritime accident."
  },
  {
    "id": 72,
    "prompt": "Context Passage:\n'Today our society abounds with persons who are mad after their own interest. In Sarvodaya, however, one has (I) solicitous of others’ interest. Man’s nature will have to be changed. Values of life will (II) re-valued. For, if the individual does not change even if exploitation is put out once, it will reappear afterwards. This is a high ideal no doubt, but is capable of being attained. That can be done by making a beginning somewhere. Bhoodan is the process whereby we can reach this goal. The land problem is a problem that (III) crores of people. Hence, the Bhoodan movement makes a direct appeal to the masses and would inevitably cast its influence on their approach and way of life.'\n\nPick the appropriate replacement for (III):",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "affect" },
      { "id": "B", "text": "affects" },
      { "id": "C", "text": "affecting" },
      { "id": "D", "text": "have affected" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The antecedent of the relative clause is 'a problem' (singular), which takes the singular verb 'affects' in simple present tense."
  },
  {
    "id": 73,
    "prompt": "Based on the Sarvodaya passage above, pick the appropriate replacement for blank (II):\n'Values of life will (II) re-valued.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "has to be" },
      { "id": "B", "text": "have to be" },
      { "id": "C", "text": "had to be" },
      { "id": "D", "text": "have to" }
    ],
    "correctAnswers": ["B"],
    "explanation": "The modal 'will' is followed by the base verb phrase 'have to be' ('will have to be re-valued')."
  },
  {
    "id": 74,
    "prompt": "Based on the Sarvodaya passage above, pick the appropriate replacement for blank (I):\n'In Sarvodaya, however, one has (I) solicitous of others’ interest.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "to" },
      { "id": "B", "text": "be" },
      { "id": "C", "text": "to be" },
      { "id": "D", "text": "to been" }
    ],
    "correctAnswers": ["C"],
    "explanation": "'has' in this semi-modal sense requires the full infinitive 'to be' ('has to be solicitous')."
  },
  {
    "id": 75,
    "prompt": "Given below are two statements:\nStatement I: A simple sentence is one which has only one subject and one predicate.\nStatement II: A simple sentence is one which has only one finite verb.\nIn the light of the above statements, choose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Both Statement I and Statement II are true" },
      { "id": "B", "text": "Both Statement I and Statement II are false" },
      { "id": "C", "text": "Statement I is true but Statement II is false" },
      { "id": "D", "text": "Statement I is false but Statement II is true" }
    ],
    "correctAnswers": ["A"],
    "explanation": "A simple sentence consists of a single independent clause, which by definition has one subject, one predicate, and exactly one finite verb. Both statements are true."
  },
  {
    "id": 76,
    "prompt": "“A person who is prejudiced in his views and intolerant of the opinions of others” is known as:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Orthodox" },
      { "id": "B", "text": "Traditional" },
      { "id": "C", "text": "Bigot" },
      { "id": "D", "text": "Ideologue" }
    ],
    "correctAnswers": ["C"],
    "explanation": "A 'bigot' is defined as someone who is obstinately and intolerantly devoted to their own opinions and prejudices against people holding different viewpoints."
  },
  {
    "id": 77,
    "prompt": "Match List I with List II:\nList I:\nA. The selected paper was published.\nB. I came to bury Caesar.\nC. Blinding duststorm has created disorder.\nD. Playing is my favourite hobby.\n\nList II:\nI. Simple Infinitive\nII. Present Participle\nIII. Past Participle\nIV. Gerund\n\nChoose the correct match from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A - III, B - II, C - I, D - IV" },
      { "id": "B", "text": "A - I, B - II, C - III, D - IV" },
      { "id": "C", "text": "A - III, B - I, C - II, D - IV" },
      { "id": "D", "text": "A - II, B - III, C - IV, D - I" }
    ],
    "correctAnswers": ["C"],
    "explanation": "A. 'selected' is a past participle used adjectivally (III). B. 'to bury' is a simple infinitive (I). C. 'Blinding' acts as an adjective before duststorm, so it is a present participle (II). D. 'Playing' is the subject of the sentence, functioning as a noun, so it is a gerund (IV)."
  },
  {
    "id": 78,
    "prompt": "Read the following sentences and choose the one belonging to the domain of compound sentences:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Having first swept the room and then dusted the furniture, Philomena washed her hands." },
      { "id": "B", "text": "Once there lived a farmer who had a goose which laid a golden egg every day." },
      { "id": "C", "text": "Christ was hated by his persecutors, nonetheless, He loved them." },
      { "id": "D", "text": "The sun having risen, the fog disappeared." }
    ],
    "correctAnswers": ["C"],
    "explanation": "A compound sentence contains two or more independent clauses joined by coordinating conjunctions or conjunctive adverbs. In Option C, 'Christ was hated by his persecutors' and 'He loved them' are two complete independent clauses joined by 'nonetheless'. The other options are simple or complex sentences."
  },
  {
    "id": 79,
    "prompt": "Which one of the following belongs to the domain of positive degree sentences?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Kalidasa was a great poet in ancient India." },
      { "id": "B", "text": "Marina is fatter than Clara." },
      { "id": "C", "text": "Kashmir is one of the most beautiful places in the world." },
      { "id": "D", "text": "Lead is the heaviest of all metals." }
    ],
    "correctAnswers": ["A"],
    "explanation": "The positive degree is the basic, uncompared form of an adjective. In Option A, 'great' is in the positive degree. Option B uses comparative ('fatter'), and Options C and D use superlative ('most beautiful', 'heaviest')."
  },
  {
    "id": 80,
    "prompt": "Rearrange the following components to construct a meaningful sentence:\nA. to discuss questions such as whether\nB. you have to be clear about what a scientific theory is\nC. about the nature of the universe and\nD. it has a beginning or an end\nE. in order to talk\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A, B, E, C, D" },
      { "id": "B", "text": "B, C, D, E, A" },
      { "id": "C", "text": "E, B, C, D, A" },
      { "id": "D", "text": "E, C, A, D, B" }
    ],
    "correctAnswers": ["D"],
    "explanation": "The coherent sentence reads: 'In order to talk (E) about the nature of the universe and (C) to discuss questions such as whether (A) it has a beginning or an end, (D) you have to be clear about what a scientific theory is (B).' Sequence: E, C, A, D, B."
  },
  {
    "id": 81,
    "prompt": "Given below are two statements: Assertion [A] and Reason [R].\nAssertion [A]: The following sentence is an example of a compound sentence: “The moon was bright and we could see our way”.\nReason [R]: A complex sentence consists of one main clause and one or more subordinate clauses.\nIn the light of the above statement, choose the most appropriate answer from the option given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Both [A] and [R] are true and [R] is the correct explanation of [A]" },
      { "id": "B", "text": "Both [A] and [R] are true and [R] is NOT the correct explanation of [A]" },
      { "id": "C", "text": "[A] is true but [R] is false" },
      { "id": "D", "text": "[A] is false but [R] is true" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Assertion [A] is true because the sentence joins two independent clauses with 'and'. Reason [R] accurately defines a complex sentence. However, [R] does not explain why Assertion [A] is a compound sentence. Therefore, both are true, but [R] is not the explanation of [A]."
  },
  {
    "id": 82,
    "prompt": "Identify the correct indirect speech of the direct speech:\nThe prodigal son said, “I will arise and go to my father, and will say unto him: father, I have sinned against heaven and before thee, and am no more worthy to be called thy son; make me as one of thy hired servants”.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "The prodigal son told that he would arise and go to his father, and would confess that he had sinned against heaven and against him and was no more worthy to be called his son, and he would entreat his father to make him as one of his hired servants." },
      { "id": "B", "text": "The prodigal son said that he would arise and go to his father, and would confess that he had sinned against heaven and against him and was no more worthy to be called his son, and that he would entreat his father to make him as one of his hired servants." },
      { "id": "C", "text": "The prodigal son said to arise and to go to his father, and confess that he sinned against heaven and against him and was no more worthy to be called his son, and he would entreat his father to make him as one of his hired servants." },
      { "id": "D", "text": "The prodigal son said that he will arise and go to his father, and will confess that he has sinned against heaven and against him and is no more worthy to be called his son, and that he will entreat his father to make him as one of his hired servants." }
    ],
    "correctAnswers": ["B"],
    "explanation": "In indirect speech, the reporting verb 'said' shifts the future 'will' to 'would', present perfect 'have sinned' to past perfect 'had sinned', 'am' to 'was', and coordinates subsequent clauses with 'and that he would entreat'."
  },
  {
    "id": 83,
    "prompt": "Read the following sentence and identify its correct passive form from the given options:\n'This book contains many meaningful lessons for the kids.'",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Many meaningful lessons are contained by this book for the kids." },
      { "id": "B", "text": "Many meaningful lessons are contained of this book for the kids." },
      { "id": "C", "text": "Many meaningful lessons are contained in this book for the kids." },
      { "id": "D", "text": "Many meaningful lessons are contained to this book for the kids." }
    ],
    "correctAnswers": ["C"],
    "explanation": "The verb 'contain' takes the preposition 'in' rather than 'by' in passive constructions ('are contained in this book')."
  },
  {
    "id": 84,
    "prompt": "Passage:\n'The eventual goal of science is to provide a single theory that describes the whole universe. However, the approach most scientists actually follow is to separate the problem into two parts. First, there are the laws that tell us how the universe changes with time... Second, there is the question of the initial state of the universe. Some people feel that science should be concerned with only the first part; they regard the question of the initial situation as a matter for metaphysics or religion... Yet it appears that he chose to make it evolve in a very regular way according to certain laws. It therefore seems equally reasonable to suppose that there are also laws governing the initial state.'\n\nWhich of the following terms conveys the appropriate meaning of 'start of universe'?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Execution" },
      { "id": "B", "text": "Extension" },
      { "id": "C", "text": "Evolution" },
      { "id": "D", "text": "Genesis" }
    ],
    "correctAnswers": ["D"],
    "explanation": "'Genesis' means the origin or mode of formation of something, which directly matches the start and initial origin of the universe."
  },
  {
    "id": 85,
    "prompt": "Based on the science and universe passage above, which of the following statements are true?\nA. Science ultimately aims to provide a comprehensive theory of the universe.\nB. The scientists have tried to understand the metaphysics of the universe only.\nC. The scientists hold that God, being omnipotent, would have created the world in a completely arbitrary way.\nD. Since a pattern can be inferred in the way the universe changes with time, it can be held that even its origin would also have been regulated.\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A and B only" },
      { "id": "B", "text": "A and C only" },
      { "id": "C", "text": "A and D only" },
      { "id": "D", "text": "B and D only" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Sentence A is directly supported by the opening line of the passage ('The eventual goal of science is to provide a single theory that describes the whole universe'). Sentence D is supported by the final sentence ('It therefore seems equally reasonable to suppose that there are also laws governing the initial state'). Hence, A and D only."
  },
  {
    "id": 86,
    "prompt": "In which of the following applications is a concave mirror NOT used?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "To concentrate sunlight to produce heat in solar furnaces." },
      { "id": "B", "text": "As a shaving mirror" },
      { "id": "C", "text": "As vehicle headlights." },
      { "id": "D", "text": "As a rear-view mirror in vehicles." }
    ],
    "correctAnswers": ["D"],
    "explanation": "Convex mirrors are used as rear-view mirrors in vehicles because they produce upright, diminished images and provide a much wider field of view. Concave mirrors are used in solar furnaces, shaving mirrors, and headlights."
  },
  {
    "id": 87,
    "prompt": "Match List I (Books) with List II (Authors):\nList I:\nA. Adventures of Tom Sawyer\nB. Paradise Lost\nC. Oliver Twist\nD. The Kite Runner\n\nList II:\nI. Khaled Hosseini\nII. Charles Dickens\nIII. Mark Twain\nIV. John Milton\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A-III, B-I, C-II, D-IV" },
      { "id": "B", "text": "A-IV, B-II, C-I, D-III" },
      { "id": "C", "text": "A-I, B-II, C-IV, D-III" },
      { "id": "D", "text": "A-III, B-IV, C-II, D-I" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Adventures of Tom Sawyer was authored by Mark Twain (III); Paradise Lost by John Milton (IV); Oliver Twist by Charles Dickens (II); and The Kite Runner by Khaled Hosseini (I). Match: A-III, B-IV, C-II, D-I."
  },
  {
    "id": 88,
    "prompt": "Which principle of General Management states that employee turnover should be minimized to maintain organizational efficiency?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Equity" },
      { "id": "B", "text": "Scalar Chain" },
      { "id": "C", "text": "Stability of personnel" },
      { "id": "D", "text": "Authority and Responsibility" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Henri Fayol's principle of 'Stability of Personnel' emphasizes that employees need time to settle into their roles and perform efficiently, so unnecessary employee turnover should be minimized."
  },
  {
    "id": 89,
    "prompt": "Which of the following Principles of General Management states, 'People and materials must be in suitable places at appropriate time for maximum efficiency'?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Scalar Chain" },
      { "id": "B", "text": "Order" },
      { "id": "C", "text": "Remuneration of Employees" },
      { "id": "D", "text": "Esprit De Corps" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Fayol's principle of 'Order' states that there must be an orderly arrangement of resources and people: 'a place for everything/everyone and everything/everyone in its place'."
  },
  {
    "id": 90,
    "prompt": "Which of the following institutions is responsible for promoting international cooperation among monetary authorities and financial supervision through the Basel process?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Bank for International Settlements" },
      { "id": "B", "text": "International Finance Corporation" },
      { "id": "C", "text": "International Monetary Fund" },
      { "id": "D", "text": "International Development Association" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The Bank for International Settlements (BIS), based in Basel, Switzerland, serves central banks in their pursuit of monetary and financial stability and hosts the Basel Committee on Banking Supervision."
  },
  {
    "id": 91,
    "prompt": "Which of the following factors are essential for judging the adequacy of the market for a proposed business idea?\nA. Demand in Domestic Market\nB. Competitors and their market share\nC. Demand in Export Market\nD. Treasury bond yields\nE. Customer tastes and preferences\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "C and D Only" },
      { "id": "B", "text": "A, C, D and E Only" },
      { "id": "C", "text": "A, B, C and E Only" },
      { "id": "D", "text": "B and C Only" }
    ],
    "correctAnswers": ["C"],
    "explanation": "Assessing market adequacy involves analyzing direct market demand (domestic and export), competitor presence, and consumer tastes/preferences. Treasury bond yields are macroeconomic indicators not used to evaluate specific product-market demand."
  },
  {
    "id": 92,
    "prompt": "In the case of entrepreneurial financing, which of the following is a correct sequence of stages from idea to exit?\nA. Growth\nB. Exit\nC. Validation\nD. Financing\nE. Ideation\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "E, C, D, A, B" },
      { "id": "B", "text": "E, D, C, A, B" },
      { "id": "C", "text": "E, B, C, D, A" },
      { "id": "D", "text": "E, A, C, D, B" }
    ],
    "correctAnswers": ["A"],
    "explanation": "The chronological lifecycle sequence is: Ideation (E) -> Validation (C) -> Financing (D) -> Growth (A) -> Exit (B)."
  },
  {
    "id": 93,
    "prompt": "While conducting a cost-benefit analysis for an entrepreneurial innovation, which of the following represents a non-monetary benefit that would be quantified if possible?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Market Entry licensing costs" },
      { "id": "B", "text": "Brand equity enhancement and social impact" },
      { "id": "C", "text": "Depreciation of equipment" },
      { "id": "D", "text": "Patent Registration fees" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Licensing costs, depreciation, and patent fees are direct financial monetary metrics. Brand equity enhancement, social goodwill, and public impact are intangible, non-monetary benefits."
  },
  {
    "id": 94,
    "prompt": "__________ financing allows investors to release funds in phases based on milestone achievement, reducing exposure to failure risk while incentivizing the entrepreneur to meet strategic goals.",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Mezzanine" },
      { "id": "B", "text": "Staged" },
      { "id": "C", "text": "Look-up" },
      { "id": "D", "text": "Look-down" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Staged financing (also known as milestone-based or tranche-based financing) disburses capital incrementally as the startup achieves predetermined operational milestones, limiting downside risk for venture investors."
  },
  {
    "id": 95,
    "prompt": "Match List I (Stages of Innovation Project Management) with List II (Key objectives):\nList I:\nA. Ideation Stage\nB. Concept Development\nC. Implementation\nD. Commercialisation\n\nList II:\nI. Translating selected ideas into viable prototypes or pilot projects\nII. Generating creative ideas and identifying unmet market needs\nIII. Defining value proposition, business model and feasibility\nIV. Launching innovation to the market and scaling operations\n\nChoose the correct match from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A-II, B-III, C-I, D-IV" },
      { "id": "B", "text": "A-III, B-II, C-IV, D-I" },
      { "id": "C", "text": "A-IV, B-II, C-I, D-III" },
      { "id": "D", "text": "A-II, B-I, C-III, D-IV" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Ideation focuses on generating creative ideas (II); Concept Development articulates value proposition and feasibility (III); Implementation creates prototypes and pilot projects (I); and Commercialisation executes market launch and scaling (IV)."
  },
  {
    "id": 96,
    "prompt": "According to economist Joseph Schumpeter, the entrepreneur is primarily a/an:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Capitalist" },
      { "id": "B", "text": "Manager" },
      { "id": "C", "text": "Innovator" },
      { "id": "D", "text": "Hedger" }
    ],
    "correctAnswers": ["C"],
    "explanation": "In Schumpeter's economic theory, an entrepreneur is essentially an 'innovator' who executes 'new combinations' (creative destruction) rather than merely managing existing capital or operations."
  },
  {
    "id": 97,
    "prompt": "The standard Design Thinking process does NOT involve which of the following as formal standalone phases?\nA. Test\nB. Empathize\nC. Incubation\nD. Brainstorming\nE. Prototyping\n\nChoose the correct answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "A, C and D Only" },
      { "id": "B", "text": "C, D and E Only" },
      { "id": "C", "text": "C and D Only" },
      { "id": "D", "text": "A and B Only" }
    ],
    "correctAnswers": ["C"],
    "explanation": "The 5 canonical stages of Design Thinking are Empathize, Define, Ideate, Prototype, and Test. Brainstorming is an activity within the Ideate stage, and Incubation is a general venture development process, so neither is a standalone phase of design thinking."
  },
  {
    "id": 98,
    "prompt": "Entrepreneurs are called 'agents of change' because:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "They introduce innovation and modernization." },
      { "id": "B", "text": "They avoid risk." },
      { "id": "C", "text": "They follow global trends." },
      { "id": "D", "text": "They follow government policies." }
    ],
    "correctAnswers": ["A"],
    "explanation": "Entrepreneurs introduce new technologies, products, and commercial practices that transform markets and drive economic modernization, acting as catalysts for positive systemic change."
  },
  {
    "id": 99,
    "prompt": "Given below are two statements: one is labelled as Assertion [A] and the other is labelled as Reason [R].\nAssertion [A]: Entrepreneurs are innovators.\nReason [R]: They convert new ideas into commercially viable products.\nIn the light of above statements, choose the most appropriate answer from the option given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Both [A] and [R] are correct and [R] is the correct explanation of [A]" },
      { "id": "B", "text": "Both [A] and [R] are correct and [R] is NOT the correct explanation of [A]" },
      { "id": "C", "text": "[A] is correct but [R] is not correct" },
      { "id": "D", "text": "[A] is not correct but [R] is correct" }
    ],
    "correctAnswers": ["A"],
    "explanation": "Entrepreneurs are innovators precisely because they do not just conceive abstract ideas, but operationalize and commercialize them into marketable products and services."
  },
  {
    "id": 100,
    "prompt": "Social or environmental spillover effects beyond the direct financial returns of a venture can be best termed as:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "ex-ante effects" },
      { "id": "B", "text": "synergies" },
      { "id": "C", "text": "margin pressures" },
      { "id": "D", "text": "externalities" }
    ],
    "correctAnswers": ["D"],
    "explanation": "In economics and business, externalities refer to positive or negative consequences of an economic activity that affect third parties outside the direct transaction."
  },
  {
    "id": 101,
    "prompt": "The quality of an entrepreneur to recover quickly from failure and adapt can be described as:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Avoidance" },
      { "id": "B", "text": "Resilience" },
      { "id": "C", "text": "Agility" },
      { "id": "D", "text": "Leadership" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Resilience is the psychological and operational capacity to withstand difficulties, absorb shocks, and rapidly bounce back from setbacks and failures."
  },
  {
    "id": 102,
    "prompt": "The strategic advantage of bootstrapping in entrepreneurial finance is:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "It increases dilution of control." },
      { "id": "B", "text": "It signals financial discipline and validates business potential before external funding." },
      { "id": "C", "text": "It specifies the accounting standards for financial reporting." },
      { "id": "D", "text": "It facilitates negotiation." }
    ],
    "correctAnswers": ["B"],
    "explanation": "Bootstrapping forces lean operations, preserves founder equity, demonstrates fiscal prudence, and proves product-market validation prior to seeking venture capital."
  },
  {
    "id": 103,
    "prompt": "“Ambidexterity theory in innovation strategy requires successful entrepreneurs to simultaneously explore __________ opportunities while exploiting __________ resources.”\nWhich pair of words correctly fills the blanks respectively?",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "new, human" },
      { "id": "B", "text": "new, existing" },
      { "id": "C", "text": "market, natural" },
      { "id": "D", "text": "market, free" }
    ],
    "correctAnswers": ["B"],
    "explanation": "Ambidexterity in strategic management refers to balancing exploration of new opportunities (radical innovation) while exploiting existing resources (incremental refinement)."
  },
  {
    "id": 104,
    "prompt": "Given below are two statements:\nStatement I: Venture capital funds should always specialize narrowly in a single sector to maximise returns.\nStatement II: Diversification across industries and stages helps venture capitalists to manage portfolio risk, while maintaining strategic focus.\nIn light of the above statements, choose the most appropriate answer from the options given below:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Both Statement I and Statement II are correct" },
      { "id": "B", "text": "Both Statement I and Statement II are incorrect" },
      { "id": "C", "text": "Statement I is correct but Statement II is incorrect" },
      { "id": "D", "text": "Statement I is incorrect but Statement II is correct" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Over-specialization in a single narrow sector excessively increases systemic portfolio risk, making Statement I incorrect. Portfolio diversification across sectors and funding stages manages risk, making Statement II correct."
  },
  {
    "id": 105,
    "prompt": "An entrepreneur who can contribute to combine technologies, knowledge, market understanding and resource limitations to create new value demonstrates:",
    "type": "MULTIPLE CHOICE",
    "answersRequired": 1,
    "shuffle": false,
    "options": [
      { "id": "A", "text": "Managerial efficiency" },
      { "id": "B", "text": "Strategic Intention" },
      { "id": "C", "text": "Innovative Cognition" },
      { "id": "D", "text": "Entrepreneurial Orientation" }
    ],
    "correctAnswers": ["D"],
    "explanation": "Entrepreneurial Orientation (EO) describes the overarching mindset, processes, and behavior that combine diverse capabilities and resources to pursue new value creation."
  }
];
