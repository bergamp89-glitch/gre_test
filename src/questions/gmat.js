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
  }
];
