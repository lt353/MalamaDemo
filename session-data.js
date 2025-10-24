// Session data for Michelle's journey through each course
const sessionData = {
    device: {
        title: "Your Device Basics",
        icon: "📱",
        painPoints: [
            "Michelle felt overwhelmed every time she picked up her tablet",
            "She accidentally deleted apps and didn't know how to get them back",
            "Simple tasks like adjusting brightness or volume confused her",
            "She was afraid to explore settings, worried she'd 'break something'"
        ],
        howWeHelp: [
            "We start with a calm, judgment-free environment where mistakes are learning opportunities",
            "Using her own device, we practice basic navigation together at her pace",
            "We create a simple reference guide with screenshots of her actual device",
            "Michelle learns by doing - touching, swiping, and tapping with guided support"
        ],
        gains: [
            "Michelle now confidently adjusts her device settings independently",
            "She can install and organize apps without fear",
            "She's created her own folder system to keep things organized",
            "Most importantly: she's no longer afraid to explore and try new things"
        ],
        whySheContinues: "After conquering her device basics, Michelle realized that technology doesn't have to be scary. She saw how these skills opened doors to staying connected with her grandchildren and decided to continue with the Email Essentials session to communicate with them more easily."
    },
    email: {
        title: "Email Essentials",
        icon: "✉️",
        painPoints: [
            "Michelle's inbox had over 3,000 unread emails and she didn't know where to start",
            "She missed important messages from her doctor buried in spam",
            "She accidentally replied-all to a family group email and felt embarrassed",
            "She was nervous about opening attachments, fearing viruses"
        ],
        howWeHelp: [
            "We help Michelle organize her inbox with folders and labels",
            "Together we set up filters to automatically sort incoming mail",
            "We practice composing, replying, and understanding when to 'reply all'",
            "Michelle learns to identify safe attachments and how to download them"
        ],
        gains: [
            "Michelle's inbox is now organized and manageable (down to inbox zero!)",
            "She confidently sends emails with photos attached to her family",
            "She never misses important medical appointments thanks to email alerts",
            "She's become the family's go-to person for sharing digital photos via email"
        ],
        whySheContinues: "With email mastered, Michelle became aware of suspicious messages in her inbox. She wanted to learn more about protecting herself online, which led her to enroll in the 'Protect Yourself' session to understand scams and online safety."
    },
    protect: {
        title: "Protect Yourself",
        icon: "🛡️",
        painPoints: [
            "Michelle nearly sent $500 to a scammer claiming to be from 'Microsoft Support'",
            "She clicked on a suspicious link that claimed her bank account was compromised",
            "She felt ashamed and didn't want to tell anyone about these close calls",
            "Every email made her paranoid - she couldn't tell what was legitimate"
        ],
        howWeHelp: [
            "We review real examples of scams (safely!) so Michelle can recognize red flags",
            "Together we practice checking sender addresses and hovering over links",
            "We set up a trusted contact system: when in doubt, Michelle calls someone",
            "We create a 'Stop and Check' routine for any urgent or money-related requests"
        ],
        gains: [
            "Michelle now confidently identifies and deletes phishing emails",
            "She's helped two friends recognize scams they almost fell for",
            "She knows exactly what to do when something feels 'off' - pause and verify",
            "She's regained confidence in using technology without constant fear"
        ],
        whySheContinues: "Feeling empowered and secure online, Michelle wanted to use technology to connect more deeply with her family. She enrolled in Communication Skills to learn how to video chat with her grandchildren and share moments in real-time."
    },
    communication: {
        title: "Communication Skills",
        icon: "💬",
        painPoints: [
            "Michelle hadn't seen her grandchildren's faces in months - only heard their voices on phone calls",
            "She received family photos via text but they disappeared and she didn't know where they went",
            "Video calls intimidated her - too many buttons and she worried about accidentally hanging up",
            "She wanted to share her garden photos but didn't know how"
        ],
        howWeHelp: [
            "We set up and practice video calling on her preferred platform (FaceTime, Zoom, or WhatsApp)",
            "Michelle learns to save, organize, and share photos with family members",
            "We practice messaging etiquette and using emojis to express emotions",
            "Together we troubleshoot common video call issues (audio, video, connection)"
        ],
        gains: [
            "Michelle now has weekly video calls with her grandchildren - she sees them grow up!",
            "She's created shared photo albums that the whole family contributes to",
            "She sends good morning texts with photos to her children every day",
            "She joined a virtual book club and connects with friends across the country"
        ],
        whySheContinues: "As Michelle created more accounts for different communication platforms, she realized she was struggling to remember all her passwords. She'd write them on sticky notes or use the same password everywhere. This prompted her to take the Password Management session to learn a better system."
    },
    passwords: {
        title: "Password Management",
        icon: "🔑",
        painPoints: [
            "Michelle used the same password ('Michelle1234') for everything",
            "She had sticky notes with passwords on her computer monitor",
            "She'd been locked out of accounts multiple times and had to reset passwords",
            "She didn't understand why 'strong passwords' mattered - nobody knew her info anyway"
        ],
        howWeHelp: [
            "We explain password security in simple terms Michelle can relate to (digital locks)",
            "Together we set up a password manager and practice using it safely",
            "We create strong, memorable passwords for her most important accounts",
            "Michelle learns about two-factor authentication and why it's her security friend"
        ],
        gains: [
            "Michelle now uses unique, strong passwords for every account",
            "She's thrown away all her sticky notes - her password manager remembers everything",
            "She's enabled two-factor authentication on her banking and email",
            "She feels secure knowing her personal information is properly protected"
        ],
        whySheContinues: "Having mastered the fundamentals, Michelle is excited to continue learning. She's considering the Cyber Safety Track to deepen her knowledge, the Health Technology Track to better manage her medical portals, or the Organizing Digital Life Track to finally get all her photos properly backed up and sorted. Michelle has transformed from someone who was afraid of technology to someone who embraces it as a tool for staying connected, informed, and independent."
    }
};

// Function to load session content
function loadSessionContent(sessionId) {
    const session = sessionData[sessionId];
    if (!session) {
        document.getElementById('session-content').innerHTML = '<p>Session not found.</p>';
        return;
    }

    const content = `
        <div class="session-header">
            <div class="session-icon-large">${session.icon}</div>
            <h2>${session.title}</h2>
        </div>

        <div class="journey-section pain-points">
            <div class="section-header">
                <span class="section-icon">😟</span>
                <h3>Michelle's Pain Points - Before</h3>
            </div>
            <ul class="journey-list">
                ${session.painPoints.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>

        <div class="journey-section how-we-help">
            <div class="section-header">
                <span class="section-icon">🤝</span>
                <h3>How We Help - During Our Sessions</h3>
            </div>
            <ul class="journey-list">
                ${session.howWeHelp.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>

        <div class="journey-section gains">
            <div class="section-header">
                <span class="section-icon">✨</span>
                <h3>Michelle's Gains - After</h3>
            </div>
            <ul class="journey-list">
                ${session.gains.map(point => `<li>${point}</li>`).join('')}
            </ul>
        </div>

        <div class="journey-section why-continues">
            <div class="section-header">
                <span class="section-icon">🚀</span>
                <h3>Why Michelle Decided to Continue</h3>
            </div>
            <p class="continue-text">${session.whyContinues}</p>
        </div>

        <div class="navigation-buttons">
            <button class="btn-primary" onclick="window.location.href='services.html'">Back to All Services</button>
        </div>
    `;

    document.getElementById('session-content').innerHTML = content;
}
