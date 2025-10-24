// Mobile Demo App - Mālama Digital Care
// Password Management Journey

const { useState, useEffect, useRef } = React;
const { createRoot } = ReactDOM;

// Main App Component
function MobileDemoApp() {
  const [currentScene, setCurrentScene] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const scenes = [
    <ChallengeScene key="challenge" />,
    <ClassroomScene key="classroom" />,
    <StepsCarousel key="steps" />,
    <ResultsScene key="results" />,
    <SupportScene key="support" />
  ];

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > minSwipeDistance;
    const isDownSwipe = distance < -minSwipeDistance;

    if (isUpSwipe && currentScene < scenes.length - 1) {
      nextScene();
    }
    if (isDownSwipe && currentScene > 0) {
      previousScene();
    }
  };

  const nextScene = () => {
    if (currentScene < scenes.length - 1) {
      setCurrentScene(currentScene + 1);
    }
  };

  const previousScene = () => {
    if (currentScene > 0) {
      setCurrentScene(currentScene - 1);
    }
  };

  const goHome = () => {
    window.location.href = 'index.html';
  };

  return React.createElement('div', {
    className: 'mobile-demo-container',
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd
  },
    scenes[currentScene],
    React.createElement(BottomNav, {
      currentScene: currentScene,
      totalScenes: scenes.length,
      onPrevious: previousScene,
      onNext: nextScene,
      onHome: goHome
    })
  );
}

// Scene 1: Challenge
function ChallengeScene() {
  const [tappedNotes, setTappedNotes] = useState(new Set());

  const stickyNotes = [
    "password123",
    "DontForget!",
    "hawaii2020",
    "Same4All"
  ];

  const handleNoteTap = (index) => {
    const newTapped = new Set(tappedNotes);
    newTapped.add(index);
    setTappedNotes(newTapped);

    // Vibrate if supported
    if ('vibrate' in navigator) {
      navigator.vibrate(50);
    }
  };

  return React.createElement('div', { className: 'mobile-scene challenge-scene' },
    React.createElement('div', { className: 'scene-content' },
      React.createElement('div', { className: 'michelle-illustration' },
        '😟'
      ),
      React.createElement('h1', null, '😟 Meet Michelle'),
      React.createElement('p', null,
        'Michelle is like many kūpuna - she has 15+ different accounts but can\'t keep track of all those passwords.'
      ),
      React.createElement('h3', { style: { marginTop: '2rem', marginBottom: '1rem' } },
        'Tap the sticky notes to see her password problems'
      ),
      React.createElement('div', { className: 'floating-notes-container' },
        stickyNotes.map((note, index) =>
          React.createElement('div', {
            key: index,
            className: `sticky-note ${tappedNotes.has(index) ? 'tapped' : ''}`,
            onClick: () => handleNoteTap(index)
          },
            tappedNotes.has(index) ? '❌ Insecure!' : note
          )
        )
      ),
      React.createElement('ul', { className: 'problem-list' },
        React.createElement('li', null, 'Written on paper by the computer'),
        React.createElement('li', null, 'Constantly locked out of accounts'),
        React.createElement('li', null, 'Worried about being hacked'),
        React.createElement('li', null, 'Same password everywhere')
      ),
      React.createElement('p', { style: { marginTop: '2rem', fontSize: '1.125rem' } },
        'Michelle wants to feel safe online, but the current system just isn\'t working.'
      ),
      React.createElement('div', { className: 'swipe-hint' },
        '⬆️ Swipe up to continue'
      )
    )
  );
}

// Scene 2: Classroom
function ClassroomScene() {
  const [showThought, setShowThought] = useState(false);

  return React.createElement('div', { className: 'mobile-scene learning-scene' },
    React.createElement('div', { className: 'scene-content' },
      React.createElement('h1', null, '🌺 Learning with Mālama'),
      React.createElement('div', {
        className: 'classroom-illustration',
        onClick: () => {
          setShowThought(!showThought);
          if ('vibrate' in navigator) navigator.vibrate(50);
        }
      },
        '👩‍🏫👵'
      ),
      React.createElement('p', { style: { textAlign: 'center', fontSize: '1rem', marginBottom: '1rem' } },
        'Tap Michelle above to see what she\'s thinking'
      ),
      showThought && React.createElement('div', { className: 'thought-bubble' },
        '💭 "Finally, someone who doesn\'t make me feel stupid for asking questions!"'
      ),
      React.createElement('p', null,
        'Michelle joined our Password Management class - just her and 3 other kūpuna learning together.'
      ),
      React.createElement('p', { style: { fontSize: '1.5rem', fontWeight: '600', textAlign: 'center', margin: '1.5rem 0' } },
        'No rushing. No judgment. No tech jargon.'
      ),
      React.createElement('div', { className: 'class-info' },
        React.createElement('h3', { style: { marginBottom: '1.5rem' } }, 'Class Details:'),
        React.createElement('div', { className: 'class-info-item' },
          React.createElement('span', null, '⏱️'),
          React.createElement('span', null, '90 minutes')
        ),
        React.createElement('div', { className: 'class-info-item' },
          React.createElement('span', null, '👥'),
          React.createElement('span', null, '4 students maximum')
        ),
        React.createElement('div', { className: 'class-info-item' },
          React.createElement('span', null, '📍'),
          React.createElement('span', null, 'In-person, here on Oahu')
        ),
        React.createElement('div', { className: 'class-info-item' },
          React.createElement('span', null, '☕'),
          React.createElement('span', null, 'Coffee and snacks included')
        )
      ),
      React.createElement('div', { className: 'swipe-hint' },
        '⬆️ Swipe up to see what Michelle learned'
      )
    )
  );
}

// Scene 3: Steps Carousel
function StepsCarousel() {
  const [currentStep, setCurrentStep] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Why This Matters",
      content: [
        "What could happen without good passwords",
        "Why sticky notes aren't safe",
        "How password managers protect you"
      ],
      quote: "\"I didn't know people could see my passwords just by looking at my computer!\" - Michelle"
    },
    {
      number: 2,
      title: "Choosing Your Tool",
      content: [
        "Compared 2-3 easy options",
        "Installed it on her device",
        "Set up her account together",
        "Made sure she felt comfortable"
      ],
      quote: "No tech overwhelm - just one decision at a time."
    },
    {
      number: 3,
      title: "Your First Password",
      content: [
        "Used the password generator",
        "Understood why it's strong",
        "Saved it safely",
        "Practiced using it"
      ],
      quote: "\"I was nervous to let the computer make my password, but now I see why it's better!\" - Michelle"
    },
    {
      number: 4,
      title: "Moving Everything Over",
      content: [
        "Session 1: Most important accounts (3-4)",
        "Week 2 Check-in: Added 5 more",
        "Week 3 Check-in: Finished the rest",
        "Practiced until it felt natural"
      ],
      quote: "We didn't do it all at once - that's overwhelming!"
    }
  ];

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      } else if (diff < 0 && currentStep > 0) {
        setCurrentStep(currentStep - 1);
      }
      if ('vibrate' in navigator) navigator.vibrate(50);
    }
  };

  return React.createElement('div', { className: 'mobile-scene steps-carousel' },
    React.createElement('div', { className: 'scene-content' },
      React.createElement('h1', { style: { textAlign: 'center' } }, 'Michelle\'s Learning Steps'),
      React.createElement('p', { style: { textAlign: 'center', fontSize: '1.125rem' } },
        'Swipe left/right to explore each step'
      ),
      React.createElement('div', {
        className: 'carousel-container',
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd
      },
        React.createElement('div', {
          className: 'carousel-track',
          style: { transform: `translateX(-${currentStep * 100}%)` }
        },
          steps.map((step, index) =>
            React.createElement('div', { key: index, className: 'step-card' },
              React.createElement('div', { className: 'step-number' }, step.number),
              React.createElement('h3', null, step.title),
              React.createElement('ul', null,
                step.content.map((item, i) =>
                  React.createElement('li', { key: i }, item)
                )
              ),
              React.createElement('div', { className: 'step-quote' }, step.quote)
            )
          )
        )
      ),
      React.createElement('div', { className: 'progress-dots' },
        steps.map((_, index) =>
          React.createElement('div', {
            key: index,
            className: `progress-dot ${index === currentStep ? 'active' : ''}`,
            onClick: () => setCurrentStep(index)
          })
        )
      ),
      React.createElement('div', { className: 'swipe-hint' },
        currentStep < steps.length - 1 ? '⬅️ Swipe to see next step' : '⬆️ Swipe up to see results'
      )
    )
  );
}

// Scene 4: Results
function ResultsScene() {
  const [showCelebration, setShowCelebration] = useState(false);
  const [countsAnimated, setCountsAnimated] = useState(false);

  useEffect(() => {
    if (!countsAnimated) {
      setTimeout(() => {
        setShowCelebration(true);
        if ('vibrate' in navigator) navigator.vibrate([50, 100, 50]);
        setTimeout(() => setShowCelebration(false), 600);
      }, 500);
      setCountsAnimated(true);
    }
  }, [countsAnimated]);

  const handleMetricTap = () => {
    setShowCelebration(true);
    if ('vibrate' in navigator) navigator.vibrate(50);
    setTimeout(() => setShowCelebration(false), 600);
  };

  return React.createElement('div', { className: 'mobile-scene results-scene' },
    React.createElement('div', { className: 'scene-content' },
      React.createElement('h1', null, '✨ Three Weeks Later'),
      React.createElement('div', { className: 'confident-illustration' },
        '😊',
        showCelebration && React.createElement('div', { className: 'celebration-effect' }, '🎉')
      ),
      React.createElement('h2', { style: { textAlign: 'center' } }, 'Michelle\'s Digital Life: Secured ✓'),
      React.createElement('p', { style: { textAlign: 'center', marginBottom: '1rem' } },
        'Tap the metrics below'
      ),
      React.createElement('div', { className: 'metrics-grid' },
        React.createElement('div', { className: 'metric-card', onClick: handleMetricTap },
          React.createElement('div', { className: 'metric-icon' }, '🔐'),
          React.createElement('div', { className: 'metric-value' }, '15'),
          React.createElement('div', { className: 'metric-label' }, 'accounts protected')
        ),
        React.createElement('div', { className: 'metric-card', onClick: handleMetricTap },
          React.createElement('div', { className: 'metric-icon' }, '⏱️'),
          React.createElement('div', { className: 'metric-value' }, '2+'),
          React.createElement('div', { className: 'metric-label' }, 'hours saved/week')
        ),
        React.createElement('div', { className: 'metric-card', onClick: handleMetricTap },
          React.createElement('div', { className: 'metric-icon' }, '😌'),
          React.createElement('div', { className: 'metric-value' }, '0'),
          React.createElement('div', { className: 'metric-label' }, 'login frustrations')
        ),
        React.createElement('div', { className: 'metric-card', onClick: handleMetricTap },
          React.createElement('div', { className: 'metric-icon' }, '🛡️'),
          React.createElement('div', { className: 'metric-value' }, '100%'),
          React.createElement('div', { className: 'metric-label' }, 'passwords secure')
        )
      ),
      React.createElement('div', { className: 'before-after' },
        React.createElement('h3', { style: { textAlign: 'center', marginBottom: '1.5rem' } }, 'Before vs After:'),
        React.createElement('div', { className: 'comparison-row' },
          React.createElement('div', { className: 'before' }, '😟 Stressed'),
          React.createElement('div', { className: 'arrow' }, '→'),
          React.createElement('div', { className: 'after' }, '😊 Confident')
        ),
        React.createElement('div', { className: 'comparison-row' },
          React.createElement('div', { className: 'before' }, '📝 Sticky notes'),
          React.createElement('div', { className: 'arrow' }, '→'),
          React.createElement('div', { className: 'after' }, '🔒 Password manager')
        ),
        React.createElement('div', { className: 'comparison-row' },
          React.createElement('div', { className: 'before' }, '❌ Locked out weekly'),
          React.createElement('div', { className: 'arrow' }, '→'),
          React.createElement('div', { className: 'after' }, '✅ Always access')
        ),
        React.createElement('div', { className: 'comparison-row' },
          React.createElement('div', { className: 'before' }, '2/10 confidence'),
          React.createElement('div', { className: 'arrow' }, '→'),
          React.createElement('div', { className: 'after' }, '9/10 confidence')
        )
      ),
      React.createElement('div', { className: 'testimonial' },
        React.createElement('p', null,
          '"I sleep better knowing my accounts are protected. And I don\'t waste 20 minutes trying to remember passwords anymore!"'
        ),
        React.createElement('div', { className: 'testimonial-author' }, '- Michelle, Aiea')
      ),
      React.createElement('div', { className: 'swipe-hint' },
        '⬆️ Swipe up to see ongoing support'
      )
    )
  );
}

// Scene 5: Support
function SupportScene() {
  const [expandedCard, setExpandedCard] = useState(null);

  const supportOptions = [
    {
      icon: '📱',
      title: 'Text/Call Anytime',
      description: 'Quick question? Just text!',
      detail: 'Response time: Same day'
    },
    {
      icon: '🔄',
      title: 'Free Follow-up Sessions',
      description: 'Week 2, 4, and 6 check-ins',
      detail: 'Make sure you\'re confident'
    },
    {
      icon: '👥',
      title: 'Join Community Classes',
      description: 'Learn alongside other kūpuna',
      detail: 'Monthly topics'
    },
    {
      icon: '📅',
      title: 'Book When You Need',
      description: 'Need a refresher? No problem.',
      detail: 'No judgment, ever.'
    }
  ];

  const handleCardTap = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
    if ('vibrate' in navigator) navigator.vibrate(50);
  };

  return React.createElement('div', { className: 'mobile-scene support-scene' },
    React.createElement('div', { className: 'scene-content' },
      React.createElement('h1', null, '🤝 Michelle\'s Support System'),
      React.createElement('div', { className: 'support-phone-illustration' },
        '📱💬'
      ),
      React.createElement('p', { style: { textAlign: 'center', marginBottom: '2rem' } },
        'Because one class is just the beginning.'
      ),
      React.createElement('p', { style: { fontSize: '1rem', textAlign: 'center', marginBottom: '1rem' } },
        'Tap each card to learn more'
      ),
      React.createElement('div', { className: 'support-cards' },
        supportOptions.map((option, index) =>
          React.createElement('div', {
            key: index,
            className: 'support-card',
            onClick: () => handleCardTap(index)
          },
            React.createElement('div', { className: 'support-card-header' },
              React.createElement('div', { className: 'support-icon' }, option.icon),
              React.createElement('h4', null, option.title)
            ),
            React.createElement('p', null, option.description),
            expandedCard === index && React.createElement('div', { className: 'support-detail' }, option.detail)
          )
        )
      ),
      React.createElement('div', { style: { marginTop: '2rem', padding: '1.5rem', background: 'rgba(0,0,0,0.3)', borderRadius: '15px' } },
        React.createElement('p', { style: { textAlign: 'center', fontSize: '1.25rem', fontWeight: '600' } },
          'This ongoing relationship is what makes us different from Geek Squad or the Apple Store.'
        ),
        React.createElement('p', { style: { textAlign: 'center', fontSize: '1.125rem', marginTop: '1rem' } },
          'We\'re not fixing your device.'
        ),
        React.createElement('p', { style: { textAlign: 'center', fontSize: '1.125rem', fontWeight: '700', color: '#9AD0C2' } },
          'We\'re building your confidence.'
        )
      ),
      React.createElement('button', {
        className: 'cta-button',
        onClick: () => window.location.href = 'services.html'
      },
        'Explore Other Classes',
        React.createElement('span', null, '→')
      ),
      React.createElement('button', {
        className: 'secondary-button',
        onClick: () => window.location.href = 'index.html'
      },
        'Start Your Journey'
      )
    )
  );
}

// Bottom Navigation Component
function BottomNav({ currentScene, totalScenes, onPrevious, onNext, onHome }) {
  return React.createElement('div', { className: 'bottom-nav' },
    React.createElement('button', {
      className: 'nav-button',
      onClick: onPrevious,
      disabled: currentScene === 0
    }, '← Back'),
    React.createElement('button', {
      className: 'nav-home',
      onClick: onHome
    }, '🏠'),
    React.createElement('button', {
      className: 'nav-button',
      onClick: onNext,
      disabled: currentScene === totalScenes - 1
    }, 'Next →')
  );
}

// Initialize App
const root = createRoot(document.getElementById('mobile-demo-root'));
root.render(React.createElement(MobileDemoApp));
