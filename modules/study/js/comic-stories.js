/**
 * Comic Stories Database: Cartoon Comic Strips for NCERT Subjects
 * Crisp Black & White comic art, dialogue bubbles, sound effect bursts,
 * and clear NCERT curriculum analogies.
 */

const COMIC_STORIES = {
  // =========================================================================
  // CLASS 1: MATH - SHAPES & SPACE
  // =========================================================================
  "c1-math-shapes": {
    id: "c1-math-shapes",
    classNum: 1,
    subjectId: "c1-math",
    title: "Shapes & Space: The Square Toy in the Round Hole!",
    subtitle: "Circles roll, squares slide, and triangles point to the sky!",
    concept: "Circles have no corners, squares have 4 equal sides, and triangles have 3 sharp corners.",
    characters: ["prof-paws", "pixel-bot"],
    interactiveLabId: "shape-sorter",
    panels: [
      {
        panelNum: 1,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "CLATTER!",
        narration: "In the cartoon workshop, Pixel the robot is packing toys.",
        dialogue: "Pixel, watch out! Why are you trying to push that square box through a tiny round pipe?",
        artType: "shapes-intro",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Pipe -->
          <circle cx="120" cy="120" r="50" fill="none" stroke="#000" stroke-width="4" stroke-dasharray="8 4"/>
          <text x="120" y="190" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">ROUND CIRCLE</text>
          <!-- Pixel struggling with square -->
          <rect x="230" y="80" width="70" height="70" fill="none" stroke="#000" stroke-width="4"/>
          <text x="265" y="170" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">SQUARE TOY</text>
          <path d="M 230 115 L 180 115" stroke="#000" stroke-width="3" marker-end="url(#arrow)"/>
          <text x="210" y="100" font-weight="900" font-size="16">WON'T FIT!</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "BEEP-BOOP!",
        narration: "Pixel scratches his metal antenna in confusion.",
        dialogue: "Error! Error! The square has sharp pointy corners! But the circle has zero corners!",
        artType: "circle-vs-square",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Circle with rolling motion lines -->
          <circle cx="100" cy="110" r="45" fill="none" stroke="#000" stroke-width="4"/>
          <path d="M 60 70 A 50 50 0 0 1 140 70" stroke="#000" stroke-width="3" fill="none" stroke-linecap="round"/>
          <text x="100" y="180" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">I ROLL! (0 Corners)</text>
          <!-- Square with corner arrows -->
          <rect x="240" y="70" width="80" height="80" fill="none" stroke="#000" stroke-width="4"/>
          <circle cx="240" cy="70" r="6" fill="#000"/>
          <circle cx="320" cy="70" r="6" fill="#000"/>
          <circle cx="240" cy="150" r="6" fill="#000"/>
          <circle cx="320" cy="150" r="6" fill="#000"/>
          <text x="280" y="180" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">4 CORNERS! (I Slide)</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "AHA!",
        narration: "Prof Paws pulls out a slice of pizza.",
        dialogue: "Look at this triangle! It has exactly THREE sides and THREE corners. Just like a party hat!",
        artType: "triangle-hat",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Triangle -->
          <polygon points="200,50 140,160 260,160" fill="none" stroke="#000" stroke-width="4"/>
          <circle cx="200" cy="50" r="7" fill="#000"/>
          <circle cx="140" cy="160" r="7" fill="#000"/>
          <circle cx="260" cy="160" r="7" fill="#000"/>
          <!-- Party stripes -->
          <line x1="170" y1="105" x2="230" y2="105" stroke="#000" stroke-width="3"/>
          <line x1="155" y1="135" x2="245" y2="135" stroke="#000" stroke-width="3"/>
          <text x="200" y="195" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="15">TRIANGLE: 3 Sides & 3 Corners!</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "YAY!",
        narration: "Pixel sorts every toy into its correct shape garage.",
        dialogue: "Mission complete! Round balls roll into the tube, squares stack on the floor, and triangles make rooftops!",
        artType: "shapes-summary",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <circle cx="90" cy="110" r="35" fill="none" stroke="#000" stroke-width="4"/>
          <rect x="170" y="75" width="70" height="70" fill="none" stroke="#000" stroke-width="4"/>
          <polygon points="310,75 275,145 345,145" fill="none" stroke="#000" stroke-width="4"/>
          <text x="90" y="175" text-anchor="middle" font-weight="bold" font-size="13">Circle</text>
          <text x="205" y="175" text-anchor="middle" font-weight="bold" font-size="13">Square</text>
          <text x="310" y="175" text-anchor="middle" font-weight="bold" font-size="13">Triangle</text>
          <text x="200" y="210" text-anchor="middle" font-weight="900" font-size="16">NOW WE KNOW OUR SHAPES!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: Round objects roll easily because they have no corners. Flat-sided objects like squares and rectangles slide and stack safely!",
    quiz: [
      {
        question: "How many corners does a round circle have?",
        options: ["0 corners", "3 corners", "4 corners", "10 corners"],
        correctIndex: 0,
        explanation: "Circles have zero corners and zero straight sides—that is why balls roll smoothly!"
      },
      {
        question: "Which shape has exactly 3 sides and 3 corners?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        correctIndex: 1,
        explanation: "A triangle has 3 straight sides and 3 pointy corners (like a slice of pizza or party hat)!"
      }
    ]
  },

  // =========================================================================
  // CLASS 3: EVS - THE PLANT FAIRY (PHOTOSYNTHESIS BASICS)
  // =========================================================================
  "c3-evs-plantfairy": {
    id: "c3-evs-plantfairy",
    classNum: 3,
    subjectId: "c3-evs",
    title: "The Plant Fairy: Green Leaves & The Solar Kitchen!",
    subtitle: "How plants drink water from the soil and cook food with sunlight!",
    concept: "Plants make their own food through photosynthesis using chlorophyll, sunlight, water, and carbon dioxide.",
    characters: ["prof-paws", "sparky"],
    interactiveLabId: "photosynthesis-lab",
    panels: [
      {
        panelNum: 1,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "STOMACH RUMBLE!",
        narration: "Under a big banyan tree in the school garden.",
        dialogue: "Hey Professor! I have to eat apples and sandwiches when I get hungry. But trees don't have mouths or kitchens! How do they eat?",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Tree -->
          <rect x="90" y="110" width="25" height="90" fill="#000"/>
          <path d="M 60 120 C 40 80, 80 50, 100 50 C 130 50, 160 80, 140 120 Z" fill="none" stroke="#000" stroke-width="4"/>
          <!-- Question marks -->
          <text x="260" y="80" font-size="40" font-weight="900">?</text>
          <text x="290" y="110" font-size="28" font-weight="900">?</text>
          <text x="250" y="170" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">WHERE IS THE KITCHEN?</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "SHINE!",
        narration: "Prof Paws zooms in with a magnifying glass.",
        dialogue: "Every single green leaf IS a tiny solar kitchen! Inside each leaf is a green pigment called Chlorophyll that traps sunlight rays!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Big leaf -->
          <path d="M 120 120 Q 200 40, 280 120 Q 200 200, 120 120 Z" fill="none" stroke="#000" stroke-width="4"/>
          <line x1="120" y1="120" x2="280" y2="120" stroke="#000" stroke-width="3"/>
          <line x1="170" y1="120" x2="190" y2="90" stroke="#000" stroke-width="2"/>
          <line x1="210" y1="120" x2="230" y2="90" stroke="#000" stroke-width="2"/>
          <line x1="170" y1="120" x2="190" y2="150" stroke="#000" stroke-width="2"/>
          <line x1="210" y1="120" x2="230" y2="150" stroke="#000" stroke-width="2"/>
          <!-- Sun rays -->
          <circle cx="50" cy="50" r="20" fill="#000"/>
          <line x1="75" y1="65" x2="140" y2="95" stroke="#000" stroke-width="3" stroke-dasharray="4 3"/>
          <text x="200" y="220" text-anchor="middle" font-weight="bold" font-size="14">LEAF = NATURE'S SOLAR CHEF</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "SLURP!",
        narration: "Sparky looks down at the tree roots under the soil.",
        dialogue: "So the roots drink water from underground like long drinking straws, and leaves breathe in Carbon Dioxide from the air?",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Soil line -->
          <line x1="30" y1="140" x2="370" y2="140" stroke="#000" stroke-width="4"/>
          <!-- Roots -->
          <path d="M 200 140 Q 180 180, 150 200 M 200 140 Q 220 180, 250 210 M 200 140 L 200 210" stroke="#000" stroke-width="3" fill="none"/>
          <text x="200" y="130" text-anchor="middle" font-weight="bold" font-size="14">TRUNK &amp; STEM</text>
          <text x="80" y="180" font-weight="bold" font-size="12">ROOTS: DRINK H2O</text>
          <text x="270" y="90" font-weight="bold" font-size="12">STOMATA: BREATHE CO2</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "TA-DA!",
        narration: "The recipe is complete: Sugar for the plant, fresh Oxygen for us!",
        dialogue: "Exactly! Sunlight + Water + CO2 = Delicious Glucose food! And as a bonus gift, the plant exhales sweet, fresh OXYGEN for us to breathe!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <rect x="40" y="70" width="320" height="90" fill="none" stroke="#000" stroke-width="3"/>
          <text x="200" y="110" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="15">SUNLIGHT + WATER + CO₂</text>
          <text x="200" y="130" text-anchor="middle" font-weight="bold" font-size="14">⬇</text>
          <text x="200" y="150" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="15">FOOD (GLUCOSE) + OXYGEN (O₂)!</text>
          <text x="200" y="205" text-anchor="middle" font-weight="bold" font-size="14">THANK YOU, GREEN PLANTS!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: Photosynthesis is the process by which green leaves use chlorophyll to absorb sunlight, combined with water from roots and carbon dioxide from air, to produce food and release oxygen.",
    quiz: [
      {
        question: "What is the green substance inside leaves that traps sunlight called?",
        options: ["Chlorophyll", "Chocolate", "Oxygen", "Carbohydrate"],
        correctIndex: 0,
        explanation: "Chlorophyll is the green pigment in leaves that absorbs sunlight energy for photosynthesis!"
      },
      {
        question: "What wonderful gas do plants release into the air for humans and animals to breathe?",
        options: ["Oxygen", "Carbon Dioxide", "Helium", "Steam"],
        correctIndex: 0,
        explanation: "Plants release pure oxygen (O2) into the air during photosynthesis!"
      }
    ]
  },

  // =========================================================================
  // CLASS 5: MATH - PARTS & WHOLES (FRACTIONS)
  // =========================================================================
  "c5-math-fractions": {
    id: "c5-math-fractions",
    classNum: 5,
    subjectId: "c5-math",
    title: "Parts & Wholes: The Monster Pizza Fraction Feast!",
    subtitle: "Numerators count the slices you have; Denominators count total slices in the whole!",
    concept: "Fractions represent parts of a whole: Numerator / Denominator. Equivalent fractions represent the same amount.",
    characters: ["pixel-bot", "doodler"],
    interactiveLabId: "pizza-fraction-lab",
    panels: [
      {
        panelNum: 1,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "PIZZA TIME!",
        narration: "A giant fresh 8-slice cartoon pizza sits on the kitchen counter.",
        dialogue: "Chef Doodler, our hungry cartoon monster friends just arrived! We have 1 whole pizza divided into 8 equal slices!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- 8 Slice Pizza -->
          <circle cx="200" cy="120" r="70" fill="none" stroke="#000" stroke-width="4"/>
          <line x1="200" y1="50" x2="200" y2="190" stroke="#000" stroke-width="3"/>
          <line x1="130" y1="120" x2="270" y2="120" stroke="#000" stroke-width="3"/>
          <line x1="150" y1="70" x2="250" y2="170" stroke="#000" stroke-width="3"/>
          <line x1="150" y1="170" x2="250" y2="70" stroke="#000" stroke-width="3"/>
          <text x="200" y="215" text-anchor="middle" font-weight="bold" font-size="14">WHOLE = 8 / 8 SLICES</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Doodler",
        characterKey: "doodler",
        soundEffect: "CHOMP-CHOMP-CHOMP!",
        narration: "Gobbly the cartoon monster munches 3 slices instantly!",
        dialogue: "Oh no! Gobbly ate 3 slices! In comic math: Denominator is 8 (total slices), and Numerator is 3 (slices eaten) = 3/8 eaten!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <circle cx="140" cy="120" r="60" fill="none" stroke="#000" stroke-width="4"/>
          <!-- 3 shaded slices -->
          <path d="M 140 120 L 140 60 A 60 60 0 0 1 200 120 Z" fill="#000"/>
          <path d="M 140 120 L 200 120 A 60 60 0 0 1 182 162 Z" fill="#000"/>
          <!-- Fraction formula -->
          <rect x="250" y="70" width="100" height="90" fill="none" stroke="#000" stroke-width="3"/>
          <text x="300" y="105" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="28">3</text>
          <line x1="270" y1="115" x2="330" y2="115" stroke="#000" stroke-width="4"/>
          <text x="300" y="148" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="28">8</text>
          <text x="300" y="185" text-anchor="middle" font-weight="bold" font-size="11">Eaten Slices / Total</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "SCANNING!",
        narration: "Pixel counts the remaining slices on the tray.",
        dialogue: "If 3/8 is eaten, then 8/8 minus 3/8 leaves exactly 5/8 of the pizza for us! 5 slices remaining!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <text x="200" y="90" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="24">8/8 - 3/8 = 5/8</text>
          <rect x="70" y="120" width="260" height="40" fill="none" stroke="#000" stroke-width="3"/>
          <line x1="170" y1="120" x2="170" y2="160" stroke="#000" stroke-width="3"/>
          <text x="120" y="145" text-anchor="middle" font-weight="bold" font-size="14">3/8 Gobbly</text>
          <text x="235" y="145" text-anchor="middle" font-weight="bold" font-size="14">5/8 Ours!</text>
          <text x="200" y="200" text-anchor="middle" font-weight="bold" font-size="14">Denominators match, so subtract numerators!</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Doodler",
        characterKey: "doodler",
        soundEffect: "AHA!",
        narration: "Equivalent fractions secret revealed!",
        dialogue: "And remember: 4 slices out of 8 (4/8) is exactly the same as 1 half (1/2) of the pizza! That is called an EQUIVALENT FRACTION!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Half circle -->
          <circle cx="120" cy="120" r="50" fill="none" stroke="#000" stroke-width="4"/>
          <path d="M 120 70 A 50 50 0 0 1 120 170 Z" fill="#000"/>
          <text x="120" y="195" text-anchor="middle" font-weight="bold" font-size="15">4 / 8</text>
          <text x="200" y="128" text-anchor="middle" font-weight="900" font-size="32">=</text>
          <!-- Half circle -->
          <circle cx="280" cy="120" r="50" fill="none" stroke="#000" stroke-width="4"/>
          <path d="M 280 70 A 50 50 0 0 1 280 170 Z" fill="#000"/>
          <text x="280" y="195" text-anchor="middle" font-weight="bold" font-size="15">1 / 2</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: In a fraction a/b, 'b' (denominator) tells how many equal parts the whole is cut into, and 'a' (numerator) tells how many parts are taken. 2/4, 4/8, and 1/2 are all equivalent fractions!",
    quiz: [
      {
        question: "If a chocolate bar has 6 pieces and you eat 2 pieces, what fraction did you eat?",
        options: ["2/6", "4/6", "6/2", "1/6"],
        correctIndex: 0,
        explanation: "You ate 2 pieces out of 6 total pieces, which is written as 2/6 (or simplified to 1/3)!"
      },
      {
        question: "Which of the following fractions is equivalent to 1/2?",
        options: ["2/4", "3/8", "1/3", "4/5"],
        correctIndex: 0,
        explanation: "2/4 equals 1/2 because 2 is half of 4!"
      }
    ]
  },

  // =========================================================================
  // CLASS 6: SCIENCE - ELECTRICITY & CIRCUITS
  // =========================================================================
  "c6-sci-circuits": {
    id: "c6-sci-circuits",
    classNum: 6,
    subjectId: "c6-sci",
    title: "Electricity: The Electron Sprint Around the Circuit!",
    subtitle: "Batteries push, wires carry, and bulbs glow when the loop is unbroken!",
    concept: "An electric circuit needs a source (cell), closed conducting path (wires), and load (bulb). A switch controls the gap.",
    characters: ["prof-paws", "sparky"],
    interactiveLabId: "circuit-builder",
    panels: [
      {
        panelNum: 1,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "CLICK!",
        narration: "Sparky connects a battery and a lightbulb on the workbench.",
        dialogue: "Look Prof! I connected a wire from the positive (+) top of this battery to the lightbulb, but the bulb isn't lighting up at all!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Battery -->
          <rect x="70" y="90" width="40" height="80" fill="none" stroke="#000" stroke-width="4"/>
          <rect x="83" y="80" width="14" height="10" fill="#000"/>
          <text x="90" y="140" text-anchor="middle" font-weight="900" font-size="18">+</text>
          <!-- Wire only on top -->
          <path d="M 90 80 L 90 50 L 260 50 L 260 90" stroke="#000" stroke-width="3" fill="none"/>
          <!-- Bulb unlit -->
          <circle cx="260" cy="115" r="25" fill="none" stroke="#000" stroke-width="4"/>
          <path d="M 252 115 L 260 100 L 268 115" stroke="#000" stroke-width="2" fill="none"/>
          <!-- Big open gap -->
          <text x="200" y="180" text-anchor="middle" font-weight="bold" font-size="14">OPEN GAP AT BOTTOM! (No Glow)</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "AHA!",
        narration: "Prof Paws inspects the gap with a cartoon magnifying glass.",
        dialogue: "Electrons are like marathon runners on a circular racetrack! If there is a gap in the road, they can't complete the lap. You need a CLOSED CIRCUIT!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Complete racetrack with little running electrons -->
          <rect x="60" y="50" width="280" height="130" rx="30" fill="none" stroke="#000" stroke-width="4" stroke-dasharray="10 6"/>
          <circle cx="120" cy="50" r="10" fill="#000"/>
          <circle cx="200" cy="50" r="10" fill="#000"/>
          <circle cx="280" cy="50" r="10" fill="#000"/>
          <text x="200" y="125" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="16">CLOSED LOOP = UNBROKEN TRACK</text>
          <text x="200" y="205" text-anchor="middle" font-weight="bold" font-size="13">Electrons must flow from (-) back to (+)!</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "SNAP!",
        narration: "Sparky connects the second wire and adds a safety switch.",
        dialogue: "I connected the return wire to the negative (-) terminal! And added a cartoon switch key to turn it ON and OFF!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Battery -->
          <rect x="60" y="85" width="40" height="70" fill="none" stroke="#000" stroke-width="4"/>
          <text x="80" y="125" text-anchor="middle" font-weight="bold" font-size="12">1.5V</text>
          <!-- Complete circuit with switch -->
          <path d="M 80 85 L 80 50 L 260 50 L 260 85" stroke="#000" stroke-width="3" fill="none"/>
          <path d="M 80 155 L 80 185 L 170 185" stroke="#000" stroke-width="3" fill="none"/>
          <!-- Switch lever closed -->
          <circle cx="170" cy="185" r="5" fill="#000"/>
          <circle cx="210" cy="185" r="5" fill="#000"/>
          <line x1="170" y1="185" x2="210" y2="185" stroke="#000" stroke-width="4"/>
          <path d="M 210 185 L 260 185 L 260 135" stroke="#000" stroke-width="3" fill="none"/>
          <text x="190" y="170" text-anchor="middle" font-weight="bold" font-size="12">SWITCH CLOSED</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "ZAP! FLASH!",
        narration: "The lightbulb bursts with bright comic sunshine lines!",
        dialogue: "BRILLIANT! Copper is a CONDUCTOR so electrons sprint right through. Plastic on the outside is an INSULATOR to keep our paws safe from shocks!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Glowing bulb with rays -->
          <circle cx="200" cy="110" r="35" fill="#000"/>
          <!-- Light burst rays -->
          <line x1="200" y1="50" x2="200" y2="25" stroke="#000" stroke-width="4"/>
          <line x1="250" y1="70" x2="280" y2="45" stroke="#000" stroke-width="4"/>
          <line x1="260" y1="110" x2="295" y2="110" stroke="#000" stroke-width="4"/>
          <line x1="150" y1="70" x2="120" y2="45" stroke="#000" stroke-width="4"/>
          <line x1="140" y1="110" x2="105" y2="110" stroke="#000" stroke-width="4"/>
          <text x="200" y="115" text-anchor="middle" fill="#fff" font-weight="900" font-size="16">GLOW!</text>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="15">IT WORKS! UNBROKEN CIRCUIT!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: An electric current flows only in a closed continuous circuit. Materials allowing current to pass easily are Conductors (e.g. Copper, Aluminum), while materials that stop current are Insulators (e.g. Rubber, Plastic, Wood).",
    quiz: [
      {
        question: "What happens to the bulb when the switch in a circuit is turned OFF (opened)?",
        options: ["The bulb goes out (no light)", "The bulb explodes", "The bulb turns blue", "The bulb gets hotter"],
        correctIndex: 0,
        explanation: "When a switch is open, it creates a gap in the circuit, breaking the path of electrons, so current stops and the bulb goes out!"
      },
      {
        question: "Which of the following is an electrical conductor?",
        options: ["Copper wire", "Rubber eraser", "Dry wood", "Plastic ruler"],
        correctIndex: 0,
        explanation: "Copper is a metal and an excellent conductor of electric current!"
      }
    ]
  },

  // =========================================================================
  // CLASS 9: SCIENCE - NEWTON'S 3 LAWS OF MOTION
  // =========================================================================
  "c9-sci-motion": {
    id: "c9-sci-motion",
    classNum: 9,
    subjectId: "c9-sci",
    title: "Newton's 3 Laws of Motion: The Skateboard & The Rocket!",
    subtitle: "Inertia refuses to budge, F = ma pushes harder, and every action kicks right back!",
    concept: "1st Law: Inertia. 2nd Law: F = ma (Force accelerates mass). 3rd Law: Action & Reaction are equal and opposite.",
    characters: ["pixel-bot", "prof-paws", "sparky"],
    interactiveLabId: "newtons-cart",
    panels: [
      {
        panelNum: 1,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "WHOOSH... THUD!",
        narration: "Pixel is riding a cartoon skateboard at top speed.",
        dialogue: "HELP! My skateboard just hit a tiny pebble and stopped dead, but my metal body is flying forward through the air! WHY?!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Ground and pebble -->
          <line x1="30" y1="180" x2="370" y2="180" stroke="#000" stroke-width="4"/>
          <circle cx="160" cy="177" r="6" fill="#000"/>
          <!-- Skateboard stopped -->
          <rect x="110" y="165" width="60" height="10" fill="#000"/>
          <circle cx="125" cy="180" r="7" fill="none" stroke="#000" stroke-width="3"/>
          <circle cx="155" cy="180" r="7" fill="none" stroke="#000" stroke-width="3"/>
          <!-- Flying robot -->
          <rect x="220" y="70" width="40" height="40" fill="none" stroke="#000" stroke-width="4"/>
          <!-- Speed streaks -->
          <line x1="160" y1="80" x2="200" y2="80" stroke="#000" stroke-width="3"/>
          <line x1="150" y1="100" x2="190" y2="100" stroke="#000" stroke-width="3"/>
          <text x="200" y="215" text-anchor="middle" font-weight="900" font-size="14">1st LAW: INERTIA KEEPS YOU MOVING!</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "EUREKA!",
        narration: "Sir Isaac Newton's First Law in action!",
        dialogue: "That is INERTIA! Newton's First Law says an object in motion stays in motion unless an outside force stops it! The pebble stopped the board, not you!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <rect x="60" y="60" width="280" height="110" fill="none" stroke="#000" stroke-width="3"/>
          <text x="200" y="95" text-anchor="middle" font-weight="900" font-size="16">NEWTON'S 1st LAW: INERTIA</text>
          <text x="200" y="125" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">"Lazy objects want to stay lazy.</text>
          <text x="200" y="145" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="bold" font-size="14">Fast objects want to stay fast!"</text>
          <text x="200" y="200" text-anchor="middle" font-weight="bold" font-size="13">Unless an unbalanced external force acts!</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "VROOM!",
        narration: "Sparky compares pushing an empty cart vs a cart full of heavy bricks.",
        dialogue: "What about the 2nd Law: F = m × a? If I push a light cart, it zooms fast! But to push a heavy cart with double mass, I need DOUBLE the FORCE!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <rect x="50" y="60" width="80" height="50" fill="none" stroke="#000" stroke-width="3"/>
          <text x="90" y="90" text-anchor="middle" font-weight="bold" font-size="12">Mass = 5 kg</text>
          <text x="90" y="140" text-anchor="middle" font-weight="bold" font-size="13">Small Force = High Speed</text>
          <!-- Heavy Cart -->
          <rect x="220" y="60" width="120" height="50" fill="#000"/>
          <text x="280" y="90" text-anchor="middle" fill="#fff" font-weight="bold" font-size="12">Mass = 50 kg</text>
          <text x="280" y="140" text-anchor="middle" font-weight="bold" font-size="13">Huge Force Needed!</text>
          <text x="200" y="200" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="22">FORCE = MASS × ACCELERATION (F = ma)</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "KABOOM!",
        narration: "Sparky releases an inflated cartoon balloon rocket.",
        dialogue: "And Newton's 3rd Law: The balloon shoots air BACKWARDS (Action), so the balloon launches FORWARD (Reaction)! Equal and opposite!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Balloon rocket -->
          <ellipse cx="220" cy="100" rx="60" ry="35" fill="none" stroke="#000" stroke-width="4"/>
          <!-- Forward Thrust Arrow -->
          <path d="M 290 100 L 350 100" stroke="#000" stroke-width="4"/>
          <polygon points="350,95 365,100 350,105" fill="#000"/>
          <text x="330" y="80" font-weight="900" font-size="13">REACTION (Forward)</text>
          <!-- Exhaust Air Lines -->
          <line x1="140" y1="90" x2="70" y2="85" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/>
          <line x1="140" y1="100" x2="60" y2="100" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/>
          <line x1="140" y1="110" x2="70" y2="115" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/>
          <text x="90" y="70" font-weight="900" font-size="13">ACTION (Air blasts back)</text>
          <text x="200" y="190" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="16">FOR EVERY ACTION, AN EQUAL &amp; OPPOSITE REACTION!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: 1st Law states that every object continues in its state of rest or uniform motion unless acted upon by a net external force. 2nd Law states F = ma (rate of change of momentum is proportional to applied force). 3rd Law states to every action there is an equal and opposite reaction.",
    quiz: [
      {
        question: "Why do passengers jerk forward when a fast-moving bus suddenly hits the brakes?",
        options: ["Due to Inertia of motion", "Due to gravity", "Due to friction", "Due to magnetic attraction"],
        correctIndex: 0,
        explanation: "Due to inertia of motion, the passenger's body tends to stay in forward motion even when the bus stops underneath!"
      },
      {
        question: "If a force F = 20 N is applied to a mass m = 4 kg, what is the acceleration (a = F/m)?",
        options: ["5 m/s²", "80 m/s²", "16 m/s²", "0.2 m/s²"],
        correctIndex: 0,
        explanation: "From F = ma, a = F / m = 20 N / 4 kg = 5 m/s²!"
      }
    ]
  },

  // =========================================================================
  // CLASS 10: SCIENCE - ELECTRICITY & OHM'S LAW (V = IR)
  // =========================================================================
  "c10-sci-electricity": {
    id: "c10-sci-electricity",
    classNum: 10,
    subjectId: "c10-sci",
    title: "Ohm's Law: The Push, The Flow, and The Squeeze!",
    subtitle: "Voltage pushes, Current flows, and Resistance squeezes the wire: V = I × R!",
    concept: "Ohm's Law: At constant temperature, current (I) is directly proportional to potential difference (V), giving V = IR.",
    characters: ["prof-paws", "pixel-bot", "sparky"],
    interactiveLabId: "ohms-law-lab",
    panels: [
      {
        panelNum: 1,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "ZAP!",
        narration: "A cartoon cross-section of a copper wire.",
        dialogue: "Imagine electric current as a 3-character cartoon drama! Voltage is the big boss pushing the electrons forward through the pipeline!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Pipe tunnel -->
          <line x1="40" y1="90" x2="360" y2="90" stroke="#000" stroke-width="4"/>
          <line x1="40" y1="170" x2="360" y2="170" stroke="#000" stroke-width="4"/>
          <!-- Voltage character pushing -->
          <circle cx="80" cy="130" r="22" fill="#000"/>
          <text x="80" y="136" text-anchor="middle" fill="#fff" font-weight="900" font-size="14">VOLT</text>
          <!-- Current Ampere -->
          <circle cx="200" cy="130" r="18" fill="none" stroke="#000" stroke-width="3"/>
          <text x="200" y="135" text-anchor="middle" font-weight="900" font-size="12">AMP</text>
          <path d="M 110 130 L 165 130" stroke="#000" stroke-width="4" marker-end="url(#arrow)"/>
          <text x="140" y="115" font-weight="900" font-size="11">PUSH!</text>
          <text x="200" y="210" text-anchor="middle" font-weight="bold" font-size="14">VOLTAGE (V) = POTENTIAL PUSH!</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "OOF!",
        narration: "The wire narrows down into a tight bottleneck.",
        dialogue: "Look who is sitting on top of the wire squeezing it tight! That's Mister Resistance (Ohm), trying to choke the electron flow!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Constricted pipe -->
          <path d="M 40 90 L 150 90 Q 200 130, 250 90 L 360 90" stroke="#000" stroke-width="4" fill="none"/>
          <path d="M 40 170 L 150 170 Q 200 130, 250 170 L 360 170" stroke="#000" stroke-width="4" fill="none"/>
          <!-- Ohm rope squeezer -->
          <circle cx="200" cy="65" r="20" fill="#000"/>
          <text x="200" y="71" text-anchor="middle" fill="#fff" font-weight="900" font-size="12">OHM (R)</text>
          <text x="200" y="210" text-anchor="middle" font-weight="bold" font-size="14">RESISTANCE (R) SQUEEZES CURRENT!</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "CALCULATING!",
        narration: "Pixel displays Georg Ohm's golden equation.",
        dialogue: "If Voltage (V) increases, Current (I) shoots up! But if Resistance (R) doubles, Current drops to half! That gives: V = I × R!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Ohm's law triangle -->
          <polygon points="200,45 120,165 280,165" fill="none" stroke="#000" stroke-width="4"/>
          <line x1="160" y1="105" x2="240" y2="105" stroke="#000" stroke-width="3"/>
          <line x1="200" y1="105" x2="200" y2="165" stroke="#000" stroke-width="3"/>
          <text x="200" y="90" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="28">V</text>
          <text x="165" y="145" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="26">I</text>
          <text x="235" y="145" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="26">R</text>
          <text x="200" y="205" text-anchor="middle" font-weight="bold" font-size="16">V = I × R | I = V / R | R = V / I</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "AHA!",
        narration: "Real-world NCERT board application: Series vs Parallel!",
        dialogue: "In series, resistors add together (R1 + R2), making it harder to flow. In parallel, you open extra highway lanes so current flows freely!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <rect x="50" y="55" width="130" height="90" fill="none" stroke="#000" stroke-width="2"/>
          <text x="115" y="85" text-anchor="middle" font-weight="bold" font-size="13">SERIES</text>
          <text x="115" y="115" text-anchor="middle" font-weight="900" font-size="14">Req = R₁ + R₂</text>
          <rect x="220" y="55" width="130" height="90" fill="none" stroke="#000" stroke-width="2"/>
          <text x="285" y="85" text-anchor="middle" font-weight="bold" font-size="13">PARALLEL</text>
          <text x="285" y="115" text-anchor="middle" font-weight="900" font-size="14">1/Req = 1/R₁ + 1/R₂</text>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="14">PARALLEL LANES = LOWER TOTAL RESISTANCE!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: Ohm's Law states that V = IR. Potential difference across a metallic wire is directly proportional to current flowing through it, provided temperature remains constant. The SI unit of resistance is the Ohm (Ω).",
    quiz: [
      {
        question: "If a circuit has a voltage of 12 V and a resistance of 4 Ω, what is the current I?",
        options: ["3 Amperes", "48 Amperes", "8 Amperes", "16 Amperes"],
        correctIndex: 0,
        explanation: "Using Ohm's Law I = V / R = 12 V / 4 Ω = 3 Amperes!"
      },
      {
        question: "In your home, why are electrical appliances connected in parallel rather than series?",
        options: [
          "Each appliance gets full 220V voltage and operates independently",
          "It uses fewer wires",
          "It prevents appliances from ever turning on",
          "Parallel circuits do not need electricity"
        ],
        correctIndex: 0,
        explanation: "In parallel, each appliance receives the full line voltage (220V) and if one turns off, the others continue running!"
      }
    ]
  },

  // =========================================================================
  // CLASS 11: PHYSICS - PROJECTILE MOTION & VECTORS
  // =========================================================================
  "c11-phy-vectors": {
    id: "c11-phy-vectors",
    classNum: 11,
    subjectId: "c11-phy",
    title: "Vectors & Projectiles: The Parabolic Cannonball Arc!",
    subtitle: "Horizontal speed glides forever, Gravity pulls down: The majestic parabola!",
    concept: "Projectile motion combines constant horizontal velocity vx = v*cos(θ) with vertically accelerated motion vy = v*sin(θ) - gt.",
    characters: ["pixel-bot", "prof-paws"],
    interactiveLabId: "projectile-lab",
    panels: [
      {
        panelNum: 1,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "KABOOM!",
        narration: "A cartoon pirate cannon fires a bowling ball into the sky.",
        dialogue: "Professor! When I shoot the cannonball at an angle, why doesn't it travel in a straight line forever? Why does it curve into a bowl shape?",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Cannon -->
          <line x1="50" y1="180" x2="90" y2="140" stroke="#000" stroke-width="12" stroke-linecap="round"/>
          <circle cx="50" cy="180" r="15" fill="#000"/>
          <!-- Parabolic curve trajectory -->
          <path d="M 90 140 Q 200 40, 340 180" fill="none" stroke="#000" stroke-width="3" stroke-dasharray="6 4"/>
          <circle cx="200" cy="65" r="10" fill="#000"/>
          <text x="200" y="45" text-anchor="middle" font-weight="900" font-size="12">Peak Height (Hmax)</text>
          <text x="200" y="210" text-anchor="middle" font-weight="bold" font-size="14">THE CURVE IS A PARABOLA: y = ax - bx²</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "AHA!",
        narration: "Vector decomposition: Split the diagonal speed into two orthogonal partners!",
        dialogue: "Because the initial velocity vector 'v' splits into TWO independent components: Vx = v·cos(θ) going sideways, and Vy = v·sin(θ) going up!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Coordinate axis -->
          <line x1="70" y1="180" x2="330" y2="180" stroke="#000" stroke-width="3"/>
          <line x1="70" y1="180" x2="70" y2="50" stroke="#000" stroke-width="3"/>
          <!-- Resultant vector -->
          <line x1="70" y1="180" x2="220" y2="80" stroke="#000" stroke-width="4"/>
          <polygon points="220,80 210,95 225,95" fill="#000"/>
          <text x="160" y="70" font-weight="900" font-size="16">v (Launch Velocity)</text>
          <!-- Horizontal component -->
          <line x1="70" y1="180" x2="220" y2="180" stroke="#000" stroke-width="3" stroke-dasharray="4 3"/>
          <text x="145" y="205" font-weight="bold" font-size="13">Vx = v · cos(θ) [Constant!]</text>
          <!-- Vertical component -->
          <line x1="220" y1="180" x2="220" y2="80" stroke="#000" stroke-width="3" stroke-dasharray="4 3"/>
          <text x="230" y="130" font-weight="bold" font-size="13">Vy = v · sin(θ)</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Pixel Bot",
        characterKey: "pixel-bot",
        soundEffect: "DING!",
        narration: "Gravity only messes with the vertical axis!",
        dialogue: "I get it! Sideways speed Vx NEVER changes because there's no air friction! But gravity 'g' pulls down vertically, stopping Vy at the top and pulling it down!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <circle cx="200" cy="90" r="16" fill="#000"/>
          <path d="M 200 90 L 270 90" stroke="#000" stroke-width="4" marker-end="url(#arrow)"/>
          <text x="240" y="80" font-weight="900" font-size="12">Vx (Still flying sideways!)</text>
          <text x="200" y="135" text-anchor="middle" font-weight="bold" font-size="13">At Peak: Vy = 0 m/s!</text>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="14">Total Time of Flight T = (2v · sin θ) / g</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "MAXIMUM RANGE!",
        narration: "The magic angle of 45 degrees!",
        dialogue: "To launch a cartoon cannonball the MAXIMUM distance (Range), always shoot at exactly 45 DEGREES! Because sin(2 × 45°) = sin(90°) = 1 (Maximum)!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <text x="200" y="70" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="22">R = (v² · sin 2θ) / g</text>
          <rect x="70" y="90" width="260" height="50" fill="none" stroke="#000" stroke-width="3"/>
          <text x="200" y="122" text-anchor="middle" font-weight="900" font-size="16">MAX RANGE OCCURS AT θ = 45°!</text>
          <text x="200" y="190" text-anchor="middle" font-weight="bold" font-size="14">Both 30° and 60° land at the exact same spot!</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: Projectile motion is 2D motion with constant acceleration g downward and zero acceleration horizontally. Maximum horizontal range occurs at an angle of 45 degrees (Rmax = v²/g).",
    quiz: [
      {
        question: "At what launch angle does an artillery shell or cricket ball achieve the maximum horizontal range?",
        options: ["45 degrees", "90 degrees", "30 degrees", "60 degrees"],
        correctIndex: 0,
        explanation: "At θ = 45°, sin(2θ) = sin(90°) = 1, which maximizes the range formula R = (v² sin 2θ) / g!"
      },
      {
        question: "What is the vertical velocity of a projectile at the highest point of its trajectory?",
        options: ["0 m/s", "Equal to launch speed", "Infinity", "Negative 9.8 m/s"],
        correctIndex: 0,
        explanation: "At the peak, vertical velocity momentarily becomes zero before reversing downward, while horizontal velocity continues unchanged!"
      }
    ]
  },

  // =========================================================================
  // CLASS 12: PHYSICS - FARADAY'S LAW & LENZ'S LAW
  // =========================================================================
  "c12-phy-faraday": {
    id: "c12-phy-faraday",
    classNum: 12,
    subjectId: "c12-phy",
    title: "Faraday & Lenz's Law: Turning Magnetism into Sparks!",
    subtitle: "Change the magnetic flux, and the coil fights back with induced electric current!",
    concept: "Faraday's Law: EMF = -dΦ/dt. Lenz's Law: The direction of induced current opposes the change in magnetic flux that produced it.",
    characters: ["prof-paws", "sparky"],
    interactiveLabId: "faraday-magnet-lab",
    panels: [
      {
        panelNum: 1,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "ZOOM!",
        narration: "Sparky pushes a North pole bar magnet towards a copper coil.",
        dialogue: "Look Prof! There's no battery connected to this loop of wire! But the second I thrust the magnet forward, the galvanometer needle twitches!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Magnet -->
          <rect x="40" y="90" width="60" height="35" fill="#000"/>
          <text x="70" y="112" text-anchor="middle" fill="#fff" font-weight="bold" font-size="14">N</text>
          <rect x="100" y="90" width="60" height="35" fill="none" stroke="#000" stroke-width="3"/>
          <text x="130" y="112" text-anchor="middle" font-weight="bold" font-size="14">S</text>
          <!-- Motion arrow -->
          <path d="M 165 107 L 210 107" stroke="#000" stroke-width="4" marker-end="url(#arrow)"/>
          <!-- Coil loop -->
          <ellipse cx="270" cy="107" rx="20" ry="50" fill="none" stroke="#000" stroke-width="4"/>
          <ellipse cx="290" cy="107" rx="20" ry="50" fill="none" stroke="#000" stroke-width="4"/>
          <ellipse cx="310" cy="107" rx="20" ry="50" fill="none" stroke="#000" stroke-width="4"/>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="14">CHANGING MAGNETIC FLUX INDUCES EMF!</text>
        </svg>`
      },
      {
        panelNum: 2,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "AHA!",
        narration: "Michael Faraday's magnificent discovery in 1831.",
        dialogue: "That is Electromagnetic Induction! As long as the magnetic flux (lines passing through the coil) is CHANGING, an Electromotive Force (EMF) is born!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <rect x="60" y="60" width="280" height="100" fill="none" stroke="#000" stroke-width="3"/>
          <text x="200" y="95" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="24">EMF (ε) = - dΦ / dt</text>
          <text x="200" y="130" text-anchor="middle" font-weight="bold" font-size="13">Φ = B · A · cos(θ) [Magnetic Flux in Webers]</text>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="14">No motion = No flux change = ZERO current!</text>
        </svg>`
      },
      {
        panelNum: 3,
        speaker: "Sparky",
        characterKey: "sparky",
        soundEffect: "RESIST!",
        narration: "Lenz's Law: Why is there a minus sign in front of the equation?",
        dialogue: "Wait, why is there a MINUS sign in ε = - dΦ/dt? Is the coil being stubborn?",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <text x="200" y="80" text-anchor="middle" font-weight="900" font-size="48">-</text>
          <text x="200" y="125" text-anchor="middle" font-family="'Comic Neue', sans-serif" font-weight="900" font-size="18">LENZ'S LAW OF STUBBORNNESS!</text>
          <text x="200" y="155" text-anchor="middle" font-weight="bold" font-size="13">"I will oppose whatever you are doing to me!"</text>
          <text x="200" y="195" text-anchor="middle" font-weight="bold" font-size="14">Direct consequence of Conservation of Energy!</text>
        </svg>`
      },
      {
        panelNum: 4,
        speaker: "Professor Paws",
        characterKey: "prof-paws",
        soundEffect: "REPEL!",
        narration: "Push a North pole in, the coil creates a North pole to push back!",
        dialogue: "YES! If you push a North pole in, current circulates counter-clockwise to form its OWN North pole to repel you! Nature never gives free energy!",
        svgArt: `<svg viewBox="0 0 400 240" class="comic-svg">
          <rect x="20" y="20" width="360" height="200" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Two repelling North faces -->
          <circle cx="130" cy="120" r="45" fill="none" stroke="#000" stroke-width="4"/>
          <text x="130" y="128" text-anchor="middle" font-weight="900" font-size="26">N</text>
          <text x="130" y="190" text-anchor="middle" font-weight="bold" font-size="12">Magnet North</text>
          <path d="M 180 120 L 220 120" stroke="#000" stroke-width="4"/>
          <!-- Repelling arrows -->
          <text x="200" y="110" text-anchor="middle" font-weight="900" font-size="14">REPEL!</text>
          <circle cx="270" cy="120" r="45" fill="none" stroke="#000" stroke-width="4"/>
          <text x="270" y="128" text-anchor="middle" font-weight="900" font-size="26">N</text>
          <text x="270" y="190" text-anchor="middle" font-weight="bold" font-size="12">Induced Coil North</text>
        </svg>`
      }
    ],
    takeaway: "NCERT Takeaway: Faraday's law states that induced EMF in a circuit equals the negative time rate of change of magnetic flux through it: ε = - dΦ/dt. Lenz's law dictates that the polarity of induced EMF always opposes the change in flux causing it, conserving energy.",
    quiz: [
      {
        question: "What happens if a magnet remains completely still inside a stationary coil?",
        options: ["Zero current is induced", "Maximum current flows", "The coil melts", "A sparks shower begins"],
        correctIndex: 0,
        explanation: "Induction requires a CHANGE in magnetic flux over time (dΦ/dt). If both magnet and coil are still, dΦ/dt = 0, so induced EMF is zero!"
      },
      {
        question: "Lenz's Law is a direct consequence of which fundamental conservation law of physics?",
        options: ["Conservation of Energy", "Conservation of Charge", "Conservation of Mass", "Conservation of Momentum"],
        correctIndex: 0,
        explanation: "Lenz's law complies with Conservation of Energy: the mechanical work done pushing the magnet against opposing magnetic force is converted into electrical energy!"
      }
    ]
  }
};

window.COMIC_STORIES = COMIC_STORIES;
