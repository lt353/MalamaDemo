// Mobile Demo App - Vanilla JavaScript Version
// Mālama Digital Care - Password Management Journey

class MobileDemoApp {
  constructor() {
    this.currentScene = 0;
    this.currentStep = 0;
    this.tappedNotes = new Set();
    this.showThought = false;
    this.expandedSupport = null;
    this.touchStartY = null;
    this.touchStartX = null;
    this.init();
  }

  init() {
    // Remove loading screen
    setTimeout(() => {
      const loading = document.getElementById('loading');
      if (loading) loading.remove();
      this.render();
      this.attachEventListeners();
    }, 500);
  }

  attachEventListeners() {
    const root = document.getElementById('mobile-demo-root');

    // Touch events for vertical swipe
    root.addEventListener('touchstart', (e) => {
      this.touchStartY = e.touches[0].clientY;
    });

    root.addEventListener('touchend', (e) => {
      if (!this.touchStartY) return;
      const touchEndY = e.changedTouches[0].clientY;
      const diff = this.touchStartY - touchEndY;

      if (Math.abs(diff) > 50) {
        if (diff > 0 && this.currentScene < 4) {
          this.nextScene();
        } else if (diff < 0 && this.currentScene > 0) {
          this.previousScene();
        }
      }
      this.touchStartY = null;
    });
  }

  nextScene() {
    if (this.currentScene < 4) {
      this.currentScene++;
      this.render();
      this.vibrate(50);
    }
  }

  previousScene() {
    if (this.currentScene > 0) {
      this.currentScene--;
      this.render();
      this.vibrate(50);
    }
  }

  vibrate(duration) {
    if ('vibrate' in navigator) {
      navigator.vibrate(duration);
    }
  }

  render() {
    const root = document.getElementById('mobile-demo-root');
    let content = '';

    switch(this.currentScene) {
      case 0:
        content = this.renderChallengeScene();
        break;
      case 1:
        content = this.renderClassroomScene();
        break;
      case 2:
        content = this.renderStepsScene();
        break;
      case 3:
        content = this.renderResultsScene();
        break;
      case 4:
        content = this.renderSupportScene();
        break;
    }

    root.innerHTML = content + this.renderBottomNav();
    this.attachSceneEventListeners();
  }

  renderChallengeScene() {
    const notes = ['password123', 'DontForget!', 'hawaii2020', 'Same4All'];

    return `
      <div class="mobile-scene challenge-scene">
        <div class="scene-content">
          <div class="michelle-illustration">😟</div>
          <h1>😟 Meet Michelle</h1>
          <p>Michelle is like many kūpuna - she has 15+ different accounts but can't keep track of all those passwords.</p>
          <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Tap the sticky notes to see her password problems</h3>
          <div class="floating-notes-container">
            ${notes.map((note, i) => `
              <div class="sticky-note ${this.tappedNotes.has(i) ? 'tapped' : ''}" data-note="${i}">
                ${this.tappedNotes.has(i) ? '❌ Insecure!' : note}
              </div>
            `).join('')}
          </div>
          <ul class="problem-list">
            <li>Written on paper by the computer</li>
            <li>Constantly locked out of accounts</li>
            <li>Worried about being hacked</li>
            <li>Same password everywhere</li>
          </ul>
          <p style="margin-top: 2rem; font-size: 1.125rem;">Michelle wants to feel safe online, but the current system just isn't working.</p>
          <div class="swipe-hint">⬆️ Swipe up to continue</div>
        </div>
      </div>
    `;
  }

  renderClassroomScene() {
    return `
      <div class="mobile-scene learning-scene">
        <div class="scene-content">
          <h1>🌺 Learning with Mālama</h1>
          <div class="classroom-illustration" id="tap-michelle">👩‍🏫👵</div>
          <p style="text-align: center; font-size: 1rem; margin-bottom: 1rem;">Tap Michelle above to see what she's thinking</p>
          ${this.showThought ? `
            <div class="thought-bubble">
              💭 "Finally, someone who doesn't make me feel stupid for asking questions!"
            </div>
          ` : ''}
          <p>Michelle joined our Password Management class - just her and 3 other kūpuna learning together.</p>
          <p style="font-size: 1.5rem; font-weight: 600; text-align: center; margin: 1.5rem 0;">
            No rushing. No judgment. No tech jargon.
          </p>
          <div class="class-info">
            <h3 style="margin-bottom: 1.5rem;">Class Details:</h3>
            <div class="class-info-item"><span>⏱️</span><span>90 minutes</span></div>
            <div class="class-info-item"><span>👥</span><span>4 students maximum</span></div>
            <div class="class-info-item"><span>📍</span><span>In-person, here on Oahu</span></div>
            <div class="class-info-item"><span>☕</span><span>Coffee and snacks included</span></div>
          </div>
          <div class="swipe-hint">⬆️ Swipe up to see what Michelle learned</div>
        </div>
      </div>
    `;
  }

  renderStepsScene() {
    const steps = [
      {
        number: 1,
        title: "Why This Matters",
        content: ["What could happen without good passwords", "Why sticky notes aren't safe", "How password managers protect you"],
        quote: '"I didn\'t know people could see my passwords just by looking at my computer!" - Michelle'
      },
      {
        number: 2,
        title: "Choosing Your Tool",
        content: ["Compared 2-3 easy options", "Installed it on her device", "Set up her account together", "Made sure she felt comfortable"],
        quote: "No tech overwhelm - just one decision at a time."
      },
      {
        number: 3,
        title: "Your First Password",
        content: ["Used the password generator", "Understood why it's strong", "Saved it safely", "Practiced using it"],
        quote: '"I was nervous to let the computer make my password, but now I see why it\'s better!" - Michelle'
      },
      {
        number: 4,
        title: "Moving Everything Over",
        content: ["Session 1: Most important accounts (3-4)", "Week 2 Check-in: Added 5 more", "Week 3 Check-in: Finished the rest", "Practiced until it felt natural"],
        quote: "We didn't do it all at once - that's overwhelming!"
      }
    ];

    const currentStepData = steps[this.currentStep];

    return `
      <div class="mobile-scene steps-carousel">
        <div class="scene-content">
          <h1 style="text-align: center;">Michelle's Learning Steps</h1>
          <p style="text-align: center; font-size: 1.125rem;">Swipe left/right or tap arrows to explore</p>
          <div class="carousel-container">
            <div class="step-card">
              <div class="step-number">${currentStepData.number}</div>
              <h3>${currentStepData.title}</h3>
              <ul>
                ${currentStepData.content.map(item => `<li>${item}</li>`).join('')}
              </ul>
              <div class="step-quote">${currentStepData.quote}</div>
            </div>
            <div style="display: flex; justify-content: space-between; margin-top: 1.5rem; gap: 1rem;">
              <button class="nav-button" id="prev-step" ${this.currentStep === 0 ? 'disabled' : ''} style="flex: 1;">← Previous</button>
              <button class="nav-button" id="next-step" ${this.currentStep === 3 ? 'disabled' : ''} style="flex: 1;">Next →</button>
            </div>
          </div>
          <div class="progress-dots" style="margin-top: 2rem;">
            ${steps.map((_, i) => `
              <div class="progress-dot ${i === this.currentStep ? 'active' : ''}" data-step="${i}"></div>
            `).join('')}
          </div>
          <div class="swipe-hint">${this.currentStep < 3 ? '⬅️ Next step' : '⬆️ Swipe up for results'}</div>
        </div>
      </div>
    `;
  }

  renderResultsScene() {
    return `
      <div class="mobile-scene results-scene">
        <div class="scene-content">
          <h1>✨ Three Weeks Later</h1>
          <div class="confident-illustration" id="celebrate">😊</div>
          <h2 style="text-align: center;">Michelle's Digital Life: Secured ✓</h2>
          <p style="text-align: center; margin-bottom: 1rem;">Tap the metrics below</p>
          <div class="metrics-grid">
            <div class="metric-card" data-metric="1">
              <div class="metric-icon">🔐</div>
              <div class="metric-value">15</div>
              <div class="metric-label">accounts protected</div>
            </div>
            <div class="metric-card" data-metric="2">
              <div class="metric-icon">⏱️</div>
              <div class="metric-value">2+</div>
              <div class="metric-label">hours saved/week</div>
            </div>
            <div class="metric-card" data-metric="3">
              <div class="metric-icon">😌</div>
              <div class="metric-value">0</div>
              <div class="metric-label">login frustrations</div>
            </div>
            <div class="metric-card" data-metric="4">
              <div class="metric-icon">🛡️</div>
              <div class="metric-value">100%</div>
              <div class="metric-label">passwords secure</div>
            </div>
          </div>
          <div class="before-after">
            <h3 style="text-align: center; margin-bottom: 1.5rem;">Before vs After:</h3>
            <div class="comparison-row">
              <div class="before">😟 Stressed</div>
              <div class="arrow">→</div>
              <div class="after">😊 Confident</div>
            </div>
            <div class="comparison-row">
              <div class="before">📝 Sticky notes</div>
              <div class="arrow">→</div>
              <div class="after">🔒 Password manager</div>
            </div>
            <div class="comparison-row">
              <div class="before">❌ Locked out weekly</div>
              <div class="arrow">→</div>
              <div class="after">✅ Always access</div>
            </div>
            <div class="comparison-row">
              <div class="before">2/10 confidence</div>
              <div class="arrow">→</div>
              <div class="after">9/10 confidence</div>
            </div>
          </div>
          <div class="testimonial">
            <p>"I sleep better knowing my accounts are protected. And I don't waste 20 minutes trying to remember passwords anymore!"</p>
            <div class="testimonial-author">- Michelle, Aiea</div>
          </div>
          <div class="swipe-hint">⬆️ Swipe up to see ongoing support</div>
        </div>
      </div>
    `;
  }

  renderSupportScene() {
    const supports = [
      { icon: '📱', title: 'Text/Call Anytime', desc: 'Quick question? Just text!', detail: 'Response time: Same day' },
      { icon: '🔄', title: 'Free Follow-up Sessions', desc: 'Week 2, 4, and 6 check-ins', detail: 'Make sure you\'re confident' },
      { icon: '👥', title: 'Join Community Classes', desc: 'Learn alongside other kūpuna', detail: 'Monthly topics' },
      { icon: '📅', title: 'Book When You Need', desc: 'Need a refresher? No problem.', detail: 'No judgment, ever.' }
    ];

    return `
      <div class="mobile-scene support-scene">
        <div class="scene-content">
          <h1>🤝 Michelle's Support System</h1>
          <div class="support-phone-illustration">📱💬</div>
          <p style="text-align: center; margin-bottom: 2rem;">Because one class is just the beginning.</p>
          <p style="font-size: 1rem; text-align: center; margin-bottom: 1rem;">Tap each card to learn more</p>
          <div class="support-cards">
            ${supports.map((s, i) => `
              <div class="support-card" data-support="${i}">
                <div class="support-card-header">
                  <div class="support-icon">${s.icon}</div>
                  <h4>${s.title}</h4>
                </div>
                <p>${s.desc}</p>
                ${this.expandedSupport === i ? `<div class="support-detail">${s.detail}</div>` : ''}
              </div>
            `).join('')}
          </div>
          <div style="margin-top: 2rem; padding: 1.5rem; background: rgba(0,0,0,0.3); border-radius: 15px;">
            <p style="text-align: center; font-size: 1.25rem; font-weight: 600;">
              This ongoing relationship is what makes us different from Geek Squad or the Apple Store.
            </p>
            <p style="text-align: center; font-size: 1.125rem; margin-top: 1rem;">
              We're not fixing your device.
            </p>
            <p style="text-align: center; font-size: 1.125rem; font-weight: 700; color: #9AD0C2;">
              We're building your confidence.
            </p>
          </div>
          <button class="cta-button" onclick="window.location.href='services.html'">
            Explore Other Classes <span>→</span>
          </button>
          <button class="secondary-button" onclick="window.location.href='index.html'">
            Start Your Journey
          </button>
        </div>
      </div>
    `;
  }

  renderBottomNav() {
    return `
      <div class="bottom-nav">
        <button class="nav-button" id="nav-prev" ${this.currentScene === 0 ? 'disabled' : ''}>← Back</button>
        <button class="nav-home" onclick="window.location.href='index.html'">🏠</button>
        <button class="nav-button" id="nav-next" ${this.currentScene === 4 ? 'disabled' : ''}>Next →</button>
      </div>
    `;
  }

  attachSceneEventListeners() {
    // Sticky notes
    document.querySelectorAll('.sticky-note').forEach(note => {
      note.addEventListener('click', () => {
        const index = parseInt(note.dataset.note);
        this.tappedNotes.add(index);
        this.vibrate(50);
        this.render();
      });
    });

    // Michelle thought bubble
    const tapMichelle = document.getElementById('tap-michelle');
    if (tapMichelle) {
      tapMichelle.addEventListener('click', () => {
        this.showThought = !this.showThought;
        this.vibrate(50);
        this.render();
      });
    }

    // Steps navigation
    const prevStep = document.getElementById('prev-step');
    const nextStep = document.getElementById('next-step');
    if (prevStep) {
      prevStep.addEventListener('click', () => {
        if (this.currentStep > 0) {
          this.currentStep--;
          this.vibrate(50);
          this.render();
        }
      });
    }
    if (nextStep) {
      nextStep.addEventListener('click', () => {
        if (this.currentStep < 3) {
          this.currentStep++;
          this.vibrate(50);
          this.render();
        }
      });
    }

    // Progress dots
    document.querySelectorAll('.progress-dot').forEach(dot => {
      dot.addEventListener('click', () => {
        this.currentStep = parseInt(dot.dataset.step);
        this.vibrate(50);
        this.render();
      });
    });

    // Metrics
    document.querySelectorAll('.metric-card').forEach(card => {
      card.addEventListener('click', () => {
        this.vibrate(50);
        // Add celebration animation
        const celebrate = document.getElementById('celebrate');
        if (celebrate) {
          celebrate.innerHTML = '😊<div class="celebration-effect">🎉</div>';
          setTimeout(() => {
            celebrate.innerHTML = '😊';
          }, 600);
        }
      });
    });

    // Support cards
    document.querySelectorAll('.support-card').forEach(card => {
      card.addEventListener('click', () => {
        const index = parseInt(card.dataset.support);
        this.expandedSupport = this.expandedSupport === index ? null : index;
        this.vibrate(50);
        this.render();
      });
    });

    // Bottom navigation
    const navPrev = document.getElementById('nav-prev');
    const navNext = document.getElementById('nav-next');
    if (navPrev) {
      navPrev.addEventListener('click', () => this.previousScene());
    }
    if (navNext) {
      navNext.addEventListener('click', () => this.nextScene());
    }
  }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => new MobileDemoApp());
} else {
  new MobileDemoApp();
}
