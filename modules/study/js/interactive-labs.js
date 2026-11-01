/**
 * Interactive Cartoon Mini-Labs
 * Hands-on, tactile, black-and-white comic simulators for NCERT concepts
 */

class InteractiveLabs {
  constructor() {
    this.container = null;
  }

  renderLab(labId, mountElement) {
    this.container = mountElement;
    if (!this.container) return;

    this.container.innerHTML = "";

    switch (labId) {
      case "shape-sorter":
        this.renderShapeSorter();
        break;
      case "photosynthesis-lab":
        this.renderPhotosynthesisLab();
        break;
      case "pizza-fraction-lab":
        this.renderPizzaFractionLab();
        break;
      case "circuit-builder":
        this.renderCircuitBuilder();
        break;
      case "newtons-cart":
        this.renderNewtonsCart();
        break;
      case "ohms-law-lab":
        this.renderOhmsLawLab();
        break;
      default:
        this.container.innerHTML = `<div class="lab-placeholder">Cartoon Mini-Lab coming soon!</div>`;
    }
  }

  // ==========================================
  // LAB 1: SHAPE SORTER (Class 1-2)
  // ==========================================
  renderShapeSorter() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">MINI-LAB</span>
          <h4>The Cartoon Shape Sorter Garage!</h4>
          <p>Click a shape, then click its matching garage hole to see if it rolls or slides in!</p>
        </div>

        <div class="lab-play-area">
          <div class="shape-buttons-shelf">
            <button class="comic-btn shape-btn" data-shape="circle">
              <span class="shape-icon circle-icon">⚪</span> Circle (Ball)
            </button>
            <button class="comic-btn shape-btn" data-shape="square">
              <span class="shape-icon square-icon">⬛</span> Square (Box)
            </button>
            <button class="comic-btn shape-btn" data-shape="triangle">
              <span class="shape-icon triangle-icon">▲</span> Triangle (Hat)
            </button>
          </div>

          <div class="garages-row">
            <div class="garage-slot" data-slot="circle">
              <div class="hole circle-hole"></div>
              <span class="slot-label">ROUND HOLE (0 Corners)</span>
            </div>
            <div class="garage-slot" data-slot="square">
              <div class="hole square-hole"></div>
              <span class="slot-label">SQUARE HOLE (4 Corners)</span>
            </div>
            <div class="garage-slot" data-slot="triangle">
              <div class="hole triangle-hole"></div>
              <span class="slot-label">TRIANGLE HOLE (3 Corners)</span>
            </div>
          </div>

          <div class="lab-speech-bubble" id="lab-feedback">
            <strong>Professor Paws:</strong> "Select a shape from the shelf and try to place it in a garage!"
          </div>
        </div>
      </div>
    `;

    let selectedShape = null;
    const feedback = this.container.querySelector("#lab-feedback");

    this.container.querySelectorAll(".shape-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playClick();
        this.container.querySelectorAll(".shape-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        selectedShape = btn.getAttribute("data-shape");
        feedback.innerHTML = `<strong>Pixel Bot:</strong> "You picked the <strong>${selectedShape.toUpperCase()}</strong>! Now tap a garage hole to test the fit!"`;
        window.audioNarrator.speak(`You picked the ${selectedShape}. Tap a garage hole!`);
      });
    });

    this.container.querySelectorAll(".garage-slot").forEach(slot => {
      slot.addEventListener("click", () => {
        const slotType = slot.getAttribute("data-slot");
        if (!selectedShape) {
          window.audioNarrator.playBoing();
          feedback.innerHTML = `<strong>Professor Paws:</strong> "Pick a toy shape first before trying the garage door!"`;
          window.audioNarrator.speak("Pick a toy shape first!");
          return;
        }

        if (selectedShape === slotType) {
          window.audioNarrator.playSuccess();
          feedback.innerHTML = `<strong>🎉 PERFECT FIT!</strong> The ${selectedShape} slips right into the ${slotType} garage! Sound: <span class="comic-pop-text">SWOOSH!</span>`;
          window.audioNarrator.speak(`Awesome! The ${selectedShape} fits perfectly into the ${slotType} hole!`);
          slot.classList.add("garage-success");
          setTimeout(() => slot.classList.remove("garage-success"), 1500);
        } else {
          window.audioNarrator.playBuzzer();
          feedback.innerHTML = `<strong>❌ BONK!</strong> A ${selectedShape} cannot fit into a ${slotType} garage hole! Try another one!`;
          window.audioNarrator.speak(`Bonk! A ${selectedShape} cannot fit in a ${slotType} hole.`);
          slot.classList.add("garage-fail");
          setTimeout(() => slot.classList.remove("garage-fail"), 800);
        }
      });
    });
  }

  // ==========================================
  // LAB 2: PHOTOSYNTHESIS (Class 3, 7, 10)
  // ==========================================
  renderPhotosynthesisLab() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">SOLAR KITCHEN</span>
          <h4>The Plant Leaf Photosynthesis Machine!</h4>
          <p>Mix Sunlight, Water, and Carbon Dioxide to help Chef Leaf cook Glucose &amp; produce Oxygen!</p>
        </div>

        <div class="lab-play-area">
          <div class="controls-grid">
            <div class="control-card">
              <label>☀️ Sunlight Intensity</label>
              <input type="range" id="sun-slider" min="0" max="100" value="30" class="comic-slider">
              <span id="sun-val" class="slider-display">30% (Cloudy)</span>
            </div>
            <div class="control-card">
              <label>💧 Water from Roots</label>
              <input type="range" id="water-slider" min="0" max="100" value="40" class="comic-slider">
              <span id="water-val" class="slider-display">40% (Moist)</span>
            </div>
            <div class="control-card">
              <label>🌬️ Carbon Dioxide (CO₂)</label>
              <input type="range" id="co2-slider" min="0" max="100" value="50" class="comic-slider">
              <span id="co2-val" class="slider-display">50% (Normal Air)</span>
            </div>
          </div>

          <div class="leaf-kitchen-view">
            <div class="leaf-mascot" id="leaf-mascot">
              <div class="leaf-face">🌿👨‍🍳</div>
              <div class="leaf-status" id="leaf-status">Cooking slowly...</div>
            </div>

            <div class="output-meters">
              <div class="meter-item">
                <span>🍬 Glucose (Plant Food):</span>
                <div class="comic-bar"><div class="comic-bar-fill" id="glucose-fill" style="width: 30%"></div></div>
                <strong id="glucose-text">30% Produced</strong>
              </div>
              <div class="meter-item">
                <span>💨 Oxygen Released (O₂):</span>
                <div class="comic-bar"><div class="comic-bar-fill" id="oxygen-fill" style="width: 30%"></div></div>
                <strong id="oxygen-text">30% Bubbling Out</strong>
              </div>
            </div>
          </div>

          <div class="lab-speech-bubble" id="photo-feedback">
            <strong>Chef Leaf:</strong> "Slide the controls up to give me more Sunlight, Water, and CO₂ so I can cook at full power!"
          </div>
        </div>
      </div>
    `;

    const sun = this.container.querySelector("#sun-slider");
    const water = this.container.querySelector("#water-slider");
    const co2 = this.container.querySelector("#co2-slider");

    const sunVal = this.container.querySelector("#sun-val");
    const waterVal = this.container.querySelector("#water-val");
    const co2Val = this.container.querySelector("#co2-val");

    const glucoseFill = this.container.querySelector("#glucose-fill");
    const oxygenFill = this.container.querySelector("#oxygen-fill");
    const glucoseText = this.container.querySelector("#glucose-text");
    const oxygenText = this.container.querySelector("#oxygen-text");
    const leafStatus = this.container.querySelector("#leaf-status");
    const feedback = this.container.querySelector("#photo-feedback");

    const updatePhotosynthesis = () => {
      const s = parseInt(sun.value);
      const w = parseInt(water.value);
      const c = parseInt(co2.value);

      sunVal.textContent = `${s}% ${s < 20 ? "(Night)" : s > 75 ? "(Bright Noon!)" : "(Sunlit)"}`;
      waterVal.textContent = `${w}% ${w < 20 ? "(Dry Wilt!)" : w > 80 ? "(Plenty!)" : "(Moist)"}`;
      co2Val.textContent = `${c}% ${c < 20 ? "(Thin air)" : "(Fresh air)"}`;

      // Limiting factor principle (Blackman's law)
      const rate = Math.min(s, w, c);

      glucoseFill.style.width = `${rate}%`;
      oxygenFill.style.width = `${rate}%`;
      glucoseText.textContent = `${rate}% Jars Full`;
      oxygenText.textContent = `${rate}% O₂ Released`;

      if (rate === 0) {
        leafStatus.textContent = "😴 Kitchen is closed (Missing ingredient!)";
        feedback.innerHTML = `<strong>Chef Leaf:</strong> "I'm stopped! Look at the lowest slider—without even one ingredient, photosynthesis cannot happen!"`;
      } else if (rate >= 80) {
        leafStatus.textContent = "⚡ SUPER CHEF! Maximum photosynthesis!";
        feedback.innerHTML = `<strong>Chef Leaf:</strong> "YUM! We're making buckets of glucose energy and releasing tons of fresh oxygen for the cartoon animals!"`;
        window.audioNarrator.playSuccess();
      } else {
        leafStatus.textContent = `👩‍🍳 Cooking at ${rate}% capacity`;
        feedback.innerHTML = `<strong>Chef Leaf:</strong> "Good! Keep balancing Sunlight, Water, and CO₂ to reach 100%!"`;
      }
    };

    sun.addEventListener("input", () => { window.audioNarrator.playPop(); updatePhotosynthesis(); });
    water.addEventListener("input", () => { window.audioNarrator.playPop(); updatePhotosynthesis(); });
    co2.addEventListener("input", () => { window.audioNarrator.playPop(); updatePhotosynthesis(); });
  }

  // ==========================================
  // LAB 3: PIZZA FRACTIONS (Class 3-5)
  // ==========================================
  renderPizzaFractionLab() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">FRACTION FEAST</span>
          <h4>The Pizza Monster Fraction Slicer!</h4>
          <p>Cut the pizza into equal slices, click slices to eat them, and watch the fraction math come alive!</p>
        </div>

        <div class="lab-play-area">
          <div class="fraction-toolbar">
            <span>Cut Pizza Into:</span>
            <button class="comic-btn slice-count-btn active" data-slices="8">8 Slices</button>
            <button class="comic-btn slice-count-btn" data-slices="4">4 Slices</button>
            <button class="comic-btn slice-count-btn" data-slices="6">6 Slices</button>
            <button class="comic-btn slice-count-btn" data-slices="2">2 Slices (Halves)</button>
            <button class="comic-btn" id="reset-pizza-btn">🔄 Fresh Pizza</button>
          </div>

          <div class="pizza-display-container">
            <div id="svg-pizza-wrapper"></div>
            <div class="fraction-readout-card">
              <div class="fraction-display-box">
                <span class="fraction-num" id="f-num">0</span>
                <span class="fraction-bar"></span>
                <span class="fraction-den" id="f-den">8</span>
              </div>
              <div class="fraction-labels">
                <div id="f-eaten-label">0 Slices Eaten</div>
                <div id="f-remaining-label">8 Slices Remaining (8/8)</div>
                <div id="f-percent-label">0% Eaten</div>
              </div>
            </div>
          </div>

          <div class="lab-speech-bubble" id="pizza-feedback">
            <strong>Gobbly Monster:</strong> "Click any slice to feed me! Watch the numerator on top count up!"
          </div>
        </div>
      </div>
    `;

    let totalSlices = 8;
    let eatenSet = new Set();

    const drawPizza = () => {
      const wrapper = this.container.querySelector("#svg-pizza-wrapper");
      let pathsSvg = "";
      const cx = 130, cy = 130, r = 110;

      for (let i = 0; i < totalSlices; i++) {
        const startAngle = (i * 2 * Math.PI) / totalSlices - Math.PI / 2;
        const endAngle = ((i + 1) * 2 * Math.PI) / totalSlices - Math.PI / 2;

        const x1 = cx + r * Math.cos(startAngle);
        const y1 = cy + r * Math.sin(startAngle);
        const x2 = cx + r * Math.cos(endAngle);
        const y2 = cy + r * Math.sin(endAngle);

        const isEaten = eatenSet.has(i);
        const fill = isEaten ? "#f0f0f0" : "#ffffff";
        const strokeDash = isEaten ? "stroke-dasharray='4 3'" : "";

        // Slice wedge
        const d = `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2} Z`;

        // Pepperoni circle in slice
        const midAngle = (startAngle + endAngle) / 2;
        const px = cx + (r * 0.6) * Math.cos(midAngle);
        const py = cy + (r * 0.6) * Math.sin(midAngle);

        pathsSvg += `
          <g class="pizza-slice ${isEaten ? 'eaten' : 'fresh'}" data-index="${i}">
            <path d="${d}" fill="${fill}" stroke="#000" stroke-width="3" ${strokeDash}/>
            ${!isEaten ? `<circle cx="${px}" cy="${py}" r="8" fill="#000"/>` : `<text x="${px}" y="${py + 4}" text-anchor="middle" font-size="10" font-weight="bold">CRUMB</text>`}
          </g>
        `;
      }

      wrapper.innerHTML = `
        <svg viewBox="0 0 260 260" class="interactive-pizza-svg">
          <circle cx="130" cy="130" r="118" fill="none" stroke="#000" stroke-width="4"/>
          ${pathsSvg}
        </svg>
      `;

      wrapper.querySelectorAll(".pizza-slice").forEach(slice => {
        slice.addEventListener("click", () => {
          const idx = parseInt(slice.getAttribute("data-index"));
          if (eatenSet.has(idx)) {
            eatenSet.delete(idx);
            window.audioNarrator.playPop();
          } else {
            eatenSet.add(idx);
            window.audioNarrator.playBoing();
          }
          updateFractionStats();
          drawPizza();
        });
      });
    };

    const updateFractionStats = () => {
      const eaten = eatenSet.size;
      const fNum = this.container.querySelector("#f-num");
      const fDen = this.container.querySelector("#f-den");
      const fEaten = this.container.querySelector("#f-eaten-label");
      const fRem = this.container.querySelector("#f-remaining-label");
      const fPct = this.container.querySelector("#f-percent-label");
      const feedback = this.container.querySelector("#pizza-feedback");

      fNum.textContent = eaten;
      fDen.textContent = totalSlices;
      fEaten.textContent = `${eaten} Slices Eaten (${eaten}/${totalSlices})`;
      fRem.textContent = `${totalSlices - eaten} Slices Remaining (${totalSlices - eaten}/${totalSlices})`;
      fPct.textContent = `${Math.round((eaten / totalSlices) * 100)}% of whole pizza`;

      if (eaten === 0) {
        feedback.innerHTML = `<strong>Gobbly Monster:</strong> "The pizza is untouched: 0/${totalSlices} eaten. Tap a slice!"`;
      } else if (eaten === totalSlices) {
        window.audioNarrator.playSuccess();
        feedback.innerHTML = `<strong>🎉 WHOLE PIZZA GONE!</strong> ${totalSlices}/${totalSlices} = 1 Entire Whole consumed! *BURP!*`;
        window.audioNarrator.speak(`Burp! All ${totalSlices} over ${totalSlices} is eaten, which equals one whole!`);
      } else if (eaten * 2 === totalSlices) {
        feedback.innerHTML = `<strong>AHA! HALF PIZZA!</strong> ${eaten}/${totalSlices} is an Equivalent Fraction to <strong>1/2</strong>!`;
        window.audioNarrator.speak(`${eaten} over ${totalSlices} is exactly equal to one half!`);
      } else {
        feedback.innerHTML = `<strong>Fraction:</strong> You have eaten <strong>${eaten}/${totalSlices}</strong> of the pizza!`;
      }
    };

    this.container.querySelectorAll(".slice-count-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        window.audioNarrator.playClick();
        this.container.querySelectorAll(".slice-count-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        totalSlices = parseInt(btn.getAttribute("data-slices"));
        eatenSet.clear();
        drawPizza();
        updateFractionStats();
      });
    });

    this.container.querySelector("#reset-pizza-btn").addEventListener("click", () => {
      window.audioNarrator.playPageFlip();
      eatenSet.clear();
      drawPizza();
      updateFractionStats();
    });

    drawPizza();
    updateFractionStats();
  }

  // ==========================================
  // LAB 4: CIRCUIT BUILDER (Class 6-10)
  // ==========================================
  renderCircuitBuilder() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">ELECTRO LAB</span>
          <h4>The Cartoon Circuit Workbench!</h4>
          <p>Flip the knife switch, swap between conductors and insulators, and watch the electrons sprint!</p>
        </div>

        <div class="lab-play-area">
          <div class="circuit-toolbar">
            <button class="comic-btn active" id="circuit-switch-toggle">⚡ Switch: CLOSED (ON)</button>
            <select id="wire-material-select" class="comic-select">
              <option value="copper">Conductor: Copper Wire</option>
              <option value="iron">Conductor: Iron Nail</option>
              <option value="rubber">Insulator: Rubber Band</option>
              <option value="wood">Insulator: Wooden Stick</option>
              <option value="plastic">Insulator: Plastic Straw</option>
            </select>
            <div class="voltage-stepper">
              <span>Battery: </span>
              <button class="comic-btn" id="volt-down">-</button>
              <span id="volt-display" style="font-weight:900;">3.0 V</span>
              <button class="comic-btn" id="volt-up">+</button>
            </div>
          </div>

          <div class="circuit-canvas-wrapper" id="circuit-visual">
            <!-- Dynamic SVG circuit -->
          </div>

          <div class="lab-speech-bubble" id="circuit-feedback">
            <strong>Professor Paws:</strong> "The switch is closed and copper allows electrons to flow! The bulb glows bright!"
          </div>
        </div>
      </div>
    `;

    let isSwitchClosed = true;
    let material = "copper";
    let voltage = 3.0;

    const renderCircuitSvg = () => {
      const visual = this.container.querySelector("#circuit-visual");
      const isConductor = (material === "copper" || material === "iron");
      const isComplete = isSwitchClosed && isConductor;

      const bulbGlowRadius = isComplete ? Math.min(50, 15 + voltage * 7) : 0;
      const wireDash = isComplete ? "stroke-dasharray='8 6' class='electron-flow-anim'" : "";

      visual.innerHTML = `
        <svg viewBox="0 0 440 240" class="circuit-svg">
          <rect x="10" y="10" width="420" height="220" fill="#fff" stroke="#000" stroke-width="4"/>
          <!-- Circuit wire rectangle -->
          <path d="M 80 120 L 80 50 L 340 50 L 340 100" fill="none" stroke="#000" stroke-width="4" ${wireDash}/>
          <path d="M 80 150 L 80 190 L 180 190" fill="none" stroke="#000" stroke-width="4" ${wireDash}/>
          <!-- Switch section -->
          <circle cx="180" cy="190" r="6" fill="#000"/>
          <circle cx="240" cy="190" r="6" fill="#000"/>
          ${isSwitchClosed 
            ? `<line x1="180" y1="190" x2="240" y2="190" stroke="#000" stroke-width="5"/>` 
            : `<line x1="180" y1="190" x2="225" y2="160" stroke="#000" stroke-width="5"/>`}
          <text x="210" y="215" text-anchor="middle" font-size="11" font-weight="bold">${isSwitchClosed ? "SWITCH CLOSED" : "SWITCH OPEN (GAP!)"}</text>

          <path d="M 240 190 L 280 190" fill="none" stroke="#000" stroke-width="4" ${wireDash}/>
          
          <!-- Test Material bridge -->
          <rect x="280" y="180" width="60" height="20" fill="${isConductor ? '#000' : '#fff'}" stroke="#000" stroke-width="3"/>
          <text x="310" y="195" text-anchor="middle" fill="${isConductor ? '#fff' : '#000'}" font-size="10" font-weight="900">${material.toUpperCase()}</text>

          <path d="M 340 180 L 340 140" fill="none" stroke="#000" stroke-width="4" ${wireDash}/>

          <!-- Battery -->
          <rect x="65" y="115" width="30" height="40" fill="none" stroke="#000" stroke-width="3"/>
          <rect x="75" y="107" width="10" height="8" fill="#000"/>
          <text x="80" y="140" text-anchor="middle" font-size="12" font-weight="900">${voltage}V</text>

          <!-- Bulb -->
          <circle cx="340" cy="120" r="22" fill="${isComplete ? '#000' : 'none'}" stroke="#000" stroke-width="4"/>
          ${isComplete ? `
            <!-- Light rays -->
            <line x1="340" y1="85" x2="340" y2="70" stroke="#000" stroke-width="3"/>
            <line x1="370" y1="95" x2="385" y2="80" stroke="#000" stroke-width="3"/>
            <line x1="375" y1="120" x2="395" y2="120" stroke="#000" stroke-width="3"/>
            <line x1="370" y1="145" x2="385" y2="160" stroke="#000" stroke-width="3"/>
            <line x1="310" y1="95" x2="295" y2="80" stroke="#000" stroke-width="3"/>
            <line x1="305" y1="120" x2="285" y2="120" stroke="#000" stroke-width="3"/>
            <text x="340" y="126" text-anchor="middle" fill="#fff" font-size="11" font-weight="900">GLOW!</text>
          ` : `
            <text x="340" y="125" text-anchor="middle" font-size="10" font-weight="bold">OFF</text>
          `}
        </svg>
      `;

      const feedback = this.container.querySelector("#circuit-feedback");
      if (!isSwitchClosed) {
        feedback.innerHTML = `<strong>Sparky:</strong> "The switch is OPEN! Electrons can't jump the gap in the wire. Close the switch!"`;
      } else if (!isConductor) {
        feedback.innerHTML = `<strong>Professor Paws:</strong> "The ${material} is an <strong>INSULATOR</strong>! Its electrons are held too tightly and refuse to sprint! Replace with a metal conductor!"`;
      } else {
        feedback.innerHTML = `<strong>Pixel Bot:</strong> "Circuit complete! Current = Voltage / Resistance. At ${voltage}V through ${material}, electrons are sprinting happily!"`;
      }
    };

    const toggleBtn = this.container.querySelector("#circuit-switch-toggle");
    toggleBtn.addEventListener("click", () => {
      isSwitchClosed = !isSwitchClosed;
      toggleBtn.textContent = isSwitchClosed ? "⚡ Switch: CLOSED (ON)" : "🛑 Switch: OPEN (OFF)";
      toggleBtn.classList.toggle("active", isSwitchClosed);
      if (isSwitchClosed) window.audioNarrator.playPop();
      else window.audioNarrator.playClick();
      renderCircuitSvg();
    });

    const matSelect = this.container.querySelector("#wire-material-select");
    matSelect.addEventListener("change", (e) => {
      material = e.target.value;
      window.audioNarrator.playClick();
      renderCircuitSvg();
    });

    this.container.querySelector("#volt-up").addEventListener("click", () => {
      if (voltage < 9.0) {
        voltage += 1.5;
        this.container.querySelector("#volt-display").textContent = `${voltage.toFixed(1)} V`;
        window.audioNarrator.playPop();
        renderCircuitSvg();
      }
    });

    this.container.querySelector("#volt-down").addEventListener("click", () => {
      if (voltage > 1.5) {
        voltage -= 1.5;
        this.container.querySelector("#volt-display").textContent = `${voltage.toFixed(1)} V`;
        window.audioNarrator.playPop();
        renderCircuitSvg();
      }
    });

    renderCircuitSvg();
  }

  // ==========================================
  // LAB 5: NEWTON'S CART (Class 9-11)
  // ==========================================
  renderNewtonsCart() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">NEWTON'S ARENA</span>
          <h4>Newton's 2nd Law: The Cart Launcher! (F = ma)</h4>
          <p>Pick the Cart Mass, adjust Spring Launch Force, hit LAUNCH, and watch acceleration in real-time!</p>
        </div>

        <div class="lab-play-area">
          <div class="newton-controls">
            <div class="control-card">
              <label>🛒 Cart Mass (m):</label>
              <select id="cart-mass-select" class="comic-select">
                <option value="1">1 kg (Super Light Speedster)</option>
                <option value="2" selected>2 kg (Standard Comic Cart)</option>
                <option value="5">5 kg (Heavy Metal Box)</option>
                <option value="10">10 kg (Giant Rock Freight)</option>
              </select>
            </div>
            <div class="control-card">
              <label>🚀 Push Force (F):</label>
              <input type="range" id="force-slider" min="5" max="50" step="5" value="20" class="comic-slider">
              <span id="force-val" class="slider-display">20 Newtons</span>
            </div>
            <button class="comic-btn" id="cart-launch-btn">🏁 LAUNCH CART!</button>
          </div>

          <div class="track-area">
            <div class="cart-physics-stats">
              <span><strong>Formula:</strong> a = F / m</span>
              <span><strong>Computed Acceleration:</strong> <span id="computed-acc">10.0 m/s²</span></span>
            </div>
            <div class="cart-track" id="cart-track">
              <div class="cart-entity" id="cart-entity">
                <span class="cart-body">🛒</span>
                <span class="cart-mass-tag" id="cart-tag">2 kg</span>
              </div>
            </div>
          </div>

          <div class="lab-speech-bubble" id="newton-feedback">
            <strong>Professor Paws:</strong> "F = 20 N and m = 2 kg gives acceleration a = 20 / 2 = 10 m/s²! Press LAUNCH CART to test!"
          </div>
        </div>
      </div>
    `;

    const massSelect = this.container.querySelector("#cart-mass-select");
    const forceSlider = this.container.querySelector("#force-slider");
    const forceVal = this.container.querySelector("#force-val");
    const computedAcc = this.container.querySelector("#computed-acc");
    const cartTag = this.container.querySelector("#cart-tag");
    const feedback = this.container.querySelector("#newton-feedback");
    const cart = this.container.querySelector("#cart-entity");
    const launchBtn = this.container.querySelector("#cart-launch-btn");

    const updateCalculations = () => {
      const m = parseFloat(massSelect.value);
      const f = parseFloat(forceSlider.value);
      const a = (f / m).toFixed(1);

      forceVal.textContent = `${f} Newtons`;
      cartTag.textContent = `${m} kg`;
      computedAcc.textContent = `${a} m/s²`;
      feedback.innerHTML = `<strong>Newton's Math:</strong> Force = ${f} N, Mass = ${m} kg &rarr; Acceleration = <strong>${a} m/s²</strong>!`;
    };

    massSelect.addEventListener("change", () => { window.audioNarrator.playClick(); updateCalculations(); });
    forceSlider.addEventListener("input", () => { window.audioNarrator.playPop(); updateCalculations(); });

    launchBtn.addEventListener("click", () => {
      const m = parseFloat(massSelect.value);
      const f = parseFloat(forceSlider.value);
      const a = f / m;

      window.audioNarrator.playBoing();
      cart.style.transition = "none";
      cart.style.left = "0px";

      setTimeout(() => {
        // Duration inversely proportional to acceleration
        const duration = Math.max(0.4, Math.min(2.5, 4 / Math.sqrt(a)));
        cart.style.transition = `left ${duration}s cubic-bezier(0.2, 0.8, 0.2, 1)`;
        cart.style.left = "calc(100% - 70px)";

        setTimeout(() => {
          window.audioNarrator.playSuccess();
          feedback.innerHTML = `<strong>🏁 FINISH LINE!</strong> With an acceleration of <strong>${a.toFixed(1)} m/s²</strong>, the cart zoomed across in ${duration.toFixed(2)} seconds!`;
          window.audioNarrator.speak(`The cart reached the finish line with an acceleration of ${a.toFixed(1)} meters per second squared!`);
        }, duration * 1000);
      }, 50);
    });

    updateCalculations();
  }

  // ==========================================
  // LAB 6: OHM'S LAW LAB (Class 10)
  // ==========================================
  renderOhmsLawLab() {
    this.container.innerHTML = `
      <div class="comic-lab-box">
        <div class="lab-header">
          <span class="comic-badge">OHM'S LAB</span>
          <h4>Ohm's Law Triangle Simulator (V = I × R)</h4>
          <p>Drag the Voltage and Resistance levers to watch the electric current Ampere meter change!</p>
        </div>

        <div class="lab-play-area">
          <div class="controls-grid">
            <div class="control-card">
              <label>🔋 Voltage (V) [Push]:</label>
              <input type="range" id="ohm-v" min="1" max="24" value="12" class="comic-slider">
              <span id="ohm-v-val" class="slider-display">12 Volts</span>
            </div>
            <div class="control-card">
              <label>🛑 Resistance (R) [Squeeze]:</label>
              <input type="range" id="ohm-r" min="1" max="24" value="4" class="comic-slider">
              <span id="ohm-r-val" class="slider-display">4 Ohms (Ω)</span>
            </div>
          </div>

          <div class="ohm-result-card">
            <div class="ohm-big-formula">
              <span>I = V / R</span>
              <div class="ohm-current-badge">
                <span id="ohm-i-val">3.00</span>
                <small>AMPERES</small>
              </div>
            </div>
            <div class="comic-bar">
              <div class="comic-bar-fill" id="current-fill" style="width: 50%;"></div>
            </div>
          </div>

          <div class="lab-speech-bubble" id="ohm-feedback">
            <strong>Professor Paws:</strong> "At 12 Volts and 4 Ohms, Current I = 12 / 4 = 3 Amperes! Try lowering Resistance to see current soar!"
          </div>
        </div>
      </div>
    `;

    const vSlider = this.container.querySelector("#ohm-v");
    const rSlider = this.container.querySelector("#ohm-r");
    const vVal = this.container.querySelector("#ohm-v-val");
    const rVal = this.container.querySelector("#ohm-r-val");
    const iVal = this.container.querySelector("#ohm-i-val");
    const fill = this.container.querySelector("#current-fill");
    const feedback = this.container.querySelector("#ohm-feedback");

    const updateOhm = () => {
      const v = parseFloat(vSlider.value);
      const r = parseFloat(rSlider.value);
      const i = v / r;

      vVal.textContent = `${v} Volts`;
      rVal.textContent = `${r} Ohms (Ω)`;
      iVal.textContent = i.toFixed(2);

      const fillPct = Math.min(100, (i / 10) * 100);
      fill.style.width = `${fillPct}%`;

      feedback.innerHTML = `<strong>Georg Ohm says:</strong> "Voltage ${v}V divided by Resistance ${r}Ω yields <strong>${i.toFixed(2)} Amperes</strong> of flow!"`;
    };

    vSlider.addEventListener("input", () => { window.audioNarrator.playPop(); updateOhm(); });
    rSlider.addEventListener("input", () => { window.audioNarrator.playPop(); updateOhm(); });
  }
}

window.interactiveLabs = new InteractiveLabs();
