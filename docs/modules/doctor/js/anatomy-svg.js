/**
 * Interactive Anatomy Vector SVG Engine
 * Renders anatomical interactive figures for Baby, Man, and Woman,
 * across Internal Organs and External Surface Anatomy.
 * Features hover outlines, active glow pulsators, cursor tooltips,
 * zoom/pan controls, and accessible click targets.
 * Repository: https://github.com/sv007git/Doctor
 */

class AnatomySVGViewer {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    this.demographic = "man"; // "man" | "woman" | "baby"
    this.layer = "internals"; // "internals" | "externals"
    this.selectedPartId = null;
    this.onPartSelect = null;
    this.onPartHover = null;
    this.zoomLevel = 1.0;
    this.panX = 0;
    this.panY = 0;

    this.init();
  }

  init() {
    if (!this.container) return;
    this.render();
  }

  setDemographic(demographic) {
    if (this.demographic !== demographic) {
      this.demographic = demographic;
      this.render();
    }
  }

  setLayer(layer) {
    if (this.layer !== layer) {
      this.layer = layer;
      this.render();
    }
  }

  selectPart(partId) {
    this.selectedPartId = partId;
    this.updateActiveStyles();
  }

  zoomIn() {
    this.zoomLevel = Math.min(2.5, this.zoomLevel + 0.25);
    this.applyTransform();
  }

  zoomOut() {
    this.zoomLevel = Math.max(0.75, this.zoomLevel - 0.25);
    this.applyTransform();
  }

  resetZoom() {
    this.zoomLevel = 1.0;
    this.panX = 0;
    this.panY = 0;
    this.applyTransform();
  }

  applyTransform() {
    const svgGroup = this.container.querySelector(".svg-viewport-group");
    if (svgGroup) {
      svgGroup.setAttribute(
        "transform",
        `translate(${this.panX}, ${this.panY}) scale(${this.zoomLevel})`
      );
    }
    const zoomDisplay = document.getElementById("zoom-level-display");
    if (zoomDisplay) {
      zoomDisplay.textContent = `${Math.round(this.zoomLevel * 100)}%`;
    }
  }

  updateActiveStyles() {
    const hotspots = this.container.querySelectorAll(".anatomy-hotspot");
    hotspots.forEach((el) => {
      const partId = el.getAttribute("data-part-id");
      if (partId === this.selectedPartId) {
        el.classList.add("is-active");
      } else {
        el.classList.remove("is-active");
      }
    });
  }

  render() {
    if (!this.container) return;

    let svgHtml = "";
    if (this.layer === "internals") {
      svgHtml = this.getInternalSVG();
    } else {
      svgHtml = this.getExternalSVG();
    }

    this.container.innerHTML = `
      <div class="anatomy-svg-wrapper">
        <svg 
          viewBox="0 0 500 800" 
          class="anatomy-main-svg"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Interactive Anatomical Diagram"
        >
          <defs>
            <filter id="glow-filter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <pattern id="grid-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" stroke-width="0.5" opacity="0.1" />
            </pattern>
            <linearGradient id="organ-sheen" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
              <stop offset="100%" stop-color="#ffffff" stop-opacity="0.05" />
            </linearGradient>
          </defs>

          <!-- Subtle medical grid background -->
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />

          <!-- Crosshairs -->
          <g class="medical-crosshairs" opacity="0.2">
            <line x1="250" y1="20" x2="250" y2="780" stroke="currentColor" stroke-dasharray="3,3" stroke-width="0.8" />
            <line x1="40" y1="400" x2="460" y2="400" stroke="currentColor" stroke-dasharray="3,3" stroke-width="0.8" />
            <circle cx="250" cy="400" r="180" fill="none" stroke="currentColor" stroke-width="0.5" stroke-dasharray="6,6" />
          </g>

          <!-- Dynamic Scalable Group -->
          <g class="svg-viewport-group">
            ${svgHtml}
          </g>
        </svg>
      </div>
    `;

    this.bindEvents();
    this.updateActiveStyles();
    this.applyTransform();
  }

  bindEvents() {
    const hotspots = this.container.querySelectorAll(".anatomy-hotspot");
    hotspots.forEach((el) => {
      const partId = el.getAttribute("data-part-id");

      el.addEventListener("mouseenter", (e) => {
        el.classList.add("is-hovered");
        if (this.onPartHover) {
          const rect = el.getBoundingClientRect();
          this.onPartHover(partId, e, rect);
        }
      });

      el.addEventListener("mouseleave", () => {
        el.classList.remove("is-hovered");
        if (this.onPartHover) {
          this.onPartHover(null);
        }
      });

      el.addEventListener("click", () => {
        this.selectPart(partId);
        if (this.onPartSelect) {
          this.onPartSelect(partId);
        }
      });

      el.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          this.selectPart(partId);
          if (this.onPartSelect) {
            this.onPartSelect(partId);
          }
        }
      });
    });
  }

  // ============================================================
  // INTERNAL ORGANS SVG GENERATOR
  // ============================================================
  getInternalSVG() {
    const isBaby = this.demographic === "baby";
    const isWoman = this.demographic === "woman";
    const isMan = this.demographic === "man";

    // Baby has larger cranial proportion and smaller limbs
    if (isBaby) {
      return `
        <!-- BABY BODY SILHOUETTE (INTERNALS) -->
        <g class="body-silhouette" opacity="0.35">
          <!-- Infant Head: Larger head-to-body ratio -->
          <path d="M 250,50 C 180,50 160,110 160,180 C 160,230 190,260 215,270 L 215,295 C 170,305 130,345 130,420 C 130,500 160,540 180,560 L 180,680 C 180,710 210,710 220,680 L 235,570 L 265,570 L 280,680 C 290,710 320,710 320,680 L 320,560 C 340,540 370,500 370,420 C 370,345 330,305 285,295 L 285,270 C 310,260 340,230 340,180 C 340,110 320,50 250,50 Z" 
                fill="none" stroke="currentColor" stroke-width="2" />
        </g>

        <!-- SKELETAL / SPINE AXIS -->
        <g class="anatomy-hotspot" data-part-id="spine" tabindex="0" role="button" aria-label="Spine and Skeletal System">
          <path d="M 250,270 L 250,560" stroke="currentColor" stroke-width="8" stroke-dasharray="8,4" stroke-linecap="round" opacity="0.6" />
          <circle cx="250" cy="565" r="10" fill="currentColor" opacity="0.4" />
          <title>Spine & Skeletal System</title>
        </g>

        <!-- BRAIN & NERVOUS SYSTEM (INFANT) -->
        <g class="anatomy-hotspot" data-part-id="brain" tabindex="0" role="button" aria-label="Infant Brain & Fontanelle">
          <!-- Cerebral hemispheres -->
          <path d="M 250,70 C 200,70 180,110 180,165 C 180,210 205,240 250,240 C 295,240 320,210 320,165 C 320,110 300,70 250,70 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
          <!-- Gyri & sulci fissures -->
          <path d="M 250,75 L 250,235 M 210,130 Q 250,150 215,190 M 290,130 Q 250,150 285,190 M 195,160 Q 235,160 210,210 M 305,160 Q 265,160 290,210" 
                fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7" />
          <!-- Anterior Fontanelle diamond indicator for Baby -->
          <polygon points="250,85 262,97 250,109 238,97" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="2,2" />
          <circle cx="250" cy="97" r="3" fill="currentColor" />
          <title>Brain & Fontanelle</title>
        </g>

        <!-- LUNGS (INFANT THORACIC) -->
        <g class="anatomy-hotspot" data-part-id="lungs" tabindex="0" role="button" aria-label="Lungs & Respiratory">
          <!-- Left Lung -->
          <path d="M 235,320 C 210,320 180,340 175,385 C 170,425 185,455 225,455 C 235,455 238,445 238,420 L 238,335 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
          <!-- Right Lung -->
          <path d="M 265,320 C 290,320 320,340 325,385 C 330,425 315,455 275,455 C 265,455 262,445 262,420 L 262,335 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
          <!-- Bronchial tree -->
          <path d="M 250,300 L 250,335 M 250,335 L 210,380 M 250,335 L 290,380 M 210,380 L 195,410 M 290,380 L 305,410" 
                fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.6" />
          <title>Lungs & Bronchioles</title>
        </g>

        <!-- HEART (INFANT CARDIAC) -->
        <g class="anatomy-hotspot" data-part-id="heart" tabindex="0" role="button" aria-label="Heart & Cardiovascular">
          <path d="M 250,355 C 240,340 220,340 215,360 C 210,380 230,405 250,425 C 270,405 290,380 285,360 C 280,340 260,340 250,355 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2.5" />
          <circle cx="250" cy="380" r="14" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" />
          <line x1="250" y1="365" x2="250" y2="395" stroke="currentColor" stroke-width="1" />
          <title>Heart & Circulation</title>
        </g>

        <!-- LIVER (INFANT - PROMINENT RIGHT LOBE) -->
        <g class="anatomy-hotspot" data-part-id="liver" tabindex="0" role="button" aria-label="Liver & Gallbladder">
          <path d="M 220,460 C 200,460 170,470 170,490 C 170,515 210,525 260,520 C 275,518 280,500 280,480 C 280,465 250,460 220,460 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" />
          <!-- Gallbladder -->
          <circle cx="215" cy="505" r="6" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="1" />
          <title>Liver & Gallbladder</title>
        </g>

        <!-- STOMACH (INFANT GASTRIC & COLIC) -->
        <g class="anatomy-hotspot" data-part-id="stomach" tabindex="0" role="button" aria-label="Stomach & Upper Digestion">
          <path d="M 255,470 C 275,470 305,480 305,505 C 305,530 270,540 245,535 C 235,530 240,505 240,490 C 240,475 250,470 255,470 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" />
          <title>Stomach & Infant Digestion</title>
        </g>

        <!-- PANCREAS -->
        <g class="anatomy-hotspot" data-part-id="pancreas" tabindex="0" role="button" aria-label="Pancreas & Endocrine">
          <path d="M 230,520 Q 255,510 285,525" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity="0.7" />
          <title>Pancreas</title>
        </g>

        <!-- KIDNEYS (INFANT) -->
        <g class="anatomy-hotspot" data-part-id="kidneys" tabindex="0" role="button" aria-label="Kidneys & Urinary System">
          <!-- Left Kidney -->
          <path d="M 205,515 C 190,515 190,545 205,545 C 215,545 215,515 205,515 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.8" />
          <!-- Right Kidney -->
          <path d="M 295,515 C 310,515 310,545 295,545 C 285,545 285,515 295,515 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.8" />
          <title>Kidneys & Urinary Tract</title>
        </g>

        <!-- INTESTINES / COLIC & BABY SYSTEMS -->
        <g class="anatomy-hotspot" data-part-id="baby_internals" tabindex="0" role="button" aria-label="Pediatric Digestive & Colic Systems">
          <!-- Intestinal convolutions around infant navel -->
          <rect x="210" y="535" width="80" height="40" rx="15" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" stroke-dasharray="4,2" />
          <!-- Central Umbilical Stump Marker -->
          <circle cx="250" cy="555" r="9" fill="none" stroke="currentColor" stroke-width="2" />
          <circle cx="250" cy="555" r="3" fill="currentColor" />
          <title>Pediatric Infant Systems & Colic</title>
        </g>
      `;
    }

    // ADULT MAN OR WOMAN INTERNALS
    const pelvicReproductivePartId = isWoman ? "reproductive_female" : "reproductive_male";
    const pelvicLabel = isWoman ? "Female Reproductive (Uterus & Ovaries)" : "Male Reproductive & Prostate";

    return `
      <!-- ADULT BODY CONTOUR SILHOUETTE (INTERNALS) -->
      <g class="body-silhouette" opacity="0.35">
        ${isWoman ? `
          <!-- Female Silhouette: Narrower shoulders, defined waist, wider hips -->
          <path d="M 250,30 C 215,30 205,65 205,115 C 205,150 220,170 235,178 L 235,195 C 185,205 150,240 150,310 C 150,380 185,410 185,445 C 185,470 170,500 170,550 C 170,610 205,670 215,740 L 235,740 L 245,560 L 255,560 L 265,740 L 285,740 C 295,670 330,610 330,550 C 330,500 315,470 315,445 C 315,410 350,380 350,310 C 350,240 315,205 265,195 L 265,178 C 280,170 295,150 295,115 C 295,65 285,30 250,30 Z" 
                fill="none" stroke="currentColor" stroke-width="1.8" />
        ` : `
          <!-- Male Silhouette: Broader shoulders, straight torso -->
          <path d="M 250,25 C 215,25 205,60 205,110 C 205,145 220,165 235,175 L 235,190 C 170,200 135,230 135,300 C 135,370 175,410 175,460 C 175,500 180,540 180,570 C 180,620 205,680 215,750 L 235,750 L 245,570 L 255,570 L 265,750 L 285,750 C 295,680 320,620 320,570 C 320,540 325,500 325,460 C 325,410 365,370 365,300 C 365,230 330,200 265,190 L 265,175 C 280,165 295,145 295,110 C 295,60 285,25 250,25 Z" 
                fill="none" stroke="currentColor" stroke-width="1.8" />
        `}
      </g>

      <!-- VERTEBRAL COLUMN / SPINE & SKELETAL AXIS -->
      <g class="anatomy-hotspot" data-part-id="spine" tabindex="0" role="button" aria-label="Spine and Skeletal Column">
        <path d="M 250,175 L 250,560" stroke="currentColor" stroke-width="9" stroke-dasharray="10,5" stroke-linecap="round" opacity="0.65" />
        <!-- Sacrum / Coccyx -->
        <polygon points="250,580 265,550 235,550" fill="currentColor" opacity="0.4" />
        <title>Spine & Skeletal Column</title>
      </g>

      <!-- 1. BRAIN & NERVOUS SYSTEM -->
      <g class="anatomy-hotspot" data-part-id="brain" tabindex="0" role="button" aria-label="Brain & Central Nervous System">
        <path d="M 250,45 C 215,45 210,80 210,115 C 210,145 225,165 250,165 C 275,165 290,145 290,115 C 290,80 285,45 250,45 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
        <!-- Cerebral convolutions -->
        <path d="M 250,50 L 250,160 M 225,85 Q 250,105 228,135 M 275,85 Q 250,105 272,135 M 215,115 Q 245,115 225,150 M 285,115 Q 255,115 275,150" 
              fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.7" />
        <!-- Brainstem / Medulla -->
        <path d="M 246,165 L 246,190 M 254,165 L 254,190" stroke="currentColor" stroke-width="1.8" opacity="0.7" />
        <title>Brain & Nervous System</title>
      </g>

      <!-- NECK & THYROID (ENDOCRINE) -->
      <g class="anatomy-hotspot" data-part-id="neck_thyroid" tabindex="0" role="button" aria-label="Thyroid Gland & Endocrine">
        <!-- Butterfly thyroid gland -->
        <path d="M 240,195 C 230,190 225,205 230,215 C 235,225 245,220 250,212 C 255,220 265,225 270,215 C 275,205 270,190 260,195 C 255,198 250,205 250,205 C 250,205 245,198 240,195 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" />
        <title>Neck & Thyroid Gland</title>
      </g>

      <!-- 2. LUNGS (THORACIC) -->
      <g class="anatomy-hotspot" data-part-id="lungs" tabindex="0" role="button" aria-label="Lungs & Respiratory System">
        <!-- Left Lung -->
        <path d="M 235,230 C 215,230 180,250 175,300 C 170,350 185,380 225,380 C 235,380 238,370 238,340 L 238,245 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
        <!-- Right Lung -->
        <path d="M 265,230 C 285,230 320,250 325,300 C 330,350 315,380 275,380 C 265,380 262,370 262,340 L 262,245 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
        <!-- Trachea & Bronchi -->
        <path d="M 250,210 L 250,250 M 250,250 L 210,290 M 250,250 L 290,290 M 210,290 L 195,325 M 290,290 L 305,325" 
              fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.65" />
        <title>Lungs & Respiratory Tract</title>
      </g>

      <!-- 3. HEART & CIRCULATORY SYSTEM -->
      <g class="anatomy-hotspot" data-part-id="heart" tabindex="0" role="button" aria-label="Heart & Cardiovascular System">
        <!-- Cardiac muscle -->
        <path d="M 250,265 C 238,250 215,250 210,270 C 205,295 228,325 250,350 C 272,325 295,295 290,270 C 285,250 262,250 250,265 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="2.5" />
        <!-- Aorta & major vessels -->
        <path d="M 245,260 C 245,245 255,240 260,245 L 260,260" fill="none" stroke="currentColor" stroke-width="3" />
        <circle cx="250" cy="295" r="14" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="3,3" />
        <title>Heart & Circulatory System</title>
      </g>

      <!-- 4. LIVER & GALLBLADDER -->
      <g class="anatomy-hotspot" data-part-id="liver" tabindex="0" role="button" aria-label="Liver & Gallbladder">
        <path d="M 220,385 C 190,385 160,395 160,420 C 160,450 205,465 265,455 C 280,450 285,430 285,410 C 285,390 250,385 220,385 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" />
        <!-- Gallbladder -->
        <path d="M 215,445 C 210,445 208,455 212,460 C 216,465 222,460 220,450 Z" 
              fill="currentColor" fill-opacity="0.45" stroke="currentColor" stroke-width="1.5" />
        <title>Liver & Gallbladder</title>
      </g>

      <!-- 5. STOMACH & UPPER DIGESTION -->
      <g class="anatomy-hotspot" data-part-id="stomach" tabindex="0" role="button" aria-label="Stomach & Upper Digestion">
        <!-- Gastric J-shape -->
        <path d="M 255,395 C 275,395 310,405 310,435 C 310,465 270,475 240,470 C 230,465 235,435 235,420 C 235,405 248,395 255,395 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" />
        <title>Stomach & Upper Digestion</title>
      </g>

      <!-- 6. PANCREAS -->
      <g class="anatomy-hotspot" data-part-id="pancreas" tabindex="0" role="button" aria-label="Pancreas & Endocrine Islets">
        <path d="M 230,450 Q 255,440 285,455" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity="0.75" />
        <title>Pancreas & Endocrine</title>
      </g>

      <!-- 7. KIDNEYS & ADRENALS -->
      <g class="anatomy-hotspot" data-part-id="kidneys" tabindex="0" role="button" aria-label="Kidneys & Renal System">
        <!-- Left Kidney -->
        <path d="M 205,435 C 190,435 190,470 205,470 C 218,470 218,435 205,435 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <!-- Right Kidney -->
        <path d="M 295,440 C 310,440 310,475 295,475 C 282,475 282,440 295,440 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <!-- Ureters down to bladder -->
        <path d="M 205,470 Q 220,510 242,545 M 295,475 Q 280,510 258,545" fill="none" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3,3" opacity="0.6" />
        <title>Kidneys & Renal System</title>
      </g>

      <!-- 8. INTESTINES & COLON -->
      <g class="anatomy-hotspot" data-part-id="intestines" tabindex="0" role="button" aria-label="Intestines & Colon (Gut)">
        <!-- Colon Frame (Ascending, Transverse, Descending) -->
        <path d="M 195,530 L 195,475 L 305,475 L 305,530" fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" opacity="0.25" />
        <!-- Small Intestine coils -->
        <path d="M 215,485 Q 235,505 215,525 Q 250,545 285,525 Q 265,505 285,485" 
              fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2.5" />
        <title>Intestines & Colon</title>
      </g>

      <!-- 9. REPRODUCTIVE & PELVIC ORGANS -->
      <g class="anatomy-hotspot" data-part-id="${pelvicReproductivePartId}" tabindex="0" role="button" aria-label="${pelvicLabel}">
        ${isWoman ? `
          <!-- Female: Uterus and bilateral Ovaries -->
          <!-- Uterus -->
          <path d="M 250,530 C 238,530 230,540 235,560 C 240,575 250,580 250,580 C 250,580 260,575 265,560 C 270,540 262,530 250,530 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="2" />
          <!-- Left Fallopian Tube & Ovary -->
          <path d="M 235,540 Q 215,535 210,545" fill="none" stroke="currentColor" stroke-width="1.8" />
          <circle cx="208" cy="547" r="7" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5" />
          <!-- Right Fallopian Tube & Ovary -->
          <path d="M 265,540 Q 285,535 290,545" fill="none" stroke="currentColor" stroke-width="1.8" />
          <circle cx="292" cy="547" r="7" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5" />
        ` : `
          <!-- Male: Bladder base, Prostate and Scrotal Axis -->
          <!-- Urinary Bladder -->
          <ellipse cx="250" cy="545" rx="16" ry="12" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="1.5" />
          <!-- Prostate Gland directly beneath bladder -->
          <path d="M 240,560 C 240,555 260,555 260,560 C 265,572 250,578 250,578 C 250,578 235,572 240,560 Z" 
                class="organ-fill" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="2" />
          <!-- Scrotal/Testicular region -->
          <circle cx="242" cy="590" r="8" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" />
          <circle cx="258" cy="590" r="8" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" />
        `}
        <title>${pelvicLabel}</title>
      </g>
    `;
  }

  // ============================================================
  // EXTERNAL SURFACE ANATOMY SVG GENERATOR
  // ============================================================
  getExternalSVG() {
    const isBaby = this.demographic === "baby";
    const isWoman = this.demographic === "woman";

    if (isBaby) {
      return `
        <!-- BABY EXTERNAL ANATOMY -->
        <!-- HEAD, HAIR & SCALP -->
        <g class="anatomy-hotspot" data-part-id="head_scalp" tabindex="0" role="button" aria-label="Baby Head & Scalp">
          <ellipse cx="250" cy="155" rx="80" ry="95" class="organ-fill" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2" />
          <!-- Fontanelle softness region -->
          <polygon points="250,75 265,90 250,105 235,90" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3,2" />
          <title>Head, Hair & Scalp (Fontanelle)</title>
        </g>

        <!-- EYES -->
        <g class="anatomy-hotspot" data-part-id="eyes" tabindex="0" role="button" aria-label="Eyes & Vision">
          <ellipse cx="220" cy="155" rx="14" ry="9" class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" />
          <ellipse cx="280" cy="155" rx="14" ry="9" class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" />
          <circle cx="220" cy="155" r="5" fill="currentColor" />
          <circle cx="280" cy="155" r="5" fill="currentColor" />
          <title>Eyes & Vision</title>
        </g>

        <!-- EARS -->
        <g class="anatomy-hotspot" data-part-id="ears" tabindex="0" role="button" aria-label="Ears & Hearing">
          <path d="M 170,140 C 160,150 160,175 170,185" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
          <path d="M 330,140 C 340,150 340,175 330,185" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
          <title>Ears & Auditory System</title>
        </g>

        <!-- NOSE -->
        <g class="anatomy-hotspot" data-part-id="nose_sinuses" tabindex="0" role="button" aria-label="Nose & Sinuses">
          <path d="M 250,165 L 246,180 L 254,180 Z" fill="currentColor" fill-opacity="0.4" stroke="currentColor" stroke-width="1.5" />
          <title>Nose & Sinus Passages</title>
        </g>

        <!-- MOUTH & TEETH / THROAT -->
        <g class="anatomy-hotspot" data-part-id="mouth_throat" tabindex="0" role="button" aria-label="Mouth, Gums & Teething">
          <path d="M 235,205 Q 250,218 265,205" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
          <title>Mouth & Teething Gums</title>
        </g>

        <!-- NECK & THROAT -->
        <g class="anatomy-hotspot" data-part-id="neck_thyroid" tabindex="0" role="button" aria-label="Neck & Cervical Area">
          <rect x="220" y="245" width="60" height="30" rx="8" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" />
          <title>Neck & Cervical Spine</title>
        </g>

        <!-- CHEST -->
        <g class="anatomy-hotspot" data-part-id="chest_breasts" tabindex="0" role="button" aria-label="Chest Wall">
          <path d="M 180,285 L 320,285 L 310,360 L 190,360 Z" class="organ-fill" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.8" />
          <title>Chest Wall & Respiratory Movement</title>
        </g>

        <!-- ABDOMEN & UMBILICUS -->
        <g class="anatomy-hotspot" data-part-id="abdomen_core" tabindex="0" role="button" aria-label="Abdomen & Umbilicus (Navel)">
          <path d="M 190,365 L 310,365 L 305,475 L 195,475 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" />
          <!-- Prominent Infant Umbilicus -->
          <circle cx="250" cy="420" r="12" fill="none" stroke="currentColor" stroke-width="2" />
          <circle cx="250" cy="420" r="4" fill="currentColor" />
          <title>Abdomen, Core & Navel</title>
        </g>

        <!-- HANDS & ARMS -->
        <g class="anatomy-hotspot" data-part-id="hands_wrists" tabindex="0" role="button" aria-label="Baby Hands & Wrists">
          <!-- Left hand -->
          <circle cx="130" cy="430" r="18" class="organ-fill" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" />
          <!-- Right hand -->
          <circle cx="370" cy="430" r="18" class="organ-fill" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" />
          <title>Hands, Wrists & Palmar Grasp</title>
        </g>

        <!-- HIPS & PELVIS -->
        <g class="anatomy-hotspot" data-part-id="hips_pelvis" tabindex="0" role="button" aria-label="Hips & Diaper Region">
          <path d="M 195,480 L 305,480 L 295,540 L 205,540 Z" class="organ-fill" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2" />
          <title>Hips & Pelvic Region</title>
        </g>

        <!-- KNEES & LEGS -->
        <g class="anatomy-hotspot" data-part-id="knees_legs" tabindex="0" role="button" aria-label="Knees & Lower Legs">
          <rect x="195" y="545" width="40" height="100" rx="15" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
          <rect x="265" y="545" width="40" height="100" rx="15" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
          <circle cx="215" cy="590" r="10" fill="none" stroke="currentColor" stroke-width="1.5" />
          <circle cx="285" cy="590" r="10" fill="none" stroke="currentColor" stroke-width="1.5" />
          <title>Knees & Lower Legs</title>
        </g>

        <!-- FEET & ANKLES -->
        <g class="anatomy-hotspot" data-part-id="feet_ankles" tabindex="0" role="button" aria-label="Baby Feet & Soles">
          <ellipse cx="210" cy="670" rx="18" ry="12" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
          <ellipse cx="290" cy="670" rx="18" ry="12" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
          <title>Feet, Ankles & Babinski Reflex</title>
        </g>

        <!-- SKIN & DERMATOLOGY (BACKGROUND FLUID BADGE) -->
        <g class="anatomy-hotspot" data-part-id="skin" tabindex="0" role="button" aria-label="Skin & Dermatology">
          <path d="M 140,240 Q 115,240 115,265 L 115,310 Q 115,335 140,335" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,3" />
          <text x="75" y="290" font-size="11" fill="currentColor" font-family="monospace">DERMA</text>
          <title>Skin, Epidermis & Cradle Cap</title>
        </g>
      `;
    }

    // ADULT MAN OR WOMAN EXTERNAL ANATOMY
    return `
      <!-- ADULT EXTERNAL ANATOMY FIGURE -->
      <!-- 1. HEAD, HAIR & SCALP -->
      <g class="anatomy-hotspot" data-part-id="head_scalp" tabindex="0" role="button" aria-label="Head, Hair & Scalp">
        <!-- Cranial Vault and Hairline -->
        <path d="M 250,28 C 215,28 202,55 202,105 C 202,140 220,165 250,165 C 280,165 298,140 298,105 C 298,55 285,28 250,28 Z" 
              class="organ-fill" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="2" />
        <!-- Hairline contour -->
        <path d="M 215,75 Q 250,55 285,75" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,2" />
        <title>Head, Hair & Scalp</title>
      </g>

      <!-- 2. EYES & VISION -->
      <g class="anatomy-hotspot" data-part-id="eyes" tabindex="0" role="button" aria-label="Eyes & Vision">
        <ellipse cx="232" cy="100" rx="12" ry="7" class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" />
        <ellipse cx="268" cy="100" rx="12" ry="7" class="organ-fill" fill="currentColor" fill-opacity="0.3" stroke="currentColor" stroke-width="1.8" />
        <circle cx="232" cy="100" r="4" fill="currentColor" />
        <circle cx="268" cy="100" r="4" fill="currentColor" />
        <!-- Eyebrows -->
        <path d="M 220,88 Q 232,84 244,88 M 256,88 Q 268,84 280,88" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
        <title>Eyes & Vision</title>
      </g>

      <!-- 3. EARS & AUDITORY -->
      <g class="anatomy-hotspot" data-part-id="ears" tabindex="0" role="button" aria-label="Ears & Hearing">
        <path d="M 200,90 C 190,100 190,120 200,130" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
        <path d="M 300,90 C 310,100 310,120 300,130" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" />
        <title>Ears & Hearing</title>
      </g>

      <!-- 4. NOSE & SINUSES -->
      <g class="anatomy-hotspot" data-part-id="nose_sinuses" tabindex="0" role="button" aria-label="Nose & Sinuses">
        <path d="M 250,98 L 246,120 L 254,120 Z" fill="currentColor" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5" />
        <!-- Paranasal sinus dotted zones -->
        <circle cx="238" cy="115" r="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2" />
        <circle cx="262" cy="115" r="4" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="2,2" />
        <title>Nose & Sinuses</title>
      </g>

      <!-- 5. MOUTH & THROAT -->
      <g class="anatomy-hotspot" data-part-id="mouth_throat" tabindex="0" role="button" aria-label="Mouth, Teeth & Throat">
        <path d="M 238,138 Q 250,148 262,138" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" />
        <line x1="240" y1="138" x2="260" y2="138" stroke="currentColor" stroke-width="1.5" />
        <title>Mouth, Teeth & Throat</title>
      </g>

      <!-- 6. NECK & THYROID -->
      <g class="anatomy-hotspot" data-part-id="neck_thyroid" tabindex="0" role="button" aria-label="Neck & Thyroid Area">
        <path d="M 232,168 L 268,168 L 268,200 L 232,200 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <!-- Cervical sternocleidomastoid lines -->
        <path d="M 235,170 L 245,198 M 265,170 L 255,198" stroke="currentColor" stroke-width="1.5" opacity="0.5" />
        <title>Neck & Thyroid</title>
      </g>

      <!-- 7. CHEST WALL & BREASTS -->
      <g class="anatomy-hotspot" data-part-id="chest_breasts" tabindex="0" role="button" aria-label="Chest Wall & Breasts">
        ${isWoman ? `
          <!-- Female Breasts & Pectoral Frame -->
          <path d="M 210,215 L 290,215 L 285,305 L 215,305 Z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.3" />
          <circle cx="218" cy="265" r="24" class="organ-fill" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" />
          <circle cx="282" cy="265" r="24" class="organ-fill" fill="currentColor" fill-opacity="0.22" stroke="currentColor" stroke-width="2" />
          <circle cx="218" cy="265" r="4" fill="currentColor" />
          <circle cx="282" cy="265" r="4" fill="currentColor" />
        ` : `
          <!-- Male Pectorals & Sternum -->
          <path d="M 190,215 L 310,215 L 295,305 L 205,305 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
          <line x1="250" y1="215" x2="250" y2="305" stroke="currentColor" stroke-width="1.5" />
          <circle cx="215" cy="260" r="3.5" fill="currentColor" />
          <circle cx="285" cy="260" r="3.5" fill="currentColor" />
        `}
        <title>Chest Wall & Breasts</title>
      </g>

      <!-- 8. ABDOMEN, CORE & NAVEL -->
      <g class="anatomy-hotspot" data-part-id="abdomen_core" tabindex="0" role="button" aria-label="Abdomen, Core & Navel (Nabhi)">
        <!-- Rectus abdominis & obliques frame -->
        <path d="M 205,310 L 295,310 L 285,445 L 215,445 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <!-- Six-pack linea alba and intersections -->
        <line x1="250" y1="310" x2="250" y2="445" stroke="currentColor" stroke-width="1.8" />
        <line x1="220" y1="355" x2="280" y2="355" stroke="currentColor" stroke-width="1" opacity="0.6" />
        <line x1="225" y1="395" x2="275" y2="395" stroke="currentColor" stroke-width="1" opacity="0.6" />
        <!-- Central Nabhi / Navel marker -->
        <circle cx="250" cy="415" r="6" fill="none" stroke="currentColor" stroke-width="2" />
        <circle cx="250" cy="415" r="2.5" fill="currentColor" />
        <title>Abdomen, Core & Navel</title>
      </g>

      <!-- 9. HANDS, WRISTS & FOREARMS -->
      <g class="anatomy-hotspot" data-part-id="hands_wrists" tabindex="0" role="button" aria-label="Hands & Wrists">
        <!-- Left Forearm & Hand -->
        <path d="M 155,305 L 130,420 L 120,440 L 140,440 L 170,325 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" />
        <circle cx="125" cy="450" r="14" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <!-- Right Forearm & Hand -->
        <path d="M 345,305 L 370,420 L 380,440 L 360,440 L 330,325 Z" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="1.8" />
        <circle cx="375" cy="450" r="14" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <title>Hands, Wrists & Forearms</title>
      </g>

      <!-- 10. HIPS & PELVIS -->
      <g class="anatomy-hotspot" data-part-id="hips_pelvis" tabindex="0" role="button" aria-label="Hips & Pelvic Girdle">
        <path d="M 200,450 L 300,450 L 285,525 L 215,525 Z" class="organ-fill" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="2" />
        <!-- Greater trochanter / hip joint indicators -->
        <circle cx="195" cy="485" r="9" fill="none" stroke="currentColor" stroke-width="1.8" />
        <circle cx="305" cy="485" r="9" fill="none" stroke="currentColor" stroke-width="1.8" />
        <title>Hips & Pelvic Girdle</title>
      </g>

      <!-- 11. KNEES & LOWER LEGS -->
      <g class="anatomy-hotspot" data-part-id="knees_legs" tabindex="0" role="button" aria-label="Knees & Lower Legs">
        <!-- Left Knee & Tibia -->
        <rect x="200" y="530" width="38" height="150" rx="14" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <circle cx="219" cy="590" r="11" fill="none" stroke="currentColor" stroke-width="2" />
        <!-- Right Knee & Tibia -->
        <rect x="262" y="530" width="38" height="150" rx="14" class="organ-fill" fill="currentColor" fill-opacity="0.15" stroke="currentColor" stroke-width="2" />
        <circle cx="281" cy="590" r="11" fill="none" stroke="currentColor" stroke-width="2" />
        <title>Knees & Lower Legs</title>
      </g>

      <!-- 12. FEET & ANKLES -->
      <g class="anatomy-hotspot" data-part-id="feet_ankles" tabindex="0" role="button" aria-label="Feet & Ankles">
        <ellipse cx="215" cy="725" rx="18" ry="24" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <ellipse cx="285" cy="725" rx="18" ry="24" class="organ-fill" fill="currentColor" fill-opacity="0.25" stroke="currentColor" stroke-width="2" />
        <!-- Great toe / first MTP indicators -->
        <circle cx="225" cy="740" r="4" fill="currentColor" />
        <circle cx="275" cy="740" r="4" fill="currentColor" />
        <title>Feet & Ankles (Podiatry)</title>
      </g>

      <!-- 13. SKIN & DERMATOLOGY (CALLOUT BADGE) -->
      <g class="anatomy-hotspot" data-part-id="skin" tabindex="0" role="button" aria-label="Skin & Dermatology">
        <path d="M 125,230 Q 95,230 95,260 L 95,300 Q 95,330 125,330" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="4,3" />
        <text x="50" y="285" font-size="12" fill="currentColor" font-weight="bold" font-family="monospace">DERMA</text>
        <title>Skin, Epidermis & Nails</title>
      </g>
    `;
  }
}
