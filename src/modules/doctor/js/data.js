/**
 * Holistic Health & Anatomy Database
 * 25 Anatomical Regions across Baby, Man, and Woman (Internals & Externals).
 * 250 Clinically and Holistically Validated Conditions.
 * Features: Causes, Prevention, Lifestyle Changes, Medicines (Allopathy),
 * Ayurveda, Mudras, Yoga & Pranayama, Vitamin/Mineral Deficiencies, and Integrated Daily Protocol.
 * Repository: https://github.com/sv007git/Doctor
 */

const ANATOMY_DATA = {
  "demographics": {
    "man": {
      "id": "man",
      "label": "Adult Male",
      "icon": "👨",
      "description": "Male physiology, musculoskeletal, endocrine, reproductive and organ systems"
    },
    "woman": {
      "id": "woman",
      "label": "Adult Female",
      "icon": "👩",
      "description": "Female physiology, hormonal cycles, pelvic, endocrine and organ systems"
    },
    "baby": {
      "id": "baby",
      "label": "Infant / Child",
      "icon": "👶",
      "description": "Pediatric anatomy, rapid developmental stages, infant digestion, and neonatal sensitivities"
    }
  },
  "layers": {
    "internals": {
      "id": "internals",
      "label": "Internal Organs",
      "icon": "🩻",
      "description": "Vital visceral organs, cardiovascular, pulmonary, digestion, endocrine, and neural pathways"
    },
    "externals": {
      "id": "externals",
      "label": "External Anatomy",
      "icon": "👤",
      "description": "Surface anatomy, sensory organs, musculoskeletal frame, core, and dermatology"
    }
  },
  "parts": {
    "brain": {
      "id": "brain",
      "name": "Brain & Nervous System",
      "layer": "internals",
      "category": "Neurological & Cognitive",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Master command center coordinating neurochemistry, sensory perception, cognition, sleep cycles, and autonomic nervous regulation.",
      "topDiseases": [
        {
          "id": "brain-1",
          "name": "Cerebrovascular Stroke (Ischemic & Hemorrhagic)",
          "severity": "Critical / Emergency",
          "category": "Vascular Neurology",
          "cause": "Interruption of blood supply to brain tissue caused by a thrombus/embolus (ischemic 87%) or arterial rupture/hemorrhage (13%). Key risks: hypertension, atherosclerosis, atrial fibrillation, hyperlipidemia, smoking, and chronic stress.",
          "prevention": "Rigorous blood pressure control (<120/80 mmHg), smoking cessation, daily aerobic movement, Mediterranean-DASH diet, screening for carotid stenosis and AFib.",
          "lifestyle": "7-8 hours sleep, eliminate ultra-processed seed oils, 30-min brisk walk daily, mental rest breaks during high-intensity cognitive work, hydrate with 2.5-3L water.",
          "medicines": "Acute: IV Alteplase (tPA), mechanical thrombectomy. Maintenance: Antiplatelets (Aspirin, Clopidogrel), Anticoagulants (Apixaban, Warfarin), Statins (Atorvastatin), ACE inhibitors.",
          "ayurveda": {
            "dosha": "Severe Vata aggravation (Pakshaghata), secondary Pitta blockage.",
            "herbs": "Brahmi (Bacopa monnieri), Shankhpushpi, Ashwagandha, Jyotishmati.",
            "formulations": "Saraswatarishta, Yogendra Ras, Ekangaveer Ras, Mahamash Taila.",
            "therapy": "Shirodhara with Brahmi Taila, Nasya with Anu Taila or Ksheerabala 101."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Mrit-Sanjeevani Mudra)",
            "technique": "Touch index fingertip to root of thumb; touch middle and ring fingertips to thumb tip; keep little finger straight.",
            "duration": "15 to 30 minutes twice daily.",
            "benefits": "Regulates blood pressure, relieves neuro-vascular spasms, stabilizes prana."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Mountain Pose)",
              "Vrikshasana (Tree Pose)",
              "Setu Bandhasana (Gentle Bridge)",
              "Shavasana (Corpse Pose)"
            ],
            "pranayama": [
              "Nadi Shodhana (Alternate Nostril Breathing - 15 mins)",
              "Bhramari (Humming Bee Breath)"
            ],
            "cautions": "Avoid aggressive inversions if blood pressure is elevated."
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Cobalamin), Folate (B9), Vitamin D3, Magnesium, Omega-3 fatty acids (EPA/DHA).",
            "dietarySources": "Wild fatty fish, walnuts, chia seeds, fortified nutritional yeast, leafy dark greens, pumpkin seeds, pastured eggs."
          },
          "holisticIntegration": "Morning: 1 tsp Brahmi ghee with warm water on empty stomach. Midday: Nadi Shodhana before meals. Evening: Foot massage (Padabhyanga) with warm sesame oil."
        },
        {
          "id": "brain-2",
          "name": "Migraine & Neurovascular Headaches",
          "severity": "Moderate to High",
          "category": "Neurovascular",
          "cause": "Cortical spreading depression, trigeminovascular system activation, CGRP release, and serotonin dysregulation triggered by stress, sensory overload, hormonal fluctuations, or dietary triggers.",
          "prevention": "Eliminate dietary triggers (aged cheese, nitrates, MSG, artificial sweeteners), maintain regular sleep and meal schedules, protect eyes from blue light glare.",
          "lifestyle": "Maintain stable blood glucose without meal skipping; 10-minute dark room relaxation at first aura sign; blue-light blocking glasses; cervical spine ergonomics.",
          "medicines": "Acute: Triptans (Sumatriptan, Rizatriptan), CGRP antagonists (Rimegepant, Ubrogepant), NSAIDs. Prophylaxis: Beta-blockers (Propranolol), Topiramate, Amitriptyline.",
          "ayurveda": {
            "dosha": "Pitta-Vata imbalance leading to Ardhavabhedaka (hemicrania).",
            "herbs": "Godanti Bhasma, Brahmi, Coriander seed infusion, Shankhpushpi, Yashtimadhu.",
            "formulations": "Shirashooladi Vajra Ras, Pathyadi Kadha, Kamadudha Ras.",
            "therapy": "Sheetali Nasya with Ghee, cooling Shirolepa with sandalwood paste."
          },
          "mudras": {
            "primary": "Mahasirs Mudra (Great Head Gesture)",
            "technique": "Touch tips of thumb, index, and middle fingers together; fold ring finger into palm; extend little finger straight.",
            "duration": "10-20 minutes in a quiet room.",
            "benefits": "Alleviates cranial vascular congestion, relieves tension behind the eyes and temples."
          },
          "yoga": {
            "asanas": [
              "Balasana (Child's Pose)",
              "Viparita Karani (Legs-up-the-Wall Pose)",
              "Supta Baddha Konasana",
              "Marjaryasana-Bitilasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari (Cooling Breath)",
              "Chandra Bhedana (Left Nostril Breath)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Riboflavin (Vitamin B2 - 400mg), Magnesium Glycinate, Coenzyme Q10, Vitamin D3.",
            "dietarySources": "Almonds, spinach, soaked sunflower seeds, organic eggs, avocados, whole oats."
          },
          "holisticIntegration": "Drink warm coriander-fennel seed tea in the afternoon. Apply 2 drops of lukewarm A2 cow ghee into each nostril before sleep."
        },
        {
          "id": "brain-3",
          "name": "Alzheimer's Disease & Cognitive Decline",
          "severity": "High / Progressive",
          "category": "Neurodegenerative",
          "cause": "Accumulation of amyloid-beta plaques, neurofibrillary tau tangles, neuroinflammation, microvascular dysfunction, insulin resistance in brain tissue (Type 3 Diabetes).",
          "prevention": "Lifelong cognitive stimulation, MIND/Mediterranean diet, regular cardiovascular training, optimal sleep hygiene for glymphatic brain waste clearance, managing homocysteine.",
          "lifestyle": "Learn new skills / languages, daily social engagement, 30-min brisk walk in nature, eliminate processed sugar and seed oils, 8 hours of sleep.",
          "medicines": "Cholinesterase inhibitors (Donepezil, Rivastigmine), NMDA antagonist (Memantine), Monoclonal antibodies (Lecanemab, Donanemab).",
          "ayurveda": {
            "dosha": "Deep seated Majja Dhatu Kshaya with chronic Vata aggravation (Smritinasha).",
            "herbs": "Brahmi, Gotu Kola (Centella asiatica), Ashwagandha, Shankhpushpi, Vacha.",
            "formulations": "Brahmi Ghrita, Saraswatarishta with gold (Swarna Bhasma), Kalyanaka Ghrita.",
            "therapy": "Shirodhara with Ksheerabala Taila, regular Nasya with Panchagavya Ghrita."
          },
          "mudras": {
            "primary": "Hakini Mudra (Brain Power & Memory Mudra)",
            "technique": "Bring all fingertips and thumb tips together lightly, fingers spread, holding hands at chest level while focusing eyes towards brow center.",
            "duration": "15 minutes twice daily.",
            "benefits": "Synchronizes left and right cerebral hemispheres, enhances memory retrieval, stimulates pituitary center."
          },
          "yoga": {
            "asanas": [
              "Vrikshasana (Balance and neural focus)",
              "Paschimottanasana",
              "Halasana (gentle)",
              "Sarvangasana (Supported)"
            ],
            "pranayama": [
              "Kapalbhati (Mild, 3 rounds)",
              "Nadi Shodhana with Kumbhaka",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Methylcobalamin), Vitamin D3, Choline, DHA Omega-3, Folate (L-Methylfolate).",
            "dietarySources": "Pastured egg yolks, wild sockeye salmon, walnuts, blueberries, rosemary, virgin coconut oil."
          },
          "holisticIntegration": "Consume 1 tsp organic virgin coconut oil mixed with 1/4 tsp turmeric and a pinch of black pepper each morning. Engage in dual-task physical-cognitive exercises daily."
        },
        {
          "id": "brain-4",
          "name": "Parkinson's Disease & Tremor Syndromes",
          "severity": "High / Chronic",
          "category": "Neurodegenerative",
          "cause": "Progressive degeneration of dopaminergic neurons in substantia nigra pars compacta, Lewy bodies (alpha-synuclein), mitochondrial impairment, gut microbiome dysbiosis.",
          "prevention": "Aerobic exercise throughout adulthood, high antioxidant consumption (flavonoids, polyphenols), coffee/tea consumption (neuroprotective association), minimizing pesticide exposure.",
          "lifestyle": "Rhythmic movement therapies (dance, boxing, Tai Chi), voice amplification exercises, high dietary fiber to prevent constipation, weighted utensils.",
          "medicines": "Levodopa/Carbidopa (Sinemet), Dopamine agonists (Pramipexole, Ropinirole), MAO-B inhibitors (Rasagiline), COMT inhibitors, Deep Brain Stimulation (DBS).",
          "ayurveda": {
            "dosha": "Vepathu (tremors) caused by vitiated Vata lodging in the Majja (marrow/nervous) system.",
            "herbs": "Kapikacchu / Mucuna pruriens (natural source of L-Dopa), Ashwagandha, Bala, Shankhpushpi.",
            "formulations": "Mashabaladi Kwatha, Ashwagandharishta, Mahamash Taila Abhyanga, Balarishta.",
            "therapy": "Anuvasana and Niruha Basti (enema therapy - vital for colon-brain axis), Shirobasti."
          },
          "mudras": {
            "primary": "Vayu Mudra (Wind Subduing Mudra)",
            "technique": "Bend index finger so tip rests on fleshy mount of thumb, press thumb lightly over first knuckle of index finger; other fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Calms excessive bio-electrical impulses, pacifies internal body tremors, alleviates neurological stiffness."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Posture alignment)",
              "Virabhadrasana I & II",
              "Gomukhasana",
              "Bhujangasana"
            ],
            "pranayama": [
              "Slow diaphragmatic deep breathing",
              "Nadi Shodhana without force",
              "Ujjayi Breath"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Coenzyme Q10, Vitamin B6 (monitor timing with L-Dopa), Magnesium, Glutathione.",
            "dietarySources": "Fava beans (contain natural levodopa), dark leafy greens, pumpkin seeds, raw cacao, Brazil nuts."
          },
          "holisticIntegration": "Take Mucuna pruriens powder with warm milk and ghee in morning. Practice 20 minutes of barefoot grass walking to enhance sensory feedback and balance."
        },
        {
          "id": "brain-5",
          "name": "Generalized Anxiety Disorder (GAD) & Panic Episodes",
          "severity": "Moderate",
          "category": "Neuro-Psychiatric",
          "cause": "Hyperactivity of amygdala and fear circuitry, reduced GABAergic neurotransmission, autonomic sympathetic dysregulation, HPA-axis hyper-reactivity, genetic predisposition.",
          "prevention": "Vagus nerve toning, structured circadian rhythm, elimination of excessive caffeine and stimulants, cognitive behavioral conditioning, daily meditation.",
          "lifestyle": "Digital curfew 2 hours before bed, cold face splash or immersion for vagus activation, regular meals to avert blood sugar crashes, morning sunlight exposure.",
          "medicines": "SSRIs (Escitalopram, Sertraline), SNRIs (Venlafaxine), Buspirone, short-term Benzodiazepines (monitored), Beta-blockers (Propranolol).",
          "ayurveda": {
            "dosha": "Chitta Udvega (anxiety) due to Prana Vata and Sadhaka Pitta disturbance.",
            "herbs": "Ashwagandha (KSM-66), Brahmi, Jatamansi, Tagara (Valeriana wallichii).",
            "formulations": "Manasamitra Vatika, Saraswatarishta, Kalyanaka Ghrita.",
            "therapy": "Shirodhara with warm sesame or Mahanarayana oil, daily Abhyanga before warm shower."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Life Energy Mudra)",
            "technique": "Touch tips of ring finger and little finger to tip of thumb. Keep index and middle fingers straight.",
            "duration": "15 to 30 minutes daily.",
            "benefits": "Recharges nervous vitality, disperses acute panic and fatigue, anchors floating sympathetic panic energy."
          },
          "yoga": {
            "asanas": [
              "Balasana",
              "Supta Matsyendrasana",
              "Setu Bandhasana (Supported)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Bhramari Pranayama with Shanmukhi Mudra",
              "4-7-8 Breathing Technique",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium L-Threonate or Bisglycinate, Vitamin B6, Vitamin D3, Zinc, Inositol, L-Theanine.",
            "dietarySources": "Pumpkin seeds, dark chocolate (85%+), chamomile infusions, cooked spinach, fermented kefir, oats."
          },
          "holisticIntegration": "Practice 10 minutes of 4-7-8 breathing upon waking. Drink warm golden milk with 1/2 tsp Ashwagandha and nutmeg 30 minutes before bed."
        },
        {
          "id": "brain-6",
          "name": "Clinical Depression & Major Depressive Disorder (MDD)",
          "severity": "High",
          "category": "Affective Neuro-Psychiatric",
          "cause": "Monoaminergic (serotonin, dopamine, norepinephrine) dysfunction, low-grade neuroinflammation (IL-6, TNF-alpha), blunted neuroplasticity (BDNF depletion), hippocampal volume loss.",
          "prevention": "Consistent physical exercise, social connectedness, anti-inflammatory whole-food diet, cognitive reframing, bright light therapy in winter.",
          "lifestyle": "Fixed waking time 7 days a week, daily 45-minute brisk outdoor walk, journal daily gratitude, reduce social media consumption, purposeful community service.",
          "medicines": "SSRIs (Fluoxetine, Sertraline), SNRIs, Bupropion, Mirtazapine, Esketamine nasal spray, Psychotherapy (CBT/ACT), rTMS.",
          "ayurveda": {
            "dosha": "Vishada / Avasada driven by Tamo Guna predominance and depleted Ojas with Kapha-Vata blockage.",
            "herbs": "Jyotishmati, Ashwagandha, Guduchi, Shankhpushpi, Saffron (Crocus sativus).",
            "formulations": "Brahmi Vati with gold, Saraswatarishta, Drakshasava, Dashamoolarishta.",
            "therapy": "Nasya with Ksheerabala oil, Udvartana (herbal powder scrub), Shirodhara."
          },
          "mudras": {
            "primary": "Surya Mudra (Sun / Agni Energy Mudra)",
            "technique": "Bend ring finger to root of thumb; place thumb over bent ring finger with gentle pressure. Keep other fingers extended.",
            "duration": "15 minutes in the morning.",
            "benefits": "Kindles internal metabolic fire (Agni), burns away lethargy and Tamas, elevates depressive heaviness."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (Sun Salutations - 6 to 12 cycles)",
              "Ustrasana (Camel Pose)",
              "Bhujangasana (Cobra)",
              "Dhanurasana (Bow Pose)"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Bhastrika (Bellows breath)",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (optimal level >50 ng/mL), Folate (5-MTHF), Vitamin B12, SAMe, EPA Omega-3 (>1000mg EPA).",
            "dietarySources": "Saffron strands in warm milk, walnuts, oily fish, dark leafy greens, chia seeds, fermented foods."
          },
          "holisticIntegration": "Perform 12 rounds of dynamic Sun Salutations facing morning sun. Sip saffron-cardamom tea in the afternoon to boost neuro-serotonin pathways."
        },
        {
          "id": "brain-7",
          "name": "Epilepsy & Seizure Disorders",
          "severity": "Critical",
          "category": "Neuro-Electrical",
          "cause": "Paroxysmal, hypersynchronous neuronal electrical discharges in cerebral cortex. Etiology includes cortical dysplasia, traumatic brain injury, genetic channelopathies, stroke, or post-infectious lesions.",
          "prevention": "Strict adherence to anti-seizure medications, avoidance of triggers (sleep deprivation, flashing lights, alcohol withdrawal, febrile illness, severe emotional stress).",
          "lifestyle": "8-hour sleep schedule, seizure safety diary, avoid swimming or bathing unattended, medical ketogenic or modified Atkins dietary protocols under supervision.",
          "medicines": "Antiepileptic drugs (Levetiracetam, Lamotrigine, Valproic Acid, Carbamazepine, Topiramate, Lacosamide), VNS therapy, surgical resection for focal lesions.",
          "ayurveda": {
            "dosha": "Apasmara caused by perversion of Smriti, Dhi and Sattva, marked by turbulent Vata-Pitta.",
            "herbs": "Vacha (Acorus calamus), Brahmi, Shankhpushpi, Jyotishmati, Kushmanda (Ash gourd juice).",
            "formulations": "Brahmi Ghrita, Saraswata Churna, Smritisagar Ras, Mahakalyanaka Ghrita.",
            "therapy": "Nasya with Vacha oil, Shirolepa with cooling herbal pastes, gentle Abhyanga."
          },
          "mudras": {
            "primary": "Gyan Mudra (Chin Mudra / Consciousness Gesture)",
            "technique": "Touch tip of index finger to tip of thumb, forming circle. Extend remaining three fingers comfortably.",
            "duration": "30 minutes daily during calm resting state.",
            "benefits": "Stabilizes cerebral bio-electric fluctuations, harmonizes pituitary-hypothalamic axis, fosters neurological tranquility."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Balasana",
              "Supta Baddha Konasana",
              "Shavasana (Deep guided relaxation)"
            ],
            "pranayama": [
              "Nadi Shodhana (slow alternate nostril breathing without retention)",
              "Bhramari"
            ],
            "cautions": "Strictly avoid hyperventilation pranayama like Kapalbhati or Bhastrika which can trigger seizures."
          },
          "vitamins": {
            "deficiencies": "Vitamin B6 (Pyridoxal-5-Phosphate - critical for GABA synthesis), Vitamin D3, Magnesium, Folate.",
            "dietarySources": "Avocados, pastured poultry, sunflower seeds, bone broth, leafy green vegetables, medium-chain fats."
          },
          "holisticIntegration": "Daily morning consumption of 1 glass fresh Ash Gourd (Kushmanda) juice on empty stomach to pacify brain electrical hypersensitivity."
        },
        {
          "id": "brain-8",
          "name": "Chronic Insomnia & Circadian Sleep Rhythm Disorder",
          "severity": "Moderate to High",
          "category": "Neuro-Chronobiological",
          "cause": "Hyperarousal of sympathetic nervous system, dysregulation of suprachiasmatic nucleus (SCN), blunted pineal melatonin secretion caused by nocturnal artificial blue light, chronic hypercortisolemia.",
          "prevention": "Morning outdoor sunlight exposure within 45 minutes of dawn, complete darkness and temperature drop (65-68°F) in bedroom, zero screens 90 minutes before sleep, avoiding caffeine post-12 PM.",
          "lifestyle": "Use bed strictly for sleep and intimacy, get out of bed if awake >20 minutes and read under dim red light, hot bath 90 minutes before bed, consistent bed/wake times.",
          "medicines": "Dual Orexin Receptor Antagonists (Suvorexant, Lemborexant), Melatonin receptor agonists (Ramelteon), non-benzodiazepine hypnotics (Zolpidem), low-dose Trazodone.",
          "ayurveda": {
            "dosha": "Anidra / Nidranasha caused by excessive Vata and Pitta vitiation disturbing Tarpaka Kapha.",
            "herbs": "Tagara (Valeriana wallichii), Ashwagandha, Jatamansi, Sarpagandha, Nutmeg (Jaiphal).",
            "formulations": "Nidrodaya Ras, Saraswatarishta, Brahmi Vati, Ashwagandha Churna.",
            "therapy": "Padabhyanga (warm sesame/Ksheerabala oil foot massage before sleep), Shirodhara."
          },
          "mudras": {
            "primary": "Shakti Mudra (Sleep Inducing Gesture)",
            "technique": "Touch tips of ring and little fingers together. Fold thumbs into palms and loosely curl index and middle fingers over thumbs.",
            "duration": "15 minutes while lying in bed before sleeping.",
            "benefits": "Promotes deep relaxation in pelvic and abdominal region, triggers parasympathetic dominance, calms racing thoughts."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Legs-up-the-wall for 15 mins)",
              "Supta Suhasana",
              "Balasana",
              "Yoga Nidra (20-30 mins body scanning)"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Left nostril breathing)",
              "Bhramari with ears closed"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium (Glycinate or L-Threonate), Vitamin D3, Vitamin B6, Zinc, L-Tryptophan.",
            "dietarySources": "Tart cherries (natural melatonin), pumpkin seeds, warm A2 cow milk, kiwifruit (2 before bed), chamomile tea."
          },
          "holisticIntegration": "Drink a small cup of warm spiced milk with a pinch of nutmeg, cardamom, and 1/2 tsp Ashwagandha 45 mins before bedtime; rub warm sesame oil onto soles of feet."
        },
        {
          "id": "brain-9",
          "name": "Multiple Sclerosis (MS) & Autoimmune Demyelination",
          "severity": "High / Chronic",
          "category": "Autoimmune Neurological",
          "cause": "Immune-mediated degradation of myelin sheath surrounding CNS axons by autoreactive T cells and B cells, triggered by EBV, genetic susceptibility (HLA-DRB1), and low vitamin D.",
          "prevention": "Optimize serum Vitamin D levels (>50 ng/mL) from childhood, smoking avoidance, anti-inflammatory whole foods diet (Swank/Wahls protocol), early disease-modifying therapy.",
          "lifestyle": "Cooling strategies (cooling vests, avoid hot baths due to Uhthoff's phenomenon), regular moderate endurance and resistance training, daily stress reduction.",
          "medicines": "Disease-Modifying Therapies (DMTs: Ocrelizumab, Natalizumab, Fingolimod, Dimethyl fumarate). Acute relapses: High-dose IV Methylprednisolone or plasma exchange.",
          "ayurveda": {
            "dosha": "Complex Dhatu Gata Vata with chronic Ama infiltrating Majja Dhatu.",
            "herbs": "Guduchi, Ashwagandha, Brahmi, Bala, Shallaki (Boswellia serrata).",
            "formulations": "Amritarishta, Guggulutiktaka Kashayam, Rasaraj Ras, Maharasnadi Kwath.",
            "therapy": "Ksheera Dhooma, gentle Patra Pinda Sweda (avoiding excessive heat), Nasya."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Earth Grounding Mudra)",
            "technique": "Touch tip of ring finger with tip of thumb with light pressure; keep other fingers outstretched.",
            "duration": "20 minutes twice daily.",
            "benefits": "Strengthens cellular tissues (Dhatus), promotes neuromuscular vitality, grounds unanchored autoimmune agitation."
          },
          "yoga": {
            "asanas": [
              "Tadasana with wall support",
              "Cat-Cow (Gentle spinal mobility)",
              "Supported Setu Bandhasana",
              "Restorative Yoga with bolsters"
            ],
            "pranayama": [
              "Slow Nadi Shodhana (No retention)",
              "Bhramari",
              "Diaphragmatic breathing in cool environment"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (therapeutic dosage under monitoring), Vitamin B12, Alpha-Lipoic Acid, Omega-3 fatty acids, CoQ10.",
            "dietarySources": "Sulfur-rich vegetables (broccoli, cabbage, onions), deeply pigmented berries, cold-water oily fish, bone broth."
          },
          "holisticIntegration": "Adopt the Wahls Protocol-inspired plate: 3 cups leafy greens, 3 cups deeply colored vegetables, 3 cups sulfur-rich foods daily. Combine with 20 minutes daily morning earth grounding."
        },
        {
          "id": "brain-10",
          "name": "Brain Fog, Mental Fatigue & Neuroinflammation",
          "severity": "Mild to Moderate",
          "category": "Metabolic-Neurocognitive",
          "cause": "Elevated microglial inflammation, systemic insulin resistance, post-viral sequelae (long COVID), gut dysbiosis, heavy metal or mycotoxin exposure, sleep fragmentation, mitochondrial hypo-function.",
          "prevention": "Steady glycemic control, eliminate refined flours and ultra-processed seed oils, ensure restorative sleep cycles, support liver phase I & II detoxification pathways.",
          "lifestyle": "Intermittent cognitive fasts (90-min focused blocks followed by 10-min movement without screens), cold showers for noradrenaline release, daily brisk outdoor walk.",
          "medicines": "Nootropic agents: Citicoline (CDP-Choline), Alpha-GPC, Modafinil (in clinically diagnosed fatigue), Low Dose Naltrexone (LDN for neuroinflammation).",
          "ayurveda": {
            "dosha": "Mano-Vaha Srotas Avarodha due to Kapha-Ama stagnation.",
            "herbs": "Brahmi, Gotu Kola, Shankhpushpi, Pippali (for bio-enhancement), Tulsi.",
            "formulations": "Saraswatarishta, Brahmi Ghrita, Smriti Rasayana, Panchamrit Loha Guggulu.",
            "therapy": "Pratimarsha Nasya with Anu Taila (clears Sinus-Cranial channels), Shiroabhyanga."
          },
          "mudras": {
            "primary": "Uttarabodhi Mudra (Mudra of Highest Enlightenment)",
            "technique": "Clasp hands together with fingers interlaced inside; extend both index fingers pointing upward touching, and thumbs pointing downward touching.",
            "duration": "10-15 minutes held at solar plexus level.",
            "benefits": "Refreshes mental clarity, dispels lethargy and hesitation, channels bio-energy straight to prefrontal cortex."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana (Downward Dog)",
              "Uttanasana (Forward Fold)",
              "Virabhadrasana III",
              "Sirshasana (or half-inversion)"
            ],
            "pranayama": [
              "Kapalbhati (50 gentle strokes)",
              "Bhastrika Pranayama",
              "Nadi Shodhana with mental chanting"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B Complex (Active B1, B6, B12), Acetyl-L-Carnitine, Magnesium Malate, CoQ10, Choline.",
            "dietarySources": "Wild blueberries, rosemary infusions, walnuts, green tea (EGCG + L-Theanine), pastured eggs."
          },
          "holisticIntegration": "Morning ritual: Drink 1 cup warm ceremonial Matcha or green tea infused with dried ginger and rosemary aroma. Practice 50 rounds of gentle Kapalbhati."
        }
      ]
    },
    "heart": {
      "id": "heart",
      "name": "Heart & Circulatory System",
      "layer": "internals",
      "category": "Cardiovascular",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Pumps oxygen-rich blood throughout the vascular tree, maintaining hemodynamic balance, cellular oxygenation, and systemic arterial pressure.",
      "topDiseases": [
        {
          "id": "heart-1",
          "name": "Coronary Artery Disease (CAD) & Atherosclerosis",
          "severity": "Critical",
          "category": "Vascular Ischemic",
          "cause": "Endothelial injury followed by low-density lipoprotein (LDL) particle infiltration, oxidation, chronic arterial inflammation, and fibroatheroma plaque formation restricting myocardial blood supply.",
          "prevention": "Whole-food plant-forward Mediterranean diet, cessation of smoking, maintaining ApoB <60 mg/dL, regular aerobic conditioning (Zone 2 cardio), stress reduction, optimal blood pressure.",
          "lifestyle": "150 minutes weekly aerobic exercise, eliminate hydrogenated trans-fats and refined carbohydrates, daily meditation, waist-to-hip ratio <0.9 (men) / <0.8 (women).",
          "medicines": "Statins (Rosuvastatin, Atorvastatin), PCSK9 inhibitors (Evolocumab), Ezetimibe, Antiplatelets (Aspirin), Beta-blockers (Metoprolol), ACE inhibitors (Ramipril), PCI / Stenting / CABG.",
          "ayurveda": {
            "dosha": "Hridroga caused by Rasa-Rakta Dhatu Dushti, Kapha-Meda-Ama plaque accumulation in Hridaya Srotas.",
            "herbs": "Arjuna (Terminalia arjuna - cardiac tonic par excellence), Guggulu (Commiphora mukul), Garlic (Lasuna), Pushkarmool.",
            "formulations": "Arjunarishta, Hridayarnava Ras, Prabhakar Vati, Medohar Guggulu.",
            "therapy": "Hrid Basti (retaining warm medicated oil over cardiac region), gentle Abhyanga."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Cardiac Savior Mudra)",
            "technique": "Touch index fingertip to base of thumb. Touch tips of middle finger, ring finger, and thumb together. Little finger extended.",
            "duration": "20 minutes twice daily, and instantly during acute chest distress (alongside emergency medical contact).",
            "benefits": "Referred to in classical texts as equivalent to a sublingual sorbitrate tablet; restores micro-capillary flow, calms cardiac spasms."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Gomukhasana",
              "Setu Bandhasana (Supported with bolster)"
            ],
            "pranayama": [
              "Slow Nadi Shodhana (without holding)",
              "Bhramari Pranayama",
              "Gentle Dirga Pranayama"
            ],
            "cautions": "Avoid rigorous breath-holding (Kumbhaka) and extreme inversions."
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10 (Ubiquinol), Vitamin K2 (MK-7), Magnesium, Vitamin D3, Omega-3 (EPA/DHA).",
            "dietarySources": "Pomegranate juice, wild salmon, natto (Vitamin K2), extra virgin olive oil, garlic cloves, walnuts."
          },
          "holisticIntegration": "Boil 1 tsp pure organic Arjuna bark powder in 1 cup water and 1/2 cup milk until reduced to 1 cup (Arjuna Ksheera Pak). Drink warm each morning on an empty stomach."
        },
        {
          "id": "heart-2",
          "name": "Essential Hypertension (High Blood Pressure)",
          "severity": "High / Chronic",
          "category": "Hemodynamic",
          "cause": "Increased systemic vascular resistance, arterial stiffness, chronic RAAS overactivity, renal sodium retention, elevated sympathetic tone, endothelial nitric oxide depletion.",
          "prevention": "DASH diet (rich in potassium, calcium, magnesium), dietary sodium restriction (<2000mg/day), limiting alcohol, regular cardiovascular exercise, deep diaphragmatic breathing.",
          "lifestyle": "Maintain healthy BMI, daily 30-minute brisk walk, limit caffeine to mornings only, progressive muscle relaxation, monitor home blood pressure weekly.",
          "medicines": "ACE inhibitors (Lisinopril), ARBs (Losartan, Telmisartan), Calcium Channel Blockers (Amlodipine), Thiazide diuretics (Chlorthalidone), Beta-blockers.",
          "ayurveda": {
            "dosha": "Rakta-Capa / Siragatha Vata with Pitta-Rakta hyper-excitation.",
            "herbs": "Sarpagandha (Rauwolfia serpentina), Arjuna, Shankhpushpi, Brahmi, Gokshura (Tribulus terrestris).",
            "formulations": "Sarpagandha Ghan Vati, Mukta Vati, Arjunarishta, Punarnavadi Kwath.",
            "therapy": "Shirodhara with Takra (medicated buttermilk) or Brahmi oil, Takradhara, Virechana."
          },
          "mudras": {
            "primary": "Apana Mudra (Down-regulating Mudra)",
            "technique": "Touch tips of middle and ring fingers to tip of thumb; keep index and little fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes kidney excretion, dilates peripheral capillaries, discharges excess downward energy, lowers systemic vascular tension."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Deep relaxation for 15 mins)",
              "Viparita Karani",
              "Janu Sirsasana",
              "Balasana"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Left nostril breathing)",
              "Sheetali / Sheetkari",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Potassium, Magnesium (Taurate or Glycinate), Vitamin C (endothelial elasticity), L-Arginine, Vitamin D3.",
            "dietarySources": "Beetroot juice (high dietary nitrates), coconut water, bananas, spinach, flaxseeds, garlic, unsalted pumpkin seeds."
          },
          "holisticIntegration": "Drink 150ml fresh beetroot and celery juice daily at 11 AM to stimulate endothelial nitric oxide release. Practice 15 minutes of slow Chandra Bhedana before dinner."
        },
        {
          "id": "heart-3",
          "name": "Congestive Heart Failure (CHF)",
          "severity": "Critical / Progressive",
          "category": "Myocardial Dysfunction",
          "cause": "Inability of ventricles to fill or eject blood efficiently due to ischemic cardiomyopathy, long-standing hypertension, valvular disease, or myocarditis.",
          "prevention": "Aggressive early treatment of hypertension, myocardial infarction management, alcohol moderation, tight glycemic control in diabetics, low-sodium diet.",
          "lifestyle": "Daily morning weight logging, strict fluid intake limitation (1.5-2L/day), sodium restriction (<1500mg/day), cardiac rehabilitation exercise.",
          "medicines": "ARNI (Sacubitril/Valsartan), Beta-blockers (Carvedilol), MRA (Spironolactone), SGLT2 inhibitors (Empagliflozin), Loop diuretics (Furosemide).",
          "ayurveda": {
            "dosha": "Hridaya Daurbalya due to Ojas Kshaya and Vata-Kapha accumulation causing fluid stagnation (Shotha).",
            "herbs": "Arjuna, Punarnava (Boerhavia diffusa), Pushkarmool, Rasna.",
            "formulations": "Prabhakar Vati, Punarnavarishta, Dashamoola Kashaya, Hridaya Chintamani Ras.",
            "therapy": "Very gentle Hrid Basti with warm medicated ghee, mild dry Swedana."
          },
          "mudras": {
            "primary": "Prana Mudra (Life Force & Vitality Mudra)",
            "technique": "Touch tips of ring and little fingers to tip of thumb. Keep other two fingers straight.",
            "duration": "15 minutes, two to three times daily.",
            "benefits": "Improves cellular respiration efficiency, alleviates chronic shortness of breath and weakness."
          },
          "yoga": {
            "asanas": [
              "Gentle seated Tadasana on chair",
              "Supported Reclined Bound Angle Pose",
              "Seated Cat-Cow",
              "Shavasana with elevated head"
            ],
            "pranayama": [
              "Slow, soft Diaphragmatic Breathing",
              "Gentle Ujjayi Breathing"
            ],
            "cautions": "Zero breath retentions (Kumbhaka) and no strenuous postures."
          },
          "vitamins": {
            "deficiencies": "CoQ10 (Ubiquinol 200-300mg), Thiamine (Vitamin B1), Magnesium, D-Ribose, L-Carnitine.",
            "dietarySources": "Pomegranate, soaked almonds, boiled lentils, cooked asparagus, nutritional yeast (B1), berries."
          },
          "holisticIntegration": "Take 100mg Ubiquinol with breakfast. Sip warm Punarnava tea in the afternoon to encourage gentle kidney filtration without electrolyte depletion."
        },
        {
          "id": "heart-4",
          "name": "Atrial Fibrillation (AFib) & Arrhythmias",
          "severity": "High",
          "category": "Electrophysiological",
          "cause": "Chaotic electrical triggers originating around pulmonary veins leading to irregular, rapid atrial contractions, loss of atrial kick, stasis of blood in left atrial appendage.",
          "prevention": "Zero alcohol consumption ('Holiday Heart' trigger), weight reduction, screening and treatment for obstructive sleep apnea (OSA), electrolyte balance.",
          "lifestyle": "Hydration with electrolyte minerals, sleep on right side if left-side triggers ectopics, eliminate energy drinks and synthetic stimulants.",
          "medicines": "Rate control (Beta-blockers, Diltiazem), Rhythm control (Amiodarone, Flecainide), Anticoagulation (Apixaban, Rivaroxaban), Catheter Ablation.",
          "ayurveda": {
            "dosha": "Hridaya Kampa (cardiac flutter) due to aggravated Vyan Vata and Pitta fire.",
            "herbs": "Arjuna, Brahmi, Shankhpushpi, Ashwagandha, Mukta (Pearl calcium).",
            "formulations": "Mukta Pishti, Jawahar Mohra Ras, Arjunarishta, Saraswatarishta.",
            "therapy": "Shirodhara with cooling Chandanadi oil, gentle Takradhara on forehead."
          },
          "mudras": {
            "primary": "Vayu Mudra (Spasm & Flutter Calming Mudra)",
            "technique": "Fold index finger into base of thumb; press thumb gently over first knuckle of folded index finger. Other fingers straight.",
            "duration": "15-20 minutes during palpitations or rest.",
            "benefits": "Calms chaotic bio-electrical impulses in chest, settles anxious tachycardia, pacifies erratic Vata movements."
          },
          "yoga": {
            "asanas": [
              "Vrikshasana (Balance focus)",
              "Supta Baddha Konasana with bolster",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana (gentle without retention)",
              "Bhramari Pranayama",
              "Chandra Bhedana"
            ],
            "cautions": "Avoid rapid breathing techniques (Kapalbhati, Bhastrika)."
          },
          "vitamins": {
            "deficiencies": "Magnesium Taurate / Glycinate (anti-arrhythmic mineral), Potassium, Vitamin D3, Omega-3 fatty acids.",
            "dietarySources": "Coconut water, dark leafy greens, avocado, wild salmon, chia seeds, pumpkin seeds."
          },
          "holisticIntegration": "Take 300mg elemental Magnesium Taurate in evening with warm water. Spend 10 minutes in Shavasana practicing conscious cardiac coherence breathing."
        },
        {
          "id": "heart-5",
          "name": "Angina Pectoris (Stable & Vasospastic)",
          "severity": "High",
          "category": "Myocardial Ischemia",
          "cause": "Myocardial oxygen demand exceeding coronary oxygen supply, triggered by exertion or coronary vasospasm, endothelial dysfunction, or emotional distress.",
          "prevention": "Gradual warm-ups prior to exertion, smoking cessation, cold weather protection, avoidance of vasoconstricting substances, stress mastery.",
          "lifestyle": "Small, light meals instead of heavy feasts, avoid abrupt physical strain in freezing weather, practice deep thoracic relaxation daily.",
          "medicines": "Sublingual Nitroglycerin, Long-acting Nitrates (Isosorbide mononitrate), Calcium Channel Blockers (Diltiazem, Amlodipine), Ranolazine, Beta-blockers.",
          "ayurveda": {
            "dosha": "Hridshoola (cardiac pain) caused by Vata trapped by Kapha in arterial channels (Avarana).",
            "herbs": "Pushkarmool (potent coronary vasodilator), Arjuna, Rasna, Guggulu, Shunthi.",
            "formulations": "Pushkarmooladi Churna, Prabhakar Vati, Arjunarishta, Yogendra Ras.",
            "therapy": "Warm Hrid Basti with Dashamoola oil, gentle Abhyanga."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Chest Spasm Relief)",
            "technique": "Index finger to base of thumb; middle and ring fingertips joined to thumb tip; pinky extended.",
            "duration": "Hold whenever feeling chest constriction while seeking care.",
            "benefits": "Reduces acute coronary arterial spasm, balances autonomic outflow to cardiac plexuses."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Marjaryasana-Bitilasana",
              "Ardha Matsyendrasana (gentle)",
              "Restorative Supported Bridge"
            ],
            "pranayama": [
              "Slow Dirga Pranayama (Three-part breath)",
              "Nadi Shodhana without holding"
            ]
          },
          "vitamins": {
            "deficiencies": "L-Carnitine, CoQ10, Magnesium, Vitamin C, Vitamin E (mixed tocotrienols).",
            "dietarySources": "Pomegranate arils, garlic cloves sautéed in ghee, hawthorn berry tea, walnuts, green tea."
          },
          "holisticIntegration": "Sip 1 cup of warm hawthorn berry and Arjuna tea after light meals. Avoid going outdoors into freezing winds without a scarf covering the chest and neck."
        },
        {
          "id": "heart-6",
          "name": "Pericarditis & Myocarditis",
          "severity": "High / Acute",
          "category": "Inflammatory Cardiovascular",
          "cause": "Viral infections (Coxsackie, Adenovirus, SARS-CoV-2), autoimmune diseases (Lupus, RA), or bacterial pathogens causing inflammation of pericardial sac or myocardium.",
          "prevention": "Rest during and after acute viral infections, vaccination against cardiotropic viruses, prompt treatment of autoimmune flare-ups.",
          "lifestyle": "Strict avoidance of strenuous exercise and athletic competition until inflammatory markers and imaging normalize, anti-inflammatory diet.",
          "medicines": "NSAIDs (High-dose Ibuprofen, Indomethacin), Colchicine (first-line), Corticosteroids, IL-1 blockers (Rilonacept, Anakinra).",
          "ayurveda": {
            "dosha": "Pitta-Rakta inflammatory aggravation in Hridaya (Hridaya Shotha).",
            "herbs": "Guduchi, Shallaki (Boswellia), Haridra (Curcumin), Arjuna, Manjistha.",
            "formulations": "Amritarishta, Kaishore Guggulu, Dashamoola Kashayam, Punarnavadi Kwath.",
            "therapy": "Cooling Shirodhara, cooling Lepa over sternum (sandalwood and vetiver paste)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Regeneration Mudra)",
            "technique": "Join tip of ring finger with tip of thumb. Keep other three fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Aids deep cellular rebuilding, dampens excessive inflammatory tissue catabolism."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Restorative lying down)",
              "Balasana with chest pillows",
              "Gentle seated neck and shoulder rolls"
            ],
            "pranayama": [
              "Soft natural diaphragmatic breathing",
              "Bhramari Pranayama"
            ],
            "cautions": "Zero vigorous asana practice during active phase of cardiac inflammation."
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin D3, Omega-3 fatty acids, Quercetin.",
            "dietarySources": "Golden turmeric milk, blueberries, bone broth, papaya, cooked greens."
          },
          "holisticIntegration": "Drink fresh turmeric-ginger warm infusion with 1/2 tsp pure raw honey twice daily to harness natural COX-2 inhibition and support tissue repair."
        },
        {
          "id": "heart-7",
          "name": "Peripheral Artery Disease (PAD)",
          "severity": "Moderate to High",
          "category": "Peripheral Vascular",
          "cause": "Atherosclerotic plaque narrowing arterial lumen in lower extremities, restricting blood flow during walking; compounded by smoking, diabetes, and hypercholesterolemia.",
          "prevention": "Cessation of all tobacco products, structured walking program (walk to near-maximal pain, rest, repeat), aggressive lipid and glycemic control.",
          "lifestyle": "Never walk barefoot, inspect feet daily for ulcers, wear non-constrictive warm socks, keep legs warm, avoid crossing legs when seated.",
          "medicines": "Cilostazol (improves walking distance), Statins, Antiplatelet therapy (Aspirin or Clopidogrel), Pentoxifylline, Endovascular angioplasty/stenting.",
          "ayurveda": {
            "dosha": "Vata-Rakta and Siragranthi causing stagnation in Adhobhaga (lower body).",
            "herbs": "Guggulu, Arjuna, Manjistha, Haridra, Shallaki.",
            "formulations": "Kaishore Guggulu, Punarnavadi Guggulu, Sahacharadi Kashayam, Manjishtadi Kwath.",
            "therapy": "Sahacharadi Taila warm oil massage (distal to proximal), mild steam (Swedana) to legs."
          },
          "mudras": {
            "primary": "Prana Mudra (Microcirculation Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Index and middle fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes collateral micro-capillary angiogenesis, boosts peripheral tissue oxygen perfusion."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Tadasana (Heel raises)",
              "Dandasana with ankle rotations",
              "Bhadrasana"
            ],
            "pranayama": [
              "Kapalbhati (Gentle to encourage arterial tone)",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin K2, Magnesium, Vitamin E (mixed tocopherols/tocotrienols), L-Arginine, Ginkgo Biloba extract.",
            "dietarySources": "Garlic, onions, beets, pomegranate, soaked walnuts, pumpkin seeds, green leafy vegetables."
          },
          "holisticIntegration": "Perform 10 minutes of gentle ankle-foot flexes followed by warm Sahacharadi oil massage on calves and feet before bed. Sip warm ginger-cinnamon tea."
        },
        {
          "id": "heart-8",
          "name": "Deep Vein Thrombosis (DVT) & Chronic Venous Insufficiency",
          "severity": "Critical (DVT) / Moderate (CVI)",
          "category": "Venous Thromboembolism",
          "cause": "Virchow's Triad: Venous stasis (prolonged immobility, long flights, bed rest), vein wall trauma, and hypercoagulable states (Factor V Leiden, oral contraceptives, dehydration).",
          "prevention": "Frequent calf muscle activation during travel or sitting (>every 60 mins), graduated compression stockings, optimal hydration, prophylactic LMWH in hospital stays.",
          "lifestyle": "Elevate legs above heart level for 15 minutes twice daily, avoid crossing knees, maintain healthy weight, take active walking breaks every hour.",
          "medicines": "DOACs (Apixaban, Rivaroxaban), Low-Molecular-Weight Heparin (Enoxaparin), Warfarin, Thrombolytic therapy (in limb-threatening phlegmasia).",
          "ayurveda": {
            "dosha": "Rakta-Vata Dushti causing Sirastambha (venous clot / congestion).",
            "herbs": "Manjistha, Sariva, Guggulu, Punarnava, Gotu Kola (Centella asiatica).",
            "formulations": "Kaishore Guggulu, Mahamanjishtadi Kwatha, Punarnavarishta, Sahacharadi Thailam.",
            "therapy": "Raktamokshana (Jalaukavacharana / Leech therapy - classical treatment for venous stasis), gentle upward massage."
          },
          "mudras": {
            "primary": "Varun Mudra (Jal Mudra / Fluid Regulation)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers comfortably extended.",
            "duration": "15 to 20 minutes daily.",
            "benefits": "Maintains optimal blood fluidity, counteracts venous blood thickening, promotes lymphatic drainage."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Invaluable for venous return)",
              "Sarvangasana (Supported shoulderstand)",
              "Setu Bandhasana",
              "Pawanmuktasana with leg lifts"
            ],
            "pranayama": [
              "Dirga Pranayama (deep diaphragmatic inhalation creates thoracic negative pressure drawing blood upward)",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids (Rutin, Hesperidin, Diosmin - proven vein tonics), Vitamin C, Pycnogenol, Vitamin E.",
            "dietarySources": "Citrus peels and pulp, buckwheat (rich in rutin), blackberries, blueberries, horse chestnut extract, red grapes."
          },
          "holisticIntegration": "Rest legs vertically against wall (Viparita Karani) for 12 minutes every evening while practicing deep belly breathing to facilitate venous drainage back to heart."
        },
        {
          "id": "heart-9",
          "name": "Cardiomyopathy & Takotsubo Stress Syndrome",
          "severity": "High",
          "category": "Myocardial Structural",
          "cause": "Genetic mutations in sarcomeric proteins (HCM), toxic insults from alcohol/chemotherapy (Dilated), or sudden catecholamine surge from emotional shock (Takotsubo).",
          "prevention": "Screening family members for HCM, strict alcohol abstinence, immediate stress de-escalation, avoidance of extreme dehydration in HCM.",
          "lifestyle": "Nervous system rest and emotional support, avoid dehydration and competitive burst athletics, maintain emotional equilibrium.",
          "medicines": "Mavacamten (cardiac myosin inhibitor for HCM), Beta-blockers, ACE inhibitors, Aldosterone antagonists, ICD for sudden death prevention.",
          "ayurveda": {
            "dosha": "Hridroga with deep Ojas depletion and Vata disturbance triggered by Mano-Abhighata (emotional trauma).",
            "herbs": "Arjuna, Ashwagandha, Shankhpushpi, Jatamansi, Mukta.",
            "formulations": "Jawahar Mohra Ras, Arjunarishta, Kalyanaka Ghrita, Prabhakar Vati.",
            "therapy": "Hrid Basti with warm Ksheerabala oil, Shirodhara with Brahmi milk."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra combined with Hridaya Mudra",
            "technique": "Fold index finger to thumb base, join middle and ring finger to thumb tip, extend little finger.",
            "duration": "20 minutes twice daily.",
            "benefits": "Deeply harmonizes the physical heart and emotional heart center (Anahata Chakra), shields against catecholamine storms."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana with chest bolster",
              "Gentle seated Gomukhasana",
              "Balasana",
              "Shavasana with heart awareness"
            ],
            "pranayama": [
              "Bhramari Pranayama",
              "Slow Nadi Shodhana",
              "Heart Coherence Breathing (5.5 breaths per min)"
            ]
          },
          "vitamins": {
            "deficiencies": "Thiamine (B1), Magnesium, Coenzyme Q10, Selenium, L-Carnitine.",
            "dietarySources": "Brazil nuts (selenium), pomegranate juice, steamed greens, bone broth, soaked sunflower seeds."
          },
          "holisticIntegration": "Place both hands over center of chest in morning, close eyes, inhale for 5 seconds and exhale for 5 seconds for 5 minutes, mentally generating feelings of peace."
        },
        {
          "id": "heart-10",
          "name": "Orthostatic Hypotension & POTS",
          "severity": "Moderate",
          "category": "Autonomic Cardiovascular",
          "cause": "Failure of autonomic baroreflex vasoconstriction upon standing or excessive sympathetic tachycardia (>30 bpm increase) without hypotension due to venous pooling.",
          "prevention": "High fluid intake (3 Liters daily), adequate sodium intake (3-5 grams daily), waist-high compression garments, sleeping with head of bed elevated 6 inches.",
          "lifestyle": "Never stand up abruptly from lying/sitting; pump calves before standing; cross legs and clench buttocks when feeling lightheaded; avoid hot showers.",
          "medicines": "Fludrocortisone (volume expansion), Midodrine (vasoconstriction), Pyridostigmine, Ivabradine (heart rate lowering).",
          "ayurveda": {
            "dosha": "Vyan Vata and Prana Vata imbalance leading to Bhrama (dizziness) and Bala-Kshaya.",
            "herbs": "Ashwagandha, Shatavari, Licorice / Yashtimadhu, Bala.",
            "formulations": "Draksharishta, Ashwagandhadhyarishta, Saraswatarishta, Chyawanprash.",
            "therapy": "Snigdha Abhyanga with warm Bala-Ashwagandhadi oil to ground fluctuating nervous impulses."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Earth / Blood Pressure Stabilizer)",
            "technique": "Touch tip of ring finger firmly to tip of thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes in morning and before rising.",
            "benefits": "Increases elemental earth stability, supports vascular tone, prevents postural blackouts."
          },
          "yoga": {
            "asanas": [
              "Vrikshasana (with wall touch)",
              "Tadasana (focusing gaze on a fixed point)",
              "Virabhadrasana I",
              "Utkatasana (Chair pose)"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Ocean breath)",
              "Gentle Surya Bhedana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Electrolytes (Sodium, Potassium, Magnesium), Vitamin B12, Folate, Iron (Ferritin levels).",
            "dietarySources": "Natural Himalayan pink salt water, bone broth, licorice root tea, soaked raisins and dates, olives, coconut water."
          },
          "holisticIntegration": "Drink 500ml water with 1/4 tsp Himalayan pink salt and a dash of lemon juice immediately upon waking before stepping out of bed."
        }
      ]
    },
    "lungs": {
      "id": "lungs",
      "name": "Lungs & Respiratory Tract",
      "layer": "internals",
      "category": "Pulmonary & Respiratory",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Facilitates vital alveolar gas exchange, oxygenating blood, dispelling carbon dioxide, and maintaining blood pH balance.",
      "topDiseases": [
        {
          "id": "lungs-1",
          "name": "Bronchial Asthma & Hyperreactive Airway Disease",
          "severity": "Moderate to Critical",
          "category": "Allergic Pulmonary",
          "cause": "Airway hyperresponsiveness, mucosal edema, smooth muscle bronchospasm, and thick mucus hypersecretion triggered by allergens, cold air, or viral infections.",
          "prevention": "Avoidance of environmental triggers (dust mites, pet dander, mold, cold dry air), HEPA air filtration, smoking/vaping avoidance.",
          "lifestyle": "Maintain dust-free bedroom, wash linens in hot water weekly, wear a warm scarf over mouth/nose in freezing weather, diaphragmatic nasal breathing exclusively.",
          "medicines": "Inhaled Corticosteroids (Budesonide, Fluticasone), LABA (Formoterol, Salmeterol), SABA (Albuterol), Leukotriene antagonists (Montelukast), Biologics (Dupilumab).",
          "ayurveda": {
            "dosha": "Tamaka Shwasa caused by aggravated Vata driving Kapha into Pranavaha Srotas.",
            "herbs": "Vasa (Adhatoda vasica), Pippali (Piper longum), Kantakari, Tulsi, Somlata.",
            "formulations": "Vasavaleha, Sitopaladi Churna, Shringyadi Churna, Kanakasava, Shwasa Kuthar Ras.",
            "therapy": "Chest and back Swedana with mustard oil and rock salt."
          },
          "mudras": {
            "primary": "Bronchial Mudra (Asthma & Bronchial Gesture)",
            "technique": "Press little finger at base of thumb, ring finger on upper thumb joint, middle finger on thumb pad. Keep index finger extended.",
            "duration": "15 minutes twice daily, or during bronchial tightness.",
            "benefits": "Directly dilates the bronchial airways, relieves chest tightness, facilitates clearing of mucus."
          },
          "yoga": {
            "asanas": [
              "Bhujangasana (Cobra Pose)",
              "Ustrasana (Camel Pose)",
              "Matsyasana (Fish Pose)",
              "Gomukhasana"
            ],
            "pranayama": [
              "Anulom Vilom (Gentle alternate nostril breathing)",
              "Bhramari Pranayama",
              "Gentle Kapalbhati (only in remission)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium, Vitamin C, Zinc, Quercetin.",
            "dietarySources": "Warm ginger water, golden turmeric tea, garlic, raw local honey, citrus fruits (warm), soaked almonds."
          },
          "holisticIntegration": "Take 1/2 tsp Sitopaladi Churna mixed with 1 tsp raw honey and 2 drops of fresh ginger juice twice daily. Practice 10 minutes of steam inhalation with eucalyptus oil."
        },
        {
          "id": "lungs-2",
          "name": "Chronic Obstructive Pulmonary Disease (COPD)",
          "severity": "Critical / Progressive",
          "category": "Obstructive Lung Disease",
          "cause": "Prolonged exposure to noxious particles, primarily cigarette smoke (85%+), biomass smoke, or alpha-1 antitrypsin deficiency; causes chronic bronchitis and emphysema.",
          "prevention": "Permanent smoking cessation, protection against occupational dust and fumes, annual flu and pneumococcal vaccines, clean cooking ventilation.",
          "lifestyle": "Pulmonary rehabilitation, pursed-lip breathing to prevent airway collapse, small high-calorie nutrient-dense meals.",
          "medicines": "LAMA (Tiotropium), LABA (Olodaterol), Inhaled Corticosteroids, PDE4 inhibitors (Roflumilast), Supplemental Oxygen therapy.",
          "ayurveda": {
            "dosha": "Deep Kshaya and chronic Tamaka Shwasa with Vata-Kapha obstruction.",
            "herbs": "Vasa, Kantakari, Pushkarmool, Yashtimadhu, Pippali Rasayana.",
            "formulations": "Chyawanprash, Agastya Haritaki Rasayana, Kanakasava, Talisadi Churna.",
            "therapy": "Chest massage with Karpooradi Taila (camphor oil) followed by warm fomentation."
          },
          "mudras": {
            "primary": "Linga Mudra (Heat & Mucus Clearing Mudra)",
            "technique": "Clasp hands together, interlacing fingers. Keep left thumb pointing vertically upward, encircled by right index finger and thumb.",
            "duration": "15 minutes daily (drink plenty of fluids).",
            "benefits": "Kindles internal body heat, liquefies heavy broncho-pulmonary phlegm."
          },
          "yoga": {
            "asanas": [
              "Tadasana with upward arm reaches",
              "Seated Cat-Cow",
              "Setu Bandhasana supported",
              "Viparita Karani"
            ],
            "pranayama": [
              "Pursed-Lip Breathing (Inhale 2s, exhale 4-6s)",
              "Slow Diaphragmatic Breath",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, N-Acetylcysteine (NAC 600-1200mg), Vitamin C, CoQ10, Magnesium.",
            "dietarySources": "Sulfur-rich foods (onions, garlic, broccoli), dark berries, green tea, bone broth, soaked walnuts."
          },
          "holisticIntegration": "Consume 1 tsp organic Chyawanprash in the morning with warm water. Practice 15 minutes of pursed-lip breathing during afternoon rest."
        },
        {
          "id": "lungs-3",
          "name": "Pneumonia (Bacterial & Viral)",
          "severity": "Critical / Acute",
          "category": "Pulmonary Infection",
          "cause": "Infection of pulmonary parenchyma by Streptococcus pneumoniae, Mycoplasma, influenza virus, or RSV; causes alveolar exudate and consolidation.",
          "prevention": "Pneumococcal vaccines, seasonal flu vaccine, oral hygiene, elevating head of bed 30 degrees during illness.",
          "lifestyle": "Total bed rest during acute infection, rigorous hydration to thin secretions, incentive spirometry.",
          "medicines": "Targeted Antibiotics (Amoxicillin-Clavulanate, Azithromycin, Ceftriaxone), Antivirals (Oseltamivir), Supplemental Oxygen.",
          "ayurveda": {
            "dosha": "Kapha-Pitta Jwara with severe Shwasa and Kasaroga.",
            "herbs": "Vasa, Guduchi, Kantakari, Tulsi, Kalmegh, Shunthi.",
            "formulations": "Tribhuvankirti Ras, Mahasudarshan Ghan Vati, Sitopaladi Churna.",
            "therapy": "Warm chest fomentation with rock salt bundle."
          },
          "mudras": {
            "primary": "Prana Mudra (Cellular Respiration Mudra)",
            "technique": "Touch tips of ring and little finger to thumb tip. Keep index and middle fingers extended.",
            "duration": "20 minutes twice daily during recovery.",
            "benefits": "Restores depleted vital life force, enhances cellular oxygen uptake, accelerates recovery."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Gentle Supta Baddha Konasana",
              "Supported Balasana"
            ],
            "pranayama": [
              "Gentle, slow diaphragmatic nasal breathing",
              "Natural Hum (Bhramari) when fever subsides"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin D3, Vitamin A.",
            "dietarySources": "Warm bone broth, pomegranate, warm ginger-clove decoction, steamed carrots, turmeric milk."
          },
          "holisticIntegration": "Sip a warm brew of crushed Tulsi leaves, black pepper, and dry ginger with honey every 4 hours to clear lingering phlegm."
        },
        {
          "id": "lungs-4",
          "name": "Acute & Chronic Bronchitis",
          "severity": "Moderate",
          "category": "Bronchial Inflammation",
          "cause": "Inflammation of bronchial mucous membranes caused by respiratory viruses (acute) or prolonged smoking and pollution exposure (chronic).",
          "prevention": "Avoid smoking and secondhand smoke, wear N95 masks in polluted areas, indoor HEPA filtration, hand hygiene.",
          "lifestyle": "High fluid intake (warm herbal teas), cool-mist humidifier in bedroom, avoid dry heated indoor air, rest vocal cords.",
          "medicines": "Bronchodilators (Albuterol inhaler for wheezing), Guaifenesin (expectorant), Dextromethorphan (for nocturnal dry cough).",
          "ayurveda": {
            "dosha": "Kasa Roga dominated by Kaphaja or Vataja vitiation.",
            "herbs": "Vasa, Kantakari, Yashtimadhu, Maricha (Black pepper), Pippali.",
            "formulations": "Khadiradi Vati, Sitopaladi Churna, Kasamrit Herbal, Talisadi Churna.",
            "therapy": "Steam inhalation with Tulsi leaves and Ajwain (carom seeds)."
          },
          "mudras": {
            "primary": "Shunya Mudra (Space & Decongestion Mudra)",
            "technique": "Bend middle finger to base of thumb; press thumb over bent middle finger. Keep other fingers extended.",
            "duration": "15 minutes, two to three times daily.",
            "benefits": "Clears fluid retention in thoracic passages, relieves chest fullness and bronchial pressure."
          },
          "yoga": {
            "asanas": [
              "Bhujangasana",
              "Matsyasana",
              "Marjaryasana-Bitilasana",
              "Ustrasana"
            ],
            "pranayama": [
              "Ujjayi Breathing",
              "Anulom Vilom",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc, Vitamin A, N-Acetylcysteine (NAC).",
            "dietarySources": "Warm broths, garlic, ginger, thyme tea, raw clover honey, papaya."
          },
          "holisticIntegration": "Boil 1/2 tsp crushed Ajwain and 5 Tulsi leaves in 500ml water and inhale steam for 7 minutes, then sip 1/2 cup of warm strained tea with honey."
        },
        {
          "id": "lungs-5",
          "name": "Idiopathic Pulmonary Fibrosis (IPF)",
          "severity": "Critical / Progressive",
          "category": "Interstitial Lung Disease",
          "cause": "Aberrant wound healing in alveolar epithelial cells leading to excessive fibroblast proliferation and collagen deposition, stiffening lung tissue.",
          "prevention": "Avoid exposure to asbestos, silica, bird droppings, mold; smoking cessation; early treatment of autoimmune disorders.",
          "lifestyle": "Pulmonary rehabilitation, energy conservation strategies, portable pulse oximetry, high hydration.",
          "medicines": "Antifibrotics (Pirfenidone, Nintedanib), Supplemental Oxygen, Pulmonary Rehabilitation, Lung Transplant evaluation.",
          "ayurveda": {
            "dosha": "Dhatu Kshaya with entrenched Vata vitiation in Pranavaha Srotas.",
            "herbs": "Ashwagandha, Shatavari, Bala, Yashtimadhu, Pippali Rasayana.",
            "formulations": "Chyawanprash, Drakshavaleha, Brahma Rasayana, Vidaryadi Kashayam.",
            "therapy": "Snigdha Swedana (gentle oily steam), Shirodhara with Ksheerabala Taila."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Oxygen Absorption Mudra)",
            "technique": "Touch tips of ring and little finger to thumb tip. Other two fingers extended.",
            "duration": "20 minutes three times daily.",
            "benefits": "Optimizes alveolar capillary oxygen transfer efficiency, eases dyspnea, sustains physical stamina."
          },
          "yoga": {
            "asanas": [
              "Gentle seated Tadasana",
              "Seated Chest expansion",
              "Supported Reclined Supta Baddha Konasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow, soft Diaphragmatic breathing",
              "Gentle Dirga Pranayama (no strain)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, N-Acetylcysteine (NAC 1800mg daily), Vitamin E, Glutathione.",
            "dietarySources": "Avocados, extra virgin olive oil, soaked almonds, wild blueberries, leafy greens, bone broth."
          },
          "holisticIntegration": "Take 600mg NAC with warm water in morning and evening. Practice 15 minutes of slow, conscious belly breathing visualizing healing golden light in lungs."
        },
        {
          "id": "lungs-6",
          "name": "Obstructive Sleep Apnea (OSA)",
          "severity": "Moderate to High",
          "category": "Upper Airway Sleep Disorder",
          "cause": "Repetitive collapse of pharyngeal airway during sleep due to loss of motor tone, retrognathia, tonsillar hypertrophy, or cervical adipose tissue.",
          "prevention": "Weight loss, avoidance of evening alcohol and sedatives, treating chronic nasal congestion.",
          "lifestyle": "Sleep on side (positional therapy), elevate bed head by 30 degrees, avoid heavy meals within 3 hours of sleep.",
          "medicines": "CPAP / BiPAP therapy, Mandibular Advancement Devices (MAD), Hypoglossal Nerve Stimulation (Inspire).",
          "ayurveda": {
            "dosha": "Kapha-Meda Avarodha causing Vata vitiation during sleep.",
            "herbs": "Vacha, Pippali, Haridra, Triphala, Guggulu.",
            "formulations": "Triphala Guggulu, Medohar Guggulu, Kanchnar Guggulu, Varunadi Kashayam.",
            "therapy": "Pratimarsha Nasya with Shadbindu Taila or Anu Taila."
          },
          "mudras": {
            "primary": "Shunya Mudra (Pharyngeal Tone Mudra)",
            "technique": "Fold middle finger to base of thumb; place thumb over middle finger knuckle. Keep other fingers straight.",
            "duration": "15 minutes morning and evening.",
            "benefits": "Reduces congestion and edema in upper soft palate and pharynx, enhances airway patency."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose - tones pharyngeal and soft palate muscles)",
              "Bhujangasana",
              "Ustrasana",
              "Halasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Ocean breath - tones upper airway)",
              "Kapalbhati",
              "Bhastrika"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium Glycinate, Vitamin B12, CoQ10, Omega-3 fatty acids.",
            "dietarySources": "Light early dinner, steamed green vegetables, ginger tea, walnuts, soaked chia seeds."
          },
          "holisticIntegration": "Perform 5 minutes of Simhasana (Lion's breath with tongue extended) every evening. Instill 2 drops of lukewarm Anu Taila into each nostril before sleep."
        },
        {
          "id": "lungs-7",
          "name": "Allergic Rhinosinusitis & Upper Airway Allergies",
          "severity": "Mild to Moderate",
          "category": "Upper Airway Allergic",
          "cause": "IgE-mediated hypersensitivity reaction to inhaled allergens (pollen, dust mites, dander), leading to histamine release, mucosal edema, and ostial blockage.",
          "prevention": "Saline nasal rinses (Neti pot), keeping windows closed during high pollen, allergen-proof mattress encasings, HEPA filtration.",
          "lifestyle": "Shower immediately after returning from outdoors in spring, avoid rubbing eyes, maintain hydration.",
          "medicines": "Intranasal Corticosteroid sprays (Fluticasone), Second-generation oral antihistamines (Cetirizine, Fexofenadine), Azelastine, Montelukast.",
          "ayurveda": {
            "dosha": "Pratishyaya caused by Vata-Kapha vitiation combined with Ama.",
            "herbs": "Haridra (Curcumin), Tulsi, Neem, Pippali, Yashtimadhu, Trikatu.",
            "formulations": "Haridra Khanda, Sitopaladi Churna, Vyoshadi Vati, Anu Taila.",
            "therapy": "Jala Neti (warm saline nasal wash) followed by Anu Taila Nasya."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Histamine & Tissue Stabilizer)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Strengthens mucous membranes, reduces overreactive histamine release."
          },
          "yoga": {
            "asanas": [
              "Setu Bandhasana",
              "Sarvangasana",
              "Matsyasana",
              "Marjaryasana-Bitilasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati Pranayama",
              "Bhastrika"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin (500mg), Vitamin C (1000mg), Vitamin D3, Zinc, Stinging Nettle.",
            "dietarySources": "Red onions, apples, berries, warm green tea, citrus fruits, raw honey."
          },
          "holisticIntegration": "Perform Jala Neti every morning using warm sterile saline, gently blow out moisture, and take 1 tsp Haridra Khanda with warm water."
        },
        {
          "id": "lungs-8",
          "name": "Pleurisy & Pleural Effusion",
          "severity": "High / Acute",
          "category": "Pleural Pathology",
          "cause": "Inflammation of parietal and visceral pleura causing sharp pleuritic pain on inspiration, caused by viral infections, pneumonia, pulmonary embolism, or lupus.",
          "prevention": "Early management of pneumonia, adherence to anticoagulation if high DVT risk, proper control of autoimmune diseases.",
          "lifestyle": "Splinting painful side with a pillow during coughing, total rest until sharp pain subsides, sleeping on affected side to limit friction.",
          "medicines": "NSAIDs (Indomethacin, Ibuprofen), Targeted antibiotics, Thoracentesis (pleural fluid tap), Chest tube drainage.",
          "ayurveda": {
            "dosha": "Parshwashoola (flank pain) caused by vitiated Vata and Kapha in the Uras (chest).",
            "herbs": "Pushkarmool, Rasna, Dashamoola, Shallaki, Guduchi.",
            "formulations": "Dashamoola Kwatha, Rasnadi Guggulu, Punarnavadi Kashaya, Shwasa Kuthar Ras.",
            "therapy": "Upanaha (warm herbal poultice) over affected chest wall, gentle dry fomentation."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Chest Pain Relief)",
            "technique": "Index finger to base of thumb; middle and ring fingertips joined to thumb tip; pinky extended.",
            "duration": "15-20 minutes in resting seated posture.",
            "benefits": "Eases thoracic neuromuscular guarding, calms pleuritic spasms."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Supported Child's Pose with bolsters",
              "Gentle seated neck and torso breathing"
            ],
            "pranayama": [
              "Gentle Diaphragmatic Breathing",
              "Soft Humming Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc, Vitamin D3, Omega-3 fatty acids, Curcumin.",
            "dietarySources": "Warm turmeric broths, ginger tea, steamed squashes, stewed apples, soaked pumpkin seeds."
          },
          "holisticIntegration": "Sip warm Dashamoola tea with a pinch of dry ginger twice daily. Apply a warm castor oil pack over painful flank for 20 minutes."
        },
        {
          "id": "lungs-9",
          "name": "Bronchiectasis & Chronic Suppurative Airway Disease",
          "severity": "High / Chronic",
          "category": "Structural Airway Pathology",
          "cause": "Permanent abnormal dilation of bronchi caused by recurrent severe infections, cystic fibrosis, ciliary dyskinesia, or immunodeficiency.",
          "prevention": "Childhood vaccinations against pertussis and measles, aggressive antibiotic treatment of acute chest infections, managing immunoglobulin deficiencies.",
          "lifestyle": "Daily airway clearance techniques (oscillatory PEP), postural drainage, high hydration, avoiding air pollutants.",
          "medicines": "Macrolide maintenance (Azithromycin), Inhaled Hypertonic Saline (3-7%), Mucolytics, Targeted antibiotics during exacerbations.",
          "ayurveda": {
            "dosha": "Ura-Kshata and chronic Kaphaja Kasa with Purulent Sputum (Pooya-Kasa).",
            "herbs": "Vasa, Kantakari, Pushkarmool, Yashtimadhu, Pippali, Haritaki.",
            "formulations": "Vasavaleha, Agastya Haritaki, Kanakasava, Swarna Malini Vasant Ras.",
            "therapy": "Dhoomapana (medicated herbal smoke with Vacha/Guggulu), Chest Swedana."
          },
          "mudras": {
            "primary": "Linga Mudra (Sputum Liquefaction)",
            "technique": "Interlace fingers, keep left thumb upright pointing upward, wrap right thumb and index finger around it.",
            "duration": "15 minutes twice daily.",
            "benefits": "Generates thoracic warmth, assists breakdown of stubborn mucus plugs."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana (assists gravitational drainage)",
              "Sasangasana",
              "Setu Bandhasana",
              "Matsyasana"
            ],
            "pranayama": [
              "Kapalbhati (Assists mucus expulsion)",
              "Bhastrika Pranayama (Mild)",
              "Deep Pursed-Lip Exhalations"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Vitamin A, N-Acetylcysteine (NAC 1200mg daily), Zinc.",
            "dietarySources": "Warm soups with garlic, onions, and black pepper; ginger tea; carrots; bone broth."
          },
          "holisticIntegration": "Perform 15 minutes of postural drainage every morning immediately following 50 gentle rounds of Kapalbhati, followed by warm ginger-honey water."
        },
        {
          "id": "lungs-10",
          "name": "Chronic Cough Hypersensitivity Syndrome",
          "severity": "Mild to Moderate",
          "category": "Neuro-Cough Hypersensitivity",
          "cause": "Sensitized laryngeal sensory vagal afferents sparked by past viral illness, silent gastroesophageal reflux (LPR), post-nasal drip, or ACE inhibitors.",
          "prevention": "Switch offending ACE inhibitors to ARBs, treat silent reflux by avoiding late dinners, humidify bedroom air.",
          "lifestyle": "Sip room-temperature water at first tickle instead of coughing, speech therapy swallow techniques, suck on honey lozenges, avoid vocal strain.",
          "medicines": "Neuromodulators (Gabapentin, Pregabalin, Amitriptyline low dose), Dextromethorphan, Inhaled Ipratropium, PPIs (if reflux-driven).",
          "ayurveda": {
            "dosha": "Vataja Kasa (dry, barking, spasmodic cough with throat tickle).",
            "herbs": "Yashtimadhu (Licorice - superior demulcent), Kantakari, Vasa, Lavanga (Clove), Maricha.",
            "formulations": "Lavangadi Vati, Sitopaladi Churna, Khadiradi Vati, Eladi Vati.",
            "therapy": "Gandusha (oil pulling with warm sesame oil), gargling with warm turmeric-salt water."
          },
          "mudras": {
            "primary": "Shunya Mudra (Throat & Larynx Calming Mudra)",
            "technique": "Bend middle finger to base of thumb; hold down with thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes daily.",
            "benefits": "Relieves throat tickle, soothes irritated hypersensitive sensory laryngeal nerves."
          },
          "yoga": {
            "asanas": [
              "Matsyasana (Fish Pose)",
              "Ustrasana",
              "Bhujangasana",
              "Simhasana (tones vocal cords)"
            ],
            "pranayama": [
              "Ujjayi Breathing (soothing ocean breath)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12, Magnesium, Vitamin C, Zinc.",
            "dietarySources": "Warm licorice root tea, raw Manuka honey, ghee with black pepper, stewed pears with cloves."
          },
          "holisticIntegration": "Slowly dissolve one Lavangadi Vati or chew a small clove coated in pure raw honey whenever the dry cough tickle arises in the throat."
        }
      ]
    },
    "liver": {
      "id": "liver",
      "name": "Liver & Gallbladder",
      "layer": "internals",
      "category": "Hepato-Biliary & Metabolic",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Primary metabolic engine handling detoxification, bile synthesis, glycogen storage, protein synthesis, cholesterol regulation, and toxin clearance.",
      "topDiseases": [
        {
          "id": "liver-1",
          "name": "Metabolic Dysfunction Steatohepatitis (MASH / NAFLD)",
          "severity": "Moderate to High",
          "category": "Hepatic Metabolic",
          "cause": "Hepatic triglyceride accumulation exceeding 5% of liver weight, driven by insulin resistance, high fructose corn syrup, visceral adiposity, mitochondrial dysfunction, and lipid peroxidation.",
          "prevention": "Elimination of sugar-sweetened beverages and refined carbohydrates, daily physical exercise, Mediterranean diet, 7-10% body weight loss.",
          "lifestyle": "12-to-14 hour overnight intermittent fasting window, replace refined cooking oils with cold-pressed olive or mustard oil, 30 minutes daily brisk movement.",
          "medicines": "Resmetirom, GLP-1 receptor agonists (Semaglutide), Vitamin E (800 IU daily), Pioglitazone.",
          "ayurveda": {
            "dosha": "Yakritodara / Medoroga with Pitta-Kapha obstruction in the Yakrit.",
            "herbs": "Bhumi Amla (Phyllanthus niruri), Katuki (Picrorhiza kurroa), Kalmegh, Punarnava, Guduchi.",
            "formulations": "Arogyavardhini Vati, Punarnavadi Mandur, Liv-52, Yakrit Plihantak Churna.",
            "therapy": "Virechana (therapeutic purgation to evacuate accumulated Pitta-Kapha)."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolism & Fat Burning Mudra)",
            "technique": "Bend ring finger to base of thumb; press thumb over folded ring finger. Other fingers extended.",
            "duration": "15 minutes twice daily before meals.",
            "benefits": "Kindles hepatic Agni, promotes lipid catabolism, reduces intrahepatic fat accumulation."
          },
          "yoga": {
            "asanas": [
              "Ardha Matsyendrasana",
              "Dhanurasana (Bow Pose)",
              "Bhujangasana",
              "Mandukasana (Frog Pose)"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Surya Bhedana Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Choline (VLDL fat export), Vitamin E, Vitamin D3, Omega-3 fatty acids, Milk Thistle (Silymarin).",
            "dietarySources": "Cruciferous vegetables (broccoli, brussels sprouts), pasture-raised egg yolks, organic green tea, lemons."
          },
          "holisticIntegration": "Drink 1 glass of warm water with the juice of 1/2 organic lemon and 1 tsp pure organic Bhumi Amla juice immediately upon waking to stimulate hepatic bile flush."
        },
        {
          "id": "liver-2",
          "name": "Gallstones (Cholelithiasis) & Biliary Sludge",
          "severity": "Moderate to Critical",
          "category": "Biliary Pathology",
          "cause": "Precipitation of cholesterol (80%) or bilirubin (pigment stones 20%) in gallbladder bile due to cholesterol supersaturation, hypomotility, biliary stasis, or rapid weight loss.",
          "prevention": "Gradual weight loss (avoid crash fasting), high dietary fiber intake, regular healthy fat consumption to ensure frequent gallbladder emptying.",
          "lifestyle": "Avoid large high-fat greasy meals that trigger biliary colic, chew food thoroughly, maintain consistent meal timings, drink warm fluids.",
          "medicines": "Oral Ursodeoxycholic Acid (UDCA / Ursodiol), IV antibiotics and hydration (for acute cholecystitis), Laparoscopic Cholecystectomy.",
          "ayurveda": {
            "dosha": "Pittashmari (biliary calculi) formed by concentrated Pitta and Kapha solidified by dry Vata.",
            "herbs": "Katuki, Bhumi Amla, Gokshura, Punarnava, Kalmegh, Kulattha (Horse gram).",
            "formulations": "Arogyavardhini Vati, Liv-52, Ashmarihara Kashaya, Punarnavadi Guggulu.",
            "therapy": "Deepana-Pachana with warm digestive spices, gentle Abhyanga over right upper quadrant."
          },
          "mudras": {
            "primary": "Varun Mudra (Fluid Balance & Litholysis Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "15-20 minutes twice daily.",
            "benefits": "Promotes proper viscosity of bodily fluids, prevents bile supersaturation and sludge formation."
          },
          "yoga": {
            "asanas": [
              "Pawanmuktasana",
              "Bhujangasana",
              "Vajrasana (Post-meal digestion - 10 mins)",
              "Ardha Matsyendrasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana",
              "Soft Dirga Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (converting cholesterol into bile acids), Magnesium, Phosphatidylcholine, Taurine, Curcumin.",
            "dietarySources": "Horse gram soup (Kulattha), artichokes, beets, radishes, apples (malic acid softens stones)."
          },
          "holisticIntegration": "Sip 1 bowl of warm horse gram (Kulattha) soup seasoned with cumin and ginger 3 times a week. Avoid heavy fried dairy and trans-fats."
        },
        {
          "id": "liver-3",
          "name": "Liver Cirrhosis & Portal Hypertension",
          "severity": "Critical / Advanced",
          "category": "Hepatic Structural",
          "cause": "End-stage diffuse hepatic fibrosis, disruption of lobular architecture, and regenerative nodule formation from chronic hepatitis B/C, alcoholic liver disease, or progressive MASH.",
          "prevention": "Complete and permanent abstinence from alcohol, vaccination against Hepatitis A and B, aggressive treatment of viral hepatitis, managing metabolic syndrome early.",
          "lifestyle": "Sodium restriction (<2000mg/day to control ascites), small frequent protein-sufficient meals, fall prevention, absolute zero hepatotoxic drugs.",
          "medicines": "Diuretics (Spironolactone + Furosemide in 100:40 ratio), Non-selective beta-blockers (Carvedilol), Lactulose + Rifaximin, Liver Transplantation.",
          "ayurveda": {
            "dosha": "Kumbha Kamala and Yakritodara with severe Dhatu Kshaya and Pitta-Vata degradation.",
            "herbs": "Bhumi Amla, Katuki, Punarnava, Sharapunkha, Guduchi.",
            "formulations": "Arogyavardhini Vati, Punarnavarishta, Liv-52 syrup, Swarna Vasant Malkati Ras.",
            "therapy": "Very gentle Takradhara (medicated buttermilk stream on forehead), gentle Virechana."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Life Preservation Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Index and middle fingers extended.",
            "duration": "20 minutes three times daily.",
            "benefits": "Supports basic metabolic cellular endurance, aids protein assimilation, counters chronic hepatic exhaustion."
          },
          "yoga": {
            "asanas": [
              "Shavasana with supported head",
              "Gentle seated Butterfly Pose (Bhadrasana)",
              "Gentle supported Supta Baddha Konasana"
            ],
            "pranayama": [
              "Slow, soft Nadi Shodhana (No retention)",
              "Bhramari Pranayama",
              "Gentle Diaphragmatic Breathing"
            ],
            "cautions": "Zero forceful abdominal practices (no Kapalbhati or strong abdominal twists)."
          },
          "vitamins": {
            "deficiencies": "Zinc (urea cycle and preventing encephalopathy), Vitamin D3, Vitamin K1/K2, Thiamine (B1), BCAAs.",
            "dietarySources": "Pomegranate, papaya, boiled lentils, fresh buttermilk seasoned with roasted cumin, tender coconut water."
          },
          "holisticIntegration": "Drink 1 glass of fresh buttermilk (Takra) churned with roasted cumin seeds and a pinch of rock salt at lunchtime to nourish hepatic gut microbiota."
        },
        {
          "id": "liver-4",
          "name": "Viral Hepatitis (Hepatitis B & C)",
          "severity": "Critical / Chronic",
          "category": "Hepatic Infectious",
          "cause": "Infection with blood-borne/body-fluid transmitted Hepatotropic viruses (HBV, HCV), leading to cytotoxic T-cell mediated hepatocellular necrosis.",
          "prevention": "Hepatitis B vaccination series, universal precautions in healthcare, needle-exchange programs, screening blood donations, safe sexual practices.",
          "lifestyle": "Zero alcohol intake, avoid raw or undercooked shellfish, maintain separate personal hygiene items, optimize immune health.",
          "medicines": "For HCV: Direct-Acting Antivirals (Sofosbuvir/Velpatasvir - >95% cure rate). For HBV: Nucleos(t)ide analogues (Entecavir, Tenofovir).",
          "ayurveda": {
            "dosha": "Yakrit Dushti with Pitta-Rakta dominance (Kamala / Jaundice).",
            "herbs": "Bhumi Amla (anti-HBV properties), Kalmegh, Katuki, Guduchi, Manjistha.",
            "formulations": "Phalatrikadi Kwatha, Arogyavardhini Vati, Liv-52 DS, Amritarishta.",
            "therapy": "Mridu Virechana (gentle purgation with castor oil and Triphala)."
          },
          "mudras": {
            "primary": "Varun Mudra (Toxin Flushing Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "15-20 minutes twice daily.",
            "benefits": "Cleanses bloodstream, supports hepatic fluid detox pathways, balances fiery Pitta in blood."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Bhadrasana",
              "Shavasana",
              "Setu Bandhasana (supported)"
            ],
            "pranayama": [
              "Sheetali / Sheetkari",
              "Anulom Vilom",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Selenium, Vitamin D3, Vitamin B12, Glutathione, Silymarin (Milk Thistle).",
            "dietarySources": "Artichokes, beets, papaya, leafy greens, amla (Indian gooseberry - high bioavailable Vitamin C)."
          },
          "holisticIntegration": "Take 1 tablespoon of fresh Amla juice mixed with 1 tsp raw honey and 1/2 tsp Bhumi Amla powder every morning on an empty stomach."
        },
        {
          "id": "liver-5",
          "name": "Jaundice & Hyperbilirubinemia",
          "severity": "Moderate to High",
          "category": "Biliary Pigment Disorder",
          "cause": "Accumulation of yellow pigment bilirubin in tissues (>2.5-3.0 mg/dL), causing yellow sclera and skin; due to pre-hepatic hemolysis, parenchymal dysfunction, or biliary obstruction.",
          "prevention": "Hygiene measures against foodborne Hepatitis A and E, avoiding hepatotoxic drugs, safe drinking water, treating biliary lithiasis.",
          "lifestyle": "High carbohydrate, low-fat, easily digestible diet (boiled rice, mung dal soup), total rest, avoid physical exertion.",
          "medicines": "Phototherapy (neonates), Treatment of underlying cause (antibiotics for cholangitis, ERCP stone extraction, stop offending drugs).",
          "ayurveda": {
            "dosha": "Kosthashrita or Shakhashrita Kamala caused by severe Pitta aggravation burning Rakta and Mamsa Dhatus.",
            "herbs": "Bhumi Amla, Katuki, Sugarcane juice (Ikshu Rasa), Triphala, Punarnava.",
            "formulations": "Punarnavadi Mandur, Arogyavardhini Vati, Dhatri Lauha, Rohitakarishta.",
            "therapy": "Daily consumption of fresh pure sugarcane juice."
          },
          "mudras": {
            "primary": "Varun Mudra (Bile Balance Mudra)",
            "technique": "Join tip of little finger to thumb tip. Other three fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Regulates bilirubin excretion, cools internal body heat, purifies plasma (Rasa Dhatu)."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Gentle Supta Baddha Konasana",
              "Seated gentle breathing"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Chandra Bhedana",
              "Soft Diaphragmatic Breath"
            ],
            "cautions": "Zero intense asanas or sweating during acute hyperbilirubinemia."
          },
          "vitamins": {
            "deficiencies": "Fat-soluble vitamins (A, D, E, K), Vitamin C, B-Complex.",
            "dietarySources": "Fresh sugarcane juice, radishes, barley water, coconut water, boiled white rice with mung soup."
          },
          "holisticIntegration": "Drink 1 glass of fresh sugarcane juice with 1 squeeze of fresh lime juice at 10 AM, and take 1/2 tsp Katuki churna with warm water at bedtime."
        },
        {
          "id": "liver-6",
          "name": "Acute & Chronic Cholecystitis",
          "severity": "Critical / Acute",
          "category": "Gallbladder Inflammation",
          "cause": "Cystic duct obstruction by an impacted gallstone leading to gallbladder distension, mucosal ischemia, chemical inflammation, and bacterial infection.",
          "prevention": "Maintain steady body weight, avoid high-fat binge eating, regular physical exercise, early elective cholecystectomy for symptomatic gallstones.",
          "lifestyle": "During acute flare: bowel rest; during recovery: low-fat diet (<30g fat/day), small meals, avoid creamy sauces and sausages.",
          "medicines": "IV Broad-spectrum Antibiotics (Ceftriaxone + Metronidazole), IV analgesics, Urgent or elective Laparoscopic Cholecystectomy.",
          "ayurveda": {
            "dosha": "Pittashaya Shotha with acute Pitta-Kapha entrapment.",
            "herbs": "Guduchi, Katuki, Shallaki, Haridra (Curcumin), Gokshura.",
            "formulations": "Kaishore Guggulu, Arogyavardhini Vati, Avipattikar Churna, Amritarishta.",
            "therapy": "Cooling sandalwood and vetiver paste applied externally over the right hypochondrium."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Detoxification)",
            "technique": "Touch middle and ring fingertips to thumb tip. Index and little fingers extended.",
            "duration": "15 minutes twice daily.",
            "benefits": "Promotes downward flow of bio-toxins, eases spasm in biliary sphincters."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Pawanmuktasana (gentle)",
              "Vajrasana (in recovery)"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Soft Anulom Vilom",
              "Gentle belly breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Magnesium, Taurine, Vitamin D3.",
            "dietarySources": "Barley water, stewed apples, mung dal soup, steamed beets, lemon water."
          },
          "holisticIntegration": "Drink warm barley water with a pinch of roasted cumin seeds between meals to ease biliary spasms and promote gentle cleansing."
        },
        {
          "id": "liver-7",
          "name": "Alcoholic Hepatitis & Toxic Liver Injury",
          "severity": "Critical",
          "category": "Toxic Hepatic",
          "cause": "Excessive alcohol consumption producing toxic acetaldehyde, reactive oxygen species, CYP2E1 induction, and gut endotoxin translocation.",
          "prevention": "Complete and permanent abstinence from alcohol, nutritional rehabilitation, psychological addiction support programs.",
          "lifestyle": "High protein, high-calorie nutrition, psychosocial support networks, total avoidance of alcohol-containing foods, medications, or mouthwashes.",
          "medicines": "Prednisolone (for severe alcoholic hepatitis), N-Acetylcysteine infusion, Nutritional enteral feeding, Liver transplantation.",
          "ayurveda": {
            "dosha": "Madatyaya causing deep Ojas Kshaya, Yakrit Pitta-Vata burning.",
            "herbs": "Draksha (Raisins), Bhumi Amla, Katuki, Ashwagandha, Punarnava.",
            "formulations": "Draksharishta, Arogyavardhini Vati, Punarnavadi Kwath, Chyawanprash.",
            "therapy": "Takradhara (cooling buttermilk stream), gentle body Abhyanga with cooling Chandanadi oil."
          },
          "mudras": {
            "primary": "Prana Mudra (Life Force Rehabilitation)",
            "technique": "Touch tips of ring and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Re-energizes damaged hepatic and neuronal tissues, builds stamina against cravings."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Shavasana",
              "Balasana",
              "Supta Baddha Konasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Thiamine (Vitamin B1), Folate, Pyridoxine (B6), Zinc, Magnesium.",
            "dietarySources": "Soaked black raisins, coconut water, fresh pomegranates, bone broth, cooked green vegetables."
          },
          "holisticIntegration": "Soak 20 organic black raisins in 1 cup water overnight; blend and drink in the morning (Draksha Himam) to heal mucosal lining."
        },
        {
          "id": "liver-8",
          "name": "Hereditary Hemochromatosis (Iron Overload)",
          "severity": "High / Genetic",
          "category": "Genetic Hepatic",
          "cause": "Mutation in HFE gene causing inappropriately low hepcidin levels, uncontrolled intestinal iron absorption, and progressive iron deposition in liver.",
          "prevention": "Genetic screening of relatives, avoidance of iron supplements, avoiding Vitamin C supplements with meals, alcohol avoidance.",
          "lifestyle": "Avoid raw seafood (Vibrio vulnificus danger), drink black tea or coffee with meals (tannins inhibit non-heme iron absorption), avoid cast iron cookware.",
          "medicines": "Therapeutic Phlebotomy (routine blood removal to maintain ferritin <50-100 ng/mL), Iron chelation agents (Deferasirox).",
          "ayurveda": {
            "dosha": "Rakta Dhatu Dushti with Pitta-Kapha entrapment.",
            "herbs": "Manjistha, Sariva, Guduchi, Triphala, Neem.",
            "formulations": "Kaishore Guggulu, Mahamanjishtadi Kwath, Arogyavardhini Vati.",
            "therapy": "Raktamokshana (Siravedha / Therapeutic Bloodletting)."
          },
          "mudras": {
            "primary": "Varun Mudra (Blood Purification)",
            "technique": "Touch little fingertip to thumb tip; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Helps balance the Rakta (blood) element and promotes elimination of metabolic toxins."
          },
          "yoga": {
            "asanas": [
              "Ardha Matsyendrasana",
              "Bhujangasana",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari",
              "Anulom Vilom",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Avoid excess Vitamin C and Iron. Need: Calcium (inhibits iron uptake), Green tea polyphenols (EGCG).",
            "dietarySources": "Black tea with meals, rosemary, oregano, calcium-rich dairy or sesame, leafy vegetables."
          },
          "holisticIntegration": "Drink a cup of organic black tea immediately following meals to naturally bind non-heme iron and prevent its intestinal absorption."
        },
        {
          "id": "liver-9",
          "name": "Biliary Dyskinesia & Sphincter Spasm",
          "severity": "Moderate",
          "category": "Functional Biliary",
          "cause": "Motility disorder of gallbladder or spasm of the muscular valve (Sphincter of Oddi) controlling the flow of bile into duodenum, causing biliary pain without stones.",
          "prevention": "Avoid opioid pain medications (which trigger intense sphincter spasm), manage visceral hypersensitivity and chronic stress.",
          "lifestyle": "Small, frequent low-fat meals; avoid prolonged fasting followed by heavy fatty feasts; practice stress-reducing mind-body techniques.",
          "medicines": "Calcium Channel Blockers (Nifedipine), Nitrates, Endoscopic Sphincterotomy.",
          "ayurveda": {
            "dosha": "Vata-Pitta dysfunction in the Pittadhara Kala causing spasmodic bile flow.",
            "herbs": "Hing (Asafoetida), Ajwain, Fennel (Saunf), Katuki, Bhumi Amla.",
            "formulations": "Hingwashtak Churna, Avipattikar Churna, Shankh Vati, Liv-52.",
            "therapy": "Warm castor oil pack over liver/gallbladder area, gentle Abhyanga."
          },
          "mudras": {
            "primary": "Apana Mudra (Digestive Spasm Reliever)",
            "technique": "Join tips of middle and ring fingers to thumb tip. Keep other fingers straight.",
            "duration": "15 minutes twice daily after meals.",
            "benefits": "Relaxes smooth muscle spasms throughout the biliary and gastrointestinal sphincters."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (10 minutes after meals)",
              "Marjaryasana-Bitilasana",
              "Supta Matsyendrasana",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium, Taurine, Vitamin B6, Melatonin.",
            "dietarySources": "Fennel seed tea, cumin-coriander infusions, papaya, steamed zucchini, pumpkin seeds."
          },
          "holisticIntegration": "Drink 1 cup of warm fennel, cumin, and coriander seed tea (CCF Tea) 20 minutes after lunch and dinner to maintain relaxed, rhythmic biliary flow."
        },
        {
          "id": "liver-10",
          "name": "Hepatic Encephalopathy (Ammonia Toxicity)",
          "severity": "Critical",
          "category": "Neuro-Hepatic",
          "cause": "Severe hepatic insufficiency allowing neurotoxic substances (gut-derived ammonia, mercaptans) to cross blood-brain barrier, causing astrocyte swelling and edema.",
          "prevention": "Strict prevention of constipation (ammonia is absorbed from retained stool), avoiding GI bleeding, treating infections promptly, avoiding over-diuresis.",
          "lifestyle": "Ensure 2-3 soft bowel movements daily, maintain adequate dietary protein (avoid protein restriction which causes muscle wasting), fall precautions.",
          "medicines": "Lactulose (acidifies colonic lumen and traps ammonia as ammonium), Rifaximin (gut-selective antibiotic), L-Ornithine L-Aspartate.",
          "ayurveda": {
            "dosha": "Deep Sannipatika state where toxic Ama and Pitta cloud the Mano-Vaha Srotas.",
            "herbs": "Triphala (maintains daily colonic clearance), Bhumi Amla, Guduchi, Brahmi.",
            "formulations": "Triphala Churna, Avipattikar Churna, Arogyavardhini Vati, Saraswatarishta.",
            "therapy": "Nitya Virechana (daily mild purgative enemas / Basti to prevent gut bio-toxin buildup)."
          },
          "mudras": {
            "primary": "Apana Mudra (Elimination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates downward peristalsis, prevents intestinal stasis and neurotoxin reabsorption."
          },
          "yoga": {
            "asanas": [
              "Gentle seated breathing in chair",
              "Gentle Pawanmuktasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow, soft Nadi Shodhana",
              "Bhramari Pranayama"
            ],
            "cautions": "No forceful pranayamas or inversions."
          },
          "vitamins": {
            "deficiencies": "Zinc (hepatic ornithine transcarbamylase), Thiamine (B1), BCAAs.",
            "dietarySources": "Vegetable and dairy proteins, pumpkin seeds (zinc), soaked raisins, stewed prunes."
          },
          "holisticIntegration": "Take 1 tsp Triphala powder with warm water at bedtime to guarantee optimal morning bowel evacuation, preventing ammonia accumulation."
        }
      ]
    },
    "stomach": {
      "id": "stomach",
      "name": "Stomach & Upper Digestion",
      "layer": "internals",
      "category": "Gastrointestinal",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Secretes hydrochloric acid and intrinsic factor, performs mechanical churning, breaks down dietary proteins, and neutralizes ingested pathogens.",
      "topDiseases": [
        {
          "id": "stomach-1",
          "name": "Gastroesophageal Reflux Disease (GERD) & Acid Reflux",
          "severity": "Moderate",
          "category": "Upper GI Motility",
          "cause": "Inappropriate transient relaxations of the lower esophageal sphincter (LES), hiatal hernia, delayed gastric emptying, and elevated intra-abdominal pressure.",
          "prevention": "Avoid lying down for 3 hours after eating, elevate head of bed 6 inches, avoid late-night dining, maintain healthy body mass index.",
          "lifestyle": "Eliminate coffee, chocolate, citrus, mint, and tomato-based sauces; eat smaller, frequent meals; wear loose clothing around abdomen.",
          "medicines": "Proton Pump Inhibitors (Omeprazole, Pantoprazole), H2 Blockers (Famotidine), Potassium-Competitive Acid Blockers (Vonoprazan), Alginate rafts (Gaviscon Advance).",
          "ayurveda": {
            "dosha": "Amlapitta with vitiated Vidagdha Pitta and Urdhvaga Vata.",
            "herbs": "Yashtimadhu (Licorice), Shatavari, Amla (Amalaki), Kamadudha, Guduchi.",
            "formulations": "Avipattikar Churna, Kamadudha Ras (Mukta yukta), Sutshekhar Ras, Dadimadi Ghrita.",
            "therapy": "Vamana or Virechana (under clinical guidance), cooling Takra preparations."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Digestive Energy)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip; keep index and little finger extended.",
            "duration": "15 minutes after meals while seated comfortably.",
            "benefits": "Re-establishes downward peristalsis (Anulomana), prevents regurgitation and heartburn."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (Diamond Pose for 10-15 mins immediately post meals)",
              "Tadasana",
              "Ardha Matsyendrasana",
              "Pawanmuktasana"
            ],
            "pranayama": [
              "Sheetali Pranayama (Cooling breath to extinguish burning acid)",
              "Sheetkari",
              "Gentle Dirga Pranayama"
            ],
            "cautions": "Avoid inverted poses (Headstand, Shoulderstand) which cause retrograde acid flow."
          },
          "vitamins": {
            "deficiencies": "Zinc Carnosine (mucosal healing), Vitamin B12 (depleted by long-term PPIs), Magnesium, Melatonin (tones LES).",
            "dietarySources": "Deglycyrrhizinated Licorice (DGL), aloe vera juice, slippery elm bark tea, papaya, cooked oatmeal."
          },
          "holisticIntegration": "Chew 1 DGL licorice wafer or sip 20ml pure aloe vera juice 15 minutes before lunch and dinner. Sit in Vajrasana for 10 minutes after every meal."
        },
        {
          "id": "stomach-2",
          "name": "Peptic Ulcer Disease (Gastric & Duodenal)",
          "severity": "Moderate to High",
          "category": "Mucosal Ulcerative",
          "cause": "Imbalance between mucosal defensive factors (mucus, bicarbonate, prostaglandins) and aggressive luminal factors (HCl, pepsin), overwhelmingly driven by Helicobacter pylori infection and NSAID overuse.",
          "prevention": "Testing and eradication of H. pylori, minimizing NSAID use (using co-prescribed misoprostol or PPI when NSAIDs essential), cessation of smoking.",
          "lifestyle": "Avoid alcohol and spicy irritants during active ulceration, eat soothing warm bland foods, avoid smoking (which inhibits mucosal blood flow).",
          "medicines": "H. pylori Quadruple therapy (PPI + Bismuth + Metronidazole + Tetracycline for 14 days), High-dose PPIs, Sucralfate (mucosal surface protector).",
          "ayurveda": {
            "dosha": "Parinama Shoola / Annadravashoola due to intense Pitta-Vata burning mucosal tissues.",
            "herbs": "Yashtimadhu, Shatavari, Amla, Mulethi, Shankha Bhasma.",
            "formulations": "Mahatiktaka Ghrita, Avipattikar Churna, Shankha Vati, Sutshekhar Ras.",
            "therapy": "Pitta-shamaka diet, cooling herbal ghees (Ghritapana)."
          },
          "mudras": {
            "primary": "Varun Mudra (Mucus & Fluid Restorative)",
            "technique": "Join tip of little finger to thumb tip. Other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Enhances gastric cytoprotective mucus secretion, soothes mucosal inflammation."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Shavasana",
              "Supta Baddha Konasana",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari",
              "Chandra Bhedana",
              "Soft Diaphragmatic Breath"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc-L-Carnosine, Vitamin C, Iron (micro-bleeding loss), Glutamine, Vitamin A.",
            "dietarySources": "Cabbage juice (rich in glutamine and Vitamin U - legendary peptic healing agent), bone broth, stewed apples, oatmeal."
          },
          "holisticIntegration": "Drink 100ml fresh raw cabbage and celery juice on empty stomach each morning. Take 1/2 tsp Yashtimadhu powder mixed in warm milk or water before bed."
        },
        {
          "id": "stomach-3",
          "name": "Acute & Chronic Gastritis",
          "severity": "Moderate",
          "category": "Mucosal Inflammatory",
          "cause": "Inflammation of gastric mucosa caused by alcohol binges, bile reflux, stress ischemia, autoimmune antiparietal antibodies, or toxic chemical ingestion.",
          "prevention": "Limit alcohol and NSAID consumption, manage systemic psychological stress, treat underlying bile reflux or bacterial triggers.",
          "lifestyle": "Bland anti-inflammatory diet (congee, khichdi, steamed squashes), avoid ice-cold drinks during meals, eat in a calm unhurried setting.",
          "medicines": "PPIs, H2 Blockers, Antacids with simethicone, Sucralfate suspensions.",
          "ayurveda": {
            "dosha": "Ushna-Tikshna Pitta vitiation causing Ama in Amashaya (stomach).",
            "herbs": "Dhanyaka (Coriander), Musta (Cyperus rotundus), Amalaki, Yashtimadhu, Guduchi.",
            "formulations": "Kamadudha Ras, Praval Pishti, Avipattikar Churna, Mustakarishta.",
            "therapy": "Takra Sevana (churned buttermilk with cumin) and cooling Mukta/Praval preparations."
          },
          "mudras": {
            "primary": "Pushan Mudra (Nourishment & Digestion Mudra)",
            "technique": "Right hand: touch tips of thumb, index, and middle fingers. Left hand: touch tips of thumb, middle, and ring fingers.",
            "duration": "15 minutes twice daily after meals.",
            "benefits": "Harmonizes gastric motility, balances gastric acid secretion, eases nausea."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Marjaryasana-Bitilasana",
              "Pawanmuktasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12, Iron, Zinc, Vitamin C.",
            "dietarySources": "Bone broth, aloe vera gel, stewed pears, cooked pumpkin, warm rice porridge."
          },
          "holisticIntegration": "Sip warm coriander-fennel infusion (steeped overnight) throughout the morning to cool gastric Pitta and soothe burning sensations."
        },
        {
          "id": "stomach-4",
          "name": "Gastroparesis & Delayed Gastric Emptying",
          "severity": "Moderate to High",
          "category": "Neuromuscular Motility",
          "cause": "Impairment of gastric autonomic vagal neuromuscular signaling leading to delayed stomach emptying without physical obstruction, predominantly caused by diabetes, post-viral syndromes, or post-surgical vagal nerve injury.",
          "prevention": "Strict glycemic control in diabetic patients (preventing autonomic vagal neuropathy), avoiding medications that delay motility (opioids, anticholinergics).",
          "lifestyle": "Multiple small frequent meals (5-6 mini-meals daily), low-fiber low-fat diet (fiber forms indigestible bezoars; fat delays emptying), stay upright for 2 hours post meals.",
          "medicines": "Prokinetic agents: Metoclopramide (dopamine antagonist), Erythromycin (motilin receptor agonist), Domperidone, Prucalopride, Gastric Electrical Stimulation.",
          "ayurveda": {
            "dosha": "Amashaya Mandagni with severe Samana Vata and Kledaka Kapha stagnation.",
            "herbs": "Chitrak (Plumbago zeylanica), Shunthi (Dry ginger), Pippali, Maricha, Hing (Asafoetida).",
            "formulations": "Chitrakadi Vati, Hingwashtak Churna, Trikatu Churna, Shankh Vati, Lavan Bhaskar Churna.",
            "therapy": "Deepana-Pachana therapy, warm fomentation (Nadi Sweda) over epigastrium."
          },
          "mudras": {
            "primary": "Surya Mudra (Agni / Digestive Fire Kindling)",
            "technique": "Fold ring finger to thumb root, press thumb over ring finger knuckle; other fingers extended.",
            "duration": "15 minutes before lunch and dinner.",
            "benefits": "Re-ignites sluggish gastric motor waves and digestive enzymes (Jatharagni)."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Mandukasana (Frog Pose)",
              "Ardha Matsyendrasana",
              "Bhujangasana"
            ],
            "pranayama": [
              "Kapalbhati (gentle, 20 strokes to stimulate peristalsis)",
              "Surya Bhedana",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B1, Vitamin B12, Vitamin D3, Electrolytes (Potassium, Magnesium).",
            "dietarySources": "Pureed vegetable soups, warm ginger tea with rock salt, thin mung dal soup, blended smoothies."
          },
          "holisticIntegration": "Chew a thin slice of fresh ginger sprinkled with a pinch of rock salt and lemon juice 10 minutes before meals to stimulate cephalic-vagal gastric secretions."
        },
        {
          "id": "stomach-5",
          "name": "Helicobacter Pylori Gastric Infection",
          "severity": "Moderate",
          "category": "Bacterial Infectious",
          "cause": "Colonization of gastric epithelium by gram-negative microaerophilic bacterium H. pylori producing urease, neutralising gastric acid, eliciting persistent inflammatory gastritis, and raising gastric MALT lymphoma / adenocarcinoma risk.",
          "prevention": "Safe hygienic drinking water, avoiding sharing unsterilized eating utensils, testing and treating household contacts in endemic settings.",
          "lifestyle": "Incorporate natural antimicrobial foods (broccoli sprouts, garlic, mastic gum), maintain strict adherence to antibiotic regimen without skipping doses.",
          "medicines": "Bismuth Quadruple Therapy: PPI twice daily + Bismuth subsalicylate + Metronidazole + Tetracycline for 14 days; confirm eradication with urea breath test 4 weeks post-treatment.",
          "ayurveda": {
            "dosha": "Krimi Roga in Amashaya with Pitta-Kapha vitiation.",
            "herbs": "Vidanga (Embelia ribes - premier anthelmintic/antibacterial), Nimba (Neem), Haridra, Tulsi, Yashtimadhu.",
            "formulations": "Krimimudgar Ras, Vidangarishta, Arogyavardhini Vati, Haridra Khanda.",
            "therapy": "Shodhana therapies, intake of bitter (Tikta) herbal decoctions."
          },
          "mudras": {
            "primary": "Prana Mudra (Immune Fortification Mudra)",
            "technique": "Touch tips of ring and little finger to thumb tip. Other two fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Enhances gastrointestinal mucosal immunity, supports clearance of microbial pathogens."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Pawanmuktasana",
              "Bhujangasana",
              "Dhanurasana"
            ],
            "pranayama": [
              "Nadi Shodhana",
              "Sheetali",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (due to hypochlorhydria), Iron, Vitamin C, Zinc.",
            "dietarySources": "Broccoli sprouts (sulforaphane inhibits H. pylori), Greek yogurt/probiotics, Manuka honey (UMF 15+), cranberry juice (pure unsweetened)."
          },
          "holisticIntegration": "Take 1 tsp raw active Manuka honey on empty stomach upon waking, and consume 1/2 cup fresh broccoli sprouts with lunch daily during and after therapy."
        },
        {
          "id": "stomach-6",
          "name": "Functional Dyspepsia (Indigestion)",
          "severity": "Mild to Moderate",
          "category": "Disorder of Gut-Brain Interaction (DGBI)",
          "cause": "Impaired gastric accommodation to meals, visceral hypersensitivity to mechanical distension and acid, duodenal micro-inflammation (eosinophils/mast cells), and central gut-brain axis dysregulation.",
          "prevention": "Eat in a parasympathetic state (relaxed, sitting down, zero work screens), chew each bite 30 times, avoid eating while emotionally stressed or angry.",
          "lifestyle": "Mindful eating protocols, avoid drinking ice water during meals (dilutes digestive juices), eliminate carbonated beverages, practice diaphragmatic breathing before meals.",
          "medicines": "Low-dose tricyclic antidepressants (Amitriptyline for visceral pain), Prokinetics (Itopride), PPIs, Buspirone (relaxes gastric fundus).",
          "ayurveda": {
            "dosha": "Agnimandya and Ajeerna caused by disturbed Samana Vata and Pachaka Pitta.",
            "herbs": "Shunthi (Dry ginger), Maricha, Pippali, Jeeraka (Cumin), Ajwain, Hing.",
            "formulations": "Hingwashtak Churna, Shankh Vati, Lavan Bhaskar Churna, Jeerakarishta.",
            "therapy": "Abhyanga with sesame oil over solar plexus, warm herbal fomentation."
          },
          "mudras": {
            "primary": "Pushan Mudra (The Gastric Digestion Mudra)",
            "technique": "Right hand: thumb touches index and middle fingertips. Left hand: thumb touches middle and ring fingertips.",
            "duration": "15 minutes seated in Vajrasana after eating.",
            "benefits": "Specifically coordinates the absorption and downward propulsion of food, relieves post-prandial fullness."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (Post-meal)",
              "Supta Virasana (Reclined Hero Pose - deep gastric stretch)",
              "Marjaryasana-Bitilasana",
              "Pawanmuktasana"
            ],
            "pranayama": [
              "Slow Belly Breathing before eating",
              "Anulom Vilom",
              "Gentle Ujjayi"
            ]
          },
          "vitamins": {
            "deficiencies": "Digestive Enzymes, Hydrochloric Acid / Betaine HCl, Vitamin B-Complex, Magnesium.",
            "dietarySources": "Papaya (papain), pineapple (bromelain), warm cumin-fennel tea, ginger-lemon decoction, fermented miso."
          },
          "holisticIntegration": "Sit quietly for 2 minutes before meals, take 5 deep belly breaths, and mix 1/2 tsp Hingwashtak Churna in the first morsel of warm rice/ghee."
        },
        {
          "id": "stomach-7",
          "name": "Hiatal Hernia & Phrenoesophageal Laxity",
          "severity": "Moderate",
          "category": "Structural Gastrointestinal",
          "cause": "Herniation of elements of the abdominal cavity (most commonly gastric cardia) through the esophageal hiatus of the diaphragm into the mediastinum, caused by high intra-abdominal pressure, chronic coughing, or age-related tissue laxity.",
          "prevention": "Avoid heavy deadlifting with Valsalva breath-holding, prevent chronic constipation and straining, maintain normal weight, avoid tight restrictive belts.",
          "lifestyle": "Perform heel drops upon drinking warm water in the morning to encourage stomach descent; avoid lying down after meals; sleep on left side.",
          "medicines": "PPIs and H2 blockers for acid reflux control, Prokinetics, Laparoscopic Nissen Fundoplication / Cruroplasty (for severe sliding or paraesophageal hernias).",
          "ayurveda": {
            "dosha": "Urdhvavata with structural weakness of Mamsa Dhatu and diaphragm.",
            "herbs": "Ashwagandha (muscle tone), Yashtimadhu, Shatavari, Bala, Amla.",
            "formulations": "Drakshasava, Avipattikar Churna, Ashwagandharishta, Kamadudha Ras.",
            "therapy": "Gentle downward abdominal massage (Anulomana Abhyanga)."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Grounding Mudra)",
            "technique": "Touch tips of middle and ring fingers to thumb tip. Keep index and pinky straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Channels bio-energy downwards, relieves retrosternal pressure, counteracts upward hiatal migration."
          },
          "yoga": {
            "asanas": [
              "Tadasana with gentle upward stretching",
              "Virabhadrasana I",
              "Vrikshasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Soft Diaphragmatic Breathing (trains diaphragmatic crura)",
              "Gentle Nadi Shodhana"
            ],
            "cautions": "Strictly avoid inversions, forward bends with compressed abdomen, and heavy abdominal crunches."
          },
          "vitamins": {
            "deficiencies": "Collagen peptides, Vitamin C, Zinc, Magnesium.",
            "dietarySources": "Bone broth, aloe vera gel, stewed apples, steamed vegetables, wild salmon."
          },
          "holisticIntegration": "Morning Heel Drop Exercise: Drink 1 glass warm water, stand on toes, drop heavily onto heels 10 times to use water gravity to pull stomach down from hiatus."
        },
        {
          "id": "stomach-8",
          "name": "Cyclic Vomiting Syndrome & Hyperemesis",
          "severity": "Moderate to High",
          "category": "Neuro-Gastric Paroxysmal",
          "cause": "Episodic, paroxysmal severe bouts of nausea, intractable vomiting, and lethargy with asymptomatic intervals; linked to mitochondrial mutations, migraine diathesis, and autonomic HPA-axis hyper-reactivity.",
          "prevention": "Prophylaxis with migraine regimens, avoidance of known triggers (fasting, physical exhaustion, emotional excitement, infections, car sickness).",
          "lifestyle": "Frequent small carbohydrate snacks to prevent catabolism, maintain hydration, rest in quiet dark room during prodromal phase.",
          "medicines": "Acute: IV fluids, Ondansetron, Aprepitant, Lorazepam, Sumatriptan. Prophylaxis: Cyproheptadine (children), Amitriptyline (adults), CoQ10, L-Carnitine.",
          "ayurveda": {
            "dosha": "Chhardi Roga caused by Udana and Samana Vata reversal pushing Pitta-Kapha upward.",
            "herbs": "Mayurapiccha Bhasma (classical emergency anti-emetic), Ela (Cardamom), Lavanga (Clove), Shunthi, Draksha.",
            "formulations": "Eladi Vati, Mayurapiccha Bhasma with honey, Sutshekhar Ras, Draksharishta.",
            "therapy": "Shirodhara, application of cool sandalwood paste to temples and throat."
          },
          "mudras": {
            "primary": "Shunya Mudra combined with Apana Mudra",
            "technique": "Fold middle finger into thumb root, press thumb over knuckle, join ring finger tip to thumb.",
            "duration": "15 minutes during early prodromal nausea.",
            "benefits": "Stabilizes vestibular and vagal vomiting centers, relieves anti-peristaltic surges."
          },
          "yoga": {
            "asanas": [
              "Shavasana in dark room",
              "Supta Baddha Konasana with head elevated",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari (Cooling)",
              "Very slow rhythmic nasal breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10 (Ubiquinol 200mg - proven in pediatric/adult CVS trials), L-Carnitine, Riboflavin (B2), Magnesium.",
            "dietarySources": "Cardamom water, ginger tea, electrolyte coconut water, soaked black raisins, pomegranate seeds."
          },
          "holisticIntegration": "Sip warm cardamom-raisin water at the very first inkling of nausea. Take CoQ10 and Vitamin B2 daily as evidence-based mitochondrial prophylaxis."
        },
        {
          "id": "stomach-9",
          "name": "Autoimmune Atrophic Gastritis & Pernicious Anemia",
          "severity": "High / Chronic",
          "category": "Autoimmune Hematologic-Gastric",
          "cause": "Autoimmune destruction of gastric oxyntic mucosa by antiparietal cell and anti-intrinsic factor antibodies, leading to achlorhydria (zero stomach acid), hypergastrinemia, and profound Vitamin B12 malabsorption.",
          "prevention": "Early detection in patients with other autoimmune diseases (Hashimoto's, Vitiligo, Type 1 Diabetes), routine screening of B12 and methylmalonic acid (MMA).",
          "lifestyle": "Lifelong commitment to B12 supplementation, regular endoscopic surveillance every 3 years (due to neuroendocrine tumor and gastric adenocarcinoma risk).",
          "medicines": "Lifelong Intramuscular Vitamin B12 (Cyanocobalamin or Hydroxocobalamin 1000mcg regularly) or high-dose oral B12 (1000-2000mcg daily via passive diffusion), Iron supplements.",
          "ayurveda": {
            "dosha": "Grahani Roga with deep Dhatu Kshaya affecting Rasa and Rakta Dhatus.",
            "herbs": "Amalaki, Shatavari, Guduchi, Punarnava, Mandur (Purified iron).",
            "formulations": "Punarnavadi Mandur, Dhatri Lauha, Drakshasava, Kalyanaka Ghrita.",
            "therapy": "Rasayana therapy to rebuild depleted Dhatus and restore vitality."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Nourishment Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Re-vitalizes bone marrow (Majja Dhatu), supports hematopoiesis, counters pernicious fatigue."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Gentle Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Cobalamin - non-negotiable), Intrinsic Factor, Iron, Folate, Vitamin D3.",
            "dietarySources": "Sublingual/injectable active Methylcobalamin, beetroot juice, pomegranate, grass-fed organic liver, nutritional yeast."
          },
          "holisticIntegration": "Take 1000mcg sublingual Methylcobalamin + Adenosylcobalamin daily. Sip 1 glass of fresh beetroot, amla, and carrot juice at midday to stimulate red cell production."
        },
        {
          "id": "stomach-10",
          "name": "Gastric Hyperacidity & Zollinger-Ellison Syndrome",
          "severity": "High / Rare",
          "category": "Endocrine-Gastric Hypersecretory",
          "cause": "Neuroendocrine gastrinoma (pancreatic or duodenal) secreting autonomous gastrin, triggering hypersecretion of gastric acid, causing severe, refractory, multiple peptic ulcerations and chronic diarrhea.",
          "prevention": "Screening in patients with Multiple Endocrine Neoplasia type 1 (MEN1), early diagnosis with fasting serum gastrin and secretin stimulation test.",
          "lifestyle": "Total avoidance of gastric secretagogues (alcohol, coffee, intense spices), eat frequent buffering meals, avoid NSAIDs rigorously.",
          "medicines": "Very high-dose Proton Pump Inhibitors (Pantoprazole, Esomeprazole at double/triple doses), Somatostatin analogues (Octreotide), Surgical resection of gastrinoma.",
          "ayurveda": {
            "dosha": "Maha-Amlapitta with extreme Tejas / Pitta burning the entire digestive tract.",
            "herbs": "Kamadudha, Praval, Mukta, Shatavari, Yashtimadhu, Chandana (Sandalwood).",
            "formulations": "Kamadudha Ras (Mukta yukta), Praval Pishti, Mukta Pishti, Mahatiktaka Ghrita, Avipattikar Churna.",
            "therapy": "Takradhara and cooling Ghrita preparations."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Sheetali Pranayama",
            "technique": "Touch tip of little finger to thumb tip. Keep other three fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Quenches systemic and gastric fire, restores cellular hydration and alkaline balance."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Supta Baddha Konasana",
              "Balasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Sheetali Pranayama (15 rounds)",
              "Sheetkari Pranayama",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Electrolytes (lost through secretory diarrhea), Vitamin B12, Calcium, Zinc.",
            "dietarySources": "Cool coconut water, pure aloe vera juice, barley water, soaked soaked figs, sweet melons."
          },
          "holisticIntegration": "Drink 1 glass of fresh tender coconut water mixed with 1 tsp pure organic aloe vera gel at 10 AM to soothe intense gastric hyperacidity."
        }
      ]
    },
    "kidneys": {
      "id": "kidneys",
      "name": "Kidneys & Renal System",
      "layer": "internals",
      "category": "Renal & Urinary",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Filters 180 liters of plasma daily, balances electrolytes, controls blood pressure via RAAS, activates Vitamin D, and stimulates erythropoiesis.",
      "topDiseases": [
        {
          "id": "kidneys-1",
          "name": "Kidney Stones (Nephrolithiasis & Urolithiasis)",
          "severity": "Moderate to High (Acute Colic)",
          "category": "Metabolic Renal Lithiasis",
          "cause": "Supersaturation of urine with stone-forming salts (calcium oxalate 75%, calcium phosphate, uric acid, or struvite) due to low fluid volume, high dietary sodium/animal protein, hypocitraturia, or hyperoxaluria.",
          "prevention": "High fluid intake (>2.5-3 Liters daily to achieve urine volume >2.5L), dietary sodium restriction (<2000mg/day), adequate dietary calcium (binds oxalate in gut), avoid excess supplemental Vitamin C (>1000mg converts to oxalate).",
          "lifestyle": "Drink 2 glasses of water before bed and upon waking, add fresh lemon juice to water daily (citrate inhibits stone crystallization), limit high-oxalate foods (spinach, beets, almonds, rhubarb).",
          "medicines": "Acute: Tamsulosin (alpha-blocker to facilitate stone expulsion), NSAIDs (Ketorolac), IV hydration. Lithotripsy: Extracorporeal Shock Wave Lithotripsy (ESWL), Ureteroscopy (URS), PCNL. Prophylaxis: Thiazides (for hypercalciuria), Potassium Citrate, Allopurinol (for uric acid stones).",
          "ayurveda": {
            "dosha": "Vrukka Ashmari caused by Kapha-Vata consolidation forming stone-like concretions.",
            "herbs": "Pashanabheda (Bergenia ligulata - 'stone-breaker'), Gokshura, Varuna (Crataeva nurvala), Kulattha (Horse gram), Punarnava.",
            "formulations": "Cystone, Gokshuradi Guggulu, Varunadi Kwath, Ashmarihara Kashaya.",
            "therapy": "Snigdha Swedana (warm medicated oil massage and steam to flanks) to ease ureteral spasm."
          },
          "mudras": {
            "primary": "Apana Mudra (Purification & Urination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip; keep index and little finger extended straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes smooth downward urinary peristalsis (Mutravaha Anulomana), relaxes urinary sphincters, eases gravel expulsion."
          },
          "yoga": {
            "asanas": [
              "Ushtrasana (Camel Pose - stretches renal angle)",
              "Bhujangasana (Cobra)",
              "Dhanurasana (Bow Pose)",
              "Pawanmuktasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati (gentle, in stone-free periods)",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium (inhibits calcium oxalate binding), Vitamin B6 (pyridoxine deficiency raises endogenous oxalate synthesis), Potassium Citrate.",
            "dietarySources": "Horse gram (Kulattha) soup, lemon water, barley water, coconut water, watermelon, cucumber."
          },
          "holisticIntegration": "Boil 2 tbsp Horse Gram (Kulattha) and 1 tsp crushed Varuna bark in 3 cups water until reduced to 1 cup; strain and drink warm daily for 21 days."
        },
        {
          "id": "kidneys-2",
          "name": "Chronic Kidney Disease (CKD - Stages 1 to 5)",
          "severity": "Critical / Progressive",
          "category": "Chronic Renal Failure",
          "cause": "Long-standing, progressive loss of renal parenchymal nephrons and glomerulosclerosis, overwhelmingly driven by diabetic nephropathy, hypertensive nephrosclerosis, glomerulonephritis, and recurrent tubulointerstitial injury.",
          "prevention": "Strict blood pressure control (<130/80 mmHg), tight glycemic control (HbA1c <7.0%), avoidance of nephrotoxic medications (NSAIDs, aminoglycosides, IV iodinated contrast).",
          "lifestyle": "Low-protein diet in non-dialysis CKD (0.6-0.8g/kg/day to reduce glomerular hyperfiltration), sodium restriction (<1500mg/day), careful monitoring of potassium and phosphorus foods, smoking cessation.",
          "medicines": "SGLT2 inhibitors (Dapagliflozin, Empagliflozin - groundbreaking renal protective therapy), ACE inhibitors or ARBs (titrated to maximum tolerated dose), Non-steroidal MRA (Finerenone), Phosphate binders, Erythropoiesis-stimulating agents (ESAs for anemia).",
          "ayurveda": {
            "dosha": "Mutravaha Srotas Dushti with chronic Vata-Kapha and Ama destroying Vrukka (kidney) Dhatus.",
            "herbs": "Punarnava (Boerhavia diffusa - premier renal rejuvenator), Gokshura, Varuna, Kasani (Cichorium intybus), Shirish.",
            "formulations": "Punarnavadi Kwath, Gokshuradi Guggulu, Chandraprabha Vati, Mutrakrichantak Churna.",
            "therapy": "Very gentle dry fomentation, Shirodhara with Takra to lower sympathetic tone and blood pressure."
          },
          "mudras": {
            "primary": "Varun Mudra (Fluid & Waste Balance)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "15 to 20 minutes twice daily.",
            "benefits": "Supports renal osmotic balance, promotes filtration of urea and creatinine, prevents cellular dehydration."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Gentle Ardha Matsyendrasana",
              "Shavasana (Deep restorative rest)"
            ],
            "pranayama": [
              "Slow, soft Nadi Shodhana (No Kumbhaka/retention)",
              "Bhramari Pranayama",
              "Gentle Dirga Pranayama"
            ],
            "cautions": "Avoid forceful pranayamas (Kapalbhati/Bhastrika) which elevate intra-abdominal and blood pressure."
          },
          "vitamins": {
            "deficiencies": "Active Vitamin D3 (Calcitriol - kidneys lose ability to 1-alpha-hydroxylate), Iron (ferritin/TSAT), Vitamin B-Complex, Calcium.",
            "dietarySources": "Low-potassium steamed vegetables (cabbage, cauliflower, green beans), white basmati rice, stewed apples, red grapes."
          },
          "holisticIntegration": "Boil 1 tsp pure Punarnava root powder in 1 glass of water down to half a glass; drink warm in the morning to gently support nephron filtration."
        },
        {
          "id": "kidneys-3",
          "name": "Urinary Tract Infection (UTI) & Acute Pyelonephritis",
          "severity": "Moderate (Cystitis) to Critical (Pyelonephritis)",
          "category": "Urological Infectious",
          "cause": "Ascending colonization of the urothelium by uropathogenic Escherichia coli (UPEC 80%+), Klebsiella, Proteus, or Enterococcus; ascending infection into renal pelvis causes acute pyelonephritis, bacteremia, and sepsis risk.",
          "prevention": "High hydration (flush bacteria out), voiding immediately post-intercourse, wiping front-to-back, avoid harsh feminine hygiene sprays or bubble baths, treat urinary retention.",
          "lifestyle": "Drink 2.5-3L water daily, wear breathable cotton underwear, avoid holding urine for prolonged periods, urinate every 3-4 hours during the day.",
          "medicines": "Uncomplicated Cystitis: Nitrofurantoin (Macrobid), Fosfomycin, Trimethoprim-Sulfamethoxazole (TMP-SMX). Pyelonephritis: Ciprofloxacin, Ceftriaxone IV, Cefepime. Urinary analgesic: Phenazopyridine.",
          "ayurveda": {
            "dosha": "Mutrakrichra (painful micturition) caused by fiery Pitta aggravating Vata in Basti (bladder).",
            "herbs": "Gokshura, Chandana (Sandalwood), Sariva (Hemidesmus indicus), Ushira (Vetiver), Varuna, Dhanyaka (Coriander).",
            "formulations": "Chandraprabha Vati, Gokshuradi Guggulu, Chandanasava, Trinapanchamool Kwath.",
            "therapy": "Uttara Basti (under specialized clinical care), cooling herbal Sitz baths (Avagaha Sweda)."
          },
          "mudras": {
            "primary": "Apana Mudra (Bladder Cleansing Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Clears burning micturition, encourages complete bladder evacuation, purges stagnant urothelial toxins."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana (Butterfly Pose - tones pelvic basin)",
              "Setu Bandhasana",
              "Malasana (Garland Pose)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Sheetali Pranayama (Cooling breath pacifies burning urine)",
              "Sheetkari",
              "Anulom Vilom"
            ]
          },
          "vitamins": {
            "deficiencies": "D-Mannose (binds UPEC FimH pili, preventing bladder adhesion), Vitamin C (acidifies urine), Cranberry PACs (proanthocyanidins), Zinc.",
            "dietarySources": "Pure unsweetened cranberry juice, coriander seed water, barley water, coconut water, watermelon."
          },
          "holisticIntegration": "Soak 2 tbsp crushed coriander seeds in 1 glass of water overnight; strain and drink in the morning with 1/2 tsp rock candy (Mishri) to instantly extinguish burning urination."
        },
        {
          "id": "kidneys-4",
          "name": "Glomerulonephritis (Nephritic Syndrome & IgA Nephropathy)",
          "severity": "High / Acute to Chronic",
          "category": "Immune-Mediated Glomerular",
          "cause": "Immune complex deposition in glomerular basement membranes or podocyte foot process injury following streptococcal infection (PSGN), autoimmune systemic lupus (Lupus Nephritis), or galactose-deficient IgA1 deposition (Berger's disease).",
          "prevention": "Prompt treatment of group A streptococcal pharyngitis/skin infections with penicillin, managing systemic autoimmune diseases, low-sodium dietary habituation.",
          "lifestyle": "Rest during acute macroscopic hematuria episodes, sodium-restricted diet to control edema and hypertension, monitoring home urine dipstick.",
          "medicines": "Corticosteroids (Prednisone), Immunosuppressive agents (Mycophenolate Mofetil, Cyclophosphamide), SGLT2 inhibitors, Sparsentan (dual endothelin-angiotensin receptor antagonist), ACE inhibitors.",
          "ayurveda": {
            "dosha": "Rakta-Pitta Dushti with severe Vrukka Srotas inflammation causing Sonitamutra (bloody urine).",
            "herbs": "Guduchi, Punarnava, Manjistha, Sariva, Gokshura, Shirish.",
            "formulations": "Kaishore Guggulu, Punarnavarishta, Chandanasava, Mahamanjishtadi Kwath.",
            "therapy": "Takradhara and Pitta-Rakta shamaka herbal therapies."
          },
          "mudras": {
            "primary": "Varun Mudra (Blood & Glomerular Filter Harmonizer)",
            "technique": "Touch little fingertip to thumb tip; other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Soothes inflamed glomerular capillaries, balances micro-vascular permeability, reduces hematuria."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Tadasana",
              "Gentle seated Baddha Konasana",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Chandra Bhedana",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Omega-3 fatty acids (high-dose EPA/DHA reduces proteinuria in IgA nephropathy), Vitamin D3, Vitamin C, Zinc.",
            "dietarySources": "Wild fatty fish or algae oil, flaxseed meal, blueberries, steamed squash, tender coconut water."
          },
          "holisticIntegration": "Take 2-3 grams of pharmaceutical-grade Omega-3 fish oil daily (under nephrology guidance) to dampen glomerular microvascular inflammation."
        },
        {
          "id": "kidneys-5",
          "name": "Polycystic Kidney Disease (ADPKD)",
          "severity": "High / Genetic Progressive",
          "category": "Genetic Renal Structural",
          "cause": "Autosomal dominant mutations in PKD1 (85%) or PKD2 (15%) genes, encoding polycystin proteins; leads to abnormal cAMP signaling, epithelial fluid secretion, and progressive expansion of thousands of bilateral renal cysts.",
          "prevention": "High sustained fluid intake (>3-4 Liters/day to suppress vasopressin and cAMP-mediated cyst growth), strict blood pressure management (<110/75 mmHg in young adults).",
          "lifestyle": "Limit caffeine strictly (caffeine raises intracellular cAMP, accelerating cyst growth), avoid contact sports (risk of cyst rupture/hemorrhage), low-sodium diet (<2g/day).",
          "medicines": "Tolvaptan (selective vasopressin V2 receptor antagonist - proven to slow cyst growth and eGFR decline), ACE inhibitors/ARBs (first-line for hypertension), Pain management for cyst rupture.",
          "ayurveda": {
            "dosha": "Granthi Roga in Vrukka caused by Kapha-Meda vitiation and obstructed Vata.",
            "herbs": "Kanchnar (Bauhinia variegata - classical anti-cystic herb), Varuna, Gokshura, Punarnava, Guggulu.",
            "formulations": "Kanchnar Guggulu, Varunadi Kwath, Punarnavadi Guggulu, Chandraprabha Vati.",
            "therapy": "Panchakarma Virechana in early stages, gentle external herbal applications."
          },
          "mudras": {
            "primary": "Apana Mudra (Endocrine & Filtration Balancer)",
            "technique": "Touch tips of middle and ring fingers to thumb tip. Index and pinky fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports renal parenchymal cellular tone, balances interstitial fluid pressures."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Gentle Baddha Konasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Soft Diaphragmatic Breathing"
            ],
            "cautions": "Avoid intense abdominal twists or heavy forward folds that compress enlarged kidneys."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium, Coenzyme Q10, Vitamin B-Complex.",
            "dietarySources": "Watermelon, barley water, celery, cucumbers, stewed apples, green beans."
          },
          "holisticIntegration": "Commit to drinking 3.5 Liters of pure water spaced evenly throughout every 24-hour cycle to naturally suppress vasopressin-driven cyst expansion."
        },
        {
          "id": "kidneys-6",
          "name": "Interstitial Cystitis / Bladder Pain Syndrome (IC/BPS)",
          "severity": "Moderate to High",
          "category": "Neuro-Urothelial Pain",
          "cause": "Disruption of the bladder urothelial glycosaminoglycan (GAG) protective layer, allowing toxic urinary solutes to penetrate the suburothelium, triggering mast cell degranulation, neural upregulation, and severe pelvic pain.",
          "prevention": "Eliminate dietary bladder irritants (the 'Four Cs': Coffee, Carbonated drinks, Citrus, and Chocolate), avoid artificial sweeteners, maintain stress balance.",
          "lifestyle": "Bladder retraining protocols, pelvic floor physical therapy (down-training hypertonic pelvic muscles), applying gentle warm packs over the suprapubic area.",
          "medicines": "Pentosan Polysulfate Sodium (Elmiron - oral synthetic GAG replenishment), Intravesical instillation (DMSO, Heparin, Lidocaine), Amitriptyline (neuropathic pain), Hydroxyzine (mast cell stabilizer).",
          "ayurveda": {
            "dosha": "Vata-Pitta Dushti in Basti (Basti Shoola and Tivra Vedana).",
            "herbs": "Gokshura, Shatavari (demulcent), Yashtimadhu (Licorice), Chandana, Sariva.",
            "formulations": "Chandraprabha Vati, Chandanasava, Trinapanchamool Kwath, Dadimadi Ghrita.",
            "therapy": "Uttara Basti with medicated cooling oils, gentle Avagaha Sweda (warm herbal sitz bath)."
          },
          "mudras": {
            "primary": "Yoni Mudra (Pelvic Floor Calming Mudra)",
            "technique": "Bring index finger tips together pointing down; thumbs together pointing up; interlace remaining fingers inside. Rest hands over the lower pelvis.",
            "duration": "15 minutes daily in a quiet meditative posture.",
            "benefits": "Directly relaxes hypertonic pelvic floor musculature, calms sensory bladder afferents."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana with bolsters",
              "Balasana with knees wide",
              "Viparita Karani",
              "Happy Baby Pose (Ananda Balasana)"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Chandra Bhedana",
              "Soft Pelvic Diaphragmatic Breath"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin (mast cell stabilization), Chondroitin Sulfate, Glucosamine, L-Arginine, Magnesium.",
            "dietarySources": "Alkaline foods, pear juice, blueberry smoothies, chamomile tea, marshmallow root tea."
          },
          "holisticIntegration": "Sip 1 cup of cold-infused marshmallow root or licorice root tea twice daily to provide a soothing, mucilaginous coating for the irritated urinary tract."
        },
        {
          "id": "kidneys-7",
          "name": "Nephrotic Syndrome (Minimal Change & FSGS)",
          "severity": "High / Acute to Chronic",
          "category": "Glomerular Podocytopathy",
          "cause": "Severe damage to glomerular podocytes causing effacement of foot processes, loss of negative charge on glomerular basement membrane, massive proteinuria (>3.5g/24h), profound hypoalbuminemia, and generalized anasarca edema.",
          "prevention": "Early detection in children with periorbital swelling, avoiding NSAIDs, monitoring proteinuria with urine dipstick.",
          "lifestyle": "Sodium-restricted diet (<1.5-2g/day) to control massive edema, moderate protein intake (0.8-1.0g/kg/day - avoiding excessive protein which worsens glomerular hyperfiltration), infection precautions.",
          "medicines": "High-dose Oral Corticosteroids (Prednisone - first-line, especially in pediatric minimal change disease), Calcineurin inhibitors (Cyclosporine, Tacrolimus), Rituximab (anti-CD20), ACE inhibitors/ARBs.",
          "ayurveda": {
            "dosha": "Shopha Roga and Prameha with severe Kledaka Kapha and Vata causing loss of Ojas (protein) in urine.",
            "herbs": "Punarnava, Gokshura, Varuna, Shilajit, Guduchi.",
            "formulations": "Punarnavadi Mandur, Chandraprabha Vati, Gokshuradi Guggulu, Shothari Mandur.",
            "therapy": "Ruksha Swedana (dry sand/potli fomentation) to reduce massive edema without adding fluid."
          },
          "mudras": {
            "primary": "Jalodar Nashak Mudra (Water Retention / Edema Reducing Mudra)",
            "technique": "Fold little finger down to touch the fleshy base of the thumb; place thumb over the bent little finger. Keep other fingers extended straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly reduces excessive subcutaneous water retention, relieves periorbital and ankle swelling."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Invaluable for leg edema)",
              "Gentle Tadasana",
              "Bhadrasana",
              "Shavasana with elevated feet"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (lost bound to DBP in urine), Zinc, Calcium, Iron, Vitamin B-Complex.",
            "dietarySources": "Steamed low-sodium lentils, egg whites, stewed apples, barley soup, boiled vegetables."
          },
          "holisticIntegration": "Practice Jalodar Nashak Mudra for 20 minutes twice daily while elevating the legs on pillows to facilitate lymphatic drainage of dependent edema."
        },
        {
          "id": "kidneys-8",
          "name": "Acute Kidney Injury (AKI - Prerenal, Intrinsic & Postrenal)",
          "severity": "Critical / Emergency",
          "category": "Acute Renal Failure",
          "cause": "Rapid decline in glomerular filtration rate over hours to days. Prerenal: renal hypoperfusion from dehydration, sepsis, hemorrhage. Intrinsic: acute tubular necrosis (ATN) from ischemia or toxins. Postrenal: acute urinary outflow obstruction.",
          "prevention": "Aggressive fluid resuscitation in dehydration/sepsis, avoiding nephrotoxic drug combinations (the 'triple whammy': ACEi + Diuretic + NSAID), pre-hydration before contrast CT scans.",
          "lifestyle": "Close monitoring of fluid intake and urinary output, immediate cessation of all nephrotoxic substances, hospital-level medical supervision.",
          "medicines": "Isotonic IV Crystalloids (for prerenal azotemia), Discontinuation of offending drugs, Loop Diuretics (only to manage volume overload, not to convert oliguric to non-oliguric AKI), Renal Replacement Therapy (Hemodialysis/CRRT).",
          "ayurveda": {
            "dosha": "Mutraghata (urinary suppression) with acute Sannipatika blockage of Vrukka Srotas.",
            "herbs": "Punarnava, Gokshura, Varuna, Kasani, Ushira.",
            "formulations": "Punarnavadi Kwath, Chandraprabha Vati, Trinapanchamool Kwath.",
            "therapy": "Snigdha Basti or Mutravirechana therapy (in monitored post-acute stabilization)."
          },
          "mudras": {
            "primary": "Varun Mudra (Renal Fluid Flow Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; other three fingers straight.",
            "duration": "15 minutes, two to three times daily.",
            "benefits": "Supports renal cellular fluid balance, aids clearance of metabolic breakdown products."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Gentle seated posture",
              "Supported gentle bridge"
            ],
            "pranayama": [
              "Soft, calm abdominal breathing",
              "Nadi Shodhana without retention"
            ],
            "cautions": "Strict physical rest during acute phase of kidney failure."
          },
          "vitamins": {
            "deficiencies": "Electrolytes (Potassium, Bicarbonate - closely manage!), Vitamin B-Complex, Vitamin D.",
            "dietarySources": "Thin barley water, diluted coconut water (only if potassium is normal), mung dal water."
          },
          "holisticIntegration": "During recovery, drink warm barley water seasoned with roasted cumin seeds to promote gentle, natural diuresis without stressing renal tubules."
        },
        {
          "id": "kidneys-9",
          "name": "Renovascular Hypertension & Renal Artery Stenosis",
          "severity": "High / Secondary Hypertension",
          "category": "Vascular Renal",
          "cause": "Unilateral or bilateral narrowing of the renal artery lumen by atherosclerosis (90% in older adults) or fibromuscular dysplasia (10% in young women), triggering excessive renin secretion and refractory hypertension.",
          "prevention": "Atherosclerosis prevention (lipid lowering, smoking cessation, diabetes management), screening for fibromuscular dysplasia in unexplained refractory hypertension.",
          "lifestyle": "Rigorous dietary sodium restriction (<1500mg/day), smoking cessation, daily aerobic movement, home blood pressure monitoring.",
          "medicines": "ACE inhibitors or ARBs (first-line, but contraindicated in bilateral renal artery stenosis due to risk of acute GFR drop!), Calcium Channel Blockers, Beta-blockers, Percutaneous Renal Angioplasty / Stenting.",
          "ayurveda": {
            "dosha": "Siragatha Vata with severe Pitta-Rakta vitiation affecting Vrukka Dhamanis.",
            "herbs": "Arjuna, Sarpagandha, Gokshura, Punarnava, Shankhpushpi.",
            "formulations": "Mukta Vati, Sarpagandha Ghan Vati, Arjunarishta, Punarnavadi Kashaya.",
            "therapy": "Takradhara and Shirodhara with Brahmi Taila to dampen central sympathetic drive."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Renal-Vascular Tension Reliever)",
            "technique": "Index finger to thumb root; middle and ring fingertips joined to thumb tip; pinky finger upright.",
            "duration": "20 minutes twice daily.",
            "benefits": "Reduces peripheral arterial resistance, calms excessive renin-angiotensin-aldosterone tone."
          },
          "yoga": {
            "asanas": [
              "Shavasana (15 mins daily)",
              "Viparita Karani",
              "Janu Sirsasana",
              "Balasana"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Left nostril breathing)",
              "Sheetali",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Taurate, Potassium, CoQ10, Vitamin C, Vitamin D3.",
            "dietarySources": "Beetroot juice, celery, garlic, unsalted pumpkin seeds, pomegranate, steamed vegetables."
          },
          "holisticIntegration": "Practice 15 minutes of cooling Chandra Bhedana breathing before each meal to naturally lower sympathetic outflow to renal vascular beds."
        },
        {
          "id": "kidneys-10",
          "name": "Overactive Bladder (OAB) & Detrusor Instability",
          "severity": "Moderate",
          "category": "Neuromuscular Bladder",
          "cause": "Involuntary, uninhibited contractions of the detrusor smooth muscle during the bladder filling phase, resulting in urinary urgency, frequency (>8 times/day), nocturia, and urgency incontinence.",
          "prevention": "Avoid bladder irritants (caffeine, alcohol, artificial sweeteners, carbonated drinks), prevent chronic constipation (rectal distension compresses bladder), pelvic floor muscle conditioning.",
          "lifestyle": "Timed voiding schedules (urinate every 2.5 hours by the clock), bladder retraining, limit fluid intake 2 hours before bedtime, double voiding before sleep.",
          "medicines": "Beta-3 Adrenergic Agonists (Mirabegron, Vibegron - relaxes detrusor muscle without anticholinergic side effects), Anticholinergics (Oxybutynin, Tolterodine), Intravesical OnabotulinumtoxinA (Botox injections), Sacral Neuromodulation.",
          "ayurveda": {
            "dosha": "Apana Vata Vaigunya causing Atimutrata (excessive urination) and Vega-Dharana Dushti.",
            "herbs": "Gokshura, Ashwagandha, Bala, Varuna, Shilajit.",
            "formulations": "Chandraprabha Vati, Gokshuradi Guggulu, Ashwagandharishta, Balarishta.",
            "therapy": "Snigdha Basti with warm sesame or Mahanarayana oil to pacify erratic Apana Vata."
          },
          "mudras": {
            "primary": "Ashwini Mudra (Pelvic Sphincter Contraction & Tone)",
            "technique": "Rhythmic contraction and relaxation of the anal and perineal sphincters while seated in a meditative posture, synchronized with gentle breathing.",
            "duration": "20 to 30 repetitions, three times daily.",
            "benefits": "Significantly strengthens the pelvic diaphragm, calms hyperactive detrusor reflexes, restores urinary continence."
          },
          "yoga": {
            "asanas": [
              "Mula Bandha (Root Lock in Siddhasana)",
              "Setu Bandhasana (Bridge Pose)",
              "Utkatasana (Chair Pose)",
              "Bhadrasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama with Mula Bandha engagement",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (pelvic muscle tone), Magnesium Glycinate (calms smooth muscle spasm), Vitamin B12.",
            "dietarySources": "Pumpkin seed oil (clinically shown to reduce OAB symptoms), walnuts, blueberries, oats, chamomile tea."
          },
          "holisticIntegration": "Take 1 tablespoon of raw organic pumpkin seed oil daily at breakfast. Perform 20 cycles of Ashwini Mudra with Mula Bandha before getting out of bed each morning."
        }
      ]
    },
    "pancreas": {
      "id": "pancreas",
      "name": "Pancreas & Endocrine",
      "layer": "internals",
      "category": "Endocrine & Exocrine",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Dual-function organ producing essential digestive enzymes (trypsin, amylase, lipase) and systemic endocrine hormones (insulin, glucagon, somatostatin) regulating blood glucose.",
      "topDiseases": [
        {
          "id": "pancreas-1",
          "name": "Type 2 Diabetes Mellitus (T2DM)",
          "severity": "High / Chronic",
          "category": "Endocrine Metabolic",
          "cause": "Peripheral insulin resistance in skeletal muscle and adipose tissue combined with progressive beta-cell secretory failure, visceral adiposity, and gluconeogenesis.",
          "prevention": "High-fiber whole-food diet, daily physical exercise (combining resistance and aerobic), weight loss of 7-10%, eliminating sugar-sweetened beverages.",
          "lifestyle": "Post-prandial 15-minute walks to activate GLUT-4 glucose transporters without insulin, intermittent fasting (14:10 or 16:8), 7-8 hours sleep.",
          "medicines": "Metformin (first-line biguanide), SGLT2 inhibitors (Empagliflozin, Dapagliflozin), GLP-1 receptor agonists (Semaglutide, Tirzepatide), DPP-4 inhibitors (Sitagliptin), Basal Insulin.",
          "ayurveda": {
            "dosha": "Madhumeha / Prameha caused by vitiated Kapha and Vata disturbing Meda (fat) and Mutra (urine).",
            "herbs": "Gudmar / Gymnema sylvestre ('sugar destroyer'), Vijaysar (Pterocarpus marsupium), Jamun seed, Karela (Bitter melon), Haridra, Methi (Fenugreek).",
            "formulations": "Nisha Amalaki Churna (Turmeric + Amla), Chandraprabha Vati, Vasant Kusumakar Ras, Madhumehari Churna.",
            "therapy": "Udvartana (dry herbal powder scrub) to mobilize sluggish Meda and Kapha, Virechana."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolic Fire Kindling Mudra)",
            "technique": "Fold ring finger down to the base of the thumb; press thumb over ring finger knuckle. Keep other fingers extended.",
            "duration": "15-20 minutes before meals.",
            "benefits": "Kindles pancreatic metabolic Agni, assists glucose oxidation, stimulates cellular insulin sensitivity."
          },
          "yoga": {
            "asanas": [
              "Mandukasana (Frog Pose - deep direct compression of pancreas)",
              "Ardha Matsyendrasana (Spinal twist)",
              "Dhanurasana (Bow Pose)",
              "Paschimottanasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 40 gentle strokes)",
              "Agni Sara Kriya",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (essential cofactor for insulin receptor kinase), Chromium Picolinate, Alpha-Lipoic Acid, Vitamin D3, Berberine (500mg).",
            "dietarySources": "Bitter gourd (Karela), fenugreek seeds, cinnamon (Ceylon), amla, walnuts, chia seeds, leafy greens."
          },
          "holisticIntegration": "Soak 1 tsp fenugreek (Methi) seeds in water overnight; drink the water and chew the seeds in the morning, followed by 10 minutes of Mandukasana."
        },
        {
          "id": "pancreas-2",
          "name": "Type 1 Diabetes Mellitus (T1D)",
          "severity": "Critical / Autoimmune",
          "category": "Autoimmune Endocrine",
          "cause": "T-cell-mediated autoimmune destruction of insulin-producing pancreatic beta-cells in the Islets of Langerhans, triggered by genetic predisposition (HLA-DR3/DR4) and environmental triggers, leading to absolute insulin deficiency.",
          "prevention": "No proven primary prevention; early screening for autoantibodies (GAD65, IA-2, ZnT8) in relatives, preserving residual C-peptide with immunomodulators in early stage 2.",
          "lifestyle": "Continuous Glucose Monitoring (CGM), precise carbohydrate counting, consistent exercise schedules, always carrying fast-acting glucose for hypoglycemia.",
          "medicines": "Multiple Daily Injections (MDI) or Continuous Subcutaneous Insulin Infusion (CSII / Insulin Pump) with rapid-acting insulin (Lispro, Aspart) and basal insulin (Glargine, Degludec), Teplizumab (delays stage 3 onset).",
          "ayurveda": {
            "dosha": "Sahaja Madhumeha (congenital/autoimmune) with profound Ojas Kshaya and Dhatu depletion.",
            "herbs": "Guduchi (immune modulator), Amalaki, Vijaysar, Shilajit, Ashwagandha.",
            "formulations": "Nisha Amalaki, Chandraprabha Vati, Swarna Bhasma, Brahma Rasayana.",
            "therapy": "Snigdha Rasayana therapies to nourish depleted tissues (Dhatus) alongside standard insulin."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Life Preservation Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports systemic vitality, builds immune equilibrium, counters autoimmune exhaustion."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana (Stress reduction stabilizes glucose)"
            ],
            "pranayama": [
              "Slow Nadi Shodhana (Alternate nostril breathing)",
              "Bhramari Pranayama",
              "Gentle Dirga Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (immunomodulatory), Vitamin B12 (especially if co-existing celiac/pernicious anemia), Magnesium, Zinc (crucial for insulin hexamer crystallization).",
            "dietarySources": "Avocados, organic eggs, leafy vegetables, walnuts, pumpkin seeds, wild salmon."
          },
          "holisticIntegration": "Take 1/2 tsp Nisha Amalaki (equal parts turmeric and amla powder) with warm water twice daily to provide antioxidant shielding for microvascular vessels."
        },
        {
          "id": "pancreas-3",
          "name": "Acute Pancreatitis & Necrosis",
          "severity": "Critical / Emergency",
          "category": "Acute Exocrine Inflammatory",
          "cause": "Premature intrapancreatic activation of zymogen digestive proenzymes (trypsinogen to trypsin), leading to autodigestion of pancreatic parenchyma, severe inflammation, and systemic SIRS, overwhelmingly caused by gallstones (45%) and alcohol (35%).",
          "prevention": "Early elective cholecystectomy for symptomatic gallstones, permanent abstinence from heavy alcohol binging, treatment of severe hypertriglyceridemia (>1000 mg/dL).",
          "lifestyle": "Total bowel rest during acute phase, gradual re-feeding with clear liquids and low-fat foods, lifelong alcohol cessation.",
          "medicines": "Aggressive IV Fluid Resuscitation (Lactated Ringer's solution), IV Opioid analgesia (Hydromorphone), Early enteral nutrition via nasojejunal tube, Urgent ERCP for impacted gallstone in ampulla of Vater.",
          "ayurveda": {
            "dosha": "Agnyashaya Shotha with explosive Pitta-Rakta-Vata vitiation causing severe Shoola (agony).",
            "herbs": "Guduchi, Katuki, Chandana, Musta (Cyperus rotundus), Yashtimadhu.",
            "formulations": "Kamadudha Ras, Praval Pishti, Shankh Vati, Amritarishta.",
            "therapy": "Cooling Shirodhara and gentle cold sandalwood/vetiver compresses over abdomen (post-emergency)."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Detoxification)",
            "technique": "Touch tips of middle and ring fingers to thumb tip. Other fingers extended.",
            "duration": "15 minutes in resting recovery.",
            "benefits": "Helps relax pancreatic sphincter spasms, promotes cellular rest."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Total rest in recovery)",
              "Gentle Supta Baddha Konasana with bolsters"
            ],
            "pranayama": [
              "Soft, quiet diaphragmatic breathing",
              "Natural Hum (Gentle Bhramari)"
            ],
            "cautions": "Strictly zero physical exertion or abdominal compression during active inflammation."
          },
          "vitamins": {
            "deficiencies": "Antioxidants (Selenium, Vitamin C, Vitamin E), Magnesium, Calcium (saponified in necrotic fat).",
            "dietarySources": "Clear vegetable broths, strained barley water, coconut water, stewed apples, thin mung soup."
          },
          "holisticIntegration": "During convalescence, drink warm barley and coriander seed water between small meals to gently restore digestive homeostasis."
        },
        {
          "id": "pancreas-4",
          "name": "Chronic Pancreatitis & Exocrine Insufficiency (PEI)",
          "severity": "High / Progressive",
          "category": "Chronic Exocrine Fibrosis",
          "cause": "Irreversible chronic inflammation, fibrosis, ductal strictures, and parenchymal calcification resulting in permanent loss of exocrine (steatorrhea/malnutrition) and endocrine (pancreatogenic type 3c diabetes) function.",
          "prevention": "Strict lifelong avoidance of alcohol and tobacco (smoking synergistically accelerates pancreatic calcification), managing chronic hypercalcemia and hypertriglyceridemia.",
          "lifestyle": "Multiple small frequent meals, low-fat nutrient-dense diet, total abstinence from alcohol and smoking, avoiding large heavy meals.",
          "medicines": "Pancreatic Enzyme Replacement Therapy (PERT: Creon, Zenpep - taken with every meal and snack), Fat-soluble vitamin supplementation, Celiac plexus block for intractable pain, Endoscopic stenting of pancreatic duct.",
          "ayurveda": {
            "dosha": "Grahani Roga with profound Agnimandya, Dhatu Kshaya, and chronic Vata-Pitta destruction.",
            "herbs": "Chitrak, Musta, Bilva (Aegle marmelos - Bael fruit), Shunthi, Pippali.",
            "formulations": "Chitrakadi Vati, Bilwadi Leha, Kutajghan Vati, Takrarishta.",
            "therapy": "Nitya Takra Sevana (daily churned medicated buttermilk with digestive spices)."
          },
          "mudras": {
            "primary": "Pushan Mudra (Enzyme Secretion & Absorption Mudra)",
            "technique": "Right hand touches thumb to index and middle fingertips; Left hand touches thumb to middle and ring fingertips.",
            "duration": "15 minutes after each meal.",
            "benefits": "Stimulates residual digestive enzyme secretion, enhances nutrient absorption across gut lining."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (Post-meal)",
              "Gentle Marjaryasana-Bitilasana",
              "Pawanmuktasana",
              "Shavasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama",
              "Nadi Shodhana",
              "Soft Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Fat-soluble vitamins (A, D, E, K - severe malabsorption), Vitamin B12, Zinc, Magnesium.",
            "dietarySources": "MCT oil (absorbed directly into portal circulation without pancreatic lipase), fresh buttermilk, steamed papaya, boiled lentils."
          },
          "holisticIntegration": "Drink 1 glass of fresh buttermilk churned with a pinch of roasted cumin and dry ginger powder after meals to support residual digestive capacity."
        },
        {
          "id": "pancreas-5",
          "name": "Metabolic Syndrome & Insulin Resistance",
          "severity": "Moderate to High",
          "category": "Systemic Cardiometabolic",
          "cause": "Cluster of metabolic dysregulations (central adiposity, elevated triglycerides, low HDL, elevated fasting glucose, hypertension) driven by cellular insulin receptor desensitization and chronic low-grade inflammation.",
          "prevention": "Regular physical training (aerobic + resistance), Mediterranean or low-glycemic whole food diet, waist circumference management (<94cm men / <80cm women).",
          "lifestyle": "Eat within a 10-hour daytime window, walk 10,000 steps daily, prioritize 8 hours sleep (sleep deprivation directly induces acute insulin resistance).",
          "medicines": "Metformin, SGLT2 inhibitors, GLP-1 receptor agonists, Statins for dyslipidemia, ACE inhibitors for hypertension.",
          "ayurveda": {
            "dosha": "Medoroga and Santarpana-Janya Vyadhi with Kapha-Meda Avarodha.",
            "herbs": "Guggulu, Haridra, Amla, Vijaysar, Shilajit, Cinnamon (Tvak).",
            "formulations": "Medohar Guggulu, Arogyavardhini Vati, Chandraprabha Vati, Triphala Guggulu.",
            "therapy": "Udvartana (herbal powder scrubbing massage) and Ruksha Swedana."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolism Igniter)",
            "technique": "Fold ring finger to thumb base, hold down with thumb. Keep other three fingers extended straight.",
            "duration": "20 minutes daily before morning exercise.",
            "benefits": "Accelerates basal metabolic rate, burns visceral adipose deposits, activates cellular glucose consumption."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (Sun Salutations - 8-12 rounds)",
              "Mandukasana",
              "Utkatasana (Chair Pose)",
              "Virabhadrasana II"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 50 strokes)",
              "Bhastrika Pranayama",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium, Vitamin D3, Chromium, Alpha-Lipoic Acid, Omega-3 fatty acids.",
            "dietarySources": "Cinnamon tea, bitter melon, soaked chia seeds, walnuts, extra virgin olive oil, cruciferous vegetables."
          },
          "holisticIntegration": "Boil 1 stick of Ceylon cinnamon in 1 cup water with 1/2 tsp turmeric; drink warm 20 minutes before breakfast to prime insulin sensitivity."
        },
        {
          "id": "pancreas-6",
          "name": "Hypoglycemia (Reactive & Fasting)",
          "severity": "Moderate to Emergency",
          "category": "Glycemic Dysregulation",
          "cause": "Abnormally low blood glucose (<70 mg/dL) caused by excessive exogenous insulin/secretagogues, late insulin hypersecretion following refined high-carbohydrate meals (reactive hypoglycemia), or insulinoma.",
          "prevention": "Eliminate refined carbohydrates and high-glycemic sugars that trigger reactive insulin spikes, pair all carbohydrates with healthy fats and protein.",
          "lifestyle": "Eat balanced meals every 3-4 hours, carry glucose tablets (15-20g) for emergencies, monitor glucose closely during intense workouts.",
          "medicines": "The Rule of 15: 15 grams fast-acting simple carbohydrates (fruit juice, glucose tabs), recheck in 15 mins. Emergency: Glucagon auto-injector (Baqsimi nasal or IM Glucagon), IV Dextrose 50% (D50).",
          "ayurveda": {
            "dosha": "Ojas Kshaya with erratic Pitta-Vata fluctuations in Amashaya.",
            "herbs": "Ashwagandha, Shatavari, Yashtimadhu, Draksha (Black raisins), Bala.",
            "formulations": "Chyawanprash, Ashwagandhadhyarishta, Drakshasava, Saraswatarishta.",
            "therapy": "Brimhana (nourishing) therapy with wholesome natural whole foods and medicated ghee."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Energy Restorer)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "15 minutes, two to three times daily.",
            "benefits": "Stabilizes bio-energy reserves, alleviates sudden tremulous weakness and dizziness."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Nadi Shodhana (No retention)",
              "Bhramari Pranayama",
              "Natural Diaphragmatic Breath"
            ]
          },
          "vitamins": {
            "deficiencies": "Chromium, Magnesium, Vitamin B-Complex (especially B1 and B6), Protein.",
            "dietarySources": "Soaked almonds, roasted chickpeas, Greek yogurt, pumpkin seeds, whole oats with nut butter."
          },
          "holisticIntegration": "Keep a snack mix of raw almonds, roasted chickpeas, and pumpkin seeds on hand. Sip warm licorice-cinnamon tea in the afternoon to stabilize adrenal-glucose swings."
        },
        {
          "id": "pancreas-7",
          "name": "Pancreatic Cysts & IPMN (Intraductal Papillary Mucinous Neoplasm)",
          "severity": "Moderate to High",
          "category": "Pancreatic Neoplastic/Cystic",
          "cause": "Fluid-filled collections within or on the pancreas, ranging from benign pseudocysts (post-pancreatitis) to mucin-producing IPMNs (main duct or branch duct) harboring premalignant potential.",
          "prevention": "Prevent pancreatitis episodes, smoking cessation (smoking dramatically increases malignant transformation risk in IPMNs), routine MRI/EUS surveillance.",
          "lifestyle": "Total alcohol abstinence, high-antioxidant anti-inflammatory dietary pattern, maintaining normal metabolic and glycemic parameters.",
          "medicines": "Endoscopic Ultrasound (EUS) with fine-needle aspiration for cyst fluid analysis (CEA, amylase, KRAS/GNAS mutations), Surgical resection (Whipple or distal pancreatectomy) for high-risk stigmata.",
          "ayurveda": {
            "dosha": "Granthi Roga in Agnyashaya caused by Kapha-Meda accumulation and Vata blockage.",
            "herbs": "Kanchnar (Bauhinia variegata), Guggulu, Haridra (Curcumin), Guduchi, Varuna.",
            "formulations": "Kanchnar Guggulu, Varunadi Kwath, Arogyavardhini Vati, Curcumin 95%.",
            "therapy": "Lekhana (scraping) therapy to clear internal cystic stagnation."
          },
          "mudras": {
            "primary": "Surya Mudra combined with Apana Mudra",
            "technique": "Fold ring finger down to base of thumb with light thumb pressure. Other fingers extended.",
            "duration": "15 minutes twice daily.",
            "benefits": "Dissolves cellular stagnation, activates lymphatic drainage around deep retroperitoneal organs."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Ardha Matsyendrasana (gentle)",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Bhramari Pranayama",
              "Gentle Dirga Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Selenium, Curcumin (potent anti-tumorigenic), Green Tea Extract (EGCG).",
            "dietarySources": "Cruciferous vegetables, turmeric with black pepper, green tea, walnuts, pomegranate arils."
          },
          "holisticIntegration": "Take 500mg standardized Curcumin extract (with Piperine) twice daily with meals to harness natural anti-inflammatory and anti-proliferative cellular pathways."
        },
        {
          "id": "pancreas-8",
          "name": "Hyperinsulinemia & Acanthosis Nigricans",
          "severity": "Moderate",
          "category": "Endocrine Cutaneous-Metabolic",
          "cause": "Compensatory over-secretion of insulin by pancreatic beta cells to overcome peripheral insulin resistance; high circulating insulin stimulates epidermal keratinocyte and fibroblast IGF-1 receptors, causing hyperpigmented, velvety skin plaques.",
          "prevention": "Low-glycemic whole-food diet, daily resistance training (increases non-insulin-mediated glucose uptake), weight reduction, eliminating high-fructose corn syrup.",
          "lifestyle": "Incorporate 30 minutes of strength training 3 times weekly, avoid snacking between meals to allow insulin levels to drop to baseline, daily brisk walking.",
          "medicines": "Metformin (reduces hepatic glucose output and systemic insulin levels), SGLT2 inhibitors, Inositol (Myo-inositol + D-Chiro inositol), Topical retinoids or keratolytics for skin lesions.",
          "ayurveda": {
            "dosha": "Medodhatvagni Mandya with Pitta-Kapha manifestation in Twak (skin).",
            "herbs": "Manjistha, Sariva, Haridra, Vijaysar, Gudmar, Neem.",
            "formulations": "Kaishore Guggulu, Medohar Guggulu, Mahamanjishtadi Kwath, Chandraprabha Vati.",
            "therapy": "Udvartana with Triphala and Kolakulathadi powder, Virechana."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolism & Adipose Burner)",
            "technique": "Fold ring finger to base of thumb; place thumb over knuckle. Keep other fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Re-sensitizes cell surface insulin receptors, drives metabolic clearance of excess blood glucose."
          },
          "yoga": {
            "asanas": [
              "Mandukasana",
              "Dhanurasana",
              "Utkatasana",
              "Ardha Matsyendrasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 40 strokes)",
              "Agni Sara",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Myo-Inositol, Chromium, Magnesium, Zinc, Vitamin D3.",
            "dietarySources": "Apple cider vinegar (1 tbsp in water before meals), bitter melon, cinnamon, leafy greens, walnuts."
          },
          "holisticIntegration": "Drink 1 tbsp organic raw unfiltered apple cider vinegar in 1 glass of water 10 minutes before lunch and dinner to blunt post-meal insulin spikes by up to 30%."
        },
        {
          "id": "pancreas-9",
          "name": "Pancreatogenic Diabetes (Type 3c Diabetes)",
          "severity": "High",
          "category": "Secondary Endocrine",
          "cause": "Secondary diabetes mellitus arising from structural damage to the entire pancreas (chronic pancreatitis, cystic fibrosis, pancreatic resection, hemochromatosis); characterized by brittle glycemic control due to concurrent loss of both insulin and glucagon.",
          "prevention": "Aggressive prevention and management of chronic pancreatitis, smoking and alcohol cessation, early enzyme replacement to optimize nutrition.",
          "lifestyle": "Frequent small balanced meals, careful glucose monitoring due to high risk of severe hypoglycemia (no protective glucagon counter-regulation), balanced exercise.",
          "medicines": "Insulin therapy (carefully titrated to avoid severe hypoglycemia), Pancreatic Enzyme Replacement Therapy (PERT - crucial for proper carbohydrate and fat digestion), Metformin.",
          "ayurveda": {
            "dosha": "Dhatu Kshaya Madhumeha with deep Agnimandya and Ojas depletion.",
            "herbs": "Guduchi, Amalaki, Bilva, Haridra, Ashwagandha.",
            "formulations": "Nisha Amalaki, Chandraprabha Vati, Bilwadi Leha, Vasant Kusumakar Ras.",
            "therapy": "Gentle Brimhana (nourishing) therapy, avoidance of harsh cleansing."
          },
          "mudras": {
            "primary": "Prana Mudra (Vitality Sustaining Mudra)",
            "technique": "Join tips of ring finger and little finger to thumb tip. Other two fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stabilizes erratic energy fluctuations, sustains cellular metabolism without hypoglycemia."
          },
          "yoga": {
            "asanas": [
              "Gentle Tadasana",
              "Vajrasana (Post-meal)",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Soft Nadi Shodhana",
              "Gentle Diaphragmatic Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Fat-soluble vitamins (A, D, E, K), Vitamin B12, Zinc, Magnesium.",
            "dietarySources": "MCT oil, stewed apples, steamed vegetables, lean proteins, bone broth."
          },
          "holisticIntegration": "Take pancreatic digestive enzymes with every meal, followed by 10 minutes of peaceful sitting in Vajrasana."
        },
        {
          "id": "pancreas-10",
          "name": "Pancreatic Neuroendocrine Tumors (PanNETs / Insulinoma)",
          "severity": "High",
          "category": "Endocrine Neoplastic",
          "cause": "Neoplasms arising from endocrine islet cells of the pancreas, either functional (secreting hormones: Insulinoma causing severe hypoglycemia, Gastrinoma, Glucagonoma) or non-functional, associated with MEN1 or VHL syndromes.",
          "prevention": "Genetic screening for MEN1 / VHL mutations in families with endocrine tumors, routine biochemical screening.",
          "lifestyle": "Frequent small carbohydrate-protein meals to prevent neuroglycopenic coma in insulinoma, avoidance of fasting.",
          "medicines": "Diazoxide (inhibits insulin secretion in insulinoma), Somatostatin analogues (Octreotide, Lanreotide), Targeted therapy (Sunitinib, Everolimus), Surgical enucleation or resection.",
          "ayurveda": {
            "dosha": "Granthi / Arbuda Roga with disturbed Pitta-Kapha and Ojas degradation.",
            "herbs": "Ashwagandha, Guduchi, Kanchnar, Haridra, Shatavari.",
            "formulations": "Kanchnar Guggulu, Curcumin 95%, Kalyanaka Ghrita, Rasayana preparations.",
            "therapy": "Gentle supportive Rasayana and immune-modulating therapies."
          },
          "mudras": {
            "primary": "Hakini Mudra (Endocrine Harmony Mudra)",
            "technique": "Join all five fingertips of both hands lightly together at chest level.",
            "duration": "15 minutes daily.",
            "benefits": "Harmonizes neuroendocrine balance, promotes hormonal equilibrium."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Selenium, CoQ10, B-Complex.",
            "dietarySources": "Organic green vegetables, berries, walnuts, turmeric, pomegranate."
          },
          "holisticIntegration": "Maintain regular 3-hour meal intervals containing balanced protein and complex carbohydrates to ensure stable glycemic tone."
        }
      ]
    },
    "intestines": {
      "id": "intestines",
      "name": "Intestines & Colon (Gut)",
      "layer": "internals",
      "category": "Lower Gastrointestinal & Microbiome",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Houses 70% of the immune system (GALT) and the enteric nervous system ('second brain'), performing nutrient absorption and microbiome balance.",
      "topDiseases": [
        {
          "id": "intestines-1",
          "name": "Irritable Bowel Syndrome (IBS - IBS-D, IBS-C, IBS-M)",
          "severity": "Moderate / Chronic",
          "category": "Disorder of Gut-Brain Interaction (DGBI)",
          "cause": "Visceral hypersensitivity, altered gut motility, low-grade mucosal immune activation, gut dysbiosis, and bidirectional gut-brain axis miscommunication.",
          "prevention": "Low FODMAP dietary protocol, managing psychological stress, regular eating schedules, avoiding food intolerances.",
          "lifestyle": "Mindful eating, gut-directed hypnotherapy, daily movement, identifying individual food triggers via elimination-reintroduction diary.",
          "medicines": "For IBS-D: Rifaximin, Alosetron, Loperamide. For IBS-C: Linaclotide, Lubiprostone, Prucalopride. For visceral pain: Low-dose TCAs (Amitriptyline) or SSRIs, Antispasmodics (Dicyclomine).",
          "ayurveda": {
            "dosha": "Grahani Dosha with erratic Samana Vata and Mandagni.",
            "herbs": "Bilva (Aegle marmelos - golden herb for IBS), Kutaja (Holarrhena antidysenterica), Musta, Shunthi, Jeeraka.",
            "formulations": "Bilwadi Leha, Kutajghan Vati, Takrarishta, Gangadhar Churna.",
            "therapy": "Takra therapy (fresh medicated buttermilk daily) and Piccha Basti."
          },
          "mudras": {
            "primary": "Apana Mudra (Peristaltic Balancing Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky straight.",
            "duration": "15 minutes twice daily after meals.",
            "benefits": "Stabilizes chaotic colonic motility, harmonizes bowel transit time."
          },
          "yoga": {
            "asanas": [
              "Pawanmuktasana (Wind-relieving Pose)",
              "Marjaryasana-Bitilasana",
              "Supta Matsyendrasana",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Belly Breathing",
              "Anulom Vilom",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (deficiency strongly correlated with IBS severity), Magnesium (for IBS-C), Zinc, Probiotics.",
            "dietarySources": "Fresh churned buttermilk (Takra), stewed apples, steamed zucchini, bone broth, peppermint tea."
          },
          "holisticIntegration": "Drink 1 glass of fresh buttermilk churned with 1/4 tsp roasted cumin, a pinch of ginger, and fresh curry leaves with lunch daily (classical Grahani therapy)."
        },
        {
          "id": "intestines-2",
          "name": "Ulcerative Colitis (UC)",
          "severity": "High / Chronic Inflammatory",
          "category": "Inflammatory Bowel Disease (IBD)",
          "cause": "Aberrant immune response against colonic commensal microbiota in genetically susceptible individuals, causing continuous mucosal inflammation and ulcers beginning in rectum.",
          "prevention": "Adherence to maintenance therapy to prevent relapses, Mediterranean anti-inflammatory diet, avoidance of NSAIDs (which trigger severe flares).",
          "lifestyle": "Stress management, maintaining hydration and electrolytes during active flares, small low-residue meals during ulceration, regular colonoscopy surveillance.",
          "medicines": "5-ASAs (Mesalamine, Sulfasalazine - first line for induction and maintenance), Corticosteroids (Prednisone for acute flares), Biologics (Infliximab, Vedolizumab, Ustekinumab), JAK inhibitors (Tofacitinib).",
          "ayurveda": {
            "dosha": "Rakta-Atisara and Pittaja Grahani with burning inflammation and bleeding.",
            "herbs": "Kutaja, Bilva, Nagkesar, Lodhra, Mochras, Dadima (Pomegranate peel).",
            "formulations": "Kutajarishta, Kutajghan Vati, Bolbadh Ras, Bilwadi Churna.",
            "therapy": "Piccha Basti (soothing medicated milk/ghee enema that directly heals ulcerated colonic mucosa)."
          },
          "mudras": {
            "primary": "Varun Mudra (Fluid & Mucosal Healing Mudra)",
            "technique": "Touch tip of little finger to thumb tip; other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Cools inflammatory heat in colon, supports tissue regeneration and hydration."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Gentle Baddha Konasana",
              "Shavasana",
              "Restorative Child's Pose with bolsters"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Chandra Bhedana",
              "Gentle Diaphragmatic Breath"
            ]
          },
          "vitamins": {
            "deficiencies": "Iron (chronic micro-bleeding), Vitamin D3, Folate (depleted by Sulfasalazine), Vitamin B12, Zinc.",
            "dietarySources": "Fresh pomegranate juice (potent astringent), stewed peeled apples, congee/rice porridge, bone broth, cooked carrots."
          },
          "holisticIntegration": "Boil 1 tsp dried pomegranate peel and 1/2 tsp Kutaja bark in 1 cup water down to half a cup; strain and drink warm to heal mucosal bleeding."
        },
        {
          "id": "intestines-3",
          "name": "Crohn's Disease",
          "severity": "High / Chronic Transmural",
          "category": "Inflammatory Bowel Disease (IBD)",
          "cause": "Transmural, granulomatous inflammation that can affect any part of the gastrointestinal tract (most commonly terminal ileum and colon) with skip lesions, strictures, and fistulas.",
          "prevention": "Strict cessation of smoking (smoking dramatically worsens Crohn's), adherence to biologic therapy, avoiding ultra-processed foods.",
          "lifestyle": "Nutrient-dense easily digestible meals, avoiding rough raw insoluble fibers during active stricturing, stress reduction protocols.",
          "medicines": "Biologics: Anti-TNF (Infliximab, Adalimumab), Anti-IL12/23 (Ustekinumab, Risankizumab), Anti-integrin (Vedolizumab), Immunomodulators (Azathioprine), Corticosteroids (Budesonide).",
          "ayurveda": {
            "dosha": "Sannipatika Grahani with deep Dhatu infiltration and Vata-Pitta destruction.",
            "herbs": "Shallaki (Boswellia serrata - potent 5-LOX inhibitor), Guduchi, Bilva, Yashtimadhu, Haridra.",
            "formulations": "Shallaki Guggulu, Bilwadi Leha, Guggulutiktaka Kashayam, Kutajghan Vati.",
            "therapy": "Takradhara and gentle herbal enemas (Kashaya Basti)."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Recovery Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Boosts depleted cellular vitality, supports deep transmural tissue repair."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Supta Baddha Konasana",
              "Gentle seated spinal breathing",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Soft Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (terminal ileum malabsorption), Vitamin D3, Iron, Zinc, Magnesium, Fat-soluble vitamins.",
            "dietarySources": "Pureed vegetable soups, bone broth, wild salmon, steamed squash, stewed pears."
          },
          "holisticIntegration": "Take 400mg standardized Shallaki (Boswellia serrata) extract twice daily with meals to harness natural 5-LOX inhibition and dampen intestinal inflammation."
        },
        {
          "id": "intestines-4",
          "name": "Celiac Disease & Gluten Enteropathy",
          "severity": "Moderate to High",
          "category": "Autoimmune Enteropathy",
          "cause": "Ingestion of gluten (gliadin peptides in wheat, barley, rye) triggering HLA-DQ2/DQ8 restricted T-cell activation, anti-tTG antibody production, villous atrophy, and crypt hyperplasia in small intestine.",
          "prevention": "Strict, lifelong 100% gluten-free diet (zero cross-contamination), avoiding wooden utensils or shared toasters, verifying medications and cosmetics.",
          "lifestyle": "Read every food label, dedicated gluten-free kitchen space, dining out safely with allergy cards, screening family members.",
          "medicines": "Strict Gluten-Free Diet (the sole proven therapy), Corticosteroids (for refractory celiac type 2), Nutritional repletion.",
          "ayurveda": {
            "dosha": "Grahani Roga with severe Ama and Sahaja (constitutional) intolerance disrupting Agni.",
            "herbs": "Musta, Bilva, Amalaki, Guduchi, Yashtimadhu.",
            "formulations": "Bilwadi Churna, Mustakarishta, Chandraprabha Vati, Dadimadi Ghrita.",
            "therapy": "Deepana-Pachana to clear Ama, followed by gentle Rasayana to restore intestinal villi."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Regeneration Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Assists cellular regeneration of intestinal mucosal villi, enhances nutrient assimilation."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Pawanmuktasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Gentle Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Iron (microcytic anemia), Folate, Vitamin B12, Vitamin D3, Calcium, Zinc.",
            "dietarySources": "Naturally gluten-free grains (quinoa, millet, amaranth, brown rice), bone broth, avocados, wild fish."
          },
          "holisticIntegration": "Sip warm bone broth infused with fresh ginger and turmeric daily to deliver proline, glycine, and glutamine directly to damaged intestinal villi."
        },
        {
          "id": "intestines-5",
          "name": "Small Intestinal Bacterial Overgrowth (SIBO)",
          "severity": "Moderate",
          "category": "Intestinal Microbiome Dysbiosis",
          "cause": "Excessive colonic-type bacteria (>10^3 to 10^5 CFU/mL) in the small bowel due to migrating motor complex (MMC) failure, hypochlorhydria, anatomical strictures, or ileocecal valve laxity.",
          "prevention": "Support migrating motor complex (leave 4-5 hours between meals without snacking), avoid prolonged unnecessary PPI use, treat underlying motility disorders.",
          "lifestyle": "Space meals 4-5 hours apart, implement Low-FODMAP diet during treatment, fast overnight for 12-14 hours, avoid lying down after eating.",
          "medicines": "Targeted non-absorbable antibiotics: Rifaximin (for hydrogen-predominant SIBO) +/- Neomycin or Metronidazole (for methane-predominant IMO), Prokinetics (Low-dose Naltrexone, Erythromycin).",
          "ayurveda": {
            "dosha": "Krimi Roga and Agnimandya in Amashaya and Pakvashaya with severe Ama formation.",
            "herbs": "Vidanga (Embelia ribes), Kalmegh, Neem, Shunthi, Ajwain, Hing.",
            "formulations": "Vidangarishta, Krimikuthar Ras, Hingwashtak Churna, Arogyavardhini Vati.",
            "therapy": "Deepana-Pachana herbs to restore gastric fire and clear microbial overgrowth."
          },
          "mudras": {
            "primary": "Surya Mudra (Agni Igniter)",
            "technique": "Fold ring finger to base of thumb, hold down with thumb. Keep other fingers extended straight.",
            "duration": "15 minutes before lunch and dinner.",
            "benefits": "Kindles small intestinal enzymatic fire, clears microbial stagnation."
          },
          "yoga": {
            "asanas": [
              "Mandukasana",
              "Ardha Matsyendrasana",
              "Pawanmuktasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Agni Sara Kriya",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (consumed by overgrowing bacteria), Fat-soluble vitamins (A, D, E, K), Iron.",
            "dietarySources": "Ginger tea, peppermint oil capsules, lemon water, steamed zucchini, bone broth."
          },
          "holisticIntegration": "Take 1 enteric-coated peppermint oil capsule 30 minutes before meals, and chew 1/2 tsp roasted Ajwain (carom seeds) with warm water after eating."
        },
        {
          "id": "intestines-6",
          "name": "Intestinal Permeability ('Leaky Gut Syndrome')",
          "severity": "Mild to Moderate",
          "category": "Mucosal Barrier Dysfunction",
          "cause": "Loosening of enterocyte tight junction proteins (Claudins, Occludin, Zonula Occludens-1) triggered by dietary zonulin triggers (gliadin), glyphosate, alcohol, chronic stress, or dysbiosis, allowing endotoxins (LPS) into systemic circulation.",
          "prevention": "Eliminate processed seed oils, reduce alcohol and refined sugars, consume organic foods to avoid pesticide residues, manage chronic stress.",
          "lifestyle": "Chew food thoroughly, avoid NSAID overuse, prioritize 8 hours sleep, engage in restorative outdoor walks in nature.",
          "medicines": "L-Glutamine (primary fuel for enterocytes, 5-10g daily), Zinc Carnosine, Colostrum, Saccharomyces boulardii, Butyrate supplements.",
          "ayurveda": {
            "dosha": "Ama formation in Kostha leaking into Rasa-Rakta Dhatus.",
            "herbs": "Yashtimadhu, Guduchi, Shatavari, Musta, Amalaki.",
            "formulations": "Avipattikar Churna, Bilwadi Leha, Dadimadi Ghrita, Triphala.",
            "therapy": "Deepana-Pachana followed by Rasayana Ghrita to restore intestinal lining."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Epithelial Rebuilding Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports mucosal tissue regeneration, strengthens cellular junction integrity."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Pawanmuktasana",
              "Bhujangasana",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Soft Dirga Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (essential for tight junction integrity), Vitamin D3, Vitamin A, L-Glutamine, Butyrate.",
            "dietarySources": "Bone broth (rich in collagen and gelatin), fermented kefir, stewed apples (pectin), grass-fed ghee (source of butyrate)."
          },
          "holisticIntegration": "Consume 1 tsp pure grass-fed A2 ghee with warm water in the morning to nourish enterocytes with natural butyric acid."
        },
        {
          "id": "intestines-7",
          "name": "Diverticulosis & Acute Diverticulitis",
          "severity": "Moderate to High",
          "category": "Colonic Structural/Inflammatory",
          "cause": "Herniation of colonic mucosa through circular muscle layer at points of nutrient vessel penetration (diverticulosis) from chronic high intracolonic pressure and low fiber; micro-perforation and bacterial inflammation cause diverticulitis.",
          "prevention": "High-fiber diet (25-35g daily from fruits, vegetables, legumes, whole grains), high water intake, regular physical exercise, avoiding constipation.",
          "lifestyle": "During acute attack: clear liquid diet for 2-3 days; in remission: gradual high fiber, daily brisk walking, never strain during bowel movements.",
          "medicines": "Uncomplicated Diverticulitis: Outpatient observation +/- Ciprofloxacin and Metronidazole or Amoxicillin-Clavulanate. Complicated: IV antibiotics, percutaneous drainage, Hartmann's procedure.",
          "ayurveda": {
            "dosha": "Pakvashaya Vata and Pitta vitiation causing Vivandha (constipation) and Vidradhi (inflammation).",
            "herbs": "Triphala, Isabgol (Psyllium husk), Haritaki, Yashtimadhu, Shallaki.",
            "formulations": "Triphala Churna, Gandharva Haritaki, Avipattikar Churna, Sukumara Ghrita.",
            "therapy": "Snigdha Virechana with castor oil and warm milk to ensure effortless colonic evacuation."
          },
          "mudras": {
            "primary": "Apana Mudra (Colonic Evacuation Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Index and little fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes downward peristalsis, prevents colonic fecal impaction and diverticular stasis."
          },
          "yoga": {
            "asanas": [
              "Pawanmuktasana",
              "Vajrasana",
              "Malasana (Squatting pose - straightens ano-rectal angle)",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Dietary Fiber, Magnesium Citrate (maintains soft stools), Vitamin D3, Probiotics.",
            "dietarySources": "Stewed prunes, ground flaxseeds, chia seeds, steamed squashes, oatmeal, vegetable soups."
          },
          "holisticIntegration": "Take 1 tbsp organic Psyllium husk (Isabgol) in 1 glass of warm water before bedtime, followed by another glass of plain warm water."
        },
        {
          "id": "intestines-8",
          "name": "Chronic Constipation & Dysmotility",
          "severity": "Mild to Moderate",
          "category": "Lower GI Functional",
          "cause": "Inadequate dietary fiber/fluid, slow colonic transit, pelvic floor dyssynergia (anismus), ignoring the urge to defecate, sedentary lifestyle, or medications (opioids, iron, calcium channel blockers).",
          "prevention": "Drink 2.5-3 Liters water daily, consume 30g dietary fiber, adopt a footstool (Squatty Potty) to elevate knees above hips, respond immediately to morning gastrocolic reflex.",
          "lifestyle": "Drink 2 glasses warm water upon waking, walk 30 minutes daily, establish a fixed morning toilet time without straining or smartphones.",
          "medicines": "Osmotic laxatives (Polyethylene Glycol - Miralax, Lactulose), Stimulant laxatives (Senna, Bisacodyl - short-term), Prokinetics (Prucalopride), Secretagogues (Linaclotide).",
          "ayurveda": {
            "dosha": "Apana Vata Dushti causing Vibandha (fecal stagnation in Pakvashaya).",
            "herbs": "Haritaki (Terminalia chebula - king of laxatives), Triphala, Senna, Eranda Taila (Castor oil), Draksha.",
            "formulations": "Triphala Churna, Gandharva Haritaki, Abhayarishta, Sukumara Ghrita.",
            "therapy": "Anuvasana Basti with warm sesame or castor oil, abdominal Abhyanga."
          },
          "mudras": {
            "primary": "Suchi Mudra (Needle Mudra / Constipation Reliever)",
            "technique": "Make a fist with both hands; extend index fingers straight up pointing upward, held at chest level while inhaling deeply.",
            "duration": "10-15 minutes in the morning.",
            "benefits": "Specifically stimulates colonic peristalsis, clears stubborn intestinal blockages."
          },
          "yoga": {
            "asanas": [
              "Malasana (Squat Pose)",
              "Pawanmuktasana (Wind-relieving Pose)",
              "Bhujangasana",
              "Ardha Matsyendrasana"
            ],
            "pranayama": [
              "Agni Sara Kriya",
              "Kapalbhati (gentle)",
              "Deep Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Citrate / Oxide (draws water into colonic lumen), Vitamin C, Potassium, Water.",
            "dietarySources": "Soaked black raisins, figs (Anjeer), prunes, flaxseeds, warm water with lemon, ripe papayas."
          },
          "holisticIntegration": "Eat 3 soaked dried figs (Anjeer) and 15 soaked black raisins with warm milk at bedtime for effortless, natural morning evacuation."
        },
        {
          "id": "intestines-9",
          "name": "Hemorrhoids (Piles) & Anal Fissures",
          "severity": "Moderate",
          "category": "Ano-Rectal Vascular",
          "cause": "Engorgement and prolapse of the submucosal arteriovenous cushions in the anal canal (internal or external hemorrhoids) or linear tear in anoderm (fissure), caused by chronic straining, hard stools, and prolonged toilet sitting.",
          "prevention": "Keep stools soft and formed, avoid straining, never sit on toilet >5 minutes, use bidet instead of dry abrasive toilet paper, treat constipation promptly.",
          "lifestyle": "Warm sitz baths for 15 minutes twice daily, avoid lifting heavy loads with breath-holding, wear loose cotton undergarments.",
          "medicines": "Topical Hydrocortisone-Pramoxine creams, Flavonoids (Micronized Purified Flavonoid Fraction - MPFF), Topical Nitroglycerin (0.4%) or Diltiazem for anal fissures, Rubber Band Ligation.",
          "ayurveda": {
            "dosha": "Arsha Roga caused by Mandagni and vitiated Apana Vata congesting Guda (anal canal).",
            "herbs": "Surana (Amorphophallus campanulatus / Elephant foot yam - premier herb for piles), Haritaki, Nagkesar, Neem.",
            "formulations": "Arshoghni Vati, Abhayarishta, Kankayan Vati, Triphala Guggulu.",
            "therapy": "Kshara Karma (specialized Ayurvedic parasurgical treatment with >98% cure rate), Avagaha Sweda (warm sitz bath)."
          },
          "mudras": {
            "primary": "Ashwini Mudra (Anal Sphincter Toning Mudra)",
            "technique": "Contract and relax the anal sphincter muscles rhythmically 20-30 times while breathing naturally.",
            "duration": "20 repetitions, twice daily.",
            "benefits": "Decongests engorged anorectal venous plexus, promotes mucosal healing, tones anal sphincter."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Legs up wall - drains venous blood from pelvic veins)",
              "Bhadrasana",
              "Setu Bandhasana",
              "Malasana"
            ],
            "pranayama": [
              "Ujjayi Breathing with Mula Bandha",
              "Slow Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids (Rutin, Hesperidin, Diosmin), Vitamin C, Fiber, Water.",
            "dietarySources": "Cooked elephant foot yam (Surana), soaked black raisins, flaxseed meal, ripe papaya, stewed pears."
          },
          "holisticIntegration": "Take 10ml Abhayarishta with equal parts warm water after lunch and dinner, and apply pure cold-pressed coconut oil or Jatyadi oil locally before and after bowel movements."
        },
        {
          "id": "intestines-10",
          "name": "Colonic Polyps & Colorectal Neoplasia Screening",
          "severity": "High / Pre-malignant",
          "category": "Colorectal Neoplastic",
          "cause": "Clonal proliferation of colonic epithelium (adenomatous polyps: tubular, villous, or sessile serrated lesions) driven by APC, KRAS, and p53 mutations, progressing through the adenoma-carcinoma sequence.",
          "prevention": "Screening colonoscopy starting at age 45 (or earlier with family history), high dietary fiber, avoidance of processed meats and red meat excess, smoking cessation, alcohol limitation.",
          "lifestyle": "30 minutes daily aerobic physical activity, maintain healthy body mass index, anti-inflammatory whole-food plant-forward dietary pattern.",
          "medicines": "Screening Colonoscopy with complete Polypectomy, Fecal Immunochemical Test (FIT), Aspirin (for chemoprevention in selected high-risk individuals under physician guidance).",
          "ayurveda": {
            "dosha": "Arbuda / Granthi Roga in Pakvashaya with vitiated Kapha-Meda and Rakta.",
            "herbs": "Haridra (Curcumin), Triphala, Kanchnar, Guduchi, Ashwagandha.",
            "formulations": "Triphala Churna, Curcumin 95%, Kanchnar Guggulu, Kaishore Guggulu.",
            "therapy": "Shodhana (cleansing) therapies to prevent colonic toxic stagnation."
          },
          "mudras": {
            "primary": "Apana Mudra (Purification & Elimination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Clears cellular debris from lower gastrointestinal tract, supports healthy apoptosis."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar",
              "Pawanmuktasana",
              "Bhujangasana",
              "Ardha Matsyendrasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Nadi Shodhana Pranayama",
              "Agni Sara"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Calcium, Folate, Selenium, Dietary Fiber.",
            "dietarySources": "Cruciferous vegetables (sulforaphane), berries, garlic, onions, lentils, flaxseeds, green tea."
          },
          "holisticIntegration": "Take 1 tsp organic Triphala powder with warm water every evening before bed to ensure rapid transit time and minimize mucosal contact with potential carcinogens."
        }
      ]
    },
    "spine": {
      "id": "spine",
      "name": "Spine & Skeletal Axis",
      "layer": "internals",
      "category": "Musculoskeletal & Axial Skeleton",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Protects the spinal cord, provides structural support for the torso, anchors ribs and musculature, and produces blood cells within red marrow.",
      "topDiseases": [
        {
          "id": "spine-1",
          "name": "Herniated / Slipped Intervertebral Disc",
          "severity": "Moderate to High (Acute Radiculopathy)",
          "category": "Spinal Degenerative/Mechanical",
          "cause": "Tear in the outer annulus fibrosus allowing the soft inner nucleus pulposus to herniate into the spinal canal or neural foramen, compressing the exiting nerve root (most commonly L4-L5, L5-S1, or C5-C6).",
          "prevention": "Proper ergonomic lifting techniques (bend knees, keep load close to chest, avoid twisting while lifting), maintain strong core abdominal and multifidus muscles, avoid prolonged sedentary slumping.",
          "lifestyle": "Use lumbar support cushions, take walking breaks every 45 minutes, sleep on a medium-firm supportive mattress with a pillow under knees (or between knees if on side).",
          "medicines": "Short-course oral NSAIDs (Meloxicam, Naproxen), Muscle relaxants (Cyclobenzaprine), Neuromodulators for neuropathic shooting pain (Gabapentin, Pregabalin), Epidural Steroid Injections (ESI), Microdiscectomy.",
          "ayurveda": {
            "dosha": "Asthi-Majja Gata Vata causing Katishoola (low back pain) and Gridhrasi (sciatica).",
            "herbs": "Shallaki (Boswellia), Guggulu, Rasna, Ashwagandha, Bala, Nirgundi.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Maharasnadi Kwath, Sahacharadi Taila.",
            "therapy": "Kati Basti (retaining a reservoir of warm medicated oil like Mahanarayana/Ksheerabala over the lumbar spine for 30 mins) - legendary relief for disc herniation."
          },
          "mudras": {
            "primary": "Vayu Mudra (Nerve Spasm & Radiating Pain Reliever)",
            "technique": "Fold index finger to base of thumb; place thumb gently over the knuckle of the bent index finger. Keep other three fingers extended straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Calms irritated nerve root pathways, reduces radicular shooting neuropathic pain, pacifies acute Vata tension."
          },
          "yoga": {
            "asanas": [
              "Bhujangasana (Gentle Sphinx/Cobra Pose - promotes anterior disc centralization)",
              "Makarasana (Crocodile Pose - ideal for acute disc relief)",
              "Marjaryasana-Bitilasana (Gentle Cat-Cow)",
              "Shavasana with knees elevated on bolster"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Gentle Dirga Pranayama"
            ],
            "cautions": "Strictly avoid forward bending (Paschimottanasana, toe touches) during acute disc herniation!"
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (bone and disc health), Magnesium (muscle spasm relief), Vitamin B12 (nerve sheath repair), Collagen peptides.",
            "dietarySources": "Bone broth, dark leafy greens, sesame seeds (calcium), turmeric milk with black pepper, walnuts."
          },
          "holisticIntegration": "Lie in Makarasana (Crocodile Pose on stomach) with hands supporting chin for 10 minutes twice daily. Apply warm Mahanarayana oil over lumbar spine followed by warm hot water bottle."
        },
        {
          "id": "spine-2",
          "name": "Sciatica (Lumbar Radiculopathy)",
          "severity": "Moderate to High",
          "category": "Neuropathic Spinal",
          "cause": "Compression, inflammation, or irritation of the sciatic nerve (L4-S3 nerve roots) caused by lumbar disc herniation, spinal stenosis, facet arthropathy, or piriformis muscle spasm.",
          "prevention": "Maintain core muscle endurance, avoid carrying bulky wallets in back pockets, maintain proper hamstring flexibility, avoid prolonged prolonged sitting.",
          "lifestyle": "Alternating ice (first 48 hours) and moist heat, gentle progressive walking as tolerated (avoid prolonged bed rest which worsens outcomes), piriformis stretches.",
          "medicines": "NSAIDs, Oral Corticosteroid dose pack (short-term for acute nerve root edema), Gabapentin, Pregabalin, Physical therapy, Transforaminal Epidural Steroid Injection.",
          "ayurveda": {
            "dosha": "Gridhrasi Roga (resembling the gait of a vulture) caused by aggravated Vata or Vata-Kapha in the Kandara (tendons/nerves).",
            "herbs": "Rasna, Guggulu, Eranda (Castor oil - premier for Vata), Ashwagandha, Nirgundi.",
            "formulations": "Rasnadi Guggulu, Yograj Guggulu, Sahacharadi Kashayam, Erandamuldadi Kwath.",
            "therapy": "Kati Basti, Patra Pinda Sweda (warm herbal bolus fomentation along the sciatic nerve pathway), Siravedha (therapeutic bloodletting in stubborn cases)."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra combined with Vayu Mudra",
            "technique": "Fold index finger to thumb root, join tips of middle and ring finger to thumb tip. Pinky extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Alleviates acute neural pain, balances bio-electrical conductivity down the sciatic nerve."
          },
          "yoga": {
            "asanas": [
              "Supta Padangusthasana (Supine Hand-to-Big-Toe with strap - gentle nerve glide)",
              "Setu Bandhasana (gentle Bridge)",
              "Supta Kapotasana (Reclined Pigeon - stretches piriformis)",
              "Makarasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Slow Ujjayi Breathing",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Methylcobalamin), Vitamin B1 (Benfotiamine), Alpha-Lipoic Acid (ALA 600mg), Magnesium, Vitamin D3.",
            "dietarySources": "Avocados, organic eggs, bone broth, soaked almonds, wild salmon, turmeric-ginger golden tea."
          },
          "holisticIntegration": "Take 1 tsp pure organic castor oil mixed with warm ginger tea at bedtime for 3 consecutive nights to clear Vata obstruction in the pelvic colon and relieve sciatic nerve tension."
        },
        {
          "id": "spine-3",
          "name": "Cervical Spondylosis & Radiculopathy (Neck)",
          "severity": "Moderate",
          "category": "Cervical Degenerative",
          "cause": "Age-related osteoarthritis and dehydration of the cervical intervertebral discs (C4-C7) with osteophyte (bone spur) formation, uncarthrosis, and compression of cervical nerve roots.",
          "prevention": "Ergonomic computer workstation (monitor at eye level, avoid forward head posture / 'text neck'), cervical contour pillows, regular neck mobility exercises.",
          "lifestyle": "Avoid cradling phone between ear and shoulder, take micro-breaks during screen time to retract neck (chin tucks), maintain upright thoracic spine.",
          "medicines": "NSAIDs, Cervical traction therapy, Muscle relaxants, Gabapentin for radiating arm numbness/tingling, Cervical epidural injections, ACDF surgery for myelopathy.",
          "ayurveda": {
            "dosha": "Greeva Stambha and Manyastambha caused by aggravated Vata drying Kapha (Sleshaka) in cervical joints.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Guggulu, Bala.",
            "formulations": "Trayodashanga Guggulu, Balarishta, Maharasnadi Kwath, Ksheerabala 101 drops.",
            "therapy": "Greeva Basti (retaining warm medicated oil on the back of the neck in a dough ring), Nasya with Ksheerabala or Anu Taila."
          },
          "mudras": {
            "primary": "Vayu Mudra (Wind Subduing / Neck Spasm Reliever)",
            "technique": "Fold index finger to touch the base of the thumb; press thumb over first knuckle of index finger. Other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Reduces cervical muscle tension, alleviates radiating numbness in shoulders and arms."
          },
          "yoga": {
            "asanas": [
              "Greeva Sanchalana (Gentle Neck Movements - slow rotations and tilts)",
              "Bhujangasana (Gentle Cobra - strengthens cervical extensors)",
              "Gomukhasana (arms only)",
              "Tadasana with chin tucks"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Ocean Breath)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium, Vitamin B12, Calcium, Collagen.",
            "dietarySources": "Sesame seeds (calcium powerhouse), bone broth, leafy dark greens, walnuts, golden turmeric milk."
          },
          "holisticIntegration": "Perform Greeva Basti at home: massage warm Ksheerabala or Mahanarayana oil onto neck and upper shoulders for 5 minutes, followed by a warm moist compress for 10 minutes."
        },
        {
          "id": "spine-4",
          "name": "Osteoporosis & Osteopenia (Spinal Fragility)",
          "severity": "High / Progressive",
          "category": "Metabolic Bone Disease",
          "cause": "Imbalance between osteoclast bone resorption and osteoblast bone formation leading to decreased bone mineral density (T-score ≤ -2.5) and architectural deterioration of trabecular bone, predisposing to compression fractures.",
          "prevention": "Lifelong progressive resistance training and weight-bearing exercise, adequate dietary calcium and protein, optimizing Vitamin D3 and K2, avoiding smoking and excess alcohol.",
          "lifestyle": "Engage in strength training 3x weekly, fall prevention strategies in the home (remove loose rugs, install grab bars), maintain adequate daily sun exposure.",
          "medicines": "Bisphosphonates (Alendronate, Zoledronic acid), RANKL inhibitor (Denosumab), Anabolic bone builders (Teriparatide, Abaloparatide, Romosozumab), SERMs (Raloxifene).",
          "ayurveda": {
            "dosha": "Asthi Dhatu Kshaya with excessive Vata aggravation in bone tissue.",
            "herbs": "Asthisamharaka (Cissus quadrangularis - 'bone joiner'), Ashwagandha, Shatavari, Arjuna, Praval (Coral calcium), Mukta.",
            "formulations": "Lakshadi Guggulu, Praval Pishti, Mukta Pishti, Ashwagandhadhyarishta.",
            "therapy": "Abhyanga with Ksheerabala or Mahanarayana oil (transdermal nourishing of bone tissue), Tikta Ksheera Basti (milk enemas infused with bitter herbs)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Earth / Bone Mineralization Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb. Keep other three fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Directly strengthens structural tissues, stimulates bone mineralization and density."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Mountain Pose - axial loading)",
              "Vrikshasana (Tree Pose - balance)",
              "Virabhadrasana I & II (Warrior Poses - builds femoral and vertebral bone density)",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Ujjayi Breathing",
              "Bhramari"
            ],
            "cautions": "Avoid extreme forward flexion or aggressive spinal twists which can cause vertebral crush fractures."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (optimal 50-70 ng/mL), Vitamin K2 (MK-7 - guides calcium into bones and away from arteries!), Calcium Citrate/Malate, Magnesium, Boron, Zinc.",
            "dietarySources": "Natto (highest K2 source), white and black sesame seeds (highest plant calcium), leafy greens, yogurt/kefir, sardines with bones, bone broth."
          },
          "holisticIntegration": "Consume 1 tablespoon of lightly toasted unhulled sesame seeds mixed with 1 tsp raw honey every morning to deliver 150mg of bioavailable plant calcium straight to bones."
        },
        {
          "id": "spine-5",
          "name": "Ankylosing Spondylitis & Axial Spondyloarthritis",
          "severity": "High / Chronic Autoimmune",
          "category": "Autoimmune Axial Rheumatic",
          "cause": "Chronic immune-mediated inflammation of axial joints, entheses, and sacroiliac joints strongly associated with HLA-B27, leading to syndesmophyte formation, spinal fusion ('bamboo spine'), and chest expansion restriction.",
          "prevention": "Early diagnosis and treatment before irreversible spinal ankylosis occurs, smoking cessation (smoking significantly accelerates syndesmophyte progression).",
          "lifestyle": "Daily non-negotiable spinal mobility exercises and swimming, sleep on flat firm mattress without high pillows to maintain spine extension, posture checks.",
          "medicines": "NSAIDs (first-line continuous therapy: Naproxen, Celecoxib), Biologics: TNF inhibitors (Adalimumab, Infliximab), IL-17 inhibitors (Secukinumab, Ixekizumab), JAK inhibitors (Upadacitinib).",
          "ayurveda": {
            "dosha": "Amavata / Asthi-Sandhi Gata Vata with entrenched Ama and Vata causing rigid joint stiffening (Stambha).",
            "herbs": "Shallaki (Boswellia), Guggulu, Rasna, Guduchi, Eranda, Nirgundi.",
            "formulations": "Simhanada Guggulu, Yograj Guggulu, Maharasnadi Kwath, Amritarishta.",
            "therapy": "Valuka Sweda (hot sand poultice fomentation - superior for Ama-Vata stiffness), gentle warm oil application."
          },
          "mudras": {
            "primary": "Vayu Mudra combined with Surya Mudra",
            "technique": "Fold index finger to thumb root, and fold ring finger to thumb root; press thumb over both knuckles. Extend middle and pinky fingers.",
            "duration": "15-20 minutes daily.",
            "benefits": "Clears autoimmune stiffness (Ama), kindles tissue metabolism, relieves inflammatory spinal pain."
          },
          "yoga": {
            "asanas": [
              "Bhujangasana (Cobra - maintains extension)",
              "Ustrasana (Camel Pose - opens chest wall)",
              "Marjaryasana-Bitilasana (Cat-Cow)",
              "Tadasana"
            ],
            "pranayama": [
              "Deep Thoracic Dirga Pranayama (Vital to preserve chest wall excursion/expansion)",
              "Bhastrika Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Omega-3 fatty acids (EPA/DHA 3g daily), Curcumin, Zinc.",
            "dietarySources": "Wild oily fish, turmeric with black pepper, blueberries, walnuts, dark leafy greens, ginger tea."
          },
          "holisticIntegration": "Perform 20 minutes of daily morning swimming or gentle back extensions (Cobra and Cat-Cow) without fail. Sip warm ginger-turmeric tea throughout the day."
        },
        {
          "id": "spine-6",
          "name": "Lumbar Spinal Stenosis & Neurogenic Claudication",
          "severity": "Moderate to High",
          "category": "Spinal Structural/Compressive",
          "cause": "Narrowing of the central spinal canal, lateral recesses, or neural foramina by hypertrophied ligamentum flavum, facet joint arthropathy, and bulging discs, compressing the cauda equina nerve roots during walking.",
          "prevention": "Maintain core muscle strength, maintain upright spinal alignment, avoid chronic hyperextension of lumbar spine in older adults.",
          "lifestyle": "Adopt slight forward flexion posture when walking (e.g., shopping cart sign relief), stationary cycling (seated flexed posture well-tolerated), regular seated rest breaks.",
          "medicines": "NSAIDs, Neuromodulators (Gabapentin), Epidural Steroid Injections, Decompressive Laminectomy / Interspinous spacer placement.",
          "ayurveda": {
            "dosha": "Kati-Gata Vata with Srotorodha (stenosis/blockage) of the spinal canal.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Bala, Guggulu, Sahachara.",
            "formulations": "Sahacharadi Kashayam, Trayodashanga Guggulu, Mahamash Taila, Rasnadi Kwath.",
            "therapy": "Kati Basti with Sahacharadi Taila, Patra Pinda Sweda."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra",
            "technique": "Index finger to thumb root; middle and ring fingertips joined to thumb tip; pinky finger straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Relieves neural ischemia, eases lower extremity cramping and aching when walking."
          },
          "yoga": {
            "asanas": [
              "Apanasana (Knees-to-Chest Pose - opens spinal canal)",
              "Balasana (Child's Pose - excellent flexion relief)",
              "Marjaryasana (Cat Pose)",
              "Supta Baddha Konasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid aggressive lumbar extension (deep backward bends) which further narrows the spinal canal."
          },
          "vitamins": {
            "deficiencies": "Vitamin B12, Alpha-Lipoic Acid, Magnesium, Vitamin D3.",
            "dietarySources": "Bone broth, dark berries, almonds, spinach, organic eggs, walnuts."
          },
          "holisticIntegration": "Spend 10 minutes in Apanasana (lying on back hugging both knees gently into chest) morning and evening to naturally expand the lumbar spinal canal diameter."
        },
        {
          "id": "spine-7",
          "name": "Scoliosis (Adolescent Idiopathic & Degenerative Adult)",
          "severity": "Moderate to High",
          "category": "Spinal Deformity",
          "cause": "Three-dimensional rotational deformity of the spine with lateral curvature Cobb angle ≥10 degrees; idiopathic in adolescents (multifactorial genetic/vestibular), or asymmetric disc/facet collapse in degenerative adult scoliosis.",
          "prevention": "School-age screening with Adam's forward bend test, early bracing (Boston/Cheneau brace for Cobb angle 25-40 degrees during growth), specialized physical therapy.",
          "lifestyle": "Schroth method physical therapy (three-dimensional rotational breathing and corrective postures), maintain high core symmetry, swimming, avoiding asymmetric one-shoulder backpacks.",
          "medicines": "Pain management (NSAIDs, facet joint injections), Bracing during skeletal growth, Posterior Spinal Fusion with instrumentation for curves >45-50 degrees.",
          "ayurveda": {
            "dosha": "Vataja Kubjata (spinal curvature) with structural imbalance of Asthi and Mamsa Dhatus.",
            "herbs": "Ashwagandha, Bala, Shallaki, Rasna, Guggulu.",
            "formulations": "Balarishta, Maharasnadi Kwath, Ashwagandharishta, Ksheerabala Taila.",
            "therapy": "Full body Abhyanga with warm Ksheerabala oil followed by Nadi Sweda to loosen contracted muscles."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Merudanda Mudra",
            "technique": "Thumbs pointing upright like a hitchhiker's thumb while resting fists on thighs; breathe deeply into the convex areas of the spine.",
            "duration": "15 minutes daily.",
            "benefits": "Channels axial prana along the Sushumna Nadi, encourages mental and somatic postural realignment."
          },
          "yoga": {
            "asanas": [
              "Side Plank (Vasisthasana - held on the convex side to strengthen lateral stabilizers)",
              "Tadasana with axial elongation",
              "Adho Mukha Svanasana",
              "Vrikshasana"
            ],
            "pranayama": [
              "Rotational Angular Breathing (Schroth-inspired pranayama inhaling into the concave lung area)",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium, Melatonin (altered pineal melatonin signaling implicated in AIS), Calcium.",
            "dietarySources": "Sesame seeds, tart cherry juice, bone broth, wild salmon, leafy dark greens."
          },
          "holisticIntegration": "Practice side plank on the side of the curve convexity for 60 seconds daily, followed by 10 minutes of conscious axial elongation while seated tall."
        },
        {
          "id": "spine-8",
          "name": "Sacroiliac (SI) Joint Dysfunction & Sacroiliitis",
          "severity": "Moderate",
          "category": "Pelvic-Spinal Mechanical",
          "cause": "Hypermobility (postpartum ligamentous laxity from relaxin) or hypomobility/inflammation of the sacroiliac joint linking sacrum to ilium, causing localized buttock pain radiating to posterior thigh.",
          "prevention": "Strengthen pelvic stabilizers (gluteus medius, piriformis, transversus abdominis), avoid asymmetric weight-bearing on one hip, use SI joint support belts postpartum.",
          "lifestyle": "Avoid crossing legs when seated, step evenly with both feet, apply ice over SI joint during acute flares, sleep with pillow between knees to stabilize pelvis.",
          "medicines": "NSAIDs, Physical therapy (pelvic realignment and stabilization), Sacroiliac joint steroid injections, Radiofrequency ablation (RFA) of lateral branch nerves, SI joint fusion.",
          "ayurveda": {
            "dosha": "Trikashoola and Kati-Sandhi Gata Vata with local inflammatory Ama.",
            "herbs": "Shallaki, Guggulu, Rasna, Ashwagandha, Nirgundi.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Maharasnadi Kwath, Sahacharadi Taila.",
            "therapy": "Kati Basti positioned directly over the affected sacroiliac joint, Patra Pinda Sweda."
          },
          "mudras": {
            "primary": "Yoni Mudra (Pelvic Diaphragm Stabilizer)",
            "technique": "Join index fingers pointing downward; join thumbs pointing upward; interlace middle, ring, and pinky fingers inside.",
            "duration": "15 minutes daily.",
            "benefits": "Directly balances bio-energy across the pelvic girdle, eases asymmetric sacroiliac strain."
          },
          "yoga": {
            "asanas": [
              "Setu Bandhasana with block between knees (activates adductors to stabilize SI joint)",
              "Gomukhasana",
              "Supta Baddha Konasana (supported)",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Slow Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Magnesium, Omega-3 fatty acids, Curcumin.",
            "dietarySources": "Golden turmeric milk, walnuts, chia seeds, bone broth, steamed greens."
          },
          "holisticIntegration": "Place a yoga block between your thighs and squeeze gently while performing 10 repetitions of Bridge Pose (Setu Bandhasana) to lock the SI joint into symmetrical alignment."
        },
        {
          "id": "spine-9",
          "name": "Hyperkyphosis ('Dowager's Hump' & Scheuermann's)",
          "severity": "Moderate",
          "category": "Thoracic Spinal Deformity",
          "cause": "Excessive convex curvature of the thoracic spine (>40-50 degrees) caused by wedge compression fractures from osteoporosis, juvenile Scheuermann's disease, or chronic postural slumping and pectoralis tightness.",
          "prevention": "Strengthen thoracic extensor muscles (rhomboids, middle/lower trapezius, erector spinae), stretch anterior chest wall (pectorals), prevent osteoporotic fractures.",
          "lifestyle": "Perform thoracic foam rolling, adjust workstation to avoid forward rounding, practice conscious sternal lifting throughout the day.",
          "medicines": "Treatment of underlying osteoporosis, Physical therapy, Thoracic extension orthotic bracing, Kyphoplasty / Vertebroplasty (for painful acute osteoporotic wedge fractures).",
          "ayurveda": {
            "dosha": "Kubjata with Vata aggravation in Prishta (back) and Mamsa-Asthi Dhatus.",
            "herbs": "Ashwagandha, Bala, Shallaki, Arjuna, Guggulu.",
            "formulations": "Ashwagandharishta, Balarishta, Lakshadi Guggulu, Mahanarayana Taila.",
            "therapy": "Prishta Abhyanga (back oil massage) with warm Mahanarayana oil, followed by steam."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Structural Support Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Strengthens vertebral column bone matrix, stimulates thoracic erector muscle tone."
          },
          "yoga": {
            "asanas": [
              "Bhujangasana (Cobra - strengthens upper back)",
              "Matsyasana (Fish Pose - passive thoracic opener)",
              "Ustrasana (Camel Pose)",
              "Shalabhasana (Locust Pose - premier thoracic extensor builder)"
            ],
            "pranayama": [
              "Deep Thoracic Dirga Breathing (inhaling into upper chest)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Vitamin K2 (MK-7), Calcium, Collagen Peptides, Magnesium.",
            "dietarySources": "Sesame seeds, bone broth, leafy green vegetables, wild salmon, pasture-raised eggs."
          },
          "holisticIntegration": "Lie lengthwise on a foam roller or rolled yoga blanket along the thoracic spine with arms spread wide in a 'T' position for 10 minutes every evening to gently reverse forward kyphosis."
        },
        {
          "id": "spine-10",
          "name": "Vertebral Compression Fractures (VCF)",
          "severity": "High / Acute Pain",
          "category": "Spinal Fragility Fracture",
          "cause": "Collapse of a weakened vertebral body (most commonly anterior column in thoracic/lumbar junction) following minor trauma, coughing, or bending in osteoporotic bone or multiple myeloma.",
          "prevention": "Aggressive treatment of osteoporosis with antiresorptive or anabolic agents, fall prevention, avoiding forward-flexion exercises in osteopenic elderly.",
          "lifestyle": "Short-term bed rest during acute fracture (24-48 hours max), early gentle mobilization with supportive hyperextension thoracolumbosacral orthosis (TLSO brace).",
          "medicines": "Analgesics (Calcitonin nasal spray provides unique acute bone fracture analgesia, short-term NSAIDs/Acetaminophen), Percutaneous Balloon Kyphoplasty or Vertebroplasty.",
          "ayurveda": {
            "dosha": "Asthi-Bhagna (bone fracture) with severe acute Vata and Shoola.",
            "herbs": "Asthisamharaka (Cissus quadrangularis - proven to accelerate fracture callus formation), Laksha, Arjuna, Ashwagandha.",
            "formulations": "Lakshadi Guggulu, Gandha Thailam, Praval Pishti, Mukta Pishti.",
            "therapy": "Gentle Lepa with herbal pastes (Nagaradi Lepa), very gentle warm oil applications."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Fracture Healing & Bone Remodeling)",
            "technique": "Join tip of ring finger firmly to tip of thumb; other fingers extended.",
            "duration": "25 minutes twice daily.",
            "benefits": "Directly enhances osteoblast activity, accelerates calcium deposition into fracture sites."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Gentle supported Tadasana",
              "Gentle seated mountain pose in sturdy chair"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ],
            "cautions": "Strictly zero forward bending, twisting, or spinal flexion during fracture healing."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (maintain >50 ng/mL), Vitamin K2, Calcium Citrate, Zinc, Boron, Collagen.",
            "dietarySources": "Bone broth, Cissus quadrangularis (Hadjod) extract, sesame seeds, dark leafy greens, pasture-raised eggs."
          },
          "holisticIntegration": "Take 500mg standardized Cissus quadrangularis (Hadjod) extract twice daily with warm milk to significantly accelerate trabecular bone fracture healing."
        }
      ]
    },
    "reproductive_male": {
      "id": "reproductive_male",
      "name": "Male Reproductive & Prostate",
      "layer": "internals",
      "category": "Male Urogenital & Endocrine",
      "applicableTo": [
        "man"
      ],
      "summary": "Encompasses the prostate gland, testes, seminal vesicles, and androgenic hormonal axis governing vitality, spermatogenesis, and urinary outflow.",
      "topDiseases": [
        {
          "id": "rep_male-1",
          "name": "Benign Prostatic Hyperplasia (BPH & Lower Urinary Tract Symptoms)",
          "severity": "Moderate",
          "category": "Prostatic Hypertrophic",
          "cause": "Non-malignant proliferation of stromal and epithelial cells in the prostate transition zone driven by dihydrotestosterone (DHT) binding to androgen receptors and local growth factors, compressing the prostatic urethra.",
          "prevention": "High-antioxidant diet (lycopene from cooked tomatoes), regular physical exercise, maintaining healthy waist circumference, avoiding excessive alcohol and caffeine.",
          "lifestyle": "Avoid drinking large fluid volumes before bedtime, avoid over-the-counter decongestants and antihistamines (which trigger acute urinary retention), double voiding.",
          "medicines": "Alpha-1 Blockers (Tamsulosin, Silodosin - relaxes prostatic smooth muscle), 5-Alpha Reductase Inhibitors (Finasteride, Dutasteride - shrinks prostate size), PDE5 inhibitors (Tadalafil 5mg daily), TURP / HoLEP / Rezum water vapor therapy.",
          "ayurveda": {
            "dosha": "Paurusha Granthi Vriddhi / Ashteela caused by vitiated Apana Vata and Kapha in the urinary bladder neck.",
            "herbs": "Gokshura, Varuna (Crataeva nurvala), Kanchnar, Saw Palmetto, Shilajit, Punarnava.",
            "formulations": "Chandraprabha Vati, Kanchnar Guggulu, Varunadi Kwath, Gokshuradi Guggulu.",
            "therapy": "Uttara Basti (under expert clinical care), gentle warm Sitz baths (Avagaha Sweda)."
          },
          "mudras": {
            "primary": "Ashwini Mudra combined with Apana Mudra",
            "technique": "Rhythmic contraction and release of perineal and anal sphincters while holding Apana Mudra (middle & ring fingers to thumb).",
            "duration": "20 contractions, twice daily.",
            "benefits": "Decongests the pelvic venous basin, relieves prostatic urethral obstruction, promotes complete bladder emptying."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana (Butterfly Pose - excellent for prostate circulation)",
              "Malasana (Garland Pose)",
              "Setu Bandhasana (Bridge Pose)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Mula Bandha Pranayama (Root lock)",
              "Ujjayi Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (prostate tissue possesses highest zinc concentration of any human organ), Lycopene, Vitamin D3, Beta-Sitosterol.",
            "dietarySources": "Raw pumpkin seeds (highest zinc and phytosterols), cooked tomato sauce (lycopene), pomegranate juice, green tea, walnuts."
          },
          "holisticIntegration": "Consume 2 tablespoons of raw organic pumpkin seeds every morning. Sip 1 glass of warm Varunadi Kwath or Saw Palmetto tea twice daily."
        },
        {
          "id": "rep_male-2",
          "name": "Chronic Prostatitis & Chronic Pelvic Pain Syndrome (CP/CPPS)",
          "severity": "Moderate to High",
          "category": "Prostatic Neuro-Inflammatory",
          "cause": "Non-bacterial neuro-muscular inflammation, pelvic floor muscle hypertonicity/myofascial spasm, autoimmune micro-inflammation, and central pain sensitization in the pelvic basin (Category III CPPS 90%+).",
          "prevention": "Avoid prolonged cycling on narrow hard saddles, practice stress de-escalation, treat acute bacterial infections thoroughly, avoid holding urine.",
          "lifestyle": "Warm sitz baths for 15 minutes, pelvic floor physical therapy (internal myofascial trigger point release), use cutout ergonomic chair cushions, avoid spicy foods.",
          "medicines": "Alpha-blockers (Tamsulosin), Anti-inflammatories (NSAIDs), Neuropathic agents (Pregabalin), Phytotherapy (Quercetin, Pollen extract - Cernilton).",
          "ayurveda": {
            "dosha": "Mutrakrichra and Vataja Basti Shoola with severe Apana Vata entrapment.",
            "herbs": "Gokshura, Varuna, Chandana, Shatavari, Shilajit, Guduchi.",
            "formulations": "Chandraprabha Vati, Gokshuradi Guggulu, Chandanasava, Dashamoola Kashaya.",
            "therapy": "Avagaha Sweda (warm medicated herbal sitz bath with Dashamoola decoction)."
          },
          "mudras": {
            "primary": "Yoni Mudra for Men (Pelvic Floor Relaxation Mudra)",
            "technique": "Join index fingers pointing downward; join thumbs pointing upward; interlace middle, ring, and pinky fingers. Rest hands on lower abdomen.",
            "duration": "15 minutes in a calm meditative state.",
            "benefits": "Directly releases chronic involuntary spastic contractions in the levator ani and pelvic floor."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana with bolsters",
              "Balasana with knees wide apart",
              "Ananda Balasana (Happy Baby Pose)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Soft Pelvic Diaphragmatic Breath",
              "Sheetali Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin (500mg - clinically proven in CPPS trials), Zinc, Magnesium Glycinate, Vitamin D3.",
            "dietarySources": "Red onions, apples, berries, green tea, pumpkin seeds, chamomile tea."
          },
          "holisticIntegration": "Take 500mg Quercetin with breakfast. Take a 15-minute warm Epsom salt or Dashamoola sitz bath before bedtime to melt away pelvic tension."
        },
        {
          "id": "rep_male-3",
          "name": "Erectile Dysfunction (ED - Vascular & Neurogenic)",
          "severity": "Moderate",
          "category": "Vascular Urological",
          "cause": "Endothelial dysfunction with impaired nitric oxide (NO)-mediated cyclic GMP smooth muscle relaxation in the corpora cavernosa, compounded by atherosclerosis, diabetes, hypertension, and performance anxiety.",
          "prevention": "Cardiovascular exercise (Zone 2 cardio), cessation of smoking, maintaining normal lipid profiles, minimizing alcohol, managing psychological stress.",
          "lifestyle": "150 minutes of weekly aerobic conditioning, Mediterranean diet, pelvic floor muscle training, prioritizing 8 hours of sleep (peak testosterone released during REM sleep).",
          "medicines": "PDE5 Inhibitors (Sildenafil, Tadalafil, Vardenafil), Intraurethral Alprostadil, Intracavernosal injections (Trimix), Vacuum Erection Devices (VED), Penile Prosthesis.",
          "ayurveda": {
            "dosha": "Klaibya caused by Shukra Dhatu Kshaya, Vitiated Vata, and Dhwaja Bhanga.",
            "herbs": "Ashwagandha (Withania somnifera - premier male Rasayana), Gokshura, Safed Musli, Kaunch Beej (Mucuna pruriens), Shilajit, Akarkara.",
            "formulations": "Ashwagandhadi Leha, Vasant Kusumakar Ras, Shilajitwadi Vati, Kamasutra Churna.",
            "therapy": "Vajikarana therapy (classical Ayurvedic aphrodisiac and restorative science)."
          },
          "mudras": {
            "primary": "Shakti Mudra (Vital Reproductive Energy Mudra)",
            "technique": "Touch tips of ring and little fingers together. Fold thumbs into palms and loosely wrap index and middle fingers over thumbs.",
            "duration": "15 minutes twice daily.",
            "benefits": "Stimulates reproductive pelvic blood circulation, recharges sexual vigor, calms performance anxiety."
          },
          "yoga": {
            "asanas": [
              "Setu Bandhasana (Bridge Pose)",
              "Paschimottanasana",
              "Bhujangasana",
              "Mula Bandha (Kegel-style pelvic floor contractions)"
            ],
            "pranayama": [
              "Kapalbhati (energizes pelvic circulation)",
              "Surya Bhedana",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "L-Citrulline / L-Arginine (nitric oxide precursor), Zinc, Vitamin D3, Vitamin B12, Magnesium.",
            "dietarySources": "Watermelon (rich in L-citrulline), pomegranate juice, raw walnuts, dark chocolate, beets, garlic."
          },
          "holisticIntegration": "Drink 1 glass of fresh watermelon and pomegranate juice daily at 4 PM to naturally elevate endogenous endothelial nitric oxide production."
        },
        {
          "id": "rep_male-4",
          "name": "Late-Onset Hypogonadism (Low Testosterone / Andropause)",
          "severity": "Moderate",
          "category": "Endocrine Androgenic",
          "cause": "Age-related progressive decline in testicular Leydig cell testosterone production combined with elevated sex hormone-binding globulin (SHBG), blunted LH pulsatility, visceral adiposity, and metabolic syndrome.",
          "prevention": "Heavy resistance strength training (squats, deadlifts), maintaining body fat <20%, optimizing sleep (7-8 hours), avoiding endocrine disruptors (BPA, phthalates).",
          "lifestyle": "Morning heavy compound weightlifting, eliminate ultra-processed soy and alcohol, ensure adequate dietary saturated/monounsaturated fats for steroidogenesis.",
          "medicines": "Testosterone Replacement Therapy (TRT: Intramuscular enanthate/cypionate, transdermal gels, subcutaneous pellets), Enclomiphene / Clomiphene (for secondary hypogonadism), hCG.",
          "ayurveda": {
            "dosha": "Shukra Dhatu Kshaya with Vata-Kapha dominance and loss of Ojas.",
            "herbs": "Shilajit (Purified asphaltum - clinically proven to raise free testosterone), Ashwagandha, Gokshura, Safed Musli, Vidarikand.",
            "formulations": "Shilajit Gold, Ashwagandha Pak, Chandraprabha Vati, Makaradhwaja.",
            "therapy": "Vajikarana Rasayana with medicated cow milk preparations (Ksheera Pak)."
          },
          "mudras": {
            "primary": "Linga Mudra (Heat & Vital Fire Booster)",
            "technique": "Clasp hands together with fingers interlaced; keep left thumb erect pointing upward, wrapped by right index finger and thumb.",
            "duration": "15 minutes in the morning.",
            "benefits": "Kindles internal masculine metabolic fire, stimulates endocrine gonadal vitality."
          },
          "yoga": {
            "asanas": [
              "Virabhadrasana I & II (Warrior Poses)",
              "Utkatasana (Chair Pose)",
              "Dhanurasana (Bow Pose)",
              "Surya Namaskar (12 rounds)"
            ],
            "pranayama": [
              "Bhastrika Pranayama (Bellows breath)",
              "Kapalbhati",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (acts as a nuclear steroid hormone receptor activator), Zinc (30mg), Magnesium, Boron (6-10mg - lowers SHBG), DHEA.",
            "dietarySources": "Pasture-raised whole eggs (cholesterol is the substrate for testosterone), oysters, grass-fed beef, avocados, Brazil nuts."
          },
          "holisticIntegration": "Take 500mg purified Shilajit resin dissolved in warm raw A2 milk with 1/2 tsp Ashwagandha powder each morning before strength training."
        },
        {
          "id": "rep_male-5",
          "name": "Varicocele & Testicular Venous Incompetence",
          "severity": "Moderate (Infertility Risk)",
          "category": "Vascular Scrotal",
          "cause": "Incompetence or absence of venous valves in the pampiniform plexus veins (90% left-sided due to right-angle insertion into left renal vein), leading to retrograde venous pooling, elevated scrotal temperature, and sperm DNA fragmentation.",
          "prevention": "Avoid prolonged standing, avoid chronic heavy straining/constipation, wear supportive athletic underwear, avoid frequent hot tub/sauna immersion.",
          "lifestyle": "Wear breathable supportive scrotal underwear, cool water rinses to scrotum after exercise, avoid heavy weightlifting with prolonged Valsalva.",
          "medicines": "Microsurgical Subinguinal Varicocelectomy (gold standard to restore fertility), Percutaneous Embolization, Antioxidant therapy for sperm parameters.",
          "ayurveda": {
            "dosha": "Siragranthi in Vrishana (scrotum) caused by Vata-Rakta stasis.",
            "herbs": "Kanchnar, Guggulu, Manjistha, Punarnava, Gokshura.",
            "formulations": "Kanchnar Guggulu, Kaishore Guggulu, Sahacharadi Kashayam, Chandraprabha Vati.",
            "therapy": "Cooling local herbal applications, gentle Avagaha (cool water sitz bath)."
          },
          "mudras": {
            "primary": "Varun Mudra (Venous Fluid Drainage Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports venous valve tonicity, promotes upward drainage of pooled scrotal venous blood."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Invaluable - drains venous pooling from scrotum)",
              "Sarvangasana (Supported Shoulderstand)",
              "Setu Bandhasana",
              "Bhadrasana"
            ],
            "pranayama": [
              "Dirga Pranayama (Deep thoracic breathing draws blood upwards)",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids (Rutin, Hesperidin, Diosmin - strengthens venous walls), Vitamin C, Vitamin E, CoQ10, L-Carnitine.",
            "dietarySources": "Horse chestnut extract, citrus fruits, berries, buckwheat, walnuts, pomegranate."
          },
          "holisticIntegration": "Rest with legs elevated vertically up the wall (Viparita Karani) for 15 minutes every evening to invert gravity and relieve scrotal venous pooling."
        },
        {
          "id": "rep_male-6",
          "name": "Acute & Chronic Epididymitis / Orchitis",
          "severity": "Moderate to High",
          "category": "Infectious Scrotal",
          "cause": "Retrograde ascent of pathogens from the urethra or bladder into the epididymis; sexually transmitted (Chlamydia trachomatis, Neisseria gonorrhoeae in men <35) or enteric coliforms (E. coli in men >35 with BPH).",
          "prevention": "Barrier protection during sexual activity, prompt treatment of UTIs and prostatitis, avoiding heavy lifting with full bladder.",
          "lifestyle": "Scrotal elevation (athletic supporter), ice pack application (15 mins on/off with towel barrier), bed rest during acute febrile phase.",
          "medicines": "Targeted Antibiotics: Ceftriaxone 500mg IM + Doxycycline 100mg PO BID for 10 days (if STI), or Levofloxacin / Ofloxacin (if enteric coliforms), NSAIDs.",
          "ayurveda": {
            "dosha": "Vrishana Shotha caused by Pitta-Rakta inflammation and Vata entrapment.",
            "herbs": "Guduchi, Shallaki, Haridra (Curcumin), Manjistha, Punarnava.",
            "formulations": "Kaishore Guggulu, Amritarishta, Punarnavadi Kwath, Kanchnar Guggulu.",
            "therapy": "Cooling sandalwood and turmeric paste applied externally over scrotal supporter (avoid direct raw heat)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Regeneration Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Quenches fiery tissue inflammation, aids cellular repair of the delicate epididymal tubules."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Supta Baddha Konasana with bolsters",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ],
            "cautions": "Strict physical rest during acute painful phase."
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin D3, Quercetin, Selenium.",
            "dietarySources": "Bone broth, pumpkin seeds, turmeric milk, blueberries, coconut water."
          },
          "holisticIntegration": "Take 1 tsp organic turmeric powder with warm water twice daily, and keep scrotum properly supported with a soft athletic jockstrap."
        },
        {
          "id": "rep_male-7",
          "name": "Male Factor Infertility & Oligoasthenoteratozoospermia (OATS)",
          "severity": "Moderate",
          "category": "Reproductive Spermatogenic",
          "cause": "Impaired sperm count (<15M/mL), poor motility (<40%), or abnormal morphology (<4%) driven by oxidative stress, varicocele, endocrine hypogonadism, heat exposure, toxins, or sperm DNA fragmentation.",
          "prevention": "Avoid laptop on lap, avoid saunas/hot tubs, keep cell phone out of front trouser pockets, avoid smoking and anabolic steroids.",
          "lifestyle": "Wear loose cotton boxer shorts, maintain cool scrotal environment, antioxidant-rich diet, avoid excess alcohol and recreational drugs.",
          "medicines": "Empiric medical therapy (Clomiphene citrate, hCG/hMG, Anastrozole), Surgical varicocelectomy, Assisted Reproductive Technology (IUI, IVF-ICSI).",
          "ayurveda": {
            "dosha": "Shukra Dosha (Ksheena Shukra) with Vata-Pitta vitiation degrading sperm vitality.",
            "herbs": "Ashwagandha (KSM-66 - clinically proven to increase sperm count by 167%), Kaunch Beej (Mucuna), Safed Musli, Gokshura, Shatavari.",
            "formulations": "Chyawanprash, Ashwagandhadi Leha, Vasant Kusumakar Ras, Speman.",
            "therapy": "Vajikarana Rasayana protocols with A2 cow milk and medicated ghee."
          },
          "mudras": {
            "primary": "Prana Mudra (Vital Life Force & Spermatogenesis Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Recharges reproductive cellular mitochondria, boosts sperm motility and vitality."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana",
              "Setu Bandhasana",
              "Paschimottanasana",
              "Surya Namaskar"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Gentle Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10 (Ubiquinol 200mg - critical for sperm mitochondrial tail movement), L-Carnitine, Zinc, Selenium, Vitamin C, Vitamin E.",
            "dietarySources": "Walnuts (clinically shown to improve sperm shape and vitality), Brazil nuts (selenium), pumpkin seeds, dark berries, pomegranate juice."
          },
          "holisticIntegration": "Eat 7 soaked walnuts and 2 Brazil nuts every morning. Take 600mg KSM-66 Ashwagandha extract with warm milk at bedtime."
        },
        {
          "id": "rep_male-8",
          "name": "Peyronie's Disease (Penile Fibrotic Plaque)",
          "severity": "Moderate",
          "category": "Fibro-Proliferative",
          "cause": "Localized connective tissue disorder of the tunica albuginea characterized by inelastic fibrotic collagen plaque formation, resulting in painful erections, curvature, indentation, or shortening.",
          "prevention": "Avoid aggressive or traumatic sexual intercourse, early medical intervention at the first sign of penile pain or mild curvature during the acute inflammatory phase.",
          "lifestyle": "Smoking cessation, gentle penile traction therapy devices (RestoreX - clinically proven to reduce curvature), gentle manual modeling.",
          "medicines": "Intralesional Collagenase Clostridium histolyticum (Xiaflex - enzymatic plaque degradation), Oral Pentoxifylline, L-Citrulline, Surgical plication / grafting for stable severe curves.",
          "ayurveda": {
            "dosha": "Siragranthi and Snayu Dushti caused by Vata-Kapha and Ama in Dhwaja (penile tissue).",
            "herbs": "Shallaki (Boswellia), Guggulu, Ashwagandha, Manjistha, Haridra.",
            "formulations": "Kanchnar Guggulu, Kaishore Guggulu, Sahacharadi Taila, Curcumin 95%.",
            "therapy": "Gentle local application of warm Dhanwantharam or Sahacharadi oil (no aggressive force)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Connective Tissue Remodeling)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes healthy collagen cross-linking, softens stubborn fibrotic tissue knots."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana",
              "Supta Baddha Konasana",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10, Vitamin E, L-Citrulline, Omega-3 fatty acids.",
            "dietarySources": "Pomegranate, watermelon, avocados, walnuts, green tea, blueberries."
          },
          "holisticIntegration": "Take 400mg standardized Boswellia serrata and 1000mg L-Citrulline daily to inhibit fibrotic TGF-beta signaling pathways."
        },
        {
          "id": "rep_male-9",
          "name": "Hydrocele & Spermatocele (Scrotal Fluid Collections)",
          "severity": "Mild to Moderate",
          "category": "Scrotal Fluid Accumulation",
          "cause": "Accumulation of serous fluid between the parietal and visceral layers of the tunica vaginalis (hydrocele) due to patent processus vaginalis, trauma, or infection; or retention cyst in the epididymal head (spermatocele).",
          "prevention": "Prevent testicular trauma with protective cups during contact sports, prompt treatment of epididymo-orchitis.",
          "lifestyle": "Wear supportive athletic underwear to relieve gravitational dragging sensation, avoid prolonged standing.",
          "medicines": "Aspiration and Sclerotherapy (for non-surgical candidates), Surgical Hydrocelectomy (Jaboulay or Lord's procedure - definitive cure).",
          "ayurveda": {
            "dosha": "Mutravriddhi / Vrishana Vriddhi caused by Kapha-Vata and fluid accumulation in the tunica.",
            "herbs": "Punarnava, Varuna, Kanchnar, Gokshura, Haritaki.",
            "formulations": "Punarnavadi Guggulu, Kanchnar Guggulu, Chandraprabha Vati, Varunadi Kwath.",
            "therapy": "Warm fomentation with dry rock salt potli, application of herbal lepa."
          },
          "mudras": {
            "primary": "Jalodar Nashak Mudra (Fluid Dissolving Mudra)",
            "technique": "Fold little finger to touch the fleshy base of the thumb; place thumb over the folded little finger. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly stimulates the resorption of abnormal fluid collections, reduces scrotal swelling."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Bhadrasana",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids, Vitamin C, Zinc, Potassium.",
            "dietarySources": "Horse gram soup, barley water, pomegranate, cooked pumpkin, celery."
          },
          "holisticIntegration": "Practice Jalodar Nashak Mudra while resting with legs elevated up the wall for 15 minutes every evening to encourage fluid reabsorption."
        },
        {
          "id": "rep_male-10",
          "name": "Premature Ejaculation (PE - Lifelong & Acquired)",
          "severity": "Mild to Moderate",
          "category": "Neuro-Ejaculatory Reflex",
          "cause": "Hypersensitivity of glans penis sensory receptors, reduced central serotonergic (5-HT2C) inhibitory tone, performance anxiety, hyperthyroidism, or pelvic floor muscle hyperactivity.",
          "prevention": "Pelvic floor muscle rehabilitation (learning to relax rather than tense the bulbocavernosus muscle), open communication with partner, mindfulness practices.",
          "lifestyle": "Stop-Start technique (Semans method), Squeeze technique (Masters and Johnson), deep diaphragmatic breathing during intimacy, aerobic conditioning.",
          "medicines": "On-demand SSRIs (Dapoxetine 30-60mg taken 1-3 hours before intimacy), Daily low-dose Paroxetine or Sertraline, Topical anesthetics (Lidocaine-Prilocaine spray).",
          "ayurveda": {
            "dosha": "Shukragata Vata / Sheeghrapatana caused by hyperactive Chala Guna of Vata.",
            "herbs": "Ashwagandha, Jatamansi, Tagara, Nutmeg (Jaiphal - superior classical sthambhana), Shatavari.",
            "formulations": "Chyawanprash, Ashwagandharishta, Brahmi Vati, Manasamitra Vatika.",
            "therapy": "Shirodhara with Brahmi oil to calm hypersensitive cortical and autonomic reflexes."
          },
          "mudras": {
            "primary": "Gyan Mudra combined with Ashwini Mudra",
            "technique": "Index fingertip touches thumb tip; practice conscious controlled releases of the perineal floor.",
            "duration": "15 minutes daily.",
            "benefits": "Calms sympathetic hyper-reactivity, delays the ejaculatory reflex threshold."
          },
          "yoga": {
            "asanas": [
              "Mula Bandha practice in Siddhasana",
              "Sarvangasana",
              "Paschimottanasana",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Left nostril breathing - pacifies nervous arousal)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (calms neural hyper-excitability), Vitamin B6, L-Theanine, Zinc.",
            "dietarySources": "Warm spiced milk with a pinch of nutmeg before bed, soaked almonds, pumpkin seeds, bananas, chamomile tea."
          },
          "holisticIntegration": "Drink a cup of warm A2 milk infused with a tiny pinch of freshly grated organic nutmeg (Jaiphal) and 1/2 tsp Ashwagandha 1 hour before sleep."
        }
      ]
    },
    "reproductive_female": {
      "id": "reproductive_female",
      "name": "Female Reproductive & Pelvic (Hormonal)",
      "layer": "internals",
      "category": "Female Gynecological & Endocrine",
      "applicableTo": [
        "woman"
      ],
      "summary": "Governs cyclic fertility, ovulation, uterine receptivity, menstrual rhythm, and the intricate balance of estrogen, progesterone, and neuroendocrine signaling.",
      "topDiseases": [
        {
          "id": "rep_female-1",
          "name": "Polycystic Ovary Syndrome (PCOS / PCOD)",
          "severity": "Moderate / Chronic",
          "category": "Endocrine Reproductive",
          "cause": "Hyperandrogenism, insulin resistance, elevated LH:FSH ratio, and arrested antral follicular development ('string of pearls' appearance on ultrasound) leading to anovulation.",
          "prevention": "Low-glycemic whole food diet, daily physical movement, maintaining healthy body fat percentage, early intervention for irregular adolescent cycles.",
          "lifestyle": "Strength training 3x weekly, seed cycling (flax/pumpkin in follicular phase, sesame/sunflower in luteal phase), prioritize 8 hours sleep, stress reduction.",
          "medicines": "Combined Oral Contraceptives (COCs), Metformin (for insulin resistance), Spironolactone (anti-androgen for hirsutism), Inositol (40:1 Myo to D-Chiro ratio), Letrozole (for ovulation induction).",
          "ayurveda": {
            "dosha": "Artava Kshaya / Granthi with Kapha-Vata blockage and Meda accumulation.",
            "herbs": "Kanchnar, Shatavari, Ashoka (Saraca asoca - premier uterine tonic), Lodhra, Cinnamon (Tvak), Varuna.",
            "formulations": "Kanchnar Guggulu, Ashokarishta, Chandraprabha Vati, Pushpadhanwa Ras.",
            "therapy": "Virechana and Uttara Basti to cleanse the Artavavaha Srotas."
          },
          "mudras": {
            "primary": "Yoni Mudra (Uterine & Ovarian Harmonizer)",
            "technique": "Bring tips of thumbs together pointing upwards; tips of index fingers touching pointing downwards (forming a diamond/triangle); interlace remaining fingers inside. Hold at pelvic level.",
            "duration": "15-20 minutes daily.",
            "benefits": "Channels prana directly into the ovaries and uterus, harmonizes endocrine cycle, relieves pelvic stagnation."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana (Reclining Goddess Pose)",
              "Bhadrasana",
              "Malasana",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Inositol (Myo-Inositol 2000mg + D-Chiro Inositol 50mg), Vitamin D3 (optimal >50 ng/mL), Magnesium, Zinc, Chromium.",
            "dietarySources": "Spearmint tea (clinically proven anti-androgen), flaxseeds, cinnamon, walnuts, leafy greens, avocados."
          },
          "holisticIntegration": "Drink 2 cups of organic spearmint tea daily (morning and afternoon) to naturally lower elevated free testosterone and DHT levels."
        },
        {
          "id": "rep_female-2",
          "name": "Endometriosis & Adenomyosis",
          "severity": "High / Chronic Inflammatory",
          "category": "Gynecological Proliferative",
          "cause": "Presence of functional endometrial-like stroma and glands outside the uterine cavity (peritoneum, ovaries, bowel), exhibiting estrogen dependence, chronic inflammation, fibrosis, and severe pelvic pain.",
          "prevention": "Early diagnosis and suppression before deep infiltrating lesions occur, avoiding endocrine disrupting chemicals (BPA, phthalates), anti-inflammatory diet.",
          "lifestyle": "Anti-inflammatory diet (eliminating gluten, dairy, alcohol, refined sugar), gentle castor oil packs over lower abdomen (except during menstruation), pelvic floor therapy.",
          "medicines": "Progestins (Dienogest, Medroxyprogesterone), GnRH receptor antagonists (Elagolix, Relugolix), Combined oral contraceptives, Laparoscopic Excision surgery (gold standard).",
          "ayurveda": {
            "dosha": "Kashtartava and Udavarta with severely vitiated Apana Vata moving upward instead of downward, carrying Rakta outside the Yoni.",
            "herbs": "Ashoka, Lodhra, Shallaki (Boswellia), Haridra (Curcumin), Shatavari, Kumari (Aloe vera).",
            "formulations": "Ashokarishta, Kanchnar Guggulu, Chandraprabha Vati, Sukumara Ghrita.",
            "therapy": "Matra Basti with Sahacharadi or Dhanwantharam oil to gently redirect Apana Vata downwards."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Cleansing Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Re-establishes normal downward flow of menstrual prana (Anulomana), relieves deep pelvic congestion."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana with bolsters",
              "Balasana with knees wide",
              "Viparita Karani",
              "Marjaryasana-Bitilasana"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Cooling lunar breath)",
              "Nadi Shodhana",
              "Soft Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Curcumin (potent anti-angiogenic/anti-inflammatory), Omega-3 fatty acids, Magnesium Glycinate, Vitamin D3, N-Acetylcysteine (NAC 600mg).",
            "dietarySources": "Cruciferous vegetables (DIM assists healthy estrogen clearance), wild salmon, blueberries, bone broth, ginger tea."
          },
          "holisticIntegration": "Apply a warm castor oil pack over the lower pelvis for 30 minutes 3 times a week (during non-menstrual days) to soften fibrotic adhesions and support lymphatic drainage."
        },
        {
          "id": "rep_female-3",
          "name": "Uterine Fibroids (Leiomyomas)",
          "severity": "Moderate",
          "category": "Benign Myometrial Tumor",
          "cause": "Benign monoclonal smooth muscle neoplasms of the myometrium driven by estrogen and progesterone receptor hypersensitivity, characterized by heavy menstrual bleeding (menorrhagia) and pelvic bulk symptoms.",
          "prevention": "Maintain healthy body fat (adipose tissue aromatizes androgens to estrogens), high dietary fiber to ensure estrogen clearance via stool, regular cardiovascular movement.",
          "lifestyle": "Avoid excess dairy and commercially raised meats with exogenous hormones, manage chronic hepatic estrogen detoxification pathways, avoid constipation.",
          "medicines": "GnRH antagonists with add-back therapy (Relugolix/Estradiol/Norethindrone), Tranexamic acid (for heavy bleeding), Progestin IUD (Mirena), Uterine Artery Embolization (UAE), Myomectomy / Hysterectomy.",
          "ayurveda": {
            "dosha": "Garbhashaya Granthi / Arbuda caused by Kapha-Meda accumulation and aggravated Vata in Mamsadhara Kala.",
            "herbs": "Kanchnar (Bauhinia variegata), Guggulu, Ashoka, Lodhra, Varuna, Haridra.",
            "formulations": "Kanchnar Guggulu, Ashokarishta, Pushyanug Churna, Pradarantak Ras.",
            "therapy": "Lekhana (scraping) therapies and gentle Virechana."
          },
          "mudras": {
            "primary": "Surya Mudra combined with Yoni Mudra",
            "technique": "Fold ring finger to thumb root; press thumb over knuckle. Practice for 15 minutes, followed by Yoni Mudra.",
            "duration": "20 minutes daily.",
            "benefits": "Kindles tissue metabolic fire to dissolve benign cellular stagnation and shrink fibroid tissue."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana",
              "Setu Bandhasana",
              "Tadasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Kapalbhati (Gentle, during non-bleeding phases)",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (deficiency strongly linked to fibroid growth; repletion inhibits proliferation), Green Tea Extract (EGCG 390mg - proven to reduce fibroid size), Iron (for anemia).",
            "dietarySources": "Decaffeinated green tea (EGCG), broccoli, flaxseeds (lignans modulate estrogen), cooked beets, pomegranate."
          },
          "holisticIntegration": "Take 400mg standardized EGCG (green tea extract) and 2000 IU Vitamin D3 daily to inhibit fibroid cell proliferation and reduce bleeding."
        },
        {
          "id": "rep_female-4",
          "name": "Primary & Secondary Dysmenorrhea (Menstrual Cramps)",
          "severity": "Moderate",
          "category": "Menstrual Spasmodic",
          "cause": "Excessive production of endometrial PGF2-alpha prostaglandins causing intense myometrial hypercontractility, uterine ischemia, and hypoxia; or secondary to endometriosis/adenomyosis.",
          "prevention": "Start anti-inflammatory nutritional support 5-7 days before expected menses, maintain high magnesium and omega-3 intake, regular aerobic conditioning.",
          "lifestyle": "Apply a heating pad to the lower abdomen (heat is as effective as ibuprofen in clinical trials), warm herbal baths, gentle walking during cramps.",
          "medicines": "NSAIDs (Mefenamic Acid, Ibuprofen, Naproxen - take at first sign of bleeding to block prostaglandin synthesis), Hormonal Contraceptives, Antispasmodics.",
          "ayurveda": {
            "dosha": "Kashtartava caused by Pratiloma (upward) Vata obstructing the downward flow of Artava.",
            "herbs": "Hing (Asafoetida), Ajwain, Kumari (Aloe vera), Ashoka, Dashamoola, Shunthi.",
            "formulations": "Raja Pravartini Vati, Sukumara Ghrita, Dashamoolarishta, Hingwashtak Churna.",
            "therapy": "Local warm fomentation (Nadi Sweda) and gentle abdominal massage with warm sesame oil."
          },
          "mudras": {
            "primary": "Apana Mudra (Menstrual Flow Harmonizer)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky straight.",
            "duration": "15-20 minutes during cramping.",
            "benefits": "Relaxes uterine myometrial spasms, encourages smooth, painless downward shedding."
          },
          "yoga": {
            "asanas": [
              "Balasana (Child's Pose)",
              "Supta Baddha Konasana with bolsters",
              "Janu Sirsasana (gentle)",
              "Cat-Cow (pelvic rock)"
            ],
            "pranayama": [
              "Slow Belly Breathing",
              "Chandra Bhedana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Bisglycinate (300-400mg - relaxes smooth muscle), Vitamin B6 (reduces prostaglandin synthesis), Vitamin E, Omega-3 fatty acids.",
            "dietarySources": "Dark chocolate (85%+), ginger tea (proven as effective as ibuprofen for cramps in trials), fennel seed tea, cooked spinach, pumpkin seeds."
          },
          "holisticIntegration": "Sip warm freshly grated ginger and fennel seed tea with a dash of raw honey 3 times daily starting 2 days prior to your menstrual cycle."
        },
        {
          "id": "rep_female-5",
          "name": "Menopause & Perimenopausal Syndrome",
          "severity": "Moderate to High",
          "category": "Endocrine Climacteric",
          "cause": "Depletion of ovarian follicular reserve leading to erratic fluctuations and eventual cessation of estradiol and progesterone production, elevated FSH/LH, causing vasomotor instability (hot flashes), night sweats, and sleep disruption.",
          "prevention": "Maintain strong skeletal muscle mass through resistance training, optimize bone mineral density prior to menopause, Mediterranean diet, smoking avoidance.",
          "lifestyle": "Dress in breathable layers, keep bedroom cool (65°F), eliminate alcohol and spicy foods that trigger hot flashes, daily mindfulness meditation.",
          "medicines": "Menopausal Hormone Therapy (MHT / HRT: Transdermal Estradiol + Micronized Progesterone), Fezolinetant (NK3 receptor antagonist for vasomotor symptoms), Vaginal Estrogen, SSRIs/SNRIs (Venlafaxine).",
          "ayurveda": {
            "dosha": "Rajonivritti caused by age-related Dhatu Kshaya, Vata elevation, and fluctuating Pitta (hot flashes).",
            "herbs": "Shatavari (Asparagus racemosus - queen of herbs for women), Ashoka, Brahmi, Shankhpushpi, Praval (cooling coral calcium).",
            "formulations": "Shatavari Gulam, Praval Pishti, Saraswatarishta, Ashokarishta.",
            "therapy": "Shirodhara with cooling oils and gentle weekly Abhyanga with Ksheerabala oil."
          },
          "mudras": {
            "primary": "Yoni Mudra combined with Sheetali Mudra",
            "technique": "Hold Yoni Mudra over pelvis while inhaling through rolled tongue (Sheetali) and exhaling through nose.",
            "duration": "15 minutes twice daily.",
            "benefits": "Cools vasomotor flushing instantly, nourishes declining reproductive essence (Ojas)."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Setu Bandhasana",
              "Shavasana (15 mins)"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (extinguishes hot flashes)",
              "Chandra Bhedana",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 + K2 (MK-7), Magnesium, Omega-3 fatty acids, B-Complex, Black Cohosh extract.",
            "dietarySources": "Ground flaxseeds (phytoestrogens), soybeans / edamame / tempeh, walnuts, leafy greens, pomegranate."
          },
          "holisticIntegration": "Take 1 tsp Shatavari powder boiled in 1 cup warm A2 milk with a pinch of cardamom before sleep to nourish tissues, soothe hot flashes, and deepen sleep."
        },
        {
          "id": "rep_female-6",
          "name": "Pelvic Inflammatory Disease (PID)",
          "severity": "Critical / Acute to Chronic",
          "category": "Infectious Gynecological",
          "cause": "Ascending polymicrobial infection from the endocervix into the endometrium, fallopian tubes (salpingitis), and ovaries (tubo-ovarian abscess), commonly initiated by Chlamydia trachomatis, Neisseria gonorrhoeae, or Mycoplasma genitalium.",
          "prevention": "Safe sexual practices with barrier protection, routine screening for chlamydia/gonorrhea in sexually active women <25, prompt treatment of cervicitis and partners.",
          "lifestyle": "Complete full course of antibiotics even if feeling well, pelvic rest (no intercourse, tampons, or douching during acute treatment), partner notification.",
          "medicines": "Empiric Broad-Spectrum Antibiotics: Ceftriaxone 500mg IM single dose + Doxycycline 100mg PO BID for 14 days + Metronidazole 500mg PO BID for 14 days.",
          "ayurveda": {
            "dosha": "Yonivyapad with acute Pitta-Rakta and Sannipatika inflammation in Garbhashaya.",
            "herbs": "Guduchi, Lodhra, Neem, Haridra (Curcumin), Manjistha, Shatavari.",
            "formulations": "Pradarantak Ras, Kaishore Guggulu, Ashokarishta, Chandanasava.",
            "therapy": "Yoni Prakshalana (gentle external herbal wash with Triphala decoction)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Regeneration Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports deep pelvic tissue repair, quenches chronic inflammatory fire."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Restorative rest)",
              "Supta Baddha Konasana with bolsters",
              "Gentle seated mountain pose"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Sheetali Pranayama",
              "Bhramari"
            ],
            "cautions": "Strict physical rest during acute phase of infection."
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc, Vitamin D3, Probiotics (Lactobacillus crispatus for vaginal flora).",
            "dietarySources": "Bone broth, blueberries, turmeric golden milk, coconut water, steamed vegetables."
          },
          "holisticIntegration": "Take 1 oral high-potency vaginal probiotic (specifically containing Lactobacillus crispatus and L. rhamnosus) daily to restore the protective urogenital microbiome."
        },
        {
          "id": "rep_female-7",
          "name": "Vulvovaginal Candidiasis & Bacterial Vaginosis (BV)",
          "severity": "Mild to Moderate",
          "category": "Vaginal Microbiome Dysbiosis",
          "cause": "Disruption of dominant protective Lactobacillus species: overgrowth of Candida albicans (yeast infection - itching, thick curd-like discharge) or Gardnerella vaginalis and anaerobes (BV - thin fishy-odor discharge).",
          "prevention": "Avoid vaginal douching, avoid scented soaps/bubble baths, wipe front to back, wear breathable cotton underwear, avoid prolonged wet swimsuits.",
          "lifestyle": "Sleep without underwear to allow airflow, avoid tight synthetic leggings, reduce refined sugars (which fuel fungal proliferation), change pads frequently.",
          "medicines": "For Candidiasis: Oral Fluconazole (150mg single dose), Topical Clotrimazole/Miconazole. For BV: Oral or topical Metronidazole (500mg BID for 7 days), Clindamycin cream, Boric acid suppositories (for recurrent BV).",
          "ayurveda": {
            "dosha": "Kaphaja Yonivyapad with excessive Kleda (moisture) and itching (Kandu).",
            "herbs": "Lodhra, Neem, Triphala, Haridra, Khadira, Yashtimadhu.",
            "formulations": "Pushyanug Churna, Kaishore Guggulu, Chandraprabha Vati, Khadirarishta.",
            "therapy": "Yoni Dhavana (irrigation with warm Triphala or Neem decoction) and Pichu (herbal tampon) with Jatyadi oil."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Apana Mudra",
            "technique": "Touch little fingertip to thumb tip for 10 mins; then touch middle and ring fingertips to thumb tip for 10 mins.",
            "duration": "20 minutes daily.",
            "benefits": "Balances vaginal mucosal pH, purges stagnant fungal and bacterial overgrowth."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana",
              "Malasana",
              "Setu Bandhasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati (gentle)",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Lactobacillus probiotics, Vitamin C, Zinc, Vitamin D3.",
            "dietarySources": "Unsweetened Greek yogurt, fermented sauerkraut, garlic cloves, coconut oil (caprylic acid), oregano tea."
          },
          "holisticIntegration": "Wash externally with cooled Triphala decoction. Eat 1 cup of plain unsweetened organic yogurt containing live Lactobacillus cultures daily."
        },
        {
          "id": "rep_female-8",
          "name": "Premenstrual Dysphoric Disorder (PMDD) & Severe PMS",
          "severity": "Moderate to High",
          "category": "Neuro-Endocrine Affective",
          "cause": "Abnormal neurobiological sensitivity to normal luteal phase progesterone fluctuations and allopregnanolone, causing central serotonergic and GABA-A receptor dysregulation, intense irritability, dysphoria, and emotional lability.",
          "prevention": "Track cycles with mood diary, regular cardiovascular movement, low-inflammatory diet, adequate sleep hygiene, stress reduction.",
          "lifestyle": "Eliminate caffeine and alcohol during the luteal phase (worsens irritability and breast tenderness), prioritize rest during premenstrual days, communicate needs with loved ones.",
          "medicines": "Luteal-phase SSRIs (Fluoxetine, Sertraline - effective intermittently from ovulation to menses onset), Drospirenone-containing COCs (Yaz), Calcium supplementation, CBT.",
          "ayurveda": {
            "dosha": "Sadhaka Pitta and Prana Vata disturbance in the Mano-Vaha Srotas.",
            "herbs": "Ashoka, Brahmi, Jatamansi, Shankhpushpi, Shatavari, Saffron.",
            "formulations": "Saraswatarishta, Ashokarishta, Manasamitra Vatika, Kalyanaka Ghrita.",
            "therapy": "Shirodhara with Brahmi oil during the luteal phase, Padabhyanga (foot massage)."
          },
          "mudras": {
            "primary": "Prana Mudra (Emotional Grounding Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Deeply anchors erratic emotional turbulence, restores calming vital prana."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (15 mins daily during luteal phase)",
              "Supta Baddha Konasana",
              "Balasana",
              "Janu Sirsasana"
            ],
            "pranayama": [
              "Bhramari Pranayama with Shanmukhi Mudra",
              "Chandra Bhedana Pranayama",
              "4-7-8 Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Calcium Carbonate (1200mg - proven in double-blind PMDD trials), Vitamin B6 (Pyridoxal-5-Phosphate 50-100mg), Magnesium Glycinate, Vitamin D3, Chasteberry (Vitex agnus-castus).",
            "dietarySources": "Sesame seeds, dark chocolate (85%+), chamomile tea, bananas, walnuts, pumpkin seeds."
          },
          "holisticIntegration": "Take 1200mg Calcium with 300mg Magnesium Glycinate daily during the luteal phase (days 14 to 28) to stabilize neurotransmitter fluctuations."
        },
        {
          "id": "rep_female-9",
          "name": "Pelvic Organ Prolapse (Cystocele, Rectocele & Uterine Prolapse)",
          "severity": "Moderate",
          "category": "Pelvic Floor Structural",
          "cause": "Attenuation or tears of the pelvic floor levator ani muscles, endopelvic fascia, and uterosacral ligaments from vaginal childbirth, chronic coughing, straining from constipation, or postmenopausal hypoestrogenism.",
          "prevention": "Pelvic floor muscle training (Kegels) during and after pregnancy, avoiding chronic straining during bowel movements, maintaining healthy body weight.",
          "lifestyle": "Use a bathroom footstool to eliminate straining, avoid heavy weightlifting with breath-holding, treat chronic coughing.",
          "medicines": "Vaginal Pessaries (silicone supportive devices custom-fitted by gynecologist), Topical Vaginal Estrogen (improves mucosal collagen tone), Pelvic floor physical therapy, Surgical Sacrocolpopexy / Colporrhaphy.",
          "ayurveda": {
            "dosha": "Prasramsini / Mahayoni caused by severe Apana Vata depletion and Mamsa Dhatu laxity.",
            "herbs": "Ashoka, Lodhra, Bala, Shatavari, Ashwagandha.",
            "formulations": "Ashokarishta, Balarishta, Sukumara Ghrita, Pushyanug Churna.",
            "therapy": "Yoni Pichu with medicated oils like Changeryadi or Bala Taila, gentle abdominal bandage support."
          },
          "mudras": {
            "primary": "Mula Bandha Mudra (Root Lock Contraction)",
            "technique": "Contract the perineum, anterior vaginal wall, and cervix inward and upward, hold for 5 seconds while breathing smoothly, then slowly release.",
            "duration": "15 repetitions, three times daily.",
            "benefits": "Directly tones the levator ani and pubococcygeus muscles, reverses early prolapse stages."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Inverts gravity to draw prolapsed organs upward)",
              "Setu Bandhasana with block between knees",
              "Supta Baddha Konasana",
              "Utkatasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama with gentle Mula Bandha engagement",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen peptides, Vitamin C, Zinc, Vitamin D3, Magnesium.",
            "dietarySources": "Bone broth, berries, stewed apples, steamed vegetables, soaked chia seeds."
          },
          "holisticIntegration": "Perform 15 repetitions of mindful Mula Bandha while resting in Viparita Karani (legs elevated up the wall) morning and evening."
        },
        {
          "id": "rep_female-10",
          "name": "Cervical Dysplasia & HPV Associated Lesions",
          "severity": "Moderate to High (Pre-malignant)",
          "category": "Cervical Neoplastic/Viral",
          "cause": "Persistent infection of the cervical transformation zone with high-risk oncogenic Human Papillomavirus strains (principally HPV-16 and HPV-18) producing E6 and E7 oncoproteins that degrade p53 and Rb tumor suppressors.",
          "prevention": "HPV Vaccination (Gardasil 9 - prevents >90% of cervical cancers), routine Pap smear and HPV co-testing starting at age 21/25, smoking cessation (smoking doubles progression risk).",
          "lifestyle": "Cessation of all tobacco use, barrier protection during intercourse, immune-supporting diet rich in folate, carotenoids, and green tea polyphenols.",
          "medicines": "Colposcopy with targeted cervical biopsy, LEEP (Loop Electrosurgical Excision Procedure), Cold Knife Cone biopsy (CKC), Therapeutic surveillance.",
          "ayurveda": {
            "dosha": "Garbhashaya Mukha Dushti with Vata-Kapha Granthi and Ojas depletion.",
            "herbs": "Guduchi (potent immune enhancer), Neem, Haridra (Curcumin), Kanchnar, Manjistha.",
            "formulations": "Kanchnar Guggulu, Curcumin 95%, Kaishore Guggulu, Triphala.",
            "therapy": "Yoni Prakshalana with Triphala decoction, supportive immune Rasayana therapy."
          },
          "mudras": {
            "primary": "Prana Mudra (Immune Vitality Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Fortifies systemic cell-mediated immune defense, assists clearance of viral pathogens."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar",
              "Bhadrasana",
              "Setu Bandhasana",
              "Tadasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Folate (L-Methylfolate - critical for cervical epithelial DNA integrity), Vitamin B12, Vitamin D3, Epigallocatechin gallate (EGCG), AHCC (Active Hexose Correlated Compound).",
            "dietarySources": "Dark leafy greens, cruciferous vegetables, shiitake/reishi mushrooms, green tea, carrots (beta-carotene)."
          },
          "holisticIntegration": "Take 1000mcg L-Methylfolate and 1 gram AHCC mushroom extract daily to support natural cellular immune clearance of high-risk HPV."
        }
      ]
    },
    "baby_internals": {
      "id": "baby_internals",
      "name": "Pediatric & Infant Systems",
      "layer": "internals",
      "category": "Pediatric Growth & Infant Physiology",
      "applicableTo": [
        "baby"
      ],
      "summary": "Covers infant digestive tract maturation, neonatal jaundice metabolism, fontanelles, delicate respiratory bronchioles, and early immune development.",
      "topDiseases": [
        {
          "id": "baby-1",
          "name": "Infantile Colic & Trapped Gas Syndrome",
          "severity": "Moderate (High Distress for Caregivers)",
          "category": "Pediatric Gastrointestinal Motility",
          "cause": "Developmental immaturity of the infant gut-brain nervous system, transient lactase insufficiency, aerophagia (swallowing air during feeding), gut microbiome dysbiosis, and autonomic sensory overload.",
          "prevention": "Paced bottle feeding or proper breastfeeding latch to minimize air swallowing, frequent burping during and after feeds, keeping infant semi-upright for 20 minutes post-feed.",
          "lifestyle": "The 5 S's soothing technique (Swaddle, Side/Stomach position while awake in arms, Shush white noise, Swing rhythmic motion, Suck pacifier), gentle warm tummy baths.",
          "medicines": "Simethicone infant gas drops (breaks surface tension of gas bubbles), Probiotic drops (Lactobacillus reuteri DSM 17938 - proven in clinical trials to reduce crying time).",
          "ayurveda": {
            "dosha": "Udarashoola in Bala caused by aggravated Vata in Amashaya.",
            "herbs": "Hing (Asafoetida - legendary for infant gas), Saunf (Fennel), Ajwain, Pudina (Mint).",
            "formulations": "Hing paste application (external around navel), Janma Ghunti (gentle pediatric digestive drops), Gripe Water.",
            "therapy": "Gentle baby massage (Bala Abhyanga) with warm coconut/sesame oil followed by gentle bicycle leg exercises."
          },
          "mudras": {
            "primary": "Gentle Apana Reflex (Assisted Baby Acupressure)",
            "technique": "Caregiver gently circles baby's tummy clockwise around the navel using warm oil, followed by 'bicycle legs' pushing knees gently to chest.",
            "duration": "5 minutes during calm awake intervals.",
            "benefits": "Releases trapped colonic gas bubbles, relaxes spastic infant intestinal sphincters."
          },
          "yoga": {
            "asanas": [
              "Baby Happy Baby Pose (Caregiver holds baby's feet gently apart)",
              "Baby Bicycle Legs",
              "Tummy Time on caregiver's chest"
            ],
            "pranayama": [
              "Caregiver breathes deep slow audible breaths (entrains infant nervous system)"
            ]
          },
          "vitamins": {
            "deficiencies": "Lactobacillus reuteri probiotics, Vitamin D3 (400 IU daily for all breastfed infants).",
            "dietarySources": "Exclusive breastmilk or gentle hydrolyzed formula. If breastfeeding: maternal reduction of excessive dairy and cruciferous foods."
          },
          "holisticIntegration": "Mix a pinch of Hing (Asafoetida) powder in 1 tsp warm water or ghee and apply it in a gentle circle around baby's navel (never directly on umbilical stump) to dispel trapped gas within 15 minutes."
        },
        {
          "id": "baby-2",
          "name": "Neonatal Jaundice (Physiologic & Breastmilk)",
          "severity": "Moderate to Critical (Kernicterus Risk)",
          "category": "Neonatal Hepato-Biliary",
          "cause": "Physiological immaturity of neonatal hepatic uridine diphosphate glucuronosyltransferase (UGT1A1) enzyme combined with high erythrocyte turnover, leading to unconjugated hyperbilirubinemia.",
          "prevention": "Frequent, early feedings (8-12 times in 24 hours to stimulate gut motility and bilirubin excretion in stool), monitoring transcutaneous bilirubin before hospital discharge.",
          "lifestyle": "Frequent feeding every 2 hours, monitor wet diapers (at least 6 wet diapers/day by day 4) and yellow-seedy stools, indirect morning sunlight through a closed glass window.",
          "medicines": "Bili-light Phototherapy (blue-green light 460-490nm isomerizes bilirubin into lumirubin excreted in urine), Exchange Transfusion (for critical levels approaching neurotoxic kernicterus threshold).",
          "ayurveda": {
            "dosha": "Bala Kamala caused by aggravated Pitta in Yakrit (liver).",
            "herbs": "Draksha (Raisin water - gentle for infants), Amalaki, Chandana.",
            "formulations": "Draksha Himam (soaked raisin water for older infants), Kumar Kalyan Ras (under specialist guidance).",
            "therapy": "Gentle maternal dietary Pitta-cleansing if exclusively breastfeeding."
          },
          "mudras": {
            "primary": "Gentle Maternal Energy Transmission",
            "technique": "Mother holds baby against chest skin-to-skin while holding Varun Mudra to balance systemic fluids.",
            "duration": "20 minutes during nursing.",
            "benefits": "Promotes maternal oxytocin, enhances infant enteral motility and stooling."
          },
          "yoga": {
            "asanas": [
              "Skin-to-Skin Kangaroo Care on parent's chest",
              "Gentle infant rocking in supportive arms"
            ],
            "pranayama": [
              "Maternal calming deep breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Adequate Hydration/Milk Volume, Vitamin D3 (400 IU).",
            "dietarySources": "Frequent, adequate breastmilk or formula."
          },
          "holisticIntegration": "Ensure baby feeds every 2 hours to stimulate regular bowel evacuations, rapidly flushing unconjugated bilirubin out through meconium and stool."
        },
        {
          "id": "baby-3",
          "name": "Infant Gastroesophageal Reflux (GER / Spit-up)",
          "severity": "Mild to Moderate",
          "category": "Pediatric Upper GI Motility",
          "cause": "Physiologic laxity of the lower esophageal sphincter, short intra-abdominal esophagus, liquid diet, and horizontal recumbency leading to frequent effortless regurgitation ('happy spitters').",
          "prevention": "Hold infant upright for 20-30 minutes after feeds, avoid jostling or vigorous bouncing immediately post-feed, burp infant every 2-3 ounces or between breasts.",
          "lifestyle": "Paced feeding, avoid tight diapers that compress the abdomen, elevate crib mattress head slightly (under pediatrician guidance).",
          "medicines": "For uncomplicated GER: Reassurance. For true GERD (poor weight gain, esophagitis, Sandifer syndrome): H2 blockers (Famotidine) or PPIs (Omeprazole), Rice starch thickening.",
          "ayurveda": {
            "dosha": "Urdhwaga Vata with Pitta in Amashaya.",
            "herbs": "Saunf (Fennel water), Ela (Cardamom water), Yashtimadhu.",
            "formulations": "Gentle fennel-cardamom decoction drops, mother drinks cooling Pitta teas.",
            "therapy": "Gentle upright chest cuddling and soothing back strokes."
          },
          "mudras": {
            "primary": "Downward Peristaltic Stroking (Parental Stroke)",
            "technique": "Caregiver gently strokes downwards on baby's back from shoulder blades to lower back while infant rests upright over caregiver's shoulder.",
            "duration": "10 minutes post feeding.",
            "benefits": "Mechanically assists gastric venting and downward movement of milk."
          },
          "yoga": {
            "asanas": [
              "Upright cuddled position on shoulder",
              "Gentle baby tummy time while alert (never right after feeds)"
            ],
            "pranayama": [
              "Calming caregiver vocal hums (vocal vibrations calm infant vagus)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Breastmilk nutrients.",
            "dietarySources": "Breastmilk or specialized anti-reflux formula."
          },
          "holisticIntegration": "Keep baby resting on your shoulder with head above stomach level for 20 minutes following every feed, gently patting back in an upward-to-downward rhythmic stroke."
        },
        {
          "id": "baby-4",
          "name": "Bronchiolitis & RSV (Respiratory Syncytial Virus)",
          "severity": "Moderate to Critical",
          "category": "Pediatric Respiratory Infectious",
          "cause": "Viral infection (primarily RSV 70%+, Rhinovirus) causing necrosis of bronchiolar epithelium, ciliated cell loss, lymphocytic infiltration, and mucus plugging in infants <2 years.",
          "prevention": "Strict handwashing by all caregivers, Nirsevimab monoclonal antibody immunization for neonates/infants in RSV season, avoiding exposing baby to secondhand tobacco smoke.",
          "lifestyle": "Frequent nasal bulb or motorized suction with saline drops before feeds and sleep, cool-mist humidifier in nursery, small frequent feeds to prevent dehydration.",
          "medicines": "Supportive care is paramount: Nasal Saline Drops + Gentle Suction, Supplemental Oxygen (if SpO2 <90%), Hydration support, High-Flow Nasal Cannula (HFNC). (Bronchodilators/Steroids not routinely recommended).",
          "ayurveda": {
            "dosha": "Bala Kasa and Shwasa with Kapha obstructing subtle Pranavaha Srotas.",
            "herbs": "Tulsi, Vasa, Yashtimadhu, Sitopaladi (in micro-doses for older babies under guidance).",
            "formulations": "Sitopaladi Churna mixed with honey (strictly >1 year old!), gentle steam inhalation.",
            "therapy": "Warm chest fomentation (Swedana) with warm cloth."
          },
          "mudras": {
            "primary": "Gentle Prana Stroke",
            "technique": "Caregiver lightly strokes baby's chest with warm hands from sternum outward toward shoulders.",
            "duration": "5 minutes.",
            "benefits": "Encourages open bronchial pathways, eases chest wall tightness."
          },
          "yoga": {
            "asanas": [
              "Resting comfortably in caregiver's arms with head elevated 30 degrees"
            ],
            "pranayama": [
              "Caregiver breathes gently and quietly to keep baby calm"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Vitamin A, Hydration.",
            "dietarySources": "Frequent small breastmilk or formula feedings."
          },
          "holisticIntegration": "Instill 2 drops of sterile saline into each nostril before every feeding and before sleep, wait 60 seconds, and gently suction with a bulb syringe to clear tiny nasal passages."
        },
        {
          "id": "baby-5",
          "name": "Teething Distress, Drooling & Mild Febrile State",
          "severity": "Mild to Moderate",
          "category": "Pediatric Developmental",
          "cause": "Eruption of primary deciduous teeth (usually starting with central lower incisors around 6 months) piercing through the periodontal membrane and alveolar gingiva, causing localized gum inflammation.",
          "prevention": "Gentle gum hygiene, wiping drool frequently to prevent facial drool rash, offering clean chilled teething rings.",
          "lifestyle": "Firm chilled rubber teething rings (never frozen solid), massaging baby's gums with a clean damp silicone finger brush, gentle distraction.",
          "medicines": "Infant Acetaminophen (Tylenol) or Infant Ibuprofen (strictly >6 months old) for severe pain/fever. Avoid: Benzocaine gels (risk of methemoglobinemia) and homeopathic belladonna tablets.",
          "ayurveda": {
            "dosha": "Dantodbheda Janya Roga (teething disorder) with Pitta-Kapha elevation.",
            "herbs": "Yashtimadhu, Honey (strictly >1 year old), Amalaki, cooling herbs.",
            "formulations": "Kumar Kalyan Ras (micro-dose under Vaidya supervision), cooling gum rubs.",
            "therapy": "Gentle gum massage with cooled pure organic A2 ghee or coconut oil."
          },
          "mudras": {
            "primary": "Soothe & Calm Touch",
            "technique": "Caregiver applies gentle circular pressure with clean finger wrapped in cold damp gauze over irritated gum ridges.",
            "duration": "2 minutes per gum quadrant.",
            "benefits": "Reduces localized gum edema, provides mechanical counter-pressure relief."
          },
          "yoga": {
            "asanas": [
              "Gentle lap cuddles and rhythmic rocking in rocking chair"
            ],
            "pranayama": [
              "Soothing caregiver humming (Bhramari-like hums calm crying babies)"
            ]
          },
          "vitamins": {
            "deficiencies": "Calcium, Vitamin D3, Vitamin C.",
            "dietarySources": "Chilled pureed fruits (for babies on solids: stewed apples, pears in silicone feeder), breastmilk."
          },
          "holisticIntegration": "Massage baby's swollen gums with a clean finger dipped in cold-pressed organic virgin coconut oil for immediate cooling and anti-inflammatory relief."
        },
        {
          "id": "baby-6",
          "name": "Fontanelle Sunken / Dehydration Assessment",
          "severity": "Critical (Emergency Dehydration Sign)",
          "category": "Neonatal Fluid & Metabolic",
          "cause": "Volume depletion from acute gastroenteritis, fever, or inadequate intake causing reduction in cerebrospinal fluid pressure and intracellular volume, manifesting as a markedly sunken anterior fontanelle.",
          "prevention": "Frequent oral rehydration during diarrhea or vomiting illnesses, monitoring wet diapers (at least 4-6 wet diapers daily), maintaining prompt feeding.",
          "lifestyle": "Offer small, frequent sips of oral rehydration solution (Pedialyte) or breastmilk, monitor tears when crying and moistness of oral mucosa.",
          "medicines": "Oral Rehydration Therapy (WHO-formula ORS / Pedialyte), IV Fluid Resuscitation (Isotonic saline 20mL/kg bolus for severe hypovolemic shock), Treatment of underlying cause.",
          "ayurveda": {
            "dosha": "Trishna Roga and Dhatu Kshaya with acute depletion of Rasa and Udaka Dhatu.",
            "herbs": "Ushira, Chandana, Musta, Shadanga Paniya (pediatric proportion).",
            "formulations": "Shadanga Paniya drops, boiled cooled water with pinch of rock salt and sugar.",
            "therapy": "Snigdha Lepa over head, frequent sips of nourishing fluid."
          },
          "mudras": {
            "primary": "Varun Reflex (Parental Fluid Stabilization)",
            "technique": "Caregiver holds baby close while mindfully holding Varun Mudra (pinky to thumb) during hydration administration.",
            "duration": "Throughout feeding intervals.",
            "benefits": "Fosters calm focused rehydration delivery."
          },
          "yoga": {
            "asanas": [
              "Resting comfortably in caregiver's arms"
            ],
            "pranayama": [
              "Gentle caregiver breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Electrolytes (Sodium, Potassium, Chloride, Bicarbonate), Water.",
            "dietarySources": "Oral Rehydration Solution (Pedialyte), frequent breastmilk feeds."
          },
          "holisticIntegration": "Administer 5-10ml of chilled Pedialyte or breastmilk via oral syringe every 5 minutes during acute fluid loss to ensure steady rehydration without triggering vomiting."
        },
        {
          "id": "baby-7",
          "name": "Infant Dyschezia & Functional Constipation",
          "severity": "Mild to Moderate",
          "category": "Pediatric Functional Motility",
          "cause": "Infant dyschezia: failure to coordinate increased intra-abdominal pressure with pelvic floor relaxation (baby turns red, grunts/cries for 10-20 mins before passing soft normal stool). In older infants: hard stools from transition to solids.",
          "prevention": "Reassurance that infant dyschezia self-resolves by 6-9 months; for constipation on solids: provide adequate dietary water, pureed prunes, pears, peaches, and plums ('P' fruits).",
          "lifestyle": "Avoid invasive rectal stimulation (thermometers/suppositories create psychological dependency), gentle bicycle legs, warm tummy baths.",
          "medicines": "For Dyschezia: Zero medication (purely self-limiting neuromuscular learning). For true hard stool constipation in older infants: Polyethylene Glycol (Miralax), Prune juice (1-2 oz diluted), Lactulose.",
          "ayurveda": {
            "dosha": "Apana Vata Pratilomata in Pakvashaya.",
            "herbs": "Draksha (Raisin water), Haritaki (in micro-drops), Saunf.",
            "formulations": "Draksha Himam, gentle castor oil tummy rubs around navel.",
            "therapy": "Warm water bath and gentle abdominal clockwise massage."
          },
          "mudras": {
            "primary": "Baby Leg Flexion Massage",
            "technique": "Caregiver gently pushes both baby knees upward toward tummy and holds for 5 seconds, releases, and repeats 10 times.",
            "duration": "5 minutes twice daily.",
            "benefits": "Mechanically straightens the anorectal canal, facilitates spontaneous bowel movement."
          },
          "yoga": {
            "asanas": [
              "Baby Pawanmuktasana (Knees to chest)",
              "Baby Butterfly pose"
            ],
            "pranayama": [
              "Relaxing vocal tones from parent"
            ]
          },
          "vitamins": {
            "deficiencies": "Water, Dietary Fiber (if on solid foods), Magnesium.",
            "dietarySources": "Pureed prunes, pears, peas, diluted prune juice, breastmilk."
          },
          "holisticIntegration": "Offer 1-2 ounces of organic prune or pear juice diluted with equal parts water once daily for infants over 6 months with hard stools."
        },
        {
          "id": "baby-8",
          "name": "Acute Otitis Media (Pediatric Middle Ear Infection)",
          "severity": "Moderate to High (Acute Pain)",
          "category": "Pediatric ENT Infectious",
          "cause": "Bacterial (Streptococcus pneumoniae, H. influenzae) or viral superinfection following URI, facilitated by the anatomically shorter, wider, and more horizontal pediatric Eustachian tube.",
          "prevention": "Avoid bottle-feeding while baby is lying flat on back (always feed with head elevated 45 degrees), pneumococcal and flu vaccines, eliminating exposure to secondhand smoke.",
          "lifestyle": "Keep baby's head elevated during feeds and rest, apply a warm dry washcloth gently over the outside of the ear for comfort, avoid getting water into ear canal.",
          "medicines": "Analgesics: Infant Acetaminophen or Ibuprofen (strictly >6 months) for pain control. Antibiotics: High-dose Amoxicillin (80-90 mg/kg/day) or Amoxicillin-Clavulanate, Tympanostomy tubes for recurrent infections.",
          "ayurveda": {
            "dosha": "Karna Shoola in Bala caused by Vata-Kapha accumulation in ear passages.",
            "herbs": "Bilva, Nirgundi, Garlic (Lasuna), Tulsi.",
            "formulations": "Bilmadi Taila, Nirgundi Taila, Karna Bindu (strictly if tympanic membrane is intact!).",
            "therapy": "Warm cloth fomentation over the surrounding jaw and mastoid area."
          },
          "mudras": {
            "primary": "Gentle Soothing Ear Reflex",
            "technique": "Caregiver gently strokes the area immediately in front of and behind baby's ear in a downward motion toward neck lymph nodes.",
            "duration": "3 minutes.",
            "benefits": "Aids lymphatic drainage from the Eustachian tube and middle ear."
          },
          "yoga": {
            "asanas": [
              "Resting upright on parent's chest"
            ],
            "pranayama": [
              "Gentle parent lullabies (calms autonomic distress)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Zinc, Vitamin C.",
            "dietarySources": "Breastmilk (contains maternal IgA antibodies protecting against ear pathogens)."
          },
          "holisticIntegration": "Hold baby at a 45-degree angle during all feedings to prevent retrograde flow of milk into the horizontal infant Eustachian tubes."
        },
        {
          "id": "baby-9",
          "name": "Failure to Thrive & Pediatric Nutrient Malabsorption",
          "severity": "High / Chronic Growth Failure",
          "category": "Pediatric Metabolic-Nutritional",
          "cause": "Suboptimal weight gain falling below the 3rd to 5th percentile or crossing two major percentile lines on WHO growth charts, due to inadequate caloric intake, malabsorption (celiac, cystic fibrosis), or high metabolic demand.",
          "prevention": "Lactation support for breastfeeding mothers, monitoring growth curves at well-child checks, early identification and management of tongue tie (ankyloglossia) or feeding aversion.",
          "lifestyle": "Structured stress-free feeding routines, high-calorie density foods for infants on solids (avocado, nut butters, olive oil, whole milk yogurt), peaceful dining environment.",
          "medicines": "Calorie fortification of breastmilk/formula, Pancreatic enzymes (if CF), Gluten-free diet (if celiac), Multivitamin supplementation, Pediatric GI/Endocrine evaluation.",
          "ayurveda": {
            "dosha": "Phakka Roga and Karshya caused by Rasa Dhatu Kshaya and Agnimandya.",
            "herbs": "Ashwagandha (Bala Rasayana), Shatavari, Bala, Vidari, Pippali.",
            "formulations": "Ashwagandhadi Leha, Arvindasava (classical pediatric tonic), Kumar Kalyan Ras.",
            "therapy": "Bala Abhyanga with warm Ksheerabala or Lakshadi oil to nourish skin and muscle tissue."
          },
          "mudras": {
            "primary": "Prithvi Touch (Grounding Nutritional Stroke)",
            "technique": "Caregiver performs full-body warm oil massage (Abhyanga) using warm Lakshadi or sesame oil, focusing on long strokes along limbs and circular strokes over joints.",
            "duration": "15 minutes daily before morning bath.",
            "benefits": "Clinically proven to accelerate infant weight gain and neuromuscular development via cutaneous tactile stimulation."
          },
          "yoga": {
            "asanas": [
              "Gentle baby limb stretching during massage",
              "Daily assisted tummy time"
            ],
            "pranayama": [
              "Calming parental breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Iron (Ferritin), Zinc (critical for pediatric growth velocity), Vitamin D3, Vitamin B12, Protein.",
            "dietarySources": "Avocados, pureed egg yolk, full-fat Greek yogurt, nut butters, sweet potatoes with ghee, iron-fortified cereals."
          },
          "holisticIntegration": "Perform daily 15-minute warm Lakshadi or coconut oil baby massage (Abhyanga) before bath—proven in randomized trials to significantly improve weight velocity and sleep."
        },
        {
          "id": "baby-10",
          "name": "Pediatric Rickets & Nutritional Vitamin D Deficiency",
          "severity": "High / Structural Skeletal",
          "category": "Pediatric Metabolic Bone Disease",
          "cause": "Defective mineralization of growing bone osteoid at the physeal plates caused by Vitamin D deficiency, inadequate dietary calcium, or phosphate wasting; leads to craniotabes, rachitic rosary, and bowed legs (genu varum).",
          "prevention": "Routine daily Vitamin D supplementation (400 IU/day) starting in the first days of life for all breastfed infants, adequate maternal Vitamin D status during pregnancy.",
          "lifestyle": "Safe outdoor exposure to mild morning sunlight (10-15 minutes), ensuring calcium-rich weaning foods once solids are introduced.",
          "medicines": "High-dose Vitamin D repletion (Stoss therapy: 1000-5000 IU daily or 50,000 IU weekly for 6-12 weeks under pediatric supervision) + Calcium supplementation (30-75 mg/kg/day).",
          "ayurveda": {
            "dosha": "Asthi Dhatu Kshaya and Phakka Roga with severe Vata-Kapha deficiency.",
            "herbs": "Asthisamharaka, Ashwagandha, Bala, Praval, Mukta.",
            "formulations": "Praval Pishti in honey/milk, Lakshadi Taila Abhyanga, Arvindasava.",
            "therapy": "Abhyanga with Lakshadi Taila followed by exposure to gentle morning sunlight."
          },
          "mudras": {
            "primary": "Prithvi Touch (Bone Mineralization Stroke)",
            "technique": "Gentle parental stroking along baby's long bones (femur, tibia, humerus) with warm vitamin-rich herbal oil.",
            "duration": "10 minutes in morning sun.",
            "benefits": "Stimulates local bone mineralization and muscular strength."
          },
          "yoga": {
            "asanas": [
              "Supported baby standing on caregiver's lap (gentle weight-bearing)",
              "Tummy time"
            ],
            "pranayama": [
              "Caregiver calm deep breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (Cholecalciferol - non-negotiable 400 IU daily), Calcium, Phosphorus, Alkaline Phosphatase elevation.",
            "dietarySources": "Daily Vitamin D3 drops (400 IU), breastmilk/formula, whole milk yogurt (after 6-9 months), egg yolks, salmon puree."
          },
          "holisticIntegration": "Give 1 drop of Vitamin D3 (400 IU) directly into baby's mouth or on mother's nipple before nursing every single day without interruption."
        }
      ]
    },
    "head_scalp": {
      "id": "head_scalp",
      "name": "Head, Hair & Scalp",
      "layer": "externals",
      "category": "Cranial & Dermatological",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Protects the cranial vault, regulates thermal homeostasis, houses hair follicles, sebaceous glands, and sensory cranial nerve terminals.",
      "topDiseases": [
        {
          "id": "head-1",
          "name": "Androgenetic Alopecia (Male & Female Pattern Hair Loss)",
          "severity": "Mild to Moderate",
          "category": "Dermatological Endocrine",
          "cause": "Genetically determined sensitivity of scalp hair follicles to dihydrotestosterone (DHT) binding, causing follicular miniaturization and shorter anagen growth phases.",
          "prevention": "Early intervention with DHT-blocking botanicals, gentle scalp hygiene, avoiding tight traction hairstyles, minimizing chronic scalp inflammation.",
          "lifestyle": "Daily 5-minute scalp massage to increase capillary microcirculation, silk or satin pillowcases, avoid hot blow dryers and chemical relaxers.",
          "medicines": "Topical Minoxidil (5% solution/foam), Oral Finasteride (1mg daily for men), Oral Dutasteride, Spironolactone (for women), Low-Level Laser Therapy (LLLT), PRP injections.",
          "ayurveda": {
            "dosha": "Khalitya caused by Pitta burning hair roots (Romakupa) combined with Vata-Kapha blockage.",
            "herbs": "Bhringraj (Eclipta alba - 'ruler of hair'), Amla, Brahmi, Methi (Fenugreek), Hibiscus (Japa).",
            "formulations": "Bhringamalakadi Taila, Neelibhringadi Taila, Narasimha Rasayana, Saptamrit Lauha.",
            "therapy": "Shiroabhyanga (warm oil head massage) with Bhringraj oil, Nasya with Anu Taila."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Earth / Tissue Growth Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly strengthens hair follicles, stimulates keratin matrix synthesis, balances scalp sebum."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana (Downward Dog - inverts blood flow to scalp)",
              "Sarvangasana (Shoulderstand)",
              "Sasangasana (Rabbit Pose)",
              "Vajrasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Ferritin / Iron (optimal ferritin >50 ng/mL for hair regrowth), Vitamin D3, Biotin, Zinc, Pumpkin Seed Oil (natural DHT inhibitor).",
            "dietarySources": "Pumpkin seeds, soaked almonds, curry leaves, amla juice, organic pastured eggs, spinach."
          },
          "holisticIntegration": "Chew 5 fresh curry leaves and drink 20ml fresh Amla juice every morning. Massage warm Neelibhringadi oil into scalp for 10 minutes before bed twice weekly."
        },
        {
          "id": "head-2",
          "name": "Alopecia Areata (Autoimmune Patchy Hair Loss)",
          "severity": "Moderate",
          "category": "Autoimmune Dermatological",
          "cause": "Collapse of hair follicle immune privilege with dense CD4+ and CD8+ T-cell lymphocytic infiltration around anagen hair bulbs ('swarm of bees'), causing circular patchy bald spots.",
          "prevention": "Manage systemic autoimmune triggers, optimize gut microbiome, screen for celiac disease and Hashimoto's thyroiditis.",
          "lifestyle": "Anti-inflammatory autoimmune protocol diet, gentle scalp care with natural cleansers, stress reduction protocols.",
          "medicines": "Intralesional Corticosteroid Injections (Triamcinolone acetonide - first-line), Topical Immunotherapy (DPCP), Oral JAK Inhibitors (Baricitinib, Ritlecitinib - groundbreaking FDA approval).",
          "ayurveda": {
            "dosha": "Indralupta caused by aggravated Pitta and Rakta Dhatu Dushti obstructing hair pores.",
            "herbs": "Gunja (Abrus precatorius - applied with clinical caution), Bhringraj, Neem, Haridra, Guduchi.",
            "formulations": "Karanja Taila, Mahatiktaka Ghrita, Kaishore Guggulu, Amritarishta.",
            "therapy": "Prachhana (gentle scalp micropuncturing/dermal stimulation) followed by herbal oil."
          },
          "mudras": {
            "primary": "Prana Mudra (Immune Fortification Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Re-establishes immune equilibrium, dampens autoimmune attack on hair follicles."
          },
          "yoga": {
            "asanas": [
              "Balasana (Child's Pose)",
              "Viparita Karani",
              "Shavasana",
              "Marjaryasana-Bitilasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (crucial for immune tolerance), Zinc, Quercetin, Vitamin B12, Iron.",
            "dietarySources": "Bone broth, blueberries, wild salmon, pumpkin seeds, turmeric golden tea."
          },
          "holisticIntegration": "Rub a freshly cut slice of organic red onion or ginger gently over the patchy bald area for 2 minutes daily; the natural sulfur and quercetin stimulate dermal papilla blood flow."
        },
        {
          "id": "head-3",
          "name": "Dandruff & Seborrheic Dermatitis (Scalp)",
          "severity": "Mild to Moderate",
          "category": "Mycological / Inflammatory",
          "cause": "Overproliferation of lipophilic Malassezia yeasts (M. globosa, M. restricta) feeding on scalp sebum, producing irritating oleic acid that triggers hyperproliferation of stratum corneum and flaky scales.",
          "prevention": "Wash hair regularly to prevent sebum buildup, avoid heavy greasy hair oils that feed Malassezia, maintain clean combs and pillowcases.",
          "lifestyle": "Avoid excessively hot water showers (strips scalp barrier), manage emotional stress (which triggers sebum production), eat a low-sugar anti-inflammatory diet.",
          "medicines": "Ketoconazole 2% shampoo, Zinc Pyrithione, Selenium Sulfide, Ciclopirox shampoo, Topical Corticosteroid lotions (Fluocinolone) for acute flares.",
          "ayurveda": {
            "dosha": "Darunaka caused by aggravated Vata and Kapha leading to dryness, scaling, and itching.",
            "herbs": "Neem (Azadirachta indica - powerful antifungal), Triphala, Lemon, Tea tree, Methi (Fenugreek).",
            "formulations": "Durdhurapatradi Taila, Karanja Taila, Arogyavardhini Vati, Khadirarishta.",
            "therapy": "Shiro-Pichu (oil-soaked cotton pad on crown) with Neem-infused coconut oil."
          },
          "mudras": {
            "primary": "Varun Mudra (Moisture & Fluid Balancing Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Regulates sebaceous moisture, prevents excessive scalp dryness and flaky irritation."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana",
              "Tadasana",
              "Paschimottanasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari",
              "Anulom Vilom",
              "Kapalbhati (gentle)"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin B6, Biotin, Omega-3 fatty acids, Probiotics.",
            "dietarySources": "Pumpkin seeds, organic eggs, walnuts, apple cider vinegar rinse, wild salmon, green tea."
          },
          "holisticIntegration": "Mix 2 tbsp pure organic apple cider vinegar with 1 cup warm water and 5 drops tea tree oil; rinse through scalp after washing, leave for 5 minutes, then rinse with cool water."
        },
        {
          "id": "head-4",
          "name": "Scalp Psoriasis",
          "severity": "Moderate to High",
          "category": "Autoimmune Papulosquamous",
          "cause": "Immune-mediated acceleration of epidermal keratinocyte turnover (3-4 days instead of 28 days) driven by IL-23/IL-17 axis, producing well-demarcated silvery-white thick plaques extending beyond hairline.",
          "prevention": "Avoid scratching or picking scales (Koebner phenomenon worsens lesions), gentle soft bristle brushing, moisturizing scalp immediately post-wash.",
          "lifestyle": "Use salicylic acid or mineral oil to gently soften thick plaques before washing, avoid alcohol and smoking, daily moderate scalp sun exposure.",
          "medicines": "Topical High-potency Corticosteroids (Clobetasol shampoo/foam) + Topical Vitamin D3 analogues (Calcipotriene), Coal Tar shampoo, Biologics (Bimekizumab, Secukinumab) for moderate-severe.",
          "ayurveda": {
            "dosha": "Eka-Kushtha / Kitibha with severe Vata-Kapha vitiation and Rakta Dushti.",
            "herbs": "Khadira (Acacia catechu - premier skin herb), Neem, Manjistha, Bakuchi, Haridra.",
            "formulations": "Mahatiktaka Ghrita, Kaishore Guggulu, Khadirarishta, 777 Oil (Wrightia tinctoria).",
            "therapy": "Takradhara on the head with Neem and Amla medicated buttermilk, Shodhan Virechana."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Varun Mudra",
            "technique": "Touch ring and pinky tips to thumb tip for 15 mins; then pinky tip to thumb tip for 10 mins.",
            "duration": "25 minutes daily.",
            "benefits": "Soothes systemic cutaneous auto-inflammation, restores epidermal cellular turnover harmony."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Setu Bandhasana",
              "Shavasana (20 mins)"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (optimal >50 ng/mL), Omega-3 fatty acids (3g daily), Zinc, Folate.",
            "dietarySources": "Wild oily fish, turmeric golden milk, flaxseeds, blueberries, steamed greens, bone broth."
          },
          "holisticIntegration": "Apply Wrightia tinctoria (777 Oil) or pure organic coconut oil infused with neem and turmeric over scalp plaques 30 minutes before washing with a gentle coal tar shampoo."
        },
        {
          "id": "head-5",
          "name": "Tension-Type Headache (TTH) & Scalp Tenderness",
          "severity": "Mild to Moderate",
          "category": "Musculoskeletal Neurological",
          "cause": "Sustained involuntary contraction and myofascial trigger points in the pericranial muscles (frontalis, temporalis, trapezius, suboccipital) with central sensitization of pain pathways.",
          "prevention": "Frequent postural corrections during computer work, ergonomic desk chair, managing emotional tension, daily neck and shoulder stretching.",
          "lifestyle": "Apply warm compresses to neck and temples, practice 10-minute eye rest breaks every hour, stay hydrated, maintain regular meal intervals.",
          "medicines": "Acute: Acetaminophen, NSAIDs (Ibuprofen, Naproxen), Aspirin. Prophylaxis (for chronic TTH): Low-dose Amitriptyline (10-25mg at bedtime), Mirtazapine, Physical therapy.",
          "ayurveda": {
            "dosha": "Shirahshoola caused by Vata and Pitta vitiation constricting cranial micro-vessels and nerves.",
            "herbs": "Brahmi, Shankhpushpi, Ashwagandha, Jatamansi, Godanti Bhasma.",
            "formulations": "Shirashooladi Vajra Ras, Pathyadi Kadha, Saraswatarishta.",
            "therapy": "Shiroabhyanga with warm Brahmi or Ksheerabala oil, gentle temple pressure points."
          },
          "mudras": {
            "primary": "Mahasirs Mudra (Headache Relief Mudra)",
            "technique": "Touch tips of thumb, index, and middle fingers together; fold ring finger into palm; extend pinky finger straight.",
            "duration": "15 minutes in a quiet, dimly lit room.",
            "benefits": "Immediately relieves tension in temples, forehead, and suboccipital muscles."
          },
          "yoga": {
            "asanas": [
              "Balasana (Child's Pose)",
              "Uttanasana (Gentle Standing Forward Fold)",
              "Marjaryasana-Bitilasana",
              "Shavasana with eye pillow"
            ],
            "pranayama": [
              "Bhramari Pranayama (Humming Bee Breath - 10 rounds)",
              "Chandra Bhedana",
              "Slow Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Vitamin B2 (Riboflavin), CoQ10, Hydration.",
            "dietarySources": "Almonds, pumpkin seeds, chamomile tea, spinach, avocados, peppermint tea."
          },
          "holisticIntegration": "Massage 1 drop of pure organic peppermint essential oil diluted in 1 tsp coconut oil across temples and forehead for instant tension release."
        },
        {
          "id": "head-6",
          "name": "Folliculitis & Scalp Acne",
          "severity": "Moderate",
          "category": "Pustular Infectious",
          "cause": "Inflammation and bacterial (Staphylococcus aureus, Cutibacterium acnes) or fungal infection of scalp hair follicles, triggered by occlusive pomades, sweat retention, or scalp scratching.",
          "prevention": "Wash scalp immediately following heavy workouts, avoid occlusive petroleum-based hair greases, sanitize workout hats and helmets regularly.",
          "lifestyle": "Use non-comedogenic shampoo, avoid picking or popping pustules (which spreads infection), change pillowcases every 3 days.",
          "medicines": "Topical Clindamycin lotion, Benzoyl peroxide washes, Oral Doxycycline (for severe bacterial folliculitis), Oral Fluconazole (if fungal Malassezia folliculitis).",
          "ayurveda": {
            "dosha": "Pidika and Vrana in Romakupa caused by Pitta-Kapha and Rakta Dushti.",
            "herbs": "Neem, Haridra, Manjistha, Sariva, Khadira.",
            "formulations": "Kaishore Guggulu, Arogyavardhini Vati, Mahamanjishtadi Kwath, Khadirarishta.",
            "therapy": "Scalp wash with warm Neem and Triphala decoction."
          },
          "mudras": {
            "primary": "Varun Mudra (Blood Cleansing Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Cools internal fiery toxic heat (Rakta-Pitta), clears cutaneous eruptions."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Adho Mukha Svanasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama",
              "Kapalbhati (gentle)"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (regulates sebum and bacterial growth), Vitamin A, Vitamin C, Omega-3.",
            "dietarySources": "Pumpkin seeds, green tea, turmeric water, berries, steamed vegetables."
          },
          "holisticIntegration": "Rinse scalp with warm Neem leaf tea (boiled and cooled) after shampooing to naturally disinfect hair follicles without stripping moisture."
        },
        {
          "id": "head-7",
          "name": "Telogen Effluvium (Acute & Chronic Hair Shedding)",
          "severity": "Moderate",
          "category": "Stress-Induced Follicular Shift",
          "cause": "Premature, synchronized shift of large numbers of anagen (growing) hair follicles into the telogen (resting/shedding) phase triggered 2-3 months after severe physiologic stress (high fever, COVID-19, childbirth, surgery, severe calorie restriction).",
          "prevention": "Avoid crash fasting or protein-deficient diets, optimize convalescent nutrition during severe illnesses, stress resilience management.",
          "lifestyle": "Reassurance that hair follicles remain alive and hair will spontaneously regrow over 6-9 months, gentle detangling with wide-toothed comb, protein-rich diet.",
          "medicines": "Address underlying trigger (iron deficiency, thyroid disorder), Topical Minoxidil (can accelerate anagen re-entry), Nutritional supplementation.",
          "ayurveda": {
            "dosha": "Khalitya and Dhatu Kshaya following Jwara (fever) or Shoka (acute grief).",
            "herbs": "Bhringraj, Amalaki, Ashwagandha, Shatavari, Brahmi.",
            "formulations": "Narasimha Rasayana, Chyawanprash, Bhringamalakadi Taila, Saptamrit Lauha.",
            "therapy": "Snigdha Shiroabhyanga with warm Brahmi-Amla oil, Rasayana therapy."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Regeneration Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates anagen follicle activation, builds foundational physical stamina."
          },
          "yoga": {
            "asanas": [
              "Sarvangasana (Supported Shoulderstand)",
              "Viparita Karani",
              "Balasana",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Deep Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Ferritin (Iron stores), Vitamin D3, Zinc, Essential Amino Acids (Lysine, Cysteine), Biotin.",
            "dietarySources": "Pastured eggs, bone broth, lentils, pumpkin seeds, amla, dark leafy greens, walnuts."
          },
          "holisticIntegration": "Take 1 tsp organic Chyawanprash in the morning with warm water, and consume 1 tablespoon of soaked chia and pumpkin seeds to deliver essential amino acids to regrowing hair follicles."
        },
        {
          "id": "head-8",
          "name": "Trichotillomania (Hair Pulling Disorder)",
          "severity": "Moderate to High",
          "category": "Neuro-Psychiatric / BFRB",
          "cause": "Body-focused repetitive behavior characterized by recurrent, irresistible urges to pull out hair from the scalp, eyebrows, or eyelashes, linked to frontostriatal dysregulation, OCD spectrum, and anxiety relief.",
          "prevention": "Habit Reversal Training (HRT), cognitive behavioral therapy, early identification of sensory triggers (boredom, screen trance, stress).",
          "lifestyle": "Keep hands busy with tactile sensory fidgets (stress balls, textured rings), wear gentle band-aids on thumbs or fingertips during high-risk times (reading, watching TV), keep hair trimmed or covered.",
          "medicines": "N-Acetylcysteine (NAC 1200-2400mg daily - proven in double-blind trials to modulate glutamate and reduce hair-pulling urges), SSRIs, Olanzapine (low-dose adjunctive).",
          "ayurveda": {
            "dosha": "Mano-Vibharama and Chitta Udvega with hyperactive Vata and Tamas.",
            "herbs": "Brahmi, Shankhpushpi, Jatamansi, Ashwagandha, Tagara.",
            "formulations": "Manasamitra Vatika, Saraswatarishta, Brahmi Ghrita, Kalyanaka Ghrita.",
            "therapy": "Shirodhara with warm Brahmi oil to calm compulsive cranial motor reflexes."
          },
          "mudras": {
            "primary": "Gyan Mudra (Mind & Impulse Mastery Mudra)",
            "technique": "Touch tip of index finger to tip of thumb, forming a circle. Rest hands on knees.",
            "duration": "20 minutes daily.",
            "benefits": "Calms subconscious motor fidgeting, enhances executive prefrontal impulse control."
          },
          "yoga": {
            "asanas": [
              "Balasana",
              "Vrikshasana (Balance focus)",
              "Supta Baddha Konasana",
              "Shavasana with body scan"
            ],
            "pranayama": [
              "Bhramari Pranayama with Shanmukhi Mudra",
              "Nadi Shodhana",
              "4-7-8 Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "N-Acetylcysteine (NAC 1200-2400mg daily), Inositol, Magnesium Glycinate, Vitamin B6.",
            "dietarySources": "Sulfur-rich foods (onions, garlic, broccoli), dark berries, chamomile tea, pumpkin seeds, walnuts."
          },
          "holisticIntegration": "Take 600mg NAC morning and evening. Whenever the subconscious urge to pull arises, immediately hold a textured tactile stress toy and take 5 deep belly breaths."
        },
        {
          "id": "head-9",
          "name": "Tinea Capitis (Scalp Ringworm)",
          "severity": "Moderate (Contagious)",
          "category": "Fungal Dermatological",
          "cause": "Dermatophyte fungal infection of scalp hair shafts and follicles (most commonly Trichophyton tonsurans or Microsporum canis), causing scaly circular patches, broken 'black dot' hairs, and inflammatory kerion.",
          "prevention": "Avoid sharing hats, combs, brushes, pillows, or hair clippers; sanitize barber tools; screen and treat household pets for ringworm.",
          "lifestyle": "Wash pillowcases, hats, and combs in hot water (60°C) with antifungal laundry disinfectant, avoid scratching.",
          "medicines": "Oral Antifungals (strictly required; topical creams cannot penetrate the hair shaft lumen!): Oral Griseofulvin (first line for Microsporum), Oral Terbinafine (first line for Trichophyton), Ketoconazole shampoo adjunctive.",
          "ayurveda": {
            "dosha": "Krimi and Dadru Kushtha on the Shirah with Pitta-Kapha vitiation.",
            "herbs": "Neem, Karanja, Bakuchi, Haridra, Tulsi, Vidanga.",
            "formulations": "Karanja Taila, Mahatiktaka Ghrita, Kaishore Guggulu, Khadirarishta.",
            "therapy": "Lepa with fresh Neem leaf and turmeric paste applied externally to patches."
          },
          "mudras": {
            "primary": "Prana Mudra (Fungal Immune Defense)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep other two fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Enhances systemic cell-mediated immunity to eradicate dermatophytes."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Shavasana",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin A, Vitamin C, Vitamin D3.",
            "dietarySources": "Garlic (natural allicin), coconut oil (caprylic acid), pumpkin seeds, green tea, berries."
          },
          "holisticIntegration": "Apply pure Karanja or Neem oil mixed with virgin coconut oil to the affected scalp patches twice daily to inhibit fungal mycelial spread."
        },
        {
          "id": "head-10",
          "name": "Pediculosis Capitis (Head Lice Infestation)",
          "severity": "Mild to Moderate (Highly Contagious)",
          "category": "Parasitic Ectoparasitic",
          "cause": "Infestation of scalp hair by the obligate human ectoparasite Pediculus humanus capitis, feeding on host blood and cementing oval nits (eggs) firmly to the base of hair shafts, predominantly via direct head-to-head contact.",
          "prevention": "Avoid direct head-to-head contact during play, avoid sharing brushes, hats, or hair ties; perform routine wet combing checks.",
          "lifestyle": "Wet combing with a fine-toothed metal nit comb (100% effective when done meticulously every 3 days for 2 weeks), machine wash bedding and hats in hot water.",
          "medicines": "Topical Pediculicides: Permethrin 1% lotion (repeat in 9 days), Ivermectin 0.5% lotion, Spinosad 0.9% suspension, Malathion 0.5% lotion, Dimethicone 4% lotion (physically suffocates lice without neurotoxicity).",
          "ayurveda": {
            "dosha": "Shirah-Krimi (Yuka and Liksha) in the Kesha.",
            "herbs": "Neem, Tulsi, Sitaphal seed (Custard apple seed - classical pediculicide), Camphor (Karpoora).",
            "formulations": "Neem oil application, Karpooradi Taila, Triphala wash.",
            "therapy": "Scalp application of pure Neem oil mixed with a small pinch of edible camphor."
          },
          "mudras": {
            "primary": "Apana Mudra (Parasite Elimination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky fingers straight.",
            "duration": "15 minutes daily.",
            "benefits": "Supports systemic parasite and bio-toxin clearance."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Balasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Immune support vitamins (Zinc, Vitamin C).",
            "dietarySources": "Garlic, green vegetables, fresh fruits, pumpkin seeds."
          },
          "holisticIntegration": "Saturate scalp and hair with pure cold-pressed coconut oil mixed with 10 drops tea tree oil and 10 drops neem oil; cover with shower cap for 2 hours, then meticulously comb out with a metal nit comb."
        }
      ]
    },
    "eyes": {
      "id": "eyes",
      "name": "Eyes & Vision (Ophthalmology)",
      "layer": "externals",
      "category": "Visual & Ophthalmic",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Specialized sensory organs converting light photons into neural impulses via photoreceptor rods and cones, transmitting to visual cortex.",
      "topDiseases": [
        {
          "id": "eyes-1",
          "name": "Cataracts (Nuclear, Cortical & Posterior Subcapsular)",
          "severity": "Moderate (Reversible Blindness)",
          "category": "Ophthalmic Degenerative",
          "cause": "Oxidative aggregation, cross-linking, and opacification of crystalline lens proteins (crystallins), impairing light transmission to the retina, caused by aging, UV radiation, smoking, or diabetes.",
          "prevention": "100% UV-blocking sunglasses (UV400), smoking cessation, tight glycemic control, high antioxidant intake (lutein, zeaxanthin).",
          "lifestyle": "Wear wide-brimmed hats outdoors, avoid prolonged bright sunlight glare, ensure good indoor lighting for reading.",
          "medicines": "Definitive cure: Phacoemulsification with Intraocular Lens (IOL) implantation (monofocal, multifocal, or toric IOLs).",
          "ayurveda": {
            "dosha": "Timira progressing to Linganasha (cataract) caused by aggravated Pitta (Alochaka Pitta) and Vata.",
            "herbs": "Triphala, Saptamrit Lauha, Yashtimadhu, Amalaki, Rose water (Gulab jal).",
            "formulations": "Saptamrit Lauha, Triphala Ghrita, Maha Triphala Ghrita, Elaneer Kuzhampu (eye drops).",
            "therapy": "Netra Tarpana (retaining warm medicated Triphala Ghrita in a flour dam over eyes for 15 mins)."
          },
          "mudras": {
            "primary": "Prana Mudra (Eye & Vision Restoring Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Classically acclaimed as the premier eye-strengthening mudra; channels vital life force to ocular photoreceptors."
          },
          "yoga": {
            "asanas": [
              "Trataka (Candle Gazing Meditation - fix gaze on candle flame without blinking for 2 mins, close eyes and visualize)",
              "Sarvangasana",
              "Shirshasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Bhramari Pranayama",
              "Nadi Shodhana Pranayama",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Lutein (10mg) & Zeaxanthin (2mg - macular and lens carotenoids), Vitamin C, Vitamin E, Zinc, Astaxanthin.",
            "dietarySources": "Dark leafy greens (kale, spinach), pasture-raised egg yolks, blueberries, carrots, corn, orange bell peppers."
          },
          "holisticIntegration": "Wash eyes every morning with cool Triphala eye wash (1/2 tsp Triphala powder steeped in boiled filtered water overnight and strained through fine muslin cloth)."
        },
        {
          "id": "eyes-2",
          "name": "Glaucoma (Primary Open-Angle & Acute Angle-Closure)",
          "severity": "Critical (Irreversible Vision Loss)",
          "category": "Optic Neuropathy",
          "cause": "Progressive death of retinal ganglion cells and optic nerve axon loss, commonly driven by elevated intraocular pressure (IOP) from trabecular meshwork outflow resistance.",
          "prevention": "Routine comprehensive eye exams with tonometry and visual field testing every 1-2 years, screening first-degree relatives.",
          "lifestyle": "Avoid playing high-resistance brass musical instruments with Valsalva, avoid inverted yoga poses (headstands raise IOP by 100%!), avoid tight neckties.",
          "medicines": "Prostaglandin analogues (Latanoprost, Bimatoprost - first line), Beta-blockers (Timolol), Alpha-2 agonists (Brimonidine), Rho-kinase inhibitors (Netarsudil), Selective Laser Trabeculoplasty (SLT), Trabeculectomy.",
          "ayurveda": {
            "dosha": "Adhimantha (ocular hypertension) with severe Pitta-Vata pressure in Alochaka Pitta.",
            "herbs": "Punarnava, Triphala, Gokshura, Yashtimadhu, Chandana.",
            "formulations": "Punarnavadi Kwath, Triphala Ghrita, Chandraprabha Vati, Saptamrit Lauha.",
            "therapy": "Netra Seka (gentle ocular irrigation) with cooling decoctions, Nasya with Anu Taila."
          },
          "mudras": {
            "primary": "Apana Mudra (Ocular Pressure Relieving Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep other fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes downward drainage, relieves intra-cranial and intra-ocular fluid pressure."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana (Deep ocular relaxation)"
            ],
            "pranayama": [
              "Slow Nadi Shodhana (No retention!)",
              "Bhramari Pranayama",
              "Sheetali"
            ],
            "cautions": "Strictly contraindicated: Sirshasana (Headstand) and Adho Mukha Svanasana held for prolonged times."
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10 (retinal ganglion neuroprotection), Citicoline (500mg daily - proven neuroprotective in glaucoma), Magnesium, Ginkgo Biloba.",
            "dietarySources": "Dark leafy greens, bilberries, walnuts, green tea, pomegranate juice."
          },
          "holisticIntegration": "Take 500mg Citicoline and 100mg CoQ10 daily to provide neuroprotective shielding for optic nerve axons."
        },
        {
          "id": "eyes-3",
          "name": "Dry Eye Disease (DED - Evaporative & Aqueous Deficient)",
          "severity": "Mild to Moderate",
          "category": "Ocular Surface Disorder",
          "cause": "Loss of tear film homeostasis caused by Meibomian Gland Dysfunction (MGD - 85% evaporative lipid deficiency) or lacrimal gland hyposecretion (aqueous deficiency, Sjogren's syndrome).",
          "prevention": "Follow the 20-20-20 rule during screen use (every 20 mins, look 20 feet away for 20 seconds and blink fully), use warm eyelid compresses, avoid direct drafts from fans/AC.",
          "lifestyle": "Run a cool-mist humidifier by your desk/bed, wear wraparound sunglasses in windy climates, avoid rubbing eyes, practice conscious full blinks.",
          "medicines": "Preservative-free artificial tears (Carboxymethylcellulose, Hyaluronic acid), Cyclosporine eye drops (Restasis, Cequa), Lifitegrast (Xiidra), Varenicline nasal spray (Tyrvaya), Punctal Plugs.",
          "ayurveda": {
            "dosha": "Shushkakshipaka caused by aggravated Vata and Pitta drying out the natural tears and conjunctiva.",
            "herbs": "Triphala, Ghrita (A2 Cow Ghee), Yashtimadhu, Shatavari, Rose water.",
            "formulations": "Triphala Ghrita, Jeevantyadi Ghrita, Saptamrit Lauha.",
            "therapy": "Netra Tarpana with warm pure A2 cow ghee (unrivaled lubrication for Meibomian glands)."
          },
          "mudras": {
            "primary": "Varun Mudra (Tear Film & Moisture Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates lacrimal and Meibomian secretory glands, restores mucosal moisture."
          },
          "yoga": {
            "asanas": [
              "Palming (Rub hands together until warm and cup palms gently over closed eyes for 2 mins)",
              "Eye Roll Rotations (Gentle clock cycles)",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama",
              "Nadi Shodhana Pranayama",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Omega-3 Fatty Acids (EPA/DHA 2000mg - clinically proven to improve Meibomian lipid quality), Vitamin A, Vitamin D3, Astaxanthin.",
            "dietarySources": "Wild salmon, chia seeds, walnuts, grass-fed ghee, dark orange squashes, pastured egg yolks."
          },
          "holisticIntegration": "Practice Eye Palming for 2 minutes three times a day. Apply a warm moist washcloth over closed eyelids for 5 minutes every night to melt clogged Meibomian oils."
        },
        {
          "id": "eyes-4",
          "name": "Age-Related Macular Degeneration (AMD - Dry & Wet)",
          "severity": "High / Progressive",
          "category": "Retinal Degenerative",
          "cause": "Accumulation of extracellular lipofuscin debris (drusen) beneath retinal pigment epithelium (Dry AMD 90%) or choroidal neovascularization with vascular leakage (Wet AMD 10%).",
          "prevention": "Permanent smoking cessation (smoking increases AMD risk by 400%!), daily consumption of dark leafy greens, wearing UV and blue-light protective lenses.",
          "lifestyle": "Monitor central vision weekly using an Amsler grid (report waviness/scotomas immediately), Mediterranean diet, protect eyes from intense blue light.",
          "medicines": "For Dry AMD: AREDS2 formula supplements. For Wet AMD: Intravitreal Anti-VEGF Injections (Aflibercept, Ranibizumab, Faricimab - halts vascular leakage).",
          "ayurveda": {
            "dosha": "Drishti Dushti / Patala Roga with deep Majja and Rakta Dhatu degeneration.",
            "herbs": "Triphala, Saptamrit Lauha, Shatavari, Amalaki, Ashwagandha.",
            "formulations": "Saptamrit Lauha, Maha Triphala Ghrita, Narasimha Rasayana, Chyawanprash.",
            "therapy": "Netra Tarpana with Maha Triphala Ghrita and Pratimarsha Nasya with Anu Taila."
          },
          "mudras": {
            "primary": "Prana Mudra (Macular Photoreceptor Vitality)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "25 minutes daily.",
            "benefits": "Supports retinal micro-capillary perfusion, enhances photoreceptor metabolic resilience."
          },
          "yoga": {
            "asanas": [
              "Trataka (Gentle on distant natural object)",
              "Vajrasana",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama",
              "Nadi Shodhana",
              "Soft Dirga Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "AREDS2 Formulation: Lutein (10mg), Zeaxanthin (2mg), Vitamin C (500mg), Vitamin E (400 IU), Zinc (80mg), Copper (2mg).",
            "dietarySources": "Kale, spinach, orange bell peppers, egg yolks, blueberries, wild salmon."
          },
          "holisticIntegration": "Consume 1 cup of lightly steamed kale or spinach seasoned with olive oil and 1 pasture-raised egg yolk daily to naturally match the clinically proven AREDS2 carotenoid profile."
        },
        {
          "id": "eyes-5",
          "name": "Computer Vision Syndrome (Digital Eye Strain / Asthenopia)",
          "severity": "Mild to Moderate",
          "category": "Occupational Visual Fatigue",
          "cause": "Prolonged ciliary muscle spasm, accommodative lag, and decreased blink rate (from normal 18/min down to 4-6/min during screen gazing), causing ocular fatigue, blurred vision, and brow aches.",
          "prevention": "Strictly follow the 20-20-20 rule, position screen 20-28 inches away with top of monitor at or slightly below eye level, eliminate screen glare with anti-glare filters.",
          "lifestyle": "Adjust screen brightness to match room ambient light, increase text font size, blink intentionally and fully, take hourly screen breaks.",
          "medicines": "Preservative-free lubricating eye drops, Blue-light filtering prescription computer glasses, Low-dose Cyclopentolate for acute ciliary spasm.",
          "ayurveda": {
            "dosha": "Netra Shrama caused by excessive Vata-Pitta exhaustion in Alochaka Pitta.",
            "herbs": "Triphala, Rose water, Chandana, Yashtimadhu, Amalaki.",
            "formulations": "Saptamrit Lauha, Triphala Ghrita, pure organic Rose water drops.",
            "therapy": "Netra Seka and placing chilled cotton pads soaked in pure organic rose water over closed eyes."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Palming",
            "technique": "Hold Prana Mudra for 15 minutes, then vigorously rub palms together to generate heat and gently cup over closed eyes.",
            "duration": "15 minutes daily.",
            "benefits": "Relaxes spastic ciliary muscles, dissipates ocular strain and mental fatigue."
          },
          "yoga": {
            "asanas": [
              "Trataka on green foliage/trees",
              "Eye Movements: Looking Up-Down, Left-Right, Diagonal, Circular",
              "Palming",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama (Humming vibrations relax pericranial tissues)",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Astaxanthin (4-6mg - proven to relieve ciliary muscle fatigue), Lutein, Bilberry extract, Vitamin A.",
            "dietarySources": "Bilberries, wild salmon, carrots, almonds, green tea, fresh amla juice."
          },
          "holisticIntegration": "Place chilled organic rose water-soaked cotton pads over your closed eyelids for 10 minutes at the end of each workday while practicing slow Bhramari breathing."
        },
        {
          "id": "eyes-6",
          "name": "Blepharitis & Meibomianitis (Eyelid Inflammation)",
          "severity": "Moderate",
          "category": "Eyelid Margin Inflammatory",
          "cause": "Chronic inflammation of the eyelid margin; Anterior: bacterial colonization (Staph. aureus) or Demodex folliculorum mites. Posterior: Meibomian gland dysfunction with inspissated rancid wax.",
          "prevention": "Daily eyelid margin hygiene with hypochlorous acid (HOCl) spray or diluted tea tree cleansers, avoid sleeping in eye makeup, replace mascara every 3 months.",
          "lifestyle": "Warm eyelid compresses (10 mins at 40-45°C) followed by gentle fingertip expression of Meibomian glands towards the lid margin, avoid eye rubbing.",
          "medicines": "Hypochlorous Acid (HOCl 0.01%) eyelid cleanser, Topical Erythromycin / Azithromycin ophthalmic ointment, Oral Doxycycline (anti-inflammatory/lipolytic effect), Tea tree oil wipes (for Demodex).",
          "ayurveda": {
            "dosha": "Pothaki and Utsangini with Kapha-Rakta Dushti on the Vartma (eyelids).",
            "herbs": "Triphala, Haridra (Turmeric), Neem, Yashtimadhu, Lodhra.",
            "formulations": "Triphala Kwath for eyelid wash, Kaishore Guggulu, Arogyavardhini Vati.",
            "therapy": "Netra Prakshalana with sterile warm Triphala decoction."
          },
          "mudras": {
            "primary": "Varun Mudra (Purification & Glandular Secretion)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Liquefies inspissated Meibomian gland secretions, promotes healthy glandular flow."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Adho Mukha Svanasana",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Sheetali",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Omega-3 Fatty Acids (EPA/DHA 2000mg - alters Meibomian oil melting point), Zinc, Vitamin A.",
            "dietarySources": "Wild salmon, chia seeds, walnuts, pumpkin seeds, green tea, dark berries."
          },
          "holisticIntegration": "Apply a warm moist compress over closed eyelids for 5 minutes every night, then gently spray with 0.01% Hypochlorous acid eyelid cleanser to neutralize bacteria and Demodex."
        },
        {
          "id": "eyes-7",
          "name": "Infectious & Allergic Conjunctivitis ('Pink Eye')",
          "severity": "Mild to Moderate (Infectious: Highly Contagious)",
          "category": "Conjunctival Inflammatory",
          "cause": "Inflammation of the bulbar/palpebral conjunctiva. Viral (Adenovirus - watery, preauricular node), Bacterial (Staph/Strep - purulent discharge), Allergic (IgE mast cell degranulation - intense bilateral itching).",
          "prevention": "Frequent handwashing with soap, never share towels or pillowcases, discard contaminated contact lenses and eye cosmetics.",
          "lifestyle": "Cold compresses for allergic/viral relief, warm compresses to soften bacterial crusting, strict contact lens holiday until 48 hours post-resolution.",
          "medicines": "For Allergic: Dual-action antihistamine/mast cell stabilizer drops (Olopatadine, Ketotifen). For Bacterial: Topical antibiotic drops (Polymyxin B/Trimethoprim, Moxifloxacin). For Viral: Supportive artificial tears.",
          "ayurveda": {
            "dosha": "Abhishyanda (Netra Abhishyanda) with Pitta-Kapha-Rakta dominance.",
            "herbs": "Triphala, Haridra, Yashtimadhu, Chandana, Daruharidra (Tree turmeric / Berberine).",
            "formulations": "Triphala Kwath for eye wash, Kaishore Guggulu, Saptamrit Lauha.",
            "therapy": "Netra Seka with cooled sterile Triphala-Yashtimadhu water."
          },
          "mudras": {
            "primary": "Prana Mudra (Conjunctival Immunity Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep other two fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Fortifies local ocular surface mucosal immunity, cools inflammatory redness."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Supta Baddha Konasana",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid inversions during acute conjunctival infection."
          },
          "vitamins": {
            "deficiencies": "Quercetin (natural mast cell stabilizer for allergic conjunctivitis), Vitamin C, Zinc, Vitamin A.",
            "dietarySources": "Red onions, apples, berries, chamomile tea, citrus fruits, green tea."
          },
          "holisticIntegration": "Sip warm chamomile or green tea and place the cooled, damp tea bags gently over closed eyelids for 10 minutes to soothe redness and itching."
        },
        {
          "id": "eyes-8",
          "name": "Diabetic Retinopathy (NPDR & PDR)",
          "severity": "Critical (Leading Cause of Working-Age Blindness)",
          "category": "Microvascular Retinal",
          "cause": "Chronic hyperglycemia causing retinal pericyte apoptosis, basement membrane thickening, microaneurysms, capillary non-perfusion, retinal ischemia, and aberrant VEGF-driven neovascularization.",
          "prevention": "Tight glycemic control (HbA1c <7.0%), blood pressure control (<130/80 mmHg), lipid management, annual dilated retinal examinations.",
          "lifestyle": "Consistent daily aerobic exercise, smoking cessation, low-glycemic Mediterranean whole-food diet, monitoring home blood glucose.",
          "medicines": "Intravitreal Anti-VEGF Injections (Aflibercept, Ranibizumab for diabetic macular edema), Panretinal Photocoagulation (PRP laser), Pars Plana Vitrectomy.",
          "ayurveda": {
            "dosha": "Prameha Janya Drishti Dushti with Rakta-Pitta and Ojas depletion.",
            "herbs": "Triphala, Amalaki, Haridra (Curcumin), Vijaysar, Guduchi, Saptamrit Lauha.",
            "formulations": "Nisha Amalaki, Saptamrit Lauha, Chandraprabha Vati, Maha Triphala Ghrita.",
            "therapy": "Pratimarsha Nasya and gentle Netra Seka."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Surya Mudra",
            "technique": "Hold Surya Mudra for 15 mins (metabolism); then hold Prana Mudra for 15 mins (retinal circulation).",
            "duration": "30 minutes daily.",
            "benefits": "Assists glucose metabolism while protecting delicate retinal micro-capillaries."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Gentle Baddha Konasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Bhramari Pranayama"
            ],
            "cautions": "Strictly avoid heavy straining, breath retentions, or inversions if proliferative retinopathy is present."
          },
          "vitamins": {
            "deficiencies": "Alpha-Lipoic Acid (ALA 600mg - proven microvascular antioxidant), Benfotiamine (Vitamin B1 fat-soluble), Lutein, Zeaxanthin, Vitamin D3.",
            "dietarySources": "Blueberries, amla, bitter gourd (karela), walnuts, chia seeds, dark leafy greens."
          },
          "holisticIntegration": "Take 1 tsp Nisha Amalaki (equal parts organic turmeric and amla powder) with warm water twice daily to provide powerful antioxidant protection for retinal micro-vessels."
        },
        {
          "id": "eyes-9",
          "name": "Hordeolum (Stye) & Chalazion",
          "severity": "Mild to Moderate",
          "category": "Eyelid Glandular",
          "cause": "Hordeolum: acute focal bacterial (Staph) abscess of eyelash follicle/Zeis gland (external) or Meibomian gland (internal). Chalazion: chronic sterile lipogranulomatous inflammatory mass from obstructed Meibomian gland.",
          "prevention": "Daily eyelid hygiene, avoid touching eyes with unwashed hands, replace eye makeup frequently, treat underlying blepharitis or rosacea.",
          "lifestyle": "Warm moist compresses applied for 10-15 minutes 4 times daily (the heat melts the hardened sebum plug), never squeeze or pop a stye.",
          "medicines": "Topical antibiotic ointment (Erythromycin or Bacitracin), Oral antibiotics (Cephalexin if spreading preseptal cellulitis), Intralesional Triamcinolone steroid injection or Incision & Curettage for persistent chalazia.",
          "ayurveda": {
            "dosha": "Anjananamika / Lagana with Pitta-Rakta inflammation forming a firm nodule.",
            "herbs": "Haridra, Triphala, Neem, Yashtimadhu, Chandana.",
            "formulations": "Triphala Guggulu, Kaishore Guggulu, Haridra Khanda.",
            "therapy": "Warm dry fomentation (Sweda) with warm cloth, application of warm Triphala water compress."
          },
          "mudras": {
            "primary": "Apana Mudra (Purification & Drainage Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes spontaneous drainage of localized glandular blockages."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin A, Omega-3 fatty acids, Vitamin C.",
            "dietarySources": "Garlic, turmeric golden milk, pumpkin seeds, berries, green tea."
          },
          "holisticIntegration": "Apply a warm hard-boiled egg wrapped in a clean washcloth over the eyelid for 10 minutes (maintains perfect therapeutic 42°C heat longer than damp washcloths) to melt the blocked gland."
        },
        {
          "id": "eyes-10",
          "name": "Presbyopia & Ocular Focus Decline",
          "severity": "Mild (Physiologic Aging)",
          "category": "Accommodative Refractive",
          "cause": "Age-related progressive sclerosis, loss of elasticity of the crystalline lens capsule, and decreased accommodative power of the ciliary muscle, resulting in inability to focus on near objects (typically onset >40 years).",
          "prevention": "Cannot be totally prevented (universal aging phenomenon), but progression of eye strain can be managed with proper lighting and ocular accommodation exercises.",
          "lifestyle": "Use adequate bright reading lighting, hold reading materials at comfortable distance, take frequent accommodative focus breaks.",
          "medicines": "Prescription Reading Glasses, Bifocals / Progressive Addition Lenses (PALs), Pilocarpine 1.25% ophthalmic solution (Vuity - pupillary miosis increases depth of focus), Refractive Lens Exchange (RLE).",
          "ayurveda": {
            "dosha": "Drishti Mandya caused by natural Vata increase in Vayas (aging) affecting Majja Dhatu.",
            "herbs": "Triphala, Saptamrit Lauha, Shatavari, Yashtimadhu, Amalaki.",
            "formulations": "Saptamrit Lauha, Maha Triphala Ghrita, Chyawanprash.",
            "therapy": "Netra Tarpana with Jeevantyadi Ghrita, regular Pratimarsha Nasya with pure A2 cow ghee."
          },
          "mudras": {
            "primary": "Prana Mudra (Visual Nerve Strengthening)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Preserves neuromuscular tone of ciliary bodies, improves accommodative stamina."
          },
          "yoga": {
            "asanas": [
              "Near-Far Focusing Exercise (Hold thumb 6 inches from nose, focus on thumb for 3s, then shift focus to horizon for 3s, repeat 15 times)",
              "Trataka",
              "Palming"
            ],
            "pranayama": [
              "Bhramari Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Lutein, Zeaxanthin, Astaxanthin, Vitamin C, Vitamin E, Zinc.",
            "dietarySources": "Pastured eggs, spinach, blueberries, soaked almonds, carrots, sweet potatoes."
          },
          "holisticIntegration": "Perform 2 minutes of Near-Far Focusing exercises every afternoon, followed by instilling 1 drop of pure organic lukewarm A2 cow ghee into each nostril before sleep."
        }
      ]
    },
    "ears": {
      "id": "ears",
      "name": "Ears & Hearing (Vestibular)",
      "layer": "externals",
      "category": "Auditory & Vestibular",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Transduces mechanical acoustic sound waves into auditory nerve signals via cochlear hair cells, and maintains spatial equilibrium via vestibular semicircular canals.",
      "topDiseases": [
        {
          "id": "ears-1",
          "name": "Tinnitus (Subjective Ringing, Buzzing or Hissing)",
          "severity": "Moderate / Chronic",
          "category": "Neuro-Auditory Phantom Perception",
          "cause": "Deafferentation and aberrant neural plasticity in the central auditory pathway following cochlear hair cell loss (noise trauma, presbycusis), microvascular ischemia, or somatosensory jaw/neck triggers.",
          "prevention": "Hearing protection (earplugs/earmuffs) in environments >85 dB, avoid high volume through in-ear earbuds (<60% volume for <60 mins), avoid ototoxic drugs (high-dose aspirin, aminoglycosides).",
          "lifestyle": "Sound therapy (white noise, rain sounds, notched music) to eliminate silence, cognitive behavioral therapy (CBT), manage stress, reduce caffeine and sodium.",
          "medicines": "Sound masking devices / Hearing aids with tinnitus sound generators, Neuromonics, Low-dose Clonazepam or Amitriptyline (for severe distress), Bimodal Neuromodulation (Lenire device).",
          "ayurveda": {
            "dosha": "Karna Nada (ringing) and Karna Kshweda (whistling) caused by aggravated Prana Vata entering Karna Srotas.",
            "herbs": "Ashwagandha, Brahmi, Bilva, Garlic (Lasuna), Shankhpushpi.",
            "formulations": "Saraswatarishta, Bilwadi Taila, Ashwagandharishta, Yogendra Ras.",
            "therapy": "Karna Poorana (instilling warm medicated Bilwadi or sesame oil into ear canal - if eardrum intact!), Shirodhara."
          },
          "mudras": {
            "primary": "Shunya Mudra (Aether / Ear Harmony Mudra)",
            "technique": "Bend middle finger down so its tip touches the fleshy base of the thumb; press thumb gently over the folded middle finger knuckle. Keep other three fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Classically renowned as the master mudra for all ear ailments, tinnitus, vertigo, and hearing weakness."
          },
          "yoga": {
            "asanas": [
              "Matsyasana (Fish Pose - expands neck and cranial circulation)",
              "Bhujangasana",
              "Viparita Karani",
              "Shavasana with sound focus"
            ],
            "pranayama": [
              "Bhramari Pranayama with Shanmukhi Mudra (closing ears with thumbs)",
              "Nadi Shodhana Pranayama",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (deficiency found in up to 47% of tinnitus patients), Zinc, Magnesium Glycinate (reduces auditory glutamate excitotoxicity), CoQ10.",
            "dietarySources": "Pumpkin seeds, dark chocolate, wild salmon, walnuts, organic eggs, nutritional yeast."
          },
          "holisticIntegration": "Perform 10 rounds of Bhramari Pranayama with Shanmukhi Mudra (ears sealed with thumbs) twice daily, followed by holding Shunya Mudra for 20 minutes in silence."
        },
        {
          "id": "ears-2",
          "name": "Benign Paroxysmal Positional Vertigo (BPPV)",
          "severity": "Moderate (Disabling Spells)",
          "category": "Peripheral Vestibular Mechanical",
          "cause": "Dislodgement of calcium carbonate otoconia crystals from the utricle into one of the semicircular canals (most commonly posterior canal 85-90%), causing abnormal endolymph deflection with head position changes.",
          "prevention": "Avoid abrupt head-snapping movements, optimize Vitamin D status (hypovitaminosis D strongly correlates with recurrent BPPV), sleep with head slightly elevated.",
          "lifestyle": "Turn head slowly when rolling over in bed, use extra pillows, avoid bending completely forward with head down during active vertigo spells.",
          "medicines": "Canalith Repositioning Maneuvers: Epley Maneuver (posterior canal - >85% instant cure rate!), Semont Maneuver, Lempert (BBQ roll) maneuver (horizontal canal). Vestibular suppressants (Meclizine, Diazepam - short term only!).",
          "ayurveda": {
            "dosha": "Bhrama (dizziness/spinning) caused by Pitta and Vata disturbing the vestibular pathways.",
            "herbs": "Brahmi, Shankhpushpi, Ashwagandha, Amalaki, Chandana.",
            "formulations": "Saraswatarishta, Kalyanaka Ghrita, Sutshekhar Ras, Kamadudha Ras.",
            "therapy": "Shirodhara with cooling herbal milk (Ksheeradhara) and gentle temple massage."
          },
          "mudras": {
            "primary": "Shunya Mudra combined with Prithvi Mudra",
            "technique": "Hold Shunya Mudra for 15 mins (ear canal balance); then hold Prithvi Mudra for 15 mins (earth grounding).",
            "duration": "30 minutes daily.",
            "benefits": "Re-anchors equilibrium, calms chaotic vestibular labyrinthine signaling."
          },
          "yoga": {
            "asanas": [
              "Tadasana with eyes focused on fixed horizon point",
              "Vrikshasana (with wall touch)",
              "Shavasana with flat head"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana without head movements"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (essential for otoconia calcium carbonate matrix maintenance), Calcium, Vitamin B12.",
            "dietarySources": "Sesame seeds, bone broth, leafy greens, wild salmon, pasture-raised egg yolks."
          },
          "holisticIntegration": "Perform the Epley Maneuver with a trained practitioner or guided video at the first onset of vertigo to physically guide displaced otolith crystals out of the semicircular canal."
        },
        {
          "id": "ears-3",
          "name": "Meniere's Disease (Endolymphatic Hydrops)",
          "severity": "Moderate to High",
          "category": "Inner Ear Hydropic",
          "cause": "Excessive accumulation and elevated hydraulic pressure of endolymph within the membranous labyrinth of the inner ear, causing episodic vertigo, fluctuating low-frequency hearing loss, tinnitus, and aural fullness.",
          "prevention": "Strict dietary sodium restriction (<1500-2000mg daily to stabilize inner ear fluid volume), avoid caffeine, alcohol, and monosodium glutamate (MSG).",
          "lifestyle": "Maintain consistent fluid intake evenly throughout the day, stress management, avoid sudden atmospheric pressure changes.",
          "medicines": "Diuretics (Hydrochlorothiazide + Triamterene), Betahistine (improves cochlear microcirculation), Intratympanic Dexamethasone injections, Intratympanic Gentamicin (chemical labyrinthectomy), Endolymphatic Sac Decompression.",
          "ayurveda": {
            "dosha": "Karna Roga with severe Vata-Kapha accumulation causing fluid retention (Jalavriddhi) in inner ear.",
            "herbs": "Punarnava (natural fluid balancer), Gokshura, Brahmi, Shankhpushpi, Vacha.",
            "formulations": "Punarnavadi Kwath, Saraswatarishta, Chandraprabha Vati, Bilwadi Taila.",
            "therapy": "Takradhara on the forehead and gentle herbal diuresis."
          },
          "mudras": {
            "primary": "Jalodar Nashak Mudra (Water Retention Reliever)",
            "technique": "Fold little finger to base of thumb; place thumb over folded little finger. Keep other fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly promotes drainage of endolymphatic hydrops, relieves inner ear pressure."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana (Resting quietly)"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Soft Diaphragmatic Breath",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Potassium, Magnesium, Vitamin B6, Bioflavonoids.",
            "dietarySources": "Fresh fruits, vegetables, barley water, pumpkin seeds, fresh celery."
          },
          "holisticIntegration": "Adhere to a strict low-sodium diet (<1500mg/day) and drink 1 glass of warm barley water with a pinch of roasted cumin daily to prevent inner ear fluid buildup."
        },
        {
          "id": "ears-4",
          "name": "Otitis Externa ('Swimmer's Ear')",
          "severity": "Moderate (Severe Otalgia on Tragal Pressure)",
          "category": "External Auditory Canal Infectious",
          "cause": "Breakdown of the protective cerumen-acid mantle in the external auditory canal from water maceration or cotton-swab micro-trauma, leading to bacterial (Pseudomonas aeruginosa 60%, Staph) or fungal infection.",
          "prevention": "Keep ears dry during swimming using silicone earplugs, shake head to remove trapped water post-swim, NEVER insert cotton swabs (Q-tips) into ear canal ('nothing smaller than your elbow in the ear!').",
          "lifestyle": "Use a warm hairdryer held 12 inches away to dry ear canals post-shower, avoid scratching itchy ear canal.",
          "medicines": "Topical Antibiotic/Corticosteroid ear drops (Ciprofloxacin-Dexamethasone or Ofloxacin - safe even with perforated eardrum), Acetic acid 2% ear drops, Ear wick placement for canal edema.",
          "ayurveda": {
            "dosha": "Karnapaka / Bahir-Karna Shotha caused by Pitta-Rakta inflammation and Kleda.",
            "herbs": "Neem, Haridra (Turmeric), Lasuna (Garlic), Tulsi, Nirgundi.",
            "formulations": "Karanja Taila, Kaishore Guggulu, Triphala Kwath.",
            "therapy": "Gentle cleansing with warm sterile Triphala water and dry warm fomentation."
          },
          "mudras": {
            "primary": "Shunya Mudra (Ear Decongestant Mudra)",
            "technique": "Fold middle finger to base of thumb, hold with thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes twice daily.",
            "benefits": "Relieves pressure and inflammation in the external auditory meatus."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin A.",
            "dietarySources": "Garlic, turmeric milk, bone broth, citrus fruits, berries."
          },
          "holisticIntegration": "Mix equal parts pure rubbing alcohol and white vinegar (1:1 drop ratio) and place 2 drops into ear canals immediately after swimming to evaporate water and restore natural acidic pH."
        },
        {
          "id": "ears-5",
          "name": "Cerumen Impaction (Impacted Earwax)",
          "severity": "Mild to Moderate",
          "category": "Canal Obstruction",
          "cause": "Accumulation and hardening of cerumen from overproduction, tortuous ear canals, hearing aid/earbud usage, or cotton-swab insertion that pushes wax deeper against the tympanic membrane.",
          "prevention": "Zero Q-tip insertion into ear canal, routine prophylactic ceruminolytic drops for hearing aid users, periodic professional irrigation.",
          "lifestyle": "Wipe only the outer pinna with a damp washcloth, allow warm shower water to enter and drain naturally.",
          "medicines": "Ceruminolytics: Carbamide Peroxide (Debrox 6.5%), Mineral oil, Hydrogen peroxide (3% diluted), Warm water ear syringing / irrigation, Microsuction under direct visualization.",
          "ayurveda": {
            "dosha": "Karnagutha caused by drying of Kapha-Meda by aggravated Vata.",
            "herbs": "Bilva, Sesame oil (Tila Taila), Garlic (Lasuna), Castor oil.",
            "formulations": "Bilwadi Taila, Lasunadi Taila (strictly if eardrum intact!).",
            "therapy": "Karna Poorana: 3 drops of lukewarm sesame oil instilled into ear for 10 minutes."
          },
          "mudras": {
            "primary": "Shunya Mudra (Ear Clearance Mudra)",
            "technique": "Fold middle finger down to base of thumb; hold with thumb. Other fingers straight.",
            "duration": "15 minutes daily.",
            "benefits": "Supports auditory canal space clearing and normal wax migration."
          },
          "yoga": {
            "asanas": [
              "Vajrasana",
              "Tadasana",
              "Gentle Neck Rolls"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Omega-3 fatty acids, Hydration.",
            "dietarySources": "Healthy dietary fats, walnuts, olive oil, water."
          },
          "holisticIntegration": "Place 2 drops of lukewarm pure olive oil or sweet almond oil into the affected ear before bedtime for 3 consecutive nights to soften rock-hard cerumen for easy natural drainage."
        },
        {
          "id": "ears-6",
          "name": "Age-Related Hearing Loss (Presbycusis) & Sensorineural Loss",
          "severity": "Moderate to High",
          "category": "Neurosensory Degenerative",
          "cause": "Progressive, symmetric high-frequency sensorineural loss from loss of sensory hair cells in the basal turn of the cochlea, atrophy of stria vascularis, and loss of spiral ganglion neurons.",
          "prevention": "Lifelong hearing protection around noisy machinery and music, managing cardiovascular risk factors (diabetes, hypertension, hyperlipidemia accelerate cochlear ischemia).",
          "lifestyle": "Face the speaker directly in conversations, choose quiet restaurant seating, use assistive listening devices and closed captioning, treat hearing loss early to prevent cognitive decline.",
          "medicines": "Digital Hearing Aids (custom-programmed to audiogram), CROS hearing aids, Cochlear Implants (for severe-to-profound sensorineural loss).",
          "ayurveda": {
            "dosha": "Badhirya caused by chronic Vata aggravation and Majja Dhatu Kshaya in Shravanendriya.",
            "herbs": "Ashwagandha, Brahmi, Bilva, Shankhpushpi, Rasna.",
            "formulations": "Saraswatarishta, Bilwadi Taila, Balarishta, Maharasnadi Kwath.",
            "therapy": "Regular Karna Poorana with warm Bilwadi Taila and Pratimarsha Nasya with Ksheerabala 101."
          },
          "mudras": {
            "primary": "Shunya Mudra (Aether / Hearing Restorative Mudra)",
            "technique": "Press middle finger to base of thumb; cover with thumb. Extend other three fingers.",
            "duration": "20-30 minutes daily.",
            "benefits": "Directly tonifies auditory nerve pathways, improves auditory sensitivity and focus."
          },
          "yoga": {
            "asanas": [
              "Matsyasana (Fish Pose - enhances cochlear circulation)",
              "Sarvangasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama (Humming vibrations stimulate auditory cortex)",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Folate (L-Methylfolate - deficiency linked to rapid presbycusis), Vitamin B12, Magnesium, Zinc, CoQ10.",
            "dietarySources": "Dark leafy greens, pumpkin seeds, pasture-raised eggs, wild salmon, walnuts."
          },
          "holisticIntegration": "Practice 15 minutes of Bhramari Pranayama with Shanmukhi Mudra daily to send direct sonic resonance through the temporal bones and cochlear apparatus."
        },
        {
          "id": "ears-7",
          "name": "Eustachian Tube Dysfunction (ETD & Barotrauma)",
          "severity": "Mild to Moderate",
          "category": "Tubal Pressure Dysregulation",
          "cause": "Failure of the Eustachian tube to periodically open or close properly, leading to impaired middle ear pressure equalization, aural fullness, popping/crackling, and retraction of the tympanic membrane.",
          "prevention": "Perform Valsalva or chew gum during airplane descent, treat underlying allergic rhinitis or sinusitis, avoid flying with acute upper respiratory infections.",
          "lifestyle": "Yawn, swallow, or chew gum frequently during elevation changes, use EarPlanes pressure-regulating earplugs during flights.",
          "medicines": "Intranasal Corticosteroid sprays (Fluticasone directed toward Eustachian tube orifice), Oral or nasal decongestants (Pseudoephedrine), Eustachian Tube Balloon Dilation (ETBD).",
          "ayurveda": {
            "dosha": "Karna Badhirya and Pratishyaya with Kapha obstructing the Kantha-Karna Srotas.",
            "herbs": "Tulsi, Pippali, Haridra, Yashtimadhu, Vacha.",
            "formulations": "Vyoshadi Vati, Sitopaladi Churna, Anu Taila Nasya.",
            "therapy": "Jala Neti followed by Pratimarsha Nasya with Anu Taila to clear tubal orifices."
          },
          "mudras": {
            "primary": "Shunya Mudra (Ear Equalization Mudra)",
            "technique": "Fold middle finger to base of thumb, press thumb over knuckle. Keep other fingers extended.",
            "duration": "15 minutes, two to three times daily.",
            "benefits": "Helps equalize middle ear air pressure, eases fullness and clicking sounds."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose - directly flexes and opens tensor veli palatini muscles!)",
              "Matsyasana",
              "Tadasana"
            ],
            "pranayama": [
              "Valsalva / Toynbee maneuvers (swallowing with nostrils pinched)",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc, Quercetin (anti-allergic).",
            "dietarySources": "Warm ginger-lemon tea, spicy broths, garlic, citrus fruits."
          },
          "holisticIntegration": "Perform Simhasana (Lion's Pose with tongue fully extended and wide throat opening) 5 times morning and evening to actively contract the tensor veli palatini muscle that opens the Eustachian tube."
        },
        {
          "id": "ears-8",
          "name": "Hyperacusis & Auditory Hypersensitivity",
          "severity": "Moderate to High",
          "category": "Central Auditory Hyper-Gain",
          "cause": "Reduced tolerance to ordinary environmental sounds caused by loss of efferent olivocochlear inhibitory tone and central auditory hyper-gain following acoustic trauma, migraine, or Bell's palsy.",
          "prevention": "Gradual acoustic desensitization (AVOID wearing earplugs constantly in everyday normal environments, which causes maladaptive central auditory gain upregulation!).",
          "lifestyle": "Gentle, controlled sound enrichment with low-level broadband pink/brown noise, stress reduction, cognitive behavioral therapy for sound fear (phonophobia).",
          "medicines": "Auditory Desensitization Therapy (Sound generator counseling over 6-12 months), Low-dose SSRIs or Gabapentin, Magnesium supplementation.",
          "ayurveda": {
            "dosha": "Karna Shoola and Prana Vata hyper-excitation in Shravanendriya.",
            "herbs": "Brahmi, Shankhpushpi, Jatamansi, Ashwagandha, Tagara.",
            "formulations": "Saraswatarishta, Manasamitra Vatika, Kalyanaka Ghrita.",
            "therapy": "Shirodhara with warm herbal milk (Ksheeradhara) to calm central acoustic excitability."
          },
          "mudras": {
            "primary": "Gyan Mudra (Auditory Cortex Calming Mudra)",
            "technique": "Touch tip of index finger to tip of thumb; keep other fingers relaxed.",
            "duration": "20 minutes daily.",
            "benefits": "Calms sensory hyper-arousal, settles overactive auditory processing networks."
          },
          "yoga": {
            "asanas": [
              "Balasana",
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Shavasana in gentle pink noise"
            ],
            "pranayama": [
              "Soft Chandra Bhedana",
              "Gentle Bhramari (soft low volume)",
              "4-7-8 Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (calms neural hyper-excitation), Vitamin B12, Zinc.",
            "dietarySources": "Pumpkin seeds, dark chocolate, chamomile tea, soaked almonds, green vegetables."
          },
          "holisticIntegration": "Play soft continuous pink noise or ocean wave sounds in the background at low, comfortable volumes for 2 hours daily to gently retrain and desensitize auditory pathways."
        },
        {
          "id": "ears-9",
          "name": "Labyrinthitis & Vestibular Neuritis",
          "severity": "High (Acute Severe Vertigo & Nausea)",
          "category": "Infectious Vestibular-Cochlear",
          "cause": "Inflammation of the vestibular nerve (vestibular neuritis) or both vestibular and cochlear divisions (labyrinthitis - with acute unilateral hearing loss and tinnitus), overwhelmingly post-viral (HSV-1 reactivation).",
          "prevention": "Prompt treatment of viral respiratory infections, rest during acute febrile illnesses.",
          "lifestyle": "Bed rest for first 24-48 hours with slow head movements, early transition to active vestibular rehabilitation exercises (Cawthorne-Cooksey) to promote central cerebellar compensation.",
          "medicines": "Short-course Oral Corticosteroids (Prednisone taper - speeds vestibular recovery), Antiemetics (Ondansetron), Vestibular Suppressants (Meclizine, Diazepam - strictly first 48 hours only!).",
          "ayurveda": {
            "dosha": "Bhrama and Karnashoola with acute Pitta-Vata storm in the Shiro-Marmas.",
            "herbs": "Brahmi, Ashwagandha, Guduchi, Amalaki, Chandana.",
            "formulations": "Saraswatarishta, Kamadudha Ras, Sutshekhar Ras, Kalyanaka Ghrita.",
            "therapy": "Shirolepa (cooling herbal paste on temples) and gentle Takradhara."
          },
          "mudras": {
            "primary": "Shunya Mudra combined with Gyan Mudra",
            "technique": "Left hand holds Shunya Mudra; Right hand holds Gyan Mudra. Sit quietly.",
            "duration": "20 minutes twice daily.",
            "benefits": "Harmonizes inner ear fluid dynamics while soothing the central vestibular nuclei."
          },
          "yoga": {
            "asanas": [
              "Gentle eye-tracking head exercises (Vestibular rehab: look at fixed thumb while gently turning head side to side)",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana without retention"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B-Complex (B1, B6, B12), Vitamin D3, CoQ10, Zinc.",
            "dietarySources": "Bone broth, blueberries, avocados, organic eggs, walnuts, chamomile tea."
          },
          "holisticIntegration": "Begin gentle vestibular adaptation exercises on day 3: fix eyes on a stationary spot on the wall while slowly shaking head side to side for 1 minute 3 times daily to stimulate rapid brain compensation."
        },
        {
          "id": "ears-10",
          "name": "Otosclerosis (Stapes Bone Fixation)",
          "severity": "Moderate to High",
          "category": "Otic Capsule Osteodystrophy",
          "cause": "Abnormal bone remodeling in the otic capsule, beginning with a spongy phase (otospongiosis) and progressing to dense sclerotic fixation of the stapes footplate in the oval window, causing conductive hearing loss.",
          "prevention": "Genetic predisposition (AD with incomplete penetrance); avoiding high estrogen surges which can accelerate progression, routine audiometric monitoring.",
          "lifestyle": "Regular hearing assessments, communication strategies, exploring bone conduction or air conduction amplification.",
          "medicines": "Sodium Fluoride / Bisphosphonates (slows active otospongiotic bone remodeling), Hearing Aids, Stapedotomy / Stapedectomy (surgical replacement of fixed stapes with micro-prosthesis - >90% success rate!).",
          "ayurveda": {
            "dosha": "Asthi Dhatu Dushti in Karna with Vata-Kapha solidification.",
            "herbs": "Ashwagandha, Shallaki, Guggulu, Asthisamharaka, Bala.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Saraswatarishta, Bilwadi Taila.",
            "therapy": "Karna Poorana with warm medicated oils, Nasya with Ksheerabala 101."
          },
          "mudras": {
            "primary": "Prithvi Mudra combined with Shunya Mudra",
            "technique": "Touch ring finger to thumb (Prithvi) for 15 mins; then middle finger to thumb (Shunya) for 15 mins.",
            "duration": "30 minutes daily.",
            "benefits": "Supports healthy bone remodeling while balancing auditory conduction."
          },
          "yoga": {
            "asanas": [
              "Matsyasana",
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama (Vibrational stimulation)",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Vitamin K2 (MK-7 - regulates bone remodeling proteins), Calcium, Magnesium.",
            "dietarySources": "Sesame seeds, bone broth, natto, dark leafy greens, pasture-raised eggs."
          },
          "holisticIntegration": "Take Vitamin D3 (2000 IU) and Vitamin K2 MK-7 (100mcg) daily to support healthy osteoclastic-osteoblastic balance in temporal bone architecture."
        }
      ]
    },
    "nose_sinuses": {
      "id": "nose_sinuses",
      "name": "Nose & Sinus Cavities",
      "layer": "externals",
      "category": "Upper Respiratory & Olfactory",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Filters, humidifies, and warms inhaled air, secretes antimicrobial nitric oxide in paranasal sinuses, and houses olfactory neuroepithelium.",
      "topDiseases": [
        {
          "id": "nose-1",
          "name": "Chronic Rhinosinusitis (CRS with and without Polyps)",
          "severity": "Moderate / Chronic",
          "category": "Sino-Nasal Inflammatory",
          "cause": "Persistent (>12 weeks) inflammation of the paranasal sinus mucosa and ostiomeatal complex driven by eosinophilic Type 2 inflammation (with polyps) or neutrophilic/biofilm barriers (without polyps).",
          "prevention": "Daily high-volume low-pressure isotonic saline nasal irrigations (Neti pot/Sinus rinse bottle), avoiding environmental pollutants and tobacco smoke, indoor air filtration.",
          "lifestyle": "Daily saline nasal rinses with sterile/distilled water, stay hydrated, use cool-mist humidifier in bedroom, avoid sudden temperature shocks.",
          "medicines": "Intranasal Corticosteroid sprays/rinses (Budesonide respules in saline), Biologics for polyps (Dupilumab, Omalizumab), Short-course oral steroids, Functional Endoscopic Sinus Surgery (FESS).",
          "ayurveda": {
            "dosha": "Peenasa / Dushta Pratishyaya with Kapha-Vata obstruction in Shiro-Nasa Srotas.",
            "herbs": "Haridra (Turmeric), Tulsi, Pippali, Maricha, Shunthi (Trikatu), Vacha.",
            "formulations": "Vyoshadi Vati, Haridra Khanda, Sitopaladi Churna, Shadbindu Taila.",
            "therapy": "Jala Neti (nasal wash) followed by Pratimarsha Nasya with Anu or Shadbindu Taila."
          },
          "mudras": {
            "primary": "Linga Mudra (Heat & Sinus Mucus Liquefier)",
            "technique": "Interlace fingers of both hands, keep left thumb upright pointing vertically, encircle it with right index finger and thumb.",
            "duration": "15 minutes daily (drink plenty of fluids).",
            "benefits": "Generates internal warmth, melts hardened thick sinus mucus, clears frontal head pressure."
          },
          "yoga": {
            "asanas": [
              "Setu Bandhasana",
              "Bhujangasana",
              "Matsyasana",
              "Marjaryasana-Bitilasana"
            ],
            "pranayama": [
              "Jala Neti (Nasal Cleansing Kriya)",
              "Kapalbhati (clears sinuses)",
              "Nadi Shodhana",
              "Bhastrika"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin (500mg), Vitamin C (1000mg), Vitamin D3, N-Acetylcysteine (NAC 600mg - thins sinus mucus).",
            "dietarySources": "Red onions, apples, hot ginger-turmeric tea, spicy broths, garlic cloves, citrus fruits."
          },
          "holisticIntegration": "Perform Jala Neti every morning using warm sterile saline, gently blow out moisture, and follow with 2 drops of lukewarm Anu Taila in each nostril."
        },
        {
          "id": "nose-2",
          "name": "Nasal Polyposis (CRSwNP)",
          "severity": "Moderate to High",
          "category": "Eosinophilic Sino-Nasal",
          "cause": "Benign, teardrop-shaped edematous outgrowths of inflamed sinus mucosa prolapsing into the nasal cavity, driven by intense IL-4, IL-5, and IL-13 Type 2 inflammation and Staphylococcus aureus enterotoxins.",
          "prevention": "Aggressive early management of allergic rhinitis, avoid aspirin/NSAIDs if suffering from AERD (Aspirin-Exacerbated Respiratory Disease / Samter's Triad).",
          "lifestyle": "Avoid known airborne allergens, maintain dust-free bedroom, daily nasal saline irrigations with budesonide, dairy reduction during congestion.",
          "medicines": "Inhaled / Irrigated Corticosteroids (Budesonide saline sinus rinses), Monoclonal antibodies targeting IL-4R-alpha / IL-5 (Dupilumab, Mepolizumab), FESS Polypectomy.",
          "ayurveda": {
            "dosha": "Nasa Arsha caused by aggravated Kapha and Meda producing polypoid growths in the nasal passages.",
            "herbs": "Kanchnar, Varuna, Haridra, Pippali, Guggulu.",
            "formulations": "Kanchnar Guggulu, Haridra Khanda, Shadbindu Taila, Vyoshadi Vati.",
            "therapy": "Pratimarsha Nasya with Shadbindu Taila (cleanses and shrinks polyps) and Dhoomapana (herbal smoke)."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolic Reduction Mudra)",
            "technique": "Fold ring finger to base of thumb, hold with thumb. Keep other three fingers extended.",
            "duration": "15-20 minutes daily.",
            "benefits": "Dissolves sluggish Kapha-Meda growths, aids regression of polypoid edema."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana",
              "Matsyasana",
              "Sarvangasana",
              "Tadasana"
            ],
            "pranayama": [
              "Kapalbhati Pranayama (3 rounds of 30 strokes)",
              "Bhastrika Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (deficiency strongly correlates with polyp recurrence), Quercetin, Zinc, Vitamin C.",
            "dietarySources": "Turmeric-black pepper golden tea, raw garlic, green tea, cruciferous vegetables, blueberries."
          },
          "holisticIntegration": "Rinse sinuses daily with a NeilMed sinus bottle containing sterile saline and 1/2 tsp pure Xylitol (xylitol dissolves bacterial biofilms and reduces polyp swelling)."
        },
        {
          "id": "nose-3",
          "name": "Deviated Nasal Septum (DNS) & Turbinate Hypertrophy",
          "severity": "Mild to Moderate",
          "category": "Structural Upper Airway",
          "cause": "Physical deflection of the osteocartilaginous nasal septum (congenital or traumatic) from midline, accompanied by compensatory inferior turbinate hypertrophy on the contralateral side, causing unilateral/bilateral airflow restriction.",
          "prevention": "Protective face masks and mouthguards during contact sports to prevent nasal bone and septal cartilage fractures.",
          "lifestyle": "Sleep on the open side, use external nasal dilator strips (Breathe Right) at night to mechanically open nasal valves, stay upright during sleep.",
          "medicines": "Intranasal Corticosteroid sprays (shrinks hypertrophic turbinate mucosa), Intranasal antihistamines, Septoplasty with Submucosal Resection / Turbinate Reduction (Coblation/Radiofrequency).",
          "ayurveda": {
            "dosha": "Nasa Pratinaha with Vata-Kapha structural and mucosal obstruction.",
            "herbs": "Bala, Ashwagandha, Haridra, Tulsi, Yashtimadhu.",
            "formulations": "Anu Taila, Shadbindu Taila, Haridra Khanda.",
            "therapy": "Nasya therapy to reduce turbinate swelling and lubricate deflected mucosal surfaces."
          },
          "mudras": {
            "primary": "Prana Mudra (Nasal Patency Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Optimizes cellular oxygen absorption, eases subjective nasal obstruction."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Bhujangasana",
              "Setu Bandhasana",
              "Matsyasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama (focuses on balancing airflow through both nostrils)",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Bioflavonoids (strengthens mucosal capillaries), Vitamin D3.",
            "dietarySources": "Citrus fruits, berries, ginger-mint tea, dark greens."
          },
          "holisticIntegration": "Apply an external nasal dilator strip (Breathe Right) across the nasal bridge at bedtime to mechanically expand the internal nasal valve and prevent mouth breathing."
        },
        {
          "id": "nose-4",
          "name": "Epistaxis (Anterior & Posterior Nosebleeds)",
          "severity": "Mild (Anterior) to Critical (Posterior)",
          "category": "Vascular Sino-Nasal",
          "cause": "Rupture of delicate mucosal arterial vessels in Kiesselbach's plexus (Little's area - anterior 90%) from dry air, nose picking, allergic rhinitis, or sphenopalatine artery rupture (posterior 10%) from severe hypertension.",
          "prevention": "Coat anterior nasal septum with pure petroleum jelly or saline gel twice daily, run a bedroom humidifier, avoid digital trauma (nose picking), trim children's fingernails.",
          "lifestyle": "Acute Management: Lean forward slightly (NEVER tilt head back, which causes blood swallowing/aspiration!), pinch soft lower part of nose firmly for 10-15 continuous minutes without checking.",
          "medicines": "Topical Vasoconstrictor sprays (Oxymetazoline / Afrin on cotton pledget during active bleed), Silver Nitrate chemical cauterization, Anterior/Posterior Nasal Packing (Rapid Rhino), Sphenopalatine Artery Ligation.",
          "ayurveda": {
            "dosha": "Urdhvaga Rakta-Pitta with excessive heat and Pitta rupturing delicate nasal blood vessels.",
            "herbs": "Durva (Bermuda grass juice - premier classical hemostatic), Vasa (Adhatoda vasica), Nagkesar, Lodhra, Chandana.",
            "formulations": "Bolbadh Ras, Vasavaleha, Chandanasava, Praval Pishti.",
            "therapy": "Nasya with fresh Durva grass juice or pure cold A2 cow ghee (instantly stops bleeding)."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Apana Mudra",
            "technique": "Touch little fingertip to thumb tip for 10 mins; then middle and ring fingertips to thumb tip.",
            "duration": "20 minutes daily.",
            "benefits": "Cools heated fiery blood (Rakta-Pitta), promotes clotting integrity."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Tadasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Extinguishes internal fiery vascular heat)",
              "Chandra Bhedana"
            ],
            "cautions": "Avoid vigorous breath retention (Kumbhaka) and head-down inversions."
          },
          "vitamins": {
            "deficiencies": "Vitamin K1/K2 (essential for prothrombin synthesis), Vitamin C (capillary wall strength), Bioflavonoids (Rutin), Iron.",
            "dietarySources": "Dark leafy greens (spinach, kale), pomegranate juice, fresh Amla juice, citrus fruits, dark berries."
          },
          "holisticIntegration": "Apply a thin layer of pure organic A2 cow ghee or sesame oil inside the front of each nostril using a clean fingertip before bed to keep nasal mucosal capillaries moisturized."
        },
        {
          "id": "nose-5",
          "name": "Loss of Smell & Taste (Anosmia & Hyposmia)",
          "severity": "Moderate",
          "category": "Neuro-Olfactory",
          "cause": "Damage to olfactory sensory neuroepithelium or olfactory bulb/tract following viral respiratory infection (SARS-CoV-2, influenza), chronic sinonasal polyposis, head trauma, or early neurodegeneration (Parkinson's/Alzheimer's).",
          "prevention": "Early olfactory retraining therapy, treating chronic nasal inflammation, wearing head protection during sports.",
          "lifestyle": "Olfactory Retraining Therapy: Sniff 4 distinct essential oils (Rose, Lemon, Clove, Eucalyptus) for 20 seconds each twice daily while mentally visualizing the scent for 3-6 months.",
          "medicines": "Short course oral corticosteroids (for inflammatory post-viral anosmia), Intranasal steroid sprays, Alpha-Lipoic Acid, Omega-3 fatty acids, Olfactory retraining kits.",
          "ayurveda": {
            "dosha": "Ghranendriya Dushti caused by Vata-Kapha blockage in the cranial olfactory channels (Mano-Vaha Srotas).",
            "herbs": "Vacha (Acorus calamus - 'awakener of the senses'), Brahmi, Jyotishmati, Pippali, Tulsi.",
            "formulations": "Saraswatarishta, Shadbindu Taila, Brahmi Ghrita, Kalyanaka Ghrita.",
            "therapy": "Tikshna Nasya with Shadbindu or Vacha oil to stimulate dormant olfactory nerves."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Earth / Olfactory Sense Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "In classical philosophy, the ring finger and Prithvi (Earth) element directly govern the sense of smell (Gandha / Ghrana)."
          },
          "yoga": {
            "asanas": [
              "Matsyasana",
              "Adho Mukha Svanasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Kapalbhati (50 gentle rounds to clear olfactory cleft)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (essential cofactor for carbonic anhydrase VI in taste buds and olfactory receptors), Vitamin B12, Alpha-Lipoic Acid (ALA 600mg), Vitamin A.",
            "dietarySources": "Pumpkin seeds (highest zinc), pasture-raised eggs, oysters, blueberries, walnuts, rosemary."
          },
          "holisticIntegration": "Practice Olfactory Retraining: Sniff Rose, Lemon, Clove, and Eucalyptus essential oils for 20 seconds each, morning and evening, consciously visualizing their fragrance."
        },
        {
          "id": "nose-6",
          "name": "Vasomotor & Non-Allergic Rhinitis",
          "severity": "Mild to Moderate",
          "category": "Autonomic Neurovascular",
          "cause": "Autonomic imbalance of nasal mucosal blood vessels with parasympathetic hyper-responsiveness, triggered by temperature changes, cold winds, spicy foods (gustatory rhinitis), emotional stress, or alcohol.",
          "prevention": "Avoid known physical triggers, wear a warm scarf covering nose in freezing weather, avoid extreme temperature swings.",
          "lifestyle": "Use warm saline nasal sprays before outdoor cold exposure, avoid strong chemical perfumes and cleaning fumes, maintain hydration.",
          "medicines": "Intranasal Anticholinergics (Ipratropium Bromide spray - blocks parasympathetic rhinorrhea, especially effective for gustatory runny nose), Intranasal Azelastine/Fluticasone (Dymista).",
          "ayurveda": {
            "dosha": "Vataja Pratishyaya with hyper-reactive Chala Guna of Vata.",
            "herbs": "Haridra, Tulsi, Pippali, Yashtimadhu, Shunthi.",
            "formulations": "Haridra Khanda, Vyoshadi Vati, Sitopaladi Churna, Anu Taila.",
            "therapy": "Pratimarsha Nasya with warm sesame oil to coat and insulate hypersensitive nerve endings."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Vascular Stabilization Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Stabilizes neurovascular tone, prevents erratic vasodilatory rhinorrhea."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Bhujangasana",
              "Setu Bandhasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Surya Bhedana Pranayama (increases sympathetic tone)",
              "Nadi Shodhana",
              "Ujjayi"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Bioflavonoids, Zinc, Magnesium.",
            "dietarySources": "Warm ginger tea, citrus fruits, amla juice, cooked vegetables, raw honey."
          },
          "holisticIntegration": "Instill 2 drops of lukewarm pure sesame oil into each nostril every morning to create a protective insulating lipid shield against dry cold winds."
        },
        {
          "id": "nose-7",
          "name": "Rhinitis Medicamentosa ('Rebound Nasal Congestion')",
          "severity": "Moderate",
          "category": "Drug-Induced Sino-Nasal",
          "cause": "Tachyphylaxis and rebound severe nasal mucosal vasodilation, interstitial edema, and receptor down-regulation following prolonged use (>3-5 consecutive days) of topical alpha-adrenergic decongestant sprays (Oxymetazoline, Xylometazoline).",
          "prevention": "Strictly limit OTC nasal decongestant sprays to a MAXIMUM of 3 consecutive days, never use as a chronic allergy spray.",
          "lifestyle": "Wean off one nostril at a time ('one-nostril-at-a-time weaning trick'), replace with hypertonic saline sprays, use cool-mist humidifiers.",
          "medicines": "Complete cessation of OTC decongestant spray, High-dose Intranasal Corticosteroid spray (Fluticasone, Mometasone), Short 5-7 day Oral Prednisone taper for severe obstruction.",
          "ayurveda": {
            "dosha": "Dushta Pratishyaya with chemical burn and Vata-Pitta destruction of Nasa Twak.",
            "herbs": "Yashtimadhu (Licorice - superior mucosal healer), Amalaki, Shatavari, Ghee.",
            "formulations": "Anu Taila, Kamadudha Ras, Sitopaladi Churna, Triphala Ghrita.",
            "therapy": "Pratimarsha Nasya with pure A2 cow ghee to soothe and heal chemically eroded mucosa."
          },
          "mudras": {
            "primary": "Varun Mudra (Mucosal Restoration Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Rehydrates denuded nasal mucosa, restores natural ciliary mucosal flow."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama (effortless without forcing)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin A (respiratory epithelial renewal), Vitamin C, Zinc, Collagen.",
            "dietarySources": "Bone broth, carrots, sweet potatoes, raw honey, papaya, warm vegetable soups."
          },
          "holisticIntegration": "Dilute your remaining Afrin/oxymetazoline bottle with sterile saline by 50% on day 1, 75% on day 3, 90% on day 5, transitioning completely to pure saline spray."
        },
        {
          "id": "nose-8",
          "name": "Adenoid Hypertrophy (Enlarged Adenoids)",
          "severity": "Moderate (Common in Children)",
          "category": "Pediatric Lymphoid Hyperplasia",
          "cause": "Physiological or pathological hypertrophy of the nasopharyngeal tonsil (adenoid pad) in response to recurrent viral/bacterial infections or allergic rhinitis, causing nasal airway obstruction, obligatory mouth breathing, snoring, and sleep apnea.",
          "prevention": "Early management of childhood allergic rhinitis, breastfeeding (transfers protective IgA), avoiding exposure to secondhand tobacco smoke.",
          "lifestyle": "Myofunctional therapy (retraining nasal breathing and proper tongue posture on the palate), keeping bedroom dust-free, side-sleeping.",
          "medicines": "Intranasal Corticosteroid sprays (Fluticasone/Mometasone for 6-8 weeks - clinically proven to reduce adenoid size), Oral Montelukast, Adenoidectomy (definitive surgical cure).",
          "ayurveda": {
            "dosha": "Kantha-Shundika / Galagranthi in Bala caused by Kapha-Meda hyperplasia.",
            "herbs": "Kanchnar, Haridra (Turmeric), Tulsi, Yashtimadhu, Pippali.",
            "formulations": "Kanchnar Guggulu, Haridra Khanda, Arvindasava, Sitopaladi Churna.",
            "therapy": "Pratimarsha Nasya with Anu Taila and gargling with warm turmeric-salt water."
          },
          "mudras": {
            "primary": "Shunya Mudra (Lymphatic Decongestant)",
            "technique": "Fold middle finger down to base of thumb; hold with thumb. Keep other three fingers straight.",
            "duration": "15 minutes daily.",
            "benefits": "Reduces lymphatic tissue swelling in the nasopharynx, clears airway obstruction."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose - directly flexes and exercises nasopharyngeal muscles)",
              "Matsyasana",
              "Tadasana"
            ],
            "pranayama": [
              "Kapalbhati (gentle, for older children)",
              "Ujjayi Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (optimal levels reduce adenoid hyperplasia risk), Zinc, Vitamin C.",
            "dietarySources": "Golden turmeric milk, raw local honey (strictly >1 yr), steamed green vegetables, berries."
          },
          "holisticIntegration": "Give 1/2 tsp Haridra Khanda or 1/4 tsp organic turmeric powder mixed in warm milk with a pinch of black pepper each evening to shrink enlarged nasopharyngeal lymphoid tissue."
        },
        {
          "id": "nose-9",
          "name": "Sinus Headaches (Frontal & Maxillary Pressure)",
          "severity": "Moderate",
          "category": "Sino-Nasal Pressure/Referred Pain",
          "cause": "Negative pressure vacuum or positive inflammatory fluid pressure within the frontal, ethmoid, or maxillary sinuses due to ostial mucosal blockage, often misdiagnosed as sinus headache when actually migraine (80%+).",
          "prevention": "Treat underlying nasal allergy and sinus ostial swelling promptly, avoid abrupt barometric pressure changes without decongestion, maintain sinus drainage.",
          "lifestyle": "Warm moist steam inhalations with eucalyptus/peppermint, apply warm compresses over the cheekbones and forehead, drink warm spicy broths.",
          "medicines": "Saline nasal irrigations, Oral decongestants (Pseudoephedrine), NSAIDs / Acetaminophen, Intranasal Steroids, Evaluation for underlying migraine if recurrent without purulence.",
          "ayurveda": {
            "dosha": "Shirahshoola and Suryavarta caused by trapped Pitta-Kapha in Shiro-Marmas.",
            "herbs": "Shunthi (Dry ginger), Haridra, Tulsi, Maricha, Pippali, Camphor.",
            "formulations": "Shirashooladi Vajra Ras, Pathyadi Kadha, Vyoshadi Vati.",
            "therapy": "Lepa: applying a warm paste of dry ginger (Shunthi) and water over forehead and sinuses."
          },
          "mudras": {
            "primary": "Mahasirs Mudra (Sinus & Head Relief Mudra)",
            "technique": "Touch tips of thumb, index, and middle fingers together; fold ring finger into palm; extend pinky finger straight.",
            "duration": "15 minutes twice daily.",
            "benefits": "Directly relieves intense pressure over the frontal and maxillary sinus cavities."
          },
          "yoga": {
            "asanas": [
              "Balasana with forehead resting on block",
              "Adho Mukha Svanasana (briefly)",
              "Bhujangasana",
              "Shavasana"
            ],
            "pranayama": [
              "Kapalbhati (gentle rounds to clear ostia)",
              "Bhramari Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc, Quercetin, Magnesium.",
            "dietarySources": "Ginger-lemon tea, spicy chicken or vegetable broth with black pepper, fresh pineapple (bromelain), berries."
          },
          "holisticIntegration": "Inhale steam from a bowl of hot water infused with 2 drops of eucalyptus oil and 1/2 tsp crushed carom seeds (Ajwain) for 7 minutes to clear blocked sinus ostia."
        },
        {
          "id": "nose-10",
          "name": "Nasal Furunculosis (Vestibular Abscess)",
          "severity": "Moderate to Critical (Danger Triangle of the Face)",
          "cause": "Acute bacterial infection (Staphylococcus aureus) of a hair follicle in the nasal vestibule, predisposing to retrograde thrombophlebitis via facial/ophthalmic veins into the Cavernous Sinus (Cavernous Sinus Thrombosis risk!).",
          "prevention": "NEVER pluck or pull nasal vibrissae hairs (trim with round-tipped safety scissors instead), avoid digital trauma/picking, treat anterior nasal Staph colonization.",
          "lifestyle": "Apply warm moist compresses for 10 minutes 3 times daily, NEVER squeeze or pop a pimple or boil inside the nose (located in the anatomical 'Danger Triangle' of the face!).",
          "medicines": "Topical Mupirocin 2% nasal ointment (Bactroban - eliminates Staph colonization), Oral Antibiotics targeting Staph (Cephalexin, Dicloxacillin, or TMP-SMX/Doxycycline for MRSA).",
          "ayurveda": {
            "dosha": "Nasa-Pidika / Vidradhi with fiery Pitta-Rakta and Vrana formation.",
            "herbs": "Neem, Haridra (Curcumin), Manjistha, Sariva, Khadira.",
            "formulations": "Kaishore Guggulu, Arogyavardhini Vati, Mahamanjishtadi Kwath, Jatyadi Taila.",
            "therapy": "External application of Jatyadi Ghrita or sterile turmeric paste (strictly no squeezing)."
          },
          "mudras": {
            "primary": "Prana Mudra (Immune Defense Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Boosts neutrophil activity, accelerates resolving of localized cutaneous abscesses."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Shavasana (Resting quietly)"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin A.",
            "dietarySources": "Garlic, turmeric milk, bone broth, fresh berries, green tea."
          },
          "holisticIntegration": "Apply pure topical Mupirocin 2% ointment or sterile Jatyadi Ghrita gently into the affected nasal vestibule with a clean cotton swab twice daily; never squeeze or manipulate the area."
        }
      ]
    },
    "mouth_throat": {
      "id": "mouth_throat",
      "name": "Mouth, Teeth & Throat",
      "layer": "externals",
      "category": "Oral Cavity & Pharynx",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Gateway for nutrition and speech, housing the dentition, salivary glands, tongue gustatory papillae, and tonsillar lymphatic Waldeyer's ring.",
      "topDiseases": [
        {
          "id": "mouth-1",
          "name": "Gingivitis & Periodontitis (Gum Disease)",
          "severity": "Moderate to High (Tooth Loss Risk)",
          "category": "Periodontal Infectious/Inflammatory",
          "cause": "Subgingival bacterial plaque biofilm (Porphyromonas gingivalis, Treponema denticola) triggering host inflammatory osteoclast activation, periodontal pocketing, and alveolar bone resorption.",
          "prevention": "Twice daily toothbrushing with soft bristles (Bass technique), daily interdental flossing or water flossing, professional dental scaling every 6 months.",
          "lifestyle": "Smoking cessation (smoking increases periodontitis risk by 300%), tongue scraping every morning, replacing toothbrush every 3 months, anti-inflammatory whole-food diet.",
          "medicines": "Scaling and Root Planing (SRP deep cleaning), Chlorhexidine Gluconate 0.12% oral rinse (short term), Subantimicrobial-dose Doxycycline (Periostat 20mg BID), Periodontal flap surgery.",
          "ayurveda": {
            "dosha": "Dantamoolagata Roga (Shitada / Danta Harsha) with Kapha-Rakta Dushti.",
            "herbs": "Babool (Acacia arabica - premier gum tonic), Neem, Bakul (Mimusops elengi), Clove (Lavanga), Triphala.",
            "formulations": "Irimedadi Taila, Khadiradi Vati, Dashan Sanskar Churna, Gum Tone gel.",
            "therapy": "Kavala & Gandusha (Oil Pulling): swishing 1 tablespoon of warm sesame or virgin coconut oil for 10-15 minutes every morning."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Bone & Gum Strengthening Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Reinforces alveolar bone mineral density, strengthens periodontal ligament anchorage."
          },
          "yoga": {
            "asanas": [
              "Matsyasana",
              "Tadasana",
              "Simhasana (Lion's Pose - boosts oral circulation)",
              "Sarvangasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari (Cooling oral breath)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (severe deficiency causes scurvy and bleeding gums), CoQ10 (gingival tissue regeneration), Vitamin D3, Calcium, Zinc.",
            "dietarySources": "Amla (highest Vitamin C), green tea, bone broth, crunchy raw vegetables, walnuts, berries."
          },
          "holisticIntegration": "Practice Oil Pulling (Gandusha) every morning before brushing: swish 1 tbsp warm sesame or coconut oil for 10 minutes, spit out into trash, and rinse with warm salt water."
        },
        {
          "id": "mouth-2",
          "name": "Recurrent Aphthous Stomatitis (Canker Sores)",
          "severity": "Mild to Moderate (Severe Localized Pain)",
          "category": "Oral Mucosal Ulcerative",
          "cause": "T-cell-mediated immune destruction of non-keratinized oral mucosa triggered by mechanical trauma, sodium lauryl sulfate (SLS) toothpastes, food sensitivities, stress, or nutritional deficiencies.",
          "prevention": "Switch strictly to SLS-free toothpaste, avoid sharp hard foods (potato chips, crusty bread), identify dietary triggers (chocolate, coffee, nuts, strawberries).",
          "lifestyle": "Rinse with warm salt water or baking soda solution, apply pure raw honey directly to ulcers, practice stress reduction, maintain oral hygiene.",
          "medicines": "Topical Corticosteroid paste (Triamcinolone in Orabase), Topical Anesthetics (Benzocaine 20%), Silver Nitrate chemical cautery, Dexamethasone oral elixir swish.",
          "ayurveda": {
            "dosha": "Mukha Paka caused by severe Pitta and Rakta Dushti in the oral cavity.",
            "herbs": "Yashtimadhu (Licorice), Khadira, Haridra, Triphala, Ghee, Honey.",
            "formulations": "Khadiradi Vati (chewable tablets), Kamadudha Ras, Triphala Kwath, Jatyadi Ghrita.",
            "therapy": "Local application of pure A2 cow ghee or honey mixed with turmeric on the ulcer."
          },
          "mudras": {
            "primary": "Varun Mudra (Mucosal Soothing Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; other fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Quenches burning oral heat, stimulates mucosal healing and salivary balance."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Supta Baddha Konasana",
              "Balasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Sheetali Pranayama (drawn over tongue to cool oral ulcers)",
              "Sheetkari",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (sublingual B12 shown in randomized trials to prevent recurrent aphthae!), Folate (B9), Iron, Zinc, Vitamin D3.",
            "dietarySources": "Sublingual B12, organic eggs, bone broth, papaya, cooked pumpkin, coconut water."
          },
          "holisticIntegration": "Dab a drop of raw organic Manuka honey or pure A2 cow ghee directly onto the canker sore 3 times daily—clinically proven to accelerate mucosal epithelialization and relieve pain."
        },
        {
          "id": "mouth-3",
          "name": "Acute Tonsillitis & Streptococcal Pharyngitis",
          "severity": "Moderate to High",
          "category": "Pharyngeal Lymphoid Infectious",
          "cause": "Infection of palatine tonsils by Group A Streptococcus (Streptococcus pyogenes - GABS) or respiratory viruses (Epstein-Barr, Adenovirus), with tonsillar exudates, fever, and cervical lymphadenitis.",
          "prevention": "Frequent hand hygiene, replace toothbrush after strep infection, avoid sharing cups/utensils with infected individuals.",
          "lifestyle": "Warm salt water gargles (1/2 tsp salt in 1 cup warm water) every 3 hours, warm herbal teas with honey and lemon, resting voice and body.",
          "medicines": "For confirmed Strep (positive rapid antigen/culture): Oral Penicillin V (10 days) or Amoxicillin (first-line; prevents Rheumatic Fever), Azithromycin (if penicillin-allergic), NSAIDs.",
          "ayurveda": {
            "dosha": "Galashundika / Tundikeri caused by Kapha-Rakta inflammation in the throat.",
            "herbs": "Yashtimadhu (Licorice), Haridra (Turmeric), Lavanga (Clove), Khadira, Shunthi.",
            "formulations": "Khadiradi Vati, Sitopaladi Churna, Triphala Guggulu, Kanchanar Guggulu.",
            "therapy": "Kavala (gargling) with warm water infused with turmeric and rock salt."
          },
          "mudras": {
            "primary": "Shunya Mudra (Throat & Larynx Calming Mudra)",
            "technique": "Fold middle finger to base of thumb, hold with thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes twice daily.",
            "benefits": "Relieves pharyngeal swelling, eases painful deglutition (swallowing)."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose - powerful throat flushing)",
              "Matsyasana (Fish Pose)",
              "Ustrasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Gentle ocean breath)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C, Zinc (zinc lozenges reduce throat symptom duration), Vitamin D3.",
            "dietarySources": "Warm bone broth, golden turmeric milk, ginger-honey tea, steamed carrots, mashed sweet potatoes."
          },
          "holisticIntegration": "Gargle with warm water containing 1/2 tsp turmeric powder and 1/2 tsp Himalayan rock salt for 2 minutes every 4 hours to reduce tonsillar bacterial load and swelling."
        },
        {
          "id": "mouth-4",
          "name": "Halitosis (Chronic Bad Breath)",
          "severity": "Mild to Moderate (High Social Distress)",
          "category": "Oral Microbiome Volatile Sulfur",
          "cause": "Production of Volatile Sulfur Compounds (VSCs: hydrogen sulfide, methyl mercaptan) by anaerobic bacteria residing in deep posterior dorsal tongue crypts, periodontal pockets, or tonsilloliths.",
          "prevention": "Daily tongue scraping from back to front with a copper or stainless steel tongue cleaner, interdental flossing, treatment of periodontal disease and dry mouth.",
          "lifestyle": "Scrape tongue thoroughly every morning, drink 2.5L water daily to maintain salivary flow, chew fresh parsley or mint leaves after meals.",
          "medicines": "Zinc Chloride / Chlorine Dioxide mouthwashes (chemically neutralizes VSCs without staining teeth), Professional periodontal debridement, Tonsillectomy (if intractable tonsilloliths).",
          "ayurveda": {
            "dosha": "Mukhadurgandha caused by Ama in Amashaya and Kapha stagnation on the Jihwa (tongue).",
            "herbs": "Ela (Cardamom - premier breath freshener), Lavanga (Clove), Fennel (Saunf), Triphala, Pudina.",
            "formulations": "Irimedadi Taila, Khadiradi Vati, Eladi Vati, Triphala Kwath.",
            "therapy": "Jihwa Nirlekhana (Tongue Scraping) with pure copper scraper, followed by oil pulling."
          },
          "mudras": {
            "primary": "Apana Mudra (Digestive Detoxification Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Other fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Clears gastrointestinal Ama, eliminates metabolic foul toxins."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose)",
              "Vajrasana (Post-meal)",
              "Pawanmuktasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Sheetkari",
              "Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Oral Probiotics (Streptococcus salivarius K12 / M18).",
            "dietarySources": "Green tea (EGCG eliminates oral odors), raw apples, celery, cardamom pods, fennel seeds, fresh mint."
          },
          "holisticIntegration": "Scrape your tongue with a pure copper tongue scraper every single morning upon waking (5-7 gentle strokes from back to front), then chew 2 green cardamom pods."
        },
        {
          "id": "mouth-5",
          "name": "Temporomandibular Joint (TMJ) Disorder & Bruxism",
          "severity": "Moderate",
          "category": "Cranio-Mandibular Musculoskeletal",
          "cause": "Internal derangement of the fibrocartilaginous TMJ articular disc (anterior disc displacement with or without reduction), masseter/temporalis muscle spasm, nocturnal bruxism (teeth grinding), or malocclusion.",
          "prevention": "Custom nocturnal dental splint (nightguard), stress management to reduce subconscious daytime clenching, avoiding chewing gum or tough chewy foods.",
          "lifestyle": "Adopt 'lips together, teeth apart, tongue resting on roof of mouth' rest posture; apply moist heat to jaw muscles; avoid wide yawning.",
          "medicines": "Custom Hard Acrylic Occlusal Nightguard, NSAIDs (Naproxen), Muscle relaxants (Cyclobenzaprine at bedtime), OnabotulinumtoxinA (Botox) injections into masseter muscles.",
          "ayurveda": {
            "dosha": "Hanu Graha (jaw lock) and Manyastambha caused by aggravated Vata constricting jaw ligaments.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Bala, Guggulu.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Mahamash Taila, Ksheerabala 101.",
            "therapy": "Warm oil massage (Abhyanga) over the TMJ and masseters followed by gentle warm moist fomentation."
          },
          "mudras": {
            "primary": "Vayu Mudra (Jaw Spasm Relieving Mudra)",
            "technique": "Fold index finger to touch base of thumb; press thumb over first knuckle of index finger. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Relaxes spastic masseter and temporalis muscle fibers, relieves TMJ pain."
          },
          "yoga": {
            "asanas": [
              "Gentle Jaw Drop (Rest tongue on palate, slowly open and close jaw smoothly 10 times)",
              "Gomukhasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Bhramari Pranayama (Humming sound vibrations relax the mandible)",
              "Slow Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg at bedtime - natural muscle relaxant), Vitamin D3, Vitamin B-Complex.",
            "dietarySources": "Soft cooked foods, bone broth, mashed avocado, pumpkin seeds, chamomile tea."
          },
          "holisticIntegration": "Take 400mg Magnesium Glycinate 30 minutes before sleep, and massage 2 drops of warm Mahanarayana or sesame oil over both jaw joints before putting in your nightguard."
        },
        {
          "id": "mouth-6",
          "name": "Oral Lichen Planus (Reticular & Erosive)",
          "severity": "Moderate to High",
          "category": "Autoimmune Oral Mucosal",
          "cause": "T-cell-mediated autoimmune attack targeting basal keratinocytes of the oral mucosa, presenting as white lacy streaks (Wickham's striae - reticular) or painful ulcerated erythematous mucosa (erosive).",
          "prevention": "Manage systemic stress, replace amalgam dental restorations if lichenoid reaction confirmed, screen for Hepatitis C virus, avoid spicy and acidic food irritants.",
          "lifestyle": "Use mild SLS-free non-mint toothpaste, soft toothbrush, avoid sharp crusty foods, maintain regular periodontal cleanings.",
          "medicines": "High-potency Topical Corticosteroids (Clobetasol 0.05% gel in Orabase or Dexamethasone oral rinse), Topical Calcineurin Inhibitors (Tacrolimus 0.1% ointment), Oral Prednisone (for severe flares).",
          "ayurveda": {
            "dosha": "Mukha Paka with deep Rakta-Pitta and Vata involvement.",
            "herbs": "Yashtimadhu, Guduchi, Shatavari, Haridra (Curcumin), Manjistha.",
            "formulations": "Kaishore Guggulu, Mahatiktaka Ghrita, Kamadudha Ras, Triphala Kwath.",
            "therapy": "Gandusha (oil pulling) with pure A2 cow ghee or Mahatiktaka Ghrita."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Sheetali Pranayama",
            "technique": "Hold Prana Mudra while inhaling cooling breath through rolled tongue.",
            "duration": "20 minutes daily.",
            "benefits": "Cools fiery auto-inflammatory erosion, promotes mucosal tolerance."
          },
          "yoga": {
            "asanas": [
              "Supta Baddha Konasana",
              "Viparita Karani",
              "Shavasana (20 mins)"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Curcumin (clinical trials show significant pain reduction in oral LP), Vitamin D3, Vitamin A, Folate, Iron.",
            "dietarySources": "Bone broth, pure organic ghee, steamed squashes, blueberries, turmeric golden milk."
          },
          "holisticIntegration": "Swish 1 tsp melted organic Mahatiktaka Ghrita or pure A2 cow ghee around the mouth for 5 minutes twice daily to coat and heal delicate ulcerated oral mucosa."
        },
        {
          "id": "mouth-7",
          "name": "Dental Caries & Tooth Enamel Demineralization",
          "severity": "Moderate (Cavity Formation)",
          "category": "Dental Bacterial/Demineralizing",
          "cause": "Acidogenic bacteria (Streptococcus mutans, Lactobacillus) fermenting dietary carbohydrates to lactic acid, dropping oral pH below 5.5 and dissolving hydroxyapatite enamel crystals.",
          "prevention": "Fluoride or Nano-Hydroxyapatite (nHAp) toothpaste, avoid frequent between-meal sugary snacking and acidic sodas, drink tap water with meals, chew Xylitol gum.",
          "lifestyle": "Never brush immediately after acidic foods (wait 30 minutes for enamel to remineralize), floss before brushing, spit don't rinse after fluoride/nHAp toothpaste.",
          "medicines": "Nano-Hydroxyapatite (nHAp) / Fluoride toothpaste (5000 ppm high-fluoride prescription), Silver Diamine Fluoride (SDF - arrests active caries), Composite/Ceramic dental fillings.",
          "ayurveda": {
            "dosha": "Danta Sharkara and Krimidanta caused by Kapha-Vata and microbial acid accumulation.",
            "herbs": "Babool, Clove (Lavanga), Neem, Bakul, Triphala.",
            "formulations": "Dashan Sanskar Churna, Irimedadi Taila, Lavanga Taila.",
            "therapy": "Gandusha with warm sesame oil and brushing with herbal tooth powders containing Babool and Clove."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Enamel & Bone Remineralization)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports systemic calcium-phosphate deposition in dental and skeletal structures."
          },
          "yoga": {
            "asanas": [
              "Matsyasana",
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetkari Pranayama",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 + Vitamin K2 (MK-7 - activates osteocalcin to mineralize teeth), Calcium, Magnesium, Phosphorus.",
            "dietarySources": "Hard aged cheeses (rich in K2 and calcium), bone broth, grass-fed butter, sesame seeds, natto."
          },
          "holisticIntegration": "Use a 10% Nano-Hydroxyapatite (nHAp) toothpaste: brush for 2 minutes, spit out excess, and DO NOT rinse with water to allow biomimetic remineralization of enamel overnight."
        },
        {
          "id": "mouth-8",
          "name": "Burning Mouth Syndrome (Glossodynia)",
          "severity": "Moderate to High (Chronic Unexplained Pain)",
          "category": "Neuropathic Oral Dysesthesia",
          "cause": "Small-fiber sensory neuropathy affecting chorda tympani and trigeminal sensory nerve terminals in the tongue/palate, combined with central neuropathic dysregulation, predominantly in postmenopausal women.",
          "prevention": "Avoid tongue scraping during active burning, eliminate alcohol-containing mouthwashes and cinnamon/mint flavoring agents, manage anxiety.",
          "lifestyle": "Sip cold water frequently, suck on small ice chips, chew sugar-free gum to stimulate saliva, avoid hot/spicy foods and carbonated drinks.",
          "medicines": "Topical Clonazepam wafers (dissolved orally without swallowing), Alpha-Lipoic Acid (ALA 600mg daily - clinical trials show marked relief), Low-dose Gabapentin or Amitriptyline.",
          "ayurveda": {
            "dosha": "Jihwa Daha caused by aggravated Pitta and Vata burning the Jihwagra (tongue tip).",
            "herbs": "Yashtimadhu, Shatavari, Chandana, Rose water, Praval (coral).",
            "formulations": "Kamadudha Ras, Praval Pishti, Saraswatarishta, Kalyanaka Ghrita.",
            "therapy": "Gandusha with cooled organic milk or coconut water, application of pure ghee."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Sheetali Pranayama",
            "technique": "Touch tip of little finger to thumb tip. Practice Sheetali breathing simultaneously.",
            "duration": "20 minutes twice daily.",
            "benefits": "Quenches burning sensory neuropathy, cools oral tissue nerve terminals."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Supta Baddha Konasana",
              "Balasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Sheetali Pranayama (15 gentle rounds - draws cooling air over tongue)",
              "Sheetkari",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Alpha-Lipoic Acid (600mg daily - first-line neuropathic therapy), Vitamin B12, Folate, Iron, Zinc, Vitamin D3.",
            "dietarySources": "Coconut water, sweet stewed pears, cucumber juice, bone broth, soaked chia seeds."
          },
          "holisticIntegration": "Take 600mg Alpha-Lipoic Acid (ALA) on an empty stomach every morning, and practice 15 rounds of Sheetali Pranayama whenever oral burning flares."
        },
        {
          "id": "mouth-9",
          "name": "Oral Thrush (Candidiasis / Moniliasis)",
          "severity": "Mild to Moderate",
          "category": "Fungal Opportunistic",
          "cause": "Overgrowth of opportunistic Candida albicans yeast on oral mucosa forming white curd-like plaques that wipe off leaving an erythematous bleeding base, triggered by inhaled steroids (without rinsing), antibiotics, or diabetes.",
          "prevention": "Rinse mouth thoroughly with water and spit after using inhaled corticosteroids, clean and soak dentures nightly in antifungal solution, maintain tight glycemic control.",
          "lifestyle": "Reduce dietary refined sugars and yeasts (which nourish Candida), replace toothbrush frequently, consume probiotic foods.",
          "medicines": "Topical Antifungals: Nystatin oral suspension (swish and swallow 4 times daily), Clotrimazole troches (dissolve slowly in mouth), Oral Fluconazole (100-200mg daily for 7-14 days for refractory cases).",
          "ayurveda": {
            "dosha": "Kaphaja Mukha Paka with Kleda and Krimi overgrowth.",
            "herbs": "Neem, Haridra (Turmeric), Triphala, Tulsi, Khadira.",
            "formulations": "Triphala Kwath, Kaishore Guggulu, Khadirarishta.",
            "therapy": "Kavala (gargling/swishing) with warm Triphala and Neem decoction."
          },
          "mudras": {
            "primary": "Prana Mudra (Antifungal Immune Defense)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates mucosal cell-mediated immunity against fungal pathogens."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati (gentle)"
            ]
          },
          "vitamins": {
            "deficiencies": "Oral Probiotics, Zinc, Vitamin C, Iron.",
            "dietarySources": "Unsweetened Greek yogurt, fermented kefir, raw garlic, coconut oil (caprylic acid), oregano tea."
          },
          "holisticIntegration": "Swish 1 tbsp organic virgin coconut oil (rich in natural antifungal caprylic and lauric acids) around the mouth for 10 minutes every morning before brushing."
        },
        {
          "id": "mouth-10",
          "name": "Oral Leukoplakia (Pre-Malignant White Patch)",
          "severity": "High / Pre-Malignant Potential",
          "category": "Keratotic Pre-Neoplastic",
          "cause": "Chronic mucosal hyperkeratosis presenting as an adherent white patch that cannot be wiped off, strongly triggered by tobacco use (smoking/chewing betel nut / gutkha), alcohol abuse, or chronic dental friction.",
          "prevention": "Complete and permanent cessation of all tobacco, areca nut, and gutkha products; alcohol moderation; smoothing sharp dental cusps.",
          "lifestyle": "Bi-annual oral cancer screening examinations, high antioxidant whole-food diet, self-monitoring of oral cavity with mirror.",
          "medicines": "Incisional / Punch Biopsy (strictly mandatory to assess dysplasia or invasive squamous cell carcinoma), Surgical Excision / Laser ablation for dysplastic lesions, Topical Bleomycin / Retinoids.",
          "ayurveda": {
            "dosha": "Mukha Granthi / Arbuda Purvarupa with Kapha-Meda and Rakta vitiation from toxic intake (Visha/Tambula).",
            "herbs": "Haridra (Curcumin - potent oral chemopreventive), Triphala, Ashwagandha, Guduchi, Manjistha.",
            "formulations": "Curcumin 95%, Kanchnar Guggulu, Triphala Churna, Mahatiktaka Ghrita.",
            "therapy": "Shodhana therapies and strict withdrawal from all toxic substances."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Surya Mudra",
            "technique": "Hold Surya Mudra for 15 mins (dissolves abnormal tissue); then Prana Mudra for 15 mins (cellular health).",
            "duration": "30 minutes daily.",
            "benefits": "Supports healthy mucosal cellular apoptosis, enhances tissue vitality."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar",
              "Tadasana",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 30 strokes)",
              "Nadi Shodhana",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Curcumin (clinical trials show regression of leukoplakia with 1-2g curcumin daily), Beta-Carotene / Vitamin A, Vitamin E, Lycopene, Vitamin C.",
            "dietarySources": "Turmeric with black pepper, cooked tomatoes (lycopene), carrots, green tea, dark berries."
          },
          "holisticIntegration": "Take 1000mg standardized Curcumin extract (with Piperine) and 10mg Lycopene daily with meals—proven in human trials to induce clinical regression of oral leukoplakia."
        }
      ]
    },
    "neck_thyroid": {
      "id": "neck_thyroid",
      "name": "Neck & Thyroid Gland",
      "layer": "externals",
      "category": "Cervical & Endocrine",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Houses the thyroid and parathyroid glands, larynx, trachea, carotid arteries, jugular veins, and cervical spinal nerve roots.",
      "topDiseases": [
        {
          "id": "neck-1",
          "name": "Hashimoto's Autoimmune Hypothyroidism",
          "severity": "Moderate / Chronic",
          "category": "Autoimmune Endocrine",
          "cause": "T-cell-mediated autoimmune destruction of thyroid follicular cells and presence of anti-TPO (thyroid peroxidase) and anti-Tg antibodies, causing progressive decline in T4 and T3 hormones.",
          "prevention": "Screening in individuals with family history or other autoimmune diseases, managing gut permeability, avoiding excessive iodine excess (which triggers Hashimoto's flares).",
          "lifestyle": "Gluten-free diet (molecular mimicry between gliadin and thyroid tissue), prioritize 8 hours of sleep, morning outdoor sunlight, stress reduction.",
          "medicines": "Levothyroxine (Synthroid, Tirosint - synthetic T4 taken strictly on an empty stomach with plain water 60 mins before breakfast), Liothyronine (Cytomel - synthetic T3 combination in select patients).",
          "ayurveda": {
            "dosha": "Galaganda / Gandamala caused by severe Agnimandya, Kapha-Meda accumulation, and Dhatvagni weakness.",
            "herbs": "Kanchnar (Bauhinia variegata - classical sovereign thyroid herb), Guggulu, Ashwagandha, Varuna, Trikatu.",
            "formulations": "Kanchnar Guggulu, Arogyavardhini Vati, Medohar Guggulu, Punarnavadi Kashaya.",
            "therapy": "Udvartana (dry powder massage) and Pratimarsha Nasya with Anu Taila."
          },
          "mudras": {
            "primary": "Surya Mudra (Agni / Metabolism Booster Mudra)",
            "technique": "Fold ring finger down to touch the fleshy base of the thumb; press thumb gently over the knuckle. Keep other three fingers extended.",
            "duration": "20 minutes twice daily before morning and evening meals.",
            "benefits": "Directly kindles sluggish thyroid metabolic fire, accelerates basal metabolism, combats lethargy and weight gain."
          },
          "yoga": {
            "asanas": [
              "Sarvangasana (Shoulderstand - premier thyroid compressor)",
              "Matsyasana (Fish Pose - premier thyroid stretcher)",
              "Setu Bandhasana (Bridge Pose)",
              "Halasana (Plow Pose)",
              "Ustrasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Ocean Breath - contracts and stimulates thyroid gland)",
              "Kapalbhati",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Selenium (200mcg - essential cofactor for deiodinase conversion of T4 to T3 and reduces anti-TPO antibodies), Zinc, Vitamin D3, Iron (Ferritin), Vitamin B12.",
            "dietarySources": "Brazil nuts (strictly 2 per day provides 150-200mcg selenium), pumpkin seeds, wild salmon, seaweed in moderation, bone broth."
          },
          "holisticIntegration": "Eat exactly 2 raw Brazil nuts every morning (delivers 200mcg bioavailable selenium). Practice 10 minutes of Ujjayi breathing paired with Fish Pose (Matsyasana) daily."
        },
        {
          "id": "neck-2",
          "name": "Graves' Disease & Hyperthyroidism",
          "severity": "High / Thyrotoxicosis Risk",
          "category": "Autoimmune Hypermetabolic",
          "cause": "Thyroid-Stimulating Immunoglobulins (TSI / TRAb) bind and constitutively activate the TSH receptor on thyroid follicular cells, causing uncontrolled excess synthesis of T3 and T4, goiter, and orbitopathy.",
          "prevention": "Early diagnosis, smoking cessation (smoking dramatically worsens Graves' orbitopathy/bulging eyes by 800%!), stress reduction.",
          "lifestyle": "Eliminate caffeine, energy drinks, and stimulants; wear sunglasses for photophobia; sleep with head elevated; avoid high-iodine foods (kelp, nori).",
          "medicines": "Antithyroid Drugs (Methimazole - first-line, Propylthiouracil / PTU in first trimester pregnancy), Beta-blockers (Propranolol - controls tremor and tachycardia), Radioactive Iodine Ablation (RAI), Total Thyroidectomy.",
          "ayurveda": {
            "dosha": "Atyagni and Bhasmaka Roga with explosive Tejas/Pitta burning the Dhatus.",
            "herbs": "Shankhpushpi, Brahmi, Jatamansi, Shatavari, Chandana, Praval Pishti.",
            "formulations": "Kamadudha Ras (Mukta yukta), Praval Pishti, Saraswatarishta, Kalyanaka Ghrita.",
            "therapy": "Shirodhara with cooling Chandanadi oil and Takradhara."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Sheetali Mudra",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Practice Sheetali cooling breath simultaneously.",
            "duration": "20 minutes twice daily.",
            "benefits": "Cools hyper-metabolic heat, stabilizes rapid tremor and anxious palpitations."
          },
          "yoga": {
            "asanas": [
              "Shavasana (20 minutes daily)",
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Cooling breath extinguishes fiery thyrotoxicosis)",
              "Chandra Bhedana",
              "Bhramari"
            ],
            "cautions": "Avoid inverted compression poses (Shoulderstand/Plow) and stimulating pranayamas (Kapalbhati/Bhastrika)."
          },
          "vitamins": {
            "deficiencies": "L-Carnitine (1000-2000mg - natural peripheral antagonist of thyroid hormone action), Vitamin D3, Magnesium, Calcium (hyperthyroidism induces bone loss).",
            "dietarySources": "Cruciferous vegetables (raw cabbage, broccoli, kale - natural mild goitrogens that help reduce thyroid hormone synthesis), berries, pumpkin seeds."
          },
          "holisticIntegration": "Take 1000mg L-Carnitine twice daily to naturally block excess thyroid hormone entry into cell nuclei, and drink cool coriander-cardamom tea in the afternoon."
        },
        {
          "id": "neck-3",
          "name": "Thyroid Nodules (Benign & Indeterminate)",
          "severity": "Moderate (Malignancy Assessment Required)",
          "category": "Endocrine Proliferative",
          "cause": "Clonal proliferation of thyroid follicular cells forming discreet encapsulated nodules (colloid nodules, follicular adenomas, cysts, or papillary thyroid carcinoma 5-10%), linked to iodine deficiency or genetics.",
          "prevention": "Ensure adequate dietary iodine intake without excess, avoid radiation exposure to the head and neck, routine neck palpation during physical exams.",
          "lifestyle": "Anti-inflammatory diet, avoid smoking, monitor nodules with scheduled ultrasound surveillance (ACR TI-RADS system).",
          "medicines": "High-Resolution Thyroid Ultrasound with ACR TI-RADS risk stratification, Fine Needle Aspiration (FNA) Biopsy with Bethesda classification, Molecular genetic testing (ThyroSeq/Afirma), Radiofrequency Ablation (RFA), Hemithyroidectomy.",
          "ayurveda": {
            "dosha": "Galaganda / Granthi Roga in Gala caused by Kapha-Meda accumulation and Vata blockage.",
            "herbs": "Kanchnar (Bauhinia variegata), Guggulu, Varuna, Haridra (Curcumin), Shilajit.",
            "formulations": "Kanchnar Guggulu, Varunadi Kwath, Arogyavardhini Vati, Curcumin 95%.",
            "therapy": "Lekhana (scraping) therapy and gentle external application of Kanchnar paste over neck."
          },
          "mudras": {
            "primary": "Surya Mudra combined with Shankh Mudra",
            "technique": "Encircle left thumb with right four fingers, touch right thumb to left index finger (Shankh Mudra - Conch Gesture held at throat level).",
            "duration": "15 minutes twice daily.",
            "benefits": "Classically acclaimed for throat and thyroid glandular harmony, balances glandular nodules."
          },
          "yoga": {
            "asanas": [
              "Sarvangasana",
              "Matsyasana",
              "Setu Bandhasana",
              "Bhujangasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Iodine (balanced), Selenium (200mcg), Vitamin D3, Curcumin.",
            "dietarySources": "Brazil nuts, turmeric golden tea, green tea, walnuts, steamed vegetables."
          },
          "holisticIntegration": "Hold Shankh Mudra (Conch Shell Gesture) at throat level for 15 minutes daily while practicing gentle Ujjayi breathing to promote lymphatic drainage around thyroid nodules."
        },
        {
          "id": "neck-4",
          "name": "Cervical Myofascial Spasm & Trapezius Strain ('Stiff Neck')",
          "severity": "Mild to Moderate",
          "category": "Musculoskeletal Cervical",
          "cause": "Acute spastic contraction and myofascial trigger points in the levator scapulae, upper trapezius, and sternocleidomastoid muscles from awkward sleep ergonomics, 'text neck' posture, draft exposure, or acute stress.",
          "prevention": "Maintain proper ergonomic workstation, use a contoured cervical pillow, take hourly movement breaks, avoid holding phone between ear and shoulder.",
          "lifestyle": "Apply moist heat (warm shower/hot water bottle) for 15 minutes, gentle active range of motion within pain-free limits, avoid aggressive cracking of neck.",
          "medicines": "NSAIDs (Ibuprofen, Naproxen), Skeletal Muscle Relaxants (Cyclobenzaprine, Tizanidine), Topical Diclofenac gel (Voltaren), Trigger Point Injections with Lidocaine.",
          "ayurveda": {
            "dosha": "Manyastambha caused by aggravated Vata settling in the cervical muscles and tendons.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Nirgundi, Bala, Castor oil.",
            "formulations": "Maharasnadi Kwath, Trayodashanga Guggulu, Balarishta, Mahanarayana Taila.",
            "therapy": "Greeva Basti (retaining warm Mahanarayana or Ksheerabala oil on back of neck), Nadi Sweda."
          },
          "mudras": {
            "primary": "Vayu Mudra (Wind Subduing / Spasm Reliever)",
            "technique": "Fold index finger to touch base of thumb; press thumb over first knuckle of index finger. Other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Rapidly releases spastic cervical muscle contractions, relieves acute torticollis."
          },
          "yoga": {
            "asanas": [
              "Greeva Sanchalana (Gentle Neck Rolls - slow chin to chest, head back, ear to shoulder)",
              "Gomukhasana (Cow Face arms)",
              "Marjaryasana-Bitilasana (Cat-Cow)",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Vitamin D3, Vitamin B12, Potassium.",
            "dietarySources": "Pumpkin seeds, dark chocolate, bananas, bone broth, chamomile tea, leafy greens."
          },
          "holisticIntegration": "Massage warm Mahanarayana or sesame oil over the neck and upper trapezius for 5 minutes, then apply a warm moist heating pad for 15 minutes before bedtime."
        },
        {
          "id": "neck-5",
          "name": "Vocal Cord Nodules & Chronic Laryngitis",
          "severity": "Mild to Moderate",
          "category": "Laryngeal Phonotraumatic",
          "cause": "Bilateral, symmetric callous-like fibrous thickenings at the junction of the anterior 1/3 and posterior 2/3 of the true vocal cords from chronic phonotrauma (screaming, excessive singing/teaching, throat clearing) or silent acid reflux (LPR).",
          "prevention": "Vocal hygiene (stay hydrated, use a microphone for teaching/public speaking), avoid whispering (which puts more strain on vocal cords than normal speech!), treat silent reflux.",
          "lifestyle": "Strict vocal rest periods, steam inhalations twice daily, eliminate caffeine and alcohol which dehydrate vocal folds, avoid throat clearing (sip water instead).",
          "medicines": "Voice Therapy / Speech-Language Pathology (SLP - first line, curative in >90%), PPIs for LPR reflux, Microlaryngoscopy with cold knife surgical excision (for mature fibrotic nodules).",
          "ayurveda": {
            "dosha": "Svarabheda caused by Vata-Pitta vitiation in Kantha (throat) and Udana Vata.",
            "herbs": "Yashtimadhu (Licorice - sovereign vocal herb), Lavanga (Clove), Khadira, Maricha, Pippali.",
            "formulations": "Khadiradi Vati, Lavangadi Vati, Sitopaladi Churna, Eladi Vati.",
            "therapy": "Gandusha (oil pulling with warm sesame oil) and steam inhalation with Yashtimadhu."
          },
          "mudras": {
            "primary": "Shankh Mudra (Conch Shell / Vocal Tone Mudra)",
            "technique": "Encircle left thumb with right fingers; touch right thumb to left index finger tip. Hold at chest/throat level.",
            "duration": "15 minutes twice daily.",
            "benefits": "Classically celebrated as the mudra for resonant, effortless speech and vocal cord rejuvenation."
          },
          "yoga": {
            "asanas": [
              "Simhasana (Lion's Pose - stretches and tones vocal apparatus)",
              "Matsyasana (Fish Pose)",
              "Ustrasana",
              "Bhujangasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Soft, gentle ocean breath)",
              "Bhramari Pranayama (Gentle low pitch)"
            ]
          },
          "vitamins": {
            "deficiencies": "Hydration (Water is the number one nutrient for vocal fold mucosa!), Vitamin C, Vitamin A.",
            "dietarySources": "Warm licorice root tea, raw Manuka honey, stewed pears with cloves, warm water with lemon."
          },
          "holisticIntegration": "Slowly chew 1 Khadiradi Vati or sip warm licorice root tea with 1 tsp raw honey twice daily to lubricate phonotraumatic vocal cord vibrations."
        },
        {
          "id": "neck-6",
          "name": "Subacute Thyroiditis (De Quervain's Thyroiditis)",
          "severity": "Moderate (Very Tender Neck Pain)",
          "category": "Post-Viral Inflammatory",
          "cause": "Self-limiting granulomatous inflammation of the thyroid gland typically developing 2-8 weeks following a viral upper respiratory infection (Coxsackie, Adenovirus, Mumps), causing exquisite thyroid tenderness radiating to jaw/ears.",
          "prevention": "Convalescence and rest during viral upper respiratory infections.",
          "lifestyle": "Physical rest during active neck pain and thyrotoxic phase, avoiding neck compression, eating soft foods if swallowing is painful.",
          "medicines": "High-dose NSAIDs (Ibuprofen 800mg TID) or Oral Prednisone (40mg daily with slow taper - dramatic pain relief within 24-48 hours), Beta-blockers (Propranolol for hyperthyroid phase).",
          "ayurveda": {
            "dosha": "Galashotha with acute Pitta-Rakta inflammation and intense Shoola (pain).",
            "herbs": "Guduchi, Shallaki (Boswellia), Haridra (Curcumin), Manjistha, Chandana.",
            "formulations": "Kaishore Guggulu, Amritarishta, Dashamoola Kashayam, Praval Pishti.",
            "therapy": "Cooling external application of sandalwood paste (Chandanadi Lepa) over the tender neck."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tissue Recovery Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Aids resolution of granulomatous inflammation, restores normal tissue equilibrium."
          },
          "yoga": {
            "asanas": [
              "Shavasana",
              "Gentle seated mountain pose in chair",
              "Supta Baddha Konasana with bolsters"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Strictly zero neck compression or backward hyperextension during active tenderness."
          },
          "vitamins": {
            "deficiencies": "Selenium, Vitamin D3, Vitamin C, Zinc, Curcumin.",
            "dietarySources": "Golden turmeric milk, bone broth, blueberries, wild salmon, steamed vegetables."
          },
          "holisticIntegration": "Take 500mg standardized Curcumin extract and 200mcg Selenium daily to accelerate resolution of follicular inflammation without steroid rebound."
        },
        {
          "id": "neck-7",
          "name": "Whiplash Injury & Cervical Acceleration-Deceleration (CAD)",
          "severity": "Moderate to High",
          "category": "Traumatic Cervical",
          "cause": "Rapid, forceful hyperextension followed by hyperflexion of the cervical spine (commonly motor vehicle rear-end collision), resulting in strain/sprain of anterior longitudinal ligaments, facet joints, and paraspinal muscles.",
          "prevention": "Adjust motor vehicle head restraint so the top is at least level with the top of the head and within 2 inches of the back of the skull.",
          "lifestyle": "Avoid rigid neck collars for more than 48-72 hours (early active mobilization promotes far better functional recovery), alternating ice/heat.",
          "medicines": "Short-course NSAIDs, Muscle relaxants, Physical therapy (active cervical stabilization and proprioceptive retraining), Trigger point injections, Facet joint radiofrequency neurotomy.",
          "ayurveda": {
            "dosha": "Abhighataja Manyastambha with severe acute Vata-Rakta trauma.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Bala, Guggulu, Nirgundi.",
            "formulations": "Trayodashanga Guggulu, Maharasnadi Kwath, Balarishta, Ksheerabala Taila.",
            "therapy": "Greeva Basti with warm Ksheerabala oil, gentle Patra Pinda Sweda."
          },
          "mudras": {
            "primary": "Vayu Mudra (Trauma & Spasm Reliever)",
            "technique": "Fold index finger to base of thumb, press thumb over knuckle. Other fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Soothes irritated cervical nerve roots, eases traumatic muscle guarding."
          },
          "yoga": {
            "asanas": [
              "Gentle Chin Tucks (Retract head horizontally like making a double chin, hold for 5s, repeat 10 times)",
              "Tadasana against a wall",
              "Gentle Cat-Cow"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate, Vitamin D3, Omega-3 fatty acids, Collagen Peptides, Vitamin C.",
            "dietarySources": "Bone broth, dark leafy greens, wild salmon, turmeric tea, pumpkin seeds."
          },
          "holisticIntegration": "Perform 10 gentle chin tucks every 2 hours to activate the deep cervical flexor muscles (longus colli/capitis) that stabilize the injured cervical spine."
        },
        {
          "id": "neck-8",
          "name": "Primary Hyperparathyroidism & Parathyroid Adenoma",
          "severity": "Moderate to High",
          "category": "Endocrine Mineral-Metabolic",
          "cause": "Autonomous hypersecretion of Parathyroid Hormone (PTH) by a benign solitary parathyroid adenoma (85%) or hyperplasia, causing hypercalcemia, cortical bone resorption, nephrolithiasis ('stones, bones, groans, and psychiatric overtones').",
          "prevention": "Routine serum calcium screening during annual blood panels, early diagnosis before severe osteoporosis or renal calculus formation occurs.",
          "lifestyle": "Maintain high hydration (2.5-3L water daily to prevent kidney stones and calcium precipitation), avoid dehydration, maintain active weight-bearing movement.",
          "medicines": "Minimally Invasive Parathyroidectomy (MIP - curative in >95% with intraoperative PTH monitoring), Calcimimetics (Cinacalcet - binds calcium-sensing receptors), Bisphosphonates.",
          "ayurveda": {
            "dosha": "Asthi Dhatu Dushti and Vrukka Ashmari with severe Vata-Pitta disruption.",
            "herbs": "Pashanabheda, Gokshura, Varuna, Guduchi, Punarnava.",
            "formulations": "Gokshuradi Guggulu, Punarnavadi Kwath, Chandraprabha Vati.",
            "therapy": "Gentle cooling therapies and high fluid hydration."
          },
          "mudras": {
            "primary": "Apana Mudra (Calcium Elimination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports renal excretion of excess serum calcium, prevents nephrolithiasis."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Maintain adequate hydration. Note: Avoid calcium supplements without endocrine advice; monitor 25-OH Vitamin D levels.",
            "dietarySources": "Lemon water, horse gram soup, barley water, fresh vegetables, fresh berries."
          },
          "holisticIntegration": "Drink 3 Liters of purified water daily with fresh lemon juice to ensure continuous renal clearance of excess filtered calcium until surgical resolution."
        },
        {
          "id": "neck-9",
          "name": "Cervical Lymphadenitis (Swollen Neck Lymph Nodes)",
          "severity": "Mild to Moderate",
          "category": "Lymphatic Immune-Reactive",
          "cause": "Reactive hyperplasia and enlargement of cervical lymph nodes responding to viral or bacterial upper respiratory, dental, or tonsillar infections, or mycobacterial/cat-scratch disease.",
          "prevention": "Prompt treatment of dental caries and gingivitis, safe hygiene around pets, vaccination against respiratory pathogens.",
          "lifestyle": "Warm moist compresses applied over swollen nodes for 10 minutes 3 times daily, stay hydrated, avoid aggressive poking or squeezing.",
          "medicines": "Treatment of underlying source (Oral antibiotics for bacterial pharyngitis/abscess, Antivirals), Analgesics (Acetaminophen/Ibuprofen), Biopsy if persistent >4-6 weeks without infectious cause.",
          "ayurveda": {
            "dosha": "Gandamala / Apachi caused by Kapha-Meda accumulation in the lymphatic channels.",
            "herbs": "Kanchnar (Bauhinia variegata - classical sovereign herb for lymph glands), Guggulu, Varuna, Haridra, Tulsi.",
            "formulations": "Kanchnar Guggulu (premier classical lymph cleanser), Arogyavardhini Vati, Kaishore Guggulu.",
            "therapy": "Gentle external application of Kanchnar paste and warm fomentation."
          },
          "mudras": {
            "primary": "Shunya Mudra (Lymphatic Decongestion Mudra)",
            "technique": "Fold middle finger down to base of thumb; hold with thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes twice daily.",
            "benefits": "Promotes lymphatic fluid drainage, reduces lymph node swelling and tenderness."
          },
          "yoga": {
            "asanas": [
              "Matsyasana (Fish Pose - stretches cervical lymph channels)",
              "Simhasana",
              "Tadasana",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama",
              "Kapalbhati",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin D3.",
            "dietarySources": "Bone broth, garlic, turmeric golden milk, fresh berries, citrus fruits, green tea."
          },
          "holisticIntegration": "Take 2 tablets of Kanchnar Guggulu twice daily with warm water to promote natural lymphatic clearance of reactive cervical lymphadenopathy."
        },
        {
          "id": "neck-10",
          "name": "Non-Toxic Simple Goiter & Iodine Deficiency",
          "severity": "Mild to Moderate",
          "category": "Thyroid Hyperplastic",
          "cause": "Diffuse non-neoplastic enlargement of the thyroid gland without hyperthyroidism or autoimmune inflammation, historically driven by endemic dietary iodine deficiency, leading to chronic compensatory TSH elevation.",
          "prevention": "Universal iodized salt consumption, eating seafood and dairy, avoiding excessive consumption of raw unfermented goitrogenic foods (cassava, millet) in iodine-poor regions.",
          "lifestyle": "Cook brassica vegetables (steaming/boiling deactivates goitrogenic glucosinolates), use iodized salt in cooking, monitor thyroid gland volume.",
          "medicines": "Adequate Dietary Iodine repletion (150mcg daily for adults, 220-250mcg in pregnancy), Low-dose Levothyroxine (to suppress elevated TSH and shrink goiter size), Thyroidectomy (if compressive symptoms on trachea/esophagus).",
          "ayurveda": {
            "dosha": "Galaganda caused by Kapha-Meda vitiation in the neck region.",
            "herbs": "Kanchnar, Guggulu, Varuna, Pippali, Ashwagandha.",
            "formulations": "Kanchnar Guggulu, Medohar Guggulu, Arogyavardhini Vati.",
            "therapy": "Lekhana therapies and gentle neck massage with warm sesame oil."
          },
          "mudras": {
            "primary": "Shankh Mudra (Conch Shell / Thyroid Harmonizer)",
            "technique": "Encircle left thumb with right fingers; touch right thumb to left index finger tip. Hold at chest/throat level.",
            "duration": "15 minutes twice daily.",
            "benefits": "Channels prana directly into the thyroid gland, harmonizes glandular cellular structure."
          },
          "yoga": {
            "asanas": [
              "Sarvangasana",
              "Matsyasana",
              "Halasana",
              "Ustrasana"
            ],
            "pranayama": [
              "Ujjayi Pranayama (Ocean Breath - stimulates thyroid parenchyma)",
              "Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Iodine (150mcg RDA), Selenium (200mcg), Zinc, Vitamin D3.",
            "dietarySources": "Iodized salt, wild ocean fish, dairy products, pasture-raised eggs, seaweed in moderation."
          },
          "holisticIntegration": "Ensure use of quality iodized sea salt (1/2 tsp daily provides ~150mcg iodine), and practice 10 cycles of Matsyasana (Fish Pose) after Sarvangasana to compress and then stretch the thyroid gland."
        }
      ]
    },
    "chest_breasts": {
      "id": "chest_breasts",
      "name": "Chest Wall & Breasts",
      "layer": "externals",
      "category": "Thoracic Surface & Mammary",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Covers the anterior thoracic cage, costochondral junctions, pectoral musculature, and mammary glandular and ductal network.",
      "topDiseases": [
        {
          "id": "chest-1",
          "name": "Costochondritis & Tietze Syndrome",
          "severity": "Moderate (Mimics Cardiac Chest Pain)",
          "category": "Thoracic Musculoskeletal",
          "cause": "Inflammation of the costochondral or chondrosternal junctions (most commonly ribs 2 through 5) following viral coughing paroxysms, physical strain, or blunt chest trauma (Tietze syndrome includes localized swelling).",
          "prevention": "Avoid sudden explosive upper body pushing movements without warm-up, treat persistent coughing promptly, maintain thoracic spine mobility.",
          "lifestyle": "Apply moist heat to the anterior chest wall for 15 minutes, avoid heavy bench pressing or pushups, sleep on your back, gentle pectoral doorframe stretches.",
          "medicines": "NSAIDs (Ibuprofen, Naproxen, Meloxicam - first-line for 1-2 weeks), Topical NSAID gel (Voltaren / Diclofenac 1%), Intercostal / Costochondral local anesthetic-steroid injections.",
          "ayurveda": {
            "dosha": "Urah-Shoola and Sandhi-Vata in the Parshwasthika (rib junctions) with local Ama.",
            "herbs": "Shallaki (Boswellia), Rasna, Guggulu, Ashwagandha, Nirgundi.",
            "formulations": "Rasnadi Guggulu, Yograj Guggulu, Dashamoola Kashayam, Mahanarayana Taila.",
            "therapy": "Upanaha (warm herbal poultice) over anterior chest wall and gentle dry fomentation."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Chest Spasm & Pain Reliever)",
            "technique": "Fold index finger to base of thumb; join tips of middle finger, ring finger, and thumb together. Keep pinky finger extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Alleviates musculoskeletal thoracic guarding, eases sharp pleuritic-type chest wall twinges."
          },
          "yoga": {
            "asanas": [
              "Marjaryasana-Bitilasana (Cat-Cow - restores rib cage excursion)",
              "Gentle Sphinx Pose (gentle chest expansion)",
              "Balasana with arms alongside body",
              "Shavasana with heart awareness"
            ],
            "pranayama": [
              "Slow Dirga Pranayama (Three-part breath - gently expands rib cage)",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (deficiency strongly linked to persistent costochondritis), Magnesium, Omega-3 fatty acids, Curcumin.",
            "dietarySources": "Golden turmeric milk, wild salmon, bone broth, blueberries, ginger tea, walnuts."
          },
          "holisticIntegration": "Lie lengthwise on a foam roller or rolled yoga mat along your spine for 10 minutes with arms open in a 'T' to passively open the anterior costochondral joints."
        },
        {
          "id": "chest-2",
          "name": "Fibrocystic Breast Changes & Cyclic Mastalgia",
          "severity": "Mild to Moderate",
          "category": "Mammary Benign Proliferative",
          "cause": "Exaggerated response of breast stroma and ductal epithelium to normal monthly estrogen and progesterone fluctuations, producing generalized lumpiness, fluid-filled cysts, and premenstrual tenderness.",
          "prevention": "Reduce or eliminate caffeine and methylxanthines (coffee, cola, chocolate - which raise cAMP and worsen breast cyst pain), wear a supportive non-underwire bra.",
          "lifestyle": "Wear a properly fitted soft supportive bra during exercise and sleep, reduce dietary saturated fats, increase dietary fiber to facilitate estrogen clearance.",
          "medicines": "Over-the-counter NSAIDs (topical or oral), Evening Primrose Oil (1000-3000mg daily), Vitamin E (400 IU daily), Tamoxifen or Danazol (strictly reserved for severe refractory mastalgia).",
          "ayurveda": {
            "dosha": "Stana Granthi caused by Kapha-Vata and Rasa Dhatu Dushti in the Stanyavaha Srotas.",
            "herbs": "Kanchnar, Guggulu, Shatavari, Lodhra, Ashoka, Haridra.",
            "formulations": "Kanchnar Guggulu, Sukumara Ghrita, Ashokarishta, Curcumin 95%.",
            "therapy": "Lepa: applying a warm paste of Haridra and sandalwood over the breasts (avoiding areola)."
          },
          "mudras": {
            "primary": "Yoni Mudra (Hormonal Balance Mudra)",
            "technique": "Form a diamond/triangle with thumbs and index fingers touching; interlace remaining fingers inside. Hold at heart/chest level.",
            "duration": "15 minutes daily.",
            "benefits": "Harmonizes endocrine receptor responsiveness in breast tissue, relieves cyclic breast congestion."
          },
          "yoga": {
            "asanas": [
              "Gomukhasana (Cow Face Pose - stretches pectoral and axillary lymphatics)",
              "Matsyasana",
              "Bhujangasana",
              "Supta Baddha Konasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Chandra Bhedana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Evening Primrose Oil / GLA (Gamma-Linolenic Acid), Vitamin E (400 IU), Iodine (molecular iodine reduces breast cyst sensitivity), Magnesium.",
            "dietarySources": "Ground flaxseeds (lignans bind estrogen receptors), kelp/seaweed in moderation, walnuts, pumpkin seeds, green tea."
          },
          "holisticIntegration": "Consume 2 tablespoons of freshly ground flaxseeds daily in smoothies or oatmeal (flax lignans naturally modulate estrogen receptors in mammary tissue)."
        },
        {
          "id": "chest-3",
          "name": "Lactational Mastitis & Breast Abscess",
          "severity": "Moderate to High",
          "category": "Infectious Mammary",
          "cause": "Milk stasis from incomplete breast emptying, blocked lactiferous ducts, or cracked nipples allowing entry of skin flora (Staphylococcus aureus, Streptococcus), causing intense wedge-shaped erythema and fever.",
          "prevention": "Ensure proper infant latch, nurse or pump frequently to completely empty breasts, change nursing positions to drain all quadrants, avoid tight constricting bras.",
          "lifestyle": "CONTINUE breastfeeding or pumping frequently from the affected breast (milk is safe for the infant and emptying is the most critical therapy!), warm compresses before feeding.",
          "medicines": "Oral Antibiotics targeting Staph (Dicloxacillin 500mg QID or Cephalexin for 10-14 days; TMP-SMX/Clindamycin if MRSA suspected), Analgesics (Ibuprofen), Ultrasound-guided Needle Aspiration (for abscess).",
          "ayurveda": {
            "dosha": "Stana Vidradhi / Stana Shotha caused by Pitta-Kapha and obstructed Stanya (breastmilk).",
            "herbs": "Guduchi, Lodhra, Haridra (Curcumin), Neem, Shatavari.",
            "formulations": "Kaishore Guggulu, Triphala Guggulu, Amritarishta, Jatyadi Ghrita.",
            "therapy": "Gentle breast massage toward the nipple with warm coconut oil while nursing or in a warm shower."
          },
          "mudras": {
            "primary": "Apana Mudra (Purification & Drainage Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip; keep index and pinky fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes smooth downward and outward glandular drainage, clears milk duct obstruction."
          },
          "yoga": {
            "asanas": [
              "Gentle Gomukhasana (arms only)",
              "Seated Cat-Cow",
              "Shavasana (Resting between feeds)"
            ],
            "pranayama": [
              "Soft Diaphragmatic Breathing",
              "Gentle Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Lecithin (Sunflower Lecithin 1200mg 3-4 times daily - emulsifies and decreases milk viscosity to resolve clogs!), Vitamin C, Zinc.",
            "dietarySources": "Bone broth, sunflower seeds (lecithin), blueberries, garlic, fresh coconut water."
          },
          "holisticIntegration": "Take 1200mg Sunflower Lecithin 3 times daily to thin breastmilk viscosity and clear clogged milk ducts before bacterial mastitis sets in."
        },
        {
          "id": "chest-4",
          "name": "Gynecomastia (Male Breast Glandular Enlargement)",
          "severity": "Mild to Moderate (Psychological Distress)",
          "category": "Male Endocrine Mammary",
          "cause": "Benign proliferation of glandular male breast tissue caused by an imbalance between free estrogen action and androgen action (elevated estrogen:androgen ratio) during puberty, aging, or from drugs/anabolic steroids.",
          "prevention": "Avoid anabolic androgenic steroids, avoid marijuana and excessive alcohol, review offending medications (Spironolactone, Finasteride, Cimetidine, Calcium channel blockers).",
          "lifestyle": "Maintain healthy body fat levels (aromatase enzyme in adipose converts testosterone to estradiol), heavy compound weight training, eliminate endocrine-disrupting plastics.",
          "medicines": "Treatment of underlying cause, Selective Estrogen Receptor Modulators (Tamoxifen 10-20mg daily - effective during early proliferative/tender phase), Aromatase Inhibitors (Anastrozole), Subcutaneous Mastectomy / Liposuction.",
          "ayurveda": {
            "dosha": "Stana Vriddhi in Purusha caused by Kapha-Meda accumulation and Pitta disruption.",
            "herbs": "Kanchnar, Guggulu, Varuna, Gokshura, Haridra, Ashwagandha.",
            "formulations": "Kanchnar Guggulu, Medohar Guggulu, Arogyavardhini Vati, Chandraprabha Vati.",
            "therapy": "Udvartana (dry herbal powder scrub) over pectoral region, Lekhana therapy."
          },
          "mudras": {
            "primary": "Surya Mudra (Adipose & Glandular Reduction Mudra)",
            "technique": "Fold ring finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Kindles male metabolic fire, aids reduction of excess estrogenic glandular deposition."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (12 rounds)",
              "Dhanurasana (Bow Pose)",
              "Bhujangasana",
              "Utkatasana"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 50 strokes)",
              "Bhastrika Pranayama",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (30mg - natural aromatase inhibitor), Vitamin D3, DIM (Diindolylmethane - modulates estrogen metabolism).",
            "dietarySources": "Cruciferous vegetables (broccoli, cabbage - rich in DIM), pumpkin seeds, green tea, pasture-raised eggs."
          },
          "holisticIntegration": "Take 200mg DIM (Diindolylmethane) with 30mg Zinc daily to support healthy liver estrogen clearance and naturally balance the testosterone-to-estrogen ratio."
        },
        {
          "id": "chest-5",
          "name": "Pectoralis Major Muscle Strain & Chest Wall Tear",
          "severity": "Moderate to High",
          "category": "Musculoskeletal Traumatic",
          "cause": "Tear of the pectoralis major tendon or muscle belly during eccentric muscle contraction under heavy load (overwhelmingly during the bench press or heavy rugby tackle).",
          "prevention": "Proper bench press technique (tuck elbows 45 degrees, never bounce barbell off chest, avoid excessive flare of elbows), gradual progressive overload warm-ups.",
          "lifestyle": "Immediate RICE (Rest, Ice, Compression, Elevation), avoid pushing or horizontal adduction movements during acute phase, progressive rehab with resistance bands.",
          "medicines": "NSAIDs, Physical therapy (progressive eccentric loading), Surgical Tendon Repair (primary repair to humeral insertion for complete tendon avulsions in active athletes).",
          "ayurveda": {
            "dosha": "Mamsa-Snayu Kshata with severe Vata and Rakta trauma.",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka (Hadjod), Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Pichu (oil-soaked pad) with warm Murivenna oil applied over the pectoral tear."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Muscle & Tendon Regeneration)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates collagen synthesis, supports muscular tissue healing and remodeling."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Gentle seated chest expansion",
              "Gomukhasana (gentle in late recovery)",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (essential for collagen cross-linking), Collagen Peptides (15g), Zinc, Magnesium, Vitamin D3.",
            "dietarySources": "Bone broth, citrus fruits, berries, pumpkin seeds, wild salmon, pasture-raised eggs."
          },
          "holisticIntegration": "Apply warm Murivenna oil (classical Keralan medicated oil for muscle tears and fractures) over the strained pectoral muscle twice daily to accelerate tendon healing."
        },
        {
          "id": "chest-6",
          "name": "Fibroadenoma of the Breast ('Breast Mouse')",
          "severity": "Mild (Benign)",
          "category": "Mammary Benign Stromal-Epithelial",
          "cause": "Benign, well-circumscribed, highly mobile biphasic fibroepithelial tumor of the breast arising from terminal duct lobular units in young women (15-35 years), exhibiting estrogen sensitivity.",
          "prevention": "Maintain hormonal balance, breast self-awareness, routine clinical breast examinations.",
          "lifestyle": "Anti-inflammatory diet, supportive bras, monitoring for size changes during menstrual cycle or pregnancy.",
          "medicines": "Diagnostic Confirmation via Ultrasound + Core Needle Biopsy, Conservative Observation / Ultrasound Surveillance every 6-12 months, Cryoablation or Surgical Excisional Biopsy for lesions >2-3cm.",
          "ayurveda": {
            "dosha": "Stana Granthi caused by Kapha-Meda and localized Vata entrapment.",
            "herbs": "Kanchnar, Guggulu, Varuna, Haridra (Curcumin), Ashoka.",
            "formulations": "Kanchnar Guggulu, Sukumara Ghrita, Curcumin 95%, Ashokarishta.",
            "therapy": "Gentle external application of Kanchnar paste and Lekhana therapies."
          },
          "mudras": {
            "primary": "Surya Mudra combined with Yoni Mudra",
            "technique": "Hold Surya Mudra for 15 mins (dissolves tissue knots); then Yoni Mudra for 15 mins.",
            "duration": "30 minutes daily.",
            "benefits": "Dissolves benign cellular accumulations, harmonizes estrogen-progesterone receptors."
          },
          "yoga": {
            "asanas": [
              "Gomukhasana",
              "Matsyasana",
              "Bhujangasana",
              "Supta Baddha Konasana"
            ],
            "pranayama": [
              "Kapalbhati (gentle)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Iodine, Omega-3 fatty acids, Green tea polyphenols (EGCG).",
            "dietarySources": "Flaxseeds, cruciferous vegetables, green tea, walnuts, berries."
          },
          "holisticIntegration": "Drink 2 cups of organic green tea daily and take 2 tablets of Kanchnar Guggulu twice daily to promote lymphatic resorption of benign breast tissue."
        },
        {
          "id": "chest-7",
          "name": "Intercostal Neuralgia (Rib Nerve Pain)",
          "severity": "Moderate to High (Sharp Stabbing Pain)",
          "category": "Neuropathic Thoracic",
          "cause": "Neuropathic pain resulting from compression, entrapment, or inflammation of the intercostal nerves traveling beneath each rib, triggered by thoracic spine subluxation, trauma, post-thoracotomy, or shingles.",
          "prevention": "Prevent shingles with recombinant zoster vaccine (Shingrix), maintain thoracic spine mobility, protect chest during contact athletics.",
          "lifestyle": "Apply topical lidocaine patches or capsaicin cream over the painful rib trajectory, avoid sudden twisting of torso, practice gentle thoracic expansion.",
          "medicines": "Topical Lidocaine 5% patches, Neuromodulators (Gabapentin, Pregabalin), NSAIDs, Intercostal Nerve Blocks with Bupivacaine and Dexamethasone, Radiofrequency Ablation (RFA).",
          "ayurveda": {
            "dosha": "Parshwashoola caused by aggravated Vata constricting the intercostal nerve channels.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Nirgundi, Bala.",
            "formulations": "Rasnadi Guggulu, Maharasnadi Kwath, Trayodashanga Guggulu, Sahacharadi Taila.",
            "therapy": "Local warm oil application along the rib cage followed by gentle herbal steam."
          },
          "mudras": {
            "primary": "Vayu Mudra (Nerve Pain Relief Mudra)",
            "technique": "Fold index finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Calms irritated peripheral nerve impulses along the intercostal rib path."
          },
          "yoga": {
            "asanas": [
              "Marjaryasana-Bitilasana (Cat-Cow)",
              "Ardha Matsyendrasana (gentle seated twist)",
              "Tadasana with lateral side reach",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Methylcobalamin), Vitamin B1 (Benfotiamine), Alpha-Lipoic Acid (ALA 600mg), Magnesium.",
            "dietarySources": "Avocados, organic pastured eggs, pumpkin seeds, bone broth, leafy green vegetables."
          },
          "holisticIntegration": "Apply a topical 5% Lidocaine patch or warm Nirgundi oil along the course of the painful rib for 12 hours daily to numb irritated intercostal nerve pathways."
        },
        {
          "id": "chest-8",
          "name": "Nipple Fissures & Painful Lactation Trauma",
          "severity": "Moderate (Very Painful)",
          "category": "Cutaneous Mammary Trauma",
          "cause": "Superficial epidermal cracking, laceration, and bleeding of the nipple and areola caused by improper infant latch (shallow latch with nipple compressed against hard palate), incorrect pump flange sizing, or moisture maceration.",
          "prevention": "Work with an International Board Certified Lactation Consultant (IBCLC) to achieve an asymmetric deep latch, measure nipple diameter for proper pump flange fit.",
          "lifestyle": "Express a few drops of breastmilk and rub over nipples post-feed (human milk contains natural epidermal growth factors and immunoglobulins), air-dry nipples, use silver nursing cups.",
          "medicines": "Medical-Grade Ultra-Pure Lanolin, All-Purpose Nipple Ointment (APNO: Mupirocin + Miconazole + Betamethasone 0.1%), Silverette silver nursing cups, Hydrogel breast pads.",
          "ayurveda": {
            "dosha": "Stanamukha Vrana caused by Vata-Pitta friction and skin cracking.",
            "herbs": "Ghrita (Pure A2 Cow Ghee), Shatavari, Yashtimadhu, Coconut oil.",
            "formulations": "Pure A2 Cow Ghee application, Shatavari Ghrita, Jatyadi Ghrita (clean thoroughly before nursing).",
            "therapy": "Local application of pure warm A2 cow ghee over cracked nipples."
          },
          "mudras": {
            "primary": "Prithvi Touch (Skin Healing Touch)",
            "technique": "Mother holds Prithvi Mudra (ring finger to thumb) while nursing to ground nervous tension and promote maternal oxytocin flow.",
            "duration": "During nursing sessions.",
            "benefits": "Eases maternal let-down anxiety, promotes cutaneous tissue regeneration."
          },
          "yoga": {
            "asanas": [
              "Gentle seated neck and shoulder rolls while seated upright",
              "Supported gentle Butterfly Pose"
            ],
            "pranayama": [
              "Calming deep diaphragmatic breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin E, Vitamin C, Collagen, Hydration.",
            "dietarySources": "Pure breastmilk rub, bone broth, coconut oil, avocados, almonds."
          },
          "holisticIntegration": "Wear 925 sterling silver nursing cups (Silverette) directly over nipples inside the bra between feeds—natural silver ions provide potent antimicrobial healing and prevent fabric friction."
        },
        {
          "id": "chest-9",
          "name": "Precordial Catch Syndrome (Texidor's Twinge)",
          "severity": "Mild (Benign, but Causes Anxiety)",
          "category": "Benign Musculoskeletal/Pleural",
          "cause": "Benign, sharp, needle-like anterior chest pain lasting 30 seconds to 3 minutes, typically in adolescents and young adults, exacerbated by deep inspiration; caused by fleeting irritation of the parietal pleura or intercostal somatic nerves.",
          "prevention": "Reassurance that the condition is 100% benign, non-cardiac, and leaves no residual damage; maintaining good posture.",
          "lifestyle": "Take slow shallow breaths during the episode, or take one deliberate deep breath to produce a mild 'pop' sensation which often immediately terminates the spasm.",
          "medicines": "Reassurance is the primary therapy (Zero medication required). OTC Acetaminophen or Ibuprofen if mild soreness lingers.",
          "ayurveda": {
            "dosha": "Kshudra Urah-Shoola caused by transient Vata twinge in the chest channels.",
            "herbs": "Shunthi (Dry ginger), Tulsi, Dashamoola, Ajwain.",
            "formulations": "Dashamoolarishta, Hingwashtak Churna, warm herbal water.",
            "therapy": "Gentle reassurance and deep diaphragmatic calming."
          },
          "mudras": {
            "primary": "Apana Vayu Mudra (Cardiac & Chest Calming Mudra)",
            "technique": "Fold index finger to base of thumb; join middle and ring fingertips to thumb tip. Pinky extended.",
            "duration": "5 minutes during and after the episode.",
            "benefits": "Immediately calms somatic panic, balances autonomic nervous outflow to the chest."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Marjaryasana-Bitilasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Belly Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium, Hydration.",
            "dietarySources": "Fresh water, bananas, pumpkin seeds, chamomile tea."
          },
          "holisticIntegration": "When the sharp needle-like twinge occurs, sit upright, take a slow controlled deep breath to release the chest wall catch, and remind yourself that the heart is 100% healthy."
        },
        {
          "id": "chest-10",
          "name": "Sternal Deformities (Pectus Excavatum & Pectus Carinatum)",
          "severity": "Mild to High",
          "category": "Congenital Thoracic Wall",
          "cause": "Abnormal overgrowth of costal cartilages causing posterior depression of the sternum ('sunken chest' - Pectus Excavatum) or anterior protrusion ('pigeon chest' - Pectus Carinatum), causing cardiopulmonary compression or cosmetic distress.",
          "prevention": "Congenital/genetic connective tissue condition (associated with Marfan or Ehlers-Danlos); early conservative management during adolescent growth spurts.",
          "lifestyle": "Postural exercises, deep breathing training, vacuum bell therapy (for excavatum), external compressive dynamic orthotic bracing (for carinatum), swimming.",
          "medicines": "External Dynamic Chest Bracing (FMF dynamic brace for carinatum - >80% success rate during growth), Vacuum Bell Therapy (for excavatum), Minimally Invasive Nuss Procedure (substernal bar placement).",
          "ayurveda": {
            "dosha": "Asthi-Kandara Vikruti with congenital Vata predominance in Uras.",
            "herbs": "Ashwagandha, Bala, Asthisamharaka, Arjuna, Shallaki.",
            "formulations": "Balarishta, Lakshadi Guggulu, Ashwagandhadhyarishta, Ksheerabala Taila.",
            "therapy": "Chest wall Abhyanga with warm Bala-Ashwagandhadi oil followed by thoracic breathing."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Merudanda Mudra",
            "technique": "Hold fists on thighs with thumbs pointing upright (Merudanda); breathe deeply expanding anterior chest wall.",
            "duration": "15 minutes daily.",
            "benefits": "Channels prana into the thoracic cage, encourages conscious postural rib expansion."
          },
          "yoga": {
            "asanas": [
              "Matsyasana (Fish Pose - premier anterior sternal expansion)",
              "Bhujangasana",
              "Ustrasana (Camel Pose)",
              "Dhanurasana"
            ],
            "pranayama": [
              "Deep Thoracic Dirga Pranayama (focusing on expanding anterior chest)",
              "Bhastrika"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Calcium, Vitamin C, Collagen.",
            "dietarySources": "Bone broth, sesame seeds, citrus fruits, pasture-raised eggs, dark leafy greens."
          },
          "holisticIntegration": "Engage in 30 minutes of swimming (freestyle and backstroke) 3 times weekly to systematically expand the thoracic cage and strengthen paraspinal and pectoral musculature."
        }
      ]
    },
    "hands_wrists": {
      "id": "hands_wrists",
      "name": "Hands, Wrists & Forearms",
      "layer": "externals",
      "category": "Upper Extremity & Manual",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Master sensory-motor manipulators containing 27 bones, complex flexor/extensor tendon pulleys, and median, ulnar, and radial nerve paths.",
      "topDiseases": [
        {
          "id": "hands-1",
          "name": "Carpal Tunnel Syndrome (Median Nerve Entrapment)",
          "severity": "Moderate to High",
          "category": "Compressive Neuropathic",
          "cause": "Compression of the median nerve beneath the rigid transverse carpal flexor retinaculum, caused by tenosynovitis from repetitive wrist flexion/typing, pregnancy fluid retention, or hypothyroidism.",
          "prevention": "Ergonomic keyboard and vertical mouse, maintain neutral wrist position during typing, take micro-breaks every 30 minutes, perform tendon gliding exercises.",
          "lifestyle": "Wear a rigid neutral wrist splint at NIGHT (prevents nocturnal wrist flexion which spikes carpal tunnel pressure), avoid sleeping on bent wrists.",
          "medicines": "Neutral Wrist Splinting at night (first-line), Oral NSAIDs, Ultrasound-guided Carpal Tunnel Corticosteroid Injection, Endoscopic or Open Carpal Tunnel Release surgery.",
          "ayurveda": {
            "dosha": "Vata Vyadhi in Manibandha (wrist) with Snayu and Srotas compression.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Guggulu, Nirgundi.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Maharasnadi Kwath, Sahacharadi Taila.",
            "therapy": "Manibandha Basti (retaining warm medicated oil over the carpal tunnel) and Patra Pinda Sweda."
          },
          "mudras": {
            "primary": "Vayu Mudra (Median Nerve Calming Mudra)",
            "technique": "Fold index finger to touch base of thumb; press thumb over first knuckle of index finger. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Reduces neural compression, relieves thumb and index finger numbness, calms tingling."
          },
          "yoga": {
            "asanas": [
              "Wrist Tendon Gliding Exercises (Hook fist, straight fist, table fist, full fist cycles)",
              "Gentle wrist extensions and flexions",
              "Gomukhasana",
              "Tadasana with fingers interlocked"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Slow Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B6 (Pyridoxal-5-Phosphate 50-100mg - multiple clinical trials show improvement in median nerve conduction!), Vitamin B12, Alpha-Lipoic Acid, Magnesium.",
            "dietarySources": "Avocados, organic pastured poultry, sunflower seeds, bananas, wild salmon, spinach."
          },
          "holisticIntegration": "Wear a neutral wrist brace strictly every night to bed, and perform 10 cycles of Median Nerve Tendon Gliding exercises every 2 hours during computer work."
        },
        {
          "id": "hands-2",
          "name": "De Quervain's Tenosynovitis ('Gamer's / Mommy's Thumb')",
          "severity": "Moderate (Sharp Radial Wrist Pain)",
          "category": "Stenosing Tenosynovial",
          "cause": "Stenosing tenosynovitis of the first dorsal compartment of the wrist, causing painful friction of the abductor pollicis longus (APL) and extensor pollicis brevis (EPB) tendons during thumb movement.",
          "prevention": "Avoid repetitive thumb scrolling on smartphones with one hand, use voice-to-text, scoop infant with forearms rather than pinching with thumbs.",
          "lifestyle": "Thumb spica splinting, apply ice over radial styloid for 15 minutes, avoid repetitive wringing or pinching motions.",
          "medicines": "Thumb Spica Splint (immobilizes thumb and wrist), NSAIDs, Ultrasound-guided Corticosteroid Injection into the first dorsal compartment (>80% curative), Surgical Release of first dorsal sheath.",
          "ayurveda": {
            "dosha": "Snayu-Kandara Gata Vata and Pitta with intense local Shoola (pain) on the Angustha (thumb).",
            "herbs": "Shallaki, Rasna, Haridra (Curcumin), Nirgundi, Guggulu.",
            "formulations": "Kaishore Guggulu, Yograj Guggulu, Maharasnadi Kwath, Murivenna oil.",
            "therapy": "Local application of Murivenna oil followed by warm fomentation."
          },
          "mudras": {
            "primary": "Gentle Thumb Relaxation Rest",
            "technique": "Rest thumb gently against side of index finger without pinching or pressing; keep hand open and soft.",
            "duration": "20 minutes daily.",
            "benefits": "De-tenses the abductor pollicis longus tendon sheath, reduces radial wrist friction."
          },
          "yoga": {
            "asanas": [
              "Gentle wrist stretches with open palm",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid poses bearing heavy weight on bent wrists (Downward Dog, Plank) during acute flare."
          },
          "vitamins": {
            "deficiencies": "Curcumin, Magnesium Glycinate, Omega-3 fatty acids, Vitamin C.",
            "dietarySources": "Golden turmeric milk, wild salmon, bone broth, blueberries, ginger tea."
          },
          "holisticIntegration": "Wear a thumb spica splint during smartphone use and baby lifting for 2 weeks, and apply warm Murivenna oil over the radial wrist every night."
        },
        {
          "id": "hands-3",
          "name": "Osteoarthritis of the Hand & First CMC (Base of Thumb)",
          "severity": "Moderate to High",
          "category": "Joint Degenerative",
          "cause": "Loss of articular cartilage, subchondral sclerosis, and osteophyte formation at the distal interphalangeal (Heberden's nodes), proximal interphalangeal (Bouchard's nodes), and first carpometacarpal (CMC) basal thumb joint.",
          "prevention": "Use adaptive jar openers and ergonomic pens, avoid high-torque pinching and twisting, maintain hand grip strength.",
          "lifestyle": "Warm wax paraffin baths for hands (15 mins), use ergonomic kitchen tools with large handles, wear soft neoprene thumb support gloves during manual tasks.",
          "medicines": "Topical NSAID gel (Diclofenac 1% - first line for hand OA with minimal systemic side effects), Acetaminophen, Intra-articular Corticosteroid or Hyaluronic Acid injections, First CMC Trapeziectomy with ligament reconstruction.",
          "ayurveda": {
            "dosha": "Sandhigata Vata in Hasta and Angustha joints with loss of Sleshaka Kapha (synovial fluid).",
            "herbs": "Shallaki (Boswellia), Guggulu, Ashwagandha, Rasna, Nirgundi.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Ksheerabala Taila, Mahanarayana Taila.",
            "therapy": "Hasta Abhyanga (warm medicated hand massage) followed by warm herbal steam (Nadi Sweda)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Cartilage & Bone Nourishing Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates cellular chondrocyte vitality, reinforces structural joint integrity."
          },
          "yoga": {
            "asanas": [
              "Finger Spreads and Gentle Fists (in warm water)",
              "Tadasana with arms open",
              "Gomukhasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Glucosamine Sulfate + Chondroitin, Vitamin D3, Boswellia serrata (30% AKBA), Omega-3 fatty acids.",
            "dietarySources": "Bone broth, wild salmon, turmeric golden tea, walnuts, olive oil, berries."
          },
          "holisticIntegration": "Dip hands into a warm Paraffin Wax Bath or warm Epsom salt water for 15 minutes every morning to melt away joint stiffness, then massage with warm Mahanarayana oil."
        },
        {
          "id": "hands-4",
          "name": "Rheumatoid Arthritis of the Hands (RA)",
          "severity": "High / Chronic Autoimmune",
          "category": "Autoimmune Inflammatory Synovitis",
          "cause": "Systemic autoimmune inflammatory synovitis targeting symmetric MCP and PIP joints (sparing DIP joints), driven by anti-CCP antibodies and rheumatoid factor, causing pannus formation, bone erosions, ulnar drift, and swan-neck deformities.",
          "prevention": "Strict cessation of smoking (smoking dramatically worsens RA severity), early aggressive treatment with DMARDs within the 'window of opportunity' (first 3 months) to prevent permanent joint destruction.",
          "lifestyle": "Maintain joint mobility without overloading during flares, balance rest and exercise, use adaptive eating/writing tools, Mediterranean anti-inflammatory diet.",
          "medicines": "Conventional Synthetic DMARDs (Methotrexate - anchor drug), Biologics: Anti-TNF (Adalimumab), Anti-IL6 (Tocilizumab), Anti-CD20 (Rituximab), JAK Inhibitors (Tofacitinib, Upadacitinib), Low-dose Prednisone bridge.",
          "ayurveda": {
            "dosha": "Amavata (classical Ayurvedic correlation for RA) caused by toxic Ama circulating and lodging in the Sandhis (joints).",
            "herbs": "Shallaki (Boswellia), Eranda (Castor oil - premier for clearing Ama), Shunthi (Ginger), Guggulu, Guduchi.",
            "formulations": "Simhanada Guggulu, Amritarishta, Maharasnadi Kwath, Rasnadi Guggulu.",
            "therapy": "Valuka Sweda (hot sand bag fomentation - strictly avoid heavy oily massage during active Ama flare!)."
          },
          "mudras": {
            "primary": "Vayu Mudra combined with Surya Mudra",
            "technique": "Fold index finger to thumb base, and ring finger to thumb base; hold with thumb. Keep middle and pinky fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Clears toxic Ama from articular tissues, reduces inflammatory synovial stiffness."
          },
          "yoga": {
            "asanas": [
              "Gentle Finger-Thumb Touches (Touch thumb to each fingertip smoothly 10 times)",
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Anulom Vilom (Nadi Shodhana - 15 mins daily)",
              "Bhramari Pranayama",
              "Deep Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Omega-3 Fatty Acids (high-dose EPA/DHA 3-4g daily - clinically proven to reduce NSAID requirements), Vitamin D3, Curcumin, Zinc.",
            "dietarySources": "Wild oily fish, golden turmeric tea with dry ginger, walnuts, dark leafy greens, blueberries."
          },
          "holisticIntegration": "Take 1 tsp organic castor oil mixed in 1 cup warm ginger tea once a week at bedtime to clear systemic Ama from the gastrointestinal-joint axis."
        },
        {
          "id": "hands-5",
          "name": "Stenosing Tenosynovitis ('Trigger Finger / Trigger Thumb')",
          "severity": "Moderate (Painful Catching/Locking)",
          "category": "Flexor Tendon Sheath Pulley",
          "cause": "Inflammation, thickening, and nodule formation of the flexor digitorum tendon, causing mismatch and painful catching/locking beneath the A1 pulley at the metacarpal head.",
          "prevention": "Avoid prolonged forceful gripping tasks (gardening shears, pliers, power tools) without padded gloves, take frequent hand resting breaks.",
          "lifestyle": "Wear an overnight finger extension splint, perform gentle passive tendon stretching, apply gentle ice over the nodule at the base of the palm.",
          "medicines": "Overnight Trigger Finger Splint (keeps finger extended), NSAIDs, Ultrasound-guided Corticosteroid Injection into flexor tendon sheath (up to 70-80% cure rate), Surgical A1 Pulley Release.",
          "ayurveda": {
            "dosha": "Snayugata Vata causing Stambha (locking) in the Anguli (finger).",
            "herbs": "Shallaki, Guggulu, Rasna, Ashwagandha, Nirgundi.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Sahacharadi Taila, Murivenna oil.",
            "therapy": "Local application of warm Murivenna oil and gentle passive finger mobilization."
          },
          "mudras": {
            "primary": "Gentle Open Hand Mudra",
            "technique": "Keep fingers softly extended and spread wide, resting comfortably on thighs without curling.",
            "duration": "15 minutes daily.",
            "benefits": "Prevents flexor tendon shortening, encourages smooth gliding through the A1 pulley."
          },
          "yoga": {
            "asanas": [
              "Passive Finger Extensions (Gently press fingers backward against table surface)",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B6 (Pyridoxine 50-100mg - shown in trials to reduce tenosynovial swelling), Magnesium, Curcumin.",
            "dietarySources": "Avocados, bananas, sunflower seeds, wild salmon, golden turmeric milk."
          },
          "holisticIntegration": "Wear a small aluminum or thermoplastic finger splint to keep the affected finger straight while sleeping for 4-6 weeks to prevent morning locking."
        },
        {
          "id": "hands-6",
          "name": "Dupuytren's Contracture (Palmar Fibromatosis)",
          "severity": "Moderate to High",
          "category": "Fibro-Proliferative Palmar",
          "cause": "Benign progressive fibroproliferative disorder of the palmar aponeurosis characterized by myofibroblast proliferation, forming firm palmar nodules and cords that flex the MCP and PIP joints (most commonly ring and pinky fingers).",
          "prevention": "Avoid heavy manual vibrational tools, smoking cessation, moderate alcohol consumption, early evaluation when palm nodules develop.",
          "lifestyle": "Gentle hand stretching on flat surfaces, padded gloves during heavy grip tasks, monitoring contracture with the 'tabletop test' (inability to lay palm flat on table).",
          "medicines": "Collagenase Clostridium histolyticum (Xiaflex - enzymatic cord digestion), Needle Aponeurotomy (percutaneous needle release), Limited Fasciectomy (surgical excision of contracted cords).",
          "ayurveda": {
            "dosha": "Snayu Sankocha and Siragranthi in Tala (palm) caused by Vata-Kapha and Ama.",
            "herbs": "Shallaki, Guggulu, Ashwagandha, Haridra (Curcumin), Manjistha.",
            "formulations": "Kanchnar Guggulu, Kaishore Guggulu, Sahacharadi Taila, Mahanarayana Taila.",
            "therapy": "Deep palmar massage with warm Sahacharadi oil followed by warm fomentation."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Palmar Extension Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers outstretched and actively extended.",
            "duration": "20 minutes daily.",
            "benefits": "Promotes healthy connective tissue remodeling, counteracts flexion contraction."
          },
          "yoga": {
            "asanas": [
              "Tabletop Palm Press (Place palms flat on table and gently lean weight forward)",
              "Namaste / Anjali Mudra (Pressing palms firmly together)",
              "Tadasana with palms open"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin E, N-Acetylcysteine (NAC - inhibits myofibroblast proliferation in vitro), Curcumin, Omega-3.",
            "dietarySources": "Blueberries, green tea, walnuts, extra virgin olive oil, dark leafy greens."
          },
          "holisticIntegration": "Place both hands flat against a table surface and gently press down for 30 seconds, repeating 5 times daily, to maintain palmar fascia length."
        },
        {
          "id": "hands-7",
          "name": "Ganglion Cyst of the Wrist (Dorsal & Volar)",
          "severity": "Mild to Moderate ('Bible Bumps')",
          "category": "Synovial-Myxoid Pseudocyst",
          "cause": "Herniation of dense connective tissue from a joint capsule or tendon sheath (most commonly scapholunate joint on dorsal wrist 70%), filled with thick, gelatinous, high-viscosity hyaluronic acid mucin.",
          "prevention": "Avoid repetitive forced wrist hyperextension, treat underlying wrist ligamentous laxity or joint irritation.",
          "lifestyle": "Avoid hitting the cyst with a heavy book (the old 'Bible bump' myth causes bone and ligament trauma!), wear a supportive wrist brace during heavy activities.",
          "medicines": "Reassurance (50% spontaneously resolve without treatment), Aspiration with large-bore needle (approx 50% recurrence rate), Surgical Excision with removal of the stalk/scapholunate joint capsule.",
          "ayurveda": {
            "dosha": "Granthi Roga in Manibandha caused by Kapha-Meda and Vata accumulation.",
            "herbs": "Kanchnar (Bauhinia variegata), Guggulu, Varuna, Haridra, Shallaki.",
            "formulations": "Kanchnar Guggulu, Varunadi Kwath, Kaishore Guggulu, Triphala.",
            "therapy": "Lekhana therapies and local application of Kanchnar-turmeric paste."
          },
          "mudras": {
            "primary": "Surya Mudra (Cyst Dissolving Mudra)",
            "technique": "Fold ring finger to base of thumb, hold with thumb. Keep other three fingers straight.",
            "duration": "15-20 minutes daily.",
            "benefits": "Stimulates localized fluid resorption, kindles metabolic tissue clearance."
          },
          "yoga": {
            "asanas": [
              "Gentle wrist circles (slow, smooth range of motion)",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Kapalbhati (gentle)",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid heavy weight-bearing on extended wrists (pushups, handstands)."
          },
          "vitamins": {
            "deficiencies": "Curcumin, Bioflavonoids, Vitamin C, Zinc.",
            "dietarySources": "Turmeric tea with black pepper, green tea, berries, steamed vegetables, bone broth."
          },
          "holisticIntegration": "Take 2 tablets of Kanchnar Guggulu twice daily with warm water to promote natural metabolic resorption of the ganglion cyst's mucinous fluid."
        },
        {
          "id": "hands-8",
          "name": "Raynaud's Phenomenon (Primary & Secondary)",
          "severity": "Moderate (Disabling Cold Sensitivity)",
          "category": "Peripheral Microvascular Vasospastic",
          "cause": "Exaggerated sympathetic alpha-2 adrenergic vasoconstriction of digital arteries in response to cold temperatures or emotional stress, causing classic triphasic color changes: White (ischemia), Blue (cyanosis), Red (reperfusion).",
          "prevention": "Dress in warm layers, wear insulated mittens rather than gloves (mittens keep fingers together, retaining heat), keep core body warm, complete cessation of all smoking.",
          "lifestyle": "Carry reusable hand warmers, avoid holding iced beverage glasses without insulated sleeves, run warm water over hands at first sign of attack, practice biofeedback hand warming.",
          "medicines": "Dihydropyridine Calcium Channel Blockers (Amlodipine, Nifedipine - first line), Topical Nitroglycerin cream, Phosphodiesterase-5 inhibitors (Tadalafil, Sildenafil), Losartan, Fluoxetine.",
          "ayurveda": {
            "dosha": "Sheeta Vata and Rakta Dushti in the Anguli Dhamanis (digital arteries).",
            "herbs": "Shunthi (Dry ginger - warming), Pippali, Maricha (Trikatu), Garlic (Lasuna), Arjuna.",
            "formulations": "Trikatu Churna, Arjunarishta, Kaishore Guggulu, Dashamoola Kashaya.",
            "therapy": "Warm oil massage (Abhyanga) of hands and forearms with warming mustard or sesame oil."
          },
          "mudras": {
            "primary": "Linga Mudra (Heat Generating Mudra)",
            "technique": "Interlace fingers of both hands, keep left thumb upright pointing vertically, encircle it with right thumb and index finger.",
            "duration": "15 minutes in a cool environment.",
            "benefits": "Generates internal systemic body warmth, triggers peripheral vasodilation to fingers."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (rapidly warms the body and peripheral circulation)",
              "Virabhadrasana I & II",
              "Tadasana with energetic finger stretches",
              "Vajrasana"
            ],
            "pranayama": [
              "Surya Bhedana Pranayama (Right nostril breathing - generates internal warmth)",
              "Bhastrika Pranayama",
              "Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium (natural vasodilator), L-Arginine (nitric oxide precursor), Ginkgo Biloba extract (improves microcirculation), Vitamin B3 (Niacin / Inositol Hexanicotinate).",
            "dietarySources": "Garlic, ginger, cayenne pepper (capsaicin), beetroot juice, dark chocolate, walnuts."
          },
          "holisticIntegration": "Drink warm fresh ginger and cinnamon tea before heading outdoors into cold weather. Practice 'Windmill Arm Swings' (swinging arms in 360-degree circles) to centrifugal force blood back into white fingertips."
        },
        {
          "id": "hands-9",
          "name": "Repetitive Strain Injury (RSI) & Forearm Tendinopathy",
          "severity": "Moderate",
          "category": "Occupational Ergonomic Strain",
          "cause": "Micro-trauma, collagen cross-link failure, and myofascial strain in the forearm flexor/extensor muscle compartments and tendons from continuous high-frequency keyboarding, mousing, or assembly line tasks.",
          "prevention": "Ergonomic keyboard/mouse, voice dictation software, taking 5-minute movement breaks every 45 minutes, arm rests supporting forearms.",
          "lifestyle": "Perform forearm extensor/flexor stretches, adjust chair height so elbows rest at 90-100 degrees, avoid gripping mouse with excessive tension.",
          "medicines": "Topical NSAIDs (Diclofenac gel), Ergonomic occupational therapy, Physical therapy (eccentric strengthening), Dry needling.",
          "ayurveda": {
            "dosha": "Shrama-Janya Vata Dushti in Bahu and Manibandha.",
            "herbs": "Ashwagandha, Bala, Shallaki, Rasna, Guggulu.",
            "formulations": "Balarishta, Maharasnadi Kwath, Ashwagandharishta, Mahanarayana Taila.",
            "therapy": "Gentle Abhyanga of forearms with warm Mahanarayana oil followed by warm towel compress."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Muscular Remodeling Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Promotes micro-vascular repair of fatigued forearm tendons and fascia."
          },
          "yoga": {
            "asanas": [
              "Forearm Prayer Stretch (Palms together in front of chest, lower hands toward waist)",
              "Reverse Prayer Stretch (Backs of hands together)",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Vitamin B6, Collagen Peptides, Vitamin C.",
            "dietarySources": "Bone broth, pumpkin seeds, blueberries, walnuts, leafy greens, avocados."
          },
          "holisticIntegration": "Use a foam ball or massage gun on low intensity along the forearm extensor and flexor muscle bellies for 3 minutes after each work shift to prevent chronic myofascial trigger points."
        },
        {
          "id": "hands-10",
          "name": "Scaphoid Fracture & Wrist Sprain",
          "severity": "High (Avascular Necrosis Risk)",
          "category": "Traumatic Carpal",
          "cause": "Fall Onto Outstretched Hand (FOOSH) causing acute tear of the scapholunate ligament or fracture of the scaphoid waist; the retrograde blood supply through dorsal branches of the radial artery puts scaphoid at high risk of avascular necrosis (AVN) and nonunion.",
          "prevention": "Wear wrist guards during rollerblading, skateboarding, and snowboarding; fall prevention training.",
          "lifestyle": "Strict immobilization as directed by orthopedic physician, never ignore 'anatomical snuffbox tenderness' even if initial X-rays appear negative (repeat X-rays or MRI in 10-14 days).",
          "medicines": "Thumb Spica Cast (immobilization for 6-12 weeks for non-displaced scaphoid waist fractures), Percutaneous Herbert Screw Fixation (for displaced fractures or active athletes), Bone stimulators.",
          "ayurveda": {
            "dosha": "Asthi-Bhagna and Snayu-Kshata in Manibandha with acute Vata-Rakta trauma.",
            "herbs": "Asthisamharaka (Cissus quadrangularis - 'Hadjod'), Laksha, Arjuna, Ashwagandha, Bala.",
            "formulations": "Lakshadi Guggulu, Gandha Thailam, Praval Pishti, Murivenna oil.",
            "therapy": "Immobilization followed by gentle external application of Murivenna oil once cast is removed."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Fracture Healing & Osteogenesis)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "25 minutes twice daily.",
            "benefits": "Stimulates osteoblast differentiation, accelerates fracture callus formation."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana",
              "Bhadrasana",
              "Shavasana (Resting comfortably)"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ],
            "cautions": "Strictly zero weight-bearing on the injured hand/wrist during fracture consolidation."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (maintain >50 ng/mL), Vitamin K2 (MK-7), Calcium Citrate, Zinc, Boron, Collagen.",
            "dietarySources": "Cissus quadrangularis extract, bone broth, sesame seeds, dark leafy greens, pasture-raised eggs."
          },
          "holisticIntegration": "Take 500mg standardized Cissus quadrangularis (Hadjod) extract twice daily with warm milk—clinically proven to accelerate carpal bone fracture healing by up to 30%."
        }
      ]
    },
    "abdomen_core": {
      "id": "abdomen_core",
      "name": "Abdomen, Core & Navel (Nabhi)",
      "layer": "externals",
      "category": "Abdominal Wall & Core",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Protective muscular corset (rectus abdominis, obliques, transversus), fascia, peritoneum, and the vital anatomical and energetic center of the navel (Nabhi Marma).",
      "topDiseases": [
        {
          "id": "abdo-1",
          "name": "Abdominal Wall Hernias (Inguinal, Umbilical & Ventral)",
          "severity": "Moderate (Strangulation / Incarceration Emergency Risk)",
          "category": "Musculo-Fascial Defect",
          "cause": "Protrusion of abdominal viscera (omentum or bowel loop) through a congenital or acquired fascial weakness in the groin (inguinal 75%) or umbilicus (umbilical), exacerbated by chronic coughing, constipation, heavy lifting, or obesity.",
          "prevention": "Avoid heavy deadlifting with breath-holding Valsalva, treat chronic cough and constipation promptly, maintain healthy body weight, strengthen core transversus abdominis.",
          "lifestyle": "Wear supportive hernia trusses temporarily if non-surgical candidate, avoid heavy lifting, support hernia with hand during coughing/sneezing.",
          "medicines": "Watchful Waiting (for asymptomatic minimally bothersome inguinal hernias in men), Elective Laparoscopic or Open Mesh Herniorrhaphy (Lichtenstein, TAPP, TEP), Emergency Surgery for strangulation (ischemic bowel).",
          "ayurveda": {
            "dosha": "Antravriddhi (inguinal hernia) and Nabhi Vriddhi (umbilical hernia) caused by vitiated Apana Vata forcing bowel through Mamsadhara Kala.",
            "herbs": "Ashwagandha, Bala, Shallaki, Haritaki, Castor oil (Eranda Taila).",
            "formulations": "Sukumara Ghrita, Balarishta, Trayodashanga Guggulu, Gandharva Haritaki.",
            "therapy": "Snigdha Virechana to ensure soft, effortless bowel movements (prevents intra-abdominal pressure spikes)."
          },
          "mudras": {
            "primary": "Apana Mudra (Downward Pressure Reliever)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Regulates downward bio-energy, prevents retrograde abdominal gas pressure buildup."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Inverts gravity to gently return herniated contents)",
              "Setu Bandhasana (gentle Bridge)",
              "Tadasana with axial stretch",
              "Shavasana"
            ],
            "pranayama": [
              "Ujjayi Breathing (gentle, without breath retention)",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Strictly avoid heavy abdominal crunches, forceful forward bending, and intense Kapalbhati."
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides (strengthens connective fascia), Vitamin C, Zinc, Dietary Fiber (prevents constipation).",
            "dietarySources": "Bone broth, citrus fruits, dark berries, stewed prunes, flaxseeds, leafy green vegetables."
          },
          "holisticIntegration": "Take 1 tbsp organic Psyllium husk (Isabgol) with warm water every night to ensure effortless, zero-straining bowel movements, preventing pressure spikes on the abdominal wall."
        },
        {
          "id": "abdo-2",
          "name": "Diastasis Recti Abdominis (Postpartum Core Separation)",
          "severity": "Mild to Moderate",
          "category": "Musculo-Fascial Separation",
          "cause": "Abnormal separation (>2cm or 2 finger-widths) between the left and right rectus abdominis muscle bellies along the linea alba, caused by mechanical stretching from expanding uterus during pregnancy and hormonal relaxin laxity.",
          "prevention": "Deep transversus abdominis activation prior to and during pregnancy, roll to your side when getting out of bed ('log roll' technique), avoid traditional sit-ups during pregnancy.",
          "lifestyle": "Always roll onto your side before sitting up from bed, avoid traditional abdominal crunches and planks which dome and worsen the separation, wear an abdominal support binder postpartum.",
          "medicines": "Specialized Postpartum Physical Therapy (Tupler Technique, Hypopressive gymnastics), Abdominoplasty / Rectus Plication surgery (for severe functional separation with hernia).",
          "ayurveda": {
            "dosha": "Mamsa-Snayu Shaithilya in Udara caused by Vata dominance and tissue depletion postpartum.",
            "herbs": "Bala (Sida cordifolia - supreme muscle strengthener), Ashwagandha, Shatavari, Dashamoola.",
            "formulations": "Balarishta, Dashamoolarishta, Sukumara Ghrita, Dhanwantharam Taila.",
            "therapy": "Udaraveshtana (classical postpartum belly wrapping with long cotton cloth) following warm oil Abhyanga."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Connective Tissue Restorative)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports collagen remodeling in the stretched linea alba, tonifies deep fascia."
          },
          "yoga": {
            "asanas": [
              "Transversus Abdominis Activation (Draw navel gently toward spine on exhalation, hold for 5s, repeat 15 times)",
              "Bird-Dog Pose (Gentle)",
              "Pelvic Tilts on back",
              "Setu Bandhasana"
            ],
            "pranayama": [
              "Diaphragmatic Breathing with gentle core drawing-in on exhale",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Strictly avoid standard sit-ups, crunches, forward planks, and boat pose (Navasana)!"
          },
          "vitamins": {
            "deficiencies": "Collagen Types I & III, Vitamin C, Zinc, Vitamin D3, Protein.",
            "dietarySources": "Bone broth, pasture-raised eggs, citrus fruits, wild salmon, pumpkin seeds, lentils."
          },
          "holisticIntegration": "Practice classical postpartum belly wrapping (Udaraveshtana) using a supportive cotton cloth after massaging lower abdomen with warm Dhanwantharam oil."
        },
        {
          "id": "abdo-3",
          "name": "Visceral Adiposity & Metabolic Belly Fat",
          "severity": "Moderate to High (Cardiovascular Risk)",
          "category": "Deep Endocrine-Metabolic",
          "cause": "Accumulation of metabolically active intra-abdominal adipose tissue surrounding internal organs, driven by hyperinsulinemia, chronic hypercortisolemia, excess fructose/alcohol, and sedentary lifestyle, releasing inflammatory cytokines (IL-6, TNF-alpha).",
          "prevention": "Eliminate liquid sugars and high-fructose corn syrup, daily aerobic movement, time-restricted eating (16:8 intermittent fasting), maintain waist circumference <35 inches (women) / <40 inches (men).",
          "lifestyle": "Engage in progressive resistance training 3x weekly, sleep 7-8 hours (sleep deprivation spikes visceral cortisol accumulation), walk 10,000 steps daily.",
          "medicines": "GLP-1 receptor agonists (Semaglutide, Tirzepatide - dramatic visceral fat reduction), Metformin, SGLT2 inhibitors.",
          "ayurveda": {
            "dosha": "Medoroga and Udara Vriddhi with severe Kapha-Meda accumulation and Agnimandya.",
            "herbs": "Guggulu, Haridra (Turmeric), Triphala, Shilajit, Vijaysar, Cinnamon (Tvak).",
            "formulations": "Medohar Guggulu, Arogyavardhini Vati, Triphala Churna, Chandraprabha Vati.",
            "therapy": "Udvartana (vigorous dry herbal powder scrub with Triphala and Kolakulathadi powder) to mobilize deep Meda."
          },
          "mudras": {
            "primary": "Surya Mudra (Metabolism & Adipose Burner)",
            "technique": "Fold ring finger down to the base of the thumb; press thumb over knuckle with gentle pressure. Keep other three fingers straight.",
            "duration": "20 minutes before morning exercise.",
            "benefits": "Kindles visceral metabolic fire (Jatharagni), stimulates lipolysis in deep intra-abdominal adipose tissue."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (Sun Salutations - 12 rounds)",
              "Mandukasana (Frog Pose)",
              "Dhanurasana (Bow Pose)",
              "Utkatasana (Chair Pose)",
              "Phalakasana (Plank Pose)"
            ],
            "pranayama": [
              "Kapalbhati (3 rounds of 50 strokes)",
              "Agni Sara Kriya (deep abdominal pumping)",
              "Surya Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium, Vitamin D3, Chromium Picolinate, Omega-3 fatty acids, Berberine.",
            "dietarySources": "Apple cider vinegar (1 tbsp in water before meals), green tea (EGCG), bitter gourd, cinnamon, wild salmon."
          },
          "holisticIntegration": "Perform 3 rounds of Agni Sara Kriya on an empty stomach every morning, followed by drinking 1 glass of warm water with 1 tbsp raw apple cider vinegar and 1/2 tsp Ceylon cinnamon."
        },
        {
          "id": "abdo-4",
          "name": "Navel Displacement & Solar Plexus Dysregulation (Nabhi / Dharan)",
          "severity": "Moderate (Severe Functional Indigestion)",
          "category": "Biomechanical Energetic Centering",
          "cause": "Biomechanical displacement or muscle spasm around the central periumbilical aortic pulsation (Nabhi Marma / Solar Plexus) caused by lifting heavy weights on one side, sudden slipping, or jumping, causing erratic diarrhea, constipation, or nausea.",
          "prevention": "Lift weights symmetrically using both hands, warm up prior to athletic jumping, avoid sudden awkward twisting with heavy loads.",
          "lifestyle": "Check navel pulse symmetry (lie flat on back and press thumb into navel to feel centered aortic pulsation), avoid skipping meals, rest in supine posture.",
          "medicines": "Osteopathic Manipulative Medicine (OMT) / Abdominal Physical Therapy (periumbilical myofascial release), Antispasmodics, Reassurance.",
          "ayurveda": {
            "dosha": "Nabhi Chala / Dharan Girna caused by Samana Vata and Pachaka Pitta displacement.",
            "herbs": "Hing (Asafoetida), Shunthi (Ginger), Ajwain, Fennel, Castor oil.",
            "formulations": "Hingwashtak Churna, Shankh Vati, Lavan Bhaskar Churna, Dadimadi Ghrita.",
            "therapy": "Nabhi Pariksha and Nabhi Dharan setting (classical gentle thumb and suction glass realignment technique)."
          },
          "mudras": {
            "primary": "Matangi Mudra (Solar Plexus & Navel Harmony Mudra)",
            "technique": "Interlace all fingers together; extend both middle fingers straight up pointing toward ceiling, touching at fingertips. Hold at navel level.",
            "duration": "15 minutes daily while breathing into the belly.",
            "benefits": "Balances the Manipura Chakra, recenters chaotic solar plexus autonomic rhythms."
          },
          "yoga": {
            "asanas": [
              "Pawanmuktasana (Knees-to-Chest - realigns lumbar and pelvic core)",
              "Dhanurasana (Bow Pose - centers navel)",
              "Chakrasana (Wheel Pose)",
              "Matsyasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Gentle Dirga Pranayama (deep belly breathing)",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (calms abdominal myofascial spasms), Vitamin B-Complex.",
            "dietarySources": "Warm khichdi with ghee, ginger tea, fennel water, stewed apples, bone broth."
          },
          "holisticIntegration": "Nabhi Chikitsa: Apply 3 drops of pure lukewarm mustard or sesame oil into the navel cavity (Nabhi) before sleep to nourish the 72,000 subtle Nadis terminating at the solar plexus."
        },
        {
          "id": "abdo-5",
          "name": "Chronic Abdominal Bloating & Functional Distension",
          "severity": "Mild to Moderate",
          "category": "Visceral Hypersensitivity & Gas Kinetics",
          "cause": "Abdomino-phrenic dyssynergia (abnormal paradoxical contraction of the diaphragm and relaxation of the anterior abdominal wall in response to normal intraluminal gas volume), SIBO, or sluggish gut transit.",
          "prevention": "Chew each mouthful 30 times, avoid drinking carbonated beverages or using drinking straws (aerophagia), identify FODMAP triggers.",
          "lifestyle": "Mindful unhurried eating in a parasympathetic state, avoid eating late dinners, 15-minute gentle walk immediately after meals.",
          "medicines": "Simethicone (gas bubble coalescent), Prokinetics, Low-dose Neuromodulators (Amitriptyline for visceral hypersensitivity), Peppermint oil capsules (enteric-coated antispasmodic).",
          "ayurveda": {
            "dosha": "Adhmana (flatulence/bloating) and Anaha caused by obstructed Apana and Samana Vata.",
            "herbs": "Hing (Asafoetida - premier carminative), Ajwain (Carom seeds), Jeeraka (Cumin), Saunf (Fennel), Shunthi.",
            "formulations": "Hingwashtak Churna, Shankh Vati, Lavan Bhaskar Churna, Jeerakarishta.",
            "therapy": "Abdominal Abhyanga with warm sesame oil in clockwise circles around the navel."
          },
          "mudras": {
            "primary": "Pushan Mudra (Digestion & Gas Relief Mudra)",
            "technique": "Right hand touches thumb to index and middle fingertips; Left hand touches thumb to middle and ring fingertips. Rest on thighs.",
            "duration": "15 minutes after eating.",
            "benefits": "Coordinates gastric emptying, relaxes spastic diaphragmatic muscles, dispels bloating."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (Post-meal - sit for 10-15 mins)",
              "Pawanmuktasana (Wind-relieving Pose)",
              "Marjaryasana-Bitilasana",
              "Supta Matsyendrasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing (retrains diaphragm not to push belly out)",
              "Anulom Vilom"
            ]
          },
          "vitamins": {
            "deficiencies": "Digestive Enzymes, Hydrochloric Acid (Betaine HCl), Magnesium, Probiotics.",
            "dietarySources": "CCF Tea (Cumin, Coriander, Fennel seeds boiled in water), papaya, pineapple, fermented kefir, bone broth."
          },
          "holisticIntegration": "Sip 1 warm cup of CCF Tea (1/2 tsp each of cumin, coriander, and fennel seeds boiled in 2 cups water down to 1 cup) 20 minutes after lunch and dinner."
        },
        {
          "id": "abdo-6",
          "name": "Post-Surgical Peritoneal Adhesions",
          "severity": "Moderate to High (Bowel Obstruction Risk)",
          "category": "Fibro-Peritoneal Scarring",
          "cause": "Fibrous bands of scar tissue forming between intra-abdominal organs and the peritoneal wall following laparotomy, laparoscopy, or pelvic peritonitis, predisposing to chronic traction pain and small bowel obstruction (SBO).",
          "prevention": "Minimally invasive laparoscopic surgical techniques, use of anti-adhesion barriers (Seprafilm) during surgery, early postoperative ambulation.",
          "lifestyle": "Stay active with daily walking, chew food thoroughly to prevent fibrous food boluses from obstructing narrowed loops, stay well hydrated.",
          "medicines": "Conservative Bowel Rest / NGT decompression (for partial SBO), Serrapeptase / Nattokinase (systemic proteolytic enzymes), Laparoscopic Adhesiolysis (reserved for recurrent obstruction).",
          "ayurveda": {
            "dosha": "Vrana Vastu and Snayu-Granthi in Udara caused by post-surgical Vata-Kapha scarring.",
            "herbs": "Shallaki (Boswellia), Haridra (Curcumin), Guggulu, Castor oil (Eranda), Guduchi.",
            "formulations": "Kanchnar Guggulu, Sukumara Ghrita, Curcumin 95%, Triphala.",
            "therapy": "Warm Castor Oil Pack (Eranda Taila) applied over the abdominal scars with a warm heating pad for 30 minutes 3 times a week."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Connective Tissue Remodeling)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports healthy collagen remodeling, softens stubborn internal scar tissue."
          },
          "yoga": {
            "asanas": [
              "Gentle Supta Baddha Konasana with bolsters",
              "Gentle Cat-Cow (Marjaryasana)",
              "Tadasana with axial stretch",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Serrapeptase / Nattokinase (systemic proteolytic enzymes that break down non-living fibrin tissue), Curcumin, Omega-3 fatty acids.",
            "dietarySources": "Bone broth, blueberries, extra virgin olive oil, papaya, pineapple (bromelain), green tea."
          },
          "holisticIntegration": "Apply a warm Castor Oil Pack over your abdominal surgical scars for 30 minutes 3 times weekly to soften fibrotic adhesions and stimulate lymphatic drainage."
        },
        {
          "id": "abdo-7",
          "name": "Rectus Abdominis & Core Muscle Strain",
          "severity": "Mild to Moderate",
          "category": "Musculoskeletal Core Strain",
          "cause": "Micro-tearing or rupture of muscle fibers in the rectus abdominis, internal/external obliques, or transversus abdominis from explosive twisting (tennis, baseball, golf), intense sprinting, or excessive abdominal crunches.",
          "prevention": "Progressive multi-planar core training, dynamic rotational warm-ups prior to sports, avoiding sudden explosive twisting without pelvic stabilization.",
          "lifestyle": "Avoid heavy lifting or sudden trunk flexion, apply ice for first 48 hours then moist heat, gentle progressive rehabilitation with isometric core engagement.",
          "medicines": "NSAIDs (Naproxen, Ibuprofen), Topical Diclofenac gel, Physical therapy (progressive isometric to dynamic core strengthening).",
          "ayurveda": {
            "dosha": "Mamsa-Snayu Kshata in Udara with acute Vata and Shoola.",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka (Hadjod), Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Local application of warm Murivenna oil over the strained abdominal muscles."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Muscle Tissue Regeneration)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates myofibrillar repair, accelerates abdominal muscle regeneration."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Gentle standing mountain)",
              "Gentle Sphinx Pose (gentle, pain-free abdominal stretch)",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing (gentle, avoid forceful coughing)"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (collagen cross-linking), Collagen Peptides, Magnesium, Zinc.",
            "dietarySources": "Bone broth, pasture-raised eggs, pumpkin seeds, blueberries, citrus fruits, wild salmon."
          },
          "holisticIntegration": "Massage warm Murivenna oil gently over the strained core muscle belly twice daily, avoiding deep aggressive pressure for the first week."
        },
        {
          "id": "abdo-8",
          "name": "Omphalitis & Umbilical Cord / Navel Infection",
          "severity": "Moderate to Critical (Infant Emergency)",
          "category": "Infectious Cutaneous-Umbilical",
          "cause": "Bacterial infection of the umbilical stump in neonates (Staph aureus, Strep, E. coli) or adult deep navel infection (candidal or bacterial from poor hygiene or navel piercing), predisposing infants to portal vein thrombophlebitis and sepsis.",
          "prevention": "Dry cord care in neonates (keep stump clean and dry, fold diaper down below stump, sponge baths only until stump falls off), cleaning adult navel gently during showers.",
          "lifestyle": "Keep navel dry, avoid tight waistbands that rub against the navel, clean adult navel with warm water and dry thoroughly with a towel corner.",
          "medicines": "For Neonatal Omphalitis: Prompt IV Antibiotics (Ampicillin + Gentamicin or Cefotaxime - medical emergency!). For Adult Navel Infection: Topical Mupirocin (bacterial) or Clotrimazole (fungal) ointment.",
          "ayurveda": {
            "dosha": "Nabhi Paka and Nabhi Vrana with Pitta-Rakta inflammation.",
            "herbs": "Neem, Haridra (Turmeric), Lodhra, Triphala, Yashtimadhu.",
            "formulations": "Kaishore Guggulu, Triphala Kwath, Jatyadi Ghrita, Jatyadi Taila.",
            "therapy": "Gentle cleansing with sterile Triphala water and application of sterile Jatyadi Ghrita."
          },
          "mudras": {
            "primary": "Prana Mudra (Immune Defense Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Boosts neutrophil activity, accelerates resolving of localized cutaneous abscesses."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin C, Vitamin A.",
            "dietarySources": "Garlic, turmeric golden milk, bone broth, fresh berries, green tea."
          },
          "holisticIntegration": "For adults: Clean the deep navel fold with a cotton swab dipped in sterile saline or diluted tea tree oil, dry completely, and apply 1 drop of pure organic virgin coconut oil."
        },
        {
          "id": "abdo-9",
          "name": "Psoas Muscle Spasm & Psoas Syndrome",
          "severity": "Moderate (Disabling Groin / Low Back Pain)",
          "category": "Deep Core Musculoskeletal",
          "cause": "Hypertonicity and shortening of the deep iliopsoas muscle linking lumbar spine to lesser trochanter, caused by prolonged desk sitting in hip flexion, compensatory lumbar instability, or appendiceal/pelvic irritation.",
          "prevention": "Take standing breaks every 30-45 minutes during desk work, perform regular hip flexor stretches, maintain core endurance.",
          "lifestyle": "Avoid sitting with legs crossed or hips flexed >90 degrees, sleep on back with a small pillow under knees, perform gentle kneeling lunge hip flexor stretches.",
          "medicines": "Physical therapy (iliopsoas myofascial release, hip stabilizer strengthening), Muscle relaxants, Ultrasound-guided Psoas Muscle Injection with local anesthetic.",
          "ayurveda": {
            "dosha": "Kati-Uru Gata Vata causing Stambha (spastic contraction) in the deep Snayus.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Bala, Guggulu.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Mahamash Taila, Sahacharadi Kashayam.",
            "therapy": "Deep abdominal and groin Abhyanga with warm Mahamash oil followed by Nadi Sweda."
          },
          "mudras": {
            "primary": "Vayu Mudra (Spasm Release Mudra)",
            "technique": "Fold index finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Deeply relaxes chronic involuntary psoas hypertonicity, releases lumbar traction."
          },
          "yoga": {
            "asanas": [
              "Anjaneyasana (Low Lunge - premier iliopsoas lengthening pose)",
              "Setu Bandhasana (Bridge Pose)",
              "Supta Virasana (Reclined Hero Pose - advanced psoas stretch)",
              "Balasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing into lower abdomen",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg - premier muscle relaxant), Potassium, Vitamin D3.",
            "dietarySources": "Pumpkin seeds, dark chocolate, bananas, bone broth, leafy green vegetables, coconut water."
          },
          "holisticIntegration": "Perform the Kneeling Low Lunge (Anjaneyasana) for 60 seconds on each side morning and evening: tuck pelvis under and lean gently forward until a deep opening is felt in the front of the hip."
        },
        {
          "id": "abdo-10",
          "name": "Mesenteric Lymphadenitis & Abdominal Migraine",
          "severity": "Moderate (Common in Children, Mimics Appendicitis)",
          "category": "Pediatric Lymphatic & Autonomic",
          "cause": "Inflammation of the mesenteric lymph nodes in the ileocecal region (most commonly following a viral upper respiratory infection) or autonomic paroxysmal midline abdominal pain associated with pediatric migraine diathesis.",
          "prevention": "Hand hygiene to prevent viral gastroenteritis, identify and avoid pediatric migraine food triggers (MSG, artificial sweeteners, nitrates, processed chocolate).",
          "lifestyle": "Rest in a quiet dimly lit room during attacks, maintain hydration with electrolyte broths, apply a warm hot water bottle to the belly, reassure child.",
          "medicines": "Ultrasound to rule out Acute Appendicitis (lymph nodes >8mm in short axis confirm mesenteric adenitis), Analgesics (Acetaminophen/Ibuprofen), Prophylaxis for abdominal migraine (Cyproheptadine, CoQ10).",
          "ayurveda": {
            "dosha": "Udarashoola in Bala with Pitta-Vata disturbance in the Pakvashaya.",
            "herbs": "Kanchnar, Haridra (Turmeric), Tulsi, Saunf (Fennel), Ajwain.",
            "formulations": "Kanchnar Guggulu, Arvindasava, Haridra Khanda, Janma Ghunti.",
            "therapy": "Warm dry fomentation with a warm cotton cloth over the child's abdomen."
          },
          "mudras": {
            "primary": "Matangi Mudra (Abdominal Calming Mudra)",
            "technique": "Interlace fingers, extend middle fingers straight up touching. Rest hands gently over child's lower abdomen.",
            "duration": "10-15 minutes.",
            "benefits": "Calms visceral hyper-sensitivity, relieves autonomic abdominal spasms."
          },
          "yoga": {
            "asanas": [
              "Balasana (Child's Pose)",
              "Pawanmuktasana (gentle)",
              "Supta Baddha Konasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow, soft belly breathing with parent"
            ]
          },
          "vitamins": {
            "deficiencies": "Coenzyme Q10 (100mg - proven in pediatric migraine/abdominal migraine trials), Magnesium, Vitamin D3.",
            "dietarySources": "Warm chicken/vegetable broth, fennel tea, stewed apples, steamed squash, coconut water."
          },
          "holisticIntegration": "Sip warm fennel-cumin tea and apply a warm heating pad over the right lower abdomen for 15 minutes to soothe mesenteric lymphoid inflammation."
        }
      ]
    },
    "hips_pelvis": {
      "id": "hips_pelvis",
      "name": "Hips & Pelvic Girdle",
      "layer": "externals",
      "category": "Pelvic & Lower Extremity Joint",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Weight-bearing ball-and-socket hip joint, acetabular labrum, trochanteric bursae, gluteal musculature, and pubic symphysis.",
      "topDiseases": [
        {
          "id": "hip-1",
          "name": "Osteoarthritis of the Hip (Coxarthrosis)",
          "severity": "Moderate to High (Severe Mobility Limitation)",
          "category": "Joint Degenerative",
          "cause": "Progressive degradation of hyaline articular cartilage of the femoral head and acetabulum, subchondral sclerosis, osteophyte formation, and joint space narrowing, causing anterior groin pain radiating to knee.",
          "prevention": "Maintain healthy body mass index, engage in low-impact physical training (swimming, cycling), manage developmental dysplasia or femoroacetabular impingement early.",
          "lifestyle": "Use a walking cane in the contralateral hand to reduce hip joint reaction force by 50%, low-impact cardiovascular exercise (water aerobics), avoid deep impact running.",
          "medicines": "Acetaminophen, NSAIDs (Oral or topical), Intra-articular Corticosteroid or Hyaluronic Acid injections under fluoroscopic/ultrasound guidance, Total Hip Arthroplasty (THA - high surgical success).",
          "ayurveda": {
            "dosha": "Sandhigata Vata in Kati-Sandhi with loss of Sleshaka Kapha (synovial fluid).",
            "herbs": "Shallaki (Boswellia), Guggulu, Ashwagandha, Rasna, Nirgundi.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Maharasnadi Kwath, Ksheerabala Taila.",
            "therapy": "Kati Basti (retaining warm medicated oil like Mahanarayana or Ksheerabala over the hip joint) and Patra Pinda Sweda."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Cartilage & Bone Strengthening Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Supports articular cartilage cellular metabolism, reinforces femoral and pelvic bone density."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana (Gentle Butterfly Pose on floor)",
              "Setu Bandhasana (Supported Bridge)",
              "Tadasana (Weight evenly distributed)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Slow Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Glucosamine Sulfate + Chondroitin, Vitamin D3, Boswellia serrata (AKBA), Omega-3 fatty acids, Collagen Peptides.",
            "dietarySources": "Bone broth, wild salmon, turmeric golden milk, walnuts, extra virgin olive oil, berries."
          },
          "holisticIntegration": "Engage in 30 minutes of warm water pool walking or swimming 3 times weekly to exercise the hip joint through full range of motion with zero gravitational joint loading."
        },
        {
          "id": "hip-2",
          "name": "Greater Trochanteric Pain Syndrome (GTPS / Hip Bursitis)",
          "severity": "Moderate (Inability to Sleep on Affected Side)",
          "category": "Peritrochanteric Tendinopathy",
          "cause": "Tendinopathy or micro-tearing of the gluteus medius and gluteus minimus tendons with secondary trochanteric bursal inflammation, causing lateral hip pain exacerbated by lying on the affected side or stairs.",
          "prevention": "Strengthen pelvic stabilizers (gluteus medius, core, tensor fasciae latae), avoid standing with weight shifted onto one hip ('hip hanging'), avoid crossing legs.",
          "lifestyle": "Sleep with a pillow between knees when on the unaffected side (keeps femur parallel and prevents tensile strain on gluteus medius tendon), avoid direct side sleeping on painful hip.",
          "medicines": "Physical Therapy (isometric to progressive eccentric gluteal strengthening), NSAIDs, Ultrasound-guided Trochanteric Bursa Corticosteroid or PRP Injection, Extracorporeal Shockwave Therapy (ESWT).",
          "ayurveda": {
            "dosha": "Snayugata Vata and Pitta in Kati-Parshwa with local Shoola.",
            "herbs": "Shallaki, Rasna, Guggulu, Ashwagandha, Nirgundi.",
            "formulations": "Kaishore Guggulu, Yograj Guggulu, Maharasnadi Kwath, Sahacharadi Taila.",
            "therapy": "Local warm application of Sahacharadi or Murivenna oil followed by warm fomentation."
          },
          "mudras": {
            "primary": "Prithvi Mudra combined with Vayu Mudra",
            "technique": "Touch ring finger to thumb (Prithvi) for 15 mins; then index finger to thumb root (Vayu) for 15 mins.",
            "duration": "30 minutes daily.",
            "benefits": "Rebuilds gluteal tendon fibers while calming lateral hip nerve hypersensitivity."
          },
          "yoga": {
            "asanas": [
              "Clamshell Exercise (Side-lying gentle gluteus medius activations)",
              "Setu Bandhasana with band around knees",
              "Balasana",
              "Supta Baddha Konasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides (15g daily), Vitamin C, Magnesium Glycinate, Curcumin.",
            "dietarySources": "Bone broth, wild salmon, pumpkin seeds, blueberries, turmeric golden milk."
          },
          "holisticIntegration": "Place a firm pillow between your knees and ankles while sleeping on your side to keep the top leg in neutral alignment and relieve tensile tension on the gluteal tendon."
        },
        {
          "id": "hip-3",
          "name": "Acetabular Labral Tear (Hip Labrum)",
          "severity": "Moderate to High (Sharp Catching Groin Pain)",
          "category": "Intra-Articular Fibrocartilaginous",
          "cause": "Tear of the fibrocartilaginous rim of the acetabulum caused by femoroacetabular impingement (FAI: cam or pincer morphology), repetitive high-impact pivoting/twisting (hockey, dance, soccer), or acute subluxation.",
          "prevention": "Screen for FAI morphology in young athletes with groin pain, avoid repetitive extreme hip hyperextension and internal rotation, strengthen deep hip rotators.",
          "lifestyle": "Avoid deep squats (<90 degrees hip flexion), avoid sitting in low bucket seats, modify athletic activities to avoid pivoting, physical therapy.",
          "medicines": "Physical therapy (rotator cuff of the hip strengthening), NSAIDs, Fluoroscopic/Ultrasound-guided Intra-articular Hip Corticosteroid or Hyaluronic Acid Injection, Hip Arthroscopy (labral repair/refixation).",
          "ayurveda": {
            "dosha": "Asthi-Majja Gata Vata and Snayu Kshata in Kati-Sandhi.",
            "herbs": "Shallaki, Ashwagandha, Asthisamharaka (Hadjod), Bala, Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Gandha Thailam, Ksheerabala Taila.",
            "therapy": "Snigdha Basti and gentle Kati Basti positioned over the hip joint."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Fibrocartilage Regeneration)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports joint capsule collagen synthesis, aids fibrocartilaginous healing."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vrikshasana (Gentle, low foot placement)",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Slow Ujjayi Breathing"
            ],
            "cautions": "Avoid deep hip external rotations (Pigeon pose) or deep lunges during active labral tear."
          },
          "vitamins": {
            "deficiencies": "Glucosamine, Chondroitin, Vitamin C, Vitamin D3, Collagen.",
            "dietarySources": "Bone broth, pasture-raised eggs, wild salmon, berries, dark leafy greens."
          },
          "holisticIntegration": "Take 15g Hydrolyzed Collagen Peptides with Vitamin C 30 minutes before gentle hip physical therapy exercises to maximize collagen synthesis in the hip capsule."
        },
        {
          "id": "hip-4",
          "name": "Piriformis Syndrome (Deep Gluteal Sciatic Compression)",
          "severity": "Moderate to High",
          "category": "Extrapelvic Neuromuscular Entrapment",
          "cause": "Spasm, hypertrophy, or anatomical variation of the piriformis muscle compressing the sciatic nerve in the greater sciatic notch, causing deep buttock pain radiating down the posterior leg.",
          "prevention": "Avoid prolonged sitting on hard surfaces, avoid carrying thick wallets in back pockets, maintain proper hip rotator flexibility, take frequent standing breaks.",
          "lifestyle": "Use a foam roller or tennis ball to gently massage the piriformis trigger point, perform figure-four piriformis stretches daily, avoid crossed-leg sitting.",
          "medicines": "Physical therapy (deep myofascial release, dry needling), NSAIDs, Muscle relaxants, Ultrasound-guided Piriformis Injection with local anesthetic/steroid or OnabotulinumtoxinA (Botox).",
          "ayurveda": {
            "dosha": "Gridhrasi Roga with pure Vataja dominance in the Kandara and Mamsa.",
            "herbs": "Rasna, Shallaki, Ashwagandha, Guggulu, Eranda (Castor oil).",
            "formulations": "Rasnadi Guggulu, Yograj Guggulu, Sahacharadi Kashayam, Sahacharadi Taila.",
            "therapy": "Patra Pinda Sweda over the gluteal muscle and Kati Basti."
          },
          "mudras": {
            "primary": "Vayu Mudra (Muscle Spasm & Sciatic Relief)",
            "technique": "Fold index finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Releases involuntary neuromuscular hypertonicity in deep pelvic rotators."
          },
          "yoga": {
            "asanas": [
              "Supta Kapotasana (Reclining Figure-Four / Eye-of-the-Needle Pose - premier safe piriformis stretch)",
              "Gomukhasana (Seated Cow Face Pose)",
              "Balasana",
              "Supta Matsyendrasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing into lower pelvis",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Vitamin B12 (Methylcobalamin), Vitamin B1, Alpha-Lipoic Acid.",
            "dietarySources": "Pumpkin seeds, dark chocolate, avocados, pasture-raised eggs, walnuts, bone broth."
          },
          "holisticIntegration": "Place a tennis ball or lacrosse ball beneath your affected buttock while seated on the floor and gently roll over the tender piriformis trigger point for 2 minutes morning and evening."
        },
        {
          "id": "hip-5",
          "name": "Femoroacetabular Impingement (FAI - Cam, Pincer & Mixed)",
          "severity": "Moderate",
          "category": "Bony Hip Morphology",
          "cause": "Mechanical mismatch between the femoral head and acetabulum (Cam: aspherical femoral head-neck junction; Pincer: acetabular over-coverage), causing repetitive abutment and labral/chondral shear during hip flexion.",
          "prevention": "Screen young athletes with groin pain, avoid extreme forced hip flexion (<90 degrees) during adolescent skeletal growth spurts.",
          "lifestyle": "Raise office chair height to keep hips higher than knees (angle >90 degrees), avoid low sofas or bucket seats, modify squats to high-bar or quarter squats.",
          "medicines": "Physical therapy (hip abductor strengthening and pelvic control), NSAIDs, Intra-articular steroid injections, Hip Arthroscopy (femoroplasty / acetabuloplasty bone reshaping).",
          "ayurveda": {
            "dosha": "Asthi-Sandhi Gata Vata with structural Sandhi Vikruti.",
            "herbs": "Shallaki, Ashwagandha, Guggulu, Bala, Rasna.",
            "formulations": "Trayodashanga Guggulu, Maharasnadi Kwath, Balarishta, Ksheerabala Taila.",
            "therapy": "Hasta Abhyanga of the hip joint with warm Ksheerabala oil and warm herbal fomentation."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Structural Bone & Joint Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Supports joint structural integrity, reduces chronic friction inflammation."
          },
          "yoga": {
            "asanas": [
              "Tadasana with upright pelvic alignment",
              "Setu Bandhasana (Bridge Pose)",
              "Viparita Karani",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid deep hip flexion poses (deep squats, full forward folds) that cause bone-on-bone impingement."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Glucosamine, Chondroitin, Omega-3 fatty acids, Curcumin.",
            "dietarySources": "Wild salmon, bone broth, blueberries, walnuts, dark leafy greens, turmeric golden milk."
          },
          "holisticIntegration": "Adjust your office desk chair so your hips are positioned 2-3 inches higher than your knees; this opens the hip angle to >100 degrees and eliminates anterior impingement during work hours."
        },
        {
          "id": "hip-6",
          "name": "Avascular Necrosis of the Femoral Head (AVN / Osteonecrosis)",
          "severity": "Critical (Femoral Head Collapse Risk)",
          "category": "Vascular Bone Ischemia",
          "cause": "Compromise of the terminal microvascular blood supply to the femoral head (medial femoral circumflex artery) from high-dose corticosteroid use, alcohol abuse, sickle cell disease, or trauma, leading to trabecular bone necrosis and subchondral collapse.",
          "prevention": "Judicious avoidance of prolonged high-dose corticosteroid therapy, moderation of alcohol, early MRI screening in patients with groin pain and corticosteroid history.",
          "lifestyle": "Strict non-weight bearing or partial weight bearing with crutches during early stages (Ficat stage I/II), avoiding high-impact athletic loading.",
          "medicines": "Core Decompression of femoral head +/- bone marrow aspirate concentrate (BMAC / stem cells), Bisphosphonates (Alendronate - to prevent collapse), Hyperbaric Oxygen Therapy, Total Hip Arthroplasty (for collapsed stage III/IV).",
          "ayurveda": {
            "dosha": "Asthi-Majja Gata Vata and Sirarodha with severe Dhatu Kshaya in the Asthi.",
            "herbs": "Asthisamharaka (Hadjod), Ashwagandha, Shallaki, Arjuna, Guggulu, Praval (coral).",
            "formulations": "Lakshadi Guggulu, Gandha Thailam, Praval Pishti, Mukta Pishti, Ksheerabala Taila.",
            "therapy": "Tikta Ksheera Basti (milk enemas infused with bitter rejuvenating herbs - classical sovereign therapy for Asthimajja AVN!)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Bone Rebuilding & Osteogenesis)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "25 minutes twice daily.",
            "benefits": "Stimulates osteoblast differentiation, encourages neovascularization of ischemic bone trabeculae."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Inverts gravity, removes weight from femoral head)",
              "Gentle supported Bridge Pose",
              "Bhadrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ],
            "cautions": "Strictly zero high-impact weight-bearing or aggressive hip rotations."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (maintain >50 ng/mL), Vitamin K2 (MK-7), Calcium, Zinc, Boron.",
            "dietarySources": "Cissus quadrangularis (Hadjod), sesame seeds, bone broth, natto, dark leafy greens."
          },
          "holisticIntegration": "Undergo classical Tikta Ksheera Basti under expert Ayurvedic supervision, and take 1 tsp Gandha Thailam with warm milk daily to promote microvascular bone regeneration."
        },
        {
          "id": "hip-7",
          "name": "Adductor Groin Strain & Athletic Pubalgia ('Sports Hernia')",
          "severity": "Moderate",
          "category": "Musculotendinous Groin Strain",
          "cause": "Tear of the adductor longus tendon at its pubic insertion or disruption of the aponeurosis of the rectus abdominis and conjoined tendon at the pubic symphysis, caused by repetitive explosive cutting, kicking, or lateral acceleration.",
          "prevention": "Adductor strengthening (Copenhagen adductor protocol - clinically proven to reduce groin injuries by 41%!), dynamic groin mobility warm-ups.",
          "lifestyle": "Rest from explosive kicking or cutting athletics during acute phase, progressive eccentric adductor rehabilitation, pelvic stability exercises.",
          "medicines": "Physical therapy (Copenhagen adductor protocol), NSAIDs, Ultrasound-guided Platelet-Rich Plasma (PRP) or Corticosteroid Injection at adductor insertion, Surgical Pelvic Floor Repair / Tenotomy.",
          "ayurveda": {
            "dosha": "Snayu and Mamsa Kshata in Vankshana (groin) with severe Vata-Rakta pain.",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka, Guggulu.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Local application of warm Murivenna oil over the adductor insertion and gentle steam."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tendon Healing Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Promotes tenocyte proliferation and collagen synthesis at pubic bone insertions."
          },
          "yoga": {
            "asanas": [
              "Bhadrasana (Gentle Butterfly Pose on floor)",
              "Setu Bandhasana (Bridge Pose)",
              "Tadasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides (15g), Vitamin C, Magnesium Glycinate, Zinc.",
            "dietarySources": "Bone broth, pasture-raised eggs, blueberries, pumpkin seeds, citrus fruits, wild salmon."
          },
          "holisticIntegration": "Incorporate the Copenhagen Adductor Exercise (side-lying partner or bench adductor raises) 3 times weekly to systematically fortify the adductor longus tendon against strain."
        },
        {
          "id": "hip-8",
          "name": "Osteitis Pubis & Pubic Symphysis Dysfunction (SPD)",
          "severity": "Moderate to High (Sharp Groin & Pelvic Pain)",
          "category": "Pelvic Cartilage Inflammatory",
          "cause": "Non-infectious inflammation and bone resorption of the pubic symphysis and surrounding muscle attachments from repetitive shear stresses (kicking athletes) or pregnancy relaxin ligamentous laxity.",
          "prevention": "Pelvic symmetry training, avoid asymmetric weight-bearing, use a pelvic support belt during late pregnancy, treat adductor and abdominal muscle imbalances.",
          "lifestyle": "Wear a snug pelvic support belt / sacroiliac belt, keep knees together when getting out of car/bed, avoid wide-legged stances or unilateral lunges.",
          "medicines": "NSAIDs, Physical therapy (core and pelvic stabilization), Symphysis Pubis Corticosteroid Injection, Prolotherapy / PRP, Surgical curettage or arthrodesis (rare).",
          "ayurveda": {
            "dosha": "Bhaga-Sandhi Shoola and Asthi Dushti with Vata-Pitta inflammation.",
            "herbs": "Shallaki, Guggulu, Ashwagandha, Bala, Rasna.",
            "formulations": "Trayodashanga Guggulu, Kaishore Guggulu, Maharasnadi Kwath, Murivenna oil.",
            "therapy": "Gentle local application of Murivenna oil and firm pelvic cotton binding."
          },
          "mudras": {
            "primary": "Yoni Mudra (Pelvic Stabilization Mudra)",
            "technique": "Form diamond with thumbs and index fingers; interlace other fingers. Hold gently over lower pelvis/pubic bone.",
            "duration": "15 minutes daily.",
            "benefits": "Harmonizes pelvic ring bio-mechanics, calms inflammatory pubic symphysis irritation."
          },
          "yoga": {
            "asanas": [
              "Setu Bandhasana with yoga block squeezed between knees",
              "Gentle Pelvic Tilts on back",
              "Shavasana with pillow under knees"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Avoid wide-legged poses (Goddess pose, wide squats, Warrior II) which shear the pubic symphysis."
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Calcium, Collagen Peptides, Omega-3 fatty acids, Curcumin.",
            "dietarySources": "Bone broth, sesame seeds, turmeric milk, wild salmon, leafy green vegetables."
          },
          "holisticIntegration": "Wear a firm pelvic support belt (SI belt) positioned snugly across the greater trochanters and pubic bone during all standing and walking activities."
        },
        {
          "id": "hip-9",
          "name": "Iliopsoas Bursitis & Internal Snapping Hip Syndrome",
          "severity": "Mild to Moderate",
          "category": "Bursal / Tendon Friction",
          "cause": "Friction and inflammation of the large iliopsoas bursa beneath the iliopsoas tendon as it snaps over the iliopectineal eminence or femoral head during hip extension from flexion.",
          "prevention": "Regular hip flexor stretching, core stabilization, avoiding repetitive high-hip flexion movements without warm-up.",
          "lifestyle": "Apply ice over anterior groin after exercise, foam roll the quadriceps and hip flexors, avoid snapping the hip intentionally.",
          "medicines": "Physical therapy (iliopsoas lengthening and pelvic stabilization), NSAIDs, Ultrasound-guided Iliopsoas Bursa Corticosteroid Injection, Arthroscopic Iliopsoas Fractional Lengthening.",
          "ayurveda": {
            "dosha": "Snayugata Vata in Vankshana (groin) with local inflammation.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Nirgundi, Guggulu.",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Mahamash Taila, Balarishta.",
            "therapy": "Local warm oil massage over anterior groin followed by warm moist fomentation."
          },
          "mudras": {
            "primary": "Vayu Mudra (Tendon Relaxation Mudra)",
            "technique": "Fold index finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Relaxes spastic iliopsoas tendon fibers, reduces snapping friction."
          },
          "yoga": {
            "asanas": [
              "Anjaneyasana (Gentle Low Lunge - stretches iliopsoas)",
              "Setu Bandhasana",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Vitamin C, Omega-3 fatty acids.",
            "dietarySources": "Pumpkin seeds, dark chocolate, bone broth, blueberries, wild salmon."
          },
          "holisticIntegration": "Perform gentle kneeling hip flexor stretches (Anjaneyasana) for 45 seconds twice daily, ensuring the pelvis is tucked posteriorly to target the deep iliopsoas."
        },
        {
          "id": "hip-10",
          "name": "Pelvic Floor Myofascial Spasm (Levator Ani Syndrome)",
          "severity": "Moderate to High (Deep Pelvic Aching)",
          "category": "Hypertonic Pelvic Floor",
          "cause": "Chronic involuntary hypertonic contraction and trigger points in the levator ani, coccygeus, and obturator internus muscles, causing deep rectal pressure, tailbone aching, and dyspareunia.",
          "prevention": "Avoid holding urine or stool, avoid excessive Kegel exercises (Kegels worsen hypertonic spastic pelvic floors!), manage psychological stress.",
          "lifestyle": "Warm Epsom salt sitz baths for 15 minutes daily, pelvic floor physical therapy (down-training and internal myofascial release), use bathroom footstool.",
          "medicines": "Specialized Pelvic Floor Physical Therapy (biofeedback and down-training), Muscle relaxants (Cyclobenzaprine, Diazepam suppositories), Pudendal nerve blocks, Botulinum toxin injections.",
          "ayurveda": {
            "dosha": "Guda-Shoola and Yoni-Shoola caused by severe Apana Vata constriction.",
            "herbs": "Ashwagandha, Bala, Shatavari, Dashamoola, Yashtimadhu.",
            "formulations": "Dashamoolarishta, Sukumara Ghrita, Chandraprabha Vati, Balarishta.",
            "therapy": "Avagaha Sweda (warm medicated herbal sitz bath with Dashamoola decoction) and Matra Basti."
          },
          "mudras": {
            "primary": "Yoni Mudra for Pelvic Release",
            "technique": "Form diamond with thumbs and index fingers, rest hands over lower pelvis while consciously releasing the anal and vaginal sphincters.",
            "duration": "15 minutes daily.",
            "benefits": "Specifically down-regulates hypertonic pelvic floor tone, melts chronic pelvic muscle tension."
          },
          "yoga": {
            "asanas": [
              "Balasana with knees spread wide (Child's Pose)",
              "Supta Baddha Konasana with bolsters",
              "Ananda Balasana (Happy Baby Pose)",
              "Viparita Karani"
            ],
            "pranayama": [
              "Pelvic Diaphragmatic Breath (Inhale expanding pelvic floor like an umbrella; exhale releasing tension)",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg - relaxes hypertonic muscle fibers), Vitamin D3, Vitamin B-Complex.",
            "dietarySources": "Chamomile tea, pumpkin seeds, bone broth, avocados, warm golden milk."
          },
          "holisticIntegration": "Practice Reverse Kegels (consciously dropping and relaxing the pelvic floor outward during deep diaphragmatic exhalations) for 5 minutes while resting in Happy Baby Pose."
        }
      ]
    },
    "knees_legs": {
      "id": "knees_legs",
      "name": "Knees & Lower Legs",
      "layer": "externals",
      "category": "Lower Extremity & Locomotor",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Largest synovial hinge joint in the body, supported by medial/lateral menisci, cruciate ligaments (ACL/PCL), patella, and calf muscle pumps.",
      "topDiseases": [
        {
          "id": "knee-1",
          "name": "Knee Osteoarthritis (Gonarthrosis)",
          "severity": "Moderate to High (Major Mobility Impairment)",
          "category": "Degenerative Joint Disease",
          "cause": "Mechanical wear-and-tear degradation of articular cartilage, subchondral bone sclerosis, and osteophyte formation in medial, lateral, or patellofemoral compartments, exacerbated by obesity, prior trauma, or malalignment.",
          "prevention": "Weight management (every 1 pound of weight loss removes 4 pounds of mechanical pressure off knees!), quadriceps and hamstring strengthening, low-impact exercise.",
          "lifestyle": "Wear shock-absorbing cushioned footwear, low-impact cycling or swimming, use knee compression sleeves, avoid repetitive deep kneeling or squatting.",
          "medicines": "Topical NSAID gel (Diclofenac / Voltaren 1% - first line with minimal systemic toxicity), Oral NSAIDs, Intra-articular Hyaluronic Acid (gel injections), Intra-articular Corticosteroids, Total Knee Arthroplasty (TKA).",
          "ayurveda": {
            "dosha": "Janu Sandhigata Vata with loss of Sleshaka Kapha (synovial fluid) and Vataja pain/crepitus.",
            "herbs": "Shallaki (Boswellia serrata - sovereign knee herb), Guggulu, Ashwagandha, Rasna, Nirgundi.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Maharasnadi Kwath, Ksheerabala 101.",
            "therapy": "Janu Basti (retaining a reservoir of warm medicated oil like Mahanarayana or Ksheerabala over the knee joint in a dough dam for 30 mins) - legendary relief for knee arthritis!"
          },
          "mudras": {
            "primary": "Prithvi Mudra (Cartilage & Bone Strengthening Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20-30 minutes daily.",
            "benefits": "Supports joint chondrocyte cellular vitality, builds foundational lower body strength."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Mountain Pose - trains knee alignment)",
              "Setu Bandhasana (Bridge Pose - strengthens glutes and hamstrings)",
              "Viparita Karani",
              "Dandasana with gentle quadriceps isometric presses"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Slow Belly Breathing"
            ],
            "cautions": "Avoid deep loaded squats and high-impact jumping."
          },
          "vitamins": {
            "deficiencies": "Glucosamine Sulfate (1500mg) + Chondroitin (1200mg), Vitamin D3 (optimal 50-70 ng/mL), Boswellia (30% AKBA), Omega-3 fatty acids, Collagen Peptides.",
            "dietarySources": "Bone broth, wild salmon, turmeric golden milk with black pepper, walnuts, extra virgin olive oil, berries."
          },
          "holisticIntegration": "Perform Janu Basti at home: massage warm Mahanarayana oil onto the knee joint for 5 minutes, wrap with a warm flannel cloth, and place a hot water bottle over it for 15 minutes daily."
        },
        {
          "id": "knee-2",
          "name": "Meniscus Tear (Medial & Lateral)",
          "severity": "Moderate to High (Joint Line Pain, Catching)",
          "category": "Fibrocartilaginous Meniscal Tear",
          "cause": "Tear of the fibrocartilaginous crescentic shock absorbers from rotational twisting with flexed knee (sports trauma) or degenerative tears in older adults with minimal trauma.",
          "prevention": "Strengthen quadriceps and hamstrings to absorb landing shock, practice proper pivoting mechanics in sports, avoid sudden twisting on planted feet.",
          "lifestyle": "RICE protocol acutely (Rest, Ice, Compression, Elevation), avoid deep squats, progressive physical therapy to stabilize knee joint.",
          "medicines": "Physical Therapy (equal to surgery in clinical trials for degenerative meniscus tears!), NSAIDs, Intra-articular Corticosteroid Injections, Arthroscopic Meniscal Repair (for vascular red-red zone tears) or Partial Meniscectomy.",
          "ayurveda": {
            "dosha": "Janu Sandhi Snayu-Kshata with severe Vata and swelling (Shotha).",
            "herbs": "Shallaki, Ashwagandha, Asthisamharaka (Hadjod), Bala, Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Gandha Thailam, Murivenna oil.",
            "therapy": "Local application of warm Murivenna oil and Janu Basti."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Fibrocartilage Regeneration)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports connective tissue collagen synthesis, aids meniscal healing."
          },
          "yoga": {
            "asanas": [
              "Tadasana with wall support",
              "Straight Leg Raises on back",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ],
            "cautions": "Strictly avoid deep knee flexion, lotus pose (Padmasana), and sudden twisting."
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides (15g), Vitamin C, Vitamin D3, Curcumin, Omega-3.",
            "dietarySources": "Bone broth, pasture-raised eggs, wild salmon, blueberries, dark leafy greens."
          },
          "holisticIntegration": "Take 15g Hydrolyzed Collagen Peptides with 500mg Vitamin C daily, and apply warm Murivenna oil over the knee joint twice daily to accelerate meniscal tissue repair."
        },
        {
          "id": "knee-3",
          "name": "Patellar Tendinitis ('Jumper's Knee')",
          "severity": "Moderate",
          "category": "Extensor Mechanism Tendinopathy",
          "cause": "Overuse tendinopathy and micro-tears of the patellar tendon at the inferior pole of the patella, common in basketball, volleyball, and jumping sports, characterized by localized tendon thickening and mucoid degeneration.",
          "prevention": "Progressive eccentric quadriceps training (decline board squats), avoid sudden jumps in training volume, ensure proper footwear with adequate cushioning.",
          "lifestyle": "Incorporate heavy slow resistance (HSR) training, use an infrapatellar patellar tendon strap (Chopat strap) during athletics, apply ice after jumping.",
          "medicines": "Eccentric / Heavy Slow Resistance (HSR) Physical Therapy (gold standard), NSAIDs (short term), Ultrasound-guided Platelet-Rich Plasma (PRP) or Dry Needling, Extracorporeal Shockwave Therapy (ESWT).",
          "ayurveda": {
            "dosha": "Snayugata Vata in Janu with localized Shoola and Stambha.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Guggulu, Nirgundi.",
            "formulations": "Kaishore Guggulu, Yograj Guggulu, Maharasnadi Kwath, Murivenna oil.",
            "therapy": "Pichu (oil-soaked pad) with warm Murivenna oil over the patellar tendon."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tendon Healing Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Promotes tenocyte collagen remodeling, reinforces patellar tendon tensile strength."
          },
          "yoga": {
            "asanas": [
              "Isometric Quadriceps Sets (Press back of knee into floor, hold for 10s)",
              "Tadasana",
              "Setu Bandhasana",
              "Gentle hamstring stretches"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides, Vitamin C, Magnesium Glycinate, Zinc.",
            "dietarySources": "Bone broth, citrus fruits, pumpkin seeds, blueberries, wild salmon."
          },
          "holisticIntegration": "Perform Decline Board Squats (squatting slowly on a 25-degree declined ramp) for 3 sets of 15 repetitions daily to stimulate collagen remodeling in the patellar tendon."
        },
        {
          "id": "knee-4",
          "name": "Anterior Cruciate Ligament (ACL) Sprain & Tear",
          "severity": "High (Knee Instability)",
          "category": "Ligamentous Traumatic",
          "cause": "Non-contact deceleration, cutting, or hyperextension with valgus stress (often accompanied by an audible 'pop' and rapid hemarthrosis within 2 hours), commonly in soccer, skiing, and basketball.",
          "prevention": "Neuromuscular landing and jumping training programs (FIFA 11+ program - reduces ACL tears by over 50%!), hamstring-to-quadriceps strength balance, core stability.",
          "lifestyle": "Immediate RICE, wear a hinged knee brace during rehabilitation, pre-operative physical therapy ('prehab') before reconstruction surgery.",
          "medicines": "Prehabilitation Physical Therapy, Arthroscopic ACL Reconstruction (using bone-patellar tendon-bone, hamstring autograft, or quadriceps tendon autograft), Functional post-op ACL rehabilitation.",
          "ayurveda": {
            "dosha": "Asthi-Kandara Bhagna / Kshata in Janu with severe Vata-Rakta trauma and swelling.",
            "herbs": "Asthisamharaka (Hadjod), Shallaki, Ashwagandha, Bala, Guggulu.",
            "formulations": "Lakshadi Guggulu, Gandha Thailam, Balarishta, Murivenna oil.",
            "therapy": "Immobilization followed by warm oil Abhyanga with Murivenna once acute effusion subsides."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Ligamentous Regeneration)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "25 minutes twice daily.",
            "benefits": "Stimulates ligamentous fibroblastic repair, reinforces lower extremity stability."
          },
          "yoga": {
            "asanas": [
              "Tadasana (Proprioceptive balance training on firm floor)",
              "Single-leg balance stands",
              "Setu Bandhasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (promotes graft-to-bone integration!), Collagen Peptides, Vitamin C, Zinc, Magnesium.",
            "dietarySources": "Bone broth, Cissus quadrangularis extract, pasture-raised eggs, wild salmon, leafy greens."
          },
          "holisticIntegration": "Engage in the FIFA 11+ Neuromuscular Warm-Up program before all athletic activities to retrain knee valgus landing mechanics and protect the ACL."
        },
        {
          "id": "knee-5",
          "name": "Baker's Cyst (Popliteal Synovial Cyst)",
          "severity": "Mild to Moderate",
          "category": "Popliteal Synovial Herniation",
          "cause": "Fluid distension of the gastrocnemio-semimembranosus bursa in the popliteal fossa acting as a one-way valve, almost always secondary to underlying knee pathology (meniscus tear 80% or osteoarthritis).",
          "prevention": "Treat underlying intra-articular knee pathology (meniscus tear or arthritis) to prevent excess synovial fluid effusion.",
          "lifestyle": "Avoid prolonged standing, apply ice over the back of the knee, wear a supportive knee compression sleeve, elevate leg when resting.",
          "medicines": "Treatment of underlying knee condition, Ultrasound-guided Aspiration with Corticosteroid injection into the cyst, Arthroscopic management of intra-articular cause.",
          "ayurveda": {
            "dosha": "Janu-Prishta Granthi caused by Kapha-Meda and fluid accumulation in the popliteal space.",
            "herbs": "Kanchnar, Punarnava, Varuna, Guggulu, Shallaki.",
            "formulations": "Kanchnar Guggulu, Punarnavadi Guggulu, Varunadi Kwath, Chandraprabha Vati.",
            "therapy": "Lekhana therapy and gentle application of warm castor oil over the popliteal cyst."
          },
          "mudras": {
            "primary": "Jalodar Nashak Mudra (Fluid Resorption Mudra)",
            "technique": "Fold little finger down to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly stimulates the resorption of excessive popliteal synovial fluid collections."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Legs-up-the-wall - drains excess knee fluid)",
              "Tadasana",
              "Gentle seated hamstring stretch",
              "Shavasana with knee pillow"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids, Curcumin, Vitamin C, Potassium.",
            "dietarySources": "Horse gram soup, barley water, blueberries, celery, green tea."
          },
          "holisticIntegration": "Rest with your legs elevated up the wall (Viparita Karani) for 15 minutes every evening to encourage gravity-assisted reabsorption of popliteal synovial fluid."
        },
        {
          "id": "knee-6",
          "name": "Medial Tibial Stress Syndrome (Shin Splints)",
          "severity": "Moderate",
          "category": "Bone Stress / Periostitis",
          "cause": "Traction periostitis and bone stress injury along the posteromedial border of the tibia (tibialis posterior and soleus attachments) from repetitive running impacts, overpronation, or sudden increases in mileage.",
          "prevention": "Gradual running progression (increase mileage by <10% per week), replace running shoes every 300-500 miles, run on softer surfaces (grass, tracks), correct overpronation with orthotics.",
          "lifestyle": "Ice massage along the shin bone for 10 minutes post-run, cross-train with swimming or cycling to unload the tibia, foam roll the calves and anterior tibialis.",
          "medicines": "Relative Rest / Cross-training, NSAIDs (short term), Custom Orthotics, Physical therapy (calf eccentric loading and gait retraining), Extracorporeal Shockwave Therapy (ESWT).",
          "ayurveda": {
            "dosha": "Asthi-Snayu Shoola in Jangha (lower leg) caused by Vata-Rakta trauma and exertion (Shrama).",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka (Hadjod), Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Abhyanga of the lower legs with warm Murivenna oil and gentle warm fomentation."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Bone Matrix Remodeling)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Accelerates tibial periosteal healing, stimulates bone mineral deposition."
          },
          "yoga": {
            "asanas": [
              "Vajrasana (Diamond Pose - excellent stretch for anterior tibialis and shin muscles)",
              "Adho Mukha Svanasana (Calf stretch)",
              "Tadasana with toe raises",
              "Viparita Karani"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (maintain >50 ng/mL - low vitamin D is a proven major risk factor for tibial stress injuries!), Calcium, Magnesium, Vitamin K2.",
            "dietarySources": "Bone broth, sesame seeds, natto (Vitamin K2), wild salmon, pasture-raised eggs, dark leafy greens."
          },
          "holisticIntegration": "Perform Ice Cup Massage along the medial tibial border for 8 minutes after every run, followed by sitting in Vajrasana for 5 minutes to gently stretch the anterior shin musculature."
        },
        {
          "id": "knee-7",
          "name": "Varicose Veins & Chronic Venous Stasis of Legs",
          "severity": "Moderate to High",
          "category": "Peripheral Venous Pathology",
          "cause": "Incompetence of valves in the great/small saphenous veins and perforator veins, causing venous reflux, venous hypertension, tortuous subcutaneous vein dilation, leg heaviness, and stasis dermatitis.",
          "prevention": "Avoid prolonged motionless standing or sitting, wear graduated medical compression stockings (20-30 mmHg), elevate legs daily, maintain healthy weight.",
          "lifestyle": "Elevate legs above heart level for 15 minutes twice daily, activate calf muscle pump frequently (heel raises), avoid crossing legs at knees, take walking breaks.",
          "medicines": "Graduated Compression Stockings (20-30 mmHg), Flavonoids (Micronized Purified Flavonoid Fraction - MPFF / Daflon), Endovenous Laser Ablation (EVLA), Radiofrequency Ablation (RFA), Ultrasound-guided Foam Sclerotherapy.",
          "ayurveda": {
            "dosha": "Siragranthi in Pada and Jangha caused by Vata-Rakta stasis and venous wall laxity.",
            "herbs": "Manjistha (Rubia cordifolia), Sariva, Gotu Kola (Centella asiatica), Guggulu, Punarnava.",
            "formulations": "Kaishore Guggulu, Mahamanjishtadi Kwath, Sahacharadi Kashayam, Sahacharadi Thailam.",
            "therapy": "Raktamokshana (Jalaukavacharana / Leech therapy - classical sovereign treatment for varicose stasis) and upward light massage."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Apana Mudra",
            "technique": "Touch little fingertip to thumb tip for 10 mins; then middle and ring fingertips to thumb tip.",
            "duration": "20 minutes daily.",
            "benefits": "Improves venous vascular wall tone, promotes upward fluid drainage."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Invaluable - drains pooled venous blood from legs back to heart)",
              "Sarvangasana (Supported Shoulderstand)",
              "Setu Bandhasana",
              "Tadasana (Heel raises)"
            ],
            "pranayama": [
              "Dirga Pranayama (Deep thoracic breathing draws blood upwards via negative thoracic pressure)",
              "Ujjayi Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Bioflavonoids (Rutin, Hesperidin, Diosmin - proven vein tonics), Horse Chestnut Extract (Aescin - reduces capillary permeability), Vitamin C, Pycnogenol.",
            "dietarySources": "Buckwheat (highest dietary rutin), citrus fruits, berries, horse chestnut extract, red grapes, dark chocolate."
          },
          "holisticIntegration": "Rest with your legs elevated vertically against a wall (Viparita Karani) for 15 minutes every single evening while wearing 20-30 mmHg compression socks during the day."
        },
        {
          "id": "knee-8",
          "name": "Patellofemoral Pain Syndrome ('Runner's Knee')",
          "severity": "Mild to Moderate",
          "category": "Anterior Knee / Patellofemoral",
          "cause": "Abnormal patellar tracking within the femoral trochlear groove from vastus medialis oblique (VMO) weakness, tight IT band/lateral retinaculum, or increased Q-angle, causing retro-patellar aching with stairs.",
          "prevention": "Strengthen vastus medialis oblique (VMO) and hip abductors/glutes, foam roll the lateral quad and IT band, avoid sudden spikes in running mileage or incline.",
          "lifestyle": "Avoid sitting with knees bent >90 degrees for prolonged periods ('movie-goer's sign'), use McConnell patellar taping during exercise, wear supportive running shoes.",
          "medicines": "Physical Therapy (VMO and hip abductor strengthening - first line, high evidence), NSAIDs, Patellar stabilizing braces (J-brace), McConnell taping.",
          "ayurveda": {
            "dosha": "Janu Sandhigata Vata with Chala Guna causing patellar mal-tracking.",
            "herbs": "Shallaki, Ashwagandha, Bala, Guggulu, Rasna.",
            "formulations": "Trayodashanga Guggulu, Balarishta, Maharasnadi Kwath, Ksheerabala Taila.",
            "therapy": "Janu Basti with warm Ksheerabala oil and gentle patellar mobilization."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Structural Alignment Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Supports cartilage resilience under the patellar facet, balances muscle tone."
          },
          "yoga": {
            "asanas": [
              "Straight Leg Raises with foot turned outward 45 degrees (activates VMO)",
              "Setu Bandhasana",
              "Tadasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Glucosamine, Chondroitin, Vitamin D3, Collagen, Magnesium.",
            "dietarySources": "Bone broth, wild salmon, blueberries, walnuts, dark leafy greens."
          },
          "holisticIntegration": "Perform Straight Leg Raises on your back with the foot externally rotated 45 degrees (3 sets of 15 reps) daily to specifically isolate and strengthen the Vastus Medialis Oblique (VMO)."
        },
        {
          "id": "knee-9",
          "name": "Iliotibial (IT) Band Friction Syndrome",
          "severity": "Moderate (Sharp Lateral Knee Pain)",
          "category": "Fascial Friction Tendinopathy",
          "cause": "Repetitive friction and compression of the highly innervated fat pad and bursa beneath the distal iliotibial band over the lateral femoral epicondyle at 30 degrees of knee flexion during running or cycling.",
          "prevention": "Strengthen weak gluteus medius muscles (weak abductors cause hip adduction and increased IT band tension), avoid running on crowned roads or always in the same direction on tracks.",
          "lifestyle": "Foam roll the tensor fasciae latae (TFL) and gluteal muscles (avoid rolling directly over the bony lateral knee epicondyle!), adjust bicycle saddle height, apply ice post-run.",
          "medicines": "Physical therapy (hip abductor strengthening and gait retraining), NSAIDs, Ultrasound-guided Corticosteroid Injection beneath the distal IT band, Surgical IT Band release (rare).",
          "ayurveda": {
            "dosha": "Snayugata Vata in Janu-Parshwa with friction and Shoola.",
            "herbs": "Shallaki, Rasna, Ashwagandha, Nirgundi, Guggulu.",
            "formulations": "Kaishore Guggulu, Yograj Guggulu, Sahacharadi Taila, Murivenna oil.",
            "therapy": "Local application of warm Murivenna oil and gentle myofascial release of the TFL."
          },
          "mudras": {
            "primary": "Vayu Mudra (Fascial Relaxation Mudra)",
            "technique": "Fold index finger to base of thumb, hold with thumb. Keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Relaxes tense fascial fibers along the lateral thigh and knee."
          },
          "yoga": {
            "asanas": [
              "Supta Padangusthasana with strap crossing midline (IT band stretch)",
              "Gomukhasana (Cow Face Pose)",
              "Balasana",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (400mg), Collagen, Vitamin C, Omega-3 fatty acids.",
            "dietarySources": "Pumpkin seeds, dark chocolate, bone broth, blueberries, wild salmon."
          },
          "holisticIntegration": "Foam roll the Tensor Fasciae Latae (TFL) muscle at the front-side of the hip for 2 minutes daily, followed by side-lying Clamshell exercises to strengthen the gluteus medius."
        },
        {
          "id": "knee-10",
          "name": "Restless Legs Syndrome (RLS / Willis-Ekbom Disease)",
          "severity": "Moderate to High (Severe Nocturnal Disruption)",
          "category": "Sensorimotor Neurological",
          "cause": "Irresistible urge to move the legs, accompanied by uncomfortable creeping, crawling, or pulling sensations occurring predominantly during evening rest, driven by central brain iron deficiency and dopaminergic striatal dysfunction.",
          "prevention": "Screen serum ferritin (target ferritin >75-100 ng/mL in RLS patients!), avoid caffeine and alcohol in the evening, avoid dopamine-blocking medications (antihistamines, antiemetics).",
          "lifestyle": "Take a warm bath before bed, gentle evening leg stretching, use weighted blankets, keep bedroom cool and dark, maintain fixed sleep schedule.",
          "medicines": "Oral Iron (Ferrous sulfate + Vitamin C if ferritin <75 ng/mL) or IV Iron (Ferric carboxymaltose), Alpha-2-delta ligands (Gabapentin enacarbil, Pregabalin - preferred first-line over dopamine agonists to avoid augmentation!), Dopamine agonists (Pramipexole, Ropinirole).",
          "ayurveda": {
            "dosha": "Pada Kampa / Suptata caused by aggravated Vata in the Majja and Mamsa Dhatus.",
            "herbs": "Ashwagandha, Brahmi, Jatamansi, Tagara (Valeriana wallichii), Shatavari.",
            "formulations": "Saraswatarishta, Ashwagandharishta, Ksheerabala 101, Kalyanaka Ghrita.",
            "therapy": "Padabhyanga (warm sesame or Ksheerabala oil foot and calf massage every night before bed) - classical sovereign therapy for RLS!"
          },
          "mudras": {
            "primary": "Prana Mudra combined with Shakti Mudra",
            "technique": "Hold Prana Mudra for 15 mins; then Shakti Mudra (sleep-inducing gesture) for 15 mins in bed.",
            "duration": "30 minutes before sleep.",
            "benefits": "Calms the nocturnal sensorimotor motor cortex, anchors restless nervous energy."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Legs-up-the-wall for 15 mins in bed)",
              "Supta Baddha Konasana",
              "Balasana",
              "Gentle calf stretches against wall"
            ],
            "pranayama": [
              "Chandra Bhedana Pranayama (Left nostril breathing - activates calming parasympathetic tone)",
              "Bhramari with ears closed"
            ]
          },
          "vitamins": {
            "deficiencies": "Iron / Ferritin (crucial cofactor for tyrosine hydroxylase in dopamine synthesis; maintain ferritin >75 ng/mL!), Magnesium Glycinate (400mg), Vitamin B12, Folate.",
            "dietarySources": "Pumpkin seeds, dark leafy greens, soaked black raisins, bone broth, pasture-raised eggs, chamomile tea."
          },
          "holisticIntegration": "Massage warm Ksheerabala or sesame oil onto both calves and the soles of your feet (Padabhyanga) for 5 minutes every night before bed, then put on clean cotton socks."
        }
      ]
    },
    "feet_ankles": {
      "id": "feet_ankles",
      "name": "Feet & Ankles (Podiatry)",
      "layer": "externals",
      "category": "Podiatric & Base of Support",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Foundation of human locomotion containing 26 bones, 33 joints, medial/lateral longitudinal arches, plantar fascia, and Achilles tendon.",
      "topDiseases": [
        {
          "id": "foot-1",
          "name": "Plantar Fasciitis & Calcaneal Heel Spur",
          "severity": "Moderate (Severe First-Step Morning Heel Pain)",
          "category": "Plantar Fascial Tendinopathy",
          "cause": "Repetitive micro-tearing and degenerative collagen breakdown of the thick plantar aponeurosis at its medial calcaneal tuberosity insertion from sudden increases in standing/running, tight Achilles tendon, or flat feet.",
          "prevention": "Supportive footwear with arch support from the moment of getting out of bed (never walk barefoot on hard tile/wood floors!), calf and Achilles stretching, gradual running progression.",
          "lifestyle": "Roll foot over a frozen water bottle for 10 minutes in the evening, stretch plantar fascia before taking first morning steps (pull toes backward toward shin), use cushioned heel cups.",
          "medicines": "Custom Orthotics / Prefabricated Arch Supports, Physical Therapy (high-load plantar fascia strength training), Extracorporeal Shockwave Therapy (ESWT - high evidence), Ultrasound-guided Corticosteroid or PRP Injection, Plantar Fasciotomy.",
          "ayurveda": {
            "dosha": "Vatakantaka (classical Ayurvedic correlation for heel spur/plantar fasciitis) caused by aggravated Vata in the Pada.",
            "herbs": "Shallaki, Guggulu, Rasna, Ashwagandha, Eranda (Castor oil).",
            "formulations": "Yograj Guggulu, Trayodashanga Guggulu, Sahacharadi Taila, Murivenna oil.",
            "therapy": "Pada Abhyanga with warm Murivenna oil and Ishtika Sweda (warm brick/salt fomentation to the heel)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Heel & Fascia Restorative Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Supports plantar fascial tensile remodeling, relieves heel inflammation."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana (Downward Dog - stretches Achilles and plantar fascia)",
              "Vajrasana with toes tucked under (intense plantar fascia stretch)",
              "Tadasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Magnesium Glycinate (relaxes tight calf muscles), Collagen Peptides (15g), Vitamin C, Vitamin D3.",
            "dietarySources": "Bone broth, pasture-raised eggs, pumpkin seeds, blueberries, wild salmon."
          },
          "holisticIntegration": "Before stepping out of bed in the morning, cross your leg over and pull your toes backward toward your shin for 30 seconds (repeat 3 times) to pre-stretch the plantar fascia and eliminate sharp first-step pain."
        },
        {
          "id": "foot-2",
          "name": "Achilles Tendinopathy (Mid-Portion & Insertional)",
          "severity": "Moderate to High (Tendon Rupture Risk)",
          "category": "Tendinopathy",
          "cause": "Overuse micro-trauma, hypervascularity, and collagen disorganization of the Achilles tendon (mid-portion 2-6cm above calcaneus or at calcaneal insertion) from running, tight calves, or fluoroquinolone antibiotics.",
          "prevention": "Heavy eccentric calf loading (Alfredson protocol), avoid sudden increases in uphill running, avoid fluoroquinolone antibiotics (Ciprofloxacin/Levofloxacin - black box warning for Achilles rupture!).",
          "lifestyle": "Use temporary heel lifts in shoes (reduces tensile load on Achilles), avoid aggressive static stretching during acute pain, cross-train with swimming.",
          "medicines": "Alfredson Eccentric Heel Drop Protocol (gold standard physical therapy), Extracorporeal Shockwave Therapy (ESWT), High-Volume Ultrasound-guided Saline Injections, Percutaneous Needle Tenotomy (Note: Corticosteroid injections are contraindicated due to rupture risk!).",
          "ayurveda": {
            "dosha": "Snayugata Vata in Parshni (heel) and Kandara.",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka (Hadjod), Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Pichu (oil-soaked pad) with warm Murivenna oil over the Achilles tendon."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Tendon Remodeling Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other fingers extended.",
            "duration": "20 minutes daily.",
            "benefits": "Stimulates tenocyte collagen synthesis, restores Achilles tendon tensile strength."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana with bent knees",
              "Tadasana with calf raises on flat floor",
              "Viparita Karani",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides (15g with Vitamin C), Magnesium, Vitamin D3, Omega-3 fatty acids.",
            "dietarySources": "Bone broth, citrus fruits, wild salmon, pumpkin seeds, dark berries."
          },
          "holisticIntegration": "Perform the Alfredson Eccentric Heel Drop Protocol: stand on a step on the balls of your feet, rise up on both feet, and slowly lower down on the injured foot alone over 3 seconds (3 sets of 15 reps twice daily)."
        },
        {
          "id": "foot-3",
          "name": "Lateral Ankle Sprain (ATFL & CFL Tear)",
          "severity": "Moderate to High",
          "category": "Ligamentous Inversion Trauma",
          "cause": "Inversion and plantarflexion of the foot tearing the lateral ligament complex (Anterior Talofibular Ligament - ATFL most common 85%, followed by Calcaneofibular Ligament - CFL).",
          "prevention": "Proprioceptive balance board training (wobble board), wear lace-up ankle braces during high-risk sports (basketball, trail running) if history of prior sprains.",
          "lifestyle": "PRICE protocol acutely (Protection, Rest, Ice, Compression with ACE bandage, Elevation), early protected weight bearing in a walking boot.",
          "medicines": "Lace-up Ankle Brace or Air-Stirrup splint, NSAIDs (short term), Progressive Functional Physical Therapy (peroneal strengthening and balance training), Broström-Gould Ligament Reconstruction (for chronic instability).",
          "ayurveda": {
            "dosha": "Sandhi-Bhagna / Snayu-Kshata in Gulpha (ankle) with severe acute Vata-Rakta trauma and swelling.",
            "herbs": "Shallaki, Ashwagandha, Bala, Asthisamharaka (Hadjod), Guggulu.",
            "formulations": "Lakshadi Guggulu, Trayodashanga Guggulu, Balarishta, Murivenna oil.",
            "therapy": "Local application of Murivenna oil (classical Keralan emergency oil for sprains and dislocations)."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Ligamentous Repair Mudra)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "25 minutes twice daily.",
            "benefits": "Stimulates ligamentous fibroblastic repair, restores ankle joint stability."
          },
          "yoga": {
            "asanas": [
              "Single-Leg Balance Stand on firm floor (eyes open, then closed)",
              "Vrikshasana (with wall touch)",
              "Tadasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (collagen synthesis), Zinc, Vitamin D3, Collagen Peptides, Bromelain (reduces swelling).",
            "dietarySources": "Bone broth, fresh pineapple (bromelain), blueberries, pasture-raised eggs, dark leafy greens."
          },
          "holisticIntegration": "Saturate a clean gauze pad with warm Murivenna oil and bandage it snugly around the sprained ankle overnight to dramatically reduce acute edema and bruising."
        },
        {
          "id": "foot-4",
          "name": "Hallux Valgus (Bunions) & Bunionette",
          "severity": "Moderate",
          "category": "First Ray Bony Deformity",
          "cause": "Medial deviation of the first metatarsal bone and lateral deviation of the great toe at the first MTP joint, exacerbated by narrow-toed tight footwear, high heels, hypermobility, and genetics.",
          "prevention": "Wear wide toe-box shoes (shoes that allow toes to splay naturally like Altra or barefoot shoes), avoid pointy-toed shoes and high heels (>2 inches).",
          "lifestyle": "Use silicone toe spacers between the first and second toes, perform toe splay and towel curl exercises, apply ice over the inflamed bunion prominence.",
          "medicines": "Custom Functional Orthotics, Bunion Splints, NSAIDs, First MTP Corticosteroid Injection (for acute bursitis), Corrective Bunion Surgery (Chevron / Scarf Osteotomy, Lapidus procedure).",
          "ayurveda": {
            "dosha": "Asthi-Sandhi Vikruti in Angustha with Vata-Rakta inflammation.",
            "herbs": "Shallaki, Guggulu, Ashwagandha, Haridra (Curcumin), Nirgundi.",
            "formulations": "Kaishore Guggulu, Trayodashanga Guggulu, Sahacharadi Taila, Murivenna oil.",
            "therapy": "Pada Abhyanga with warm Sahacharadi oil and gentle manual toe realignment."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Bone & Joint Structural Mudra)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports joint structural harmony, reinforces articular alignment."
          },
          "yoga": {
            "asanas": [
              "Toe Spreads (Lift and spread all 10 toes wide apart on floor)",
              "Towel Scrunches (Curl toes to scrunch a towel on floor)",
              "Tadasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3, Calcium, Collagen, Curcumin.",
            "dietarySources": "Bone broth, wild salmon, sesame seeds, blueberries, turmeric golden milk."
          },
          "holisticIntegration": "Switch exclusively to footwear with a wide anatomical toe-box that allows your big toe to remain straight without lateral crowding, and wear a silicone toe spacer during the day."
        },
        {
          "id": "foot-5",
          "name": "Gouty Arthritis of the Great Toe (Podagra)",
          "severity": "Critical (Excruciating Acute Pain)",
          "category": "Crystal Arthropathy",
          "cause": "Supersaturation and precipitation of monosodium urate (MSU) needle-shaped crystals within the first metatarsophalangeal (MTP) joint (podagra 50-70%), triggering NLRP3 inflammasome activation and neutrophil influx.",
          "prevention": "Strictly eliminate high-purine foods (organ meats, anchovies, shellfish), avoid beer and high-fructose corn syrup beverages, stay well hydrated (2.5-3L water daily).",
          "lifestyle": "Apply ice during acute attack (elevate foot; even a bedsheet can cause unbearable agony), drink tart cherry juice daily, avoid alcohol.",
          "medicines": "Acute Attack: Colchicine (1.2mg followed by 0.6mg 1 hour later), High-dose NSAIDs (Indomethacin, Naproxen), Oral Prednisone. Long-Term Urate-Lowering Therapy (maintain serum urate <6.0 mg/dL): Allopurinol (first-line xanthine oxidase inhibitor), Febuxostat.",
          "ayurveda": {
            "dosha": "Vatarakta (classical sovereign correlation for Gout) caused by vitiated Rakta and Vata settling in the Pada-Angustha.",
            "herbs": "Guduchi (Tinospora cordifolia - sovereign herb for Vatarakta / gout!), Manjistha, Sariva, Shallaki, Guggulu.",
            "formulations": "Kaishore Guggulu (premier classical gout remedy), Amritarishta, Mahamanjishtadi Kwath, Pinda Taila.",
            "therapy": "Raktamokshana (Jalaukavacharana / Leech therapy) directly at the first MTP joint, Pinda Taila application."
          },
          "mudras": {
            "primary": "Apana Mudra (Uric Acid Elimination Mudra)",
            "technique": "Touch tips of middle finger and ring finger to thumb tip. Keep index and pinky straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Promotes renal tubular clearance of circulating uric acid, prevents crystal precipitation."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Shavasana (Resting comfortably)",
              "Bhadrasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Cooling breath pacifies burning fiery Vatarakta)",
              "Chandra Bhedana"
            ],
            "cautions": "Strict physical rest during acute fiery attack."
          },
          "vitamins": {
            "deficiencies": "Tart Cherry Extract (anthocyanins significantly lower serum uric acid and reduce gout flares by 35-50% in clinical trials!), Vitamin C (500-1000mg - promotes uricosuria), Hydration.",
            "dietarySources": "Tart cherry juice (pure unsweetened), celery seed extract, lemons, dark berries, water."
          },
          "holisticIntegration": "Drink 1 glass of 100% pure unsweetened Tart Cherry juice daily and take 2 tablets of Kaishore Guggulu with warm water twice daily to keep uric acid levels below 6 mg/dL."
        },
        {
          "id": "foot-6",
          "name": "Morton's Neuroma (Interdigital Perineural Fibrosis)",
          "severity": "Moderate (Burning Ball-of-Foot Pain)",
          "category": "Compressive Neuropathic",
          "cause": "Perineural fibrosis and degeneration of the common plantar digital nerve, most commonly in the third intermetatarsal space (between 3rd and 4th metatarsal heads), caused by narrow-toed footwear compressing metatarsal heads.",
          "prevention": "Avoid tight narrow-toed shoes, avoid high heels, wear shoes with a wide toe box and cushioned forefoot.",
          "lifestyle": "Use metatarsal pads placed just proximal to the metatarsal heads (spreads metatarsals and relieves nerve compression), ice ball-of-foot after walking.",
          "medicines": "Metatarsal Pad / Custom Orthotics, NSAIDs, Ultrasound-guided Corticosteroid or Alcohol Sclerosing Injections, Surgical Neurectomy / Intermetatarsal Ligament Release.",
          "ayurveda": {
            "dosha": "Pada-Shoola and Snayu-Granthi in the Tala (sole) caused by Vata-Kapha entrapment.",
            "herbs": "Shallaki, Ashwagandha, Rasna, Nirgundi, Guggulu.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Sahacharadi Taila, Mahanarayana Taila.",
            "therapy": "Pada Abhyanga with warm Sahacharadi oil and gentle forefoot mobilization."
          },
          "mudras": {
            "primary": "Vayu Mudra (Nerve Pain Relief Mudra)",
            "technique": "Fold index finger to base of thumb, hold down with thumb. Keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Calms irritated interdigital nerve firings, eases burning pebble-like pain."
          },
          "yoga": {
            "asanas": [
              "Toe Spreads on floor",
              "Viparita Karani",
              "Tadasana with even forefoot weight",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Methylcobalamin), Alpha-Lipoic Acid, Magnesium Glycinate.",
            "dietarySources": "Avocados, pumpkin seeds, wild salmon, pasture-raised eggs, dark berries."
          },
          "holisticIntegration": "Place a teardrop-shaped felt Metatarsal Pad inside your shoe just behind (not directly under) the ball of the foot to lift and spread the metatarsal bones, taking pressure off the pinched nerve."
        },
        {
          "id": "foot-7",
          "name": "Pes Planus (Flat Feet) & Posterior Tibial Tendon Dysfunction (PTTD)",
          "severity": "Mild to High",
          "category": "Arch Collapse / Tendinopathy",
          "cause": "Progressive degeneration and insufficiency of the posterior tibial tendon (PTT), leading to collapse of the medial longitudinal arch, hindfoot valgus, and forefoot abduction ('too many toes' sign).",
          "prevention": "Strengthen posterior tibialis and intrinsic foot muscles (toe curls, short foot exercise), wear supportive arch orthotics, maintain healthy weight.",
          "lifestyle": "Perform barefoot 'Short Foot' (Janda) exercises on soft grass, use custom molded orthotics, avoid unsupportive flat flip-flops or completely flat canvas shoes.",
          "medicines": "Custom Rigid Foot Orthotics / Arizona AFO Brace, Physical Therapy (eccentric posterior tibialis strengthening), Surgical Reconstruction (calcaneal osteotomy, FDL tendon transfer, or subtalar arthrodesis).",
          "ayurveda": {
            "dosha": "Pada Snayu Shaithilya and Asthi-Kandara Dushti caused by Vata.",
            "herbs": "Bala, Ashwagandha, Shallaki, Asthisamharaka, Guggulu.",
            "formulations": "Balarishta, Trayodashanga Guggulu, Lakshadi Guggulu, Mahanarayana Taila.",
            "therapy": "Pada Abhyanga with warm Bala-Ashwagandhadi oil and foot arch strengthening."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Arch & Structural Support)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports musculoskeletal foundational alignment, reinforces arch tendon tone."
          },
          "yoga": {
            "asanas": [
              "Short Foot Exercise (Shorten the foot by drawing the ball of the foot toward the heel without curling toes)",
              "Tadasana with conscious arch lifting",
              "Vrikshasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Collagen Peptides, Vitamin C, Vitamin D3, Magnesium.",
            "dietarySources": "Bone broth, pasture-raised eggs, sesame seeds, wild salmon, blueberries."
          },
          "holisticIntegration": "Practice the 'Short Foot' exercise for 3 minutes daily: while standing barefoot, consciously draw the ball of the big toe back toward the heel to actively elevate and contract the medial foot arch."
        },
        {
          "id": "foot-8",
          "name": "Tinea Pedis ('Athlete's Foot') & Onychomycosis",
          "severity": "Mild to Moderate",
          "category": "Dermatophyte Mycological",
          "cause": "Fungal infection of the foot interdigital webs and plantar skin (Tinea pedis) or nail plate (Onychomycosis) by dermatophytes (Trichophyton rubrum, T. mentagrophytes), thriving in warm, dark, moist footwear.",
          "prevention": "Keep feet clean and completely dry (especially between toes), wear moisture-wicking wool or synthetic socks, wear shower sandals in public gyms and pools.",
          "lifestyle": "Rotate shoes daily to allow complete 24-hour drying, dust antifungal powder inside shoes, wash socks in hot water, avoid tight non-breathable shoes.",
          "medicines": "For Tinea Pedis: Topical Terbinafine 1% cream (Lamisil), Clotrimazole, Ketoconazole. For Onychomycosis: Oral Terbinafine (250mg daily for 12 weeks with liver function monitoring), Topical Jublia (Efinaconazole).",
          "ayurveda": {
            "dosha": "Alasa and Dadru Kushtha in Pada with Kapha-Pitta-Krimi dominance.",
            "herbs": "Neem, Karanja, Bakuchi, Haridra (Turmeric), Khadira.",
            "formulations": "Karanja Taila, Kaishore Guggulu, Khadirarishta, Triphala Kwath.",
            "therapy": "Pada Prakshalana (foot wash) with warm Neem-Triphala decoction followed by Karanja oil."
          },
          "mudras": {
            "primary": "Prana Mudra (Antifungal Immune Booster)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stimulates cell-mediated immunity against dermatophytes, cleanses skin tissues."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Viparita Karani",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin A, Vitamin C, Probiotics.",
            "dietarySources": "Garlic (allicin), coconut oil (caprylic acid), pumpkin seeds, green tea, fermented foods."
          },
          "holisticIntegration": "Soak feet for 15 minutes in a basin of warm water with 1 cup raw apple cider vinegar and 10 drops tea tree oil, dry meticulously between toes, and apply pure cold-pressed Neem or Karanja oil."
        },
        {
          "id": "foot-9",
          "name": "Diabetic Peripheral Neuropathy & Foot Ulcer Prevention",
          "severity": "Critical (Amputation Risk)",
          "category": "Neuro-Vascular Metabolic",
          "cause": "Symmetric, length-dependent 'stocking-glove' axonal degeneration from chronic hyperglycemia, sorbitol accumulation, microvascular endoneurial ischemia, and advanced glycation end-products (AGEs), leading to loss of protective sensation (LOPS).",
          "prevention": "Tight glycemic control (HbA1c <7.0%), daily self-inspection of the entire foot and sole using a mirror, professional diabetic podiatry checks, never walking barefoot.",
          "lifestyle": "Inspect feet daily for cuts, blisters, or calluses; wash feet daily in lukewarm water (check temperature with elbow, not insensitive feet!); wear seamless diabetic socks and custom depth shoes.",
          "medicines": "Duloxetine (SNRI - first-line FDA approved for painful diabetic neuropathy), Pregabalin, Gabapentin, Alpha-Lipoic Acid (ALA 600-1200mg IV/oral), Comprehensive Wound Care / Offloading Casts for ulcers.",
          "ayurveda": {
            "dosha": "Prameha Janya Pada Suptata / Daha with severe Majja and Rakta Dhatu Dushti.",
            "herbs": "Haridra (Curcumin), Amalaki, Guduchi, Vijaysar, Ashwagandha.",
            "formulations": "Nisha Amalaki, Chandraprabha Vati, Saptamrit Lauha, Ksheerabala 101.",
            "therapy": "Snigdha Pada Abhyanga with warm Ksheerabala oil (gentle, avoid skin breaks)."
          },
          "mudras": {
            "primary": "Prana Mudra (Peripheral Nerve Recharging Mudra)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep other two fingers extended.",
            "duration": "25 minutes twice daily.",
            "benefits": "Supports peripheral micro-capillary blood flow, stimulates sensory nerve axon resilience."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani (Inverts circulation to refresh stagnant microvascular pools)",
              "Tadasana (Proprioceptive awareness)",
              "Gentle seated ankle circles",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Nadi Shodhana",
              "Bhramari Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Alpha-Lipoic Acid (ALA 600mg daily - extensive clinical trial evidence for improving nerve conduction and neuropathic pain), Benfotiamine (fat-soluble B1 300mg), Methylcobalamin (B12), Vitamin D3.",
            "dietarySources": "Bitter gourd, amla, walnuts, organic pastured eggs, dark leafy greens, chia seeds."
          },
          "holisticIntegration": "Take 600mg Alpha-Lipoic Acid (ALA) with 300mg Benfotiamine every morning on an empty stomach to prevent microvascular nerve damage and relieve neuropathic foot burning."
        },
        {
          "id": "foot-10",
          "name": "Ankle Osteoarthritis & Post-Traumatic Arthritis",
          "severity": "Moderate to High",
          "category": "Tibiotalar Degenerative",
          "cause": "Articular cartilage loss and osteophyte formation in the tibiotalar joint, overwhelmingly post-traumatic (70-80% following trimalleolar/bimalleolar fractures or recurrent chronic ligamentous instability).",
          "prevention": "Anatomic surgical reduction of ankle fractures, aggressive rehabilitation of ankle sprains, wearing protective lace-up braces during sports if unstable.",
          "lifestyle": "Wear rocker-bottom soled shoes (reduces required ankle motion during gait), low-impact exercise (swimming, stationary cycling), avoid uneven terrain running.",
          "medicines": "Rocker-Sole Footwear / Custom AFO Brace, NSAIDs, Intra-articular Corticosteroid or Hyaluronic Acid Injections under ultrasound, Ankle Arthrodesis (fusion) or Total Ankle Replacement (TAR).",
          "ayurveda": {
            "dosha": "Gulpha Sandhigata Vata with loss of Sleshaka Kapha and Vataja stiffness.",
            "herbs": "Shallaki, Guggulu, Ashwagandha, Bala, Rasna.",
            "formulations": "Trayodashanga Guggulu, Yograj Guggulu, Maharasnadi Kwath, Murivenna oil.",
            "therapy": "Gulpha Basti (retaining warm medicated oil like Mahanarayana over the ankle joint) and Janu/Gulpha Sweda."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Bone & Joint Stabilizer)",
            "technique": "Touch tip of ring finger firmly to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Supports joint structural integrity, relieves chronic deep ankle aching."
          },
          "yoga": {
            "asanas": [
              "Gentle Ankle ABCs (Trace the alphabet in the air with toes while seated)",
              "Tadasana on flat surface",
              "Viparita Karani",
              "Shavasana"
            ],
            "pranayama": [
              "Slow Diaphragmatic Breathing",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Glucosamine, Chondroitin, Vitamin D3, Collagen Peptides, Boswellia serrata.",
            "dietarySources": "Bone broth, wild salmon, sesame seeds, blueberries, turmeric golden milk."
          },
          "holisticIntegration": "Wear shoes fitted with a 'rocker-bottom' sole (e.g., Hoka or MBT shoes) to roll your stride smoothly through the gait cycle without forcing painful flexion across the arthritic ankle joint."
        }
      ]
    },
    "skin": {
      "id": "skin",
      "name": "Skin, Epidermis & Nails (Dermatology)",
      "layer": "externals",
      "category": "Integumentary & Barrier",
      "applicableTo": [
        "man",
        "woman",
        "baby"
      ],
      "summary": "Largest human organ (2 square meters) providing an immunological and physical barrier, synthesizing Vitamin D, regulating temperature, and sensing tactile stimuli.",
      "topDiseases": [
        {
          "id": "skin-1",
          "name": "Plaque Psoriasis (Psoriasis Vulgaris)",
          "severity": "Moderate to High",
          "category": "Autoimmune Keratinocytic Hyperplasia",
          "cause": "Dysregulated dendritic cell and T-helper 17 (Th17) activation producing IL-23, IL-17, and TNF-alpha, accelerating epidermal turnover from 28 days down to 3-4 days, producing thick erythematous plaques with silvery scales.",
          "prevention": "Avoid skin trauma (Koebner phenomenon), manage stress, avoid smoking and alcohol (known triggers for severe flares), maintain optimal Vitamin D status.",
          "lifestyle": "Moisturize skin with thick barrier ointments within 3 minutes of bathing, take lukewarm oatmeal baths, safe daily sun exposure (phototherapy), anti-inflammatory diet.",
          "medicines": "Topical Corticosteroids (Clobetasol, Betamethasone) + Topical Vitamin D3 analogues (Calcipotriene), Biologics: Anti-IL23 (Risankizumab, Guselkumab), Anti-IL17 (Secukinumab, Ixekizumab), Narrowband UVB Phototherapy.",
          "ayurveda": {
            "dosha": "Kitibha / Eka-Kushtha with severe Vata-Kapha vitiation and Rakta Dhatu Dushti.",
            "herbs": "Khadira (Acacia catechu - king of skin herbs), Neem, Manjistha, Bakuchi, Haridra (Curcumin).",
            "formulations": "Kaishore Guggulu, Mahatiktaka Ghrita, Khadirarishta, 777 Oil (Wrightia tinctoria).",
            "therapy": "Virechana (therapeutic purgation) to evacuate deep Rakta-Pitta toxins, Takradhara."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Prana Mudra",
            "technique": "Touch pinky tip to thumb tip for 15 mins (hydration); then ring and pinky tips to thumb tip for 15 mins (vitality).",
            "duration": "30 minutes daily.",
            "benefits": "Cools heated systemic skin inflammation, restores cutaneous moisture barrier balance."
          },
          "yoga": {
            "asanas": [
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Setu Bandhasana",
              "Shavasana (Deep guided relaxation)"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Extinguishes internal fiery heat in blood)",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin D3 (optimal >50 ng/mL - topically and systemically suppresses keratinocyte hyperproliferation), Omega-3 Fatty Acids (EPA/DHA 3g daily), Zinc, Selenium.",
            "dietarySources": "Wild fatty fish, walnuts, flaxseeds, turmeric golden tea, dark berries, bone broth."
          },
          "holisticIntegration": "Apply pure cold-pressed coconut oil infused with Wrightia tinctoria (classical 777 Oil) or Neem over plaques twice daily, and expose skin to 15 minutes of mild mid-morning sunlight."
        },
        {
          "id": "skin-2",
          "name": "Atopic Dermatitis (Eczema)",
          "severity": "Moderate to High (Intense Pruritus)",
          "category": "Allergic Barrier Dysfunction",
          "cause": "Loss-of-function mutations in the filaggrin (FLG) epidermal barrier gene combined with Th2 immune hyper-reactivity (IL-4, IL-13), leading to trans-epidermal water loss, intense itch, and allergen sensitization.",
          "prevention": "The 'Soak and Seal' method: lukewarm bath for 10 minutes followed immediately by thick emollient application within 3 minutes on damp skin, avoid harsh foaming soaps.",
          "lifestyle": "Wear 100% soft breathable cotton clothing, keep bedroom cool, use fragrance-free laundry detergents, trim fingernails short to prevent excoriation.",
          "medicines": "Thick Ceramide-based Emollients, Topical Corticosteroids (Triamcinolone), Topical Calcineurin Inhibitors (Tacrolimus 0.1% ointment), Topical PDE4 inhibitor (Crisaborole), Biologics (Dupilumab / Dupixent), Oral JAK Inhibitors (Upadacitinib).",
          "ayurveda": {
            "dosha": "Vicharchika caused by vitiated Kapha and Pitta in Twak (skin) and Rakta Dhatu.",
            "herbs": "Manjistha, Sariva, Neem, Haridra, Yashtimadhu, Khadira.",
            "formulations": "Mahamanjishtadi Kwath, Kaishore Guggulu, Khadirarishta, Jatyadi Ghrita.",
            "therapy": "Gentle Takradhara and application of medicated ghee (Jatyadi Ghrita)."
          },
          "mudras": {
            "primary": "Varun Mudra (The Skin Hydration & Anti-Itch Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Directly restores cellular moisture to parched skin barrier, pacifies refractory itching (Kandu)."
          },
          "yoga": {
            "asanas": [
              "Balasana",
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama (Cooling breath extinguishes burning itch)",
              "Sheetkari",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Ceramides (Lipid barrier), Vitamin D3, Zinc, Omega-3 fatty acids, Probiotics (Lactobacillus rhamnosus GG).",
            "dietarySources": "Wild salmon, chia seeds, bone broth, avocados, extra virgin olive oil, blueberries."
          },
          "holisticIntegration": "Practice the Soak-and-Seal ritual: after a 10-minute warm bath, pat skin very lightly with a towel and immediately slather pure virgin coconut oil or ceramide cream over damp skin within 3 minutes."
        },
        {
          "id": "skin-3",
          "name": "Acne Vulgaris (Comedonal, Inflammatory & Cystic)",
          "severity": "Mild to High",
          "category": "Pilosebaceous Inflammatory",
          "cause": "Follicular hyperkeratinization (comedone plugging), androgen-driven sebum overproduction, Cutibacterium acnes biofilm proliferation, and innate follicular inflammation.",
          "prevention": "Non-comedogenic skincare products, wash face twice daily with gentle cleanser, avoid dairy and high-glycemic foods (which elevate IGF-1 and drive sebum production).",
          "lifestyle": "Never pick, squeeze, or pop acne lesions (causes permanent scarring and post-inflammatory hyperpigmentation!), change pillowcases twice weekly, clean smartphone screen.",
          "medicines": "Topical Retinoids (Adapalene 0.1%, Tretinoin), Benzoyl Peroxide (2.5-5%), Topical Clindamycin, Oral Doxycycline (anti-inflammatory antibiotic), Spironolactone (anti-androgen for adult females), Oral Isotretinoin (Accutane - for severe nodulocystic/scarring acne).",
          "ayurveda": {
            "dosha": "Mukhadushika / Yuvanpidika caused by Pitta, Kapha, and Rakta Dushti during youth.",
            "herbs": "Manjistha, Sariva, Neem, Haridra (Curcumin), Lodhra, Chandana.",
            "formulations": "Kaishore Guggulu, Arogyavardhini Vati, Mahamanjishtadi Kwath, Khadirarishta.",
            "therapy": "Lepa: applying a paste of Lodhra, coriander, and sandalwood with rose water on face."
          },
          "mudras": {
            "primary": "Varun Mudra (Blood Purifying & Sebum Balancing)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Clears impurities from Rakta (blood), balances cutaneous sebum secretion."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana (Downward Dog - brings fresh oxygenated blood to face)",
              "Sarvangasana",
              "Halasana",
              "Vajrasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Kapalbhati (gentle, 30 strokes)",
              "Nadi Shodhana Pranayama"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc (30mg daily - clinical trials show equal efficacy to oral antibiotics for inflammatory acne!), Vitamin A, Vitamin D3, Omega-3 fatty acids.",
            "dietarySources": "Pumpkin seeds (highest zinc), green tea, blueberries, steamed vegetables, turmeric golden milk."
          },
          "holisticIntegration": "Apply a weekly face mask of 1 tsp organic sandalwood powder, 1/4 tsp pure turmeric, and pure organic rose water for 15 minutes to naturally disinfect and cool inflamed acne blemishes."
        },
        {
          "id": "skin-4",
          "name": "Vitiligo (Non-Segmental & Segmental)",
          "severity": "Moderate (High Psychosocial Distress)",
          "category": "Autoimmune Depigmenting",
          "cause": "CD8+ cytotoxic T-cell-mediated destruction of epidermal melanocytes driven by IFN-gamma and CXCL10 chemokine signaling, resulting in well-demarcated depigmented white macules and patches.",
          "prevention": "Protect depigmented skin from sunburn with broad-spectrum mineral sunscreen (SPF 50+ zinc oxide), avoid skin friction/trauma (Koebner phenomenon), stress resilience.",
          "lifestyle": "Use high-SPF sunscreen over white patches (melanin-deficient skin cannot tan and burns easily), psychological support, gentle sun exposure during medical repigmentation.",
          "medicines": "Topical JAK Inhibitor (Ruxolitinib 1.5% cream / Opzelura - breakthrough FDA approval for repigmentation), High-potency Topical Corticosteroids, Topical Tacrolimus 0.1%, Narrowband UVB Phototherapy.",
          "ayurveda": {
            "dosha": "Shwitra / Kilasa caused by Bhrajaka Pitta failure and Rakta-Mamsa-Meda Dushti.",
            "herbs": "Bakuchi (Psoralea corylifolia - premier classical repigmenting herb containing natural psoralens), Manjistha, Khadira, Haridra, Neem.",
            "formulations": "Bakuchi Taila, Kaishore Guggulu, Khadirarishta, Arogyavardhini Vati.",
            "therapy": "Bakuchi application followed by brief, controlled exposure to early morning gentle sunlight (classical phototherapy!)."
          },
          "mudras": {
            "primary": "Surya Mudra (Sun / Pigmentation Stimulating Mudra)",
            "technique": "Fold ring finger down to the base of the thumb; press thumb over knuckle. Keep other fingers straight.",
            "duration": "15-20 minutes daily facing the morning sun.",
            "benefits": "Stimulates metabolic activity in dormant follicular melanocyte stem cell reservoirs."
          },
          "yoga": {
            "asanas": [
              "Surya Namaskar (Sun Salutations - 6 to 12 rounds in morning sun)",
              "Tadasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Bhramari Pranayama",
              "Kapalbhati"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12, Folate (L-Methylfolate - clinical trials show repigmentation with B12 + Folate + sun!), Vitamin D3, Copper, Zinc, Ginkgo Biloba.",
            "dietarySources": "Carrots, beets, dark leafy greens, walnuts, chickpeas, figs, pasture-raised eggs."
          },
          "holisticIntegration": "Undergo guided morning sun exposure: apply Bakuchi oil or pure virgin coconut oil onto white patches and sit in gentle early morning sunlight for exactly 10 minutes to activate melanocyte migration."
        },
        {
          "id": "skin-5",
          "name": "Chronic Urticaria (Hives & Angioedema)",
          "severity": "Moderate to High",
          "category": "Cutaneous Mast Cell-Mediated",
          "cause": "Degranulation of cutaneous mast cells and basophils releasing histamine, leukotrienes, and platelet-activating factor, causing transient, intensely pruritic wheals and angioedema (autoimmune IgG anti-FceRI in 40%).",
          "prevention": "Avoid known physical triggers (pressure, cold, heat, vibration, scratching - dermatographia), avoid NSAIDs and codeine (which trigger non-allergic mast cell degranulation).",
          "lifestyle": "Cool compresses over wheals, wear loose smooth cotton clothing, keep ambient temperature cool, avoid hot showers which provoke massive histamine release.",
          "medicines": "Second-Generation Non-Sedating H1 Antihistamines (Cetirizine, Fexofenadine, Bilastine - can be up-titrated up to 4x standard dose under physician guidance), Omalizumab (Xolair - anti-IgE biologic injection for refractory chronic urticaria), Cyclosporine.",
          "ayurveda": {
            "dosha": "Sheetapitta and Udarda caused by Vata-Kapha and Rakta Dushti in Twak.",
            "herbs": "Haridra (Turmeric - sovereign anti-urticarial), Neem, Guduchi, Sariva, Yashtimadhu.",
            "formulations": "Haridra Khanda (the classical gold-standard remedy for Sheetapitta/hives!), Kaishore Guggulu, Khadirarishta.",
            "therapy": "Abhyanga with warm mustard oil followed by warm water wash."
          },
          "mudras": {
            "primary": "Prithvi Mudra (Mast Cell & Histamine Stabilizer)",
            "technique": "Touch tip of ring finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Stabilizes mast cell membranes, reduces systemic hypersensitivity and itching."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Deep parasympathetic rest)",
              "Supta Baddha Konasana",
              "Balasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Extinguishes histamine heat)",
              "Chandra Bhedana",
              "Nadi Shodhana"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin (500mg - natural mast cell stabilizer), Vitamin C (1000mg), Vitamin D3 (optimal levels significantly reduce urticaria severity), Diamine Oxidase (DAO).",
            "dietarySources": "Red onions, apples, berries, green tea, fresh chamomile tea."
          },
          "holisticIntegration": "Take 1 teaspoon of organic Haridra Khanda with warm water twice daily—clinically celebrated in Ayurveda for extinguishing recurrent chronic urticaria flares."
        },
        {
          "id": "skin-6",
          "name": "Rosacea (Erythematotelangiectatic & Papulopustular)",
          "severity": "Moderate",
          "category": "Neurovascular Facial",
          "cause": "Innate immune dysregulation with elevated cathelicidin (LL-37) peptides, neurovascular facial flushing hyper-reactivity, and Demodex folliculorum mite proliferation triggering central facial erythema, telangiectasias, and pustules.",
          "prevention": "Avoid known personal triggers (the 'Four Hs': Heat, Hot beverages, Hard exercise, and Hot spicy foods), alcohol (especially red wine), daily mineral sunscreen (Zinc Oxide 10%+).",
          "lifestyle": "Use gentle fragrance-free cleansers, rinse with lukewarm (never hot) water, protect face from cold freezing winds with a soft scarf, manage emotional stress.",
          "medicines": "Topical Ivermectin 1% cream (Soolantra - eradicates Demodex mites), Topical Azelaic Acid 15% gel, Topical Metronidazole 0.75%, Oral Sub-antimicrobial Doxycycline (40mg modified release / Oracea), Pulsed Dye Laser (PDL) for telangiectasias.",
          "ayurveda": {
            "dosha": "Rakta-Pitta Dushti in the Mukha with intense Tejas fire in Bhrajaka Pitta.",
            "herbs": "Manjistha, Sariva, Chandana (Sandalwood), Yashtimadhu, Lodhra, Neem.",
            "formulations": "Kaishore Guggulu, Mahatiktaka Ghrita, Kamadudha Ras, Chandanasava.",
            "therapy": "Facial application of cool pure sandalwood and rose water paste."
          },
          "mudras": {
            "primary": "Varun Mudra combined with Sheetali Pranayama",
            "technique": "Touch tip of little finger to thumb tip. Practice Sheetali cooling breath simultaneously.",
            "duration": "20 minutes daily.",
            "benefits": "Cools facial micro-vascular flushing, reduces cutaneous erythema."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably in cool room)",
              "Viparita Karani",
              "Supta Baddha Konasana",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Extinguishes facial flush)",
              "Chandra Bhedana"
            ],
            "cautions": "Avoid intense heated yoga (Bikram / Hot yoga) and strenuous inversions that flush face with blood."
          },
          "vitamins": {
            "deficiencies": "Zinc (anti-inflammatory for facial erythema), Vitamin C, Omega-3 fatty acids, Probiotics.",
            "dietarySources": "Cooling foods: cucumber, watermelon, coconut water, celery, steamed squashes, blueberries."
          },
          "holisticIntegration": "Mist face with pure organic rose water kept chilled in the refrigerator, and apply 15% Azelaic Acid gel nightly to reduce erythema and clear Demodex-driven pustules."
        },
        {
          "id": "skin-7",
          "name": "Tinea Versicolor (Pityriasis Versicolor)",
          "severity": "Mild to Moderate",
          "category": "Fungal Superficial",
          "cause": "Overgrowth of dimorphic lipophilic Malassezia yeasts (Malassezia globosa/furfur) transforming into invasive mycelial forms, producing azelaic acid which inhibits tyrosinase and causes hyper- or hypo-pigmented scaly macules on chest, back, and shoulders.",
          "prevention": "Shower immediately after sweating or workouts, wear loose breathable moisture-wicking clothing, avoid heavy occlusive tanning oils in hot humid climates.",
          "lifestyle": "Use zinc pyrithione or selenium sulfide body wash once or twice weekly as a preventative maintenance body shampoo, wash workout shirts in hot water.",
          "medicines": "Topical Antifungals: Ketoconazole 2% shampoo (applied to body for 10 mins before rinsing for 7-14 days), Selenium Sulfide 2.5% lotion, Terbinafine spray, Oral Fluconazole (300mg once weekly for 2-3 weeks for widespread coverage).",
          "ayurveda": {
            "dosha": "Sidhma Kushtha with Kapha-Vata dominance and Krimi overgrowth.",
            "herbs": "Neem, Karanja, Bakuchi, Haridra (Turmeric), Tulsi, Khadira.",
            "formulations": "Karanja Taila, Kaishore Guggulu, Khadirarishta, Triphala Kwath.",
            "therapy": "Body wash with warm Neem-Triphala decoction and application of Karanja-coconut oil."
          },
          "mudras": {
            "primary": "Prana Mudra (Cutaneous Antifungal Immunity)",
            "technique": "Touch tips of ring finger and little finger to thumb tip. Keep index and middle fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Boosts epidermal cell-mediated immunity against superficial fungal mycelia."
          },
          "yoga": {
            "asanas": [
              "Tadasana",
              "Vajrasana",
              "Bhujangasana",
              "Shavasana"
            ],
            "pranayama": [
              "Nadi Shodhana Pranayama",
              "Kapalbhati",
              "Sheetali"
            ]
          },
          "vitamins": {
            "deficiencies": "Zinc, Vitamin A, Vitamin C.",
            "dietarySources": "Garlic, virgin coconut oil (caprylic acid), pumpkin seeds, green tea, fresh vegetables."
          },
          "holisticIntegration": "Lather Ketoconazole 2% or Selsun Blue (Selenium Sulfide) shampoo over affected chest and back, leave on skin for 10 minutes before rinsing off, daily for 10 days."
        },
        {
          "id": "skin-8",
          "name": "Allergic Contact Dermatitis & Poison Ivy (Rhus Dermatitis)",
          "severity": "Moderate to High (Intense Blistering Itch)",
          "category": "Type IV Delayed Hypersensitivity",
          "cause": "Type IV cell-mediated delayed hypersensitivity reaction following topical skin contact with haptens (Urushiol from poison ivy/oak, Nickel in jewelry, Fragrances, Neomycin, Methylisothiazolinone), causing vesicular, weeping, intensely pruritic linear eruptions.",
          "prevention": "Wash skin with dish soap or specialized degreasing wash (Tecnu) within 30 minutes of poison ivy contact to remove resin, wear nickel-free jewelry, patch testing.",
          "lifestyle": "Cool colloidal oatmeal baths, cool compresses with Burow's solution (aluminum acetate) to dry weeping blisters, avoid scratching (prevents secondary bacterial impetiginization).",
          "medicines": "High-potency Topical Corticosteroid ointment (Clobetasol 0.05% - for localized lesions), Oral Prednisone Taper (strictly 14-21 days for widespread poison ivy; shorter 5-day bursts cause severe rebound flares!), Oral Antihistamines for sleep.",
          "ayurveda": {
            "dosha": "Agantuja Kushtha / Visha Janya Tvak Roga with acute explosive Pitta-Rakta inflammation.",
            "herbs": "Manjistha, Sariva, Chandana (Sandalwood), Neem, Yashtimadhu, Ghee.",
            "formulations": "Kaishore Guggulu, Mahatiktaka Ghrita, Kamadudha Ras, Shatadhauta Ghrita (100-times washed ghee).",
            "therapy": "Local application of Shatadhauta Ghrita or pure cold sandalwood paste to extinguish fiery allergic heat."
          },
          "mudras": {
            "primary": "Varun Mudra (Anti-Allergic Cooling Mudra)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes twice daily.",
            "benefits": "Cools the intense fiery allergic heat in the skin, pacifies burning itch."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting quietly in cool room)",
              "Supta Baddha Konasana",
              "Viparita Karani"
            ],
            "pranayama": [
              "Sheetali Pranayama (15-20 rounds)",
              "Sheetkari",
              "Chandra Bhedana"
            ]
          },
          "vitamins": {
            "deficiencies": "Quercetin, Vitamin C, Zinc.",
            "dietarySources": "Watermelon, cucumber, coconut water, fresh berries, chamomile tea."
          },
          "holisticIntegration": "Apply Shatadhauta Ghrita (classical organic ghee washed 100 times in copper with spring water) over the weeping allergic dermatitis to instantly soothe inflammation and accelerate re-epithelialization."
        },
        {
          "id": "skin-9",
          "name": "Melasma & Facial Hyperpigmentation ('Mask of Pregnancy')",
          "severity": "Mild to Moderate (High Cosmetic Impact)",
          "category": "Hyperpigmentary Melanocytic",
          "cause": "Hyperfunctional melanocytes producing excessive melanin in the centrofacial, malar, or mandibular distribution, triggered by ultraviolet (UV) and visible blue light radiation, elevated estrogen/progesterone (pregnancy, OCPs), and genetic predisposition.",
          "prevention": "Daily broad-spectrum TINTED mineral sunscreen (Iron Oxides block visible blue light that un-tinted sunscreens miss!), wide-brimmed UPF 50+ sun hats, avoiding oral contraceptives if prone to melasma.",
          "lifestyle": "Reapply tinted zinc oxide sunscreen every 2 hours outdoors, avoid direct peak midday sun, sit in the shade, avoid aggressive chemical scrubs that trigger post-inflammatory hyperpigmentation.",
          "medicines": "Triple Combination Cream (Hydroquinone 4% + Tretinoin 0.05% + Fluocinolone acetonide 0.01% - Tri-Luma / gold standard for 8-12 weeks), Topical Tranexamic Acid (3-5%), Azelaic Acid 20%, Oral Tranexamic Acid (250mg BID under physician guidance).",
          "ayurveda": {
            "dosha": "Vyanga / Nyachha caused by aggravated Pitta (Bhrajaka Pitta) and Vata burning the facial skin.",
            "herbs": "Manjistha (Rubia cordifolia - premier complexion beautifier), Sariva, Chandana, Kunkuma (Saffron), Lodhra.",
            "formulations": "Kumkumadi Taila, Mahamanjishtadi Kwath, Kaishore Guggulu, Chandanadi Lepa.",
            "therapy": "Mukha Abhyanga with pure Kumkumadi Taila followed by application of herbal lepa."
          },
          "mudras": {
            "primary": "Varun Mudra (Complexion & Pigment Balance)",
            "technique": "Touch tip of little finger to tip of thumb; keep other three fingers straight.",
            "duration": "20 minutes daily.",
            "benefits": "Promotes pure Rakta Dhatu circulation, balances melanin distribution in the epidermis."
          },
          "yoga": {
            "asanas": [
              "Adho Mukha Svanasana",
              "Sarvangasana",
              "Vajrasana",
              "Shavasana"
            ],
            "pranayama": [
              "Sheetali Pranayama",
              "Nadi Shodhana Pranayama",
              "Bhramari"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin C (potent tyrosinase inhibitor), Glutathione, Polypodium leucotomos extract (fern extract providing oral photoprotection), Vitamin E.",
            "dietarySources": "Amla juice, citrus fruits, dark berries, tomatoes, carrots, green tea."
          },
          "holisticIntegration": "Massage 3-4 drops of authentic Kumkumadi Taila (saffron-infused classical Ayurvedic beauty oil) gently onto cleansed facial pigmentation patches every night before sleep."
        },
        {
          "id": "skin-10",
          "name": "Herpes Zoster (Shingles & Post-Herpetic Neuralgia)",
          "severity": "High (Severe Dermatomal Pain)",
          "category": "Neuro-Cutaneous Viral Reactivation",
          "cause": "Reactivation of latent Varicella-Zoster Virus (VZV) dormant within sensory dorsal root ganglia following childhood chickenpox, traveling down sensory nerve axons to produce an intensely painful, unilateral, dermatomal vesicular rash.",
          "prevention": "Recombinant Zoster Vaccine (Shingrix - 2 doses, >90% effective at preventing shingles and post-herpetic neuralgia in adults aged ≥50 or immunocompromised ≥19).",
          "lifestyle": "Keep rash clean and dry, wear loose cotton clothing, avoid contact with pregnant women or individuals who have never had chickenpox until blisters crust over.",
          "medicines": "Oral Antivirals (Valacyclovir 1000mg TID, Famciclovir, or Acyclovir - strictly start within 72 hours of rash onset to reduce nerve damage and PHN risk!), Analgesics (NSAIDs/Opioids), Gabapentin/Pregabalin (for neuropathic shooting pain), Topical 5% Lidocaine patches (once rash crusts).",
          "ayurveda": {
            "dosha": "Kaksha / Visarpa caused by severe, fiery Pitta-Vata burning the cutaneous nerve paths.",
            "herbs": "Manjistha, Sariva, Guduchi, Chandana, Yashtimadhu, Shatadhauta Ghrita.",
            "formulations": "Kaishore Guggulu, Kamadudha Ras (Mukta yukta), Mahatiktaka Ghrita, Praval Pishti.",
            "therapy": "Local application of Shatadhauta Ghrita (100-times washed cooling ghee) over the fiery lesions."
          },
          "mudras": {
            "primary": "Prana Mudra combined with Vayu Mudra",
            "technique": "Touch ring and pinky tips to thumb (Prana) for 15 mins; then fold index finger to thumb root (Vayu) for 15 mins.",
            "duration": "30 minutes daily.",
            "benefits": "Cools neuropathic burning pain while revitalizing damaged sensory nerve sheaths."
          },
          "yoga": {
            "asanas": [
              "Shavasana (Resting comfortably)",
              "Supta Baddha Konasana with bolsters",
              "Balasana"
            ],
            "pranayama": [
              "Sheetali / Sheetkari Pranayama (Extinguishes the fiery burning pain)",
              "Chandra Bhedana",
              "Soft Belly Breathing"
            ]
          },
          "vitamins": {
            "deficiencies": "Vitamin B12 (Methylcobalamin - critical for post-herpetic nerve repair), Alpha-Lipoic Acid, Vitamin C, Zinc, L-Lysine.",
            "dietarySources": "Bone broth, blueberries, coconut water, pasture-raised eggs, steamed vegetables, chamomile tea."
          },
          "holisticIntegration": "Start high-dose Methylcobalamin (1500mcg sublingual B12) daily to protect damaged sensory nerve myelin, and apply 100-times washed ghee (Shatadhauta Ghrita) over crusted lesions to cool neuropathic burning."
        }
      ]
    }
  }
};

// Freeze to prevent accidental mutation in runtime
if (typeof Object.freeze === 'function') {
  Object.freeze(ANATOMY_DATA.demographics);
  Object.freeze(ANATOMY_DATA.layers);
}
