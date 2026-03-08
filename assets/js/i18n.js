/* ── i18n — English / Hindi translations ── */
(function () {
    'use strict';

    const translations = {
        en: {
            /* ── Nav ── */
            "nav.about": "About",
            "nav.experience": "Experience",
            "nav.projects": "Projects",
            "nav.skills": "Skills",
            "nav.contact": "Contact",

            /* ── Hero ── */
            "hero.title": "<strong>Engineer &amp; builder.</strong> Ships iOS apps by day,<br>tinkers with AI and product ideas by night.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "AI-augmented builder",
            "hero.cta": "Get in touch",

            /* ── About ── */
            "about.label": "About",
            "about.heading": "Craft, curiosity,<br>and code",
            "about.p1": "Vishal is a <strong>Principal iOS Engineer</strong> who loves building things from scratch. He has shipped production apps across <strong>fintech, health-tech, social media, and e-commerce</strong> -- each time designing architecture that scales and stays maintainable.",
            "about.p2": "He's drawn to the \"zero to one\" phase of products: laying out module boundaries, automating tedious workflows with Swift scripts, and mentoring teams to move with confidence. <strong>Clean code and reusable components</strong> are non-negotiable.",
            "about.p3": "Currently exploring the intersection of <strong>AI and mobile</strong> -- learning to orchestrate LLMs, agents, and AI tools to multiply productivity. The long-term goal is to <strong>ship products faster</strong> by blending engineering craft with AI-augmented workflows, always learning from others along the way.",
            "about.stat.apps": "Apps shipped",
            "about.stat.domains": "Domains",
            "about.stat.scratch": "Built from scratch",
            "about.stat.curiosity": "Curiosity",

            /* ── Career ── */
            "career.label": "Career",
            "career.heading": "The journey so far",
            "career.current": "current",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Part of the founding engineering team, building the app from scratch.</li><li>Works cross-functionally with product, design, growth, and engineering on core features: onboarding, feed, creation, notifications, and image processing.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Built the iOS companion app from scratch for a robotic medical device measuring cerebral blood flow.</li><li>Architected for scale: reusable UI components, testability-first design, Xcode Cloud CI/CD pipeline.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>One of the senior engineers in a 13-16 person iOS team for a top-rated fintech app (4.3 stars).</li><li>Revamped the home screen and Mutual Funds module. Mentored engineers and led code reviews.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Led architecture for a white-label SaaS platform (Gwynnie Bee, Haverdash) powering garment rental in the US.</li><li>Designed a dynamic theming system automated via spreadsheets and in-house Swift scripting.</li><li>Set up the unit testing framework and CI/CD pipeline. Mentored the team and transitioned architecture knowledge.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Shipped multiple apps concurrently across enterprise and creative domains (Apache Industrial, Duet App, PropCube).</li><li>Grew from fresher to leading a 2-person iOS team and mentoring 4 new hires.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Work",
            "projects.heading": "Apps shipped",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Fashion / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Side Project",
            "projects.turnip.desc": "Social app built from scratch -- onboarding, feed, content creation, notifications, and image processing. Cross-functional collaboration from day one.",
            "projects.novasignal.desc": "iOS companion for a robotic medical device. Enables hospitals to access AI-processed cerebral blood flow data for stroke prevention.",
            "projects.paytm.desc": "One of India's top-rated investment apps. Stocks, mutual funds, IPOs, F&O. Revamped the home screen and mutual fund module serving millions of users.",
            "projects.caastle.desc": "White-label garment rental platform for the US market. Architected the modular, themeable SaaS framework powering multiple brand apps.",
            "projects.enterprise.desc": "Enterprise workforce management and monitoring app for Apache Industrial Services, used across operations in the US.",
            "projects.xo3.desc": "A tic-tac-toe game exploring SwiftUI, Combine, and MultipeerConnectivity. Built with iOS 26+ and Swift 6.",
            "projects.appstore": "View on App Store",
            "projects.github": "View on GitHub",

            /* ── Skills ── */
            "skills.label": "Toolkit",
            "skills.heading": "Technologies & skills",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architecture",
            "skills.ai": "AI & Exploration",
            "skills.tooling": "Tooling & Process",
            "skills.leadership": "Leadership",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "On GitHub",
            "oss.timbaktoe": "A tic-tac-toe game to learn SwiftUI, Combine, and MultipeerConnectivity basics.",
            "oss.school": "Starter app to understand SwiftUI and Combine patterns.",
            "oss.openpr": "CLI tool for creating pull requests, built with Swift Package Manager.",
            "oss.math": "Math utilities library. 4 forks on GitHub.",
            "oss.geo": "Lightweight wrapper over iOS CoreLocation framework.",
            "oss.setup": "A checklist for configuring fresh development machines.",

            /* ── Education ── */
            "edu.label": "Education",
            "edu.heading": "Background",
            "edu.degree": "B.Tech, Computer Science & Engineering",

            /* ── Off the clock ── */
            "offclock.label": "Off the clock",
            "offclock.heading": "The non-engineering bits",
            "offclock.sports.title": "Football, trails & miles",
            "offclock.sports.desc": "Football on weekends, hiking when the mountains call, running when they don't. Treats the body like production code -- no shortcuts, no tech debt.<span class=\"aside\">// Leg day has no rollback strategy</span>",
            "offclock.fuel.title": "Clean fuel only",
            "offclock.fuel.desc": "Eats clean -- not \"mostly\", actually clean. No alcohol, no smoking, no cheat meals. Thinks of the body as a long-running process: garbage in, garbage out.<span class=\"aside\">// Strongly recommends others adopt this lifestyle too</span>",
            "offclock.geo.title": "Maps, money & power",
            "offclock.geo.desc": "Fascinated by geopolitical shifts, history, geography, and economic trends. Loves connecting the dots between why borders moved and where markets are headed.<span class=\"aside\">// Will derail any dinner conversation into a macro thesis</span>",
            "offclock.travel.title": "Passport stamps",
            "offclock.travel.desc": "Has collected sunburns across Southeast Asia and beyond. Believes the best debugging happens 35,000 feet in the air.",
            "offclock.photo.title": "Photography",
            "offclock.photo.desc": "Enjoys capturing moments, mostly when traveling. The phone storage is 80% photos, 15% Xcode cache, 5% actual free space.",
            "offclock.ideas.title": "Ideas & building",
            "offclock.ideas.desc": "Constantly daydreaming about products to build. Has a notes app full of \"million dollar ideas\" -- shipping one would be nice.<span class=\"aside\">// TODO: actually ship one of these</span>",

            /* ── Contact ── */
            "contact.label": "Connect",
            "contact.heading": "Let's build something",
            "contact.sub": "Open to conversations about iOS, AI, product ideas, or building things together.",
            "contact.alllinks": "All Links",

            /* ── Footer ── */
            "footer.text": "Designed & built by Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Professional",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Scan &middot; Share"
        },

        hi: {
            /* ── Nav ── */
            "nav.about": "\u092A\u0930\u093F\u091A\u092F",
            "nav.experience": "\u0905\u0928\u0941\u092D\u0935",
            "nav.projects": "\u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F\u094D\u0938",
            "nav.skills": "\u0915\u094C\u0936\u0932",
            "nav.contact": "\u0938\u0902\u092A\u0930\u094D\u0915",

            /* ── Hero ── */
            "hero.title": "<strong>\u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930 \u0914\u0930 \u092C\u093F\u0932\u094D\u0921\u0930\u0964</strong> \u0926\u093F\u0928 \u092E\u0947\u0902 iOS \u0910\u092A\u094D\u0938 \u092C\u0928\u093E\u0924\u093E \u0939\u0942\u0901,<br>\u0930\u093E\u0924 \u092E\u0947\u0902 AI \u0914\u0930 \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F \u0906\u0907\u0921\u093F\u092F\u093E\u091C\u093C \u092A\u0930 \u0915\u093E\u092E \u0915\u0930\u0924\u093E \u0939\u0942\u0901\u0964",
            "hero.location": "\u092C\u0947\u0902\u0917\u0932\u0941\u0930\u0941, \u092D\u093E\u0930\u0924",
            "hero.builder": "AI-\u0938\u0902\u0935\u0930\u094D\u0927\u093F\u0924 \u092C\u093F\u0932\u094D\u0921\u0930",
            "hero.cta": "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902",

            /* ── About ── */
            "about.label": "\u092A\u0930\u093F\u091A\u092F",
            "about.heading": "\u0936\u093F\u0932\u094D\u092A, \u091C\u093F\u091C\u094D\u091E\u093E\u0938\u093E<br>\u0914\u0930 \u0915\u094B\u0921",
            "about.p1": "\u0935\u093F\u0936\u093E\u0932 \u090F\u0915 <strong>Principal iOS \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930</strong> \u0939\u0948\u0902 \u091C\u093F\u0928\u094D\u0939\u0947\u0902 \u0936\u0941\u0930\u0942 \u0938\u0947 \u091A\u0940\u091C\u093C\u0947\u0902 \u092C\u0928\u093E\u0928\u093E \u092A\u0938\u0902\u0926 \u0939\u0948\u0964 \u0909\u0928\u094D\u0939\u094B\u0902\u0928\u0947 <strong>\u092B\u093F\u0928\u091F\u0947\u0915, \u0939\u0947\u0932\u094D\u0925-\u091F\u0947\u0915, \u0938\u094B\u0936\u0932 \u092E\u0940\u0921\u093F\u092F\u093E \u0914\u0930 \u0908-\u0915\u0949\u092E\u0930\u094D\u0938</strong> \u092E\u0947\u0902 \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u0936\u0928 \u0910\u092A\u094D\u0938 \u0936\u093F\u092A \u0915\u093F\u090F \u0939\u0948\u0902 -- \u0939\u0930 \u092C\u093E\u0930 \u0938\u094D\u0915\u0947\u0932\u0947\u092C\u0932 \u0914\u0930 \u092E\u0947\u0902\u091F\u0947\u0928\u0947\u092C\u0932 \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091A\u0930 \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0915\u0930\u0924\u0947 \u0939\u0941\u090F\u0964",
            "about.p2": "\u0935\u0947 \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F\u094D\u0938 \u0915\u0947 \"\u091C\u093C\u0940\u0930\u094B \u091F\u0942 \u0935\u0928\" \u092B\u0947\u091C\u093C \u0915\u0940 \u0924\u0930\u092B \u0906\u0915\u0930\u094D\u0937\u093F\u0924 \u0939\u094B\u0924\u0947 \u0939\u0948\u0902: \u092E\u0949\u0921\u094D\u092F\u0942\u0932 \u092C\u093E\u0909\u0902\u0921\u094D\u0930\u0940\u091C\u093C \u0924\u092F \u0915\u0930\u0928\u093E, Swift \u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F\u094D\u0938 \u0938\u0947 \u0935\u0930\u094D\u0915\u092B\u093C\u094D\u0932\u094B \u0911\u091F\u094B\u092E\u0947\u091F \u0915\u0930\u0928\u093E, \u0914\u0930 \u091F\u0940\u092E \u0915\u094B \u0906\u0924\u094D\u092E\u0935\u093F\u0936\u094D\u0935\u093E\u0938 \u0938\u0947 \u0915\u093E\u092E \u0915\u0930\u0928\u0947 \u0915\u0940 \u092E\u0947\u0902\u091F\u0930\u093F\u0902\u0917\u0964 <strong>\u0915\u094D\u0932\u0940\u0928 \u0915\u094B\u0921 \u0914\u0930 \u0930\u0940\u092F\u0942\u091C\u093C\u0947\u092C\u0932 \u0915\u0902\u092A\u094B\u0928\u0947\u0902\u091F\u094D\u0938</strong> \u092A\u0930 \u0915\u094B\u0908 \u0938\u092E\u091D\u094C\u0924\u093E \u0928\u0939\u0940\u0902\u0964",
            "about.p3": "\u0907\u0938 \u0938\u092E\u092F <strong>AI \u0914\u0930 \u092E\u094B\u092C\u093E\u0907\u0932</strong> \u0915\u0947 \u0907\u0902\u091F\u0930\u0938\u0947\u0915\u094D\u0936\u0928 \u0915\u094B \u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930 \u0915\u0930 \u0930\u0939\u0947 \u0939\u0948\u0902 -- LLMs, \u090F\u091C\u0947\u0902\u091F\u094D\u0938, \u0914\u0930 AI \u091F\u0942\u0932\u094D\u0938 \u0915\u094B \u0911\u0930\u094D\u0915\u0947\u0938\u094D\u091F\u094D\u0930\u0947\u091F \u0915\u0930\u0928\u093E \u0938\u0940\u0916 \u0930\u0939\u0947 \u0939\u0948\u0902\u0964 \u0932\u0902\u092C\u0947 \u0938\u092E\u092F \u0915\u093E \u0932\u0915\u094D\u0937\u094D\u092F \u0939\u0948 AI-\u0938\u0902\u0935\u0930\u094D\u0927\u093F\u0924 \u0935\u0930\u094D\u0915\u092B\u093C\u094D\u0932\u094B \u0915\u0947 \u0938\u093E\u0925 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917 \u0915\u094D\u0930\u093E\u092B\u093C\u094D\u091F \u0915\u094B \u092E\u093F\u0932\u093E\u0915\u0930 <strong>\u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F\u094D\u0938 \u0924\u0947\u091C\u093C\u0940 \u0938\u0947 \u0936\u093F\u092A \u0915\u0930\u0928\u093E</strong>, \u0914\u0930 \u0926\u0942\u0938\u0930\u094B\u0902 \u0938\u0947 \u0939\u092E\u0947\u0936\u093E \u0938\u0940\u0916\u0924\u0947 \u0930\u0939\u0928\u093E\u0964",
            "about.stat.apps": "\u0910\u092A\u094D\u0938 \u0936\u093F\u092A \u0915\u093F\u090F",
            "about.stat.domains": "\u0921\u094B\u092E\u0947\u0928",
            "about.stat.scratch": "\u0936\u0941\u0930\u0942 \u0938\u0947 \u092C\u0928\u093E\u090F",
            "about.stat.curiosity": "\u091C\u093F\u091C\u094D\u091E\u093E\u0938\u093E",

            /* ── Career ── */
            "career.label": "\u0915\u0930\u093F\u092F\u0930",
            "career.heading": "\u0905\u092C \u0924\u0915 \u0915\u093E \u0938\u092B\u093C\u0930",
            "career.current": "\u0935\u0930\u094D\u0924\u092E\u093E\u0928",

            "career.turnip.desc": "<ul><li>\u092B\u093E\u0909\u0902\u0921\u093F\u0902\u0917 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917 \u091F\u0940\u092E \u0915\u093E \u0939\u093F\u0938\u094D\u0938\u093E, \u0910\u092A \u0915\u094B \u0936\u0941\u0930\u0942 \u0938\u0947 \u092C\u0928\u093E\u092F\u093E\u0964</li><li>\u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F, \u0921\u093F\u091C\u093C\u093E\u0907\u0928, \u0917\u094D\u0930\u094B\u0925 \u0914\u0930 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917 \u0915\u0947 \u0938\u093E\u0925 \u0915\u094D\u0930\u0949\u0938-\u092B\u0902\u0915\u094D\u0936\u0928\u0932 \u0915\u093E\u092E: \u0911\u0928\u092C\u094B\u0930\u094D\u0921\u093F\u0902\u0917, \u092B\u0940\u0921, \u0915\u094D\u0930\u093F\u090F\u0936\u0928, \u0928\u094B\u091F\u093F\u092B\u093F\u0915\u0947\u0936\u0928 \u0914\u0930 \u0907\u092E\u0947\u091C \u092A\u094D\u0930\u094B\u0938\u0947\u0938\u093F\u0902\u0917\u0964</li></ul>",
            "career.novasignal.desc": "<ul><li>\u0930\u094B\u092C\u094B\u091F\u093F\u0915 \u092E\u0947\u0921\u093F\u0915\u0932 \u0921\u093F\u0935\u093E\u0907\u0938 \u0915\u0947 \u0932\u093F\u090F iOS \u0915\u0902\u092A\u0947\u0928\u093F\u092F\u0928 \u0910\u092A \u0936\u0941\u0930\u0942 \u0938\u0947 \u092C\u0928\u093E\u092F\u093E \u091C\u094B \u0938\u0947\u0930\u0947\u092C\u094D\u0930\u0932 \u092C\u094D\u0932\u0921 \u092B\u093C\u094D\u0932\u094B \u092E\u093E\u092A\u0924\u093E \u0939\u0948\u0964</li><li>\u0938\u094D\u0915\u0947\u0932 \u0915\u0947 \u0932\u093F\u090F \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091F \u0915\u093F\u092F\u093E: \u0930\u0940\u092F\u0942\u091C\u093C\u0947\u092C\u0932 UI \u0915\u0902\u092A\u094B\u0928\u0947\u0902\u091F\u094D\u0938, \u091F\u0947\u0938\u094D\u091F\u0947\u092C\u093F\u0932\u093F\u091F\u0940-\u092B\u0930\u094D\u0938\u094D\u091F \u0921\u093F\u091C\u093C\u093E\u0907\u0928, Xcode Cloud CI/CD \u092A\u093E\u0907\u092A\u0932\u093E\u0907\u0928\u0964</li></ul>",
            "career.paytm.desc": "<ul><li>13-16 \u0932\u094B\u0917\u094B\u0902 \u0915\u0940 iOS \u091F\u0940\u092E \u092E\u0947\u0902 \u0938\u0940\u0928\u093F\u092F\u0930 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930 \u2014 \u091F\u0949\u092A-\u0930\u0947\u091F\u0947\u0921 \u092B\u093F\u0928\u091F\u0947\u0915 \u0910\u092A (4.3 \u0938\u094D\u091F\u093E\u0930\u094D\u0938)\u0964</li><li>\u0939\u094B\u092E \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0914\u0930 \u092E\u094D\u092F\u0942\u091A\u0941\u0905\u0932 \u092B\u0902\u0921\u094D\u0938 \u092E\u0949\u0921\u094D\u092F\u0942\u0932 \u0915\u094B \u0930\u093F\u0935\u0948\u092E\u094D\u092A \u0915\u093F\u092F\u093E\u0964 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u094D\u0938 \u0915\u094B \u092E\u0947\u0902\u091F\u0930 \u0915\u093F\u092F\u093E \u0914\u0930 \u0915\u094B\u0921 \u0930\u093F\u0935\u094D\u092F\u0942 \u0915\u093E \u0928\u0947\u0924\u0943\u0924\u094D\u0935 \u0915\u093F\u092F\u093E\u0964</li></ul>",
            "career.caastle.desc": "<ul><li>US \u092E\u0947\u0902 \u0917\u093E\u0930\u092E\u0947\u0902\u091F \u0930\u0947\u0902\u091F\u0932 \u0915\u0947 \u0932\u093F\u090F \u0935\u094D\u0939\u093E\u0907\u091F-\u0932\u0947\u092C\u0932 SaaS \u092A\u094D\u0932\u0947\u091F\u092B\u093C\u0949\u0930\u094D\u092E (Gwynnie Bee, Haverdash) \u0915\u0940 \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091A\u0930 \u0932\u0940\u0921 \u0915\u0940\u0964</li><li>\u0938\u094D\u092A\u094D\u0930\u0947\u0921\u0936\u0940\u091F\u094D\u0938 \u0914\u0930 \u0907\u0928-\u0939\u093E\u0909\u0938 Swift \u0938\u094D\u0915\u094D\u0930\u093F\u092A\u094D\u091F\u093F\u0902\u0917 \u0938\u0947 \u0911\u091F\u094B\u092E\u0947\u091F\u0947\u0921 \u0921\u093E\u092F\u0928\u093E\u092E\u093F\u0915 \u0925\u0940\u092E\u093F\u0902\u0917 \u0938\u093F\u0938\u094D\u091F\u092E \u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0915\u093F\u092F\u093E\u0964</li><li>\u092F\u0942\u0928\u093F\u091F \u091F\u0947\u0938\u094D\u091F\u093F\u0902\u0917 \u092B\u094D\u0930\u0947\u092E\u0935\u0930\u094D\u0915 \u0914\u0930 CI/CD \u092A\u093E\u0907\u092A\u0932\u093E\u0907\u0928 \u0938\u0947\u091F\u0905\u092A \u0915\u093F\u092F\u093E\u0964 \u091F\u0940\u092E \u0915\u094B \u092E\u0947\u0902\u091F\u0930 \u0915\u093F\u092F\u093E \u0914\u0930 \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091A\u0930 \u0928\u0949\u0932\u0947\u091C \u091F\u094D\u0930\u093E\u0902\u0938\u092B\u093C\u0930 \u0915\u093F\u092F\u093E\u0964</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u090F\u0902\u091F\u0930\u092A\u094D\u0930\u093E\u0907\u091C\u093C \u0914\u0930 \u0915\u094D\u0930\u093F\u090F\u091F\u093F\u0935 \u0921\u094B\u092E\u0947\u0928 \u092E\u0947\u0902 \u090F\u0915 \u0938\u093E\u0925 \u0915\u0908 \u0910\u092A\u094D\u0938 \u0936\u093F\u092A \u0915\u093F\u090F (Apache Industrial, Duet App, PropCube)\u0964</li><li>\u092B\u094D\u0930\u0947\u0936\u0930 \u0938\u0947 \u092C\u0922\u093C\u0915\u0930 2 \u0932\u094B\u0917\u094B\u0902 \u0915\u0940 iOS \u091F\u0940\u092E \u0932\u0940\u0921 \u0915\u0940 \u0914\u0930 4 \u0928\u090F \u0939\u093E\u092F\u0930\u094D\u0938 \u0915\u094B \u092E\u0947\u0902\u091F\u0930 \u0915\u093F\u092F\u093E\u0964</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u0915\u093E\u092E",
            "projects.heading": "\u0936\u093F\u092A \u0915\u093F\u090F \u0917\u090F \u0910\u092A\u094D\u0938",
            "projects.domain.social": "\u0938\u094B\u0936\u0932",
            "projects.domain.health": "\u0939\u0947\u0932\u094D\u0925-\u091F\u0947\u0915",
            "projects.domain.fintech": "\u092B\u093F\u0928\u091F\u0947\u0915",
            "projects.domain.fashion": "\u092B\u093C\u0948\u0936\u0928 / SaaS",
            "projects.domain.enterprise": "\u090F\u0902\u091F\u0930\u092A\u094D\u0930\u093E\u0907\u091C\u093C",
            "projects.domain.side": "\u0938\u093E\u0907\u0921 \u092A\u094D\u0930\u094B\u091C\u0947\u0915\u094D\u091F",
            "projects.turnip.desc": "\u0936\u0941\u0930\u0942 \u0938\u0947 \u092C\u0928\u093E\u092F\u093E \u0917\u092F\u093E \u0938\u094B\u0936\u0932 \u0910\u092A -- \u0911\u0928\u092C\u094B\u0930\u094D\u0921\u093F\u0902\u0917, \u092B\u0940\u0921, \u0915\u0902\u091F\u0947\u0902\u091F \u0915\u094D\u0930\u093F\u090F\u0936\u0928, \u0928\u094B\u091F\u093F\u092B\u093F\u0915\u0947\u0936\u0928 \u0914\u0930 \u0907\u092E\u0947\u091C \u092A\u094D\u0930\u094B\u0938\u0947\u0938\u093F\u0902\u0917\u0964 \u092A\u0939\u0932\u0947 \u0926\u093F\u0928 \u0938\u0947 \u0915\u094D\u0930\u0949\u0938-\u092B\u0902\u0915\u094D\u0936\u0928\u0932 \u0915\u0949\u0932\u0947\u092C\u094B\u0930\u0947\u0936\u0928\u0964",
            "projects.novasignal.desc": "\u0930\u094B\u092C\u094B\u091F\u093F\u0915 \u092E\u0947\u0921\u093F\u0915\u0932 \u0921\u093F\u0935\u093E\u0907\u0938 \u0915\u0947 \u0932\u093F\u090F iOS \u0915\u0902\u092A\u0947\u0928\u093F\u092F\u0928\u0964 \u0905\u0938\u094D\u092A\u0924\u093E\u0932\u094B\u0902 \u0915\u094B AI-\u092A\u094D\u0930\u094B\u0938\u0947\u0938\u094D\u0921 \u0938\u0947\u0930\u0947\u092C\u094D\u0930\u0932 \u092C\u094D\u0932\u0921 \u092B\u093C\u094D\u0932\u094B \u0921\u0947\u091F\u093E \u0926\u0947\u0924\u093E \u0939\u0948 \u0938\u094D\u091F\u094D\u0930\u094B\u0915 \u092A\u094D\u0930\u093F\u0935\u0947\u0902\u0936\u0928 \u0915\u0947 \u0932\u093F\u090F\u0964",
            "projects.paytm.desc": "\u092D\u093E\u0930\u0924 \u0915\u0947 \u091F\u0949\u092A-\u0930\u0947\u091F\u0947\u0921 \u0928\u093F\u0935\u0947\u0936 \u0910\u092A\u094D\u0938 \u092E\u0947\u0902 \u0938\u0947 \u090F\u0915\u0964 \u0938\u094D\u091F\u0949\u0915\u094D\u0938, \u092E\u094D\u092F\u0942\u091A\u0941\u0905\u0932 \u092B\u0902\u0921\u094D\u0938, IPO, F&O\u0964 \u0932\u093E\u0916\u094B\u0902 \u092F\u0942\u091C\u093C\u0930\u094D\u0938 \u0915\u0947 \u0932\u093F\u090F \u0939\u094B\u092E \u0938\u094D\u0915\u094D\u0930\u0940\u0928 \u0914\u0930 \u092E\u094D\u092F\u0942\u091A\u0941\u0905\u0932 \u092B\u0902\u0921 \u092E\u0949\u0921\u094D\u092F\u0942\u0932 \u0915\u094B \u0930\u093F\u0935\u0948\u092E\u094D\u092A \u0915\u093F\u092F\u093E\u0964",
            "projects.caastle.desc": "US \u092E\u093E\u0930\u094D\u0915\u0947\u091F \u0915\u0947 \u0932\u093F\u090F \u0935\u094D\u0939\u093E\u0907\u091F-\u0932\u0947\u092C\u0932 \u0917\u093E\u0930\u092E\u0947\u0902\u091F \u0930\u0947\u0902\u091F\u0932 \u092A\u094D\u0932\u0947\u091F\u092B\u093C\u0949\u0930\u094D\u092E\u0964 \u092E\u0949\u0921\u094D\u092F\u0942\u0932\u0930, \u0925\u0940\u092E\u0947\u092C\u0932 SaaS \u092B\u094D\u0930\u0947\u092E\u0935\u0930\u094D\u0915 \u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091F \u0915\u093F\u092F\u093E \u091C\u094B \u0915\u0908 \u092C\u094D\u0930\u093E\u0902\u0921 \u0910\u092A\u094D\u0938 \u0915\u094B \u092A\u093E\u0935\u0930 \u0915\u0930\u0924\u093E \u0939\u0948\u0964",
            "projects.enterprise.desc": "Apache Industrial Services \u0915\u0947 \u0932\u093F\u090F \u090F\u0902\u091F\u0930\u092A\u094D\u0930\u093E\u0907\u091C\u093C \u0935\u0930\u094D\u0915\u092B\u093C\u094B\u0930\u094D\u0938 \u092E\u0948\u0928\u0947\u091C\u092E\u0947\u0902\u091F \u0914\u0930 \u092E\u0949\u0928\u093F\u091F\u0930\u093F\u0902\u0917 \u0910\u092A, US \u092E\u0947\u0902 \u0911\u092A\u0930\u0947\u0936\u0928\u094D\u0938 \u092E\u0947\u0902 \u0909\u092A\u092F\u094B\u0917\u0964",
            "projects.xo3.desc": "SwiftUI, Combine \u0914\u0930 MultipeerConnectivity \u090F\u0915\u094D\u0938\u092A\u094D\u0932\u094B\u0930 \u0915\u0930\u0928\u0947 \u0935\u093E\u0932\u093E \u091F\u093F\u0915-\u091F\u0948\u0915-\u091F\u094B \u0917\u0947\u092E\u0964 iOS 26+ \u0914\u0930 Swift 6 \u0938\u0947 \u092C\u0928\u093E\u092F\u093E\u0964",
            "projects.appstore": "App Store \u092A\u0930 \u0926\u0947\u0916\u0947\u0902",
            "projects.github": "GitHub \u092A\u0930 \u0926\u0947\u0916\u0947\u0902",

            /* ── Skills ── */
            "skills.label": "\u091F\u0942\u0932\u0915\u093F\u091F",
            "skills.heading": "\u0924\u0915\u0928\u0940\u0915 \u0914\u0930 \u0915\u094C\u0936\u0932",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u0906\u0930\u094D\u0915\u093F\u091F\u0947\u0915\u094D\u091A\u0930",
            "skills.ai": "AI \u0914\u0930 \u0905\u0928\u094D\u0935\u0947\u0937\u0923",
            "skills.tooling": "\u091F\u0942\u0932\u093F\u0902\u0917 \u0914\u0930 \u092A\u094D\u0930\u0915\u094D\u0930\u093F\u092F\u093E",
            "skills.leadership": "\u0928\u0947\u0924\u0943\u0924\u094D\u0935",

            /* ── Open Source ── */
            "oss.label": "\u0913\u092A\u0928 \u0938\u094B\u0930\u094D\u0938",
            "oss.heading": "GitHub \u092A\u0930",
            "oss.timbaktoe": "SwiftUI, Combine \u0914\u0930 MultipeerConnectivity \u0938\u0940\u0916\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u090F\u0915 \u091F\u093F\u0915-\u091F\u0948\u0915-\u091F\u094B \u0917\u0947\u092E\u0964",
            "oss.school": "SwiftUI \u0914\u0930 Combine \u092A\u0948\u091F\u0930\u094D\u0928\u094D\u0938 \u0938\u092E\u091D\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0938\u094D\u091F\u093E\u0930\u094D\u091F\u0930 \u0910\u092A\u0964",
            "oss.openpr": "Swift Package Manager \u0938\u0947 \u092C\u0928\u093E \u092A\u0941\u0932 \u0930\u093F\u0915\u094D\u0935\u0947\u0938\u094D\u091F \u092C\u0928\u093E\u0928\u0947 \u0915\u093E CLI \u091F\u0942\u0932\u0964",
            "oss.math": "\u092E\u0948\u0925 \u092F\u0942\u091F\u093F\u0932\u093F\u091F\u0940\u091C\u093C \u0932\u093E\u0907\u092C\u094D\u0930\u0947\u0930\u0940\u0964 GitHub \u092A\u0930 4 \u092B\u093C\u0949\u0930\u094D\u0915\u094D\u0938\u0964",
            "oss.geo": "iOS CoreLocation \u092B\u094D\u0930\u0947\u092E\u0935\u0930\u094D\u0915 \u092A\u0930 \u0939\u0932\u094D\u0915\u093E \u0930\u0948\u092A\u0930\u0964",
            "oss.setup": "\u0928\u0908 \u0921\u0947\u0935\u0932\u092A\u092E\u0947\u0902\u091F \u092E\u0936\u0940\u0928\u094B\u0902 \u0915\u094B \u0915\u0949\u0928\u094D\u092B\u093F\u0917\u0930 \u0915\u0930\u0928\u0947 \u0915\u0940 \u091A\u0947\u0915\u0932\u093F\u0938\u094D\u091F\u0964",

            /* ── Education ── */
            "edu.label": "\u0936\u093F\u0915\u094D\u0937\u093E",
            "edu.heading": "\u092A\u0943\u0937\u094D\u0920\u092D\u0942\u092E\u093F",
            "edu.degree": "\u092C\u0940.\u091F\u0947\u0915, \u0915\u0902\u092A\u094D\u092F\u0942\u091F\u0930 \u0938\u093E\u0907\u0902\u0938 \u0914\u0930 \u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917",

            /* ── Off the clock ── */
            "offclock.label": "\u0915\u093E\u092E \u0915\u0947 \u092C\u093E\u0926",
            "offclock.heading": "\u0907\u0902\u091C\u0940\u0928\u093F\u092F\u0930\u093F\u0902\u0917 \u0938\u0947 \u092A\u0930\u0947",
            "offclock.sports.title": "\u092B\u0941\u091F\u092C\u0949\u0932, \u091F\u094D\u0930\u0947\u0932\u094D\u0938 \u0914\u0930 \u0926\u094C\u0921\u093C",
            "offclock.sports.desc": "\u0935\u0940\u0915\u0947\u0902\u0921 \u092A\u0930 \u092B\u0941\u091F\u092C\u0949\u0932, \u092A\u0939\u093E\u0921\u093C \u092C\u0941\u0932\u093E\u090F\u0902 \u0924\u094B \u0939\u093E\u0907\u0915\u093F\u0902\u0917, \u0928\u0939\u0940\u0902 \u0924\u094B \u0926\u094C\u0921\u093C\u0964 \u0936\u0930\u0940\u0930 \u0915\u094B \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u0936\u0928 \u0915\u094B\u0921 \u0915\u0940 \u0924\u0930\u0939 \u091F\u094D\u0930\u0940\u091F \u0915\u0930\u0924\u0947 \u0939\u0948\u0902 -- \u0928 \u0936\u0949\u0930\u094D\u091F\u0915\u091F, \u0928 \u091F\u0947\u0915 \u0921\u0947\u092C\u094D\u091F\u0964<span class=\"aside\">// \u0932\u0947\u0917 \u0921\u0947 \u0915\u093E \u0915\u094B\u0908 \u0930\u094B\u0932\u092C\u0948\u0915 \u0928\u0939\u0940\u0902 \u0939\u094B\u0924\u093E</span>",
            "offclock.fuel.title": "\u0938\u093F\u0930\u094D\u092B \u0915\u094D\u0932\u0940\u0928 \u092B\u094D\u092F\u0942\u0932",
            "offclock.fuel.desc": "\u0938\u091A \u092E\u0947\u0902 \u0915\u094D\u0932\u0940\u0928 \u0916\u093E\u0924\u0947 \u0939\u0948\u0902 -- \"\u0932\u0917\u092D\u0917\" \u0928\u0939\u0940\u0902, \u0938\u091A \u092E\u0947\u0902\u0964 \u0928 \u0936\u0930\u093E\u092C, \u0928 \u0938\u093F\u0917\u0930\u0947\u091F, \u0928 \u091A\u0940\u091F \u092E\u0940\u0932\u094D\u0938\u0964 \u0936\u0930\u0940\u0930 \u0915\u094B \u0932\u0949\u0928\u094D\u0917-\u0930\u0928\u093F\u0902\u0917 \u092A\u094D\u0930\u094B\u0938\u0947\u0938 \u092E\u093E\u0928\u0924\u0947 \u0939\u0948\u0902: \u0917\u093E\u0930\u094D\u092C\u0947\u091C \u0907\u0928, \u0917\u093E\u0930\u094D\u092C\u0947\u091C \u0906\u0909\u091F\u0964<span class=\"aside\">// \u0926\u0942\u0938\u0930\u094B\u0902 \u0915\u094B \u092D\u0940 \u092F\u0939 \u0932\u093E\u0907\u092B\u0938\u094D\u091F\u093E\u0907\u0932 \u0905\u092A\u0928\u093E\u0928\u0947 \u0915\u0940 \u0938\u0932\u093E\u0939 \u0926\u0947\u0924\u0947 \u0939\u0948\u0902</span>",
            "offclock.geo.title": "\u092E\u0948\u092A\u094D\u0938, \u092A\u0948\u0938\u093E \u0914\u0930 \u0938\u0924\u094D\u0924\u093E",
            "offclock.geo.desc": "\u092D\u0942-\u0930\u093E\u091C\u0928\u0940\u0924\u093F\u0915 \u092C\u0926\u0932\u093E\u0935, \u0907\u0924\u093F\u0939\u093E\u0938, \u092D\u0942\u0917\u094B\u0932 \u0914\u0930 \u0906\u0930\u094D\u0925\u093F\u0915 \u0930\u0941\u091D\u093E\u0928\u094B\u0902 \u0938\u0947 \u092E\u094B\u0939\u093F\u0924\u0964 \u0938\u0940\u092E\u093E\u0913\u0902 \u0915\u0947 \u092C\u0926\u0932\u0928\u0947 \u0914\u0930 \u092C\u093E\u091C\u093C\u093E\u0930\u094B\u0902 \u0915\u0940 \u0926\u093F\u0936\u093E \u0915\u0947 \u092C\u0940\u091A \u0915\u0921\u093C\u093F\u092F\u093E\u0901 \u091C\u094B\u0921\u093C\u0928\u093E \u092A\u0938\u0902\u0926 \u0939\u0948\u0964<span class=\"aside\">// \u0915\u093F\u0938\u0940 \u092D\u0940 \u0921\u093F\u0928\u0930 \u092C\u093E\u0924\u091A\u0940\u0924 \u0915\u094B \u092E\u0948\u0915\u094D\u0930\u094B \u0925\u0940\u0938\u093F\u0938 \u092E\u0947\u0902 \u092C\u0926\u0932 \u0926\u0947\u0902\u0917\u0947</span>",
            "offclock.travel.title": "\u092A\u093E\u0938\u092A\u094B\u0930\u094D\u091F \u0938\u094D\u091F\u0948\u092E\u094D\u092A\u094D\u0938",
            "offclock.travel.desc": "\u0926\u0915\u094D\u0937\u093F\u0923-\u092A\u0942\u0930\u094D\u0935 \u090F\u0936\u093F\u092F\u093E \u0914\u0930 \u0909\u0938\u0938\u0947 \u0906\u0917\u0947 \u0938\u0928\u092C\u0930\u094D\u0928 \u0915\u0932\u0947\u0915\u094D\u091F \u0915\u093F\u090F \u0939\u0948\u0902\u0964 \u092E\u093E\u0928\u0924\u0947 \u0939\u0948\u0902 \u0915\u093F \u0938\u092C\u0938\u0947 \u0905\u091A\u094D\u091B\u0940 \u0921\u093F\u092C\u0917\u093F\u0902\u0917 35,000 \u092B\u0940\u091F \u0915\u0940 \u090A\u0901\u091A\u093E\u0908 \u092A\u0930 \u0939\u094B\u0924\u0940 \u0939\u0948\u0964",
            "offclock.photo.title": "\u092B\u094B\u091F\u094B\u0917\u094D\u0930\u093E\u092B\u0940",
            "offclock.photo.desc": "\u091F\u094D\u0930\u0948\u0935\u0932 \u0915\u0947 \u0926\u094C\u0930\u093E\u0928 \u092A\u0932 \u0915\u0948\u092A\u094D\u091A\u0930 \u0915\u0930\u0928\u093E \u092A\u0938\u0902\u0926 \u0939\u0948\u0964 \u092B\u094B\u0928 \u0938\u094D\u091F\u094B\u0930\u0947\u091C 80% \u092B\u094B\u091F\u094B, 15% Xcode \u0915\u0948\u0936, 5% \u0905\u0938\u0932\u0940 \u092B\u094D\u0930\u0940 \u0938\u094D\u092A\u0947\u0938\u0964",
            "offclock.ideas.title": "\u0906\u0907\u0921\u093F\u092F\u093E\u091C\u093C \u0914\u0930 \u092C\u093F\u0932\u094D\u0921\u093F\u0902\u0917",
            "offclock.ideas.desc": "\u0939\u092E\u0947\u0936\u093E \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F\u094D\u0938 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u0938\u094B\u091A\u0924\u0947 \u0930\u0939\u0924\u0947 \u0939\u0948\u0902\u0964 \u0928\u094B\u091F\u094D\u0938 \u0910\u092A \u092E\u0947\u0902 \"\u092E\u093F\u0932\u093F\u092F\u0928 \u0921\u0949\u0932\u0930 \u0906\u0907\u0921\u093F\u092F\u093E\u091C\u093C\" \u092D\u0930\u0947 \u0939\u0948\u0902 -- \u090F\u0915 \u0915\u094B \u0936\u093F\u092A \u0915\u0930\u0928\u093E \u0905\u091A\u094D\u091B\u093E \u0939\u094B\u0917\u093E\u0964<span class=\"aside\">// TODO: \u0907\u0928\u092E\u0947\u0902 \u0938\u0947 \u090F\u0915 \u0915\u094B \u0936\u093F\u092A \u0915\u0930\u094B</span>",

            /* ── Contact ── */
            "contact.label": "\u091C\u0941\u0921\u093C\u0947\u0902",
            "contact.heading": "\u091A\u0932\u093F\u090F \u0915\u0941\u091B \u092C\u0928\u093E\u0924\u0947 \u0939\u0948\u0902",
            "contact.sub": "iOS, AI, \u092A\u094D\u0930\u094B\u0921\u0915\u094D\u091F \u0906\u0907\u0921\u093F\u092F\u093E\u091C\u093C, \u092F\u093E \u0938\u093E\u0925 \u092E\u093F\u0932\u0915\u0930 \u0915\u0941\u091B \u092C\u0928\u093E\u0928\u0947 \u0915\u0947 \u092C\u093E\u0930\u0947 \u092E\u0947\u0902 \u092C\u093E\u0924 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0924\u0948\u092F\u093E\u0930\u0964",
            "contact.alllinks": "\u0938\u092D\u0940 \u0932\u093F\u0902\u0915",

            /* ── Footer ── */
            "footer.text": "\u0921\u093F\u091C\u093C\u093E\u0907\u0928 \u0914\u0930 \u0928\u093F\u0930\u094D\u092E\u093E\u0923 \u2014 \u0935\u093F\u0936\u093E\u0932 \u0938\u093F\u0902\u0939",

            /* ── Links Overlay ── */
            "lo.professional": "\u092A\u094D\u0930\u094B\u092B\u093C\u0947\u0936\u0928\u0932",
            "lo.portfolio": "\u092A\u094B\u0930\u094D\u091F\u092B\u094B\u0932\u093F\u092F\u094B",
            "lo.scan": "\u0938\u094D\u0915\u0948\u0928 &middot; \u0936\u0947\u092F\u0930"
        }
    };

    /* ── Engine ── */
    const STORAGE_KEY = 'lang-pref';

    function detectLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && translations[saved]) return saved;
        const nav = (navigator.language || '').toLowerCase();
        if (nav.startsWith('hi')) return 'hi';
        return 'en';
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        localStorage.setItem(STORAGE_KEY, lang);

        // Update data-i18n (textContent)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] != null) {
                el.textContent = translations[lang][key];
            }
        });

        // Update data-i18n-html (innerHTML)
        document.querySelectorAll('[data-i18n-html]').forEach(el => {
            const key = el.getAttribute('data-i18n-html');
            if (translations[lang] && translations[lang][key] != null) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update the switcher display
        const display = document.getElementById('langDisplay');
        if (display) display.textContent = lang === 'hi' ? '\u0939\u093F' : 'EN';

        // Update dropdown active state
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.classList.toggle('active', opt.dataset.lang === lang);
        });
    }

    function init() {
        const lang = detectLang();
        applyLang(lang);

        // Bind switcher
        document.querySelectorAll('.lang-option').forEach(opt => {
            opt.addEventListener('click', (e) => {
                e.stopPropagation();
                const newLang = opt.dataset.lang;
                applyLang(newLang);
                document.getElementById('langDropdown').classList.remove('open');
            });
        });

        const langToggle = document.getElementById('langToggle');
        const langDropdown = document.getElementById('langDropdown');
        if (langToggle && langDropdown) {
            langToggle.addEventListener('click', (e) => {
                e.stopPropagation();
                langDropdown.classList.toggle('open');
            });
            document.addEventListener('click', () => {
                langDropdown.classList.remove('open');
            });
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for external use
    window.i18n = { applyLang, translations };
})();
