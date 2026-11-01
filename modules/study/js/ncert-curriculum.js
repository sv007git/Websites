/**
 * NCERT Curriculum Database (English Medium: Class 1 to 12)
 * Comprehensive mapping of classes, subjects, textbooks, chapters,
 * core concepts, and cartoon themes.
 */

const NCERT_DATA = {
  stages: [
    { id: "foundational", name: "Foundational Stage", classes: [1, 2], desc: "Play, phonics, number joy, senses & curious nature", icon: "🌱" },
    { id: "preparatory", name: "Preparatory Stage", classes: [3, 4, 5], desc: "Math Magic, Looking Around, environmental wonders & creative English", icon: "🚀" },
    { id: "middle", name: "Middle School Stage", classes: [6, 7, 8], desc: "Deep Science exploration, Algebra, History mysteries, Earth & Civics", icon: "🔬" },
    { id: "secondary", name: "Secondary Stage", classes: [9, 10], desc: "Physics, Chemistry, Bio life processes, Triangles, World history & democracy", icon: "⚡" },
    { id: "senior", name: "Senior Secondary Stage", classes: [11, 12], desc: "Kinematics, Organic Chem, Genetics, Calculus, Electromagnetism & Modern Science", icon: "🎓" }
  ],

  classes: {
    1: {
      title: "Class 1: Little Explorers",
      tagline: "Joyful doodles, shapes, animal buddies, and fun sounds!",
      stage: "foundational",
      subjects: [
        {
          id: "c1-math",
          name: "Mathematics (Joyful Math)",
          icon: "🔢",
          badge: "Math Magic",
          desc: "Shapes, counting monsters, finding things inside-outside, and happy number lines.",
          chapters: [
            { id: "c1-m1", title: "Shapes & Space: Bigger, Smaller & Inside Out", comicId: "c1-math-shapes", concept: "Spatial awareness, geometric shapes (circle, triangle, square)", cartoonHook: "Pixel Bot tries to pack square toys into round comic boxes!" },
            { id: "c1-m2", title: "Numbers 1 to 9: Counting Friendly Monsters", comicId: "c1-math-counting", concept: "Cardinality, one-to-one matching, counting objects", cartoonHook: "Sparky meets nine hungry space alien friends!" },
            { id: "c1-m3", title: "Addition: Putting Smiles Together", comicId: "c1-math-add", concept: "Combining groups (2 apples + 3 apples = 5 apples)", cartoonHook: "Prof Paws mixes fish crackers in a giant cartoon bowl." },
            { id: "c1-m4", title: "Subtraction: Vanishing Comic Balloons", comicId: "c1-math-sub", concept: "Taking away, remaining items", cartoonHook: "Popping balloons one by one: 5 pop 2 leaves 3!" }
          ]
        },
        {
          id: "c1-eng",
          name: "English (Mridang / Marigold)",
          icon: "📚",
          badge: "Story Time",
          desc: "Alphabet phonics, rhyming poems, animal chatter, and picture reading.",
          chapters: [
            { id: "c1-e1", title: "Phonics Adventure: The Singing Letters", comicId: "c1-eng-phonics", concept: "Vowel & consonant sounds, letter formation", cartoonHook: "Letters A to Z throw a noisy cartoon rock concert!" },
            { id: "c1-e2", title: "Two Little Hands: My Amazing Body", comicId: "c1-eng-body", concept: "Action words (clap, stamp, blink), body parts", cartoonHook: "Robot Pixel tries to dance without tangling his rubber arms!" },
            { id: "c1-e3", title: "The Three Little Pigs: Straw, Sticks & Bricks", comicId: "c1-eng-pigs", concept: "Story sequencing, comprehension, vocabulary", cartoonHook: "The Big Bad Wolf tries to blow down a cartoon comic panel border!" }
          ]
        },
        {
          id: "c1-evs",
          name: "Environmental Fun (The World Around Me)",
          icon: "🌿",
          badge: "Nature Watch",
          desc: "Plants, pets, family members, clean habits, and our five superpower senses.",
          chapters: [
            { id: "c1-v1", title: "My Five Super Senses: Eyes, Ears & Tastebuds!", comicId: "c1-evs-senses", concept: "Sight, hearing, smell, taste, touch", cartoonHook: "Prof Paws tests cat-vision vs Pixel's robot ultrasonic radar!" },
            { id: "c1-v2", title: "Living vs Non-Living: The Jumping Frog & Rock", comicId: "c1-evs-living", concept: "Growth, breathing, eating, movement", cartoonHook: "Sparky asks why his pencil doesn't eat cartoon pancakes!" }
          ]
        }
      ]
    },

    2: {
      title: "Class 2: Curious Creators",
      tagline: "Patterns, time clocks, animal habitats, and growing words!",
      stage: "foundational",
      subjects: [
        {
          id: "c2-math",
          name: "Mathematics (Joyful Math)",
          icon: "📏",
          badge: "Number Fun",
          desc: "Counting in tens, shapes & shadows, footprints, and weighing cartoon giants.",
          chapters: [
            { id: "c2-m1", title: "Counting in Tens: The Bundles of 10 Magic", comicId: "c2-math-tens", concept: "Place value (Tens & Ones), grouping", cartoonHook: "Prof Paws ties 10 mice squeaks into neat comic parcels!" },
            { id: "c2-m2", title: "Patterns Everywhere: Stripes, Dots & Stars", comicId: "c2-math-patterns", concept: "Repeating sequences, symmetry", cartoonHook: "A zebra paints polka dots on a leopard's cartoon comic page!" }
          ]
        },
        {
          id: "c2-eng",
          name: "English (Mridang / Marigold)",
          icon: "📖",
          badge: "Word Magic",
          desc: "Whimsical rhymes, friendship tales, and spelling cartoon capers.",
          chapters: [
            { id: "c2-e1", title: "Haldi's Adventure: The Giraffe With Glasses", comicId: "c2-eng-haldi", concept: "Adjectives, questions, reading fluency", cartoonHook: "Smiley the cartoon giraffe reads books while peeking over clouds!" },
            { id: "c2-e2", title: "The Wind and The Sun: Who is Stronger?", comicId: "c2-eng-windsun", concept: "Kindness vs force, opposites, narrative", cartoonHook: "Wind blows comic letters off the page, but Sun brings warmth!" }
          ]
        },
        {
          id: "c2-evs",
          name: "Environmental Studies (Our Surroundings)",
          icon: "🐾",
          badge: "Animal Kingdom",
          desc: "Seasons, weather, water drops, and friendly neighborhood helpers.",
          chapters: [
            { id: "c2-v1", title: "Seasons Parade: Summer, Monsoon & Winter Chill", comicId: "c2-evs-seasons", concept: "Weather cycle, clothing, food", cartoonHook: "Pixel the robot needs an umbrella so his circuits don't rust in the rain!" }
          ]
        }
      ]
    },

    3: {
      title: "Class 3: Junior Investigators",
      tagline: "Fractions of pizza, plant detectives, and maps of our street!",
      stage: "preparatory",
      subjects: [
        {
          id: "c3-math",
          name: "Mathematics (Math-Magic)",
          icon: "🍕",
          badge: "Math Magic",
          desc: "Where to look from, fun with numbers, give and take, and shape journeys.",
          chapters: [
            { id: "c3-m1", title: "Where to Look From: Top View vs Side View", comicId: "c3-math-views", concept: "3D perspectives, isometric projections, symmetry lines", cartoonHook: "Prof Paws draws a car that looks like a comic rectangle from outer space!" },
            { id: "c3-m2", title: "Fun with Numbers: Triple Digit Rockets", comicId: "c3-math-3digits", concept: "3-digit numbers, expanded form, skipping by 50s and 100s", cartoonHook: "Pixel builds a rocket that only fuels up with hundreds blocks!" }
          ]
        },
        {
          id: "c3-evs",
          name: "EVS (Looking Around)",
          icon: "🌱",
          badge: "Green World",
          desc: "Poonam's day out, plant fairy, water 'o' water, and little shelters.",
          chapters: [
            { id: "c3-v1", title: "The Plant Fairy: Roots, Stems & Chlorophyll Magic", comicId: "c3-evs-plantfairy", concept: "Plant anatomy, leaves, venation, photosynthesis basics", cartoonHook: "The Plant Fairy grants cartoon leaves green solar shields to make food!" },
            { id: "c3-v2", title: "Water O Water: The Drop That Traveled the World", comicId: "c3-evs-water", concept: "States of water, water conservation, river journey", cartoonHook: "Splash the water droplet evades the hot comic Sun frying pan!" }
          ]
        },
        {
          id: "c3-eng",
          name: "English (Marigold / Santoor)",
          icon: "✍️",
          badge: "Poetry & Tales",
          desc: "Good morning birds, the Magic Garden, and Nina's baby sparrows.",
          chapters: [
            { id: "c3-e1", title: "The Magic Garden: Whispering Flowers & Bees", comicId: "c3-eng-magicgarden", concept: "Creative writing, compound words, dialogues", cartoonHook: "Sunflowers and Marigolds gossip about what the kids brought for lunch!" }
          ]
        }
      ]
    },

    4: {
      title: "Class 4: Science Scouts",
      tagline: "Tick-tick clocks, how flowers bloom, and going to school around India!",
      stage: "preparatory",
      subjects: [
        {
          id: "c4-math",
          name: "Mathematics (Math-Magic)",
          icon: "⏰",
          badge: "Math Wizard",
          desc: "Building with bricks, tick-tick clock, tables and shares, and jug measurements.",
          chapters: [
            { id: "c4-m1", title: "Tick-Tick-Tick: The Secret Life of Clocks", comicId: "c4-math-time", concept: "Reading 12-hr/24-hr time, elapsed time, minutes & seconds", cartoonHook: "A cartoon snail races a cheetah on a giant analog clock face!" },
            { id: "c4-m2", title: "Tables & Shares: The Great Carrot Division", comicId: "c4-math-division", concept: "Multiplication tables, equal sharing, division remainder", cartoonHook: "24 carrots must be equally shared among 4 hungry cartoon bunnies!" }
          ]
        },
        {
          id: "c4-evs",
          name: "EVS (Looking Around)",
          icon: "🐘",
          badge: "Eco Explorer",
          desc: "Going to school across rivers, a day with Nandu the elephant, and valley of flowers.",
          chapters: [
            { id: "c4-v1", title: "A Day with Nandu: Elephant Herds & Teamwork", comicId: "c4-evs-nandu", concept: "Animal families, leader matriarch, social structures in nature", cartoonHook: "Baby Nandu the cartoon elephant takes a mud shower bath with the herd!" },
            { id: "c4-v2", title: "From the Window: Changing Landscapes & Bridges", comicId: "c4-evs-window", concept: "Indian geography, terrain, transport systems, tunnels", cartoonHook: "The comic express train rushes through 2000 bridges and 92 tunnels!" }
          ]
        },
        {
          id: "c4-eng",
          name: "English (Marigold)",
          icon: "🏹",
          badge: "Adventure Tales",
          desc: "Wake up poems, Nasruddin's aim, Alice in Wonderland, and Pinocchio.",
          chapters: [
            { id: "c4-e1", title: "Nasruddin's Aim: The Boastful Archer Comic", comicId: "c4-eng-nasruddin", concept: "Idioms, humorous dialogue, storytelling flair", cartoonHook: "Nasruddin misses the target twice and claims it was the minister's aim!" }
          ]
        }
      ]
    },

    5: {
      title: "Class 5: Wonder Seekers",
      tagline: "Super senses of animals, seeds that travel, maps, and space voyages!",
      stage: "preparatory",
      subjects: [
        {
          id: "c5-evs",
          name: "EVS (Looking Around)",
          icon: "🧭",
          badge: "Discovery Lab",
          desc: "Super senses of animals, snake charmers, seeds traveling on wind, and Sunita in space.",
          chapters: [
            { id: "c5-v1", title: "Super Senses: The Hawk Eye, Dog Nose & Bat Sonar", comicId: "c5-evs-supersenses", concept: "Animal sensory adaptation, pheromone trails in ants, echolocation", cartoonHook: "Ants leave cartoon emoji smell trails so nobody gets lost in the kitchen!" },
            { id: "c5-v2", title: "Seeds That Travel: Parachutes, Hooks & Pop-Pistols", comicId: "c5-evs-seeds", concept: "Seed dispersal methods: wind, water, animals, explosive pods", cartoonHook: "Dandelion seeds wear cartoon flight goggles and parachute into new yards!" },
            { id: "c5-v3", title: "Sunita in Space: Floating Hair & Bouncing Food Drops", comicId: "c5-evs-space", concept: "Zero gravity, orbit, Earth from space, atmosphere", cartoonHook: "Astronaut Sunita tries to catch a floating cartoon juice bubble in the shuttle!" }
          ]
        },
        {
          id: "c5-math",
          name: "Mathematics (Math-Magic)",
          icon: "📐",
          badge: "Geometry Genius",
          desc: "The fish tale, shapes and angles, how many squares, and parts and wholes (fractions).",
          chapters: [
            { id: "c5-m1", title: "Parts & Wholes: The Pizza Monster Fraction Feast", comicId: "c5-math-fractions", concept: "Equivalent fractions, numerators, denominators, proper & improper", cartoonHook: "A monster eats 3/8 of a comic pizza—can Pixel rescue the remaining 5/8?" },
            { id: "c5-m2", title: "Shapes & Angles: Acute, Obtuse & Right Angle Police", comicId: "c5-math-angles", concept: "Degrees, 90-degree right angles, clock hands angles", cartoonHook: "The cartoon angle police measure alligator jaws with a giant protractor!" }
          ]
        },
        {
          id: "c5-eng",
          name: "English (Marigold)",
          icon: "🍦",
          badge: "Storyland",
          desc: "Ice-cream man, Robinson Crusoe finds a footprint, Rip Van Winkle, and Gulliver.",
          chapters: [
            { id: "c5-e1", title: "Robinson Crusoe: The Mystery Footprint in the Sand", comicId: "c5-eng-crusoe", concept: "Descriptive suspense, mystery writing, pronouns", cartoonHook: "Robinson spots a cartoon giant footprint: 'Whose cartoon toes are these?!'" }
          ]
        }
      ]
    },

    6: {
      title: "Class 6: Middle School Pioneers",
      tagline: "Electricity circuits, light & shadows, integers, and early civilizations!",
      stage: "middle",
      subjects: [
        {
          id: "c6-sci",
          name: "Science (Curiosity / NCERT Science)",
          icon: "💡",
          badge: "Science Quest",
          desc: "Components of food, sorting materials, motion & distance, light, electricity, and organisms.",
          chapters: [
            { id: "c6-s1", title: "Electricity & Circuits: The Electron Sprint Track", comicId: "c6-sci-circuits", concept: "Closed vs open circuit, switch, cell terminal (+/-), conductors & insulators", cartoonHook: "Electrons put on running shoes and sprint around the comic wire circuit!" },
            { id: "c6-s2", title: "Light, Shadows & Reflections: The Pin-Hole Detective", comicId: "c6-sci-light", concept: "Rectilinear propagation of light, opaque/transparent/translucent, mirrors", cartoonHook: "Shadows play hide-and-seek when Sparky brings a cartoon flashlight!" },
            { id: "c6-s3", title: "Components of Food: Carbohydrates, Proteins & Vitamins", comicId: "c6-sci-food", concept: "Nutrients, balanced diet, iodine test for starch, deficiency diseases", cartoonHook: "Vitamin C and Protein pump iron at the cartoon body gym!" }
          ]
        },
        {
          id: "c6-math",
          name: "Mathematics (Ganita Prakash)",
          icon: "➕",
          badge: "Math Explorer",
          desc: "Knowing our numbers, whole numbers, playing with numbers, integers, fractions & algebra.",
          chapters: [
            { id: "c6-m1", title: "Integers: Climbing Above & Diving Below Zero!", comicId: "c6-math-integers", concept: "Negative numbers, number line operations, absolute value, real-world elevations", cartoonHook: "A cartoon submarine dives to -50m while a balloon flies to +50m!" },
            { id: "c6-m2", title: "Introduction to Algebra: The Mystery Box 'x'", comicId: "c6-math-algebra", concept: "Variables, constants, expressions, balance scale equations", cartoonHook: "Detective Doodler weighs mystery boxes 'x' against 5 heavy cartoon weights!" }
          ]
        },
        {
          id: "c6-soc",
          name: "Social Science (History, Geo & Civics)",
          icon: "🏛️",
          badge: "Time Traveler",
          desc: "From hunting to growing food, early cities (Harappa), Earth in solar system, and diversity.",
          chapters: [
            { id: "c6-ss1", title: "The Indus Valley: Mystery of the Great Bath & Seals", comicId: "c6-soc-harappa", concept: "Urban planning, drainage systems, Harappan seals, trade networks", cartoonHook: "Luna the owl travels in a comic time machine into ancient Mohenjo-daro!" },
            { id: "c6-ss2", title: "The Earth in the Solar System: Our Cosmic Neighborhood", comicId: "c6-soc-solarsystem", concept: "Planets, rotation, revolution, orbits, asteroid belt", cartoonHook: "Jupiter shows off its giant red storm spot in a cartoon cosmic fashion show!" }
          ]
        },
        {
          id: "c6-eng",
          name: "English (Poorvi / Honeysuckle)",
          icon: "📜",
          badge: "Literary Gems",
          desc: "Who did Patrick's homework, how the dog found a master, and Taro's reward.",
          chapters: [
            { id: "c6-e1", title: "Who Did Patrick's Homework? The Tiny Elf's Deal", comicId: "c6-eng-patrick", concept: "Theme of self-reliance, character arcs, funny dialogue", cartoonHook: "A tiny 3-inch comic elf shrieks when asked to solve long division!" }
          ]
        }
      ]
    },

    7: {
      title: "Class 7: Young Scientists",
      tagline: "Photosynthesis factories, heat transfer, acids & bases, and Mughal empires!",
      stage: "middle",
      subjects: [
        {
          id: "c7-sci",
          name: "Science",
          icon: "🧪",
          badge: "Lab Master",
          desc: "Nutrition in plants & animals, heat, acids-bases-salts, physical-chemical changes, motion.",
          chapters: [
            { id: "c7-s1", title: "Nutrition in Plants: Chlorophyll Kitchen & Stomata Doors", comicId: "c7-sci-nutrition", concept: "Autotrophic nutrition, stomata guard cells, xylem transport, glucose + O2", cartoonHook: "Chef Leaf opens microscopic stomata doors to let Carbon Dioxide cook dinner!" },
            { id: "c7-s2", title: "Acids, Bases & Salts: The Litmus Paper Chameleon", comicId: "c7-sci-acids", concept: "pH indicators, hydrochloric acid, sodium hydroxide, neutralization reaction", cartoonHook: "Lemon juice turns blue litmus into screaming red comic ink!" },
            { id: "c7-s3", title: "Heat & Temperature: Conduction, Convection & Radiation", comicId: "c7-sci-heat", concept: "Thermal energy transfer, sea breeze, land breeze, thermos flask design", cartoonHook: "Hot molecules dance wildly and bump their sleepy cold neighbors!" }
          ]
        },
        {
          id: "c7-math",
          name: "Mathematics",
          icon: "📐",
          badge: "Equation Solver",
          desc: "Fractions & decimals, simple equations, lines & angles, triangles and their properties.",
          chapters: [
            { id: "c7-m1", title: "Simple Equations: The Magic Seesaw Balance", comicId: "c7-math-equations", concept: "Linear equations in one variable, transposing terms, inverse operations", cartoonHook: "Whatever you add to the left side of the comic seesaw, add to the right!" }
          ]
        },
        {
          id: "c7-soc",
          name: "Social Science",
          icon: "🗺️",
          badge: "Civic & Globe",
          desc: "New kings and kingdoms, Delhi sultans, inside our Earth, air, and role of government in health.",
          chapters: [
            { id: "c7-ss1", title: "Inside Our Earth: Crust, Mantle & Boiling Liquid Core", comicId: "c7-soc-earthlayers", concept: "Lithosphere, tectonic plates, magma convection, continental vs oceanic crust", cartoonHook: "Pixel drills through Earth's rocky crust like peeling a cartoon hard-boiled egg!" }
          ]
        }
      ]
    },

    8: {
      title: "Class 8: Critical Thinkers",
      tagline: "Microorganisms, force & friction, sound waves, the Indian constitution, and exponents!",
      stage: "middle",
      subjects: [
        {
          id: "c8-sci",
          name: "Science",
          icon: "🔬",
          badge: "Quantum Kid",
          desc: "Crop production, microorganisms friend and foe, force & pressure, sound, chemical effects.",
          chapters: [
            { id: "c8-s1", title: "Microorganisms: Friend or Foe? The Yeast & Bacteria Party", comicId: "c8-sci-micros", concept: "Beneficial bacteria (Lactobacillus), antibiotic penicillin, fermentation, viruses", cartoonHook: "Yeast burps cartoon CO2 bubbles to make fluffy bread loaves!" },
            { id: "c8-s2", title: "Force & Pressure: The Magic of Newton & Pushing Molecules", comicId: "c8-sci-force", concept: "Contact vs non-contact forces, atmospheric pressure, unit Pascal (N/m²)", cartoonHook: "Why high heels sink into mud while elephant flat feet stroll easily!" },
            { id: "c8-s3", title: "Sound: The Oscillating Vocal Cords & Sound Waves", comicId: "c8-sci-sound", concept: "Vibrations, frequency (Hertz), amplitude, pitch, decibels, vacuum silence", cartoonHook: "A cartoon tuning fork vibrates so hard it splashes water drops everywhere!" }
          ]
        },
        {
          id: "c8-math",
          name: "Mathematics",
          icon: "📊",
          badge: "Math Architect",
          desc: "Rational numbers, linear equations, understanding quadrilaterals, algebraic identities, mensuration.",
          chapters: [
            { id: "c8-m1", title: "Algebraic Identities: The (a + b)² Geometric Square", comicId: "c8-math-identities", concept: "(a+b)² = a² + 2ab + b² visual geometric proof using colored tiles", cartoonHook: "Prof Paws cuts a big square into 4 cartoon comic tiles to prove the identity!" }
          ]
        },
        {
          id: "c8-soc",
          name: "Social Science",
          icon: "⚖️",
          badge: "Justice & History",
          desc: "The Indian Constitution, secularism, 1857 revolt, agriculture, and industries.",
          chapters: [
            { id: "c8-ss1", title: "The Indian Constitution: The Rulebook of the Nation", comicId: "c8-soc-constitution", concept: "Fundamental rights, separation of powers, democracy, preamble ideals", cartoonHook: "Luna Owl reviews how every citizen gets an equal comic voice in parliament!" }
          ]
        }
      ]
    },

    9: {
      title: "Class 9: Future Scholars",
      tagline: "Newton's laws of motion, atoms & molecules, cell architecture, and the French Revolution!",
      stage: "secondary",
      subjects: [
        {
          id: "c9-sci",
          name: "Science (Physics, Chemistry & Biology)",
          icon: "⚛️",
          badge: "Science Scholar",
          desc: "Matter in our surroundings, atoms & molecules, the fundamental unit of life, tissues, motion, force & laws of motion, gravitation.",
          chapters: [
            { id: "c9-s1", title: "Motion & Newton's 3 Laws: The Skateboard & Rocket", comicId: "c9-sci-motion", concept: "Inertia, F = ma, Action-Reaction, velocity-time graphs, acceleration", cartoonHook: "Pixel skates into a cartoon wall: inertia keeps him flying forward!" },
            { id: "c9-s2", title: "Atoms & Molecules: Dalton's Tiny Building Blocks", comicId: "c9-sci-atoms", concept: "Law of conservation of mass, mole concept, chemical formula balancing", cartoonHook: "Hydrogen and Oxygen hold hands in a 2:1 dance to form water molecules!" },
            { id: "c9-s3", title: "The Cell: The Cartoon City Inside Us", comicId: "c9-sci-cell", concept: "Mitochondria powerhouse, nucleus mayor, ribosomes factory, cell membrane gate", cartoonHook: "Mitochondria cooks ATP energy bars inside the busy cellular metropolis!" },
            { id: "c9-s4", title: "Gravitation: The Cosmic Bowling Ball on a Trampoline", comicId: "c9-sci-gravity", concept: "Universal law of gravitation F = G(m1*m2)/r², free fall, mass vs weight", cartoonHook: "Sir Isaac Newton ducks as cartoon apples, bowling balls and moons orbit him!" }
          ]
        },
        {
          id: "c9-math",
          name: "Mathematics",
          icon: "📈",
          badge: "Theorem Hunter",
          desc: "Number systems, polynomials, coordinate geometry, linear equations in two variables, triangles, surface areas & volumes.",
          chapters: [
            { id: "c9-m1", title: "Coordinate Geometry: The Battle of René Descartes' Fly", comicId: "c9-math-cartesian", concept: "X-axis, Y-axis, 4 quadrants, plotting coordinates (x, y)", cartoonHook: "René Descartes watches a cartoon fly crawl on the ceiling grid to invent (x, y)!" },
            { id: "c9-m2", title: "Polynomials & Factoring: Unlocking the Quadratic Code", comicId: "c9-math-polynomials", concept: "Degree of polynomial, remainder theorem, factoring by splitting middle term", cartoonHook: "Splitting the middle term like a cartoon ninja slicing a watermelon!" }
          ]
        },
        {
          id: "c9-soc",
          name: "Social Science",
          icon: "🌍",
          badge: "Global Citizen",
          desc: "The French Revolution, Nazism, India - size and location, physical features of India, democratic rights, economics of village Palampur.",
          chapters: [
            { id: "c9-ss1", title: "The French Revolution: Storming the Bastille Fortress", comicId: "c9-soc-frenchrev", concept: "Three estates, Liberty-Equality-Fraternity, Declaration of Rights of Man", cartoonHook: "Peasants demand bread when cartoon nobles suggest they eat cake!" }
          ]
        }
      ]
    },

    10: {
      title: "Class 10: Board Exam Champions",
      tagline: "Chemical reactions, life processes, light reflection & refraction, trigonometry, and federalism!",
      stage: "secondary",
      subjects: [
        {
          id: "c10-sci",
          name: "Science (Physics, Chemistry & Biology)",
          icon: "🧬",
          badge: "Board Ace",
          desc: "Chemical reactions, acids-bases, metals-non-metals, carbon compounds, life processes, control & coordination, heredity, light reflection & refraction, human eye, electricity, magnetic effects of electric current.",
          chapters: [
            { id: "c10-s1", title: "Chemical Reactions & Equations: Balancing the Elements", comicId: "c10-sci-reactions", concept: "Combination, decomposition, displacement, redox reactions, balancing equations", cartoonHook: "Prof Paws balances chemical seesaws so no atom vanishes into thin air!" },
            { id: "c10-s2", title: "Life Processes: The Beating Heart & Kidney Filters", comicId: "c10-sci-lifeprocesses", concept: "Double circulation of blood, nephron filtration, respiration ATP cycle, digestion", cartoonHook: "The cartoon red blood cell carries Oxygen packages through arteries and veins!" },
            { id: "c10-s3", title: "Light: Mirrors, Lenses & Snell's Law", comicId: "c10-sci-optics", concept: "Concave/convex mirrors, lens formula 1/f = 1/v - 1/u, refractive index", cartoonHook: "Light rays bend when entering water like a skateboard hitting thick comic grass!" },
            { id: "c10-s4", title: "Electricity & Ohm's Law: V = IR The Cosmic Triangle", comicId: "c10-sci-electricity", concept: "Current (I), Voltage (V), Resistance (R), series vs parallel circuits, Joule heating", cartoonHook: "Voltage pushes the Electron through the narrow Resistor obstacle course!" },
            { id: "c10-s5", title: "Carbon and Its Compounds: The Covalent Wizard", comicId: "c10-sci-carbon", concept: "Tetravalency, catenation, hydrocarbons, alkanes/alkenes/alkynes, functional groups", cartoonHook: "Carbon has 4 cartoon arms and can hug any atom to build giant chains!" }
          ]
        },
        {
          id: "c10-math",
          name: "Mathematics",
          icon: "📐",
          badge: "Trig Master",
          desc: "Real numbers, polynomials, pair of linear equations, quadratic equations, arithmetic progressions, triangles, trigonometry, statistics, probability.",
          chapters: [
            { id: "c10-m1", title: "Introduction to Trigonometry: SOH CAH TOA on the Pyramids", comicId: "c10-math-trig", concept: "Sin, Cos, Tan ratios, Pythagoras theorem, values at 0°, 30°, 45°, 60°, 90°", cartoonHook: "Pixel measures the height of a cartoon skyscraper using just the shadow and Tan(θ)!" },
            { id: "c10-m2", title: "Arithmetic Progressions: Stepping Up the Number Staircase", comicId: "c10-math-ap", concept: "First term 'a', common difference 'd', nth term formula an = a + (n-1)d", cartoonHook: "Sparky counts steps on a cartoon ladder with constant jump heights!" }
          ]
        },
        {
          id: "c10-soc",
          name: "Social Science",
          icon: "🗳️",
          badge: "Policy Thinker",
          desc: "Nationalism in India, resources and development, power sharing, federalism, money and credit, globalization.",
          chapters: [
            { id: "c10-ss1", title: "Power Sharing & Federalism: The Belgian & Indian Models", comicId: "c10-soc-powersharing", concept: "Decentralization, Union/State lists, checks & balances, linguistic harmony", cartoonHook: "How sharing the steering wheel makes democracy drive smoother without crashing!" }
          ]
        }
      ]
    },

    11: {
      title: "Class 11: Deep Thinkers",
      tagline: "Kinematics vectors, Bohr atom, thermodynamics, cell cycle, limits & derivatives!",
      stage: "senior",
      subjects: [
        {
          id: "c11-phy",
          name: "Physics (NCERT Parts 1 & 2)",
          icon: "🚀",
          badge: "Mechanics Pro",
          desc: "Units & measurements, motion in a straight line, motion in a plane, laws of motion, work energy & power, gravitation, thermodynamics, waves.",
          chapters: [
            { id: "c11-p1", title: "Vectors & Projectile Motion: The Parabolic Cannonball", comicId: "c11-phy-vectors", concept: "Vector resolution, horizontal/vertical components, trajectory parabola, range formula", cartoonHook: "A cannonball fired at 45 degrees draws the perfect cartoon parabola across the page!" },
            { id: "c11-p2", title: "Thermodynamics & Heat Engines: Carnot's Cycle", comicId: "c11-phy-thermo", concept: "First & Second laws of thermodynamics, PV diagrams, entropy, Carnot efficiency", cartoonHook: "Heat can't flow from cold to hot without cartoon sweat and work done!" }
          ]
        },
        {
          id: "c11-chem",
          name: "Chemistry (NCERT Parts 1 & 2)",
          icon: "🧪",
          badge: "Molecular Guru",
          desc: "Some basic concepts of chemistry, structure of atom, periodicity, chemical bonding, chemical thermodynamics, equilibrium, organic chemistry basics.",
          chapters: [
            { id: "c11-c1", title: "Structure of Atom: Bohr Orbits & Quantum Orbitals (s, p, d, f)", comicId: "c11-chem-atom", concept: "Bohr model, de Broglie wavelength, Heisenberg uncertainty principle, electron cloud shapes", cartoonHook: "Electrons refuse to sit still and teleport between energy levels emitting photon sparkles!" },
            { id: "c11-c2", title: "Chemical Bonding & VSEPR: The Balloon Geometry of Molecules", comicId: "c11-chem-bonding", concept: "Hybridization (sp, sp², sp³), Lewis structures, dipole moment, molecular shapes", cartoonHook: "Electron pairs push each other away like tied balloons forming tetrahedrons!" }
          ]
        },
        {
          id: "c11-bio",
          name: "Biology",
          icon: "🦠",
          badge: "Life Explorer",
          desc: "Diversity in living world, cell structure & function, biomolecules, plant physiology, human physiology.",
          chapters: [
            { id: "c11-b1", title: "Cell Cycle & Mitosis: The Great DNA Dance & Division", comicId: "c11-bio-mitosis", concept: "Interphase (G1, S, G2), Prophase, Metaphase, Anaphase, Telophase, Cytokinesis", cartoonHook: "Chromosomes line up on the comic equator and pull apart on spindle ropes!" }
          ]
        },
        {
          id: "c11-math",
          name: "Mathematics",
          icon: "∫",
          badge: "Calculus Starter",
          desc: "Sets, relations & functions, trigonometric functions, complex numbers, permutations & combinations, limits and derivatives.",
          chapters: [
            { id: "c11-m1", title: "Limits & Derivatives: Zooming in on Instantaneous Speed", comicId: "c11-math-limits", concept: "Concept of limit as h -> 0, tangent slope, first principle of derivative dy/dx", cartoonHook: "Zooming infinitely close onto a cartoon curve until it turns into a straight line!" }
          ]
        }
      ]
    },

    12: {
      title: "Class 12: Master Scholars",
      tagline: "Electromagnetism, wave optics, organic mechanisms, genetics DNA, and definite integrals!",
      stage: "senior",
      subjects: [
        {
          id: "c12-phy",
          name: "Physics (NCERT Parts 1 & 2)",
          icon: "⚡",
          badge: "Physics Master",
          desc: "Electric charges & fields, electrostatic potential, current electricity, moving charges & magnetism, electromagnetic induction, wave optics, dual nature of radiation, nuclei, semiconductors.",
          chapters: [
            { id: "c12-p1", title: "Electrostatics & Gauss's Law: The Invisible Flux Cage", comicId: "c12-phy-gauss", concept: "Coulomb's law, electric field lines, Gaussian surfaces, flux ∮E·dA = q/ε0", cartoonHook: "Sparky surrounds positive charges with cartoon Gaussian bubbles to count flux lines!" },
            { id: "c12-p2", title: "Electromagnetic Induction & Faraday's Law: Turning Magnetism into Sparks", comicId: "c12-phy-faraday", concept: "Magnetic flux, Lenz's law, induced EMF = -dΦ/dt, generators & transformers", cartoonHook: "Lenz's Law cartoon: Nature is stubborn and opposes any change in magnetic flux!" },
            { id: "c12-p3", title: "Wave Optics: Young's Double Slit & Light Interference", comicId: "c12-phy-optics", concept: "Huygens wavelets, constructive & destructive interference, fringe width β = λD/d", cartoonHook: "Light waves collide to create zebra stripes of bright light and pitch-black comic ink!" }
          ]
        },
        {
          id: "c12-chem",
          name: "Chemistry (NCERT Parts 1 & 2)",
          icon: "⚗️",
          badge: "Reaction Architect",
          desc: "Solutions, electrochemistry, chemical kinetics, d and f block elements, coordination compounds, haloalkanes, alcohols, aldehydes, ketones, amines, biomolecules.",
          chapters: [
            { id: "c12-c1", title: "Chemical Kinetics: The Activation Energy Mountain", comicId: "c12-chem-kinetics", concept: "Rate of reaction, Arrhenius equation k = A·e^(-Ea/RT), catalysts, half-life t1/2", cartoonHook: "Reactant molecules hike over the Activation Energy mountain, guided by a cartoon Catalyst sherpa!" },
            { id: "c12-c2", title: "Electrochemistry: The Galvanic Cell & Nernst Equation", comicId: "c12-chem-electro", concept: "Daniel cell, standard reduction potentials, salt bridge, EMF of cell, Gibbs free energy", cartoonHook: "Zinc gives away electrons that run across the wire to copper while the salt bridge tosses ions!" }
          ]
        },
        {
          id: "c12-bio",
          name: "Biology",
          icon: "🧬",
          badge: "Genetics Master",
          desc: "Reproduction in organisms, sexual reproduction in plants, human reproduction, genetics & evolution, molecular basis of inheritance, biotechnology, ecology.",
          chapters: [
            { id: "c12-b1", title: "Molecular Basis of Inheritance: The DNA Double Helix & Replication", comicId: "c12-bio-dna", concept: "Watson-Crick model, complementary base pairing (A=T, G≡C), DNA polymerase, transcription to mRNA", cartoonHook: "DNA Helicase acts like a cartoon zipper unzipping the ladder of life for copying!" }
          ]
        },
        {
          id: "c12-math",
          name: "Mathematics (NCERT Parts 1 & 2)",
          icon: "∫dx",
          badge: "Integral Titan",
          desc: "Relations and functions, inverse trigonometric functions, matrices, determinants, continuity & differentiability, integrals, differential equations, vectors, 3D geometry, probability.",
          chapters: [
            { id: "c12-m1", title: "Definite Integrals: Summing Infinite Slices Under the Curve", comicId: "c12-math-integrals", concept: "Fundamental theorem of calculus, Riemann sum of rectangles, area under curve ∫[a,b] f(x)dx", cartoonHook: "Prof Paws squeezes a million infinitely thin comic paper strips to find the exact area!" }
          ]
        }
      ]
    }
  }
};

window.NCERT_DATA = NCERT_DATA;
