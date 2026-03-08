/* ── i18n — Multilingual translations ── */
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
        },

        ar: {
            /* ── Nav ── */
            "nav.about": "\u0646\u0628\u0630\u0629",
            "nav.experience": "\u0627\u0644\u062E\u0628\u0631\u0629",
            "nav.projects": "\u0627\u0644\u0645\u0634\u0627\u0631\u064A\u0639",
            "nav.skills": "\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A",
            "nav.contact": "\u062A\u0648\u0627\u0635\u0644",

            /* ── Hero ── */
            "hero.title": "<strong>\u0645\u0647\u0646\u062F\u0633 \u0648\u0628\u0627\u0646\u064D.</strong> \u064A\u0628\u0646\u064A \u062A\u0637\u0628\u064A\u0642\u0627\u062A iOS \u0646\u0647\u0627\u0631\u064B\u0627\u060C<br>\u0648\u064A\u062C\u0631\u0651\u0628 \u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0644\u064A\u0644\u064B\u0627.",
            "hero.location": "\u0628\u0646\u063A\u0627\u0644\u0648\u0631\u0648\u060C \u0627\u0644\u0647\u0646\u062F",
            "hero.builder": "\u0628\u0627\u0646\u064D \u0645\u0639\u0632\u0651\u0632 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A",
            "hero.cta": "\u062A\u0648\u0627\u0635\u0644 \u0645\u0639\u064A",

            /* ── About ── */
            "about.label": "\u0646\u0628\u0630\u0629",
            "about.heading": "\u062D\u0631\u0641\u0629\u060C \u0641\u0636\u0648\u0644<br>\u0648\u0628\u0631\u0645\u062C\u0629",
            "about.p1": "\u0641\u064A\u0634\u0627\u0644 <strong>\u0645\u0647\u0646\u062F\u0633 iOS \u0631\u0626\u064A\u0633\u064A</strong> \u064A\u062D\u0628 \u0628\u0646\u0627\u0621 \u0627\u0644\u0623\u0634\u064A\u0627\u0621 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631. \u0623\u0637\u0644\u0642 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0625\u0646\u062A\u0627\u062C\u064A\u0629 \u0641\u064A <strong>\u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0645\u0627\u0644\u064A\u0629\u060C \u0627\u0644\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0627\u0644\u0635\u062D\u064A\u0629\u060C \u0627\u0644\u062A\u0648\u0627\u0635\u0644 \u0627\u0644\u0627\u062C\u062A\u0645\u0627\u0639\u064A\u060C \u0648\u0627\u0644\u062A\u062C\u0627\u0631\u0629 \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A\u0629</strong> -- \u0641\u064A \u0643\u0644 \u0645\u0631\u0629 \u064A\u0635\u0645\u0651\u0645 \u0628\u0646\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639 \u0648\u0627\u0644\u0635\u064A\u0627\u0646\u0629.",
            "about.p2": "\u064A\u0646\u062C\u0630\u0628 \u0625\u0644\u0649 \u0645\u0631\u062D\u0644\u0629 \"\u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0625\u0644\u0649 \u0627\u0644\u0648\u0627\u062D\u062F\" \u0641\u064A \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A: \u0631\u0633\u0645 \u062D\u062F\u0648\u062F \u0627\u0644\u0648\u062D\u062F\u0627\u062A\u060C \u0623\u062A\u0645\u062A\u0629 \u0633\u064A\u0631 \u0627\u0644\u0639\u0645\u0644 \u0628\u0633\u0643\u0631\u064A\u0628\u062A\u0627\u062A Swift\u060C \u0648\u062A\u0648\u062C\u064A\u0647 \u0627\u0644\u0641\u0631\u0642 \u0644\u0644\u0639\u0645\u0644 \u0628\u062B\u0642\u0629. <strong>\u0627\u0644\u0643\u0648\u062F \u0627\u0644\u0646\u0638\u064A\u0641 \u0648\u0627\u0644\u0645\u0643\u0648\u0651\u0646\u0627\u062A \u0627\u0644\u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645</strong> \u0623\u0645\u0631 \u063A\u064A\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u0641\u0627\u0648\u0636.",
            "about.p3": "\u064A\u0633\u062A\u0643\u0634\u0641 \u062D\u0627\u0644\u064A\u064B\u0627 \u062A\u0642\u0627\u0637\u0639 <strong>\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0645\u0648\u0628\u0627\u064A\u0644</strong> -- \u064A\u062A\u0639\u0644\u0645 \u062A\u0646\u0633\u064A\u0642 \u0646\u0645\u0627\u0630\u062C LLM \u0648\u0627\u0644\u0648\u0643\u0644\u0627\u0621 \u0648\u0623\u062F\u0648\u0627\u062A \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0645\u0636\u0627\u0639\u0641\u0629 \u0627\u0644\u0625\u0646\u062A\u0627\u062C\u064A\u0629. \u0627\u0644\u0647\u062F\u0641 \u0637\u0648\u064A\u0644 \u0627\u0644\u0645\u062F\u0649 \u0647\u0648 <strong>\u0625\u0637\u0644\u0627\u0642 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A \u0628\u0634\u0643\u0644 \u0623\u0633\u0631\u0639</strong> \u0639\u0628\u0631 \u062F\u0645\u062C \u0627\u0644\u062D\u0631\u0641\u0629 \u0627\u0644\u0647\u0646\u062F\u0633\u064A\u0629 \u0645\u0639 \u0633\u064A\u0631 \u0639\u0645\u0644 \u0645\u0639\u0632\u0651\u0632 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C \u0645\u0639 \u0627\u0644\u062A\u0639\u0644\u0645 \u0645\u0646 \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u062F\u0627\u0626\u0645\u064B\u0627.",
            "about.stat.apps": "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0645\u064F\u0637\u0644\u0642\u0629",
            "about.stat.domains": "\u0645\u062C\u0627\u0644\u0627\u062A",
            "about.stat.scratch": "\u0628\u064F\u0646\u064A \u0645\u0646 \u0627\u0644\u0635\u0641\u0631",
            "about.stat.curiosity": "\u0641\u0636\u0648\u0644",

            /* ── Career ── */
            "career.label": "\u0627\u0644\u0645\u0633\u064A\u0631\u0629",
            "career.heading": "\u0627\u0644\u0631\u062D\u0644\u0629 \u062D\u062A\u0649 \u0627\u0644\u0622\u0646",
            "career.current": "\u062D\u0627\u0644\u064A",

            "career.turnip.desc": "<ul><li>\u062C\u0632\u0621 \u0645\u0646 \u0641\u0631\u064A\u0642 \u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0627\u0644\u0645\u0624\u0633\u0633\u060C \u0628\u0646\u0649 \u0627\u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631.</li><li>\u0639\u0645\u0644 \u0628\u0634\u0643\u0644 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0645\u0639 \u0627\u0644\u0645\u0646\u062A\u062C \u0648\u0627\u0644\u062A\u0635\u0645\u064A\u0645 \u0648\u0627\u0644\u0646\u0645\u0648 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629 \u0639\u0644\u0649 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u0623\u0633\u0627\u0633\u064A\u0629: \u0627\u0644\u062A\u0633\u062C\u064A\u0644\u060C \u0627\u0644\u062E\u0644\u0627\u0635\u0629\u060C \u0627\u0644\u0625\u0646\u0634\u0627\u0621\u060C \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A\u060C \u0648\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0635\u0648\u0631.</li></ul>",
            "career.novasignal.desc": "<ul><li>\u0628\u0646\u0649 \u062A\u0637\u0628\u064A\u0642 iOS \u0627\u0644\u0645\u0631\u0627\u0641\u0642 \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 \u0644\u062C\u0647\u0627\u0632 \u0637\u0628\u064A \u0631\u0648\u0628\u0648\u062A\u064A \u064A\u0642\u064A\u0633 \u062A\u062F\u0641\u0642 \u0627\u0644\u062F\u0645 \u0627\u0644\u062F\u0645\u0627\u063A\u064A.</li><li>\u0635\u0645\u0651\u0645 \u0628\u0646\u064A\u0629 \u0642\u0627\u0628\u0644\u0629 \u0644\u0644\u062A\u0648\u0633\u0639: \u0645\u0643\u0648\u0651\u0646\u0627\u062A UI \u0642\u0627\u0628\u0644\u0629 \u0644\u0625\u0639\u0627\u062F\u0629 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645\u060C \u062A\u0635\u0645\u064A\u0645 \u0623\u0648\u0644\u0648\u064A\u0629 \u0627\u0644\u0627\u062E\u062A\u0628\u0627\u0631\u060C \u062E\u0637 \u0623\u0646\u0627\u0628\u064A\u0628 Xcode Cloud CI/CD.</li></ul>",
            "career.paytm.desc": "<ul><li>\u0623\u062D\u062F \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0627\u0644\u0623\u0642\u062F\u0645 \u0641\u064A \u0641\u0631\u064A\u0642 iOS \u0645\u0646 13-16 \u0634\u062E\u0635 \u0644\u062A\u0637\u0628\u064A\u0642 \u0645\u0627\u0644\u064A \u0639\u0627\u0644\u064A \u0627\u0644\u062A\u0642\u064A\u064A\u0645 (4.3 \u0646\u062C\u0648\u0645).</li><li>\u0623\u0639\u0627\u062F \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0648\u0648\u062D\u062F\u0629 \u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631. \u0648\u062C\u0651\u0647 \u0627\u0644\u0645\u0647\u0646\u062F\u0633\u064A\u0646 \u0648\u0642\u0627\u062F \u0645\u0631\u0627\u062C\u0639\u0627\u062A \u0627\u0644\u0643\u0648\u062F.</li></ul>",
            "career.caastle.desc": "<ul><li>\u0642\u0627\u062F \u0627\u0644\u0628\u0646\u064A\u0629 \u0644\u0645\u0646\u0635\u0629 SaaS \u0630\u0627\u062A \u0639\u0644\u0627\u0645\u0629 \u0628\u064A\u0636\u0627\u0621 (Gwynnie Bee, Haverdash) \u062A\u062F\u064A\u0631 \u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0645\u0644\u0627\u0628\u0633 \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627.</li><li>\u0635\u0645\u0651\u0645 \u0646\u0638\u0627\u0645 \u0633\u0645\u0627\u062A \u062F\u064A\u0646\u0627\u0645\u064A\u0643\u064A \u0645\u0624\u062A\u0645\u062A \u0639\u0628\u0631 \u062C\u062F\u0627\u0648\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0648\u0633\u0643\u0631\u064A\u0628\u062A\u0627\u062A Swift \u062F\u0627\u062E\u0644\u064A\u0629.</li><li>\u0623\u0639\u062F\u0651 \u0625\u0637\u0627\u0631 \u0627\u062E\u062A\u0628\u0627\u0631 \u0627\u0644\u0648\u062D\u062F\u0627\u062A \u0648\u062E\u0637 CI/CD. \u0648\u062C\u0651\u0647 \u0627\u0644\u0641\u0631\u064A\u0642 \u0648\u0646\u0642\u0644 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629.</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u0623\u0637\u0644\u0642 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0645\u062A\u0639\u062F\u062F\u0629 \u0641\u064A \u0622\u0646 \u0648\u0627\u062D\u062F \u0639\u0628\u0631 \u0645\u062C\u0627\u0644\u0627\u062A \u0627\u0644\u0645\u0624\u0633\u0633\u0627\u062A \u0648\u0627\u0644\u0625\u0628\u062F\u0627\u0639 (Apache Industrial, Duet App, PropCube).</li><li>\u0646\u0645\u0627 \u0645\u0646 \u0645\u0628\u062A\u062F\u0626 \u0625\u0644\u0649 \u0642\u0627\u0626\u062F \u0641\u0631\u064A\u0642 iOS \u0645\u0646 \u0634\u062E\u0635\u064A\u0646 \u0648\u0645\u0648\u062C\u0651\u0647 4 \u0645\u0648\u0638\u0641\u064A\u0646 \u062C\u062F\u062F.</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u0627\u0644\u0623\u0639\u0645\u0627\u0644",
            "projects.heading": "\u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0645\u064F\u0637\u0644\u0642\u0629",
            "projects.domain.social": "\u0627\u062C\u062A\u0645\u0627\u0639\u064A",
            "projects.domain.health": "\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0635\u062D\u064A\u0629",
            "projects.domain.fintech": "\u062A\u0643\u0646\u0648\u0644\u0648\u062C\u064A\u0627 \u0645\u0627\u0644\u064A\u0629",
            "projects.domain.fashion": "\u0623\u0632\u064A\u0627\u0621 / SaaS",
            "projects.domain.enterprise": "\u0645\u0624\u0633\u0633\u0627\u062A",
            "projects.domain.side": "\u0645\u0634\u0631\u0648\u0639 \u062C\u0627\u0646\u0628\u064A",
            "projects.turnip.desc": "\u062A\u0637\u0628\u064A\u0642 \u0627\u062C\u062A\u0645\u0627\u0639\u064A \u0628\u064F\u0646\u064A \u0645\u0646 \u0627\u0644\u0635\u0641\u0631 -- \u0627\u0644\u062A\u0633\u062C\u064A\u0644\u060C \u0627\u0644\u062E\u0644\u0627\u0635\u0629\u060C \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0645\u062D\u062A\u0648\u0649\u060C \u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A\u060C \u0648\u0645\u0639\u0627\u0644\u062C\u0629 \u0627\u0644\u0635\u0648\u0631. \u062A\u0639\u0627\u0648\u0646 \u0645\u062A\u0639\u062F\u062F \u0627\u0644\u0648\u0638\u0627\u0626\u0641 \u0645\u0646\u0630 \u0627\u0644\u064A\u0648\u0645 \u0627\u0644\u0623\u0648\u0644.",
            "projects.novasignal.desc": "\u062A\u0637\u0628\u064A\u0642 iOS \u0645\u0631\u0627\u0641\u0642 \u0644\u062C\u0647\u0627\u0632 \u0637\u0628\u064A \u0631\u0648\u0628\u0648\u062A\u064A. \u064A\u0645\u0643\u0651\u0646 \u0627\u0644\u0645\u0633\u062A\u0634\u0641\u064A\u0627\u062A \u0645\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0628\u064A\u0627\u0646\u0627\u062A \u062A\u062F\u0641\u0642 \u0627\u0644\u062F\u0645 \u0627\u0644\u062F\u0645\u0627\u063A\u064A \u0627\u0644\u0645\u0639\u0627\u0644\u062C\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0644\u0644\u0648\u0642\u0627\u064A\u0629 \u0645\u0646 \u0627\u0644\u0633\u0643\u062A\u0629 \u0627\u0644\u062F\u0645\u0627\u063A\u064A\u0629.",
            "projects.paytm.desc": "\u0623\u062D\u062F \u0623\u0641\u0636\u0644 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u062A\u0642\u064A\u064A\u0645\u064B\u0627 \u0641\u064A \u0627\u0644\u0647\u0646\u062F. \u0623\u0633\u0647\u0645\u060C \u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0633\u062A\u062B\u0645\u0627\u0631\u060C \u0627\u0643\u062A\u062A\u0627\u0628\u0627\u062A\u060C \u0639\u0642\u0648\u062F \u0622\u062C\u0644\u0629. \u0623\u0639\u0627\u062F \u062A\u0635\u0645\u064A\u0645 \u0627\u0644\u0634\u0627\u0634\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629 \u0648\u0648\u062D\u062F\u0629 \u0635\u0646\u0627\u062F\u064A\u0642 \u0627\u0644\u0627\u0633\u062A\u062B\u0645\u0627\u0631 \u0644\u0645\u0644\u0627\u064A\u064A\u0646 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646.",
            "projects.caastle.desc": "\u0645\u0646\u0635\u0629 \u062A\u0623\u062C\u064A\u0631 \u0645\u0644\u0627\u0628\u0633 \u0630\u0627\u062A \u0639\u0644\u0627\u0645\u0629 \u0628\u064A\u0636\u0627\u0621 \u0644\u0644\u0633\u0648\u0642 \u0627\u0644\u0623\u0645\u0631\u064A\u0643\u064A. \u0635\u0645\u0651\u0645 \u0625\u0637\u0627\u0631 SaaS \u0627\u0644\u0645\u0648\u062D\u0651\u062F \u0648\u0627\u0644\u0642\u0627\u0628\u0644 \u0644\u0644\u062A\u062E\u0635\u064A\u0635 \u0627\u0644\u0630\u064A \u064A\u062F\u064A\u0631 \u062A\u0637\u0628\u064A\u0642\u0627\u062A \u0639\u0644\u0627\u0645\u0627\u062A \u062A\u062C\u0627\u0631\u064A\u0629 \u0645\u062A\u0639\u062F\u062F\u0629.",
            "projects.enterprise.desc": "\u062A\u0637\u0628\u064A\u0642 \u0625\u062F\u0627\u0631\u0629 \u0648\u0645\u0631\u0627\u0642\u0628\u0629 \u0627\u0644\u0642\u0648\u0649 \u0627\u0644\u0639\u0627\u0645\u0644\u0629 \u0644\u0634\u0631\u0643\u0629 Apache Industrial Services\u060C \u064A\u064F\u0633\u062A\u062E\u062F\u0645 \u0641\u064A \u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A \u0641\u064A \u0623\u0645\u0631\u064A\u0643\u0627.",
            "projects.xo3.desc": "\u0644\u0639\u0628\u0629 \u0625\u0643\u0633 \u0623\u0648 \u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641 SwiftUI \u0648Combine \u0648MultipeerConnectivity. \u0628\u064F\u0646\u064A\u062A \u0628\u0640 iOS 26+ \u0648Swift 6.",
            "projects.appstore": "\u0639\u0631\u0636 \u0639\u0644\u0649 App Store",
            "projects.github": "\u0639\u0631\u0636 \u0639\u0644\u0649 GitHub",

            /* ── Skills ── */
            "skills.label": "\u0627\u0644\u0623\u062F\u0648\u0627\u062A",
            "skills.heading": "\u0627\u0644\u062A\u0642\u0646\u064A\u0627\u062A \u0648\u0627\u0644\u0645\u0647\u0627\u0631\u0627\u062A",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u0627\u0644\u0628\u0646\u064A\u0629 \u0627\u0644\u0645\u0639\u0645\u0627\u0631\u064A\u0629",
            "skills.ai": "\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A \u0648\u0627\u0644\u0627\u0633\u062A\u0643\u0634\u0627\u0641",
            "skills.tooling": "\u0627\u0644\u0623\u062F\u0648\u0627\u062A \u0648\u0627\u0644\u0639\u0645\u0644\u064A\u0627\u062A",
            "skills.leadership": "\u0627\u0644\u0642\u064A\u0627\u062F\u0629",

            /* ── Open Source ── */
            "oss.label": "\u0645\u0641\u062A\u0648\u062D \u0627\u0644\u0645\u0635\u062F\u0631",
            "oss.heading": "\u0639\u0644\u0649 GitHub",
            "oss.timbaktoe": "\u0644\u0639\u0628\u0629 \u0625\u0643\u0633 \u0623\u0648 \u0644\u062A\u0639\u0644\u0645 \u0623\u0633\u0627\u0633\u064A\u0627\u062A SwiftUI \u0648Combine \u0648MultipeerConnectivity.",
            "oss.school": "\u062A\u0637\u0628\u064A\u0642 \u0628\u062F\u0627\u064A\u0629 \u0644\u0641\u0647\u0645 \u0623\u0646\u0645\u0627\u0637 SwiftUI \u0648Combine.",
            "oss.openpr": "\u0623\u062F\u0627\u0629 \u0633\u0637\u0631 \u0623\u0648\u0627\u0645\u0631 \u0644\u0625\u0646\u0634\u0627\u0621 \u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u062D\u0628\u060C \u0628\u064F\u0646\u064A\u062A \u0628\u0640 Swift Package Manager.",
            "oss.math": "\u0645\u0643\u062A\u0628\u0629 \u0623\u062F\u0648\u0627\u062A \u0631\u064A\u0627\u0636\u064A\u0629. 4 \u0641\u0648\u0631\u0643\u0627\u062A \u0639\u0644\u0649 GitHub.",
            "oss.geo": "\u063A\u0644\u0627\u0641 \u062E\u0641\u064A\u0641 \u062D\u0648\u0644 \u0625\u0637\u0627\u0631 iOS CoreLocation.",
            "oss.setup": "\u0642\u0627\u0626\u0645\u0629 \u0645\u0631\u0627\u062C\u0639\u0629 \u0644\u0625\u0639\u062F\u0627\u062F \u0623\u062C\u0647\u0632\u0629 \u0627\u0644\u062A\u0637\u0648\u064A\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629.",

            /* ── Education ── */
            "edu.label": "\u0627\u0644\u062A\u0639\u0644\u064A\u0645",
            "edu.heading": "\u0627\u0644\u062E\u0644\u0641\u064A\u0629",
            "edu.degree": "\u0628\u0643\u0627\u0644\u0648\u0631\u064A\u0648\u0633 \u062A\u0642\u0646\u064A\u0629\u060C \u0639\u0644\u0648\u0645 \u0627\u0644\u062D\u0627\u0633\u0648\u0628 \u0648\u0627\u0644\u0647\u0646\u062F\u0633\u0629",

            /* ── Off the clock ── */
            "offclock.label": "\u062E\u0627\u0631\u062C \u0627\u0644\u0639\u0645\u0644",
            "offclock.heading": "\u0627\u0644\u062C\u0627\u0646\u0628 \u063A\u064A\u0631 \u0627\u0644\u0647\u0646\u062F\u0633\u064A",
            "offclock.sports.title": "\u0643\u0631\u0629 \u0642\u062F\u0645\u060C \u0645\u0633\u0627\u0631\u0627\u062A \u0648\u062C\u0631\u064A",
            "offclock.sports.desc": "\u0643\u0631\u0629 \u0642\u062F\u0645 \u0641\u064A \u0639\u0637\u0644\u0629 \u0646\u0647\u0627\u064A\u0629 \u0627\u0644\u0623\u0633\u0628\u0648\u0639\u060C \u0645\u0634\u064A \u0639\u0646\u062F\u0645\u0627 \u062A\u0646\u0627\u062F\u064A \u0627\u0644\u062C\u0628\u0627\u0644\u060C \u062C\u0631\u064A \u0639\u0646\u062F\u0645\u0627 \u0644\u0627 \u062A\u0641\u0639\u0644. \u064A\u0639\u0627\u0645\u0644 \u0627\u0644\u062C\u0633\u062F \u0643\u0643\u0648\u062F \u0625\u0646\u062A\u0627\u062C\u064A -- \u0628\u062F\u0648\u0646 \u0627\u062E\u062A\u0635\u0627\u0631\u0627\u062A\u060C \u0628\u062F\u0648\u0646 \u062F\u064A\u0648\u0646 \u062A\u0642\u0646\u064A\u0629.<span class=\"aside\">// \u064A\u0648\u0645 \u0627\u0644\u0633\u0627\u0642 \u0644\u064A\u0633 \u0644\u0647 \u0627\u0633\u062A\u0631\u0627\u062A\u064A\u062C\u064A\u0629 \u062A\u0631\u0627\u062C\u0639</span>",
            "offclock.fuel.title": "\u0648\u0642\u0648\u062F \u0646\u0638\u064A\u0641 \u0641\u0642\u0637",
            "offclock.fuel.desc": "\u064A\u0623\u0643\u0644 \u0628\u0634\u0643\u0644 \u0635\u062D\u064A -- \u0644\u064A\u0633 \"\u063A\u0627\u0644\u0628\u064B\u0627\"\u060C \u0628\u0644 \u0641\u0639\u0644\u064B\u0627. \u0628\u062F\u0648\u0646 \u0643\u062D\u0648\u0644\u060C \u0628\u062F\u0648\u0646 \u062A\u062F\u062E\u064A\u0646\u060C \u0628\u062F\u0648\u0646 \u0648\u062C\u0628\u0627\u062A \u063A\u0634. \u064A\u0639\u062A\u0628\u0631 \u0627\u0644\u062C\u0633\u062F \u0639\u0645\u0644\u064A\u0629 \u0637\u0648\u064A\u0644\u0629 \u0627\u0644\u0645\u062F\u0649: \u0642\u0645\u0627\u0645\u0629 \u062A\u062F\u062E\u0644\u060C \u0642\u0645\u0627\u0645\u0629 \u062A\u062E\u0631\u062C.<span class=\"aside\">// \u064A\u0646\u0635\u062D \u0627\u0644\u0622\u062E\u0631\u064A\u0646 \u0628\u0634\u062F\u0629 \u0628\u062A\u0628\u0646\u064A \u0647\u0630\u0627 \u0627\u0644\u0646\u0645\u0637 \u0623\u064A\u0636\u064B\u0627</span>",
            "offclock.geo.title": "\u062E\u0631\u0627\u0626\u0637\u060C \u0645\u0627\u0644 \u0648\u0633\u0644\u0637\u0629",
            "offclock.geo.desc": "\u0645\u0641\u062A\u0648\u0646 \u0628\u0627\u0644\u062A\u062D\u0648\u0644\u0627\u062A \u0627\u0644\u062C\u064A\u0648\u0633\u064A\u0627\u0633\u064A\u0629 \u0648\u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0648\u0627\u0644\u062C\u063A\u0631\u0627\u0641\u064A\u0627 \u0648\u0627\u0644\u0627\u062A\u062C\u0627\u0647\u0627\u062A \u0627\u0644\u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629. \u064A\u062D\u0628 \u0631\u0628\u0637 \u0627\u0644\u0646\u0642\u0627\u0637 \u0628\u064A\u0646 \u062A\u062D\u0631\u0643 \u0627\u0644\u062D\u062F\u0648\u062F \u0648\u0627\u062A\u062C\u0627\u0647 \u0627\u0644\u0623\u0633\u0648\u0627\u0642.<span class=\"aside\">// \u0633\u064A\u062D\u0648\u0651\u0644 \u0623\u064A \u0639\u0634\u0627\u0621 \u0625\u0644\u0649 \u0623\u0637\u0631\u0648\u062D\u0629 \u0627\u0642\u062A\u0635\u0627\u062F\u064A\u0629 \u0643\u0644\u064A\u0629</span>",
            "offclock.travel.title": "\u0623\u062E\u062A\u0627\u0645 \u062C\u0648\u0627\u0632 \u0627\u0644\u0633\u0641\u0631",
            "offclock.travel.desc": "\u062C\u0645\u0639 \u062D\u0631\u0648\u0642 \u0627\u0644\u0634\u0645\u0633 \u0639\u0628\u0631 \u062C\u0646\u0648\u0628 \u0634\u0631\u0642 \u0622\u0633\u064A\u0627 \u0648\u0645\u0627 \u0628\u0639\u062F\u0647\u0627. \u064A\u0624\u0645\u0646 \u0623\u0646 \u0623\u0641\u0636\u0644 \u062A\u0635\u062D\u064A\u062D \u0644\u0644\u0623\u062E\u0637\u0627\u0621 \u064A\u062D\u062F\u062B \u0639\u0644\u0649 \u0627\u0631\u062A\u0641\u0627\u0639 35,000 \u0642\u062F\u0645.",
            "offclock.photo.title": "\u0627\u0644\u062A\u0635\u0648\u064A\u0631",
            "offclock.photo.desc": "\u064A\u0633\u062A\u0645\u062A\u0639 \u0628\u0627\u0644\u062A\u0642\u0627\u0637 \u0627\u0644\u0644\u062D\u0638\u0627\u062A\u060C \u062E\u0627\u0635\u0629 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u0633\u0641\u0631. \u062A\u062E\u0632\u064A\u0646 \u0627\u0644\u0647\u0627\u062A\u0641 80% \u0635\u0648\u0631\u060C 15% \u0630\u0627\u0643\u0631\u0629 Xcode\u060C 5% \u0645\u0633\u0627\u062D\u0629 \u0641\u0639\u0644\u064A\u0629.",
            "offclock.ideas.title": "\u0623\u0641\u0643\u0627\u0631 \u0648\u0628\u0646\u0627\u0621",
            "offclock.ideas.desc": "\u064A\u062D\u0644\u0645 \u062F\u0627\u0626\u0645\u064B\u0627 \u0628\u0645\u0646\u062A\u062C\u0627\u062A \u0644\u0628\u0646\u0627\u0626\u0647\u0627. \u062A\u0637\u0628\u064A\u0642 \u0627\u0644\u0645\u0644\u0627\u062D\u0638\u0627\u062A \u0645\u0644\u064A\u0621 \u0628\u0640\"\u0623\u0641\u0643\u0627\u0631 \u0628\u0645\u0644\u064A\u0648\u0646 \u062F\u0648\u0644\u0627\u0631\" -- \u0625\u0637\u0644\u0627\u0642 \u0648\u0627\u062D\u062F\u0629 \u0633\u064A\u0643\u0648\u0646 \u0631\u0627\u0626\u0639\u064B\u0627.<span class=\"aside\">// TODO: \u0623\u0637\u0644\u0642 \u0648\u0627\u062D\u062F\u0629 \u0645\u0646\u0647\u0627 \u0641\u0639\u0644\u064B\u0627</span>",

            /* ── Contact ── */
            "contact.label": "\u062A\u0648\u0627\u0635\u0644",
            "contact.heading": "\u0644\u0646\u0628\u0646\u0650 \u0634\u064A\u0626\u064B\u0627 \u0645\u0639\u064B\u0627",
            "contact.sub": "\u0645\u0646\u0641\u062A\u062D \u0644\u0644\u062D\u062F\u064A\u062B \u062D\u0648\u0644 iOS\u060C \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A\u060C \u0623\u0641\u0643\u0627\u0631 \u0627\u0644\u0645\u0646\u062A\u062C\u0627\u062A\u060C \u0623\u0648 \u0628\u0646\u0627\u0621 \u0623\u0634\u064A\u0627\u0621 \u0645\u0639\u064B\u0627.",
            "contact.alllinks": "\u062C\u0645\u064A\u0639 \u0627\u0644\u0631\u0648\u0627\u0628\u0637",

            /* ── Footer ── */
            "footer.text": "\u062A\u0635\u0645\u064A\u0645 \u0648\u0628\u0646\u0627\u0621 \u0641\u064A\u0634\u0627\u0644 \u0633\u064A\u0646\u063A",

            /* ── Links Overlay ── */
            "lo.professional": "\u0645\u0647\u0646\u064A",
            "lo.portfolio": "\u0645\u0639\u0631\u0636 \u0627\u0644\u0623\u0639\u0645\u0627\u0644",
            "lo.scan": "\u0645\u0633\u062D &middot; \u0645\u0634\u0627\u0631\u0643\u0629"
        },

        he: {
            /* ── Nav ── */
            "nav.about": "\u05D0\u05D5\u05D3\u05D5\u05EA",
            "nav.experience": "\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF",
            "nav.projects": "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD",
            "nav.skills": "\u05DB\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
            "nav.contact": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",

            /* ── Hero ── */
            "hero.title": "<strong>\u05DE\u05D4\u05E0\u05D3\u05E1 \u05D5\u05D1\u05D5\u05E0\u05D4.</strong> \u05D1\u05D5\u05E0\u05D4 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA iOS \u05D1\u05D9\u05D5\u05DD,<br>\u05DE\u05EA\u05E0\u05E1\u05D4 \u05E2\u05DD AI \u05D5\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8 \u05D1\u05DC\u05D9\u05DC\u05D4.",
            "hero.location": "\u05D1\u05E0\u05D2\u05DC\u05D5\u05E8\u05D5, \u05D4\u05D5\u05D3\u05D5",
            "hero.builder": "\u05D1\u05D5\u05E0\u05D4 \u05DE\u05D5\u05E0\u05D7\u05D4 \u05D1\u05D9\u05E0\u05D4 \u05DE\u05DC\u05D0\u05DB\u05D5\u05EA\u05D9\u05EA",
            "hero.cta": "\u05E6\u05D5\u05E8 \u05E7\u05E9\u05E8",

            /* ── About ── */
            "about.label": "\u05D0\u05D5\u05D3\u05D5\u05EA",
            "about.heading": "\u05DE\u05DC\u05D0\u05DB\u05D4, \u05E1\u05E7\u05E8\u05E0\u05D5\u05EA<br>\u05D5\u05E7\u05D5\u05D3",
            "about.p1": "\u05D5\u05D9\u05E9\u05D0\u05DC \u05D4\u05D5\u05D0 <strong>\u05DE\u05D4\u05E0\u05D3\u05E1 iOS \u05E8\u05D0\u05E9\u05D9</strong> \u05E9\u05D0\u05D5\u05D4\u05D1 \u05DC\u05D1\u05E0\u05D5\u05EA \u05D3\u05D1\u05E8\u05D9\u05DD \u05DE\u05D0\u05E4\u05E1. \u05D4\u05E9\u05D9\u05E7 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D1\u05EA\u05D7\u05D5\u05DE\u05D9 <strong>\u05E4\u05D9\u05E0\u05D8\u05E7, \u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA, \u05DE\u05D3\u05D9\u05D4 \u05D7\u05D1\u05E8\u05EA\u05D9\u05EA \u05D5\u05DE\u05E1\u05D7\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9</strong> -- \u05D1\u05DB\u05DC \u05E4\u05E2\u05DD \u05DE\u05EA\u05DB\u05E0\u05DF \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4 \u05E1\u05E7\u05D9\u05DC\u05D1\u05D9\u05DC\u05D9\u05EA \u05D5\u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05EA\u05D7\u05D6\u05D5\u05E7\u05D4.",
            "about.p2": "\u05E0\u05DE\u05E9\u05DA \u05DC\u05E9\u05DC\u05D1 \"\u05DE\u05D0\u05E4\u05E1 \u05DC\u05D0\u05D7\u05D3\" \u05D1\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD: \u05D4\u05D2\u05D3\u05E8\u05EA \u05D2\u05D1\u05D5\u05DC\u05D5\u05EA \u05DE\u05D5\u05D3\u05D5\u05DC\u05D9\u05DD, \u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05E9\u05DC \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E2\u05DD \u05E1\u05E7\u05E8\u05D9\u05E4\u05D8\u05D9 Swift, \u05D5\u05D4\u05E0\u05D7\u05D9\u05D9\u05EA \u05E6\u05D5\u05D5\u05EA\u05D9\u05DD \u05DC\u05E2\u05D1\u05D5\u05D3 \u05D1\u05D1\u05D8\u05D7\u05D5\u05DF. <strong>\u05E7\u05D5\u05D3 \u05E0\u05E7\u05D9 \u05D5\u05E8\u05DB\u05D9\u05D1\u05D9\u05DD \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D7\u05D5\u05D6\u05E8</strong> \u05D6\u05D4 \u05DC\u05D0 \u05E0\u05D9\u05EA\u05DF \u05DC\u05DE\u05E9\u05D0 \u05D5\u05DE\u05EA\u05DF.",
            "about.p3": "\u05DB\u05E8\u05D2\u05E2 \u05D7\u05D5\u05E7\u05E8 \u05D0\u05EA \u05D4\u05E6\u05D5\u05DE\u05EA \u05E9\u05DC <strong>AI \u05D5\u05DE\u05D5\u05D1\u05D9\u05D9\u05DC</strong> -- \u05DC\u05D5\u05DE\u05D3 \u05DC\u05EA\u05D6\u05DE\u05E8 \u05DE\u05D5\u05D3\u05DC\u05D9 LLM, \u05E1\u05D5\u05DB\u05E0\u05D9\u05DD \u05D5\u05DB\u05DC\u05D9 AI \u05DC\u05D4\u05DB\u05E4\u05DC\u05EA \u05E4\u05E8\u05D5\u05D3\u05D5\u05E7\u05D8\u05D9\u05D1\u05D9\u05D5\u05EA. \u05D4\u05DE\u05D8\u05E8\u05D4 \u05DC\u05D8\u05D5\u05D5\u05D7 \u05D0\u05E8\u05D5\u05DA \u05D4\u05D9\u05D0 <strong>\u05DC\u05D4\u05E9\u05D9\u05E7 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DE\u05D4\u05E8 \u05D9\u05D5\u05EA\u05E8</strong> \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E9\u05D9\u05DC\u05D5\u05D1 \u05DE\u05DC\u05D0\u05DB\u05EA \u05D4\u05E0\u05D3\u05E1\u05D4 \u05E2\u05DD \u05EA\u05D4\u05DC\u05D9\u05DB\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05D5\u05E0\u05D7\u05D9 AI, \u05EA\u05D5\u05DA \u05DC\u05DE\u05D9\u05D3\u05D4 \u05DE\u05D0\u05D7\u05E8\u05D9\u05DD.",
            "about.stat.apps": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05E9\u05D4\u05D5\u05E9\u05E7\u05D5",
            "about.stat.domains": "\u05EA\u05D7\u05D5\u05DE\u05D9\u05DD",
            "about.stat.scratch": "\u05E0\u05D1\u05E0\u05D4 \u05DE\u05D0\u05E4\u05E1",
            "about.stat.curiosity": "\u05E1\u05E7\u05E8\u05E0\u05D5\u05EA",

            /* ── Career ── */
            "career.label": "\u05E7\u05E8\u05D9\u05D9\u05E8\u05D4",
            "career.heading": "\u05D4\u05DE\u05E1\u05E2 \u05E2\u05D3 \u05DB\u05D4",
            "career.current": "\u05E0\u05D5\u05DB\u05D7\u05D9",

            "career.turnip.desc": "<ul><li>\u05D7\u05DC\u05E7 \u05DE\u05E6\u05D5\u05D5\u05EA \u05D4\u05D4\u05E0\u05D3\u05E1\u05D4 \u05D4\u05DE\u05D9\u05D9\u05E1\u05D3\u05EA, \u05D1\u05E0\u05D4 \u05D0\u05EA \u05D4\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05DE\u05D0\u05E4\u05E1.</li><li>\u05E2\u05D1\u05D3 \u05D1\u05E9\u05D9\u05EA\u05D5\u05E3 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05E2\u05DD \u05DE\u05D5\u05E6\u05E8, \u05E2\u05D9\u05E6\u05D5\u05D1, \u05E6\u05DE\u05D9\u05D7\u05D4 \u05D5\u05D4\u05E0\u05D3\u05E1\u05D4 \u05E2\u05DC \u05EA\u05DB\u05D5\u05E0\u05D5\u05EA \u05DE\u05E8\u05DB\u05D6\u05D9\u05D5\u05EA: \u05D4\u05E8\u05E9\u05DE\u05D4, \u05E4\u05D9\u05D3, \u05D9\u05E6\u05D9\u05E8\u05D4, \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05D5\u05E2\u05D9\u05D1\u05D5\u05D3 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA.</li></ul>",
            "career.novasignal.desc": "<ul><li>\u05D1\u05E0\u05D4 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA iOS \u05E0\u05DC\u05D5\u05D5\u05D9\u05EA \u05DE\u05D0\u05E4\u05E1 \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8 \u05E8\u05E4\u05D5\u05D0\u05D9 \u05E8\u05D5\u05D1\u05D5\u05D8\u05D9 \u05D4\u05DE\u05D5\u05D3\u05D3 \u05D6\u05E8\u05D9\u05DE\u05EA \u05D3\u05DD \u05DE\u05D5\u05D7\u05D9\u05EA.</li><li>\u05EA\u05DB\u05E0\u05DF \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4 \u05E1\u05E7\u05D9\u05DC\u05D1\u05D9\u05DC\u05D9\u05EA: \u05E8\u05DB\u05D9\u05D1\u05D9 UI \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D7\u05D5\u05D6\u05E8, \u05E2\u05D9\u05E6\u05D5\u05D1 \u05DE\u05D5\u05E0\u05D7\u05D4-\u05D1\u05D3\u05D9\u05E7\u05D5\u05EA, \u05E6\u05D9\u05E0\u05D5\u05E8 Xcode Cloud CI/CD.</li></ul>",
            "career.paytm.desc": "<ul><li>\u05D0\u05D7\u05D3 \u05D4\u05DE\u05D4\u05E0\u05D3\u05E1\u05D9\u05DD \u05D4\u05D1\u05DB\u05D9\u05E8\u05D9\u05DD \u05D1\u05E6\u05D5\u05D5\u05EA iOS \u05E9\u05DC 13-16 \u05D0\u05D9\u05E9 \u05DC\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E4\u05D9\u05E0\u05D8\u05E7 \u05DE\u05D5\u05D1\u05D9\u05DC\u05D4 (4.3 \u05DB\u05D5\u05DB\u05D1\u05D9\u05DD).</li><li>\u05E9\u05D9\u05E4\u05E5 \u05D0\u05EA \u05DE\u05E1\u05DA \u05D4\u05D1\u05D9\u05EA \u05D5\u05DE\u05D5\u05D3\u05D5\u05DC \u05E7\u05E8\u05E0\u05D5\u05EA \u05E0\u05D0\u05DE\u05E0\u05D5\u05EA. \u05D4\u05E0\u05D7\u05D4 \u05DE\u05D4\u05E0\u05D3\u05E1\u05D9\u05DD \u05D5\u05D4\u05D5\u05D1\u05D9\u05DC \u05E1\u05E7\u05D9\u05E8\u05D5\u05EA \u05E7\u05D5\u05D3.</li></ul>",
            "career.caastle.desc": "<ul><li>\u05D4\u05D5\u05D1\u05D9\u05DC \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4 \u05DC\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA SaaS \u05E2\u05DD \u05EA\u05D5\u05D5\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4 (Gwynnie Bee, Haverdash) \u05DC\u05D4\u05E9\u05DB\u05E8\u05EA \u05D1\u05D2\u05D3\u05D9\u05DD \u05D1\u05D0\u05E8\u05D4\"\u05D1.</li><li>\u05E2\u05D9\u05E6\u05D1 \u05DE\u05E2\u05E8\u05DB\u05EA \u05E2\u05E8\u05DB\u05D5\u05EA \u05E0\u05D5\u05E9\u05D0 \u05D3\u05D9\u05E0\u05DE\u05D9\u05EA \u05D1\u05D0\u05D5\u05D8\u05D5\u05DE\u05E6\u05D9\u05D4 \u05D3\u05E8\u05DA \u05D2\u05DC\u05D9\u05D5\u05E0\u05D5\u05EA \u05D5\u05E1\u05E7\u05E8\u05D9\u05E4\u05D8\u05D9 Swift \u05E4\u05E0\u05D9\u05DE\u05D9\u05D9\u05DD.</li><li>\u05D4\u05E7\u05D9\u05DD \u05DE\u05E2\u05E8\u05DB\u05EA \u05D1\u05D3\u05D9\u05E7\u05D5\u05EA \u05D9\u05D7\u05D9\u05D3\u05D4 \u05D5\u05E6\u05D9\u05E0\u05D5\u05E8 CI/CD. \u05D4\u05E0\u05D7\u05D4 \u05D0\u05EA \u05D4\u05E6\u05D5\u05D5\u05EA \u05D5\u05D4\u05E2\u05D1\u05D9\u05E8 \u05D9\u05D3\u05E2 \u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E0\u05D9.</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u05D4\u05E9\u05D9\u05E7 \u05DE\u05E1\u05E4\u05E8 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D1\u05DE\u05E7\u05D1\u05D9\u05DC \u05D1\u05EA\u05D7\u05D5\u05DE\u05D9 \u05D0\u05E8\u05D2\u05D5\u05E0\u05D9\u05DD \u05D5\u05D9\u05E6\u05D9\u05E8\u05D4 (Apache Industrial, Duet App, PropCube).</li><li>\u05E6\u05DE\u05D7 \u05DE\u05D8\u05D9\u05E8\u05D5\u05DF \u05DC\u05D4\u05D5\u05D1\u05DC\u05EA \u05E6\u05D5\u05D5\u05EA iOS \u05E9\u05DC 2 \u05D0\u05E0\u05E9\u05D9\u05DD \u05D5\u05D4\u05E0\u05D7\u05D9\u05D9\u05EA 4 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD.</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA",
            "projects.heading": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05E9\u05D4\u05D5\u05E9\u05E7\u05D5",
            "projects.domain.social": "\u05D7\u05D1\u05E8\u05EA\u05D9",
            "projects.domain.health": "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D4 \u05E8\u05E4\u05D5\u05D0\u05D9\u05EA",
            "projects.domain.fintech": "\u05E4\u05D9\u05E0\u05D8\u05E7",
            "projects.domain.fashion": "\u05D0\u05D5\u05E4\u05E0\u05D4 / SaaS",
            "projects.domain.enterprise": "\u05D0\u05E8\u05D2\u05D5\u05E0\u05D9",
            "projects.domain.side": "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E6\u05D3\u05D3\u05D9",
            "projects.turnip.desc": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D4 \u05D7\u05D1\u05E8\u05EA\u05D9\u05EA \u05E9\u05E0\u05D1\u05E0\u05EA\u05D4 \u05DE\u05D0\u05E4\u05E1 -- \u05D4\u05E8\u05E9\u05DE\u05D4, \u05E4\u05D9\u05D3, \u05D9\u05E6\u05D9\u05E8\u05EA \u05EA\u05D5\u05DB\u05DF, \u05D4\u05EA\u05E8\u05D0\u05D5\u05EA \u05D5\u05E2\u05D9\u05D1\u05D5\u05D3 \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA. \u05E9\u05D9\u05EA\u05D5\u05E3 \u05E4\u05E2\u05D5\u05DC\u05D4 \u05D7\u05D5\u05E6\u05D4-\u05EA\u05D7\u05D5\u05DE\u05D9 \u05DE\u05D4\u05D9\u05D5\u05DD \u05D4\u05E8\u05D0\u05E9\u05D5\u05DF.",
            "projects.novasignal.desc": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA iOS \u05E0\u05DC\u05D5\u05D5\u05D9\u05EA \u05DC\u05DE\u05DB\u05E9\u05D9\u05E8 \u05E8\u05E4\u05D5\u05D0\u05D9 \u05E8\u05D5\u05D1\u05D5\u05D8\u05D9. \u05DE\u05D0\u05E4\u05E9\u05E8\u05EA \u05DC\u05D1\u05EA\u05D9 \u05D7\u05D5\u05DC\u05D9\u05DD \u05D2\u05D9\u05E9\u05D4 \u05DC\u05E0\u05EA\u05D5\u05E0\u05D9 \u05D6\u05E8\u05D9\u05DE\u05EA \u05D3\u05DD \u05DE\u05D5\u05D7\u05D9\u05EA \u05DE\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1-AI \u05DC\u05DE\u05E0\u05D9\u05E2\u05EA \u05E9\u05D1\u05E5.",
            "projects.paytm.desc": "\u05D0\u05D7\u05EA \u05DE\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05D4\u05D4\u05E9\u05E7\u05E2\u05D4 \u05D4\u05DE\u05D5\u05D1\u05D9\u05DC\u05D5\u05EA \u05D1\u05D4\u05D5\u05D3\u05D5. \u05DE\u05E0\u05D9\u05D5\u05EA, \u05E7\u05E8\u05E0\u05D5\u05EA \u05E0\u05D0\u05DE\u05E0\u05D5\u05EA, \u05D4\u05E0\u05E4\u05E7\u05D5\u05EA, \u05E0\u05D2\u05D6\u05E8\u05D9\u05DD. \u05E9\u05D9\u05E4\u05E5 \u05D0\u05EA \u05DE\u05E1\u05DA \u05D4\u05D1\u05D9\u05EA \u05D5\u05DE\u05D5\u05D3\u05D5\u05DC \u05E7\u05E8\u05E0\u05D5\u05EA \u05D4\u05E0\u05D0\u05DE\u05E0\u05D5\u05EA \u05DC\u05DE\u05D9\u05DC\u05D9\u05D5\u05E0\u05D9 \u05DE\u05E9\u05EA\u05DE\u05E9\u05D9\u05DD.",
            "projects.caastle.desc": "\u05E4\u05DC\u05D8\u05E4\u05D5\u05E8\u05DE\u05EA \u05D4\u05E9\u05DB\u05E8\u05EA \u05D1\u05D2\u05D3\u05D9\u05DD \u05E2\u05DD \u05EA\u05D5\u05D5\u05D9\u05EA \u05DC\u05D1\u05E0\u05D4 \u05DC\u05E9\u05D5\u05E7 \u05D4\u05D0\u05DE\u05E8\u05D9\u05E7\u05D0\u05D9. \u05EA\u05DB\u05E0\u05DF \u05D0\u05EA \u05DE\u05E2\u05E8\u05DB\u05EA SaaS \u05D4\u05DE\u05D5\u05D3\u05D5\u05DC\u05E8\u05D9\u05EA \u05D5\u05D4\u05E0\u05D9\u05EA\u05E0\u05EA \u05DC\u05D4\u05EA\u05D0\u05DE\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA \u05D4\u05DE\u05E4\u05E2\u05D9\u05DC\u05D4 \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D5\u05EA \u05DE\u05D5\u05EA\u05D2\u05D9\u05DD \u05DE\u05E8\u05D5\u05D1\u05D9\u05DD.",
            "projects.enterprise.desc": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05E0\u05D9\u05D4\u05D5\u05DC \u05D5\u05E0\u05D9\u05D8\u05D5\u05E8 \u05DB\u05D5\u05D7 \u05D0\u05D3\u05DD \u05DC-Apache Industrial Services, \u05D1\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D1\u05D0\u05E8\u05D4\"\u05D1.",
            "projects.xo3.desc": "\u05DE\u05E9\u05D7\u05E7 \u05D0\u05E7\u05E1-\u05D0\u05D5 \u05DC\u05D7\u05E7\u05D9\u05E8\u05EA SwiftUI, Combine \u05D5-MultipeerConnectivity. \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DD iOS 26+ \u05D5-Swift 6.",
            "projects.appstore": "\u05E6\u05E4\u05D4 \u05D1-App Store",
            "projects.github": "\u05E6\u05E4\u05D4 \u05D1-GitHub",

            /* ── Skills ── */
            "skills.label": "\u05D0\u05E8\u05D2\u05D6 \u05DB\u05DC\u05D9\u05DD",
            "skills.heading": "\u05D8\u05DB\u05E0\u05D5\u05DC\u05D5\u05D2\u05D9\u05D5\u05EA \u05D5\u05DB\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u05D0\u05E8\u05DB\u05D9\u05D8\u05E7\u05D8\u05D5\u05E8\u05D4",
            "skills.ai": "AI \u05D5\u05D7\u05E7\u05D9\u05E8\u05D4",
            "skills.tooling": "\u05DB\u05DC\u05D9\u05DD \u05D5\u05EA\u05D4\u05DC\u05D9\u05DB\u05D9\u05DD",
            "skills.leadership": "\u05DE\u05E0\u05D4\u05D9\u05D2\u05D5\u05EA",

            /* ── Open Source ── */
            "oss.label": "\u05E7\u05D5\u05D3 \u05E4\u05EA\u05D5\u05D7",
            "oss.heading": "\u05D1-GitHub",
            "oss.timbaktoe": "\u05DE\u05E9\u05D7\u05E7 \u05D0\u05E7\u05E1-\u05D0\u05D5 \u05DC\u05DC\u05DE\u05D9\u05D3\u05EA \u05D9\u05E1\u05D5\u05D3\u05D5\u05EA SwiftUI, Combine \u05D5-MultipeerConnectivity.",
            "oss.school": "\u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05D4\u05EA\u05D7\u05DC\u05D4 \u05DC\u05D4\u05D1\u05E0\u05EA \u05D3\u05E4\u05D5\u05E1\u05D9 SwiftUI \u05D5-Combine.",
            "oss.openpr": "\u05DB\u05DC\u05D9 \u05E9\u05D5\u05E8\u05EA \u05E4\u05E7\u05D5\u05D3\u05D4 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05D1\u05E7\u05E9\u05D5\u05EA \u05DE\u05E9\u05D9\u05DB\u05D4, \u05E0\u05D1\u05E0\u05D4 \u05E2\u05DD Swift Package Manager.",
            "oss.math": "\u05E1\u05E4\u05E8\u05D9\u05D9\u05EA \u05DB\u05DC\u05D9\u05DD \u05DE\u05EA\u05DE\u05D8\u05D9\u05D9\u05DD. 4 \u05E4\u05D5\u05E8\u05E7\u05D9\u05DD \u05D1-GitHub.",
            "oss.geo": "\u05DE\u05E2\u05D8\u05E4\u05EA \u05E7\u05DC\u05D4 \u05E1\u05D1\u05D9\u05D1 \u05DE\u05E2\u05E8\u05DB\u05EA iOS CoreLocation.",
            "oss.setup": "\u05E8\u05E9\u05D9\u05DE\u05EA \u05D1\u05D3\u05D9\u05E7\u05D4 \u05DC\u05D4\u05D2\u05D3\u05E8\u05EA \u05DE\u05DB\u05D5\u05E0\u05D5\u05EA \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D7\u05D3\u05E9\u05D5\u05EA.",

            /* ── Education ── */
            "edu.label": "\u05D4\u05E9\u05DB\u05DC\u05D4",
            "edu.heading": "\u05E8\u05E7\u05E2",
            "edu.degree": "\u05EA\u05D5\u05D0\u05E8 \u05E8\u05D0\u05E9\u05D5\u05DF, \u05DE\u05D3\u05E2\u05D9 \u05D4\u05DE\u05D7\u05E9\u05D1 \u05D5\u05D4\u05E0\u05D3\u05E1\u05D4",

            /* ── Off the clock ── */
            "offclock.label": "\u05D0\u05D7\u05E8\u05D9 \u05E9\u05E2\u05D5\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4",
            "offclock.heading": "\u05D4\u05E6\u05D3 \u05E9\u05DC\u05D0 \u05D4\u05E0\u05D3\u05E1\u05D4",
            "offclock.sports.title": "\u05DB\u05D3\u05D5\u05E8\u05D2\u05DC, \u05E9\u05D1\u05D9\u05DC\u05D9\u05DD \u05D5\u05E8\u05D9\u05E6\u05D4",
            "offclock.sports.desc": "\u05DB\u05D3\u05D5\u05E8\u05D2\u05DC \u05D1\u05E1\u05D5\u05E4\u05D9 \u05E9\u05D1\u05D5\u05E2, \u05D8\u05D9\u05D5\u05DC\u05D9\u05DD \u05DB\u05E9\u05D4\u05D4\u05E8\u05D9\u05DD \u05E7\u05D5\u05E8\u05D0\u05D9\u05DD, \u05E8\u05D9\u05E6\u05D4 \u05DB\u05E9\u05DC\u05D0. \u05DE\u05EA\u05D9\u05D9\u05D7\u05E1 \u05DC\u05D2\u05D5\u05E3 \u05DB\u05DE\u05D5 \u05E7\u05D5\u05D3 \u05D1\u05E4\u05E8\u05D5\u05D3\u05E7\u05E9\u05DF -- \u05D1\u05DC\u05D9 \u05E7\u05D9\u05E6\u05D5\u05E8\u05D9\u05DD, \u05D1\u05DC\u05D9 \u05D7\u05D5\u05D1\u05D5\u05EA \u05D8\u05DB\u05E0\u05D9\u05D9\u05DD.<span class=\"aside\">// \u05DC\u05D9\u05D5\u05DD \u05E8\u05D2\u05DC\u05D9\u05D9\u05DD \u05D0\u05D9\u05DF \u05D0\u05E1\u05D8\u05E8\u05D8\u05D2\u05D9\u05D9\u05EA \u05E0\u05E1\u05D9\u05D2\u05D4</span>",
            "offclock.fuel.title": "\u05D3\u05DC\u05E7 \u05E0\u05E7\u05D9 \u05D1\u05DC\u05D1\u05D3",
            "offclock.fuel.desc": "\u05D0\u05D5\u05DB\u05DC \u05D1\u05E8\u05D9\u05D0 -- \u05DC\u05D0 \"\u05D1\u05E2\u05E8\u05DA\", \u05D1\u05D0\u05DE\u05EA. \u05D1\u05DC\u05D9 \u05D0\u05DC\u05DB\u05D5\u05D4\u05D5\u05DC, \u05D1\u05DC\u05D9 \u05E2\u05D9\u05E9\u05D5\u05DF, \u05D1\u05DC\u05D9 \u05D0\u05E8\u05D5\u05D7\u05D5\u05EA \u05E8\u05DE\u05D0\u05D5\u05EA. \u05DE\u05EA\u05D9\u05D9\u05D7\u05E1 \u05DC\u05D2\u05D5\u05E3 \u05DB\u05EA\u05D4\u05DC\u05D9\u05DA \u05D0\u05E8\u05D5\u05DA \u05D8\u05D5\u05D5\u05D7: \u05D6\u05D1\u05DC \u05E0\u05DB\u05E0\u05E1, \u05D6\u05D1\u05DC \u05D9\u05D5\u05E6\u05D0.<span class=\"aside\">// \u05DE\u05DE\u05DC\u05D9\u05E5 \u05D1\u05D7\u05D5\u05DD \u05DC\u05D0\u05D7\u05E8\u05D9\u05DD \u05DC\u05D0\u05DE\u05E5 \u05D0\u05EA \u05D0\u05D5\u05E8\u05D7 \u05D4\u05D7\u05D9\u05D9\u05DD \u05D4\u05D6\u05D4 \u05D2\u05DD</span>",
            "offclock.geo.title": "\u05DE\u05E4\u05D5\u05EA, \u05DB\u05E1\u05E3 \u05D5\u05DB\u05D5\u05D7",
            "offclock.geo.desc": "\u05DE\u05D5\u05E7\u05E1\u05DD \u05DE\u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05D2\u05D9\u05D0\u05D5\u05E4\u05D5\u05DC\u05D9\u05D8\u05D9\u05D9\u05DD, \u05D4\u05D9\u05E1\u05D8\u05D5\u05E8\u05D9\u05D4, \u05D2\u05D0\u05D5\u05D2\u05E8\u05E4\u05D9\u05D4 \u05D5\u05DE\u05D2\u05DE\u05D5\u05EA \u05DB\u05DC\u05DB\u05DC\u05D9\u05D5\u05EA. \u05D0\u05D5\u05D4\u05D1 \u05DC\u05D7\u05D1\u05E8 \u05E0\u05E7\u05D5\u05D3\u05D5\u05EA \u05D1\u05D9\u05DF \u05DC\u05DE\u05D4 \u05D2\u05D1\u05D5\u05DC\u05D5\u05EA \u05D6\u05D6\u05D5 \u05D5\u05DC\u05D0\u05DF \u05D4\u05E9\u05D5\u05D5\u05E7\u05D9\u05DD \u05E4\u05D5\u05E0\u05D9\u05DD.<span class=\"aside\">// \u05D9\u05E1\u05D9\u05D8 \u05DB\u05DC \u05D0\u05E8\u05D5\u05D7\u05EA \u05E2\u05E8\u05D1 \u05DC\u05EA\u05D6\u05D4 \u05DE\u05D0\u05E7\u05E8\u05D5-\u05DB\u05DC\u05DB\u05DC\u05D9\u05EA</span>",
            "offclock.travel.title": "\u05D7\u05D5\u05EA\u05DE\u05D5\u05EA \u05D3\u05E8\u05DB\u05D5\u05DF",
            "offclock.travel.desc": "\u05D0\u05E1\u05E3 \u05DB\u05D5\u05D5\u05D9\u05D5\u05EA \u05E9\u05DE\u05E9 \u05D1\u05D3\u05E8\u05D5\u05DD-\u05DE\u05D6\u05E8\u05D7 \u05D0\u05E1\u05D9\u05D4 \u05D5\u05DE\u05E2\u05D1\u05E8. \u05DE\u05D0\u05DE\u05D9\u05DF \u05E9\u05D4\u05D3\u05D9\u05D1\u05D0\u05D2\u05D9\u05E0\u05D2 \u05D4\u05DB\u05D9 \u05D8\u05D5\u05D1 \u05E7\u05D5\u05E8\u05D4 \u05D1\u05D2\u05D5\u05D1\u05D4 \u05E9\u05DC 35,000 \u05E8\u05D2\u05DC.",
            "offclock.photo.title": "\u05E6\u05D9\u05DC\u05D5\u05DD",
            "offclock.photo.desc": "\u05E0\u05D4\u05E0\u05D4 \u05DC\u05EA\u05E4\u05D5\u05E1 \u05E8\u05D2\u05E2\u05D9\u05DD, \u05D1\u05E2\u05D9\u05E7\u05E8 \u05D1\u05DE\u05D4\u05DC\u05DA \u05E0\u05E1\u05D9\u05E2\u05D5\u05EA. \u05D0\u05D7\u05E1\u05D5\u05DF \u05D4\u05D8\u05DC\u05E4\u05D5\u05DF 80% \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA, 15% \u05DE\u05D8\u05DE\u05D5\u05DF Xcode, 5% \u05DE\u05E7\u05D5\u05DD \u05E4\u05E0\u05D5\u05D9 \u05D0\u05DE\u05D9\u05EA\u05D9.",
            "offclock.ideas.title": "\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05D5\u05D1\u05E0\u05D9\u05D9\u05D4",
            "offclock.ideas.desc": "\u05D7\u05D5\u05DC\u05DD \u05D1\u05D4\u05E7\u05D9\u05E5 \u05E2\u05DC \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05DC\u05D1\u05E0\u05D5\u05EA. \u05D0\u05E4\u05DC\u05D9\u05E7\u05E6\u05D9\u05D9\u05EA \u05D4\u05D4\u05E2\u05E8\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D1\"\u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05E9\u05DC \u05DE\u05D9\u05DC\u05D9\u05D5\u05DF \u05D3\u05D5\u05DC\u05E8\" -- \u05DC\u05D4\u05E9\u05D9\u05E7 \u05D0\u05D7\u05D3 \u05D9\u05D4\u05D9\u05D4 \u05E0\u05D7\u05DE\u05D3.<span class=\"aside\">// TODO: \u05EA\u05E9\u05D9\u05E7 \u05D0\u05D7\u05D3 \u05DE\u05D4\u05DD \u05D1\u05D0\u05DE\u05EA</span>",

            /* ── Contact ── */
            "contact.label": "\u05E7\u05E9\u05E8",
            "contact.heading": "\u05D1\u05D5\u05D0\u05D5 \u05E0\u05D1\u05E0\u05D4 \u05DE\u05E9\u05D4\u05D5",
            "contact.sub": "\u05E4\u05EA\u05D5\u05D7 \u05DC\u05E9\u05D9\u05D7\u05D5\u05EA \u05E2\u05DC iOS, AI, \u05E8\u05E2\u05D9\u05D5\u05E0\u05D5\u05EA \u05DE\u05D5\u05E6\u05E8, \u05D0\u05D5 \u05D1\u05E0\u05D9\u05D9\u05D4 \u05DE\u05E9\u05D5\u05EA\u05E4\u05EA.",
            "contact.alllinks": "\u05DB\u05DC \u05D4\u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",

            /* ── Footer ── */
            "footer.text": "\u05E2\u05D5\u05E6\u05D1 \u05D5\u05E0\u05D1\u05E0\u05D4 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D5\u05D9\u05E9\u05D0\u05DC \u05E1\u05D9\u05E0\u05D2",

            /* ── Links Overlay ── */
            "lo.professional": "\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9",
            "lo.portfolio": "\u05EA\u05D9\u05E7 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA",
            "lo.scan": "\u05E1\u05E8\u05D5\u05E7 &middot; \u05E9\u05D9\u05EA\u05D5\u05E3"
        },

        zh: {
            /* ── Nav ── */
            "nav.about": "\u5173\u4E8E",
            "nav.experience": "\u7ECF\u5386",
            "nav.projects": "\u9879\u76EE",
            "nav.skills": "\u6280\u80FD",
            "nav.contact": "\u8054\u7CFB",

            /* ── Hero ── */
            "hero.title": "<strong>\u5DE5\u7A0B\u5E08\u4E0E\u5EFA\u9020\u8005\u3002</strong>\u767D\u5929\u5F00\u53D1 iOS \u5E94\u7528\uFF0C<br>\u591C\u665A\u63A2\u7D22 AI \u548C\u4EA7\u54C1\u521B\u610F\u3002",
            "hero.location": "\u73ED\u52A0\u7F57\u5C14\uFF0C\u5370\u5EA6",
            "hero.builder": "AI \u589E\u5F3A\u578B\u5EFA\u9020\u8005",
            "hero.cta": "\u8054\u7CFB\u6211",

            /* ── About ── */
            "about.label": "\u5173\u4E8E",
            "about.heading": "\u5DE5\u827A\u3001\u597D\u5947\u5FC3<br>\u4E0E\u4EE3\u7801",
            "about.p1": "Vishal \u662F\u4E00\u4F4D <strong>\u9996\u5E2D iOS \u5DE5\u7A0B\u5E08</strong>\uFF0C\u70ED\u7231\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u4EA7\u54C1\u3002\u4ED6\u5728 <strong>\u91D1\u878D\u79D1\u6280\u3001\u5065\u5EB7\u79D1\u6280\u3001\u793E\u4EA4\u5A92\u4F53\u548C\u7535\u5B50\u5546\u52A1</strong> \u9886\u57DF\u4EA4\u4ED8\u4E86\u591A\u6B3E\u751F\u4EA7\u5E94\u7528 -- \u6BCF\u6B21\u90FD\u8BBE\u8BA1\u53EF\u6269\u5C55\u4E14\u6613\u4E8E\u7EF4\u62A4\u7684\u67B6\u6784\u3002",
            "about.p2": "\u4ED6\u88AB\u4EA7\u54C1\u7684\u201C\u4ECE\u96F6\u5230\u4E00\u201D\u9636\u6BB5\u6240\u5438\u5F15\uFF1A\u89C4\u5212\u6A21\u5757\u8FB9\u754C\u3001\u7528 Swift \u811A\u672C\u81EA\u52A8\u5316\u5DE5\u4F5C\u6D41\u3001\u5E76\u6307\u5BFC\u56E2\u961F\u81EA\u4FE1\u5730\u524D\u8FDB\u3002<strong>\u6574\u6D01\u7684\u4EE3\u7801\u548C\u53EF\u590D\u7528\u7EC4\u4EF6</strong>\u662F\u4E0D\u53EF\u534F\u5546\u7684\u3002",
            "about.p3": "\u76EE\u524D\u6B63\u5728\u63A2\u7D22 <strong>AI \u4E0E\u79FB\u52A8\u7AEF</strong> \u7684\u4EA4\u6C47 -- \u5B66\u4E60\u7F16\u6392 LLM\u3001\u4EE3\u7406\u548C AI \u5DE5\u5177\u4EE5\u500D\u589E\u751F\u4EA7\u529B\u3002\u957F\u671F\u76EE\u6807\u662F\u901A\u8FC7\u5C06\u5DE5\u7A0B\u5DE7\u601D\u4E0E AI \u589E\u5F3A\u7684\u5DE5\u4F5C\u6D41\u76F8\u7ED3\u5408\uFF0C<strong>\u66F4\u5FEB\u5730\u4EA4\u4ED8\u4EA7\u54C1</strong>\uFF0C\u5E76\u59CB\u7EC8\u5411\u4ED6\u4EBA\u5B66\u4E60\u3002",
            "about.stat.apps": "\u5DF2\u4EA4\u4ED8\u5E94\u7528",
            "about.stat.domains": "\u9886\u57DF",
            "about.stat.scratch": "\u4ECE\u96F6\u6784\u5EFA",
            "about.stat.curiosity": "\u597D\u5947\u5FC3",

            /* ── Career ── */
            "career.label": "\u804C\u4E1A",
            "career.heading": "\u8FC4\u4ECA\u4E3A\u6B62\u7684\u65C5\u7A0B",
            "career.current": "\u5728\u804C",

            "career.turnip.desc": "<ul><li>\u521B\u59CB\u5DE5\u7A0B\u56E2\u961F\u6210\u5458\uFF0C\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u5E94\u7528\u3002</li><li>\u4E0E\u4EA7\u54C1\u3001\u8BBE\u8BA1\u3001\u589E\u957F\u548C\u5DE5\u7A0B\u56E2\u961F\u8DE8\u804C\u80FD\u534F\u4F5C\uFF0C\u8D1F\u8D23\u6838\u5FC3\u529F\u80FD\uFF1A\u5F15\u5BFC\u3001\u4FE1\u606F\u6D41\u3001\u521B\u4F5C\u3001\u901A\u77E5\u548C\u56FE\u50CF\u5904\u7406\u3002</li></ul>",
            "career.novasignal.desc": "<ul><li>\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u4E86\u4E00\u6B3E\u673A\u5668\u4EBA\u533B\u7597\u8BBE\u5907\u7684 iOS \u4F34\u4FA3\u5E94\u7528\uFF0C\u7528\u4E8E\u6D4B\u91CF\u8111\u8840\u6D41\u3002</li><li>\u4E3A\u89C4\u6A21\u8BBE\u8BA1\u67B6\u6784\uFF1A\u53EF\u590D\u7528 UI \u7EC4\u4EF6\u3001\u6D4B\u8BD5\u4F18\u5148\u8BBE\u8BA1\u3001Xcode Cloud CI/CD \u6D41\u6C34\u7EBF\u3002</li></ul>",
            "career.paytm.desc": "<ul><li>\u5728 13-16 \u4EBA\u7684 iOS \u56E2\u961F\u4E2D\u62C5\u4EFB\u8D44\u6DF1\u5DE5\u7A0B\u5E08\uFF0C\u670D\u52A1\u4E8E\u4E00\u6B3E\u9AD8\u8BC4\u5206\u91D1\u878D\u79D1\u6280\u5E94\u7528\uFF084.3 \u661F\uFF09\u3002</li><li>\u91CD\u65B0\u8BBE\u8BA1\u4E86\u9996\u9875\u548C\u57FA\u91D1\u6A21\u5757\u3002\u6307\u5BFC\u5DE5\u7A0B\u5E08\u5E76\u4E3B\u5BFC\u4EE3\u7801\u8BC4\u5BA1\u3002</li></ul>",
            "career.caastle.desc": "<ul><li>\u4E3B\u5BFC\u4E86\u767D\u6807 SaaS \u5E73\u53F0\uFF08Gwynnie Bee\u3001Haverdash\uFF09\u7684\u67B6\u6784\uFF0C\u652F\u6301\u7F8E\u56FD\u670D\u88C5\u79DF\u8D41\u4E1A\u52A1\u3002</li><li>\u8BBE\u8BA1\u4E86\u901A\u8FC7\u7535\u5B50\u8868\u683C\u548C\u5185\u90E8 Swift \u811A\u672C\u81EA\u52A8\u5316\u7684\u52A8\u6001\u4E3B\u9898\u7CFB\u7EDF\u3002</li><li>\u642D\u5EFA\u4E86\u5355\u5143\u6D4B\u8BD5\u6846\u67B6\u548C CI/CD \u6D41\u6C34\u7EBF\u3002\u6307\u5BFC\u56E2\u961F\u5E76\u8F6C\u79FB\u67B6\u6784\u77E5\u8BC6\u3002</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u5728\u4F01\u4E1A\u548C\u521B\u610F\u9886\u57DF\u540C\u65F6\u4EA4\u4ED8\u591A\u6B3E\u5E94\u7528\uFF08Apache Industrial\u3001Duet App\u3001PropCube\uFF09\u3002</li><li>\u4ECE\u65B0\u4EBA\u6210\u957F\u4E3A 2 \u4EBA iOS \u56E2\u961F\u8D1F\u8D23\u4EBA\uFF0C\u5E76\u6307\u5BFC 4 \u540D\u65B0\u5458\u5DE5\u3002</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u4F5C\u54C1",
            "projects.heading": "\u5DF2\u4EA4\u4ED8\u7684\u5E94\u7528",
            "projects.domain.social": "\u793E\u4EA4",
            "projects.domain.health": "\u5065\u5EB7\u79D1\u6280",
            "projects.domain.fintech": "\u91D1\u878D\u79D1\u6280",
            "projects.domain.fashion": "\u65F6\u5C1A / SaaS",
            "projects.domain.enterprise": "\u4F01\u4E1A",
            "projects.domain.side": "\u4E2A\u4EBA\u9879\u76EE",
            "projects.turnip.desc": "\u4ECE\u96F6\u5F00\u59CB\u6784\u5EFA\u7684\u793E\u4EA4\u5E94\u7528 -- \u5F15\u5BFC\u3001\u4FE1\u606F\u6D41\u3001\u5185\u5BB9\u521B\u4F5C\u3001\u901A\u77E5\u548C\u56FE\u50CF\u5904\u7406\u3002\u4ECE\u7B2C\u4E00\u5929\u8D77\u8DE8\u804C\u80FD\u534F\u4F5C\u3002",
            "projects.novasignal.desc": "\u673A\u5668\u4EBA\u533B\u7597\u8BBE\u5907\u7684 iOS \u4F34\u4FA3\u5E94\u7528\u3002\u4F7F\u533B\u9662\u80FD\u591F\u8BBF\u95EE AI \u5904\u7406\u7684\u8111\u8840\u6D41\u6570\u636E\uFF0C\u7528\u4E8E\u4E2D\u98CE\u9884\u9632\u3002",
            "projects.paytm.desc": "\u5370\u5EA6\u9876\u7EA7\u6295\u8D44\u5E94\u7528\u4E4B\u4E00\u3002\u80A1\u7968\u3001\u57FA\u91D1\u3001IPO\u3001\u671F\u6743\u3002\u91CD\u65B0\u8BBE\u8BA1\u4E86\u9996\u9875\u548C\u57FA\u91D1\u6A21\u5757\uFF0C\u670D\u52A1\u6570\u767E\u4E07\u7528\u6237\u3002",
            "projects.caastle.desc": "\u9762\u5411\u7F8E\u56FD\u5E02\u573A\u7684\u767D\u6807\u670D\u88C5\u79DF\u8D41\u5E73\u53F0\u3002\u67B6\u6784\u4E86\u6A21\u5757\u5316\u3001\u53EF\u4E3B\u9898\u5316\u7684 SaaS \u6846\u67B6\uFF0C\u652F\u6301\u591A\u54C1\u724C\u5E94\u7528\u3002",
            "projects.enterprise.desc": "Apache Industrial Services \u7684\u4F01\u4E1A\u52B3\u52A8\u529B\u7BA1\u7406\u548C\u76D1\u63A7\u5E94\u7528\uFF0C\u5728\u7F8E\u56FD\u8FD0\u8425\u4E2D\u4F7F\u7528\u3002",
            "projects.xo3.desc": "\u4E00\u6B3E\u63A2\u7D22 SwiftUI\u3001Combine \u548C MultipeerConnectivity \u7684\u4E95\u5B57\u68CB\u6E38\u620F\u3002\u57FA\u4E8E iOS 26+ \u548C Swift 6 \u6784\u5EFA\u3002",
            "projects.appstore": "\u5728 App Store \u67E5\u770B",
            "projects.github": "\u5728 GitHub \u67E5\u770B",

            /* ── Skills ── */
            "skills.label": "\u5DE5\u5177\u7BB1",
            "skills.heading": "\u6280\u672F\u4E0E\u6280\u80FD",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u67B6\u6784",
            "skills.ai": "AI \u4E0E\u63A2\u7D22",
            "skills.tooling": "\u5DE5\u5177\u4E0E\u6D41\u7A0B",
            "skills.leadership": "\u9886\u5BFC\u529B",

            /* ── Open Source ── */
            "oss.label": "\u5F00\u6E90",
            "oss.heading": "\u5728 GitHub \u4E0A",
            "oss.timbaktoe": "\u4E00\u6B3E\u7528\u4E8E\u5B66\u4E60 SwiftUI\u3001Combine \u548C MultipeerConnectivity \u57FA\u7840\u7684\u4E95\u5B57\u68CB\u6E38\u620F\u3002",
            "oss.school": "\u7528\u4E8E\u7406\u89E3 SwiftUI \u548C Combine \u6A21\u5F0F\u7684\u5165\u95E8\u5E94\u7528\u3002",
            "oss.openpr": "\u7528\u4E8E\u521B\u5EFA\u62C9\u53D6\u8BF7\u6C42\u7684 CLI \u5DE5\u5177\uFF0C\u4F7F\u7528 Swift Package Manager \u6784\u5EFA\u3002",
            "oss.math": "\u6570\u5B66\u5DE5\u5177\u5E93\u3002GitHub \u4E0A\u6709 4 \u4E2A Fork\u3002",
            "oss.geo": "iOS CoreLocation \u6846\u67B6\u7684\u8F7B\u91CF\u7EA7\u5C01\u88C5\u3002",
            "oss.setup": "\u7528\u4E8E\u914D\u7F6E\u65B0\u5F00\u53D1\u673A\u5668\u7684\u6E05\u5355\u3002",

            /* ── Education ── */
            "edu.label": "\u6559\u80B2",
            "edu.heading": "\u80CC\u666F",
            "edu.degree": "\u8BA1\u7B97\u673A\u79D1\u5B66\u4E0E\u5DE5\u7A0B\u5B66\u58EB",

            /* ── Off the clock ── */
            "offclock.label": "\u5DE5\u4F5C\u4E4B\u4F59",
            "offclock.heading": "\u975E\u5DE5\u7A0B\u7684\u4E00\u9762",
            "offclock.sports.title": "\u8DB3\u7403\u3001\u5F92\u6B65\u4E0E\u8DD1\u6B65",
            "offclock.sports.desc": "\u5468\u672B\u8E22\u8DB3\u7403\uFF0C\u5C71\u53EC\u5524\u65F6\u5F92\u6B65\uFF0C\u5426\u5219\u8DD1\u6B65\u3002\u50CF\u5BF9\u5F85\u751F\u4EA7\u4EE3\u7801\u4E00\u6837\u5BF9\u5F85\u8EAB\u4F53 -- \u4E0D\u8D70\u6377\u5F84\uFF0C\u4E0D\u6B20\u6280\u672F\u503A\u3002<span class=\"aside\">// \u7EC3\u817F\u65E5\u6CA1\u6709\u56DE\u6EDA\u7B56\u7565</span>",
            "offclock.fuel.title": "\u53EA\u7528\u6E05\u6D01\u71C3\u6599",
            "offclock.fuel.desc": "\u5403\u5F97\u5E72\u51C0 -- \u4E0D\u662F\u201C\u5927\u90E8\u5206\u201D\uFF0C\u662F\u771F\u7684\u5E72\u51C0\u3002\u4E0D\u559D\u9152\u3001\u4E0D\u62BD\u70DF\u3001\u4E0D\u4F5C\u5F0A\u9910\u3002\u628A\u8EAB\u4F53\u5F53\u4F5C\u957F\u671F\u8FD0\u884C\u7684\u8FDB\u7A0B\uFF1A\u5783\u573E\u8FDB\uFF0C\u5783\u573E\u51FA\u3002<span class=\"aside\">// \u5F3A\u70C8\u5EFA\u8BAE\u5176\u4ED6\u4EBA\u4E5F\u91C7\u7EB3\u8FD9\u79CD\u751F\u6D3B\u65B9\u5F0F</span>",
            "offclock.geo.title": "\u5730\u56FE\u3001\u8D27\u5E01\u4E0E\u6743\u529B",
            "offclock.geo.desc": "\u5BF9\u5730\u7F18\u653F\u6CBB\u53D8\u5316\u3001\u5386\u53F2\u3001\u5730\u7406\u548C\u7ECF\u6D4E\u8D8B\u52BF\u7740\u8FF7\u3002\u559C\u6B22\u5C06\u8FB9\u754C\u79FB\u52A8\u7684\u539F\u56E0\u4E0E\u5E02\u573A\u8D70\u5411\u8054\u7CFB\u8D77\u6765\u3002<span class=\"aside\">// \u4F1A\u628A\u4EFB\u4F55\u665A\u9910\u5BF9\u8BDD\u5F15\u5411\u5B8F\u89C2\u8BBA\u70B9</span>",
            "offclock.travel.title": "\u62A4\u7167\u5370\u7AE0",
            "offclock.travel.desc": "\u5728\u4E1C\u5357\u4E9A\u53CA\u66F4\u8FDC\u7684\u5730\u65B9\u6536\u96C6\u4E86\u665A\u9700\u3002\u76F8\u4FE1\u6700\u597D\u7684\u8C03\u8BD5\u53D1\u751F\u5728 35,000 \u82F1\u5C3A\u7684\u9AD8\u7A7A\u3002",
            "offclock.photo.title": "\u6444\u5F71",
            "offclock.photo.desc": "\u559C\u6B22\u5728\u65C5\u884C\u65F6\u6355\u6349\u77AC\u95F4\u3002\u624B\u673A\u5B58\u50A8 80% \u662F\u7167\u7247\uFF0C15% \u662F Xcode \u7F13\u5B58\uFF0C5% \u662F\u5B9E\u9645\u53EF\u7528\u7A7A\u95F4\u3002",
            "offclock.ideas.title": "\u521B\u610F\u4E0E\u6784\u5EFA",
            "offclock.ideas.desc": "\u603B\u662F\u5728\u7574\u60F3\u8981\u6784\u5EFA\u7684\u4EA7\u54C1\u3002\u7B14\u8BB0\u5E94\u7528\u91CC\u586B\u6EE1\u4E86\u201C\u767E\u4E07\u7F8E\u5143\u521B\u610F\u201D -- \u80FD\u4EA4\u4ED8\u4E00\u4E2A\u5C31\u597D\u4E86\u3002<span class=\"aside\">// TODO: \u771F\u7684\u4EA4\u4ED8\u5176\u4E2D\u4E00\u4E2A</span>",

            /* ── Contact ── */
            "contact.label": "\u8054\u7CFB",
            "contact.heading": "\u4E00\u8D77\u6784\u5EFA\u70B9\u4EC0\u4E48",
            "contact.sub": "\u6B22\u8FCE\u5C31 iOS\u3001AI\u3001\u4EA7\u54C1\u521B\u610F\u6216\u5408\u4F5C\u6784\u5EFA\u8FDB\u884C\u4EA4\u6D41\u3002",
            "contact.alllinks": "\u6240\u6709\u94FE\u63A5",

            /* ── Footer ── */
            "footer.text": "\u7531 Vishal Singh \u8BBE\u8BA1\u5E76\u6784\u5EFA",

            /* ── Links Overlay ── */
            "lo.professional": "\u4E13\u4E1A",
            "lo.portfolio": "\u4F5C\u54C1\u96C6",
            "lo.scan": "\u626B\u7801 &middot; \u5206\u4EAB"
        },

        th: {
            /* ── Nav ── */
            "nav.about": "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A",
            "nav.experience": "\u0E1B\u0E23\u0E30\u0E2A\u0E1A\u0E01\u0E32\u0E23\u0E13\u0E4C",
            "nav.projects": "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C",
            "nav.skills": "\u0E17\u0E31\u0E01\u0E29\u0E30",
            "nav.contact": "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",

            /* ── Hero ── */
            "hero.title": "<strong>\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E41\u0E25\u0E30\u0E19\u0E31\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07</strong> \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E2D\u0E1B iOS \u0E43\u0E19\u0E40\u0E27\u0E25\u0E32\u0E01\u0E25\u0E32\u0E07\u0E27\u0E31\u0E19<br>\u0E17\u0E14\u0E25\u0E2D\u0E07\u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22 AI \u0E41\u0E25\u0E30\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E43\u0E19\u0E15\u0E2D\u0E19\u0E01\u0E25\u0E32\u0E07\u0E04\u0E37\u0E19",
            "hero.location": "\u0E40\u0E1A\u0E07\u0E01\u0E32\u0E25\u0E39\u0E23\u0E39, \u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22",
            "hero.builder": "\u0E19\u0E31\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E17\u0E35\u0E48\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E14\u0E49\u0E27\u0E22 AI",
            "hero.cta": "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",

            /* ── About ── */
            "about.label": "\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A",
            "about.heading": "\u0E1D\u0E35\u0E21\u0E37\u0E2D \u0E04\u0E27\u0E32\u0E21\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49<br>\u0E41\u0E25\u0E30\u0E42\u0E04\u0E49\u0E14",
            "about.p1": "Vishal \u0E40\u0E1B\u0E47\u0E19 <strong>\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23 iOS \u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2A\u0E39\u0E07</strong> \u0E17\u0E35\u0E48\u0E23\u0E31\u0E01\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E28\u0E39\u0E19\u0E22\u0E4C \u0E40\u0E02\u0E32\u0E44\u0E14\u0E49\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E41\u0E2D\u0E1B\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E08\u0E23\u0E34\u0E07\u0E43\u0E19 <strong>\u0E1F\u0E34\u0E19\u0E40\u0E17\u0E04 \u0E40\u0E2E\u0E25\u0E17\u0E4C\u0E40\u0E17\u0E04 \u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25\u0E21\u0E35\u0E40\u0E14\u0E35\u0E22 \u0E41\u0E25\u0E30\u0E2D\u0E35\u0E04\u0E2D\u0E21\u0E40\u0E21\u0E34\u0E23\u0E4C\u0E0B</strong> -- \u0E17\u0E38\u0E01\u0E04\u0E23\u0E31\u0E49\u0E07\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E17\u0E35\u0E48\u0E02\u0E22\u0E32\u0E22\u0E44\u0E14\u0E49\u0E41\u0E25\u0E30\u0E14\u0E39\u0E41\u0E25\u0E23\u0E31\u0E01\u0E29\u0E32\u0E07\u0E48\u0E32\u0E22",
            "about.p2": "\u0E40\u0E02\u0E32\u0E2A\u0E19\u0E43\u0E08\u0E0A\u0E48\u0E27\u0E07 \"\u0E28\u0E39\u0E19\u0E22\u0E4C\u0E2A\u0E39\u0E48\u0E2B\u0E19\u0E36\u0E48\u0E07\" \u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C: \u0E27\u0E32\u0E07\u0E02\u0E2D\u0E1A\u0E40\u0E02\u0E15\u0E42\u0E21\u0E14\u0E39\u0E25 \u0E2D\u0E2D\u0E42\u0E15\u0E40\u0E21\u0E17\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01\u0E42\u0E1F\u0E25\u0E27\u0E4C\u0E14\u0E49\u0E27\u0E22\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C Swift \u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E43\u0E2B\u0E49\u0E17\u0E35\u0E21\u0E17\u0E33\u0E07\u0E32\u0E19\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E21\u0E31\u0E48\u0E19\u0E43\u0E08 <strong>\u0E42\u0E04\u0E49\u0E14\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E41\u0E25\u0E30\u0E04\u0E2D\u0E21\u0E42\u0E1E\u0E40\u0E19\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E0B\u0E49\u0E33\u0E44\u0E14\u0E49</strong> \u0E40\u0E1B\u0E47\u0E19\u0E2A\u0E34\u0E48\u0E07\u0E17\u0E35\u0E48\u0E15\u0E48\u0E2D\u0E23\u0E2D\u0E07\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49",
            "about.p3": "\u0E01\u0E33\u0E25\u0E31\u0E07\u0E2A\u0E33\u0E23\u0E27\u0E08\u0E08\u0E38\u0E14\u0E15\u0E31\u0E14\u0E02\u0E2D\u0E07 <strong>AI \u0E41\u0E25\u0E30\u0E21\u0E37\u0E2D\u0E16\u0E37\u0E2D</strong> -- \u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23 LLM \u0E40\u0E2D\u0E40\u0E08\u0E19\u0E15\u0E4C \u0E41\u0E25\u0E30\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D AI \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E1B\u0E23\u0E30\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E20\u0E32\u0E1E \u0E40\u0E1B\u0E49\u0E32\u0E2B\u0E21\u0E32\u0E22\u0E23\u0E30\u0E22\u0E30\u0E22\u0E32\u0E27\u0E04\u0E37\u0E2D\u0E01\u0E32\u0E23 <strong>\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E40\u0E23\u0E47\u0E27\u0E02\u0E36\u0E49\u0E19</strong> \u0E42\u0E14\u0E22\u0E1C\u0E2A\u0E32\u0E19\u0E1D\u0E35\u0E21\u0E37\u0E2D\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E01\u0E31\u0E1A\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01\u0E42\u0E1F\u0E25\u0E27\u0E4C\u0E17\u0E35\u0E48\u0E02\u0E31\u0E1A\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E14\u0E49\u0E27\u0E22 AI \u0E41\u0E25\u0E30\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E08\u0E32\u0E01\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E40\u0E2A\u0E21\u0E2D",
            "about.stat.apps": "\u0E41\u0E2D\u0E1B\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A",
            "about.stat.domains": "\u0E2A\u0E32\u0E02\u0E32",
            "about.stat.scratch": "\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E08\u0E32\u0E01\u0E28\u0E39\u0E19\u0E22\u0E4C",
            "about.stat.curiosity": "\u0E04\u0E27\u0E32\u0E21\u0E2D\u0E22\u0E32\u0E01\u0E23\u0E39\u0E49",

            /* ── Career ── */
            "career.label": "\u0E2D\u0E32\u0E0A\u0E35\u0E1E",
            "career.heading": "\u0E40\u0E2A\u0E49\u0E19\u0E17\u0E32\u0E07\u0E08\u0E19\u0E16\u0E36\u0E07\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",
            "career.current": "\u0E1B\u0E31\u0E08\u0E08\u0E38\u0E1A\u0E31\u0E19",

            "career.turnip.desc": "<ul><li>\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01\u0E17\u0E35\u0E21\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E1C\u0E39\u0E49\u0E01\u0E48\u0E2D\u0E15\u0E31\u0E49\u0E07 \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E2D\u0E1B\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E28\u0E39\u0E19\u0E22\u0E4C</li><li>\u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E49\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E01\u0E31\u0E1A\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C \u0E14\u0E35\u0E44\u0E0B\u0E19\u0E4C \u0E01\u0E32\u0E23\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21\u0E43\u0E19\u0E1F\u0E35\u0E40\u0E08\u0E2D\u0E23\u0E4C\u0E2B\u0E25\u0E31\u0E01: \u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 \u0E1F\u0E35\u0E14 \u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25\u0E20\u0E32\u0E1E</li></ul>",
            "career.novasignal.desc": "<ul><li>\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E41\u0E2D\u0E1B iOS \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E2B\u0E38\u0E48\u0E19\u0E22\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E27\u0E31\u0E14\u0E01\u0E32\u0E23\u0E44\u0E2B\u0E25\u0E40\u0E27\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E43\u0E19\u0E2A\u0E21\u0E2D\u0E07\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E28\u0E39\u0E19\u0E22\u0E4C</li><li>\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E02\u0E22\u0E32\u0E22: UI \u0E04\u0E2D\u0E21\u0E42\u0E1E\u0E40\u0E19\u0E19\u0E15\u0E4C\u0E17\u0E35\u0E48\u0E43\u0E0A\u0E49\u0E0B\u0E49\u0E33\u0E44\u0E14\u0E49 \u0E01\u0E32\u0E23\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E40\u0E19\u0E49\u0E19\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E01\u0E48\u0E2D\u0E19 \u0E44\u0E1B\u0E1B\u0E4C\u0E44\u0E25\u0E19\u0E4C Xcode Cloud CI/CD</li></ul>",
            "career.paytm.desc": "<ul><li>\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E2D\u0E32\u0E27\u0E38\u0E42\u0E2A\u0E43\u0E19\u0E17\u0E35\u0E21 iOS 13-16 \u0E04\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E41\u0E2D\u0E1B\u0E1F\u0E34\u0E19\u0E40\u0E17\u0E04\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21 (4.3 \u0E14\u0E32\u0E27)</li><li>\u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E2B\u0E25\u0E31\u0E01\u0E41\u0E25\u0E30\u0E42\u0E21\u0E14\u0E39\u0E25\u0E01\u0E2D\u0E07\u0E17\u0E38\u0E19\u0E23\u0E27\u0E21 \u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E19\u0E33\u0E01\u0E32\u0E23\u0E23\u0E35\u0E27\u0E34\u0E27\u0E42\u0E04\u0E49\u0E14</li></ul>",
            "career.caastle.desc": "<ul><li>\u0E19\u0E33\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21 SaaS \u0E41\u0E1A\u0E1A\u0E44\u0E27\u0E17\u0E4C\u0E40\u0E25\u0E40\u0E1A\u0E25 (Gwynnie Bee, Haverdash) \u0E17\u0E35\u0E48\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E48\u0E32\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32\u0E43\u0E19\u0E2A\u0E2B\u0E23\u0E31\u0E10</li><li>\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E23\u0E30\u0E1A\u0E1A\u0E18\u0E35\u0E21\u0E41\u0E1A\u0E1A\u0E44\u0E14\u0E19\u0E32\u0E21\u0E34\u0E01\u0E17\u0E35\u0E48\u0E2D\u0E2D\u0E42\u0E15\u0E40\u0E21\u0E17\u0E1C\u0E48\u0E32\u0E19\u0E2A\u0E40\u0E1B\u0E23\u0E14\u0E0A\u0E35\u0E15\u0E41\u0E25\u0E30\u0E2A\u0E04\u0E23\u0E34\u0E1B\u0E15\u0E4C Swift \u0E20\u0E32\u0E22\u0E43\u0E19</li><li>\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E40\u0E1F\u0E23\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01\u0E01\u0E32\u0E23\u0E17\u0E14\u0E2A\u0E2D\u0E1A\u0E2B\u0E19\u0E48\u0E27\u0E22\u0E41\u0E25\u0E30\u0E44\u0E1B\u0E1B\u0E4C\u0E44\u0E25\u0E19\u0E4C CI/CD \u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E41\u0E25\u0E30\u0E16\u0E48\u0E32\u0E22\u0E17\u0E2D\u0E14\u0E04\u0E27\u0E32\u0E21\u0E23\u0E39\u0E49\u0E14\u0E49\u0E32\u0E19\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E41\u0E2D\u0E1B\u0E2B\u0E25\u0E32\u0E22\u0E15\u0E31\u0E27\u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E01\u0E31\u0E19\u0E17\u0E31\u0E49\u0E07\u0E43\u0E19\u0E14\u0E49\u0E32\u0E19\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23\u0E41\u0E25\u0E30\u0E04\u0E23\u0E35\u0E40\u0E2D\u0E17\u0E35\u0E1F (Apache Industrial, Duet App, PropCube)</li><li>\u0E40\u0E15\u0E34\u0E1A\u0E42\u0E15\u0E08\u0E32\u0E01\u0E19\u0E49\u0E2D\u0E07\u0E43\u0E2B\u0E21\u0E48\u0E2A\u0E39\u0E48\u0E01\u0E32\u0E23\u0E19\u0E33\u0E17\u0E35\u0E21 iOS 2 \u0E04\u0E19\u0E41\u0E25\u0E30\u0E40\u0E1B\u0E47\u0E19\u0E1E\u0E35\u0E48\u0E40\u0E25\u0E35\u0E49\u0E22\u0E07\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E43\u0E2B\u0E21\u0E48 4 \u0E04\u0E19</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u0E1C\u0E25\u0E07\u0E32\u0E19",
            "projects.heading": "\u0E41\u0E2D\u0E1B\u0E17\u0E35\u0E48\u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A",
            "projects.domain.social": "\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25",
            "projects.domain.health": "\u0E40\u0E2E\u0E25\u0E17\u0E4C\u0E40\u0E17\u0E04",
            "projects.domain.fintech": "\u0E1F\u0E34\u0E19\u0E40\u0E17\u0E04",
            "projects.domain.fashion": "\u0E41\u0E1F\u0E0A\u0E31\u0E48\u0E19 / SaaS",
            "projects.domain.enterprise": "\u0E2D\u0E07\u0E04\u0E4C\u0E01\u0E23",
            "projects.domain.side": "\u0E42\u0E1B\u0E23\u0E40\u0E08\u0E01\u0E15\u0E4C\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27",
            "projects.turnip.desc": "\u0E41\u0E2D\u0E1B\u0E42\u0E0B\u0E40\u0E0A\u0E35\u0E22\u0E25\u0E17\u0E35\u0E48\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E08\u0E32\u0E01\u0E28\u0E39\u0E19\u0E22\u0E4C -- \u0E01\u0E32\u0E23\u0E25\u0E07\u0E17\u0E30\u0E40\u0E1A\u0E35\u0E22\u0E19 \u0E1F\u0E35\u0E14 \u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E40\u0E19\u0E37\u0E49\u0E2D\u0E2B\u0E32 \u0E41\u0E08\u0E49\u0E07\u0E40\u0E15\u0E37\u0E2D\u0E19 \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25\u0E20\u0E32\u0E1E \u0E17\u0E33\u0E07\u0E32\u0E19\u0E02\u0E49\u0E32\u0E21\u0E2A\u0E32\u0E22\u0E07\u0E32\u0E19\u0E15\u0E31\u0E49\u0E07\u0E41\u0E15\u0E48\u0E27\u0E31\u0E19\u0E41\u0E23\u0E01",
            "projects.novasignal.desc": "\u0E41\u0E2D\u0E1B iOS \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2D\u0E38\u0E1B\u0E01\u0E23\u0E13\u0E4C\u0E41\u0E1E\u0E17\u0E22\u0E4C\u0E2B\u0E38\u0E48\u0E19\u0E22\u0E19\u0E15\u0E4C \u0E0A\u0E48\u0E27\u0E22\u0E43\u0E2B\u0E49\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E40\u0E02\u0E49\u0E32\u0E16\u0E36\u0E07\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E01\u0E32\u0E23\u0E44\u0E2B\u0E25\u0E40\u0E27\u0E35\u0E22\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E43\u0E19\u0E2A\u0E21\u0E2D\u0E07\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E30\u0E21\u0E27\u0E25\u0E1C\u0E25\u0E14\u0E49\u0E27\u0E22 AI \u0E40\u0E1E\u0E37\u0E48\u0E2D\u0E1B\u0E49\u0E2D\u0E07\u0E01\u0E31\u0E19\u0E42\u0E23\u0E04\u0E2B\u0E25\u0E2D\u0E14\u0E40\u0E25\u0E37\u0E2D\u0E14\u0E2A\u0E21\u0E2D\u0E07",
            "projects.paytm.desc": "\u0E41\u0E2D\u0E1B\u0E25\u0E07\u0E17\u0E38\u0E19\u0E22\u0E2D\u0E14\u0E19\u0E34\u0E22\u0E21\u0E02\u0E2D\u0E07\u0E2D\u0E34\u0E19\u0E40\u0E14\u0E35\u0E22 \u0E2B\u0E38\u0E49\u0E19 \u0E01\u0E2D\u0E07\u0E17\u0E38\u0E19\u0E23\u0E27\u0E21 IPO F&O \u0E1B\u0E23\u0E31\u0E1A\u0E1B\u0E23\u0E38\u0E07\u0E2B\u0E19\u0E49\u0E32\u0E08\u0E2D\u0E2B\u0E25\u0E31\u0E01\u0E41\u0E25\u0E30\u0E42\u0E21\u0E14\u0E39\u0E25\u0E01\u0E2D\u0E07\u0E17\u0E38\u0E19\u0E23\u0E27\u0E21\u0E43\u0E2B\u0E49\u0E1A\u0E23\u0E34\u0E01\u0E32\u0E23\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E2B\u0E25\u0E32\u0E22\u0E25\u0E49\u0E32\u0E19\u0E04\u0E19",
            "projects.caastle.desc": "\u0E41\u0E1E\u0E25\u0E15\u0E1F\u0E2D\u0E23\u0E4C\u0E21\u0E40\u0E0A\u0E48\u0E32\u0E40\u0E2A\u0E37\u0E49\u0E2D\u0E1C\u0E49\u0E32\u0E44\u0E27\u0E17\u0E4C\u0E40\u0E25\u0E40\u0E1A\u0E25\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E25\u0E32\u0E14\u0E2A\u0E2B\u0E23\u0E31\u0E10 \u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E40\u0E1F\u0E23\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01 SaaS \u0E41\u0E1A\u0E1A\u0E42\u0E21\u0E14\u0E39\u0E25\u0E32\u0E23\u0E4C\u0E17\u0E35\u0E48\u0E1B\u0E23\u0E31\u0E1A\u0E18\u0E35\u0E21\u0E44\u0E14\u0E49\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2B\u0E25\u0E32\u0E22\u0E41\u0E1A\u0E23\u0E19\u0E14\u0E4C",
            "projects.enterprise.desc": "\u0E41\u0E2D\u0E1B\u0E08\u0E31\u0E14\u0E01\u0E32\u0E23\u0E41\u0E25\u0E30\u0E15\u0E34\u0E14\u0E15\u0E32\u0E21\u0E1E\u0E19\u0E31\u0E01\u0E07\u0E32\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A Apache Industrial Services \u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19\u0E43\u0E19\u0E2A\u0E2B\u0E23\u0E31\u0E10",
            "projects.xo3.desc": "\u0E40\u0E01\u0E21\u0E17\u0E34\u0E01\u0E41\u0E17\u0E47\u0E01\u0E42\u0E17\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E33\u0E23\u0E27\u0E08 SwiftUI, Combine \u0E41\u0E25\u0E30 MultipeerConnectivity \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22 iOS 26+ \u0E41\u0E25\u0E30 Swift 6",
            "projects.appstore": "\u0E14\u0E39\u0E1A\u0E19 App Store",
            "projects.github": "\u0E14\u0E39\u0E1A\u0E19 GitHub",

            /* ── Skills ── */
            "skills.label": "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D",
            "skills.heading": "\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35\u0E41\u0E25\u0E30\u0E17\u0E31\u0E01\u0E29\u0E30",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u0E2A\u0E16\u0E32\u0E1B\u0E31\u0E15\u0E22\u0E01\u0E23\u0E23\u0E21",
            "skills.ai": "AI \u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E33\u0E23\u0E27\u0E08",
            "skills.tooling": "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D\u0E41\u0E25\u0E30\u0E01\u0E23\u0E30\u0E1A\u0E27\u0E19\u0E01\u0E32\u0E23",
            "skills.leadership": "\u0E20\u0E32\u0E27\u0E30\u0E1C\u0E39\u0E49\u0E19\u0E33",

            /* ── Open Source ── */
            "oss.label": "\u0E42\u0E2D\u0E40\u0E1E\u0E19\u0E0B\u0E2D\u0E23\u0E4C\u0E2A",
            "oss.heading": "\u0E1A\u0E19 GitHub",
            "oss.timbaktoe": "\u0E40\u0E01\u0E21\u0E17\u0E34\u0E01\u0E41\u0E17\u0E47\u0E01\u0E42\u0E17\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E23\u0E35\u0E22\u0E19\u0E23\u0E39\u0E49\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19 SwiftUI, Combine \u0E41\u0E25\u0E30 MultipeerConnectivity",
            "oss.school": "\u0E41\u0E2D\u0E1B\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E17\u0E33\u0E04\u0E27\u0E32\u0E21\u0E40\u0E02\u0E49\u0E32\u0E43\u0E08\u0E41\u0E1E\u0E17\u0E40\u0E17\u0E34\u0E23\u0E4C\u0E19 SwiftUI \u0E41\u0E25\u0E30 Combine",
            "oss.openpr": "\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E21\u0E37\u0E2D CLI \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E2A\u0E23\u0E49\u0E32\u0E07 Pull Request \u0E2A\u0E23\u0E49\u0E32\u0E07\u0E14\u0E49\u0E27\u0E22 Swift Package Manager",
            "oss.math": "\u0E44\u0E25\u0E1A\u0E23\u0E32\u0E23\u0E35\u0E22\u0E39\u0E17\u0E34\u0E25\u0E34\u0E15\u0E35\u0E49\u0E04\u0E13\u0E34\u0E15\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E21\u0E35 4 Fork \u0E1A\u0E19 GitHub",
            "oss.geo": "\u0E15\u0E31\u0E27\u0E04\u0E23\u0E2D\u0E1A\u0E40\u0E1A\u0E32\u0E46 \u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E40\u0E1F\u0E23\u0E21\u0E40\u0E27\u0E34\u0E23\u0E4C\u0E01 iOS CoreLocation",
            "oss.setup": "\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E33\u0E2B\u0E23\u0E31\u0E1A\u0E15\u0E31\u0E49\u0E07\u0E04\u0E48\u0E32\u0E40\u0E04\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E1E\u0E31\u0E12\u0E19\u0E32\u0E43\u0E2B\u0E21\u0E48",

            /* ── Education ── */
            "edu.label": "\u0E01\u0E32\u0E23\u0E28\u0E36\u0E01\u0E29\u0E32",
            "edu.heading": "\u0E1E\u0E37\u0E49\u0E19\u0E10\u0E32\u0E19",
            "edu.degree": "\u0E1B\u0E23\u0E34\u0E0D\u0E0D\u0E32\u0E15\u0E23\u0E35\u0E27\u0E34\u0E17\u0E22\u0E32\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C\u0E1A\u0E31\u0E13\u0E11\u0E34\u0E15 \u0E27\u0E34\u0E17\u0E22\u0E32\u0E01\u0E32\u0E23\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E41\u0E25\u0E30\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21",

            /* ── Off the clock ── */
            "offclock.label": "\u0E19\u0E2D\u0E01\u0E40\u0E27\u0E25\u0E32\u0E07\u0E32\u0E19",
            "offclock.heading": "\u0E14\u0E49\u0E32\u0E19\u0E17\u0E35\u0E48\u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48\u0E27\u0E34\u0E28\u0E27\u0E01\u0E23\u0E23\u0E21",
            "offclock.sports.title": "\u0E1F\u0E38\u0E15\u0E1A\u0E2D\u0E25 \u0E40\u0E14\u0E34\u0E19\u0E1B\u0E48\u0E32 \u0E41\u0E25\u0E30\u0E27\u0E34\u0E48\u0E07",
            "offclock.sports.desc": "\u0E40\u0E25\u0E48\u0E19\u0E1F\u0E38\u0E15\u0E1A\u0E2D\u0E25\u0E27\u0E31\u0E19\u0E2B\u0E22\u0E38\u0E14 \u0E40\u0E14\u0E34\u0E19\u0E1B\u0E48\u0E32\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E20\u0E39\u0E40\u0E02\u0E32\u0E40\u0E23\u0E35\u0E22\u0E01 \u0E27\u0E34\u0E48\u0E07\u0E40\u0E21\u0E37\u0E48\u0E2D\u0E44\u0E21\u0E48\u0E44\u0E14\u0E49\u0E44\u0E1B \u0E14\u0E39\u0E41\u0E25\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E40\u0E2B\u0E21\u0E37\u0E2D\u0E19\u0E42\u0E04\u0E49\u0E14\u0E42\u0E1B\u0E23\u0E14\u0E31\u0E01\u0E0A\u0E31\u0E19 -- \u0E44\u0E21\u0E48\u0E25\u0E31\u0E14 \u0E44\u0E21\u0E48\u0E2A\u0E30\u0E2A\u0E21\u0E2B\u0E19\u0E35\u0E49\u0E17\u0E32\u0E07\u0E40\u0E17\u0E04\u0E19\u0E34\u0E04<span class=\"aside\">// Leg day \u0E44\u0E21\u0E48\u0E21\u0E35\u0E01\u0E25\u0E22\u0E38\u0E17\u0E18\u0E4C\u0E22\u0E49\u0E2D\u0E19\u0E01\u0E25\u0E31\u0E1A</span>",
            "offclock.fuel.title": "\u0E40\u0E0A\u0E37\u0E49\u0E2D\u0E40\u0E1E\u0E25\u0E34\u0E07\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E40\u0E17\u0E48\u0E32\u0E19\u0E31\u0E49\u0E19",
            "offclock.fuel.desc": "\u0E01\u0E34\u0E19\u0E2A\u0E30\u0E2D\u0E32\u0E14 -- \u0E44\u0E21\u0E48\u0E43\u0E0A\u0E48 \"\u0E2A\u0E48\u0E27\u0E19\u0E43\u0E2B\u0E0D\u0E48\" \u0E41\u0E15\u0E48\u0E2A\u0E30\u0E2D\u0E32\u0E14\u0E08\u0E23\u0E34\u0E07\u0E46 \u0E44\u0E21\u0E48\u0E14\u0E37\u0E48\u0E21 \u0E44\u0E21\u0E48\u0E2A\u0E39\u0E1A \u0E44\u0E21\u0E48\u0E42\u0E01\u0E07\u0E21\u0E37\u0E49\u0E2D \u0E21\u0E2D\u0E07\u0E23\u0E48\u0E32\u0E07\u0E01\u0E32\u0E22\u0E40\u0E1B\u0E47\u0E19\u0E42\u0E1B\u0E23\u0E40\u0E0B\u0E2A\u0E23\u0E30\u0E22\u0E30\u0E22\u0E32\u0E27: \u0E02\u0E22\u0E30\u0E40\u0E02\u0E49\u0E32 \u0E02\u0E22\u0E30\u0E2D\u0E2D\u0E01<span class=\"aside\">// \u0E41\u0E19\u0E30\u0E19\u0E33\u0E2D\u0E22\u0E48\u0E32\u0E07\u0E22\u0E34\u0E48\u0E07\u0E43\u0E2B\u0E49\u0E04\u0E19\u0E2D\u0E37\u0E48\u0E19\u0E17\u0E33\u0E15\u0E32\u0E21\u0E14\u0E49\u0E27\u0E22</span>",
            "offclock.geo.title": "\u0E41\u0E1C\u0E19\u0E17\u0E35\u0E48 \u0E40\u0E07\u0E34\u0E19 \u0E41\u0E25\u0E30\u0E2D\u0E33\u0E19\u0E32\u0E08",
            "offclock.geo.desc": "\u0E2B\u0E25\u0E07\u0E43\u0E2B\u0E25\u0E43\u0E19\u0E01\u0E32\u0E23\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E41\u0E1B\u0E25\u0E07\u0E17\u0E32\u0E07\u0E20\u0E39\u0E21\u0E34\u0E23\u0E31\u0E10\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E20\u0E39\u0E21\u0E34\u0E28\u0E32\u0E2A\u0E15\u0E23\u0E4C \u0E41\u0E25\u0E30\u0E41\u0E19\u0E27\u0E42\u0E19\u0E49\u0E21\u0E40\u0E28\u0E23\u0E29\u0E10\u0E01\u0E34\u0E08 \u0E0A\u0E2D\u0E1A\u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E21\u0E42\u0E22\u0E07\u0E08\u0E38\u0E14\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E23\u0E30\u0E2B\u0E27\u0E48\u0E32\u0E07\u0E01\u0E32\u0E23\u0E40\u0E04\u0E25\u0E37\u0E48\u0E2D\u0E19\u0E22\u0E49\u0E32\u0E22\u0E02\u0E2D\u0E07\u0E1E\u0E23\u0E21\u0E41\u0E14\u0E19\u0E41\u0E25\u0E30\u0E17\u0E34\u0E28\u0E17\u0E32\u0E07\u0E02\u0E2D\u0E07\u0E15\u0E25\u0E32\u0E14<span class=\"aside\">// \u0E08\u0E30\u0E40\u0E1B\u0E25\u0E35\u0E48\u0E22\u0E19\u0E17\u0E38\u0E01\u0E1A\u0E17\u0E2A\u0E19\u0E17\u0E19\u0E32\u0E21\u0E37\u0E49\u0E2D\u0E04\u0E48\u0E33\u0E40\u0E1B\u0E47\u0E19\u0E40\u0E23\u0E37\u0E48\u0E2D\u0E07\u0E40\u0E28\u0E23\u0E29\u0E10\u0E01\u0E34\u0E08\u0E21\u0E2B\u0E20\u0E32\u0E04</span>",
            "offclock.travel.title": "\u0E15\u0E23\u0E32\u0E1B\u0E23\u0E30\u0E17\u0E31\u0E1A\u0E1E\u0E32\u0E2A\u0E1B\u0E2D\u0E23\u0E4C\u0E15",
            "offclock.travel.desc": "\u0E40\u0E01\u0E47\u0E1A\u0E2A\u0E30\u0E2A\u0E21\u0E23\u0E2D\u0E22\u0E41\u0E14\u0E14\u0E17\u0E31\u0E48\u0E27\u0E40\u0E2D\u0E40\u0E0A\u0E35\u0E22\u0E15\u0E30\u0E27\u0E31\u0E19\u0E2D\u0E2D\u0E01\u0E40\u0E09\u0E35\u0E22\u0E07\u0E43\u0E15\u0E49\u0E41\u0E25\u0E30\u0E17\u0E35\u0E48\u0E2D\u0E37\u0E48\u0E19\u0E46 \u0E40\u0E0A\u0E37\u0E48\u0E2D\u0E27\u0E48\u0E32\u0E01\u0E32\u0E23\u0E14\u0E35\u0E1A\u0E31\u0E01\u0E17\u0E35\u0E48\u0E14\u0E35\u0E17\u0E35\u0E48\u0E2A\u0E38\u0E14\u0E40\u0E01\u0E34\u0E14\u0E02\u0E36\u0E49\u0E19\u0E17\u0E35\u0E48\u0E04\u0E27\u0E32\u0E21\u0E2A\u0E39\u0E07 35,000 \u0E1F\u0E38\u0E15",
            "offclock.photo.title": "\u0E16\u0E48\u0E32\u0E22\u0E20\u0E32\u0E1E",
            "offclock.photo.desc": "\u0E0A\u0E2D\u0E1A\u0E40\u0E01\u0E47\u0E1A\u0E20\u0E32\u0E1E\u0E0A\u0E48\u0E27\u0E07\u0E40\u0E27\u0E25\u0E32\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E2A\u0E48\u0E27\u0E19\u0E43\u0E2B\u0E0D\u0E48\u0E15\u0E2D\u0E19\u0E40\u0E14\u0E34\u0E19\u0E17\u0E32\u0E07 \u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C 80% \u0E40\u0E1B\u0E47\u0E19\u0E23\u0E39\u0E1B 15% \u0E41\u0E04\u0E0A Xcode 5% \u0E1E\u0E37\u0E49\u0E19\u0E17\u0E35\u0E48\u0E27\u0E48\u0E32\u0E07\u0E08\u0E23\u0E34\u0E07",
            "offclock.ideas.title": "\u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E41\u0E25\u0E30\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07",
            "offclock.ideas.desc": "\u0E1D\u0E31\u0E19\u0E16\u0E36\u0E07\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E32\u0E01\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E22\u0E39\u0E48\u0E40\u0E2A\u0E21\u0E2D \u0E41\u0E2D\u0E1B\u0E42\u0E19\u0E49\u0E15\u0E40\u0E15\u0E47\u0E21\u0E44\u0E1B\u0E14\u0E49\u0E27\u0E22 \"\u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E25\u0E49\u0E32\u0E19\u0E14\u0E2D\u0E25\u0E25\u0E32\u0E23\u0E4C\" -- \u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E2A\u0E31\u0E01\u0E2D\u0E31\u0E19\u0E01\u0E47\u0E14\u0E35<span class=\"aside\">// TODO: \u0E2A\u0E48\u0E07\u0E21\u0E2D\u0E1A\u0E2A\u0E31\u0E01\u0E2D\u0E31\u0E19\u0E08\u0E23\u0E34\u0E07\u0E46</span>",

            /* ── Contact ── */
            "contact.label": "\u0E15\u0E34\u0E14\u0E15\u0E48\u0E2D",
            "contact.heading": "\u0E21\u0E32\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2D\u0E30\u0E44\u0E23\u0E14\u0E49\u0E27\u0E22\u0E01\u0E31\u0E19",
            "contact.sub": "\u0E40\u0E1B\u0E34\u0E14\u0E23\u0E31\u0E1A\u0E01\u0E32\u0E23\u0E1E\u0E39\u0E14\u0E04\u0E38\u0E22\u0E40\u0E01\u0E35\u0E48\u0E22\u0E27\u0E01\u0E31\u0E1A iOS, AI, \u0E44\u0E2D\u0E40\u0E14\u0E35\u0E22\u0E1C\u0E25\u0E34\u0E15\u0E20\u0E31\u0E13\u0E11\u0E4C \u0E2B\u0E23\u0E37\u0E2D\u0E01\u0E32\u0E23\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E2A\u0E34\u0E48\u0E07\u0E15\u0E48\u0E32\u0E07\u0E46 \u0E23\u0E48\u0E27\u0E21\u0E01\u0E31\u0E19",
            "contact.alllinks": "\u0E25\u0E34\u0E07\u0E01\u0E4C\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14",

            /* ── Footer ── */
            "footer.text": "\u0E2D\u0E2D\u0E01\u0E41\u0E1A\u0E1A\u0E41\u0E25\u0E30\u0E2A\u0E23\u0E49\u0E32\u0E07\u0E42\u0E14\u0E22 Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "\u0E21\u0E37\u0E2D\u0E2D\u0E32\u0E0A\u0E35\u0E1E",
            "lo.portfolio": "\u0E1C\u0E25\u0E07\u0E32\u0E19",
            "lo.scan": "\u0E2A\u0E41\u0E01\u0E19 &middot; \u0E41\u0E0A\u0E23\u0E4C"
        },

        es: {
            /* ── Nav ── */
            "nav.about": "Acerca",
            "nav.experience": "Experiencia",
            "nav.projects": "Proyectos",
            "nav.skills": "Habilidades",
            "nav.contact": "Contacto",

            /* ── Hero ── */
            "hero.title": "<strong>Ingeniero y constructor.</strong> Crea apps iOS de día,<br>experimenta con IA e ideas de producto de noche.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "Constructor potenciado por IA",
            "hero.cta": "Contactar",

            /* ── About ── */
            "about.label": "Acerca",
            "about.heading": "Oficio, curiosidad<br>y código",
            "about.p1": "Vishal es un <strong>Ingeniero iOS Principal</strong> que ama construir cosas desde cero. Ha lanzado apps en producción en <strong>fintech, health-tech, redes sociales y comercio electrónico</strong> -- cada vez diseñando arquitecturas escalables y mantenibles.",
            "about.p2": "Le atrae la fase de \"cero a uno\" de los productos: definir límites de módulos, automatizar flujos de trabajo con scripts Swift y mentorear equipos para avanzar con confianza. <strong>Código limpio y componentes reutilizables</strong> son innegociables.",
            "about.p3": "Actualmente explorando la intersección de <strong>IA y móvil</strong> -- aprendiendo a orquestar LLMs, agentes y herramientas de IA para multiplicar la productividad. El objetivo a largo plazo es <strong>lanzar productos más rápido</strong> combinando ingeniería con flujos potenciados por IA, siempre aprendiendo de otros.",
            "about.stat.apps": "Apps lanzadas",
            "about.stat.domains": "Dominios",
            "about.stat.scratch": "Desde cero",
            "about.stat.curiosity": "Curiosidad",

            /* ── Career ── */
            "career.label": "Carrera",
            "career.heading": "El camino hasta ahora",
            "career.current": "actual",

            "career.turnip.desc": "<ul><li>Parte del equipo fundador de ingeniería, construyendo la app desde cero.</li><li>Trabajo multifuncional con producto, diseño, crecimiento e ingeniería en funciones clave: onboarding, feed, creación, notificaciones y procesamiento de imágenes.</li></ul>",
            "career.novasignal.desc": "<ul><li>Construyó la app iOS complementaria desde cero para un dispositivo médico robótico que mide el flujo sanguíneo cerebral.</li><li>Arquitectura escalable: componentes UI reutilizables, diseño test-first, pipeline CI/CD con Xcode Cloud.</li></ul>",
            "career.paytm.desc": "<ul><li>Ingeniero senior en un equipo iOS de 13-16 personas para una app fintech de alta calificación (4.3 estrellas).</li><li>Rediseñó la pantalla principal y el módulo de fondos mutuos. Mentoró ingenieros y lideró revisiones de código.</li></ul>",
            "career.caastle.desc": "<ul><li>Lideró la arquitectura de una plataforma SaaS marca blanca (Gwynnie Bee, Haverdash) para alquiler de ropa en EE.UU.</li><li>Diseñó un sistema de temas dinámico automatizado mediante hojas de cálculo y scripts Swift internos.</li><li>Configuró el framework de pruebas unitarias y el pipeline CI/CD. Mentoró al equipo y transfirió conocimiento arquitectónico.</li></ul>",
            "career.moldedbits.desc": "<ul><li>Lanzó múltiples apps simultáneamente en dominios empresariales y creativos (Apache Industrial, Duet App, PropCube).</li><li>Creció de recién graduado a líder de un equipo iOS de 2 personas y mentor de 4 nuevos empleados.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Trabajo",
            "projects.heading": "Apps lanzadas",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Moda / SaaS",
            "projects.domain.enterprise": "Empresarial",
            "projects.domain.side": "Proyecto personal",
            "projects.turnip.desc": "App social construida desde cero -- onboarding, feed, creación de contenido, notificaciones y procesamiento de imágenes. Colaboración multifuncional desde el día uno.",
            "projects.novasignal.desc": "Complemento iOS para un dispositivo médico robótico. Permite a hospitales acceder a datos de flujo sanguíneo cerebral procesados por IA para prevención de ictus.",
            "projects.paytm.desc": "Una de las apps de inversión mejor valoradas de India. Acciones, fondos mutuos, IPOs, F&O. Rediseño de la pantalla principal y módulo de fondos para millones de usuarios.",
            "projects.caastle.desc": "Plataforma de alquiler de ropa marca blanca para el mercado estadounidense. Arquitectura del framework SaaS modular y personalizable para múltiples marcas.",
            "projects.enterprise.desc": "App empresarial de gestión y monitoreo de personal para Apache Industrial Services, utilizada en operaciones en EE.UU.",
            "projects.xo3.desc": "Un juego de tres en raya explorando SwiftUI, Combine y MultipeerConnectivity. Construido con iOS 26+ y Swift 6.",
            "projects.appstore": "Ver en App Store",
            "projects.github": "Ver en GitHub",

            /* ── Skills ── */
            "skills.label": "Herramientas",
            "skills.heading": "Tecnologías y habilidades",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Arquitectura",
            "skills.ai": "IA y exploración",
            "skills.tooling": "Herramientas y procesos",
            "skills.leadership": "Liderazgo",

            /* ── Open Source ── */
            "oss.label": "Código abierto",
            "oss.heading": "En GitHub",
            "oss.timbaktoe": "Un juego de tres en raya para aprender los fundamentos de SwiftUI, Combine y MultipeerConnectivity.",
            "oss.school": "App inicial para entender patrones de SwiftUI y Combine.",
            "oss.openpr": "Herramienta CLI para crear pull requests, construida con Swift Package Manager.",
            "oss.math": "Biblioteca de utilidades matemáticas. 4 forks en GitHub.",
            "oss.geo": "Wrapper ligero sobre el framework iOS CoreLocation.",
            "oss.setup": "Lista de verificación para configurar máquinas de desarrollo nuevas.",

            /* ── Education ── */
            "edu.label": "Educación",
            "edu.heading": "Formación",
            "edu.degree": "B.Tech, Ciencias de la Computación e Ingeniería",

            /* ── Off the clock ── */
            "offclock.label": "Fuera del trabajo",
            "offclock.heading": "Lo no-ingenieril",
            "offclock.sports.title": "Fútbol, senderos y kilómetros",
            "offclock.sports.desc": "Fútbol los fines de semana, senderismo cuando las montañas llaman, correr cuando no. Trata el cuerpo como código en producción -- sin atajos, sin deuda técnica.<span class=\"aside\">// El día de piernas no tiene estrategia de rollback</span>",
            "offclock.fuel.title": "Solo combustible limpio",
            "offclock.fuel.desc": "Come limpio -- no \"mayormente\", realmente limpio. Sin alcohol, sin tabaco, sin comidas trampa. Ve el cuerpo como un proceso de larga duración: basura entra, basura sale.<span class=\"aside\">// Recomienda encarecidamente que otros adopten este estilo de vida</span>",
            "offclock.geo.title": "Mapas, dinero y poder",
            "offclock.geo.desc": "Fascinado por los cambios geopolíticos, la historia, la geografía y las tendencias económicas. Le encanta conectar los puntos entre por qué se movieron las fronteras y hacia dónde van los mercados.<span class=\"aside\">// Desviará cualquier cena hacia una tesis macroeconómica</span>",
            "offclock.travel.title": "Sellos en el pasaporte",
            "offclock.travel.desc": "Ha coleccionado quemaduras de sol por el sudeste asiático y más allá. Cree que la mejor depuración ocurre a 35,000 pies de altura.",
            "offclock.photo.title": "Fotografía",
            "offclock.photo.desc": "Disfruta capturando momentos, sobre todo viajando. El almacenamiento del teléfono es 80% fotos, 15% caché de Xcode, 5% espacio libre real.",
            "offclock.ideas.title": "Ideas y construcción",
            "offclock.ideas.desc": "Constantemente soñando con productos para construir. Tiene una app de notas llena de \"ideas de un millón de dólares\" -- lanzar una estaría bien.<span class=\"aside\">// TODO: realmente lanzar una de estas</span>",

            /* ── Contact ── */
            "contact.label": "Conectar",
            "contact.heading": "Construyamos algo",
            "contact.sub": "Abierto a conversaciones sobre iOS, IA, ideas de producto o construir cosas juntos.",
            "contact.alllinks": "Todos los enlaces",

            /* ── Footer ── */
            "footer.text": "Diseñado y construido por Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profesional",
            "lo.portfolio": "Portafolio",
            "lo.scan": "Escanear &middot; Compartir"
        },

        pt: {
            /* ── Nav ── */
            "nav.about": "Sobre",
            "nav.experience": "Experi\u00EAncia",
            "nav.projects": "Projetos",
            "nav.skills": "Habilidades",
            "nav.contact": "Contato",

            /* ── Hero ── */
            "hero.title": "<strong>Engenheiro e construtor.</strong> Cria apps iOS de dia,<br>experimenta com IA e ideias de produto \u00E0 noite.",
            "hero.location": "Bengaluru, \u00CDndia",
            "hero.builder": "Construtor potencializado por IA",
            "hero.cta": "Entre em contato",

            /* ── About ── */
            "about.label": "Sobre",
            "about.heading": "Arte, curiosidade<br>e c\u00F3digo",
            "about.p1": "Vishal \u00E9 um <strong>Engenheiro iOS Principal</strong> que adora construir coisas do zero. Ele lan\u00E7ou apps em produ\u00E7\u00E3o em <strong>fintech, health-tech, m\u00EDdia social e e-commerce</strong> -- sempre projetando arquiteturas escal\u00E1veis e sustent\u00E1veis.",
            "about.p2": "Ele \u00E9 atra\u00EDdo pela fase \"do zero ao um\" dos produtos: definir limites de m\u00F3dulos, automatizar fluxos de trabalho com scripts Swift e mentorar equipes para avan\u00E7ar com confian\u00E7a. <strong>C\u00F3digo limpo e componentes reutiliz\u00E1veis</strong> s\u00E3o inegoci\u00E1veis.",
            "about.p3": "Atualmente explorando a interse\u00E7\u00E3o de <strong>IA e mobile</strong> -- aprendendo a orquestrar LLMs, agentes e ferramentas de IA para multiplicar a produtividade. O objetivo de longo prazo \u00E9 <strong>lan\u00E7ar produtos mais r\u00E1pido</strong> combinando engenharia com fluxos potencializados por IA, sempre aprendendo com outros.",
            "about.stat.apps": "Apps lan\u00E7ados",
            "about.stat.domains": "Dom\u00EDnios",
            "about.stat.scratch": "Do zero",
            "about.stat.curiosity": "Curiosidade",

            /* ── Career ── */
            "career.label": "Carreira",
            "career.heading": "A jornada at\u00E9 aqui",
            "career.current": "atual",

            "career.turnip.desc": "<ul><li>Parte da equipe fundadora de engenharia, construindo o app do zero.</li><li>Trabalho multifuncional com produto, design, crescimento e engenharia em funcionalidades-chave: onboarding, feed, cria\u00E7\u00E3o, notifica\u00E7\u00F5es e processamento de imagens.</li></ul>",
            "career.novasignal.desc": "<ul><li>Construiu o app iOS complementar do zero para um dispositivo m\u00E9dico rob\u00F3tico que mede o fluxo sangu\u00EDneo cerebral.</li><li>Arquitetura escal\u00E1vel: componentes UI reutiliz\u00E1veis, design test-first, pipeline CI/CD com Xcode Cloud.</li></ul>",
            "career.paytm.desc": "<ul><li>Engenheiro s\u00EAnior em uma equipe iOS de 13-16 pessoas para um app fintech de alta classifica\u00E7\u00E3o (4,3 estrelas).</li><li>Redesenhou a tela principal e o m\u00F3dulo de fundos m\u00FAtuos. Mentorou engenheiros e liderou revis\u00F5es de c\u00F3digo.</li></ul>",
            "career.caastle.desc": "<ul><li>Liderou a arquitetura de uma plataforma SaaS marca branca (Gwynnie Bee, Haverdash) para aluguel de roupas nos EUA.</li><li>Projetou um sistema de temas din\u00E2mico automatizado via planilhas e scripts Swift internos.</li><li>Configurou o framework de testes unit\u00E1rios e o pipeline CI/CD. Mentorou a equipe e transferiu conhecimento arquitet\u00F4nico.</li></ul>",
            "career.moldedbits.desc": "<ul><li>Lan\u00E7ou m\u00FAltiplos apps simultaneamente em dom\u00EDnios empresariais e criativos (Apache Industrial, Duet App, PropCube).</li><li>Cresceu de rec\u00E9m-formado a l\u00EDder de uma equipe iOS de 2 pessoas e mentor de 4 novos funcion\u00E1rios.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Trabalho",
            "projects.heading": "Apps lan\u00E7ados",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Moda / SaaS",
            "projects.domain.enterprise": "Empresarial",
            "projects.domain.side": "Projeto pessoal",
            "projects.turnip.desc": "App social constru\u00EDdo do zero -- onboarding, feed, cria\u00E7\u00E3o de conte\u00FAdo, notifica\u00E7\u00F5es e processamento de imagens. Colabora\u00E7\u00E3o multifuncional desde o primeiro dia.",
            "projects.novasignal.desc": "Complemento iOS para um dispositivo m\u00E9dico rob\u00F3tico. Permite que hospitais acessem dados de fluxo sangu\u00EDneo cerebral processados por IA para preven\u00E7\u00E3o de AVC.",
            "projects.paytm.desc": "Um dos apps de investimento mais bem avaliados da \u00CDndia. A\u00E7\u00F5es, fundos m\u00FAtuos, IPOs, F&O. Redesenho da tela principal e m\u00F3dulo de fundos para milh\u00F5es de usu\u00E1rios.",
            "projects.caastle.desc": "Plataforma de aluguel de roupas marca branca para o mercado americano. Arquitetura do framework SaaS modular e personaliz\u00E1vel para m\u00FAltiplas marcas.",
            "projects.enterprise.desc": "App empresarial de gest\u00E3o e monitoramento de pessoal para Apache Industrial Services, utilizado em opera\u00E7\u00F5es nos EUA.",
            "projects.xo3.desc": "Um jogo da velha explorando SwiftUI, Combine e MultipeerConnectivity. Constru\u00EDdo com iOS 26+ e Swift 6.",
            "projects.appstore": "Ver na App Store",
            "projects.github": "Ver no GitHub",

            /* ── Skills ── */
            "skills.label": "Ferramentas",
            "skills.heading": "Tecnologias e habilidades",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Arquitetura",
            "skills.ai": "IA e explora\u00E7\u00E3o",
            "skills.tooling": "Ferramentas e processos",
            "skills.leadership": "Lideran\u00E7a",

            /* ── Open Source ── */
            "oss.label": "C\u00F3digo aberto",
            "oss.heading": "No GitHub",
            "oss.timbaktoe": "Um jogo da velha para aprender os fundamentos de SwiftUI, Combine e MultipeerConnectivity.",
            "oss.school": "App inicial para entender padr\u00F5es de SwiftUI e Combine.",
            "oss.openpr": "Ferramenta CLI para criar pull requests, constru\u00EDda com Swift Package Manager.",
            "oss.math": "Biblioteca de utilit\u00E1rios matem\u00E1ticos. 4 forks no GitHub.",
            "oss.geo": "Wrapper leve sobre o framework iOS CoreLocation.",
            "oss.setup": "Checklist para configurar m\u00E1quinas de desenvolvimento novas.",

            /* ── Education ── */
            "edu.label": "Educa\u00E7\u00E3o",
            "edu.heading": "Forma\u00E7\u00E3o",
            "edu.degree": "B.Tech, Ci\u00EAncia da Computa\u00E7\u00E3o e Engenharia",

            /* ── Off the clock ── */
            "offclock.label": "Fora do trabalho",
            "offclock.heading": "O lado n\u00E3o-engenheiro",
            "offclock.sports.title": "Futebol, trilhas e corridas",
            "offclock.sports.desc": "Futebol nos fins de semana, caminhadas quando as montanhas chamam, corrida quando n\u00E3o. Trata o corpo como c\u00F3digo em produ\u00E7\u00E3o -- sem atalhos, sem d\u00EDvida t\u00E9cnica.<span class=\"aside\">// Dia de perna n\u00E3o tem estrat\u00E9gia de rollback</span>",
            "offclock.fuel.title": "S\u00F3 combust\u00EDvel limpo",
            "offclock.fuel.desc": "Come limpo -- n\u00E3o \"na maioria\", realmente limpo. Sem \u00E1lcool, sem cigarro, sem refei\u00E7\u00F5es trapaceiras. V\u00EA o corpo como um processo de longa dura\u00E7\u00E3o: lixo entra, lixo sai.<span class=\"aside\">// Recomenda fortemente que outros adotem esse estilo de vida</span>",
            "offclock.geo.title": "Mapas, dinheiro e poder",
            "offclock.geo.desc": "Fascinado por mudan\u00E7as geopol\u00EDticas, hist\u00F3ria, geografia e tend\u00EAncias econ\u00F4micas. Adora conectar os pontos entre por que as fronteiras se moveram e para onde os mercados est\u00E3o indo.<span class=\"aside\">// Vai desviar qualquer jantar para uma tese macroecon\u00F4mica</span>",
            "offclock.travel.title": "Carimbos no passaporte",
            "offclock.travel.desc": "Colecionou queimaduras de sol pelo sudeste asi\u00E1tico e al\u00E9m. Acredita que a melhor depura\u00E7\u00E3o acontece a 35.000 p\u00E9s de altura.",
            "offclock.photo.title": "Fotografia",
            "offclock.photo.desc": "Gosta de capturar momentos, principalmente viajando. O armazenamento do celular \u00E9 80% fotos, 15% cache do Xcode, 5% espa\u00E7o livre real.",
            "offclock.ideas.title": "Ideias e constru\u00E7\u00E3o",
            "offclock.ideas.desc": "Constantemente sonhando com produtos para construir. Tem um app de notas cheio de \"ideias de um milh\u00E3o de d\u00F3lares\" -- lan\u00E7ar uma seria bom.<span class=\"aside\">// TODO: realmente lan\u00E7ar uma dessas</span>",

            /* ── Contact ── */
            "contact.label": "Conectar",
            "contact.heading": "Vamos construir algo",
            "contact.sub": "Aberto a conversas sobre iOS, IA, ideias de produto ou construir coisas juntos.",
            "contact.alllinks": "Todos os links",

            /* ── Footer ── */
            "footer.text": "Projetado e constru\u00EDdo por Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profissional",
            "lo.portfolio": "Portf\u00F3lio",
            "lo.scan": "Escanear &middot; Compartilhar"
        },

        fr: {
            /* ── Nav ── */
            "nav.about": "\u00C0 propos",
            "nav.experience": "Exp\u00E9rience",
            "nav.projects": "Projets",
            "nav.skills": "Comp\u00E9tences",
            "nav.contact": "Contact",

            /* ── Hero ── */
            "hero.title": "<strong>Ing\u00E9nieur et cr\u00E9ateur.</strong> D\u00E9veloppe des apps iOS le jour,<br>exp\u00E9rimente avec l'IA et des id\u00E9es produit la nuit.",
            "hero.location": "Bengaluru, Inde",
            "hero.builder": "Cr\u00E9ateur augment\u00E9 par l'IA",
            "hero.cta": "Me contacter",

            /* ── About ── */
            "about.label": "\u00C0 propos",
            "about.heading": "Savoir-faire, curiosit\u00E9<br>et code",
            "about.p1": "Vishal est un <strong>Ing\u00E9nieur iOS Principal</strong> passionn\u00E9 par la cr\u00E9ation de produits de z\u00E9ro. Il a livr\u00E9 des apps en production dans la <strong>fintech, la health-tech, les r\u00E9seaux sociaux et le e-commerce</strong> -- \u00E0 chaque fois en concevant une architecture \u00E9volutive et maintenable.",
            "about.p2": "Il est attir\u00E9 par la phase \"de z\u00E9ro \u00E0 un\" des produits : d\u00E9finir les limites des modules, automatiser les workflows avec des scripts Swift et encadrer les \u00E9quipes. <strong>Code propre et composants r\u00E9utilisables</strong> sont non n\u00E9gociables.",
            "about.p3": "Explore actuellement l'intersection de l'<strong>IA et du mobile</strong> -- apprend \u00E0 orchestrer des LLM, des agents et des outils IA pour multiplier la productivit\u00E9. L'objectif \u00E0 long terme est de <strong>livrer des produits plus vite</strong> en combinant l'ing\u00E9nierie avec des workflows augment\u00E9s par l'IA, tout en apprenant des autres.",
            "about.stat.apps": "Apps livr\u00E9es",
            "about.stat.domains": "Domaines",
            "about.stat.scratch": "Cr\u00E9\u00E9 de z\u00E9ro",
            "about.stat.curiosity": "Curiosit\u00E9",

            /* ── Career ── */
            "career.label": "Carri\u00E8re",
            "career.heading": "Le parcours jusqu'ici",
            "career.current": "actuel",

            "career.turnip.desc": "<ul><li>Membre de l'\u00E9quipe fondatrice d'ing\u00E9nierie, construction de l'app de z\u00E9ro.</li><li>Travail transversal avec produit, design, croissance et ing\u00E9nierie sur les fonctionnalit\u00E9s cl\u00E9s : onboarding, feed, cr\u00E9ation, notifications et traitement d'images.</li></ul>",
            "career.novasignal.desc": "<ul><li>A construit l'app iOS compagnon de z\u00E9ro pour un dispositif m\u00E9dical robotique mesurant le flux sanguin c\u00E9r\u00E9bral.</li><li>Architecture \u00E9volutive : composants UI r\u00E9utilisables, conception test-first, pipeline CI/CD Xcode Cloud.</li></ul>",
            "career.paytm.desc": "<ul><li>Ing\u00E9nieur senior dans une \u00E9quipe iOS de 13-16 personnes pour une app fintech de premier plan (4,3 \u00E9toiles).</li><li>A repens\u00E9 l'\u00E9cran d'accueil et le module de fonds communs. A encadr\u00E9 des ing\u00E9nieurs et dirig\u00E9 les revues de code.</li></ul>",
            "career.caastle.desc": "<ul><li>A dirig\u00E9 l'architecture d'une plateforme SaaS en marque blanche (Gwynnie Bee, Haverdash) pour la location de v\u00EAtements aux \u00C9tats-Unis.</li><li>A con\u00E7u un syst\u00E8me de th\u00E8mes dynamique automatis\u00E9 via des feuilles de calcul et des scripts Swift internes.</li><li>A mis en place le framework de tests unitaires et le pipeline CI/CD. A encadr\u00E9 l'\u00E9quipe et transf\u00E9r\u00E9 les connaissances architecturales.</li></ul>",
            "career.moldedbits.desc": "<ul><li>A lanc\u00E9 plusieurs apps simultan\u00E9ment dans les domaines entreprise et cr\u00E9atif (Apache Industrial, Duet App, PropCube).</li><li>A \u00E9volu\u00E9 de d\u00E9butant \u00E0 leader d'une \u00E9quipe iOS de 2 personnes et mentor de 4 nouvelles recrues.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Travaux",
            "projects.heading": "Apps livr\u00E9es",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Mode / SaaS",
            "projects.domain.enterprise": "Entreprise",
            "projects.domain.side": "Projet personnel",
            "projects.turnip.desc": "App sociale construite de z\u00E9ro -- onboarding, feed, cr\u00E9ation de contenu, notifications et traitement d'images. Collaboration transversale d\u00E8s le premier jour.",
            "projects.novasignal.desc": "Compagnon iOS pour un dispositif m\u00E9dical robotique. Permet aux h\u00F4pitaux d'acc\u00E9der aux donn\u00E9es de flux sanguin c\u00E9r\u00E9bral trait\u00E9es par IA pour la pr\u00E9vention des AVC.",
            "projects.paytm.desc": "L'une des apps d'investissement les mieux not\u00E9es d'Inde. Actions, fonds communs, IPO, F&O. Refonte de l'\u00E9cran d'accueil et du module de fonds pour des millions d'utilisateurs.",
            "projects.caastle.desc": "Plateforme de location de v\u00EAtements en marque blanche pour le march\u00E9 am\u00E9ricain. Architecture du framework SaaS modulaire et personnalisable pour plusieurs marques.",
            "projects.enterprise.desc": "App de gestion et suivi du personnel pour Apache Industrial Services, utilis\u00E9e dans les op\u00E9rations aux \u00C9tats-Unis.",
            "projects.xo3.desc": "Un morpion explorant SwiftUI, Combine et MultipeerConnectivity. Construit avec iOS 26+ et Swift 6.",
            "projects.appstore": "Voir sur l'App Store",
            "projects.github": "Voir sur GitHub",

            /* ── Skills ── */
            "skills.label": "Bo\u00EEte \u00E0 outils",
            "skills.heading": "Technologies et comp\u00E9tences",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architecture",
            "skills.ai": "IA et exploration",
            "skills.tooling": "Outils et processus",
            "skills.leadership": "Leadership",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Sur GitHub",
            "oss.timbaktoe": "Un morpion pour apprendre les bases de SwiftUI, Combine et MultipeerConnectivity.",
            "oss.school": "App de d\u00E9marrage pour comprendre les patterns SwiftUI et Combine.",
            "oss.openpr": "Outil CLI pour cr\u00E9er des pull requests, construit avec Swift Package Manager.",
            "oss.math": "Biblioth\u00E8que d'utilitaires math\u00E9matiques. 4 forks sur GitHub.",
            "oss.geo": "Wrapper l\u00E9ger autour du framework iOS CoreLocation.",
            "oss.setup": "Checklist pour configurer de nouvelles machines de d\u00E9veloppement.",

            /* ── Education ── */
            "edu.label": "\u00C9ducation",
            "edu.heading": "Formation",
            "edu.degree": "B.Tech, Informatique et Ing\u00E9nierie",

            /* ── Off the clock ── */
            "offclock.label": "Hors travail",
            "offclock.heading": "Le c\u00F4t\u00E9 non-ing\u00E9nieur",
            "offclock.sports.title": "Football, sentiers et kilom\u00E8tres",
            "offclock.sports.desc": "Football le week-end, randonn\u00E9e quand les montagnes appellent, course \u00E0 pied sinon. Traite le corps comme du code en production -- pas de raccourcis, pas de dette technique.<span class=\"aside\">// Le jour des jambes n'a pas de strat\u00E9gie de rollback</span>",
            "offclock.fuel.title": "Carburant propre uniquement",
            "offclock.fuel.desc": "Mange propre -- pas \"en grande partie\", vraiment propre. Pas d'alcool, pas de tabac, pas de repas triche. Voit le corps comme un processus long : d\u00E9chets en entr\u00E9e, d\u00E9chets en sortie.<span class=\"aside\">// Recommande vivement aux autres d'adopter ce mode de vie</span>",
            "offclock.geo.title": "Cartes, argent et pouvoir",
            "offclock.geo.desc": "Fascin\u00E9 par les bouleversements g\u00E9opolitiques, l'histoire, la g\u00E9ographie et les tendances \u00E9conomiques. Aime relier les points entre pourquoi les fronti\u00E8res ont boug\u00E9 et o\u00F9 vont les march\u00E9s.<span class=\"aside\">// D\u00E9tournera n'importe quel d\u00EEner vers une th\u00E8se macro\u00E9conomique</span>",
            "offclock.travel.title": "Tampons de passeport",
            "offclock.travel.desc": "A collect\u00E9 des coups de soleil en Asie du Sud-Est et au-del\u00E0. Croit que le meilleur d\u00E9bogage se fait \u00E0 35 000 pieds d'altitude.",
            "offclock.photo.title": "Photographie",
            "offclock.photo.desc": "Aime capturer des moments, surtout en voyage. Le stockage du t\u00E9l\u00E9phone est \u00E0 80% photos, 15% cache Xcode, 5% d'espace libre r\u00E9el.",
            "offclock.ideas.title": "Id\u00E9es et cr\u00E9ation",
            "offclock.ideas.desc": "R\u00EAve constamment de produits \u00E0 construire. A une app de notes pleine d'\"id\u00E9es \u00E0 un million\" -- en lancer une serait bien.<span class=\"aside\">// TODO: en lancer vraiment une</span>",

            /* ── Contact ── */
            "contact.label": "Contact",
            "contact.heading": "Construisons quelque chose",
            "contact.sub": "Ouvert aux discussions sur iOS, l'IA, les id\u00E9es produit ou la cr\u00E9ation ensemble.",
            "contact.alllinks": "Tous les liens",

            /* ── Footer ── */
            "footer.text": "Con\u00E7u et construit par Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Professionnel",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Scanner &middot; Partager"
        },

        ru: {
            /* ── Nav ── */
            "nav.about": "\u041E\u0431\u043E \u043C\u043D\u0435",
            "nav.experience": "\u041E\u043F\u044B\u0442",
            "nav.projects": "\u041F\u0440\u043E\u0435\u043A\u0442\u044B",
            "nav.skills": "\u041D\u0430\u0432\u044B\u043A\u0438",
            "nav.contact": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442",

            /* ── Hero ── */
            "hero.title": "<strong>\u0418\u043D\u0436\u0435\u043D\u0435\u0440 \u0438 \u0441\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C.</strong> \u0414\u043D\u0451\u043C \u0440\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044B\u0432\u0430\u0435\u0442 iOS-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F,<br>\u043D\u043E\u0447\u044C\u044E \u044D\u043A\u0441\u043F\u0435\u0440\u0438\u043C\u0435\u043D\u0442\u0438\u0440\u0443\u0435\u0442 \u0441 AI \u0438 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u043C\u0438 \u0438\u0434\u0435\u044F\u043C\u0438.",
            "hero.location": "\u0411\u0435\u043D\u0433\u0430\u043B\u0443\u0440\u0443, \u0418\u043D\u0434\u0438\u044F",
            "hero.builder": "\u0421\u043E\u0437\u0434\u0430\u0442\u0435\u043B\u044C \u0441 \u0443\u0441\u0438\u043B\u0435\u043D\u0438\u0435\u043C AI",
            "hero.cta": "\u0421\u0432\u044F\u0437\u0430\u0442\u044C\u0441\u044F",

            /* ── About ── */
            "about.label": "\u041E\u0431\u043E \u043C\u043D\u0435",
            "about.heading": "\u041C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E, \u043B\u044E\u0431\u043E\u043F\u044B\u0442\u0441\u0442\u0432\u043E<br>\u0438 \u043A\u043E\u0434",
            "about.p1": "\u0412\u0438\u0448\u0430\u043B \u2014 <strong>\u0432\u0435\u0434\u0443\u0449\u0438\u0439 iOS-\u0438\u043D\u0436\u0435\u043D\u0435\u0440</strong>, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u043B\u044E\u0431\u0438\u0442 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B \u0441 \u043D\u0443\u043B\u044F. \u041E\u043D \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u043B \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0432 <strong>\u0444\u0438\u043D\u0442\u0435\u0445\u0435, \u043C\u0435\u0434\u0442\u0435\u0445\u0435, \u0441\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0445 \u0441\u0435\u0442\u044F\u0445 \u0438 \u044D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u043E\u0439 \u043A\u043E\u043C\u043C\u0435\u0440\u0446\u0438\u0438</strong> \u2014 \u043A\u0430\u0436\u0434\u044B\u0439 \u0440\u0430\u0437 \u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u0443\u044F \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043C\u0443\u044E \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u043C\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443.",
            "about.p2": "\u0415\u0433\u043E \u043F\u0440\u0438\u0432\u043B\u0435\u043A\u0430\u0435\u0442 \u0444\u0430\u0437\u0430 \"\u043E\u0442 \u043D\u0443\u043B\u044F \u0434\u043E \u0435\u0434\u0438\u043D\u0438\u0446\u044B\" \u0432 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445: \u043E\u043F\u0440\u0435\u0434\u0435\u043B\u0435\u043D\u0438\u0435 \u0433\u0440\u0430\u043D\u0438\u0446 \u043C\u043E\u0434\u0443\u043B\u0435\u0439, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044F \u0440\u0430\u0431\u043E\u0447\u0438\u0445 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u043A\u0440\u0438\u043F\u0442\u043E\u0432 Swift \u0438 \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u043E\u043C\u0430\u043D\u0434. <strong>\u0427\u0438\u0441\u0442\u044B\u0439 \u043A\u043E\u0434 \u0438 \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B</strong> \u2014 \u044D\u0442\u043E \u043D\u0435 \u043E\u0431\u0441\u0443\u0436\u0434\u0430\u0435\u0442\u0441\u044F.",
            "about.p3": "\u0421\u0435\u0439\u0447\u0430\u0441 \u0438\u0441\u0441\u043B\u0435\u0434\u0443\u0435\u0442 \u043F\u0435\u0440\u0435\u0441\u0435\u0447\u0435\u043D\u0438\u0435 <strong>AI \u0438 \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u043E\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438</strong> \u2014 \u0443\u0447\u0438\u0442\u0441\u044F \u043E\u0440\u043A\u0435\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C LLM, \u0430\u0433\u0435\u043D\u0442\u043E\u0432 \u0438 AI-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0434\u043B\u044F \u0443\u0432\u0435\u043B\u0438\u0447\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u0438. \u0414\u043E\u043B\u0433\u043E\u0441\u0440\u043E\u0447\u043D\u0430\u044F \u0446\u0435\u043B\u044C \u2014 <strong>\u0431\u044B\u0441\u0442\u0440\u0435\u0435 \u0432\u044B\u043F\u0443\u0441\u043A\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u044B</strong>, \u0441\u043E\u0447\u0435\u0442\u0430\u044F \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043D\u043E\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0441\u0442\u0432\u043E \u0441 AI-\u0440\u0430\u0431\u043E\u0447\u0438\u043C\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430\u043C\u0438, \u043F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u0443\u0447\u0430\u0441\u044C \u0443 \u0434\u0440\u0443\u0433\u0438\u0445.",
            "about.stat.apps": "\u0412\u044B\u043F\u0443\u0449\u0435\u043D\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439",
            "about.stat.domains": "\u041E\u0431\u043B\u0430\u0441\u0442\u0438",
            "about.stat.scratch": "\u0421 \u043D\u0443\u043B\u044F",
            "about.stat.curiosity": "\u041B\u044E\u0431\u043E\u043F\u044B\u0442\u0441\u0442\u0432\u043E",

            /* ── Career ── */
            "career.label": "\u041A\u0430\u0440\u044C\u0435\u0440\u0430",
            "career.heading": "\u041F\u0443\u0442\u044C \u0434\u043E \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
            "career.current": "\u0441\u0435\u0439\u0447\u0430\u0441",

            "career.turnip.desc": "<ul><li>\u0427\u0430\u0441\u0442\u044C \u043E\u0441\u043D\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u043D\u043E\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u043B \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0441 \u043D\u0443\u043B\u044F.</li><li>\u041A\u0440\u043E\u0441\u0441-\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0431\u043E\u0442\u0430 \u0441 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u043C, \u0434\u0438\u0437\u0430\u0439\u043D\u043E\u043C, \u0440\u043E\u0441\u0442\u043E\u043C \u0438 \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0438\u0435\u0439 \u043D\u0430\u0434 \u043A\u043B\u044E\u0447\u0435\u0432\u044B\u043C\u0438 \u0444\u0443\u043D\u043A\u0446\u0438\u044F\u043C\u0438: \u043E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433, \u043B\u0435\u043D\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435, \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439.</li></ul>",
            "career.novasignal.desc": "<ul><li>\u0421\u043E\u0437\u0434\u0430\u043B iOS-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435-\u043A\u043E\u043C\u043F\u0430\u043D\u044C\u043E\u043D \u0441 \u043D\u0443\u043B\u044F \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430, \u0438\u0437\u043C\u0435\u0440\u044F\u044E\u0449\u0435\u0433\u043E \u043C\u043E\u0437\u0433\u043E\u0432\u043E\u0439 \u043A\u0440\u043E\u0432\u043E\u0442\u043E\u043A.</li><li>\u0421\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043B \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043C\u0443\u044E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0443: \u043F\u0435\u0440\u0435\u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u044B\u0435 UI-\u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u043F\u043E\u0434\u0445\u043E\u0434 test-first, CI/CD \u0447\u0435\u0440\u0435\u0437 Xcode Cloud.</li></ul>",
            "career.paytm.desc": "<ul><li>\u0421\u0442\u0430\u0440\u0448\u0438\u0439 \u0438\u043D\u0436\u0435\u043D\u0435\u0440 \u0432 iOS-\u043A\u043E\u043C\u0430\u043D\u0434\u0435 \u0438\u0437 13\u201316 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0434\u043B\u044F \u0432\u044B\u0441\u043E\u043A\u043E\u043E\u0446\u0435\u043D\u0451\u043D\u043D\u043E\u0433\u043E \u0444\u0438\u043D\u0442\u0435\u0445-\u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F (4,3 \u0437\u0432\u0435\u0437\u0434\u044B).</li><li>\u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043B \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0438 \u043C\u043E\u0434\u0443\u043B\u044C \u0432\u0437\u0430\u0438\u043C\u043D\u044B\u0445 \u0444\u043E\u043D\u0434\u043E\u0432. \u041D\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u043B \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u043E\u0432 \u0438 \u0432\u0451\u043B \u043A\u043E\u0434-\u0440\u0435\u0432\u044C\u044E.</li></ul>",
            "career.caastle.desc": "<ul><li>\u0420\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u043B \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043E\u0439 white-label SaaS-\u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u044B (Gwynnie Bee, Haverdash) \u0434\u043B\u044F \u0430\u0440\u0435\u043D\u0434\u044B \u043E\u0434\u0435\u0436\u0434\u044B \u0432 \u0421\u0428\u0410.</li><li>\u0421\u043E\u0437\u0434\u0430\u043B \u0434\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443 \u0442\u0435\u043C, \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0443\u044E \u0447\u0435\u0440\u0435\u0437 \u0442\u0430\u0431\u043B\u0438\u0446\u044B \u0438 \u0432\u043D\u0443\u0442\u0440\u0435\u043D\u043D\u0438\u0435 Swift-\u0441\u043A\u0440\u0438\u043F\u0442\u044B.</li><li>\u041D\u0430\u0441\u0442\u0440\u043E\u0438\u043B \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u043E\u0433\u043E \u0442\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F \u0438 CI/CD. \u041D\u0430\u0441\u0442\u0430\u0432\u043B\u044F\u043B \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0438 \u043F\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u043B \u0437\u043D\u0430\u043D\u0438\u044F \u043F\u043E \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0435.</li></ul>",
            "career.moldedbits.desc": "<ul><li>\u0412\u044B\u043F\u0443\u0441\u043A\u0430\u043B \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u043E\u0434\u043D\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u0432 \u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u043C \u0438 \u0442\u0432\u043E\u0440\u0447\u0435\u0441\u043A\u043E\u043C \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F\u0445 (Apache Industrial, Duet App, PropCube).</li><li>\u0412\u044B\u0440\u043E\u0441 \u043E\u0442 \u043D\u043E\u0432\u0438\u0447\u043A\u0430 \u0434\u043E \u043B\u0438\u0434\u0435\u0440\u0430 iOS-\u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u0437 2 \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u0438 \u043D\u0430\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0430 4 \u043D\u043E\u0432\u044B\u0445 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u043E\u0432.</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u0420\u0430\u0431\u043E\u0442\u044B",
            "projects.heading": "\u0412\u044B\u043F\u0443\u0449\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F",
            "projects.domain.social": "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u044B\u0435",
            "projects.domain.health": "\u041C\u0435\u0434\u0442\u0435\u0445",
            "projects.domain.fintech": "\u0424\u0438\u043D\u0442\u0435\u0445",
            "projects.domain.fashion": "\u041C\u043E\u0434\u0430 / SaaS",
            "projects.domain.enterprise": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u044B\u0439",
            "projects.domain.side": "\u041F\u0435\u0442-\u043F\u0440\u043E\u0435\u043A\u0442",
            "projects.turnip.desc": "\u0421\u043E\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0441\u043E\u0437\u0434\u0430\u043D\u043D\u043E\u0435 \u0441 \u043D\u0443\u043B\u044F -- \u043E\u043D\u0431\u043E\u0440\u0434\u0438\u043D\u0433, \u043B\u0435\u043D\u0442\u0430, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0430, \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0439. \u041A\u0440\u043E\u0441\u0441-\u0444\u0443\u043D\u043A\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435 \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u0434\u043D\u044F.",
            "projects.novasignal.desc": "iOS-\u043A\u043E\u043C\u043F\u0430\u043D\u044C\u043E\u043D \u0434\u043B\u044F \u0440\u043E\u0431\u043E\u0442\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u043E\u0433\u043E \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u043E\u0433\u043E \u0443\u0441\u0442\u0440\u043E\u0439\u0441\u0442\u0432\u0430. \u041F\u043E\u0437\u0432\u043E\u043B\u044F\u0435\u0442 \u0431\u043E\u043B\u044C\u043D\u0438\u0446\u0430\u043C \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u043E \u043C\u043E\u0437\u0433\u043E\u0432\u043E\u043C \u043A\u0440\u043E\u0432\u043E\u0442\u043E\u043A\u0435, \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 AI, \u0434\u043B\u044F \u043F\u0440\u043E\u0444\u0438\u043B\u0430\u043A\u0442\u0438\u043A\u0438 \u0438\u043D\u0441\u0443\u043B\u044C\u0442\u0430.",
            "projects.paytm.desc": "\u041E\u0434\u043D\u043E \u0438\u0437 \u043B\u0443\u0447\u0448\u0438\u0445 \u0438\u043D\u0432\u0435\u0441\u0442\u0438\u0446\u0438\u043E\u043D\u043D\u044B\u0445 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0418\u043D\u0434\u0438\u0438. \u0410\u043A\u0446\u0438\u0438, \u0444\u043E\u043D\u0434\u044B, IPO, \u0444\u044C\u044E\u0447\u0435\u0440\u0441\u044B. \u041F\u0435\u0440\u0435\u0440\u0430\u0431\u043E\u0442\u0430\u043D \u0433\u043B\u0430\u0432\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D \u0438 \u043C\u043E\u0434\u0443\u043B\u044C \u0444\u043E\u043D\u0434\u043E\u0432 \u0434\u043B\u044F \u043C\u0438\u043B\u043B\u0438\u043E\u043D\u043E\u0432 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0435\u0439.",
            "projects.caastle.desc": "White-label \u043F\u043B\u0430\u0442\u0444\u043E\u0440\u043C\u0430 \u0430\u0440\u0435\u043D\u0434\u044B \u043E\u0434\u0435\u0436\u0434\u044B \u0434\u043B\u044F \u0440\u044B\u043D\u043A\u0430 \u0421\u0428\u0410. \u0421\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D \u043C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439, \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C\u044B\u0439 SaaS-\u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0434\u043B\u044F \u043D\u0435\u0441\u043A\u043E\u043B\u044C\u043A\u0438\u0445 \u0431\u0440\u0435\u043D\u0434\u043E\u0432.",
            "projects.enterprise.desc": "\u041A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u043E\u043C \u0434\u043B\u044F Apache Industrial Services, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C\u043E\u0435 \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u044F\u0445 \u043F\u043E \u0432\u0441\u0435\u0439 \u0442\u0435\u0440\u0440\u0438\u0442\u043E\u0440\u0438\u0438 \u0421\u0428\u0410.",
            "projects.xo3.desc": "\u0418\u0433\u0440\u0430 \u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F SwiftUI, Combine \u0438 MultipeerConnectivity. \u0421\u043E\u0437\u0434\u0430\u043D\u0430 \u043D\u0430 iOS 26+ \u0438 Swift 6.",
            "projects.appstore": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u0432 App Store",
            "projects.github": "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043D\u0430 GitHub",

            /* ── Skills ── */
            "skills.label": "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B",
            "skills.heading": "\u0422\u0435\u0445\u043D\u043E\u043B\u043E\u0433\u0438\u0438 \u0438 \u043D\u0430\u0432\u044B\u043A\u0438",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430",
            "skills.ai": "AI \u0438 \u0438\u0441\u0441\u043B\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F",
            "skills.tooling": "\u0418\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u044B",
            "skills.leadership": "\u041B\u0438\u0434\u0435\u0440\u0441\u0442\u0432\u043E",

            /* ── Open Source ── */
            "oss.label": "\u041E\u0442\u043A\u0440\u044B\u0442\u044B\u0439 \u043A\u043E\u0434",
            "oss.heading": "\u041D\u0430 GitHub",
            "oss.timbaktoe": "\u0418\u0433\u0440\u0430 \u043A\u0440\u0435\u0441\u0442\u0438\u043A\u0438-\u043D\u043E\u043B\u0438\u043A\u0438 \u0434\u043B\u044F \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044F \u043E\u0441\u043D\u043E\u0432 SwiftUI, Combine \u0438 MultipeerConnectivity.",
            "oss.school": "\u0421\u0442\u0430\u0440\u0442\u043E\u0432\u043E\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u043F\u043E\u043D\u0438\u043C\u0430\u043D\u0438\u044F \u043F\u0430\u0442\u0442\u0435\u0440\u043D\u043E\u0432 SwiftUI \u0438 Combine.",
            "oss.openpr": "CLI-\u0438\u043D\u0441\u0442\u0440\u0443\u043C\u0435\u043D\u0442 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F \u043F\u0443\u043B\u043B-\u0440\u0435\u043A\u0432\u0435\u0441\u0442\u043E\u0432, \u0441\u043E\u0437\u0434\u0430\u043D \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E Swift Package Manager.",
            "oss.math": "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430 \u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0443\u0442\u0438\u043B\u0438\u0442. 4 \u0444\u043E\u0440\u043A\u0430 \u043D\u0430 GitHub.",
            "oss.geo": "\u041B\u0451\u0433\u043A\u0430\u044F \u043E\u0431\u0451\u0440\u0442\u043A\u0430 \u043D\u0430\u0434 \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u043C iOS CoreLocation.",
            "oss.setup": "\u0427\u0435\u043A-\u043B\u0438\u0441\u0442 \u0434\u043B\u044F \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u043D\u043E\u0432\u044B\u0445 \u043C\u0430\u0448\u0438\u043D \u0434\u043B\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0438.",

            /* ── Education ── */
            "edu.label": "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
            "edu.heading": "\u041E\u0431\u0440\u0430\u0437\u043E\u0432\u0430\u043D\u0438\u0435",
            "edu.degree": "\u0411\u0430\u043A\u0430\u043B\u0430\u0432\u0440, \u0418\u043D\u0444\u043E\u0440\u043C\u0430\u0442\u0438\u043A\u0430 \u0438 \u0432\u044B\u0447\u0438\u0441\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u0445\u043D\u0438\u043A\u0430",

            /* ── Off the clock ── */
            "offclock.label": "\u0412\u043D\u0435 \u0440\u0430\u0431\u043E\u0442\u044B",
            "offclock.heading": "\u041D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E \u0438\u043D\u0436\u0435\u043D\u0435\u0440\u0438\u044F",
            "offclock.sports.title": "\u0424\u0443\u0442\u0431\u043E\u043B, \u0442\u0440\u043E\u043F\u044B \u0438 \u0431\u0435\u0433",
            "offclock.sports.desc": "\u0424\u0443\u0442\u0431\u043E\u043B \u043F\u043E \u0432\u044B\u0445\u043E\u0434\u043D\u044B\u043C, \u043F\u043E\u0445\u043E\u0434\u044B \u043A\u043E\u0433\u0434\u0430 \u0433\u043E\u0440\u044B \u0437\u043E\u0432\u0443\u0442, \u0431\u0435\u0433 \u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u0437\u043E\u0432\u0443\u0442. \u041E\u0442\u043D\u043E\u0441\u0438\u0442\u0441\u044F \u043A \u0442\u0435\u043B\u0443 \u043A\u0430\u043A \u043A \u043F\u0440\u043E\u0434\u0430\u043A\u0448\u043D-\u043A\u043E\u0434\u0443 -- \u0431\u0435\u0437 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0438\u0439, \u0431\u0435\u0437 \u0442\u0435\u0445\u0434\u043E\u043B\u0433\u0430.<span class=\"aside\">// \u0414\u0435\u043D\u044C \u043D\u043E\u0433 \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u043E\u0442\u043A\u0430\u0442\u0430</span>",
            "offclock.fuel.title": "\u0422\u043E\u043B\u044C\u043A\u043E \u0447\u0438\u0441\u0442\u043E\u0435 \u0442\u043E\u043F\u043B\u0438\u0432\u043E",
            "offclock.fuel.desc": "\u041F\u0438\u0442\u0430\u0435\u0442\u0441\u044F \u0447\u0438\u0441\u0442\u043E -- \u043D\u0435 \"\u0432 \u043E\u0441\u043D\u043E\u0432\u043D\u043E\u043C\", \u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u043E. \u0411\u0435\u0437 \u0430\u043B\u043A\u043E\u0433\u043E\u043B\u044F, \u0431\u0435\u0437 \u043A\u0443\u0440\u0435\u043D\u0438\u044F, \u0431\u0435\u0437 \u0447\u0438\u0442-\u043C\u0438\u043B\u043E\u0432. \u0421\u0447\u0438\u0442\u0430\u0435\u0442 \u0442\u0435\u043B\u043E \u0434\u043E\u043B\u0433\u043E\u0438\u0433\u0440\u0430\u044E\u0449\u0438\u043C \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u043C: \u043C\u0443\u0441\u043E\u0440 \u043D\u0430 \u0432\u0445\u043E\u0434\u0435 -- \u043C\u0443\u0441\u043E\u0440 \u043D\u0430 \u0432\u044B\u0445\u043E\u0434\u0435.<span class=\"aside\">// \u041D\u0430\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u0442 \u0434\u0440\u0443\u0433\u0438\u043C \u0442\u043E\u0436\u0435</span>",
            "offclock.geo.title": "\u041A\u0430\u0440\u0442\u044B, \u0434\u0435\u043D\u044C\u0433\u0438 \u0438 \u0432\u043B\u0430\u0441\u0442\u044C",
            "offclock.geo.desc": "\u0423\u0432\u043B\u0435\u0447\u0451\u043D \u0433\u0435\u043E\u043F\u043E\u043B\u0438\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0441\u0434\u0432\u0438\u0433\u0430\u043C\u0438, \u0438\u0441\u0442\u043E\u0440\u0438\u0435\u0439, \u0433\u0435\u043E\u0433\u0440\u0430\u0444\u0438\u0435\u0439 \u0438 \u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u043C\u0438 \u0442\u0440\u0435\u043D\u0434\u0430\u043C\u0438. \u041B\u044E\u0431\u0438\u0442 \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u0442\u044C \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D\u0438\u044F \u0433\u0440\u0430\u043D\u0438\u0446 \u0441 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435\u043C \u0440\u044B\u043D\u043A\u043E\u0432.<span class=\"aside\">// \u041F\u0435\u0440\u0435\u0432\u0435\u0434\u0451\u0442 \u043B\u044E\u0431\u043E\u0439 \u0443\u0436\u0438\u043D \u0432 \u043C\u0430\u043A\u0440\u043E\u044D\u043A\u043E\u043D\u043E\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0442\u0435\u0437\u0438\u0441</span>",
            "offclock.travel.title": "\u0428\u0442\u0430\u043C\u043F\u044B \u0432 \u043F\u0430\u0441\u043F\u043E\u0440\u0442\u0435",
            "offclock.travel.desc": "\u0421\u043E\u0431\u0440\u0430\u043B \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u044B\u0435 \u043E\u0436\u043E\u0433\u0438 \u043F\u043E \u044E\u0433\u043E-\u0432\u043E\u0441\u0442\u043E\u0447\u043D\u043E\u0439 \u0410\u0437\u0438\u0438 \u0438 \u043D\u0435 \u0442\u043E\u043B\u044C\u043A\u043E. \u0421\u0447\u0438\u0442\u0430\u0435\u0442, \u0447\u0442\u043E \u043B\u0443\u0447\u0448\u0430\u044F \u043E\u0442\u043B\u0430\u0434\u043A\u0430 \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u043D\u0430 \u0432\u044B\u0441\u043E\u0442\u0435 35 000 \u0444\u0443\u0442\u043E\u0432.",
            "offclock.photo.title": "\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F",
            "offclock.photo.desc": "\u041B\u044E\u0431\u0438\u0442 \u043B\u043E\u0432\u0438\u0442\u044C \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0432 \u043F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F\u0445. \u041F\u0430\u043C\u044F\u0442\u044C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430: 80% \u0444\u043E\u0442\u043E, 15% \u043A\u044D\u0448 Xcode, 5% \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043C\u0435\u0441\u0442\u0430.",
            "offclock.ideas.title": "\u0418\u0434\u0435\u0438 \u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435",
            "offclock.ideas.desc": "\u041F\u043E\u0441\u0442\u043E\u044F\u043D\u043D\u043E \u043C\u0435\u0447\u0442\u0430\u0435\u0442 \u043E \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0430\u0445 \u0434\u043B\u044F \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F. \u0417\u0430\u043C\u0435\u0442\u043A\u0438 \u043F\u043E\u043B\u043D\u044B \"\u0438\u0434\u0435\u0439 \u043D\u0430 \u043C\u0438\u043B\u043B\u0438\u043E\u043D\" -- \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u0431\u044B \u0445\u043E\u0442\u044C \u043E\u0434\u043D\u0443.<span class=\"aside\">// TODO: \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0432\u044B\u043F\u0443\u0441\u0442\u0438\u0442\u044C \u043E\u0434\u043D\u0443 \u0438\u0437 \u043D\u0438\u0445</span>",

            /* ── Contact ── */
            "contact.label": "\u0421\u0432\u044F\u0437\u044C",
            "contact.heading": "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u0447\u0442\u043E-\u0442\u043E",
            "contact.sub": "\u041E\u0442\u043A\u0440\u044B\u0442 \u043A \u0440\u0430\u0437\u0433\u043E\u0432\u043E\u0440\u0430\u043C \u043E\u0431 iOS, AI, \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u043E\u0432\u044B\u0445 \u0438\u0434\u0435\u044F\u0445 \u0438\u043B\u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u043C \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0438.",
            "contact.alllinks": "\u0412\u0441\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",

            /* ── Footer ── */
            "footer.text": "\u0421\u043F\u0440\u043E\u0435\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u043E \u0438 \u0441\u043E\u0437\u0434\u0430\u043D\u043E \u0412\u0438\u0448\u0430\u043B\u043E\u043C \u0421\u0438\u043D\u0433\u043E\u043C",

            /* ── Links Overlay ── */
            "lo.professional": "\u041F\u0440\u043E\u0444\u0435\u0441\u0441\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0435",
            "lo.portfolio": "\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E",
            "lo.scan": "\u0421\u043A\u0430\u043D &middot; \u041F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F"
        },

        de: {
            /* ── Nav ── */
            "nav.about": "\u00DCber mich",
            "nav.experience": "Erfahrung",
            "nav.projects": "Projekte",
            "nav.skills": "F\u00E4higkeiten",
            "nav.contact": "Kontakt",

            /* ── Hero ── */
            "hero.title": "<strong>Ingenieur &amp; Macher.</strong> Entwickelt tags\u00FCber iOS-Apps,<br>experimentiert nachts mit KI und Produktideen.",
            "hero.location": "Bengaluru, Indien",
            "hero.builder": "KI-gest\u00FCtzter Macher",
            "hero.cta": "Kontakt aufnehmen",

            /* ── About ── */
            "about.label": "\u00DCber mich",
            "about.heading": "Handwerk, Neugier<br>und Code",
            "about.p1": "Vishal ist ein <strong>Principal iOS Engineer</strong>, der es liebt, Dinge von Grund auf zu bauen. Er hat Produktions-Apps in den Bereichen <strong>Fintech, Health-Tech, Social Media und E-Commerce</strong> ausgeliefert \u2013 jedes Mal mit einer Architektur, die skaliert und wartbar bleibt.",
            "about.p2": "Ihn zieht die \u201ENull-zu-Eins\u201C-Phase von Produkten an: Modulgrenzen festlegen, m\u00FChsame Workflows mit Swift-Skripten automatisieren und Teams betreuen, damit sie mit Zuversicht arbeiten. <strong>Sauberer Code und wiederverwendbare Komponenten</strong> sind nicht verhandelbar.",
            "about.p3": "Aktuell erkundet er die Schnittstelle von <strong>KI und Mobile</strong> \u2013 lernt, LLMs, Agenten und KI-Tools zu orchestrieren, um die Produktivit\u00E4t zu vervielfachen. Das langfristige Ziel ist es, <strong>Produkte schneller auszuliefern</strong>, indem ingenieurtechnisches Handwerk mit KI-gest\u00FCtzten Workflows verbunden wird \u2013 stets von anderen lernend.",
            "about.stat.apps": "Ausgelieferte Apps",
            "about.stat.domains": "Dom\u00E4nen",
            "about.stat.scratch": "Von Grund auf gebaut",
            "about.stat.curiosity": "Neugier",

            /* ── Career ── */
            "career.label": "Karriere",
            "career.heading": "Der bisherige Weg",
            "career.current": "aktuell",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Teil des Gr\u00FCndungs-Entwicklerteams, baut die App von Grund auf.</li><li>Arbeitet funktions\u00FCbergreifend mit Produkt, Design, Growth und Engineering an Kernfunktionen: Onboarding, Feed, Erstellung, Benachrichtigungen und Bildverarbeitung.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Entwickelte die iOS-Begleit-App von Grund auf f\u00FCr ein robotisches Medizinger\u00E4t zur Messung des zerebralen Blutflusses.</li><li>Auf Skalierbarkeit ausgelegt: wiederverwendbare UI-Komponenten, Testbarkeit-zuerst-Design, Xcode Cloud CI/CD-Pipeline.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Einer der Senior Engineers in einem 13\u201316-k\u00F6pfigen iOS-Team f\u00FCr eine top-bewertete Fintech-App (4,3 Sterne).</li><li>Startseite und Investmentfonds-Modul \u00FCberarbeitet. Engineers betreut und Code-Reviews geleitet.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Leitete die Architektur einer White-Label-SaaS-Plattform (Gwynnie Bee, Haverdash) f\u00FCr Kleidungsverleih in den USA.</li><li>Entwarf ein dynamisches Theming-System, automatisiert \u00FCber Tabellen und hauseigene Swift-Skripte.</li><li>Richtete das Unit-Testing-Framework und die CI/CD-Pipeline ein. Betreute das Team und \u00FCbergab Architekturwissen.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Lieferte gleichzeitig mehrere Apps in den Bereichen Enterprise und Kreativ aus (Apache Industrial, Duet App, PropCube).</li><li>Wuchs vom Berufseinsteiger zum Leiter eines 2-k\u00F6pfigen iOS-Teams und Betreuer von 4 neuen Mitarbeitern.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Arbeit",
            "projects.heading": "Ausgelieferte Apps",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Mode / SaaS",
            "projects.domain.enterprise": "Unternehmen",
            "projects.domain.side": "Nebenprojekt",
            "projects.turnip.desc": "Social-App von Grund auf gebaut \u2013 Onboarding, Feed, Content-Erstellung, Benachrichtigungen und Bildverarbeitung. Funktions\u00FCbergreifende Zusammenarbeit von Tag eins.",
            "projects.novasignal.desc": "iOS-Begleit-App f\u00FCr ein robotisches Medizinger\u00E4t. Erm\u00F6glicht Krankenh\u00E4usern den Zugang zu KI-verarbeiteten Daten des zerebralen Blutflusses zur Schlaganfallpr\u00E4vention.",
            "projects.paytm.desc": "Eine der bestbewerteten Investment-Apps Indiens. Aktien, Investmentfonds, IPOs, F&O. Startseite und Investmentfonds-Modul \u00FCberarbeitet f\u00FCr Millionen von Nutzern.",
            "projects.caastle.desc": "White-Label-Kleidungsverleih-Plattform f\u00FCr den US-Markt. Entwarf das modulare, themef\u00E4hige SaaS-Framework f\u00FCr mehrere Marken-Apps.",
            "projects.enterprise.desc": "Enterprise-App f\u00FCr Personalverwaltung und \u00DCberwachung bei Apache Industrial Services, eingesetzt in den USA.",
            "projects.xo3.desc": "Ein Tic-Tac-Toe-Spiel zur Erkundung von SwiftUI, Combine und MultipeerConnectivity. Entwickelt mit iOS 26+ und Swift 6.",
            "projects.appstore": "Im App Store ansehen",
            "projects.github": "Auf GitHub ansehen",

            /* ── Skills ── */
            "skills.label": "Werkzeuge",
            "skills.heading": "Technologien & F\u00E4higkeiten",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architektur",
            "skills.ai": "KI & Erkundung",
            "skills.tooling": "Tooling & Prozesse",
            "skills.leadership": "F\u00FChrung",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Auf GitHub",
            "oss.timbaktoe": "Ein Tic-Tac-Toe-Spiel zum Erlernen von SwiftUI, Combine und MultipeerConnectivity.",
            "oss.school": "Starter-App zum Verstehen von SwiftUI- und Combine-Patterns.",
            "oss.openpr": "CLI-Tool zum Erstellen von Pull Requests, gebaut mit Swift Package Manager.",
            "oss.math": "Mathematik-Hilfsbibliothek. 4 Forks auf GitHub.",
            "oss.geo": "Leichtgewichtiger Wrapper \u00FCber das iOS CoreLocation Framework.",
            "oss.setup": "Eine Checkliste zur Einrichtung neuer Entwicklungsmaschinen.",

            /* ── Education ── */
            "edu.label": "Bildung",
            "edu.heading": "Hintergrund",
            "edu.degree": "B.Tech, Informatik & Ingenieurwesen",

            /* ── Off the clock ── */
            "offclock.label": "Feierabend",
            "offclock.heading": "Jenseits des Codes",
            "offclock.sports.title": "Fu\u00DFball, Wandern & Laufen",
            "offclock.sports.desc": "Fu\u00DFball am Wochenende, Wandern wenn die Berge rufen, Laufen wenn nicht. Behandelt den K\u00F6rper wie Produktionscode \u2013 keine Abk\u00FCrzungen, keine technischen Schulden.<span class=\"aside\">// Leg Day kennt keine Rollback-Strategie</span>",
            "offclock.fuel.title": "Nur sauberer Treibstoff",
            "offclock.fuel.desc": "Isst sauber \u2013 nicht \u201Emeistens\u201C, sondern wirklich sauber. Kein Alkohol, kein Rauchen, keine Ausnahmen. Betrachtet den K\u00F6rper als Langzeitprozess: M\u00FCll rein, M\u00FCll raus.<span class=\"aside\">// Empfiehlt diesen Lebensstil auch anderen w\u00E4rmstens</span>",
            "offclock.geo.title": "Karten, Geld & Macht",
            "offclock.geo.desc": "Fasziniert von geopolitischen Ver\u00E4nderungen, Geschichte, Geografie und wirtschaftlichen Trends. Liebt es, die Zusammenh\u00E4nge zwischen Grenzverschiebungen und Marktentwicklungen zu erkennen.<span class=\"aside\">// Entgleist jedes Abendessen in eine Makro-These</span>",
            "offclock.travel.title": "Reisestempel",
            "offclock.travel.desc": "Hat Sonnenbr\u00E4nde quer durch S\u00FCdostasien und dar\u00FCber hinaus gesammelt. Glaubt, dass das beste Debugging in 10.000 Metern H\u00F6he passiert.",
            "offclock.photo.title": "Fotografie",
            "offclock.photo.desc": "Liebt es, Momente festzuhalten, vor allem auf Reisen. Der Handyspeicher: 80% Fotos, 15% Xcode-Cache, 5% tats\u00E4chlich freier Speicher.",
            "offclock.ideas.title": "Ideen & Bauen",
            "offclock.ideas.desc": "Tr\u00E4umt st\u00E4ndig von Produkten zum Bauen. Die Notizen-App ist voll mit \u201EMillionen-Dollar-Ideen\u201C \u2013 eine davon auszuliefern w\u00E4re sch\u00F6n.<span class=\"aside\">// TODO: tats\u00E4chlich eine davon ausliefern</span>",

            /* ── Contact ── */
            "contact.label": "Kontakt",
            "contact.heading": "Lass uns etwas bauen",
            "contact.sub": "Offen f\u00FCr Gespr\u00E4che \u00FCber iOS, KI, Produktideen oder gemeinsames Bauen.",
            "contact.alllinks": "Alle Links",

            /* ── Footer ── */
            "footer.text": "Entworfen & gebaut von Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Berufliches",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Scannen &middot; Teilen"
        },
        it: {
            /* ── Nav ── */
            "nav.about": "Chi sono",
            "nav.experience": "Esperienza",
            "nav.projects": "Progetti",
            "nav.skills": "Competenze",
            "nav.contact": "Contatti",

            /* ── Hero ── */
            "hero.title": "<strong>Ingegnere &amp; creatore.</strong> Sviluppa app iOS di giorno,<br>sperimenta con AI e idee di prodotto di notte.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "Creatore potenziato dall\u2019AI",
            "hero.cta": "Contattami",

            /* ── About ── */
            "about.label": "Chi sono",
            "about.heading": "Artigianato, curiosit\u00E0<br>e codice",
            "about.p1": "Vishal \u00E8 un <strong>Principal iOS Engineer</strong> che ama costruire da zero. Ha pubblicato app in produzione nei settori <strong>fintech, health-tech, social media ed e-commerce</strong> -- ogni volta progettando architetture scalabili e manutenibili.",
            "about.p2": "Lo attrae la fase \u201Cda zero a uno\u201D dei prodotti: definire i confini dei moduli, automatizzare flussi di lavoro ripetitivi con script Swift e guidare i team a operare con sicurezza. <strong>Codice pulito e componenti riutilizzabili</strong> sono irrinunciabili.",
            "about.p3": "Attualmente esplora l\u2019intersezione tra <strong>AI e mobile</strong> -- imparando a orchestrare LLM, agenti e strumenti AI per moltiplicare la produttivit\u00E0. L\u2019obiettivo a lungo termine \u00E8 <strong>rilasciare prodotti pi\u00F9 velocemente</strong> combinando artigianato ingegneristico e flussi di lavoro potenziati dall\u2019AI, imparando sempre dagli altri.",
            "about.stat.apps": "App pubblicate",
            "about.stat.domains": "Domini",
            "about.stat.scratch": "Costruite da zero",
            "about.stat.curiosity": "Curiosit\u00E0",

            /* ── Career ── */
            "career.label": "Carriera",
            "career.heading": "Il percorso finora",
            "career.current": "attuale",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Parte del team fondatore di ingegneria, costruendo l\u2019app da zero.</li><li>Collabora trasversalmente con prodotto, design, crescita e ingegneria su funzionalit\u00E0 chiave: onboarding, feed, creazione, notifiche ed elaborazione immagini.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Ha costruito da zero l\u2019app iOS companion per un dispositivo medico robotico che misura il flusso ematico cerebrale.</li><li>Architettura scalabile: componenti UI riutilizzabili, design orientato alla testabilit\u00E0, pipeline CI/CD con Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Uno degli ingegneri senior in un team iOS di 13-16 persone per un\u2019app fintech di punta (4,3 stelle).</li><li>Rinnovata la schermata home e il modulo Fondi Comuni. Mentoring agli ingegneri e revisione del codice.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Ha guidato l\u2019architettura di una piattaforma SaaS white-label (Gwynnie Bee, Haverdash) per il noleggio di abbigliamento negli USA.</li><li>Progettato un sistema di temi dinamico automatizzato tramite fogli di calcolo e scripting Swift interno.</li><li>Configurato il framework di unit testing e la pipeline CI/CD. Mentoring al team e trasferimento delle conoscenze architetturali.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Ha pubblicato pi\u00F9 app contemporaneamente in ambito enterprise e creativo (Apache Industrial, Duet App, PropCube).</li><li>Cresciuto da neolaureato a leader di un team iOS di 2 persone e mentor di 4 nuove risorse.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Lavori",
            "projects.heading": "App pubblicate",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Moda / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Progetto personale",
            "projects.turnip.desc": "App social costruita da zero -- onboarding, feed, creazione di contenuti, notifiche ed elaborazione immagini. Collaborazione interfunzionale dal primo giorno.",
            "projects.novasignal.desc": "App iOS companion per un dispositivo medico robotico. Consente agli ospedali di accedere ai dati sul flusso ematico cerebrale elaborati dall\u2019AI per la prevenzione dell\u2019ictus.",
            "projects.paytm.desc": "Una delle app di investimento pi\u00F9 apprezzate in India. Azioni, fondi comuni, IPO, F&O. Rinnovata la schermata home e il modulo fondi comuni al servizio di milioni di utenti.",
            "projects.caastle.desc": "Piattaforma white-label per il noleggio di abbigliamento nel mercato statunitense. Progettata l\u2019architettura del framework SaaS modulare e personalizzabile per pi\u00F9 app di brand.",
            "projects.enterprise.desc": "App enterprise per la gestione e il monitoraggio della forza lavoro di Apache Industrial Services, utilizzata nelle operazioni negli USA.",
            "projects.xo3.desc": "Un gioco di tris per esplorare SwiftUI, Combine e MultipeerConnectivity. Costruito con iOS 26+ e Swift 6.",
            "projects.appstore": "Vedi su App Store",
            "projects.github": "Vedi su GitHub",

            /* ── Skills ── */
            "skills.label": "Strumenti",
            "skills.heading": "Tecnologie e competenze",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architettura",
            "skills.ai": "AI ed esplorazione",
            "skills.tooling": "Strumenti e processi",
            "skills.leadership": "Leadership",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Su GitHub",
            "oss.timbaktoe": "Un gioco di tris per imparare le basi di SwiftUI, Combine e MultipeerConnectivity.",
            "oss.school": "App iniziale per comprendere i pattern di SwiftUI e Combine.",
            "oss.openpr": "Strumento CLI per creare pull request, costruito con Swift Package Manager.",
            "oss.math": "Libreria di utilit\u00E0 matematiche. 4 fork su GitHub.",
            "oss.geo": "Wrapper leggero sul framework CoreLocation di iOS.",
            "oss.setup": "Una checklist per configurare macchine di sviluppo nuove.",

            /* ── Education ── */
            "edu.label": "Formazione",
            "edu.heading": "Background",
            "edu.degree": "Laurea in Informatica e Ingegneria",

            /* ── Off the clock ── */
            "offclock.label": "Fuori orario",
            "offclock.heading": "Il lato non ingegneristico",
            "offclock.sports.title": "Calcio, sentieri e chilometri",
            "offclock.sports.desc": "Calcio nel weekend, escursionismo quando le montagne chiamano, corsa quando non lo fanno. Tratta il corpo come codice in produzione -- niente scorciatoie, niente debito tecnico.<span class=\"aside\">// Il giorno delle gambe non ha strategia di rollback</span>",
            "offclock.fuel.title": "Solo carburante pulito",
            "offclock.fuel.desc": "Mangia pulito -- non \"pi\u00F9 o meno\", davvero pulito. Niente alcol, niente fumo, niente pasti sgarro. Pensa al corpo come a un processo a lungo termine: spazzatura dentro, spazzatura fuori.<span class=\"aside\">// Consiglia vivamente anche agli altri questo stile di vita</span>",
            "offclock.geo.title": "Mappe, denaro e potere",
            "offclock.geo.desc": "Affascinato dai cambiamenti geopolitici, dalla storia, dalla geografia e dalle tendenze economiche. Ama collegare i punti tra perch\u00E9 i confini si sono spostati e dove si dirigono i mercati.<span class=\"aside\">// Deraglier\u00E0 qualsiasi conversazione a cena in una tesi macro</span>",
            "offclock.travel.title": "Timbri sul passaporto",
            "offclock.travel.desc": "Ha collezionato scottature solari nel Sud-est asiatico e oltre. Crede che il miglior debugging avvenga a 35.000 piedi di altitudine.",
            "offclock.photo.title": "Fotografia",
            "offclock.photo.desc": "Ama catturare momenti, soprattutto in viaggio. La memoria del telefono \u00E8 80% foto, 15% cache di Xcode, 5% spazio effettivamente libero.",
            "offclock.ideas.title": "Idee e creazione",
            "offclock.ideas.desc": "Sogna costantemente prodotti da costruire. Ha un\u2019app di note piena di \"idee da un milione di dollari\" -- pubblicarne una sarebbe bello.<span class=\"aside\">// TODO: pubblicarne davvero una</span>",

            /* ── Contact ── */
            "contact.label": "Contatti",
            "contact.heading": "Costruiamo qualcosa",
            "contact.sub": "Aperto a conversazioni su iOS, AI, idee di prodotto o costruire cose insieme.",
            "contact.alllinks": "Tutti i link",

            /* ── Footer ── */
            "footer.text": "Progettato e realizzato da Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Professionale",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Scansiona &middot; Condividi"
        },
        nl: {
            /* ── Nav ── */
            "nav.about": "Over",
            "nav.experience": "Ervaring",
            "nav.projects": "Projecten",
            "nav.skills": "Vaardigheden",
            "nav.contact": "Contact",

            /* ── Hero ── */
            "hero.title": "<strong>Engineer &amp; bouwer.</strong> Bouwt overdag iOS-apps,<br>sleutelt \u2019s avonds aan AI en productidee\u00EBn.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "AI-ondersteunde bouwer",
            "hero.cta": "Neem contact op",

            /* ── About ── */
            "about.label": "Over",
            "about.heading": "Vakmanschap, nieuwsgierigheid<br>en code",
            "about.p1": "Vishal is een <strong>Principal iOS Engineer</strong> die graag dingen vanaf nul bouwt. Hij heeft productie-apps uitgebracht in <strong>fintech, health-tech, social media en e-commerce</strong> \u2013 telkens met een architectuur die schaalt en onderhoudbaar blijft.",
            "about.p2": "Hij wordt aangetrokken door de \u201Czero to one\u201D-fase van producten: modulegrenzen uitzetten, vervelende workflows automatiseren met Swift-scripts en teams begeleiden om met vertrouwen te werken. <strong>Schone code en herbruikbare componenten</strong> zijn niet onderhandelbaar.",
            "about.p3": "Momenteel verkent hij het snijvlak van <strong>AI en mobiel</strong> \u2013 leert LLM\u2019s, agents en AI-tools te orkestreren om de productiviteit te vermenigvuldigen. Het langetermijndoel is om <strong>sneller producten te leveren</strong> door vakmanschap te combineren met AI-ondersteunde workflows, en altijd te leren van anderen.",
            "about.stat.apps": "Apps uitgebracht",
            "about.stat.domains": "Domeinen",
            "about.stat.scratch": "Vanaf nul gebouwd",
            "about.stat.curiosity": "Nieuwsgierigheid",

            /* ── Career ── */
            "career.label": "Carri\u00E8re",
            "career.heading": "De reis tot nu toe",
            "career.current": "huidig",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Onderdeel van het founding engineering team, de app vanaf nul opgebouwd.</li><li>Werkt cross-functioneel met product, design, groei en engineering aan kernfuncties: onboarding, feed, creatie, notificaties en beeldverwerking.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>De iOS-begeleidingsapp vanaf nul gebouwd voor een robotisch medisch apparaat dat de cerebrale bloedstroom meet.</li><li>Ontworpen voor schaalbaarheid: herbruikbare UI-componenten, testbaarheidsontwerp, Xcode Cloud CI/CD-pipeline.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>E\u00E9n van de senior engineers in een iOS-team van 13-16 personen voor een topbeoordeelde fintech-app (4,3 sterren).</li><li>Het startscherm en de Mutual Funds-module vernieuwd. Engineers begeleid en code reviews geleid.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Leidde de architectuur voor een white-label SaaS-platform (Gwynnie Bee, Haverdash) voor kledingverhuur in de VS.</li><li>Ontwierp een dynamisch themasysteem geautomatiseerd via spreadsheets en interne Swift-scripting.</li><li>Unit testing framework en CI/CD-pipeline opgezet. Het team begeleid en architectuurkennis overgedragen.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Meerdere apps tegelijkertijd uitgebracht in enterprise- en creatieve domeinen (Apache Industrial, Duet App, PropCube).</li><li>Groeide van starter tot leider van een 2-persoons iOS-team en begeleider van 4 nieuwe medewerkers.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Werk",
            "projects.heading": "Uitgebrachte apps",
            "projects.domain.social": "Sociaal",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Mode / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Zijproject",
            "projects.turnip.desc": "Sociale app vanaf nul gebouwd \u2013 onboarding, feed, contentcreatie, notificaties en beeldverwerking. Cross-functionele samenwerking vanaf dag \u00E9\u00E9n.",
            "projects.novasignal.desc": "iOS-begeleider voor een robotisch medisch apparaat. Stelt ziekenhuizen in staat om AI-verwerkte cerebrale bloedstroomdata te raadplegen voor beroertepreventie.",
            "projects.paytm.desc": "E\u00E9n van India\u2019s best beoordeelde beleggingsapps. Aandelen, beleggingsfondsen, IPO\u2019s, F&O. Startscherm en beleggingsfondsmodule vernieuwd voor miljoenen gebruikers.",
            "projects.caastle.desc": "White-label kledingverhuurplatform voor de Amerikaanse markt. Architectuur van het modulaire, thematiseerbare SaaS-framework dat meerdere merk-apps aandrijft.",
            "projects.enterprise.desc": "Enterprise personeelsbeheer- en monitoringapp voor Apache Industrial Services, gebruikt in de VS.",
            "projects.xo3.desc": "Een boter-kaas-en-eieren-spel dat SwiftUI, Combine en MultipeerConnectivity verkent. Gebouwd met iOS 26+ en Swift 6.",
            "projects.appstore": "Bekijk in App Store",
            "projects.github": "Bekijk op GitHub",

            /* ── Skills ── */
            "skills.label": "Toolkit",
            "skills.heading": "Technologie\u00EBn & vaardigheden",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architectuur",
            "skills.ai": "AI & Verkenning",
            "skills.tooling": "Tooling & Proces",
            "skills.leadership": "Leiderschap",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Op GitHub",
            "oss.timbaktoe": "Een boter-kaas-en-eieren-spel om SwiftUI, Combine en MultipeerConnectivity te leren.",
            "oss.school": "Starter-app om SwiftUI- en Combine-patronen te begrijpen.",
            "oss.openpr": "CLI-tool voor het aanmaken van pull requests, gebouwd met Swift Package Manager.",
            "oss.math": "Wiskundige hulpbibliotheek. 4 forks op GitHub.",
            "oss.geo": "Lichtgewicht wrapper rond het iOS CoreLocation-framework.",
            "oss.setup": "Een checklist voor het configureren van nieuwe ontwikkelmachines.",

            /* ── Education ── */
            "edu.label": "Opleiding",
            "edu.heading": "Achtergrond",
            "edu.degree": "B.Tech, Informatica & Techniek",

            /* ── Off the clock ── */
            "offclock.label": "Vrije tijd",
            "offclock.heading": "De niet-technische kant",
            "offclock.sports.title": "Voetbal, trails & kilometers",
            "offclock.sports.desc": "Voetbal in het weekend, wandelen als de bergen roepen, hardlopen als dat niet zo is. Behandelt het lichaam als productiecode \u2013 geen shortcuts, geen technische schuld.<span class=\"aside\">// Beendag kent geen rollback-strategie</span>",
            "offclock.fuel.title": "Alleen schone brandstof",
            "offclock.fuel.desc": "Eet gezond \u2013 niet \u201Cgrotendeels\u201D, echt gezond. Geen alcohol, niet roken, geen cheat meals. Beschouwt het lichaam als een langlopend proces: rommel erin, rommel eruit.<span class=\"aside\">// Raadt anderen sterk aan deze levensstijl ook aan te nemen</span>",
            "offclock.geo.title": "Kaarten, geld & macht",
            "offclock.geo.desc": "Gefascineerd door geopolitieke verschuivingen, geschiedenis, aardrijkskunde en economische trends. Houdt ervan de punten te verbinden tussen waarom grenzen verschoven en waar markten naartoe gaan.<span class=\"aside\">// Zal elk diner-gesprek ontsporen naar een macrothese</span>",
            "offclock.travel.title": "Paspoortstempels",
            "offclock.travel.desc": "Heeft zonnebrand verzameld in Zuidoost-Azi\u00EB en daarbuiten. Gelooft dat de beste debugging plaatsvindt op 10.000 meter hoogte.",
            "offclock.photo.title": "Fotografie",
            "offclock.photo.desc": "Geniet van het vastleggen van momenten, vooral tijdens reizen. De telefoonopslag is 80% foto\u2019s, 15% Xcode-cache, 5% daadwerkelijk vrije ruimte.",
            "offclock.ideas.title": "Idee\u00EBn & bouwen",
            "offclock.ideas.desc": "Dagdroomt voortdurend over producten om te bouwen. Heeft een notitie-app vol \u201Cmiljoenenidee\u00EBn\u201D \u2013 er \u00E9\u00E9n uitbrengen zou mooi zijn.<span class=\"aside\">// TODO: er daadwerkelijk \u00E9\u00E9n van uitbrengen</span>",

            /* ── Contact ── */
            "contact.label": "Verbinden",
            "contact.heading": "Laten we iets bouwen",
            "contact.sub": "Open voor gesprekken over iOS, AI, productidee\u00EBn of samen dingen bouwen.",
            "contact.alllinks": "Alle links",

            /* ── Footer ── */
            "footer.text": "Ontworpen & gebouwd door Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Professioneel",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Scan &middot; Delen"
        },
        ja: {
            /* ── Nav ── */
            "nav.about": "\u6982\u8981",
            "nav.experience": "\u7D4C\u6B74",
            "nav.projects": "\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
            "nav.skills": "\u30B9\u30AD\u30EB",
            "nav.contact": "\u304A\u554F\u3044\u5408\u308F\u305B",

            /* ── Hero ── */
            "hero.title": "<strong>\u30A8\u30F3\u30B8\u30CB\u30A2 &amp; \u30D3\u30EB\u30C0\u30FC\u3002</strong>\u663C\u306FiOS\u30A2\u30D7\u30EA\u3092\u958B\u767A\u3057\u3001<br>\u591C\u306FAI\u3068\u30D7\u30ED\u30C0\u30AF\u30C8\u30A2\u30A4\u30C7\u30A2\u3092\u63A2\u6C42\u3002",
            "hero.location": "\u30D9\u30F3\u30AC\u30EB\u30FC\u30EB\u3001\u30A4\u30F3\u30C9",
            "hero.builder": "AI\u6D3B\u7528\u30D3\u30EB\u30C0\u30FC",
            "hero.cta": "\u304A\u554F\u3044\u5408\u308F\u305B",

            /* ── About ── */
            "about.label": "\u6982\u8981",
            "about.heading": "\u5320\u306E\u6280\u3001\u63A2\u7A76\u5FC3\u3001<br>\u305D\u3057\u3066\u30B3\u30FC\u30C9",
            "about.p1": "Vishal\u306F<strong>\u30D7\u30EA\u30F3\u30B7\u30D1\u30EBiOS\u30A8\u30F3\u30B8\u30CB\u30A2</strong>\u3067\u3001\u30BC\u30ED\u304B\u3089\u306E\u69CB\u7BC9\u3092\u611B\u3057\u3066\u3044\u307E\u3059\u3002<strong>\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF\u3001\u30D8\u30EB\u30B9\u30C6\u30C3\u30AF\u3001\u30BD\u30FC\u30B7\u30E3\u30EB\u30E1\u30C7\u30A3\u30A2\u3001EC</strong>\u306A\u3069\u591A\u69D8\u306A\u5206\u91CE\u3067\u30D7\u30ED\u30C0\u30AF\u30B7\u30E7\u30F3\u30A2\u30D7\u30EA\u3092\u30EA\u30EA\u30FC\u30B9\u3057\u3001\u30B9\u30B1\u30FC\u30E9\u30D6\u30EB\u3067\u4FDD\u5B88\u6027\u306E\u9AD8\u3044\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3092\u8A2D\u8A08\u3057\u3066\u304D\u307E\u3057\u305F\u3002",
            "about.p2": "\u300C\u30BC\u30ED\u304B\u3089\u30A4\u30C1\u300D\u306E\u30D5\u30A7\u30FC\u30BA\u306B\u60F9\u304B\u308C\u3066\u3044\u307E\u3059\u3002\u30E2\u30B8\u30E5\u30FC\u30EB\u5883\u754C\u306E\u8A2D\u8A08\u3001Swift\u30B9\u30AF\u30EA\u30D7\u30C8\u306B\u3088\u308B\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u81EA\u52D5\u5316\u3001\u30C1\u30FC\u30E0\u306E\u30E1\u30F3\u30BF\u30EA\u30F3\u30B0\u3002<strong>\u30AF\u30EA\u30FC\u30F3\u30B3\u30FC\u30C9\u3068\u518D\u5229\u7528\u53EF\u80FD\u306A\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8</strong>\u306F\u8B72\u308C\u307E\u305B\u3093\u3002",
            "about.p3": "\u73FE\u5728\u3001<strong>AI\u3068\u30E2\u30D0\u30A4\u30EB</strong>\u306E\u4EA4\u5DEE\u70B9\u3092\u63A2\u7D22\u4E2D\u3002LLM\u3001\u30A8\u30FC\u30B8\u30A7\u30F3\u30C8\u3001AI\u30C4\u30FC\u30EB\u3092\u6D3B\u7528\u3057\u3066\u751F\u7523\u6027\u3092\u5411\u4E0A\u3055\u305B\u308B\u65B9\u6CD5\u3092\u5B66\u3093\u3067\u3044\u307E\u3059\u3002\u9577\u671F\u7684\u306A\u76EE\u6A19\u306F\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u306E\u6280\u8853\u3068AI\u6D3B\u7528\u30EF\u30FC\u30AF\u30D5\u30ED\u30FC\u3092\u878D\u5408\u3057\u3066<strong>\u3088\u308A\u65E9\u304F\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u51FA\u8377</strong>\u3059\u308B\u3053\u3068\u3067\u3059\u3002",
            "about.stat.apps": "\u30EA\u30EA\u30FC\u30B9\u6E08\u307F\u30A2\u30D7\u30EA",
            "about.stat.domains": "\u30C9\u30E1\u30A4\u30F3",
            "about.stat.scratch": "\u30BC\u30ED\u304B\u3089\u69CB\u7BC9",
            "about.stat.curiosity": "\u63A2\u7A76\u5FC3",

            /* ── Career ── */
            "career.label": "\u30AD\u30E3\u30EA\u30A2",
            "career.heading": "\u3053\u308C\u307E\u3067\u306E\u6B69\u307F",
            "career.current": "\u73FE\u5728",

            /* Turnip */
            "career.turnip.desc": "<ul><li>\u5275\u696D\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u30C1\u30FC\u30E0\u306E\u4E00\u54E1\u3068\u3057\u3066\u3001\u30A2\u30D7\u30EA\u3092\u30BC\u30ED\u304B\u3089\u69CB\u7BC9\u3002</li><li>\u30D7\u30ED\u30C0\u30AF\u30C8\u3001\u30C7\u30B6\u30A4\u30F3\u3001\u30B0\u30ED\u30FC\u30B9\u3001\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u3068\u90E8\u9580\u6A2A\u65AD\u7684\u306B\u9023\u643A\u3057\u3001\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u3001\u30D5\u30A3\u30FC\u30C9\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u4F5C\u6210\u3001\u901A\u77E5\u3001\u753B\u50CF\u51E6\u7406\u306E\u30B3\u30A2\u6A5F\u80FD\u3092\u62C5\u5F53\u3002</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>\u8133\u8840\u6D41\u3092\u8A08\u6E2C\u3059\u308B\u30ED\u30DC\u30C3\u30C8\u533B\u7642\u6A5F\u5668\u7528\u306EiOS\u30B3\u30F3\u30D1\u30CB\u30AA\u30F3\u30A2\u30D7\u30EA\u3092\u30BC\u30ED\u304B\u3089\u69CB\u7BC9\u3002</li><li>\u30B9\u30B1\u30FC\u30EB\u3092\u898B\u636E\u3048\u305F\u8A2D\u8A08\uFF1A\u518D\u5229\u7528\u53EF\u80FD\u306AUI\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8\u3001\u30C6\u30B9\u30C8\u5BB9\u6613\u6027\u512A\u5148\u306E\u8A2D\u8A08\u3001Xcode Cloud CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3002</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>\u9AD8\u8A55\u4FA1\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF\u30A2\u30D7\u30EA\uFF084.3\u661F\uFF09\u306E13\u301C16\u4EBA\u306EiOS\u30C1\u30FC\u30E0\u306E\u30B7\u30CB\u30A2\u30A8\u30F3\u30B8\u30CB\u30A2\u306E\u4E00\u4EBA\u3002</li><li>\u30DB\u30FC\u30E0\u753B\u9762\u3068\u6295\u8CC7\u4FE1\u8A17\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u5237\u65B0\u3002\u30A8\u30F3\u30B8\u30CB\u30A2\u306E\u30E1\u30F3\u30BF\u30EA\u30F3\u30B0\u3068\u30B3\u30FC\u30C9\u30EC\u30D3\u30E5\u30FC\u3092\u4E3B\u5C0E\u3002</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>\u7C73\u56FD\u3067\u8863\u6599\u30EC\u30F3\u30BF\u30EB\u3092\u63D0\u4F9B\u3059\u308B\u30DB\u30EF\u30A4\u30C8\u30E9\u30D9\u30EBSaaS\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\uFF08Gwynnie Bee\u3001Haverdash\uFF09\u306E\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u3092\u30EA\u30FC\u30C9\u3002</li><li>\u30B9\u30D7\u30EC\u30C3\u30C9\u30B7\u30FC\u30C8\u3068\u5185\u88FDSwift\u30B9\u30AF\u30EA\u30D7\u30C8\u3067\u81EA\u52D5\u5316\u3055\u308C\u305F\u30C0\u30A4\u30CA\u30DF\u30C3\u30AF\u30C6\u30FC\u30DE\u30B7\u30B9\u30C6\u30E0\u3092\u8A2D\u8A08\u3002</li><li>\u30E6\u30CB\u30C3\u30C8\u30C6\u30B9\u30C8\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3068CI/CD\u30D1\u30A4\u30D7\u30E9\u30A4\u30F3\u3092\u69CB\u7BC9\u3002\u30C1\u30FC\u30E0\u306E\u30E1\u30F3\u30BF\u30EA\u30F3\u30B0\u3068\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3\u77E5\u8B58\u306E\u5F15\u304D\u7D99\u304E\u3002</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>\u30A8\u30F3\u30BF\u30FC\u30D7\u30E9\u30A4\u30BA\u3068\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u9818\u57DF\u3067\u8907\u6570\u306E\u30A2\u30D7\u30EA\u3092\u540C\u6642\u306B\u30EA\u30EA\u30FC\u30B9\uFF08Apache Industrial\u3001Duet App\u3001PropCube\uFF09\u3002</li><li>\u65B0\u4EBA\u304B\u30892\u4EBA\u306EiOS\u30C1\u30FC\u30E0\u306E\u30EA\u30FC\u30C9\u306B\u6210\u9577\u3057\u30014\u4EBA\u306E\u65B0\u5165\u793E\u54E1\u3092\u30E1\u30F3\u30BF\u30EA\u30F3\u30B0\u3002</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u5B9F\u7E3E",
            "projects.heading": "\u30EA\u30EA\u30FC\u30B9\u6E08\u307F\u30A2\u30D7\u30EA",
            "projects.domain.social": "\u30BD\u30FC\u30B7\u30E3\u30EB",
            "projects.domain.health": "\u30D8\u30EB\u30B9\u30C6\u30C3\u30AF",
            "projects.domain.fintech": "\u30D5\u30A3\u30F3\u30C6\u30C3\u30AF",
            "projects.domain.fashion": "\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3 / SaaS",
            "projects.domain.enterprise": "\u30A8\u30F3\u30BF\u30FC\u30D7\u30E9\u30A4\u30BA",
            "projects.domain.side": "\u500B\u4EBA\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
            "projects.turnip.desc": "\u30BC\u30ED\u304B\u3089\u69CB\u7BC9\u3057\u305F\u30BD\u30FC\u30B7\u30E3\u30EB\u30A2\u30D7\u30EA\u3002\u30AA\u30F3\u30DC\u30FC\u30C7\u30A3\u30F3\u30B0\u3001\u30D5\u30A3\u30FC\u30C9\u3001\u30B3\u30F3\u30C6\u30F3\u30C4\u4F5C\u6210\u3001\u901A\u77E5\u3001\u753B\u50CF\u51E6\u7406\u3002\u521D\u65E5\u304B\u3089\u90E8\u9580\u6A2A\u65AD\u7684\u306B\u5354\u529B\u3002",
            "projects.novasignal.desc": "\u30ED\u30DC\u30C3\u30C8\u533B\u7642\u6A5F\u5668\u7528iOS\u30B3\u30F3\u30D1\u30CB\u30AA\u30F3\u3002\u75C5\u9662\u304C\u8133\u5352\u4E2D\u4E88\u9632\u306E\u305F\u3081\u306EAI\u51E6\u7406\u6E08\u307F\u8133\u8840\u6D41\u30C7\u30FC\u30BF\u306B\u30A2\u30AF\u30BB\u30B9\u53EF\u80FD\u3002",
            "projects.paytm.desc": "\u30A4\u30F3\u30C9\u3067\u6700\u3082\u9AD8\u8A55\u4FA1\u306A\u6295\u8CC7\u30A2\u30D7\u30EA\u306E\u4E00\u3064\u3002\u682A\u5F0F\u3001\u6295\u8CC7\u4FE1\u8A17\u3001IPO\u3001F&O\u3002\u6570\u767E\u4E07\u4EBA\u306E\u30E6\u30FC\u30B6\u30FC\u306B\u30B5\u30FC\u30D3\u30B9\u3092\u63D0\u4F9B\u3059\u308B\u30DB\u30FC\u30E0\u753B\u9762\u3068\u6295\u8CC7\u4FE1\u8A17\u30E2\u30B8\u30E5\u30FC\u30EB\u3092\u5237\u65B0\u3002",
            "projects.caastle.desc": "\u7C73\u56FD\u5E02\u5834\u5411\u3051\u30DB\u30EF\u30A4\u30C8\u30E9\u30D9\u30EB\u8863\u6599\u30EC\u30F3\u30BF\u30EB\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002\u8907\u6570\u30D6\u30E9\u30F3\u30C9\u30A2\u30D7\u30EA\u3092\u99C6\u52D5\u3059\u308B\u30E2\u30B8\u30E5\u30E9\u30FC\u3067\u30C6\u30FC\u30DE\u5909\u66F4\u53EF\u80FD\u306ASaaS\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u3092\u8A2D\u8A08\u3002",
            "projects.enterprise.desc": "Apache Industrial Services\u5411\u3051\u30A8\u30F3\u30BF\u30FC\u30D7\u30E9\u30A4\u30BA\u52B4\u52D5\u7BA1\u7406\u30FB\u76E3\u8996\u30A2\u30D7\u30EA\u3002\u7C73\u56FD\u5168\u571F\u306E\u30AA\u30DA\u30EC\u30FC\u30B7\u30E7\u30F3\u3067\u4F7F\u7528\u3002",
            "projects.xo3.desc": "SwiftUI\u3001Combine\u3001MultipeerConnectivity\u3092\u63A2\u7D22\u3059\u308B\u4E09\u76EE\u4E26\u3079\u30B2\u30FC\u30E0\u3002iOS 26+\u304A\u3088\u3073Swift 6\u3067\u69CB\u7BC9\u3002",
            "projects.appstore": "App Store\u3067\u898B\u308B",
            "projects.github": "GitHub\u3067\u898B\u308B",

            /* ── Skills ── */
            "skills.label": "\u30C4\u30FC\u30EB\u30AD\u30C3\u30C8",
            "skills.heading": "\u6280\u8853 & \u30B9\u30AD\u30EB",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\u30A2\u30FC\u30AD\u30C6\u30AF\u30C1\u30E3",
            "skills.ai": "AI & \u63A2\u7D22",
            "skills.tooling": "\u30C4\u30FC\u30EB & \u30D7\u30ED\u30BB\u30B9",
            "skills.leadership": "\u30EA\u30FC\u30C0\u30FC\u30B7\u30C3\u30D7",

            /* ── Open Source ── */
            "oss.label": "\u30AA\u30FC\u30D7\u30F3\u30BD\u30FC\u30B9",
            "oss.heading": "GitHub\u4E0A\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8",
            "oss.timbaktoe": "SwiftUI\u3001Combine\u3001MultipeerConnectivity\u306E\u57FA\u790E\u3092\u5B66\u3076\u4E09\u76EE\u4E26\u3079\u30B2\u30FC\u30E0\u3002",
            "oss.school": "SwiftUI\u3068Combine\u30D1\u30BF\u30FC\u30F3\u3092\u7406\u89E3\u3059\u308B\u305F\u3081\u306E\u30B9\u30BF\u30FC\u30BF\u30FC\u30A2\u30D7\u30EA\u3002",
            "oss.openpr": "Swift Package Manager\u3067\u69CB\u7BC9\u3055\u308C\u305F\u30D7\u30EB\u30EA\u30AF\u30A8\u30B9\u30C8\u4F5C\u6210\u7528CLI\u30C4\u30FC\u30EB\u3002",
            "oss.math": "\u6570\u5B66\u30E6\u30FC\u30C6\u30A3\u30EA\u30C6\u30A3\u30E9\u30A4\u30D6\u30E9\u30EA\u3002GitHub\u30674\u30D5\u30A9\u30FC\u30AF\u3002",
            "oss.geo": "iOS CoreLocation\u30D5\u30EC\u30FC\u30E0\u30EF\u30FC\u30AF\u306E\u8EFD\u91CF\u30E9\u30C3\u30D1\u30FC\u3002",
            "oss.setup": "\u65B0\u3057\u3044\u958B\u767A\u30DE\u30B7\u30F3\u3092\u30BB\u30C3\u30C8\u30A2\u30C3\u30D7\u3059\u308B\u305F\u3081\u306E\u30C1\u30A7\u30C3\u30AF\u30EA\u30B9\u30C8\u3002",

            /* ── Education ── */
            "edu.label": "\u5B66\u6B74",
            "edu.heading": "\u30D0\u30C3\u30AF\u30B0\u30E9\u30A6\u30F3\u30C9",
            "edu.degree": "\u5DE5\u5B66\u58EB\u3001\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30B5\u30A4\u30A8\u30F3\u30B9 & \u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0",

            /* ── Off the clock ── */
            "offclock.label": "\u30AA\u30D5\u30BF\u30A4\u30E0",
            "offclock.heading": "\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u4EE5\u5916\u306E\u9854",
            "offclock.sports.title": "\u30B5\u30C3\u30AB\u30FC\u3001\u30C8\u30EC\u30A4\u30EB & \u30E9\u30F3\u30CB\u30F3\u30B0",
            "offclock.sports.desc": "\u9031\u672B\u306F\u30B5\u30C3\u30AB\u30FC\u3001\u5C71\u304C\u547C\u3079\u3070\u30CF\u30A4\u30AD\u30F3\u30B0\u3001\u305D\u3046\u3067\u306A\u3051\u308C\u3070\u30E9\u30F3\u30CB\u30F3\u30B0\u3002\u4F53\u3092\u30D7\u30ED\u30C0\u30AF\u30B7\u30E7\u30F3\u30B3\u30FC\u30C9\u306E\u3088\u3046\u306B\u6271\u3046\u2014\u2014\u8FD1\u9053\u306A\u3057\u3001\u6280\u8853\u7684\u8CA0\u50B5\u306A\u3057\u3002<span class=\"aside\">// \u8DB3\u306E\u65E5\u306B\u30ED\u30FC\u30EB\u30D0\u30C3\u30AF\u6226\u7565\u306F\u306A\u3044</span>",
            "offclock.fuel.title": "\u30AF\u30EA\u30FC\u30F3\u306A\u71C3\u6599\u306E\u307F",
            "offclock.fuel.desc": "\u30AF\u30EA\u30FC\u30F3\u306B\u98DF\u3079\u308B\u2014\u2014\u300C\u307B\u307C\u300D\u3067\u306F\u306A\u304F\u3001\u672C\u5F53\u306B\u30AF\u30EA\u30FC\u30F3\u306B\u3002\u30A2\u30EB\u30B3\u30FC\u30EB\u306A\u3057\u3001\u55AB\u7159\u306A\u3057\u3001\u30C1\u30FC\u30C8\u30DF\u30FC\u30EB\u306A\u3057\u3002\u4F53\u3092\u9577\u6642\u9593\u7A3C\u50CD\u30D7\u30ED\u30BB\u30B9\u3068\u8003\u3048\u308B\uFF1A\u30B4\u30DF\u3092\u5165\u308C\u308C\u3070\u30B4\u30DF\u304C\u51FA\u308B\u3002<span class=\"aside\">// \u4ED6\u306E\u4EBA\u306B\u3082\u3053\u306E\u30E9\u30A4\u30D5\u30B9\u30BF\u30A4\u30EB\u3092\u5F37\u304F\u63A8\u5968</span>",
            "offclock.geo.title": "\u5730\u56F3\u3001\u7D4C\u6E08 & \u6A29\u529B",
            "offclock.geo.desc": "\u5730\u653F\u5B66\u7684\u5909\u52D5\u3001\u6B74\u53F2\u3001\u5730\u7406\u3001\u7D4C\u6E08\u30C8\u30EC\u30F3\u30C9\u306B\u9B45\u4E86\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u56FD\u5883\u304C\u52D5\u3044\u305F\u7406\u7531\u3068\u5E02\u5834\u306E\u884C\u304D\u5148\u3092\u3064\u306A\u3052\u308B\u306E\u304C\u597D\u304D\u3002<span class=\"aside\">// \u3069\u3093\u306A\u30C7\u30A3\u30CA\u30FC\u306E\u4F1A\u8A71\u3082\u30DE\u30AF\u30ED\u8AD6\u306B\u8131\u7DDA\u3055\u305B\u307E\u3059</span>",
            "offclock.travel.title": "\u30D1\u30B9\u30DD\u30FC\u30C8\u30B9\u30BF\u30F3\u30D7",
            "offclock.travel.desc": "\u6771\u5357\u30A2\u30B8\u30A2\u3084\u305D\u306E\u5148\u3067\u65E5\u713C\u3051\u3092\u96C6\u3081\u3066\u304D\u307E\u3057\u305F\u3002\u6700\u9AD8\u306E\u30C7\u30D0\u30C3\u30B0\u306F\u9AD8\u5EA63\u4E075\u5343\u30D5\u30A3\u30FC\u30C8\u306E\u4E0A\u7A7A\u3067\u8D77\u3053\u308B\u3068\u4FE1\u3058\u3066\u3044\u307E\u3059\u3002",
            "offclock.photo.title": "\u5199\u771F",
            "offclock.photo.desc": "\u4E3B\u306B\u65C5\u884C\u4E2D\u306B\u77AC\u9593\u3092\u5207\u308A\u53D6\u308B\u306E\u3092\u697D\u3057\u3093\u3067\u3044\u307E\u3059\u3002\u30B9\u30DE\u30DB\u306E\u30B9\u30C8\u30EC\u30FC\u30B8\u306F80%\u304C\u5199\u771F\u300115%\u304CXcode\u30AD\u30E3\u30C3\u30B7\u30E5\u30015%\u304C\u5B9F\u969B\u306E\u7A7A\u304D\u5BB9\u91CF\u3002",
            "offclock.ideas.title": "\u30A2\u30A4\u30C7\u30A2 & \u69CB\u7BC9",
            "offclock.ideas.desc": "\u4F5C\u308B\u3079\u304D\u30D7\u30ED\u30C0\u30AF\u30C8\u3092\u5E38\u306B\u7A7A\u60F3\u3057\u3066\u3044\u307E\u3059\u3002\u30E1\u30E2\u30A2\u30D7\u30EA\u306B\u306F\u300C100\u4E07\u30C9\u30EB\u306E\u30A2\u30A4\u30C7\u30A2\u300D\u304C\u6E80\u8F09\u2014\u2014\u305D\u306E\u3046\u3061\u4E00\u3064\u3067\u3082\u51FA\u8377\u3067\u304D\u308C\u3070\u3044\u3044\u306E\u3067\u3059\u304C\u3002<span class=\"aside\">// TODO: \u5B9F\u969B\u306B\u4E00\u3064\u51FA\u8377\u3059\u308B</span>",

            /* ── Contact ── */
            "contact.label": "\u3064\u306A\u304C\u308B",
            "contact.heading": "\u4E00\u7DD2\u306B\u4F5C\u308A\u307E\u3057\u3087\u3046",
            "contact.sub": "iOS\u3001AI\u3001\u30D7\u30ED\u30C0\u30AF\u30C8\u30A2\u30A4\u30C7\u30A2\u3001\u307E\u305F\u306F\u5171\u540C\u5236\u4F5C\u306B\u3064\u3044\u3066\u306E\u4F1A\u8A71\u3092\u6B53\u8FCE\u3057\u307E\u3059\u3002",
            "contact.alllinks": "\u5168\u30EA\u30F3\u30AF",

            /* ── Footer ── */
            "footer.text": "Vishal Singh\u304C\u30C7\u30B6\u30A4\u30F3 & \u69CB\u7BC9",

            /* ── Links Overlay ── */
            "lo.professional": "\u30D7\u30ED\u30D5\u30A7\u30C3\u30B7\u30E7\u30CA\u30EB",
            "lo.portfolio": "\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA",
            "lo.scan": "\u30B9\u30AD\u30E3\u30F3 &middot; \u5171\u6709"
        },
        ko: {
            /* ── Nav ── */
            "nav.about": "\uC18C\uAC1C",
            "nav.experience": "\uACBD\uB825",
            "nav.projects": "\uD504\uB85C\uC81D\uD2B8",
            "nav.skills": "\uAE30\uC220",
            "nav.contact": "\uC5F0\uB77D\uCC98",

            /* ── Hero ── */
            "hero.title": "<strong>\uC5D4\uC9C0\uB2C8\uC5B4 &amp; \uBE4C\uB354.</strong> \uB0AE\uC5D0\uB294 iOS \uC571\uC744 \uB9CC\uB4E4\uACE0,<br>\uBC24\uC5D0\uB294 AI\uC640 \uD504\uB85C\uB355\uD2B8 \uC544\uC774\uB514\uC5B4\uB97C \uD0D0\uAD6C\uD569\uB2C8\uB2E4.",
            "hero.location": "\uBCB5\uAC08\uB8E8\uB8E8, \uC778\uB3C4",
            "hero.builder": "AI \uAC15\uD654 \uBE4C\uB354",
            "hero.cta": "\uC5F0\uB77D\uD558\uAE30",

            /* ── About ── */
            "about.label": "\uC18C\uAC1C",
            "about.heading": "\uC7A5\uC778 \uC815\uC2E0, \uD638\uAE30\uC2EC,<br>\uADF8\uB9AC\uACE0 \uCF54\uB4DC",
            "about.p1": "Vishal\uC740 \uCC98\uC74C\uBD80\uD130 \uB9CC\uB4DC\uB294 \uAC83\uC744 \uC88B\uC544\uD558\uB294 <strong>\uC218\uC11D iOS \uC5D4\uC9C0\uB2C8\uC5B4</strong>\uC785\uB2C8\uB2E4. <strong>\uD540\uD14C\uD06C, \uD5EC\uC2A4\uD14C\uD06C, \uC18C\uC15C \uBBF8\uB514\uC5B4, \uC804\uC790\uC0C1\uAC70\uB798</strong> \uBD84\uC57C\uC5D0\uC11C \uD504\uB85C\uB355\uC158 \uC571\uC744 \uCD9C\uC2DC\uD588\uC73C\uBA70, \uB9E4\uBC88 \uD655\uC7A5 \uAC00\uB2A5\uD558\uACE0 \uC720\uC9C0\uBCF4\uC218 \uAC00\uB2A5\uD55C \uC544\uD0A4\uD14D\uCC98\uB97C \uC124\uACC4\uD588\uC2B5\uB2C8\uB2E4.",
            "about.p2": "\uADF8\uB294 \uC81C\uD488\uC758 \"\uC81C\uB85C\uC5D0\uC11C \uD558\uB098\uB85C\" \uB2E8\uACC4\uC5D0 \uB04C\uB9BD\uB2C8\uB2E4: \uBAA8\uB4C8 \uACBD\uACC4 \uC124\uC815, Swift \uC2A4\uD06C\uB9BD\uD2B8\uB85C \uBC88\uAC70\uB85C\uC6B4 \uC791\uC5C5 \uC790\uB3D9\uD654, \uD300\uC774 \uC790\uC2E0\uAC10 \uC788\uAC8C \uC77C\uD560 \uC218 \uC788\uB3C4\uB85D \uBA58\uD1A0\uB9C1. <strong>\uD074\uB9B0 \uCF54\uB4DC\uC640 \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8</strong>\uB294 \uD0C0\uD611\uD560 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4.",
            "about.p3": "\uD604\uC7AC <strong>AI\uC640 \uBAA8\uBC14\uC77C</strong>\uC758 \uAD50\uCC28\uC810\uC744 \uD0D0\uAD6C \uC911\uC785\uB2C8\uB2E4 -- LLM, \uC5D0\uC774\uC804\uD2B8, AI \uB3C4\uAD6C\uB97C \uD65C\uC6A9\uD558\uC5EC \uC0DD\uC0B0\uC131\uC744 \uBC30\uAC00\uC2DC\uD0A4\uB294 \uBC95\uC744 \uBC30\uC6B0\uACE0 \uC788\uC2B5\uB2C8\uB2E4. \uC7A5\uAE30\uC801\uC778 \uBAA9\uD45C\uB294 \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1 \uC7A5\uC778 \uC815\uC2E0\uACFC AI \uAC15\uD654 \uC6CC\uD06C\uD50C\uB85C\uC6B0\uB97C \uACB0\uD569\uD558\uC5EC <strong>\uC81C\uD488\uC744 \uB354 \uBE60\uB974\uAC8C \uCD9C\uC2DC</strong>\uD558\uB294 \uAC83\uC774\uBA70, \uD56D\uC0C1 \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uB85C\uBD80\uD130 \uBC30\uC6B0\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
            "about.stat.apps": "\uCD9C\uC2DC\uD55C \uC571",
            "about.stat.domains": "\uB3C4\uBA54\uC778",
            "about.stat.scratch": "\uCC98\uC74C\uBD80\uD130 \uAD6C\uCD95",
            "about.stat.curiosity": "\uD638\uAE30\uC2EC",

            /* ── Career ── */
            "career.label": "\uACBD\uB825",
            "career.heading": "\uC9C0\uAE08\uAE4C\uC9C0\uC758 \uC5EC\uC815",
            "career.current": "\uD604\uC7AC",

            /* Turnip */
            "career.turnip.desc": "<ul><li>\uCC3D\uB9BD \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1 \uD300\uC758 \uC77C\uC6D0\uC73C\uB85C, \uC571\uC744 \uCC98\uC74C\uBD80\uD130 \uAD6C\uCD95\uD588\uC2B5\uB2C8\uB2E4.</li><li>\uC628\uBCF4\uB529, \uD53C\uB4DC, \uCF58\uD150\uCE20 \uC0DD\uC131, \uC54C\uB9BC, \uC774\uBBF8\uC9C0 \uCC98\uB9AC \uB4F1 \uD575\uC2EC \uAE30\uB2A5\uC5D0 \uB300\uD574 \uC81C\uD488, \uB514\uC790\uC778, \uC131\uC7A5, \uC5D4\uC9C0\uB2C8\uC5B4\uB9C1 \uD300\uACFC \uD611\uC5C5\uD588\uC2B5\uB2C8\uB2E4.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>\uB1CC \uD608\uB958\uB97C \uCE21\uC815\uD558\uB294 \uB85C\uBD07 \uC758\uB8CC \uAE30\uAE30\uC6A9 iOS \uCEF4\uD328\uB2C8\uC5B8 \uC571\uC744 \uCC98\uC74C\uBD80\uD130 \uAD6C\uCD95\uD588\uC2B5\uB2C8\uB2E4.</li><li>\uD655\uC7A5\uC131\uC744 \uACE0\uB824\uD55C \uC544\uD0A4\uD14D\uCC98: \uC7AC\uC0AC\uC6A9 \uAC00\uB2A5\uD55C UI \uCEF4\uD3EC\uB10C\uD2B8, \uD14C\uC2A4\uD2B8 \uC6B0\uC120 \uC124\uACC4, Xcode Cloud CI/CD \uD30C\uC774\uD504\uB77C\uC778.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>\uCD5C\uACE0 \uD3C9\uC810 \uD540\uD14C\uD06C \uC571(4.3\uC810)\uC758 13-16\uBA85 iOS \uD300\uC5D0\uC11C \uC2DC\uB2C8\uC5B4 \uC5D4\uC9C0\uB2C8\uC5B4\uB85C \uADFC\uBB34\uD588\uC2B5\uB2C8\uB2E4.</li><li>\uD648 \uD654\uBA74\uACFC \uBBA4\uCD94\uC5BC \uD380\uB4DC \uBAA8\uB4C8\uC744 \uAC1C\uD3B8\uD588\uC2B5\uB2C8\uB2E4. \uC5D4\uC9C0\uB2C8\uC5B4 \uBA58\uD1A0\uB9C1 \uBC0F \uCF54\uB4DC \uB9AC\uBDF0\uB97C \uC8FC\uB3C4\uD588\uC2B5\uB2C8\uB2E4.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>\uBBF8\uAD6D \uC758\uB958 \uB80C\uD0C8\uC744 \uC9C0\uC6D0\uD558\uB294 \uD654\uC774\uD2B8 \uB77C\uBCA8 SaaS \uD50C\uB7AB\uD3FC(Gwynnie Bee, Haverdash)\uC758 \uC544\uD0A4\uD14D\uCC98\uB97C \uC8FC\uB3C4\uD588\uC2B5\uB2C8\uB2E4.</li><li>\uC2A4\uD504\uB808\uB4DC\uC2DC\uD2B8\uC640 \uC790\uCCB4 Swift \uC2A4\uD06C\uB9BD\uD2B8\uB97C \uD1B5\uD574 \uC790\uB3D9\uD654\uB41C \uB3D9\uC801 \uD14C\uB9C8 \uC2DC\uC2A4\uD15C\uC744 \uC124\uACC4\uD588\uC2B5\uB2C8\uB2E4.</li><li>\uB2E8\uC704 \uD14C\uC2A4\uD2B8 \uD504\uB808\uC784\uC6CC\uD06C\uC640 CI/CD \uD30C\uC774\uD504\uB77C\uC778\uC744 \uAD6C\uCD95\uD588\uC2B5\uB2C8\uB2E4. \uD300\uC744 \uBA58\uD1A0\uB9C1\uD558\uACE0 \uC544\uD0A4\uD14D\uCC98 \uC9C0\uC2DD\uC744 \uC774\uC804\uD588\uC2B5\uB2C8\uB2E4.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>\uC5D4\uD130\uD504\uB77C\uC774\uC988 \uBC0F \uD06C\uB9AC\uC5D0\uC774\uD2F0\uBE0C \uB3C4\uBA54\uC778\uC5D0\uC11C \uC5EC\uB7EC \uC571\uC744 \uB3D9\uC2DC\uC5D0 \uCD9C\uC2DC\uD588\uC2B5\uB2C8\uB2E4(Apache Industrial, Duet App, PropCube).</li><li>\uC2E0\uC785\uC5D0\uC11C 2\uC778 iOS \uD300 \uB9AC\uB354\uB85C \uC131\uC7A5\uD558\uACE0 4\uBA85\uC758 \uC2E0\uADDC \uC785\uC0AC\uC790\uB97C \uBA58\uD1A0\uB9C1\uD588\uC2B5\uB2C8\uB2E4.</li></ul>",

            /* ── Projects ── */
            "projects.label": "\uC791\uC5C5",
            "projects.heading": "\uCD9C\uC2DC\uD55C \uC571",
            "projects.domain.social": "\uC18C\uC15C",
            "projects.domain.health": "\uD5EC\uC2A4\uD14C\uD06C",
            "projects.domain.fintech": "\uD540\uD14C\uD06C",
            "projects.domain.fashion": "\uD328\uC158 / SaaS",
            "projects.domain.enterprise": "\uC5D4\uD130\uD504\uB77C\uC774\uC988",
            "projects.domain.side": "\uC0AC\uC774\uB4DC \uD504\uB85C\uC81D\uD2B8",
            "projects.turnip.desc": "\uCC98\uC74C\uBD80\uD130 \uAD6C\uCD95\uD55C \uC18C\uC15C \uC571 -- \uC628\uBCF4\uB529, \uD53C\uB4DC, \uCF58\uD150\uCE20 \uC0DD\uC131, \uC54C\uB9BC, \uC774\uBBF8\uC9C0 \uCC98\uB9AC. \uCCAB\uB0A0\uBD80\uD130 \uD06C\uB85C\uC2A4 \uD380\uC158\uB110 \uD611\uC5C5.",
            "projects.novasignal.desc": "\uB85C\uBD07 \uC758\uB8CC \uAE30\uAE30\uC6A9 iOS \uCEF4\uD328\uB2C8\uC5B8. \uBCD1\uC6D0\uC774 \uB1CC\uC878\uC911 \uC608\uBC29\uC744 \uC704\uD55C AI \uCC98\uB9AC \uB1CC \uD608\uB958 \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uD569\uB2C8\uB2E4.",
            "projects.paytm.desc": "\uC778\uB3C4 \uCD5C\uACE0 \uD3C9\uC810 \uD22C\uC790 \uC571 \uC911 \uD558\uB098. \uC8FC\uC2DD, \uBBA4\uCD94\uC5BC \uD380\uB4DC, IPO, F&O. \uC218\uBC31\uB9CC \uC0AC\uC6A9\uC790\uC5D0\uAC8C \uC11C\uBE44\uC2A4\uD558\uB294 \uD648 \uD654\uBA74\uACFC \uBBA4\uCD94\uC5BC \uD380\uB4DC \uBAA8\uB4C8\uC744 \uAC1C\uD3B8\uD588\uC2B5\uB2C8\uB2E4.",
            "projects.caastle.desc": "\uBBF8\uAD6D \uC2DC\uC7A5\uC744 \uC704\uD55C \uD654\uC774\uD2B8 \uB77C\uBCA8 \uC758\uB958 \uB80C\uD0C8 \uD50C\uB7AB\uD3FC. \uC5EC\uB7EC \uBE0C\uB79C\uB4DC \uC571\uC744 \uC9C0\uC6D0\uD558\uB294 \uBAA8\uB4C8\uD615, \uD14C\uB9C8 \uC801\uC6A9 \uAC00\uB2A5\uD55C SaaS \uD504\uB808\uC784\uC6CC\uD06C\uB97C \uC544\uD0A4\uD14D\uCC98\uB9C1\uD588\uC2B5\uB2C8\uB2E4.",
            "projects.enterprise.desc": "\uBBF8\uAD6D Apache Industrial Services\uC758 \uC6B4\uC601 \uC804\uBC18\uC5D0\uC11C \uC0AC\uC6A9\uB418\uB294 \uC5D4\uD130\uD504\uB77C\uC774\uC988 \uC778\uB825 \uAD00\uB9AC \uBC0F \uBAA8\uB2C8\uD130\uB9C1 \uC571.",
            "projects.xo3.desc": "SwiftUI, Combine, MultipeerConnectivity\uB97C \uD0D0\uAD6C\uD558\uB294 \uD2F1\uD0DD\uD1A0 \uAC8C\uC784. iOS 26+ \uBC0F Swift 6\uC73C\uB85C \uAD6C\uCD95\uB418\uC5C8\uC2B5\uB2C8\uB2E4.",
            "projects.appstore": "App Store\uC5D0\uC11C \uBCF4\uAE30",
            "projects.github": "GitHub\uC5D0\uC11C \uBCF4\uAE30",

            /* ── Skills ── */
            "skills.label": "\uD234\uD0B7",
            "skills.heading": "\uAE30\uC220 \uBC0F \uC2A4\uD0AC",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "\uC544\uD0A4\uD14D\uCC98",
            "skills.ai": "AI \uBC0F \uD0D0\uAD6C",
            "skills.tooling": "\uB3C4\uAD6C \uBC0F \uD504\uB85C\uC138\uC2A4",
            "skills.leadership": "\uB9AC\uB354\uC2ED",

            /* ── Open Source ── */
            "oss.label": "\uC624\uD508 \uC18C\uC2A4",
            "oss.heading": "GitHub\uC5D0\uC11C",
            "oss.timbaktoe": "SwiftUI, Combine, MultipeerConnectivity \uAE30\uCD08\uB97C \uBC30\uC6B0\uAE30 \uC704\uD55C \uD2F1\uD0DD\uD1A0 \uAC8C\uC784.",
            "oss.school": "SwiftUI\uC640 Combine \uD328\uD134\uC744 \uC774\uD574\uD558\uAE30 \uC704\uD55C \uC2A4\uD0C0\uD130 \uC571.",
            "oss.openpr": "Swift Package Manager\uB85C \uAD6C\uCD95\uB41C \uD480 \uB9AC\uD018\uC2A4\uD2B8 \uC0DD\uC131 CLI \uB3C4\uAD6C.",
            "oss.math": "\uC218\uD559 \uC720\uD2F8\uB9AC\uD2F0 \uB77C\uC774\uBE0C\uB7EC\uB9AC. GitHub\uC5D0\uC11C 4\uAC1C\uC758 \uD3EC\uD06C.",
            "oss.geo": "iOS CoreLocation \uD504\uB808\uC784\uC6CC\uD06C\uC758 \uACBD\uB7C9 \uB798\uD37C.",
            "oss.setup": "\uC0C8 \uAC1C\uBC1C \uBA38\uC2E0 \uAD6C\uC131\uC744 \uC704\uD55C \uCCB4\uD06C\uB9AC\uC2A4\uD2B8.",

            /* ── Education ── */
            "edu.label": "\uD559\uB825",
            "edu.heading": "\uBC30\uACBD",
            "edu.degree": "\uCEF4\uD4E8\uD130 \uACFC\uD559 \uBC0F \uACF5\uD559 \uD559\uC0AC",

            /* ── Off the clock ── */
            "offclock.label": "\uC5C5\uBB34 \uC678 \uC2DC\uAC04",
            "offclock.heading": "\uC5D4\uC9C0\uB2C8\uC5B4\uB9C1 \uC678\uC758 \uBAA8\uC2B5",
            "offclock.sports.title": "\uCD95\uAD6C, \uD2B8\uB808\uC77C \uBC0F \uB2EC\uB9AC\uAE30",
            "offclock.sports.desc": "\uC8FC\uB9D0\uC5D0\uB294 \uCD95\uAD6C, \uC0B0\uC774 \uBD80\uB97C \uB54C\uB294 \uD558\uC774\uD0B9, \uC0B0\uC774 \uBD80\uB974\uC9C0 \uC54A\uC744 \uB54C\uB294 \uB7EC\uB2DD. \uBAB8\uC744 \uD504\uB85C\uB355\uC158 \uCF54\uB4DC\uCC98\uB7FC \uB300\uD569\uB2C8\uB2E4 -- \uC9C0\uB984\uAE38 \uC5C6\uACE0, \uAE30\uC220 \uBD80\uCC44 \uC5C6\uC774.<span class=\"aside\">// \uB808\uADF8 \uB370\uC774\uC5D0\uB294 \uB864\uBC31 \uC804\uB7B5\uC774 \uC5C6\uC2B5\uB2C8\uB2E4</span>",
            "offclock.fuel.title": "\uAE68\uB057\uD55C \uC5F0\uB8CC\uB9CC",
            "offclock.fuel.desc": "\uAE68\uB057\uD558\uAC8C \uBA39\uC2B5\uB2C8\uB2E4 -- \"\uB300\uCDA9\"\uC774 \uC544\uB2C8\uB77C \uC815\uB9D0\uB85C \uAE68\uB057\uD558\uAC8C. \uC74C\uC8FC \uC5C6\uACE0, \uD761\uC5F0 \uC5C6\uACE0, \uCE58\uD305 \uC5C6\uC774. \uBAB8\uC744 \uC7A5\uAE30 \uC2E4\uD589 \uD504\uB85C\uC138\uC2A4\uB85C \uC0DD\uAC01\uD569\uB2C8\uB2E4: \uC4F0\uB808\uAE30\uAC00 \uB4E4\uC5B4\uAC00\uBA74 \uC4F0\uB808\uAE30\uAC00 \uB098\uC635\uB2C8\uB2E4.<span class=\"aside\">// \uB2E4\uB978 \uC0AC\uB78C\uB4E4\uC5D0\uAC8C\uB3C4 \uC774 \uC0DD\uD65C \uBC29\uC2DD\uC744 \uAC15\uB825\uD788 \uCD94\uCC9C\uD569\uB2C8\uB2E4</span>",
            "offclock.geo.title": "\uC9C0\uB3C4, \uB3C8 \uBC0F \uAD8C\uB825",
            "offclock.geo.desc": "\uC9C0\uC815\uD559\uC801 \uBCC0\uD654, \uC5ED\uC0AC, \uC9C0\uB9AC, \uACBD\uC81C \uB3D9\uD5A5\uC5D0 \uB9E4\uB8CC\uB418\uC5B4 \uC788\uC2B5\uB2C8\uB2E4. \uAD6D\uACBD\uC774 \uC774\uB3D9\uD55C \uC774\uC720\uC640 \uC2DC\uC7A5\uC774 \uD5A5\uD558\uB294 \uBC29\uD5A5 \uC0AC\uC774\uC758 \uC810\uC744 \uC5F0\uACB0\uD558\uB294 \uAC83\uC744 \uC88B\uC544\uD569\uB2C8\uB2E4.<span class=\"aside\">// \uC5B4\uB5A4 \uC800\uB141 \uB300\uD654\uB4E0 \uAC70\uC2DC \uACBD\uC81C \uB17C\uC758\uB85C \uD0C8\uC120\uC2DC\uD0B5\uB2C8\uB2E4</span>",
            "offclock.travel.title": "\uC5EC\uAD8C \uC2A4\uD0EC\uD504",
            "offclock.travel.desc": "\uB3D9\uB0A8\uC544\uC2DC\uC544\uC640 \uADF8 \uB108\uBA38\uC5D0\uC11C \uD587\uBE5B\uC744 \uBAA8\uC558\uC2B5\uB2C8\uB2E4. \uCD5C\uACE0\uC758 \uB514\uBC84\uAE45\uC740 35,000\uD53C\uD2B8 \uC0C1\uACF5\uC5D0\uC11C \uC77C\uC5B4\uB09C\uB2E4\uACE0 \uBBFF\uC2B5\uB2C8\uB2E4.",
            "offclock.photo.title": "\uC0AC\uC9C4",
            "offclock.photo.desc": "\uC8FC\uB85C \uC5EC\uD589 \uC911 \uC21C\uAC04\uC744 \uD3EC\uCC29\uD558\uB294 \uAC83\uC744 \uC990\uAE41\uB2C8\uB2E4. \uD578\uB4DC\uD3F0 \uC800\uC7A5\uACF5\uAC04\uC758 80%\uB294 \uC0AC\uC9C4, 15%\uB294 Xcode \uCE90\uC2DC, 5%\uB9CC \uC2E4\uC81C \uC5EC\uC720 \uACF5\uAC04\uC785\uB2C8\uB2E4.",
            "offclock.ideas.title": "\uC544\uC774\uB514\uC5B4 \uBC0F \uAD6C\uCD95",
            "offclock.ideas.desc": "\uB9CC\uB4E4 \uC81C\uD488\uC5D0 \uB300\uD574 \uB04A\uC784\uC5C6\uC774 \uACF5\uC0C1\uD569\uB2C8\uB2E4. \uBA54\uBAA8 \uC571\uC5D0 \"\uBC31\uB9CC \uB2EC\uB7EC\uC9DC\uB9AC \uC544\uC774\uB514\uC5B4\"\uAC00 \uAC00\uB4DD\uD569\uB2C8\uB2E4 -- \uD558\uB098\uB77C\uB3C4 \uCD9C\uC2DC\uD558\uBA74 \uC88B\uACA0\uC2B5\uB2C8\uB2E4.<span class=\"aside\">// TODO: \uC774 \uC911 \uD558\uB098\uB97C \uC2E4\uC81C\uB85C \uCD9C\uC2DC\uD558\uAE30</span>",

            /* ── Contact ── */
            "contact.label": "\uC5F0\uB77D",
            "contact.heading": "\uD568\uAED8 \uB9CC\uB4E4\uC5B4 \uBD05\uC2DC\uB2E4",
            "contact.sub": "iOS, AI, \uC81C\uD488 \uC544\uC774\uB514\uC5B4 \uB610\uB294 \uD568\uAED8 \uBB34\uC5B8\uAC00\uB97C \uB9CC\uB4DC\uB294 \uAC83\uC5D0 \uB300\uD55C \uB300\uD654\uC5D0 \uC5F4\uB824 \uC788\uC2B5\uB2C8\uB2E4.",
            "contact.alllinks": "\uBAA8\uB4E0 \uB9C1\uD06C",

            /* ── Footer ── */
            "footer.text": "Vishal Singh\uAC00 \uB514\uC790\uC778 \uBC0F \uAD6C\uCD95",

            /* ── Links Overlay ── */
            "lo.professional": "\uC804\uBB38\uC801",
            "lo.portfolio": "\uD3EC\uD2B8\uD3F4\uB9AC\uC624",
            "lo.scan": "\uC2A4\uCE94 &middot; \uACF5\uC720"
        },
        id: {
            /* ── Nav ── */
            "nav.about": "Tentang",
            "nav.experience": "Pengalaman",
            "nav.projects": "Proyek",
            "nav.skills": "Keahlian",
            "nav.contact": "Kontak",

            /* ── Hero ── */
            "hero.title": "<strong>Engineer &amp; pembangun.</strong> Mengirim aplikasi iOS di siang hari,<br>mengulik AI dan ide produk di malam hari.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "Pembangun berbantuan AI",
            "hero.cta": "Hubungi saya",

            /* ── About ── */
            "about.label": "Tentang",
            "about.heading": "Keahlian, keingintahuan,<br>dan kode",
            "about.p1": "Vishal adalah seorang <strong>Principal iOS Engineer</strong> yang senang membangun sesuatu dari nol. Ia telah merilis aplikasi produksi di bidang <strong>fintech, health-tech, media sosial, dan e-commerce</strong> -- setiap kali merancang arsitektur yang skalabel dan mudah dipelihara.",
            "about.p2": "Ia tertarik pada fase \"nol ke satu\" dari sebuah produk: menyusun batas-batas modul, mengotomasi alur kerja yang membosankan dengan skrip Swift, dan membimbing tim untuk bergerak dengan percaya diri. <strong>Kode bersih dan komponen yang dapat digunakan ulang</strong> adalah hal yang tidak bisa ditawar.",
            "about.p3": "Saat ini menjelajahi persimpangan antara <strong>AI dan mobile</strong> -- belajar mengorkestrasi LLM, agen, dan alat AI untuk melipatgandakan produktivitas. Tujuan jangka panjangnya adalah <strong>merilis produk lebih cepat</strong> dengan memadukan keahlian rekayasa dan alur kerja berbantuan AI, selalu belajar dari orang lain.",
            "about.stat.apps": "Aplikasi dirilis",
            "about.stat.domains": "Domain",
            "about.stat.scratch": "Dibangun dari nol",
            "about.stat.curiosity": "Keingintahuan",

            /* ── Career ── */
            "career.label": "Karier",
            "career.heading": "Perjalanan sejauh ini",
            "career.current": "saat ini",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Bagian dari tim engineering pendiri, membangun aplikasi dari nol.</li><li>Bekerja lintas fungsi dengan produk, desain, pertumbuhan, dan engineering pada fitur inti: onboarding, feed, pembuatan konten, notifikasi, dan pemrosesan gambar.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Membangun aplikasi pendamping iOS dari nol untuk perangkat medis robotik yang mengukur aliran darah otak.</li><li>Dirancang untuk skala: komponen UI yang dapat digunakan ulang, desain mengutamakan testabilitas, pipeline CI/CD Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Salah satu engineer senior dalam tim iOS 13-16 orang untuk aplikasi fintech berperingkat tinggi (4,3 bintang).</li><li>Memperbarui layar utama dan modul Reksa Dana. Membimbing engineer dan memimpin tinjauan kode.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Memimpin arsitektur untuk platform SaaS white-label (Gwynnie Bee, Haverdash) yang mendukung penyewaan pakaian di AS.</li><li>Merancang sistem tema dinamis yang diotomasi melalui spreadsheet dan skrip Swift internal.</li><li>Menyiapkan kerangka pengujian unit dan pipeline CI/CD. Membimbing tim dan mentransfer pengetahuan arsitektur.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Merilis beberapa aplikasi secara bersamaan di domain enterprise dan kreatif (Apache Industrial, Duet App, PropCube).</li><li>Berkembang dari fresh graduate menjadi pemimpin tim iOS 2 orang dan membimbing 4 karyawan baru.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Karya",
            "projects.heading": "Aplikasi yang dirilis",
            "projects.domain.social": "Sosial",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Fashion / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Proyek Sampingan",
            "projects.turnip.desc": "Aplikasi sosial yang dibangun dari nol -- onboarding, feed, pembuatan konten, notifikasi, dan pemrosesan gambar. Kolaborasi lintas fungsi sejak hari pertama.",
            "projects.novasignal.desc": "Pendamping iOS untuk perangkat medis robotik. Memungkinkan rumah sakit mengakses data aliran darah otak yang diproses AI untuk pencegahan stroke.",
            "projects.paytm.desc": "Salah satu aplikasi investasi berperingkat tertinggi di India. Saham, reksa dana, IPO, F&O. Memperbarui layar utama dan modul reksa dana yang melayani jutaan pengguna.",
            "projects.caastle.desc": "Platform penyewaan pakaian white-label untuk pasar AS. Merancang kerangka SaaS modular dan bertema yang mendukung beberapa aplikasi merek.",
            "projects.enterprise.desc": "Aplikasi manajemen dan pemantauan tenaga kerja enterprise untuk Apache Industrial Services, digunakan di seluruh operasi di AS.",
            "projects.xo3.desc": "Permainan tic-tac-toe yang mengeksplorasi SwiftUI, Combine, dan MultipeerConnectivity. Dibangun dengan iOS 26+ dan Swift 6.",
            "projects.appstore": "Lihat di App Store",
            "projects.github": "Lihat di GitHub",

            /* ── Skills ── */
            "skills.label": "Perangkat",
            "skills.heading": "Teknologi & keahlian",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Arsitektur",
            "skills.ai": "AI & Eksplorasi",
            "skills.tooling": "Perkakas & Proses",
            "skills.leadership": "Kepemimpinan",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Di GitHub",
            "oss.timbaktoe": "Permainan tic-tac-toe untuk mempelajari dasar-dasar SwiftUI, Combine, dan MultipeerConnectivity.",
            "oss.school": "Aplikasi pemula untuk memahami pola SwiftUI dan Combine.",
            "oss.openpr": "Alat CLI untuk membuat pull request, dibangun dengan Swift Package Manager.",
            "oss.math": "Pustaka utilitas matematika. 4 fork di GitHub.",
            "oss.geo": "Wrapper ringan di atas framework CoreLocation iOS.",
            "oss.setup": "Daftar periksa untuk mengonfigurasi mesin pengembangan baru.",

            /* ── Education ── */
            "edu.label": "Pendidikan",
            "edu.heading": "Latar Belakang",
            "edu.degree": "S.T., Ilmu Komputer & Teknik",

            /* ── Off the clock ── */
            "offclock.label": "Di luar jam kerja",
            "offclock.heading": "Sisi non-engineering",
            "offclock.sports.title": "Sepak bola, jalur & jarak",
            "offclock.sports.desc": "Sepak bola di akhir pekan, mendaki saat gunung memanggil, berlari saat gunung tidak memanggil. Memperlakukan tubuh seperti kode produksi -- tanpa jalan pintas, tanpa utang teknis.<span class=\"aside\">// Hari kaki tidak punya strategi rollback</span>",
            "offclock.fuel.title": "Bahan bakar bersih saja",
            "offclock.fuel.desc": "Makan bersih -- bukan \"kebanyakan\", benar-benar bersih. Tanpa alkohol, tanpa rokok, tanpa cheat meal. Menganggap tubuh sebagai proses berjalan panjang: sampah masuk, sampah keluar.<span class=\"aside\">// Sangat merekomendasikan orang lain mengadopsi gaya hidup ini juga</span>",
            "offclock.geo.title": "Peta, uang & kekuasaan",
            "offclock.geo.desc": "Terpesona oleh pergeseran geopolitik, sejarah, geografi, dan tren ekonomi. Senang menghubungkan titik-titik antara mengapa perbatasan bergeser dan ke mana pasar menuju.<span class=\"aside\">// Akan mengalihkan percakapan makan malam menjadi tesis makro</span>",
            "offclock.travel.title": "Cap paspor",
            "offclock.travel.desc": "Telah mengumpulkan kulit terbakar matahari di seluruh Asia Tenggara dan sekitarnya. Percaya bahwa debugging terbaik terjadi di ketinggian 35.000 kaki.",
            "offclock.photo.title": "Fotografi",
            "offclock.photo.desc": "Senang mengabadikan momen, terutama saat bepergian. Penyimpanan ponsel 80% foto, 15% cache Xcode, 5% ruang kosong.",
            "offclock.ideas.title": "Ide & membangun",
            "offclock.ideas.desc": "Terus-menerus bermimpi tentang produk yang akan dibangun. Punya aplikasi catatan penuh \"ide jutaan dolar\" -- merilis satu saja sudah bagus.<span class=\"aside\">// TODO: benar-benar rilis salah satunya</span>",

            /* ── Contact ── */
            "contact.label": "Hubungi",
            "contact.heading": "Mari bangun sesuatu",
            "contact.sub": "Terbuka untuk percakapan tentang iOS, AI, ide produk, atau membangun sesuatu bersama.",
            "contact.alllinks": "Semua Tautan",

            /* ── Footer ── */
            "footer.text": "Dirancang & dibangun oleh Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profesional",
            "lo.portfolio": "Portofolio",
            "lo.scan": "Pindai &middot; Bagikan"
        },
        pl: {
            /* ── Nav ── */
            "nav.about": "O\u00a0mnie",
            "nav.experience": "Do\u015Bwiadczenie",
            "nav.projects": "Projekty",
            "nav.skills": "Umiej\u0119tno\u015Bci",
            "nav.contact": "Kontakt",

            /* ── Hero ── */
            "hero.title": "<strong>In\u017Cynier i\u00a0tw\u00F3rca.</strong> Tworzy aplikacje na iOS za dnia,<br>a\u00a0nocami eksperymentuje z\u00a0AI i\u00a0pomys\u0142ami produktowymi.",
            "hero.location": "Bengaluru, Indie",
            "hero.builder": "Tw\u00F3rca wspierany przez AI",
            "hero.cta": "Skontaktuj si\u0119",

            /* ── About ── */
            "about.label": "O\u00a0mnie",
            "about.heading": "Rzemios\u0142o, ciekawo\u015B\u0107<br>i\u00a0kod",
            "about.p1": "Vishal jest <strong>G\u0142\u00F3wnym In\u017Cynierem iOS</strong>, kt\u00F3ry uwielbia tworzy\u0107 rzeczy od zera. Wypu\u015Bci\u0142 produkcyjne aplikacje z\u00a0dziedzin <strong>fintech, health-tech, medi\u00F3w spo\u0142eczno\u015Bciowych i\u00a0e-commerce</strong> \u2013 za ka\u017Cdym razem projektuj\u0105c architektur\u0119, kt\u00F3ra si\u0119 skaluje i\u00a0pozostaje \u0142atwa w\u00a0utrzymaniu.",
            "about.p2": "Poci\u0105ga go faza \u201Eod zera do jedynki\u201D: wyznaczanie granic modu\u0142\u00F3w, automatyzacja \u017Cmudnych zada\u0144 skryptami Swift i\u00a0mentoring zespo\u0142\u00F3w. <strong>Czysty kod i\u00a0komponenty wielokrotnego u\u017Cytku</strong> s\u0105 niepodlegaj\u0105ce negocjacjom.",
            "about.p3": "Obecnie eksploruje pogranicze <strong>AI i\u00a0urz\u0105dze\u0144 mobilnych</strong> \u2013 uczy si\u0119 orkiestracji LLM-\u00F3w, agent\u00F3w i\u00a0narz\u0119dzi AI, aby zwielokrotni\u0107 produktywno\u015B\u0107. D\u0142ugoterminowym celem jest <strong>szybsze dostarczanie produkt\u00F3w</strong> \u0142\u0105cz\u0105c rzemios\u0142o in\u017Cynierskie z\u00a0procesami wspomaganymi przez AI, nieustannie ucz\u0105c si\u0119 od innych.",
            "about.stat.apps": "Wydane aplikacje",
            "about.stat.domains": "Domeny",
            "about.stat.scratch": "Zbudowane od zera",
            "about.stat.curiosity": "Ciekawo\u015B\u0107",

            /* ── Career ── */
            "career.label": "Kariera",
            "career.heading": "Dotychczasowa droga",
            "career.current": "obecnie",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Cz\u0142onek za\u0142o\u017Cycielskiego zespo\u0142u in\u017Cynierskiego, buduj\u0105cy aplikacj\u0119 od zera.</li><li>Wsp\u00F3\u0142pracuje mi\u0119dzyfunkcyjnie z\u00a0zespo\u0142ami produktu, designu, wzrostu i\u00a0in\u017Cynierii nad kluczowymi funkcjami: onboarding, feed, tworzenie tre\u015Bci, powiadomienia i\u00a0przetwarzanie obraz\u00F3w.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Zbudowa\u0142 aplikacj\u0119 towarzysz\u0105c\u0105 na iOS od zera dla robotycznego urz\u0105dzenia medycznego mierz\u0105cego przep\u0142yw krwi w\u00a0m\u00F3zgu.</li><li>Architektura nastawiona na skalowalno\u015B\u0107: komponenty UI wielokrotnego u\u017Cytku, design testowalno\u015Bci, pipeline CI/CD Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Jeden z\u00a0senior\u00F3w in\u017Cynier\u00F3w w\u00a013\u201316-osobowym zespole iOS dla wysoko ocenianej aplikacji fintech (4,3 gwiazdki).</li><li>Odnowi\u0142 ekran g\u0142\u00F3wny i\u00a0modu\u0142 funduszy wzajemnych. Mentorowa\u0142 in\u017Cynier\u00F3w i\u00a0prowadzi\u0142 przegl\u0105dy kodu.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Kierowa\u0142 architektur\u0105 platformy SaaS white-label (Gwynnie Bee, Haverdash) obs\u0142uguj\u0105cej wypo\u017Cyczanie odzie\u017Cy w\u00a0USA.</li><li>Zaprojektowa\u0142 dynamiczny system motyw\u00F3w zautomatyzowany za pomoc\u0105 arkuszy kalkulacyjnych i\u00a0w\u0142asnych skrypt\u00F3w Swift.</li><li>Wdro\u017Cy\u0142 framework test\u00F3w jednostkowych i\u00a0pipeline CI/CD. Mentorowa\u0142 zesp\u00F3\u0142 i\u00a0przekazywa\u0142 wiedz\u0119 architektoniczn\u0105.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Wypu\u015Bci\u0142 wiele aplikacji jednocze\u015Bnie w\u00a0domenach korporacyjnych i\u00a0kreatywnych (Apache Industrial, Duet App, PropCube).</li><li>Awansowa\u0142 od juniorskiego programisty do lidera 2-osobowego zespo\u0142u iOS i\u00a0mentora 4\u00a0nowych pracownik\u00F3w.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Prace",
            "projects.heading": "Wydane aplikacje",
            "projects.domain.social": "Spo\u0142eczno\u015Bciowe",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Moda / SaaS",
            "projects.domain.enterprise": "Korporacja",
            "projects.domain.side": "Projekt w\u0142asny",
            "projects.turnip.desc": "Aplikacja spo\u0142eczno\u015Bciowa zbudowana od zera \u2013 onboarding, feed, tworzenie tre\u015Bci, powiadomienia i\u00a0przetwarzanie obraz\u00F3w. Wsp\u00F3\u0142praca mi\u0119dzyfunkcyjna od pierwszego dnia.",
            "projects.novasignal.desc": "Aplikacja towarzysz\u0105ca na iOS dla robotycznego urz\u0105dzenia medycznego. Umo\u017Cliwia szpitalom dost\u0119p do przetworzonych przez AI danych o\u00a0przep\u0142ywie krwi w\u00a0m\u00F3zgu w\u00a0celu profilaktyki udar\u00F3w.",
            "projects.paytm.desc": "Jedna z\u00a0najwy\u017Cej ocenianych aplikacji inwestycyjnych w\u00a0Indiach. Akcje, fundusze wzajemne, IPO, F&O. Odnowiony ekran g\u0142\u00F3wny i\u00a0modu\u0142 funduszy obs\u0142uguj\u0105cy miliony u\u017Cytkownik\u00F3w.",
            "projects.caastle.desc": "Platforma white-label do wypo\u017Cyczania odzie\u017Cy na rynku ameryka\u0144skim. Zaprojektowana modularna, tematyczna architektura SaaS obs\u0142uguj\u0105ca wiele marek.",
            "projects.enterprise.desc": "Korporacyjna aplikacja do zarz\u0105dzania i\u00a0monitorowania personelu dla Apache Industrial Services, u\u017Cywana w\u00a0operacjach w\u00a0USA.",
            "projects.xo3.desc": "Gra w\u00a0k\u00F3\u0142ko i\u00a0krzy\u017Cyk eksploruj\u0105ca SwiftUI, Combine i\u00a0MultipeerConnectivity. Zbudowana z\u00a0iOS\u00a026+ i\u00a0Swift\u00a06.",
            "projects.appstore": "Zobacz w\u00a0App Store",
            "projects.github": "Zobacz na GitHub",

            /* ── Skills ── */
            "skills.label": "Narz\u0119dzia",
            "skills.heading": "Technologie i\u00a0umiej\u0119tno\u015Bci",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architektura",
            "skills.ai": "AI i\u00a0eksploracja",
            "skills.tooling": "Narz\u0119dzia i\u00a0procesy",
            "skills.leadership": "Przyw\u00F3dztwo",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Na GitHubie",
            "oss.timbaktoe": "Gra w\u00a0k\u00F3\u0142ko i\u00a0krzy\u017Cyk do nauki podstaw SwiftUI, Combine i\u00a0MultipeerConnectivity.",
            "oss.school": "Aplikacja startowa do poznania wzorc\u00F3w SwiftUI i\u00a0Combine.",
            "oss.openpr": "Narz\u0119dzie CLI do tworzenia pull request\u00F3w, zbudowane przy u\u017Cyciu Swift Package Manager.",
            "oss.math": "Biblioteka narz\u0119dzi matematycznych. 4\u00a0forki na GitHubie.",
            "oss.geo": "Lekki wrapper nad frameworkiem iOS CoreLocation.",
            "oss.setup": "Lista kontrolna do konfiguracji nowych maszyn deweloperskich.",

            /* ── Education ── */
            "edu.label": "Edukacja",
            "edu.heading": "Wykszta\u0142cenie",
            "edu.degree": "In\u017Cynier, Informatyka",

            /* ── Off the clock ── */
            "offclock.label": "Po godzinach",
            "offclock.heading": "Poza in\u017Cynieri\u0105",
            "offclock.sports.title": "Pi\u0142ka no\u017Cna, szlaki i\u00a0kilometry",
            "offclock.sports.desc": "Pi\u0142ka no\u017Cna w\u00a0weekendy, g\u00F3ry kiedy wzywaj\u0105, bieganie kiedy nie. Traktuje cia\u0142o jak kod produkcyjny \u2013 bez skr\u00F3t\u00F3w, bez d\u0142ugu technicznego.<span class=\"aside\">// Dzie\u0144 n\u00F3g nie ma strategii cofania</span>",
            "offclock.fuel.title": "Tylko czyste paliwo",
            "offclock.fuel.desc": "Je czysto \u2013 nie \u201Eg\u0142\u00F3wnie\u201D, naprawd\u0119 czysto. Bez alkoholu, bez palenia, bez cheat meali. Traktuje cia\u0142o jak d\u0142ugotrwa\u0142y proces: \u015Bmieci na wej\u015Bciu \u2013 \u015Bmieci na wyj\u015Bciu.<span class=\"aside\">// Gor\u0105co poleca innym ten styl \u017Cycia</span>",
            "offclock.geo.title": "Mapy, pieni\u0105dze i\u00a0w\u0142adza",
            "offclock.geo.desc": "Fascynuj\u0105 go zmiany geopolityczne, historia, geografia i\u00a0trendy ekonomiczne. Lubi \u0142\u0105czy\u0107 przesuwanie granic z\u00a0kierunkami rynk\u00F3w.<span class=\"aside\">// Zamieni ka\u017Cd\u0105 kolacj\u0119 w\u00a0makroekonomiczn\u0105 tez\u0119</span>",
            "offclock.travel.title": "Stemple w\u00a0paszporcie",
            "offclock.travel.desc": "Zbiera\u0142 oparzenia s\u0142oneczne w\u00a0Azji Po\u0142udniowo-Wschodniej i\u00a0nie tylko. Wierzy, \u017Ce najlepsze debugowanie odbywa si\u0119 na wysoko\u015Bci 35\u00a0000 st\u00F3p.",
            "offclock.photo.title": "Fotografia",
            "offclock.photo.desc": "Lubi uwiecznia\u0107 chwile, zw\u0142aszcza w\u00a0podr\u00F3\u017Cach. Pami\u0119\u0107 telefonu: 80% zdj\u0119\u0107, 15% cache Xcode, 5% wolnego miejsca.",
            "offclock.ideas.title": "Pomys\u0142y i\u00a0tworzenie",
            "offclock.ideas.desc": "Ci\u0105gle marzy o\u00a0produktach do zbudowania. Notatki pe\u0142ne \u201Epomys\u0142\u00F3w za milion\u201D \u2013 wypu\u015Bcienie cho\u0107 jednego by\u0142oby mi\u0142e.<span class=\"aside\">// TODO: naprawd\u0119 wypu\u015Bci\u0107 kt\u00F3ry\u015B z\u00a0nich</span>",

            /* ── Contact ── */
            "contact.label": "Kontakt",
            "contact.heading": "Zbudujmy co\u015B razem",
            "contact.sub": "Otwarty na rozmowy o\u00a0iOS, AI, pomys\u0142ach produktowych lub wsp\u00F3lnym tworzeniu.",
            "contact.alllinks": "Wszystkie linki",

            /* ── Footer ── */
            "footer.text": "Zaprojektowane i\u00a0zbudowane przez Vishala Singha",

            /* ── Links Overlay ── */
            "lo.professional": "Profesjonalne",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Skanuj &middot; Udost\u0119pnij"
        },
        tr: {
            /* ── Nav ── */
            "nav.about": "Hakk\u0131mda",
            "nav.experience": "Deneyim",
            "nav.projects": "Projeler",
            "nav.skills": "Yetenekler",
            "nav.contact": "\u0130leti\u015Fim",

            /* ── Hero ── */
            "hero.title": "<strong>M\u00FChendis &amp; yap\u0131mc\u0131.</strong> G\u00FCnd\u00FCz iOS uygulamalar\u0131 geli\u015Ftirir,<br>gece AI ve \u00FCr\u00FCn fikirleriyle u\u011Fra\u015F\u0131r.",
            "hero.location": "Bengaluru, Hindistan",
            "hero.builder": "AI destekli yap\u0131mc\u0131",
            "hero.cta": "\u0130leti\u015Fime ge\u00E7",

            /* ── About ── */
            "about.label": "Hakk\u0131mda",
            "about.heading": "Zanaat, merak<br>ve kod",
            "about.p1": "Vishal, s\u0131f\u0131rdan bir \u015Feyler in\u015Fa etmeyi seven bir <strong>K\u0131demli iOS M\u00FChendisi</strong>'dir. <strong>Fintek, sa\u011Fl\u0131k teknolojisi, sosyal medya ve e-ticaret</strong> alanlar\u0131nda \u00FCretim uygulamalar\u0131 geli\u015Ftirmi\u015Ftir -- her seferinde \u00F6l\u00E7eklenebilir ve s\u00FCrd\u00FCr\u00FClebilir mimariler tasarlam\u0131\u015Ft\u0131r.",
            "about.p2": "\u00DCr\u00FCnlerin \"s\u0131f\u0131rdan bire\" a\u015Famas\u0131na \u00E7ekilir: mod\u00FCl s\u0131n\u0131rlar\u0131n\u0131 belirlemek, Swift betikleriyle s\u0131k\u0131c\u0131 i\u015F ak\u0131\u015Flar\u0131n\u0131 otomatikle\u015Ftirmek ve ekiplere g\u00FCvenle ilerleme konusunda mentorluk yapmak. <strong>Temiz kod ve yeniden kullan\u0131labilir bile\u015Fenler</strong> vazge\u00E7ilmezdir.",
            "about.p3": "\u015Eu anda <strong>AI ve mobil</strong> kesi\u015Fimini ke\u015Ffediyor -- LLM'leri, ajanlar\u0131 ve AI ara\u00E7lar\u0131n\u0131 y\u00F6neterek verimlili\u011Fi art\u0131rmay\u0131 \u00F6\u011Freniyor. Uzun vadeli hedef, m\u00FChendislik zanaat\u0131n\u0131 AI destekli i\u015F ak\u0131\u015Flar\u0131yla harmanlayarak <strong>\u00FCr\u00FCnleri daha h\u0131zl\u0131 g\u00F6ndermek</strong>, her zaman ba\u015Fkalar\u0131ndan \u00F6\u011Frenerek.",
            "about.stat.apps": "G\u00F6nderilen uygulamalar",
            "about.stat.domains": "Alanlar",
            "about.stat.scratch": "S\u0131f\u0131rdan in\u015Fa edildi",
            "about.stat.curiosity": "Merak",

            /* ── Career ── */
            "career.label": "Kariyer",
            "career.heading": "Bug\u00FCne kadarki yolculuk",
            "career.current": "mevcut",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Kurucu m\u00FChendislik ekibinin bir par\u00E7as\u0131, uygulamay\u0131 s\u0131f\u0131rdan in\u015Fa ediyor.</li><li>\u00DCr\u00FCn, tasar\u0131m, b\u00FCy\u00FCme ve m\u00FChendislik ile \u00E7apraz fonksiyonel \u00E7al\u0131\u015F\u0131yor: al\u0131\u015Ft\u0131rma, ak\u0131\u015F, i\u00E7erik olu\u015Fturma, bildirimler ve g\u00F6r\u00FCnt\u00FC i\u015Fleme.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Serebral kan ak\u0131\u015F\u0131n\u0131 \u00F6l\u00E7en robotik bir t\u0131bbi cihaz i\u00E7in iOS e\u015Flik\u00E7i uygulamas\u0131n\u0131 s\u0131f\u0131rdan in\u015Fa etti.</li><li>\u00D6l\u00E7ek i\u00E7in mimarilendi: yeniden kullan\u0131labilir UI bile\u015Fenleri, test \u00F6ncelikli tasar\u0131m, Xcode Cloud CI/CD hatt\u0131.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>En y\u00FCksek puanl\u0131 bir fintek uygulamas\u0131nda (4.3 y\u0131ld\u0131z) 13-16 ki\u015Filik iOS ekibinin k\u0131demli m\u00FChendislerinden biri.</li><li>Ana ekran ve Yat\u0131r\u0131m Fonlar\u0131 mod\u00FCl\u00FCn\u00FC yeniledi. M\u00FChendislere mentorluk yapt\u0131 ve kod incelemelerini y\u00F6netti.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>ABD'de giysi kiralama hizmeti sunan beyaz etiketli bir SaaS platformunun (Gwynnie Bee, Haverdash) mimarisine \u00F6nc\u00FCl\u00FCk etti.</li><li>Elektronik tablolar ve \u015Firket i\u00E7i Swift betikleri ile otomatikle\u015Ftirilmi\u015F dinamik bir tema sistemi tasarlad\u0131.</li><li>Birim test \u00E7er\u00E7evesini ve CI/CD hatt\u0131n\u0131 kurdu. Ekibe mentorluk yapt\u0131 ve mimari bilgisini aktard\u0131.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Kurumsal ve yarat\u0131c\u0131 alanlarda e\u015F zamanl\u0131 olarak birden fazla uygulama g\u00F6nderdi (Apache Industrial, Duet App, PropCube).</li><li>Yeni ba\u015Flayandan 2 ki\u015Filik iOS ekibini y\u00F6netmeye ve 4 yeni i\u015Fe al\u0131ma mentorluk yapmaya kadar b\u00FCy\u00FCd\u00FC.</li></ul>",

            /* ── Projects ── */
            "projects.label": "\u00C7al\u0131\u015Fmalar",
            "projects.heading": "G\u00F6nderilen uygulamalar",
            "projects.domain.social": "Sosyal",
            "projects.domain.health": "Sa\u011Fl\u0131k Teknolojisi",
            "projects.domain.fintech": "Fintek",
            "projects.domain.fashion": "Moda / SaaS",
            "projects.domain.enterprise": "Kurumsal",
            "projects.domain.side": "Yan Proje",
            "projects.turnip.desc": "S\u0131f\u0131rdan in\u015Fa edilen sosyal uygulama -- al\u0131\u015Ft\u0131rma, ak\u0131\u015F, i\u00E7erik olu\u015Fturma, bildirimler ve g\u00F6r\u00FCnt\u00FC i\u015Fleme. \u0130lk g\u00FCnden \u00E7apraz fonksiyonel i\u015F birli\u011Fi.",
            "projects.novasignal.desc": "Robotik bir t\u0131bbi cihaz i\u00E7in iOS e\u015Flik\u00E7i uygulamas\u0131. Hastanelerin inme \u00F6nleme i\u00E7in AI ile i\u015Flenmi\u015F serebral kan ak\u0131\u015F\u0131 verilerine eri\u015Fmesini sa\u011Flar.",
            "projects.paytm.desc": "Hindistan'\u0131n en y\u00FCksek puanl\u0131 yat\u0131r\u0131m uygulamalar\u0131ndan biri. Hisse senetleri, yat\u0131r\u0131m fonlar\u0131, halka arzlar, t\u00FCrev \u00FCr\u00FCnler. Milyonlarca kullan\u0131c\u0131ya hizmet veren ana ekran ve yat\u0131r\u0131m fonu mod\u00FCl\u00FCn\u00FC yeniledi.",
            "projects.caastle.desc": "ABD pazar\u0131 i\u00E7in beyaz etiketli giysi kiralama platformu. Birden fazla marka uygulamas\u0131n\u0131 destekleyen mod\u00FCler, temalanabilir SaaS \u00E7er\u00E7evesinin mimarisini olu\u015Fturdu.",
            "projects.enterprise.desc": "ABD genelinde operasyonlarda kullan\u0131lan Apache Industrial Services i\u00E7in kurumsal i\u015F g\u00FCc\u00FC y\u00F6netimi ve izleme uygulamas\u0131.",
            "projects.xo3.desc": "SwiftUI, Combine ve MultipeerConnectivity'yi ke\u015Ffeden bir tic-tac-toe oyunu. iOS 26+ ve Swift 6 ile in\u015Fa edildi.",
            "projects.appstore": "App Store'da G\u00F6r\u00FCnt\u00FCle",
            "projects.github": "GitHub'da G\u00F6r\u00FCnt\u00FCle",

            /* ── Skills ── */
            "skills.label": "Ara\u00E7 Seti",
            "skills.heading": "Teknolojiler ve yetenekler",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Mimari",
            "skills.ai": "AI ve Ke\u015Fif",
            "skills.tooling": "Ara\u00E7lar ve S\u00FCre\u00E7",
            "skills.leadership": "Liderlik",

            /* ── Open Source ── */
            "oss.label": "A\u00E7\u0131k Kaynak",
            "oss.heading": "GitHub'da",
            "oss.timbaktoe": "SwiftUI, Combine ve MultipeerConnectivity temellerini \u00F6\u011Frenmek i\u00E7in bir tic-tac-toe oyunu.",
            "oss.school": "SwiftUI ve Combine kal\u0131plar\u0131n\u0131 anlamak i\u00E7in ba\u015Flang\u0131\u00E7 uygulamas\u0131.",
            "oss.openpr": "Swift Package Manager ile olu\u015Fturulmu\u015F, pull request olu\u015Fturmak i\u00E7in CLI arac\u0131.",
            "oss.math": "Matematik yard\u0131mc\u0131 program k\u00FCt\u00FCphanesi. GitHub'da 4 fork.",
            "oss.geo": "iOS CoreLocation \u00E7er\u00E7evesi \u00FCzerinde hafif bir sar\u0131c\u0131.",
            "oss.setup": "Yeni geli\u015Ftirme makinelerini yap\u0131land\u0131rmak i\u00E7in bir kontrol listesi.",

            /* ── Education ── */
            "edu.label": "E\u011Fitim",
            "edu.heading": "Ge\u00E7mi\u015F",
            "edu.degree": "Lisans, Bilgisayar M\u00FChendisli\u011Fi",

            /* ── Off the clock ── */
            "offclock.label": "Mesai d\u0131\u015F\u0131",
            "offclock.heading": "M\u00FChendislik d\u0131\u015F\u0131ndakiler",
            "offclock.sports.title": "Futbol, parkurlar ve ko\u015Fular",
            "offclock.sports.desc": "Hafta sonlar\u0131 futbol, da\u011Flar \u00E7a\u011F\u0131rd\u0131\u011F\u0131nda y\u00FCr\u00FCy\u00FC\u015F, \u00E7a\u011F\u0131rmad\u0131\u011F\u0131nda ko\u015Fu. V\u00FCcuda \u00FCretim kodu gibi davran\u0131r -- k\u0131sayol yok, teknik bor\u00E7 yok.<span class=\"aside\">// Bacak g\u00FCn\u00FCn\u00FCn geri alma stratejisi yoktur</span>",
            "offclock.fuel.title": "Sadece temiz yak\u0131t",
            "offclock.fuel.desc": "Temiz beslenir -- \"\u00E7o\u011Funlukla\" de\u011Fil, ger\u00E7ekten temiz. Alkol yok, sigara yok, hile yeme\u011Fi yok. V\u00FCcudu uzun s\u00FCreli bir s\u00FCre\u00E7 olarak g\u00F6r\u00FCr: \u00E7\u00F6p girerse, \u00E7\u00F6p \u00E7\u0131kar.<span class=\"aside\">// Ba\u015Fkalar\u0131na da \u015Fiddetle tavsiye eder</span>",
            "offclock.geo.title": "Haritalar, para ve g\u00FC\u00E7",
            "offclock.geo.desc": "Jeopolitik de\u011Fi\u015Fimler, tarih, co\u011Frafya ve ekonomik trendlerle b\u00FCy\u00FClenir. S\u0131n\u0131rlar\u0131n neden ta\u015F\u0131nd\u0131\u011F\u0131n\u0131 piyasalar\u0131n nereye y\u00F6neldi\u011Fiyle birle\u015Ftirmeyi sever.<span class=\"aside\">// Herhangi bir ak\u015Fam yeme\u011Fini makro teze d\u00F6n\u00FC\u015Ft\u00FCr\u00FCr</span>",
            "offclock.travel.title": "Pasaport damgalar\u0131",
            "offclock.travel.desc": "G\u00FCneydo\u011Fu Asya ve \u00F6tesinde g\u00FCne\u015F yan\u0131klar\u0131 toplad\u0131. En iyi hata ay\u0131klaman\u0131n 35.000 fit y\u00FCkseklikte ger\u00E7ekle\u015Fti\u011Fine inan\u0131r.",
            "offclock.photo.title": "Foto\u011Fraf\u00E7\u0131l\u0131k",
            "offclock.photo.desc": "Anlar\u0131 yakalamay\u0131 sever, \u00F6zellikle seyahat ederken. Telefon depolamas\u0131 %80 foto\u011Fraf, %15 Xcode \u00F6nbelle\u011Fi, %5 ger\u00E7ek bo\u015F alan.",
            "offclock.ideas.title": "Fikirler ve in\u015Fa",
            "offclock.ideas.desc": "S\u00FCrekli in\u015Fa edilecek \u00FCr\u00FCnler hakk\u0131nda hayal kurar. Notlar\u0131 \"milyonluk fikirlerle\" dolu -- birini g\u00F6ndermek g\u00FCzel olurdu.<span class=\"aside\">// TODO: bunlardan birini ger\u00E7ekten g\u00F6nder</span>",

            /* ── Contact ── */
            "contact.label": "Ba\u011Flant\u0131",
            "contact.heading": "Birlikte bir \u015Feyler in\u015Fa edelim",
            "contact.sub": "iOS, AI, \u00FCr\u00FCn fikirleri veya birlikte bir \u015Feyler in\u015Fa etme hakk\u0131nda sohbete a\u00E7\u0131k.",
            "contact.alllinks": "T\u00FCm Ba\u011Flant\u0131lar",

            /* ── Footer ── */
            "footer.text": "Vishal Singh taraf\u0131ndan tasarlan\u0131p in\u015Fa edildi",

            /* ── Links Overlay ── */
            "lo.professional": "Profesyonel",
            "lo.portfolio": "Portf\u00F6y",
            "lo.scan": "Tara &middot; Payla\u015F"
        },
        ms: {
            /* ── Nav ── */
            "nav.about": "Tentang",
            "nav.experience": "Pengalaman",
            "nav.projects": "Projek",
            "nav.skills": "Kemahiran",
            "nav.contact": "Hubungi",

            /* ── Hero ── */
            "hero.title": "<strong>Jurutera &amp; pembina.</strong> Menghantar aplikasi iOS pada siang hari,<br>meneroka AI dan idea produk pada waktu malam.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "Pembina dipacu AI",
            "hero.cta": "Hubungi saya",

            /* ── About ── */
            "about.label": "Tentang",
            "about.heading": "Kraf, rasa ingin tahu,<br>dan kod",
            "about.p1": "Vishal ialah seorang <strong>Jurutera iOS Utama</strong> yang gemar membina sesuatu dari awal. Beliau telah melancarkan aplikasi pengeluaran merentas <strong>fintech, teknologi kesihatan, media sosial dan e-dagang</strong> -- setiap kali mereka bentuk seni bina yang berskala dan mudah diselenggara.",
            "about.p2": "Beliau tertarik dengan fasa \"sifar ke satu\" produk: menetapkan sempadan modul, mengautomasi aliran kerja dengan skrip Swift, dan membimbing pasukan untuk bergerak dengan yakin. <strong>Kod bersih dan komponen boleh guna semula</strong> adalah tidak boleh dirunding.",
            "about.p3": "Kini meneroka persimpangan <strong>AI dan mudah alih</strong> -- belajar mendalangi LLM, ejen dan alat AI untuk melipatgandakan produktiviti. Matlamat jangka panjang ialah <strong>melancarkan produk dengan lebih pantas</strong> dengan menggabungkan kemahiran kejuruteraan dengan aliran kerja dipacu AI, sentiasa belajar daripada orang lain.",
            "about.stat.apps": "Aplikasi dilancarkan",
            "about.stat.domains": "Domain",
            "about.stat.scratch": "Dibina dari awal",
            "about.stat.curiosity": "Rasa ingin tahu",

            /* ── Career ── */
            "career.label": "Kerjaya",
            "career.heading": "Perjalanan setakat ini",
            "career.current": "semasa",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Sebahagian daripada pasukan kejuruteraan pengasas, membina aplikasi dari awal.</li><li>Bekerja merentas fungsi dengan produk, reka bentuk, pertumbuhan dan kejuruteraan pada ciri teras: penyertaan, suapan, penciptaan, pemberitahuan dan pemprosesan imej.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Membina aplikasi pendamping iOS dari awal untuk peranti perubatan robotik yang mengukur aliran darah serebrum.</li><li>Mereka bentuk untuk skala: komponen UI boleh guna semula, reka bentuk mengutamakan kebolehujian, saluran paip CI/CD Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Salah seorang jurutera kanan dalam pasukan iOS 13-16 orang untuk aplikasi fintech bertaraf tinggi (4.3 bintang).</li><li>Merombak skrin utama dan modul Dana Bersama. Membimbing jurutera dan memimpin semakan kod.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Memimpin seni bina untuk platform SaaS label putih (Gwynnie Bee, Haverdash) yang menguasai penyewaan pakaian di AS.</li><li>Mereka bentuk sistem tema dinamik yang diautomasi melalui hamparan dan skrip Swift dalaman.</li><li>Menyediakan rangka kerja ujian unit dan saluran paip CI/CD. Membimbing pasukan dan memindahkan pengetahuan seni bina.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Melancarkan pelbagai aplikasi serentak merentas domain perusahaan dan kreatif (Apache Industrial, Duet App, PropCube).</li><li>Berkembang daripada pemula kepada memimpin pasukan iOS 2 orang dan membimbing 4 pekerja baharu.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Kerja",
            "projects.heading": "Aplikasi dilancarkan",
            "projects.domain.social": "Sosial",
            "projects.domain.health": "Teknologi Kesihatan",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Fesyen / SaaS",
            "projects.domain.enterprise": "Perusahaan",
            "projects.domain.side": "Projek Sampingan",
            "projects.turnip.desc": "Aplikasi sosial dibina dari awal -- penyertaan, suapan, penciptaan kandungan, pemberitahuan dan pemprosesan imej. Kerjasama merentas fungsi dari hari pertama.",
            "projects.novasignal.desc": "Pendamping iOS untuk peranti perubatan robotik. Membolehkan hospital mengakses data aliran darah serebrum diproses AI untuk pencegahan strok.",
            "projects.paytm.desc": "Salah satu aplikasi pelaburan tertinggi penilaian di India. Saham, dana bersama, IPO, F&O. Merombak skrin utama dan modul dana bersama yang melayani jutaan pengguna.",
            "projects.caastle.desc": "Platform penyewaan pakaian label putih untuk pasaran AS. Mereka bentuk rangka kerja SaaS modular dan boleh ditema yang menguasai pelbagai aplikasi jenama.",
            "projects.enterprise.desc": "Aplikasi pengurusan dan pemantauan tenaga kerja perusahaan untuk Apache Industrial Services, digunakan merentas operasi di AS.",
            "projects.xo3.desc": "Permainan tic-tac-toe yang meneroka SwiftUI, Combine dan MultipeerConnectivity. Dibina dengan iOS 26+ dan Swift 6.",
            "projects.appstore": "Lihat di App Store",
            "projects.github": "Lihat di GitHub",

            /* ── Skills ── */
            "skills.label": "Kit Alat",
            "skills.heading": "Teknologi & kemahiran",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Seni Bina",
            "skills.ai": "AI & Penerokaan",
            "skills.tooling": "Perkakas & Proses",
            "skills.leadership": "Kepimpinan",

            /* ── Open Source ── */
            "oss.label": "Sumber Terbuka",
            "oss.heading": "Di GitHub",
            "oss.timbaktoe": "Permainan tic-tac-toe untuk mempelajari asas SwiftUI, Combine dan MultipeerConnectivity.",
            "oss.school": "Aplikasi permulaan untuk memahami corak SwiftUI dan Combine.",
            "oss.openpr": "Alat CLI untuk membuat permintaan tarik, dibina dengan Swift Package Manager.",
            "oss.math": "Pustaka utiliti matematik. 4 fork di GitHub.",
            "oss.geo": "Pembalut ringan untuk rangka kerja iOS CoreLocation.",
            "oss.setup": "Senarai semak untuk mengkonfigurasi mesin pembangunan baharu.",

            /* ── Education ── */
            "edu.label": "Pendidikan",
            "edu.heading": "Latar Belakang",
            "edu.degree": "B.Tech, Sains Komputer & Kejuruteraan",

            /* ── Off the clock ── */
            "offclock.label": "Di luar waktu kerja",
            "offclock.heading": "Bahagian bukan kejuruteraan",
            "offclock.sports.title": "Bola sepak, denai & batu",
            "offclock.sports.desc": "Bola sepak pada hujung minggu, mendaki apabila gunung memanggil, berlari apabila tidak. Melayan badan seperti kod pengeluaran -- tiada jalan pintas, tiada hutang teknikal.<span class=\"aside\">// Hari kaki tiada strategi pemulihan</span>",
            "offclock.fuel.title": "Bahan api bersih sahaja",
            "offclock.fuel.desc": "Makan bersih -- bukan \"kebanyakannya\", benar-benar bersih. Tiada alkohol, tiada merokok, tiada hari curang. Menganggap badan sebagai proses jangka panjang: sampah masuk, sampah keluar.<span class=\"aside\">// Sangat mengesyorkan orang lain turut mengamalkan gaya hidup ini</span>",
            "offclock.geo.title": "Peta, wang & kuasa",
            "offclock.geo.desc": "Terpesona dengan perubahan geopolitik, sejarah, geografi dan trend ekonomi. Suka menghubungkan titik antara mengapa sempadan berubah dan ke mana pasaran menuju.<span class=\"aside\">// Akan mengalihkan mana-mana perbualan makan malam kepada tesis makro</span>",
            "offclock.travel.title": "Cap pasport",
            "offclock.travel.desc": "Telah mengumpul selaran matahari merentasi Asia Tenggara dan seterusnya. Percaya penyahpepijatan terbaik berlaku pada ketinggian 35,000 kaki.",
            "offclock.photo.title": "Fotografi",
            "offclock.photo.desc": "Gemar mengabadikan detik, terutamanya ketika melancong. Storan telefon 80% foto, 15% cache Xcode, 5% ruang kosong sebenar.",
            "offclock.ideas.title": "Idea & pembinaan",
            "offclock.ideas.desc": "Sentiasa bermimpi tentang produk untuk dibina. Mempunyai aplikasi nota penuh dengan \"idea berjuta-juta\" -- melancarkan satu pun sudah bagus.<span class=\"aside\">// TODO: benar-benar lancarkan salah satu daripada ini</span>",

            /* ── Contact ── */
            "contact.label": "Hubungi",
            "contact.heading": "Jom bina sesuatu",
            "contact.sub": "Terbuka untuk perbualan tentang iOS, AI, idea produk, atau membina sesuatu bersama.",
            "contact.alllinks": "Semua Pautan",

            /* ── Footer ── */
            "footer.text": "Direka & dibina oleh Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profesional",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Imbas &middot; Kongsi"
        },
        vi: {
            /* ── Nav ── */
            "nav.about": "Gi\u1EDBi thi\u1EC7u",
            "nav.experience": "Kinh nghi\u1EC7m",
            "nav.projects": "D\u1EF1 \u00E1n",
            "nav.skills": "K\u1EF9 n\u0103ng",
            "nav.contact": "Li\u00EAn h\u1EC7",

            /* ── Hero ── */
            "hero.title": "<strong>K\u1EF9 s\u01B0 & nh\u00E0 ph\u00E1t tri\u1EC3n.</strong> Ph\u00E1t tri\u1EC3n \u1EE9ng d\u1EE5ng iOS ban ng\u00E0y,<br>kh\u00E1m ph\u00E1 AI v\u00E0 \u00FD t\u01B0\u1EDFng s\u1EA3n ph\u1EA9m ban \u0111\u00EAm.",
            "hero.location": "Bengaluru, \u1EA4n \u0110\u1ED9",
            "hero.builder": "Nh\u00E0 ph\u00E1t tri\u1EC3n t\u0103ng c\u01B0\u1EDDng b\u1EDFi AI",
            "hero.cta": "Li\u00EAn h\u1EC7 ngay",

            /* ── About ── */
            "about.label": "Gi\u1EDBi thi\u1EC7u",
            "about.heading": "Ngh\u1EC7 thu\u1EADt, s\u1EF1 t\u00F2 m\u00F2,<br>v\u00E0 m\u00E3 ngu\u1ED3n",
            "about.p1": "Vishal l\u00E0 m\u1ED9t <strong>K\u1EF9 s\u01B0 iOS Ch\u00EDnh</strong> y\u00EAu th\u00EDch x\u00E2y d\u1EF1ng m\u1ECDi th\u1EE9 t\u1EEB \u0111\u1EA7u. Anh \u00E3 ph\u00E1t h\u00E0nh c\u00E1c \u1EE9ng d\u1EE5ng th\u1EF1c t\u1EBF trong c\u00E1c l\u0129nh v\u1EF1c <strong>fintech, health-tech, m\u1EA1ng x\u00E3 h\u1ED9i v\u00E0 th\u01B0\u01A1ng m\u1EA1i \u0111i\u1EC7n t\u1EED</strong> -- m\u1ED7i l\u1EA7n \u0111\u1EC1u thi\u1EBFt k\u1EBF ki\u1EBFn tr\u00FAc c\u00F3 kh\u1EA3 n\u0103ng m\u1EDF r\u1ED9ng v\u00E0 d\u1EC5 b\u1EA3o tr\u00EC.",
            "about.p2": "Anh b\u1ECB thu h\u00FAt b\u1EDFi giai \u0111o\u1EA1n \"t\u1EEB kh\u00F4ng \u0111\u1EBFn m\u1ED9t\" c\u1EE7a s\u1EA3n ph\u1EA9m: thi\u1EBFt l\u1EADp ranh gi\u1EDBi module, t\u1EF1 \u0111\u1ED9ng h\u00F3a c\u00E1c quy tr\u00ECnh nh\u00E0m ch\u00E1n b\u1EB1ng Swift script, v\u00E0 h\u01B0\u1EDBng d\u1EABn \u0111\u1ED9i ng\u0169 l\u00E0m vi\u1EC7c t\u1EF1 tin. <strong>M\u00E3 s\u1EA1ch v\u00E0 c\u00E1c th\u00E0nh ph\u1EA7n t\u00E1i s\u1EED d\u1EE5ng</strong> l\u00E0 kh\u00F4ng th\u1EC3 th\u01B0\u01A1ng l\u01B0\u1EE3ng.",
            "about.p3": "Hi\u1EC7n \u0111ang kh\u00E1m ph\u00E1 giao \u0111i\u1EC3m gi\u1EEFa <strong>AI v\u00E0 di \u0111\u1ED9ng</strong> -- h\u1ECDc c\u00E1ch \u0111i\u1EC1u ph\u1ED1i LLM, agent v\u00E0 c\u00F4ng c\u1EE5 AI \u0111\u1EC3 nh\u00E2n n\u0103ng su\u1EA5t. M\u1EE5c ti\u00EAu d\u00E0i h\u1EA1n l\u00E0 <strong>ph\u00E1t h\u00E0nh s\u1EA3n ph\u1EA9m nhanh h\u01A1n</strong> b\u1EB1ng c\u00E1ch k\u1EBFt h\u1EE3p ngh\u1EC7 thu\u1EADt k\u1EF9 thu\u1EADt v\u1EDBi quy tr\u00ECnh t\u0103ng c\u01B0\u1EDDng b\u1EDFi AI, lu\u00F4n h\u1ECDc h\u1ECFi t\u1EEB ng\u01B0\u1EDDi kh\u00E1c.",
            "about.stat.apps": "\u1EE8ng d\u1EE5ng \u0111\u00E3 ph\u00E1t h\u00E0nh",
            "about.stat.domains": "L\u0129nh v\u1EF1c",
            "about.stat.scratch": "X\u00E2y d\u1EF1ng t\u1EEB \u0111\u1EA7u",
            "about.stat.curiosity": "S\u1EF1 t\u00F2 m\u00F2",

            /* ── Career ── */
            "career.label": "S\u1EF1 nghi\u1EC7p",
            "career.heading": "H\u00E0nh tr\u00ECnh \u0111\u1EBFn nay",
            "career.current": "hi\u1EC7n t\u1EA1i",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Th\u00E0nh vi\u00EAn \u0111\u1ED9i k\u1EF9 thu\u1EADt s\u00E1ng l\u1EADp, x\u00E2y d\u1EF1ng \u1EE9ng d\u1EE5ng t\u1EEB \u0111\u1EA7u.</li><li>L\u00E0m vi\u1EC7c li\u00EAn ch\u1EE9c n\u0103ng v\u1EDBi s\u1EA3n ph\u1EA9m, thi\u1EBFt k\u1EBF, t\u0103ng tr\u01B0\u1EDFng v\u00E0 k\u1EF9 thu\u1EADt tr\u00EAn c\u00E1c t\u00EDnh n\u0103ng ch\u00EDnh: onboarding, feed, s\u00E1ng t\u1EA1o n\u1ED9i dung, th\u00F4ng b\u00E1o v\u00E0 x\u1EED l\u00FD h\u00ECnh \u1EA3nh.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>X\u00E2y d\u1EF1ng \u1EE9ng d\u1EE5ng iOS \u0111\u1ED3ng h\u00E0nh t\u1EEB \u0111\u1EA7u cho thi\u1EBFt b\u1ECB y t\u1EBF robot \u0111o l\u01B0u l\u01B0\u1EE3ng m\u00E1u n\u00E3o.</li><li>Ki\u1EBFn tr\u00FAc cho quy m\u00F4 l\u1EDBn: c\u00E1c th\u00E0nh ph\u1EA7n UI t\u00E1i s\u1EED d\u1EE5ng, thi\u1EBFt k\u1EBF \u01B0u ti\u00EAn ki\u1EC3m th\u1EED, pipeline CI/CD Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>M\u1ED9t trong nh\u1EEFng k\u1EF9 s\u01B0 c\u1EA5p cao trong \u0111\u1ED9i iOS 13-16 ng\u01B0\u1EDDi cho \u1EE9ng d\u1EE5ng fintech \u0111\u01B0\u1EE3c \u0111\u00E1nh gi\u00E1 cao (4.3 sao).</li><li>C\u1EA3i ti\u1EBFn m\u00E0n h\u00ECnh ch\u00EDnh v\u00E0 module Qu\u1EF9 T\u01B0\u01A1ng h\u1ED7. H\u01B0\u1EDBng d\u1EABn k\u1EF9 s\u01B0 v\u00E0 d\u1EABn d\u1EAFt review m\u00E3.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>D\u1EABn d\u1EAFt ki\u1EBFn tr\u00FAc cho n\u1EC1n t\u1EA3ng SaaS white-label (Gwynnie Bee, Haverdash) cung c\u1EA5p d\u1ECBch v\u1EE5 thu\u00EA qu\u1EA7n \u00E1o t\u1EA1i M\u1EF9.</li><li>Thi\u1EBFt k\u1EBF h\u1EC7 th\u1ED1ng giao di\u1EC7n \u0111\u1ED9ng t\u1EF1 \u0111\u1ED9ng h\u00F3a qua b\u1EA3ng t\u00EDnh v\u00E0 Swift scripting n\u1ED9i b\u1ED9.</li><li>Thi\u1EBFt l\u1EADp framework ki\u1EC3m th\u1EED \u0111\u01A1n v\u1ECB v\u00E0 pipeline CI/CD. H\u01B0\u1EDBng d\u1EABn \u0111\u1ED9i ng\u0169 v\u00E0 chuy\u1EC3n giao ki\u1EBFn th\u1EE9c ki\u1EBFn tr\u00FAc.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Ph\u00E1t h\u00E0nh nhi\u1EC1u \u1EE9ng d\u1EE5ng \u0111\u1ED3ng th\u1EDDi trong c\u00E1c l\u0129nh v\u1EF1c doanh nghi\u1EC7p v\u00E0 s\u00E1ng t\u1EA1o (Apache Industrial, Duet App, PropCube).</li><li>Ph\u00E1t tri\u1EC3n t\u1EEB ng\u01B0\u1EDDi m\u1EDBi \u0111\u1EBFn d\u1EABn d\u1EAFt \u0111\u1ED9i iOS 2 ng\u01B0\u1EDDi v\u00E0 h\u01B0\u1EDBng d\u1EABn 4 nh\u00E2n vi\u00EAn m\u1EDBi.</li></ul>",

            /* ── Projects ── */
            "projects.label": "C\u00F4ng vi\u1EC7c",
            "projects.heading": "\u1EE8ng d\u1EE5ng \u0111\u00E3 ph\u00E1t h\u00E0nh",
            "projects.domain.social": "M\u1EA1ng x\u00E3 h\u1ED9i",
            "projects.domain.health": "C\u00F4ng ngh\u1EC7 y t\u1EBF",
            "projects.domain.fintech": "C\u00F4ng ngh\u1EC7 t\u00E0i ch\u00EDnh",
            "projects.domain.fashion": "Th\u1EDDi trang / SaaS",
            "projects.domain.enterprise": "Doanh nghi\u1EC7p",
            "projects.domain.side": "D\u1EF1 \u00E1n c\u00E1 nh\u00E2n",
            "projects.turnip.desc": "\u1EE8ng d\u1EE5ng m\u1EA1ng x\u00E3 h\u1ED9i x\u00E2y d\u1EF1ng t\u1EEB \u0111\u1EA7u -- onboarding, feed, s\u00E1ng t\u1EA1o n\u1ED9i dung, th\u00F4ng b\u00E1o v\u00E0 x\u1EED l\u00FD h\u00ECnh \u1EA3nh. H\u1EE3p t\u00E1c li\u00EAn ch\u1EE9c n\u0103ng t\u1EEB ng\u00E0y \u0111\u1EA7u ti\u00EAn.",
            "projects.novasignal.desc": "\u1EE8ng d\u1EE5ng iOS \u0111\u1ED3ng h\u00E0nh cho thi\u1EBFt b\u1ECB y t\u1EBF robot. Gi\u00FAp b\u1EC7nh vi\u1EC7n truy c\u1EADp d\u1EEF li\u1EC7u l\u01B0u l\u01B0\u1EE3ng m\u00E1u n\u00E3o \u0111\u01B0\u1EE3c x\u1EED l\u00FD b\u1EDFi AI \u0111\u1EC3 ph\u00F2ng ng\u1EEBa \u0111\u1ED9t qu\u1EF5.",
            "projects.paytm.desc": "M\u1ED9t trong nh\u1EEFng \u1EE9ng d\u1EE5ng \u0111\u1EA7u t\u01B0 \u0111\u01B0\u1EE3c \u0111\u00E1nh gi\u00E1 cao nh\u1EA5t \u1EA4n \u0110\u1ED9. C\u1ED5 phi\u1EBFu, qu\u1EF9 t\u01B0\u01A1ng h\u1ED7, IPO, F&O. C\u1EA3i ti\u1EBFn m\u00E0n h\u00ECnh ch\u00EDnh v\u00E0 module qu\u1EF9 t\u01B0\u01A1ng h\u1ED7 ph\u1EE5c v\u1EE5 h\u00E0ng tri\u1EC7u ng\u01B0\u1EDDi d\u00F9ng.",
            "projects.caastle.desc": "N\u1EC1n t\u1EA3ng thu\u00EA qu\u1EA7n \u00E1o white-label cho th\u1ECB tr\u01B0\u1EDDng M\u1EF9. Ki\u1EBFn tr\u00FAc framework SaaS module h\u00F3a, c\u00F3 th\u1EC3 t\u00F9y ch\u1EC9nh giao di\u1EC7n cho nhi\u1EC1u th\u01B0\u01A1ng hi\u1EC7u.",
            "projects.enterprise.desc": "\u1EE8ng d\u1EE5ng qu\u1EA3n l\u00FD v\u00E0 gi\u00E1m s\u00E1t l\u1EF1c l\u01B0\u1EE3ng lao \u0111\u1ED9ng doanh nghi\u1EC7p cho Apache Industrial Services, \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng tr\u00EAn to\u00E0n b\u1ED9 ho\u1EA1t \u0111\u1ED9ng t\u1EA1i M\u1EF9.",
            "projects.xo3.desc": "Tr\u00F2 ch\u01A1i tic-tac-toe kh\u00E1m ph\u00E1 SwiftUI, Combine v\u00E0 MultipeerConnectivity. X\u00E2y d\u1EF1ng v\u1EDBi iOS 26+ v\u00E0 Swift 6.",
            "projects.appstore": "Xem tr\u00EAn App Store",
            "projects.github": "Xem tr\u00EAn GitHub",

            /* ── Skills ── */
            "skills.label": "C\u00F4ng c\u1EE5",
            "skills.heading": "C\u00F4ng ngh\u1EC7 & k\u1EF9 n\u0103ng",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Ki\u1EBFn tr\u00FAc",
            "skills.ai": "AI & Kh\u00E1m ph\u00E1",
            "skills.tooling": "C\u00F4ng c\u1EE5 & Quy tr\u00ECnh",
            "skills.leadership": "L\u00E3nh \u0111\u1EA1o",

            /* ── Open Source ── */
            "oss.label": "M\u00E3 ngu\u1ED3n m\u1EDF",
            "oss.heading": "Tr\u00EAn GitHub",
            "oss.timbaktoe": "Tr\u00F2 ch\u01A1i tic-tac-toe \u0111\u1EC3 h\u1ECDc c\u01A1 b\u1EA3n SwiftUI, Combine v\u00E0 MultipeerConnectivity.",
            "oss.school": "\u1EE8ng d\u1EE5ng kh\u1EDFi \u0111\u1EA7u \u0111\u1EC3 hi\u1EC3u c\u00E1c m\u1EABu SwiftUI v\u00E0 Combine.",
            "oss.openpr": "C\u00F4ng c\u1EE5 CLI \u0111\u1EC3 t\u1EA1o pull request, x\u00E2y d\u1EF1ng v\u1EDBi Swift Package Manager.",
            "oss.math": "Th\u01B0 vi\u1EC7n ti\u1EC7n \u00EDch to\u00E1n h\u1ECDc. 4 fork tr\u00EAn GitHub.",
            "oss.geo": "Wrapper nh\u1EB9 cho framework iOS CoreLocation.",
            "oss.setup": "Danh s\u00E1ch ki\u1EC3m tra \u0111\u1EC3 c\u1EA5u h\u00ECnh m\u00E1y ph\u00E1t tri\u1EC3n m\u1EDBi.",

            /* ── Education ── */
            "edu.label": "H\u1ECDc v\u1EA5n",
            "edu.heading": "N\u1EC1n t\u1EA3ng",
            "edu.degree": "C\u1EED nh\u00E2n C\u00F4ng ngh\u1EC7, Khoa h\u1ECDc M\u00E1y t\u00EDnh & K\u1EF9 thu\u1EADt",

            /* ── Off the clock ── */
            "offclock.label": "Ngo\u00E0i gi\u1EDD l\u00E0m",
            "offclock.heading": "Nh\u1EEFng \u0111i\u1EC1u ngo\u00E0i k\u1EF9 thu\u1EADt",
            "offclock.sports.title": "B\u00F3ng \u0111\u00E1, \u0111\u01B0\u1EDDng m\u00F2n & d\u1EB7m \u0111\u01B0\u1EDDng",
            "offclock.sports.desc": "B\u00F3ng \u0111\u00E1 cu\u1ED1i tu\u1EA7n, leo n\u00FAi khi n\u00FAi g\u1ECDi, ch\u1EA1y b\u1ED9 khi kh\u00F4ng. Coi c\u01A1 th\u1EC3 nh\u01B0 m\u00E3 production -- kh\u00F4ng \u0111\u01B0\u1EDDng t\u1EAFt, kh\u00F4ng n\u1EE3 k\u1EF9 thu\u1EADt.<span class=\"aside\">// Ng\u00E0y t\u1EADp ch\u00E2n kh\u00F4ng c\u00F3 chi\u1EBFn l\u01B0\u1EE3c rollback</span>",
            "offclock.fuel.title": "Ch\u1EC9 n\u0103ng l\u01B0\u1EE3ng s\u1EA1ch",
            "offclock.fuel.desc": "\u0102n s\u1EA1ch -- kh\u00F4ng ph\u1EA3i \"ph\u1EA7n l\u1EDBn\", m\u00E0 th\u1EF1c s\u1EF1 s\u1EA1ch. Kh\u00F4ng r\u01B0\u1EE3u, kh\u00F4ng thu\u1ED1c l\u00E1, kh\u00F4ng b\u1EEFa gian l\u1EADn. Coi c\u01A1 th\u1EC3 l\u00E0 m\u1ED9t ti\u1EBFn tr\u00ECnh ch\u1EA1y d\u00E0i: r\u00E1c v\u00E0o, r\u00E1c ra.<span class=\"aside\">// R\u1EA5t khuy\u1EBFn kh\u00EDch ng\u01B0\u1EDDi kh\u00E1c c\u0169ng \u00E1p d\u1EE5ng l\u1ED1i s\u1ED1ng n\u00E0y</span>",
            "offclock.geo.title": "B\u1EA3n \u0111\u1ED3, ti\u1EC1n b\u1EA1c & quy\u1EC1n l\u1EF1c",
            "offclock.geo.desc": "B\u1ECB cu\u1ED1n h\u00FAt b\u1EDFi bi\u1EBFn \u0111\u1ED5i \u0111\u1ECBa ch\u00EDnh tr\u1ECB, l\u1ECBch s\u1EED, \u0111\u1ECBa l\u00FD v\u00E0 xu h\u01B0\u1EDBng kinh t\u1EBF. Th\u00EDch k\u1EBFt n\u1ED1i c\u00E1c \u0111i\u1EC3m gi\u1EEFa l\u00FD do bi\u00EAn gi\u1EDBi thay \u0111\u1ED5i v\u00E0 th\u1ECB tr\u01B0\u1EDDng \u0111ang h\u01B0\u1EDBng t\u1EDBi \u0111\u00E2u.<span class=\"aside\">// S\u1EBD l\u00E0m ch\u1EC7ch h\u01B0\u1EDBng b\u1EA5t k\u1EF3 bu\u1ED5i t\u1ED1i n\u00E0o th\u00E0nh lu\u1EADn \u0111i\u1EC3m v\u0129 m\u00F4</span>",
            "offclock.travel.title": "D\u1EA5u m\u1ED9c h\u1ED9 chi\u1EBFu",
            "offclock.travel.desc": "\u0110\u00E3 thu th\u1EADp v\u1EBFt ch\u00E1y n\u1EAFng kh\u1EAFp \u0110\u00F4ng Nam \u00C1 v\u00E0 xa h\u01A1n. Tin r\u1EB1ng vi\u1EC7c g\u1EE1 l\u1ED7i t\u1ED1t nh\u1EA5t x\u1EA3y ra \u1EDF \u0111\u1ED9 cao 35.000 feet.",
            "offclock.photo.title": "Nhi\u1EBFp \u1EA3nh",
            "offclock.photo.desc": "Th\u00EDch ghi l\u1EA1i kho\u1EA3nh kh\u1EAFc, ch\u1EE7 y\u1EBFu khi \u0111i du l\u1ECBch. B\u1ED9 nh\u1EDB \u0111i\u1EC7n tho\u1EA1i 80% \u1EA3nh, 15% b\u1ED9 nh\u1EDB \u0111\u1EC7m Xcode, 5% dung l\u01B0\u1EE3ng tr\u1ED1ng th\u1EF1c s\u1EF1.",
            "offclock.ideas.title": "\u00DD t\u01B0\u1EDFng & x\u00E2y d\u1EF1ng",
            "offclock.ideas.desc": "Li\u00EAn t\u1EE5c m\u01A1 m\u1ED9ng v\u1EC1 c\u00E1c s\u1EA3n ph\u1EA9m \u0111\u1EC3 x\u00E2y d\u1EF1ng. \u1EE8ng d\u1EE5ng ghi ch\u00FA \u0111\u1EA7y \"\u00FD t\u01B0\u1EDFng tri\u1EC7u \u0111\u00F4\" -- ph\u00E1t h\u00E0nh \u0111\u01B0\u1EE3c m\u1ED9t c\u00E1i th\u00EC t\u1ED1t.<span class=\"aside\">// TODO: th\u1EF1c s\u1EF1 ph\u00E1t h\u00E0nh m\u1ED9t trong s\u1ED1 n\u00E0y</span>",

            /* ── Contact ── */
            "contact.label": "K\u1EBFt n\u1ED1i",
            "contact.heading": "H\u00E3y x\u00E2y d\u1EF1ng \u0111i\u1EC1u g\u00EC \u0111\u00F3",
            "contact.sub": "S\u1EB5n s\u00E0ng tr\u00F2 chuy\u1EC7n v\u1EC1 iOS, AI, \u00FD t\u01B0\u1EDFng s\u1EA3n ph\u1EA9m, ho\u1EB7c c\u00F9ng nhau x\u00E2y d\u1EF1ng.",
            "contact.alllinks": "T\u1EA5t c\u1EA3 li\u00EAn k\u1EBFt",

            /* ── Footer ── */
            "footer.text": "Thi\u1EBFt k\u1EBF & x\u00E2y d\u1EF1ng b\u1EDFi Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Chuy\u00EAn nghi\u1EC7p",
            "lo.portfolio": "Danh m\u1EE5c \u0111\u1EA7u t\u01B0",
            "lo.scan": "Qu\u00E9t &middot; Chia s\u1EBB"
        },
        sv: {
            /* ── Nav ── */
            "nav.about": "Om",
            "nav.experience": "Erfarenhet",
            "nav.projects": "Projekt",
            "nav.skills": "F\u00E4rdigheter",
            "nav.contact": "Kontakt",

            /* ── Hero ── */
            "hero.title": "<strong>Ingenj\u00F6r &amp; byggare.</strong> Levererar iOS-appar p\u00E5 dagarna,<br>experimenterar med AI och produktid\u00E9er p\u00E5 kv\u00E4llarna.",
            "hero.location": "Bengaluru, Indien",
            "hero.builder": "AI-f\u00F6rst\u00E4rkt byggare",
            "hero.cta": "H\u00F6r av dig",

            /* ── About ── */
            "about.label": "Om",
            "about.heading": "Hantverk, nyfikenhet<br>och kod",
            "about.p1": "Vishal \u00E4r en <strong>Principal iOS-ingenj\u00F6r</strong> som \u00E4lskar att bygga saker fr\u00E5n grunden. Han har levererat produktionsappar inom <strong>fintech, h\u00E4lsoteknik, sociala medier och e-handel</strong> \u2013 varje g\u00E5ng med en arkitektur som skalar och f\u00F6rblir underh\u00E5llbar.",
            "about.p2": "Han dras till produkters \"noll till ett\"-fas: att rita modulavgr\u00E4nsningar, automatisera tr\u00E5kiga arbetsfl\u00F6den med Swift-skript och handleda team att arbeta med sj\u00E4lvf\u00F6rtroende. <strong>Ren kod och \u00E5teranv\u00E4ndbara komponenter</strong> \u00E4r icke-f\u00F6rhandlingsbara.",
            "about.p3": "Utforskar f\u00F6r n\u00E4rvarande sk\u00E4rningspunkten mellan <strong>AI och mobil</strong> \u2013 l\u00E4r sig orkestrera LLM:er, agenter och AI-verktyg f\u00F6r att multiplicera produktiviteten. Det l\u00E5ngsiktiga m\u00E5let \u00E4r att <strong>leverera produkter snabbare</strong> genom att blanda ingenj\u00F6rshantverk med AI-f\u00F6rst\u00E4rkta arbetsfl\u00F6den, alltid l\u00E4rande fr\u00E5n andra.",
            "about.stat.apps": "Levererade appar",
            "about.stat.domains": "Dom\u00E4ner",
            "about.stat.scratch": "Byggt fr\u00E5n grunden",
            "about.stat.curiosity": "Nyfikenhet",

            /* ── Career ── */
            "career.label": "Karri\u00E4r",
            "career.heading": "Resan hittills",
            "career.current": "nuvarande",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Del av det grundande ingenj\u00F6rsteamet, byggde appen fr\u00E5n grunden.</li><li>Arbetar tv\u00E4rfunktionellt med produkt, design, tillv\u00E4xt och teknik p\u00E5 k\u00E4rnfunktioner: onboarding, fl\u00F6de, skapande, notifieringar och bildbehandling.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Byggde iOS-kompanjonappen fr\u00E5n grunden f\u00F6r en robotmedicinsk enhet som m\u00E4ter cerebralt blodfl\u00F6de.</li><li>Arkitekterade f\u00F6r skalbarhet: \u00E5teranv\u00E4ndbara UI-komponenter, testbarhet-f\u00F6rst-design, Xcode Cloud CI/CD-pipeline.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>En av senioringenj\u00F6rerna i ett iOS-team p\u00E5 13\u201316 personer f\u00F6r en topprankad fintech-app (4,3 stj\u00E4rnor).</li><li>F\u00F6rnyade hemsk\u00E4rmen och fondmodulen. Handledde ingenj\u00F6rer och ledde kodgranskningar.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Ledde arkitekturen f\u00F6r en white-label SaaS-plattform (Gwynnie Bee, Haverdash) som drev kl\u00E4duthyrning i USA.</li><li>Designade ett dynamiskt temasystem automatiserat via kalkylblad och interna Swift-skript.</li><li>Satte upp ramverket f\u00F6r enhetstester och CI/CD-pipeline. Handledde teamet och \u00F6verf\u00F6rde arkitekturkunskap.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Levererade flera appar samtidigt inom f\u00F6retags- och kreativa dom\u00E4ner (Apache Industrial, Duet App, PropCube).</li><li>V\u00E4xte fr\u00E5n nyb\u00F6rjare till att leda ett 2-personers iOS-team och handleda 4 nyanst\u00E4llda.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Arbete",
            "projects.heading": "Levererade appar",
            "projects.domain.social": "Socialt",
            "projects.domain.health": "H\u00E4lsoteknik",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Mode / SaaS",
            "projects.domain.enterprise": "F\u00F6retag",
            "projects.domain.side": "Sidoprojekt",
            "projects.turnip.desc": "Social app byggd fr\u00E5n grunden \u2013 onboarding, fl\u00F6de, inneh\u00E5llsskapande, notifieringar och bildbehandling. Tv\u00E4rfunktionellt samarbete fr\u00E5n dag ett.",
            "projects.novasignal.desc": "iOS-kompanjon f\u00F6r en robotmedicinsk enhet. G\u00F6r det m\u00F6jligt f\u00F6r sjukhus att f\u00E5 tillg\u00E5ng till AI-bearbetad data om cerebralt blodfl\u00F6de f\u00F6r strokeprevention.",
            "projects.paytm.desc": "En av Indiens topprankade investeringsappar. Aktier, fonder, b\u00F6rsintroduktioner, F&O. F\u00F6rnyade hemsk\u00E4rmen och fondmodulen som betj\u00E4nar miljontals anv\u00E4ndare.",
            "projects.caastle.desc": "White-label kl\u00E4duthyrningsplattform f\u00F6r den amerikanska marknaden. Arkitekterade det modul\u00E4ra, temabara SaaS-ramverket som driver flera varum\u00E4rkesappar.",
            "projects.enterprise.desc": "F\u00F6retagsapp f\u00F6r personalhantering och \u00F6vervakning f\u00F6r Apache Industrial Services, anv\u00E4nd \u00F6ver hela verksamheten i USA.",
            "projects.xo3.desc": "Ett luffarschack-spel som utforskar SwiftUI, Combine och MultipeerConnectivity. Byggt med iOS 26+ och Swift 6.",
            "projects.appstore": "Visa p\u00E5 App Store",
            "projects.github": "Visa p\u00E5 GitHub",

            /* ── Skills ── */
            "skills.label": "Verktyg",
            "skills.heading": "Teknologier &amp; f\u00E4rdigheter",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Arkitektur",
            "skills.ai": "AI &amp; utforskning",
            "skills.tooling": "Verktyg &amp; process",
            "skills.leadership": "Ledarskap",

            /* ── Open Source ── */
            "oss.label": "\u00D6ppen k\u00E4llkod",
            "oss.heading": "P\u00E5 GitHub",
            "oss.timbaktoe": "Ett luffarschack-spel f\u00F6r att l\u00E4ra sig grunderna i SwiftUI, Combine och MultipeerConnectivity.",
            "oss.school": "Startapp f\u00F6r att f\u00F6rst\u00E5 SwiftUI- och Combine-m\u00F6nster.",
            "oss.openpr": "CLI-verktyg f\u00F6r att skapa pull requests, byggt med Swift Package Manager.",
            "oss.math": "Matematiskt verktygsbibliotek. 4 forkar p\u00E5 GitHub.",
            "oss.geo": "L\u00E4ttviktsomslag \u00F6ver iOS CoreLocation-ramverket.",
            "oss.setup": "En checklista f\u00F6r att konfigurera nya utvecklingsmaskiner.",

            /* ── Education ── */
            "edu.label": "Utbildning",
            "edu.heading": "Bakgrund",
            "edu.degree": "Civilingenj\u00F6r, datavetenskap &amp; datateknik",

            /* ── Off the clock ── */
            "offclock.label": "Utanf\u00F6r jobbet",
            "offclock.heading": "Det icke-tekniska",
            "offclock.sports.title": "Fotboll, stigar &amp; mil",
            "offclock.sports.desc": "Fotboll p\u00E5 helgerna, vandring n\u00E4r bergen kallar, l\u00F6pning n\u00E4r de inte g\u00F6r det. Behandlar kroppen som produktionskod \u2013 inga genv\u00E4gar, ingen teknisk skuld.<span class=\"aside\">// Bendag har ingen \u00E5terrullningsstrategi</span>",
            "offclock.fuel.title": "Bara rent br\u00E4nsle",
            "offclock.fuel.desc": "\u00C4ter rent \u2013 inte \"mestadels\", faktiskt rent. Ingen alkohol, ingen r\u00F6kning, inga fuskm\u00E5ltider. Ser kroppen som en l\u00E5ngk\u00F6rande process: skr\u00E4p in, skr\u00E4p ut.<span class=\"aside\">// Rekommenderar starkt att andra ocks\u00E5 anammar denna livsstil</span>",
            "offclock.geo.title": "Kartor, pengar &amp; makt",
            "offclock.geo.desc": "Fascinerad av geopolitiska skiften, historia, geografi och ekonomiska trender. \u00C4lskar att koppla ihop prickarna mellan varf\u00F6r gr\u00E4nser flyttades och vart marknaderna \u00E4r p\u00E5 v\u00E4g.<span class=\"aside\">// Kommer sp\u00E5ra ur vilken middagskonversation som helst till en makrotes</span>",
            "offclock.travel.title": "Passstj\u00E4rnor",
            "offclock.travel.desc": "Har samlat solbr\u00E4nnor \u00F6ver Sydostasien och bortom. Tror att den b\u00E4sta fels\u00F6kningen sker p\u00E5 10 000 meters h\u00F6jd.",
            "offclock.photo.title": "Fotografi",
            "offclock.photo.desc": "Tycker om att f\u00E5nga \u00F6gonblick, fr\u00E4mst n\u00E4r han reser. Telefonlagringen \u00E4r 80% foton, 15% Xcode-cache, 5% faktiskt ledigt utrymme.",
            "offclock.ideas.title": "Id\u00E9er &amp; byggande",
            "offclock.ideas.desc": "Dagdr\u00F6mmer st\u00E4ndigt om produkter att bygga. Har en anteckningsapp full av \"miljonid\u00E9er\" \u2013 att leverera en vore trevligt.<span class=\"aside\">// TODO: faktiskt leverera en av dessa</span>",

            /* ── Contact ── */
            "contact.label": "Kontakt",
            "contact.heading": "L\u00E5t oss bygga n\u00E5got",
            "contact.sub": "\u00D6ppen f\u00F6r samtal om iOS, AI, produktid\u00E9er eller att bygga saker tillsammans.",
            "contact.alllinks": "Alla l\u00E4nkar",

            /* ── Footer ── */
            "footer.text": "Designad &amp; byggd av Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Professionellt",
            "lo.portfolio": "Portf\u00F6lj",
            "lo.scan": "Skanna &middot; Dela"
        },
        ro: {
            /* ── Nav ── */
            "nav.about": "Despre",
            "nav.experience": "Experien\u021B\u0103",
            "nav.projects": "Proiecte",
            "nav.skills": "Competen\u021Be",
            "nav.contact": "Contact",

            /* ── Hero ── */
            "hero.title": "<strong>Inginer \u0219i creator.</strong> Livreaz\u0103 aplica\u021Bii iOS ziua,<br>experimenteaz\u0103 cu AI \u0219i idei de produs noaptea.",
            "hero.location": "Bengaluru, India",
            "hero.builder": "Creator augmentat de AI",
            "hero.cta": "Ia leg\u0103tura",

            /* ── About ── */
            "about.label": "Despre",
            "about.heading": "Me\u0219te\u0219ug, curiozitate<br>\u0219i cod",
            "about.p1": "Vishal este un <strong>Principal iOS Engineer</strong> c\u0103ruia \u00EEi place s\u0103 construiasc\u0103 lucruri de la zero. A livrat aplica\u021Bii \u00EEn produc\u021Bie \u00EEn <strong>fintech, health-tech, social media \u0219i e-commerce</strong> -- de fiecare dat\u0103 proiect\u00E2nd o arhitectur\u0103 scalabil\u0103 \u0219i u\u0219or de \u00EEntre\u021Binut.",
            "about.p2": "Este atras de faza \u201Ede la zero la unu\u201D a produselor: definirea limitelor modulelor, automatizarea fluxurilor cu scripturi Swift \u0219i mentoratul echipelor. <strong>Codul curat \u0219i componentele reutilizabile</strong> sunt non-negociabile.",
            "about.p3": "\u00CEn prezent exploreaz\u0103 intersec\u021Bia dintre <strong>AI \u0219i mobile</strong> -- \u00EEnv\u0103\u021B\u00E2nd s\u0103 orchestreze LLM-uri, agen\u021Bi \u0219i instrumente AI pentru a multiplica productivitatea. Obiectivul pe termen lung este s\u0103 <strong>livreze produse mai rapid</strong>, combin\u00E2nd me\u0219te\u0219ugul ingineresc cu fluxuri augmentate de AI, \u00EEnv\u0103\u021B\u00E2nd mereu de la al\u021Bii.",
            "about.stat.apps": "Aplica\u021Bii livrate",
            "about.stat.domains": "Domenii",
            "about.stat.scratch": "Construit de la zero",
            "about.stat.curiosity": "Curiozitate",

            /* ── Career ── */
            "career.label": "Carier\u0103",
            "career.heading": "Drumul parcurs",
            "career.current": "prezent",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Parte din echipa fondatoare de inginerie, construind aplica\u021Bia de la zero.</li><li>Colaborare cross-func\u021Bional\u0103 cu produsul, designul, cre\u0219terea \u0219i ingineria pe func\u021Bionalit\u0103\u021Bi cheie: onboarding, feed, crea\u021Bie, notific\u0103ri \u0219i procesare de imagini.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>A construit aplica\u021Bia companion iOS de la zero pentru un dispozitiv medical robotic care m\u0103soar\u0103 fluxul sanguin cerebral.</li><li>Arhitectur\u0103 proiectat\u0103 pentru scalabilitate: componente UI reutilizabile, design test-first, pipeline CI/CD cu Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Unul dintre inginerii seniori \u00EEntr-o echip\u0103 iOS de 13-16 persoane pentru o aplica\u021Bie fintech de top (4,3 stele).</li><li>A reproiectat ecranul principal \u0219i modulul de fonduri mutuale. A mentorat ingineri \u0219i a condus recenzii de cod.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>A condus arhitectura unei platforme SaaS white-label (Gwynnie Bee, Haverdash) pentru \u00EEnchirierea de haine \u00EEn SUA.</li><li>A proiectat un sistem dinamic de tematizare automatizat prin foi de calcul \u0219i scripturi Swift interne.</li><li>A configurat framework-ul de testare unitar\u0103 \u0219i pipeline-ul CI/CD. A mentorat echipa \u0219i a transferat cuno\u0219tin\u021Bele de arhitectur\u0103.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>A livrat simultan mai multe aplica\u021Bii \u00EEn domenii enterprise \u0219i creative (Apache Industrial, Duet App, PropCube).</li><li>A crescut de la junior la lider al unei echipe iOS de 2 persoane \u0219i mentor pentru 4 angaja\u021Bi noi.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Lucr\u0103ri",
            "projects.heading": "Aplica\u021Bii livrate",
            "projects.domain.social": "Social",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "Mod\u0103 / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Proiect personal",
            "projects.turnip.desc": "Aplica\u021Bie social\u0103 construit\u0103 de la zero -- onboarding, feed, creare de con\u021Binut, notific\u0103ri \u0219i procesare de imagini. Colaborare cross-func\u021Bional\u0103 din prima zi.",
            "projects.novasignal.desc": "Companion iOS pentru un dispozitiv medical robotic. Permite spitalelor s\u0103 acceseze date despre fluxul sanguin cerebral procesate de AI pentru prevenirea accidentului vascular cerebral.",
            "projects.paytm.desc": "Una dintre cele mai bine cotate aplica\u021Bii de investi\u021Bii din India. Ac\u021Biuni, fonduri mutuale, IPO-uri, F&O. Ecranul principal \u0219i modulul de fonduri reproiectate pentru milioane de utilizatori.",
            "projects.caastle.desc": "Platform\u0103 white-label de \u00EEnchiriere haine pentru pia\u021Ba din SUA. A proiectat framework-ul SaaS modular \u0219i tematizabil care alimenteaz\u0103 mai multe aplica\u021Bii de brand.",
            "projects.enterprise.desc": "Aplica\u021Bie enterprise de gestionare \u0219i monitorizare a for\u021Bei de munc\u0103 pentru Apache Industrial Services, utilizat\u0103 \u00EEn opera\u021Biunile din SUA.",
            "projects.xo3.desc": "Un joc X \u0219i O pentru explorarea SwiftUI, Combine \u0219i MultipeerConnectivity. Construit cu iOS 26+ \u0219i Swift 6.",
            "projects.appstore": "Vezi pe App Store",
            "projects.github": "Vezi pe GitHub",

            /* ── Skills ── */
            "skills.label": "Instrumente",
            "skills.heading": "Tehnologii \u0219i competen\u021Be",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Arhitectur\u0103",
            "skills.ai": "AI \u0219i explorare",
            "skills.tooling": "Instrumente \u0219i procese",
            "skills.leadership": "Leadership",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Pe GitHub",
            "oss.timbaktoe": "Un joc X \u0219i O pentru a \u00EEnv\u0103\u021Ba bazele SwiftUI, Combine \u0219i MultipeerConnectivity.",
            "oss.school": "Aplica\u021Bie de start pentru \u00EEn\u021Belegerea pattern-urilor SwiftUI \u0219i Combine.",
            "oss.openpr": "Instrument CLI pentru crearea de pull request-uri, construit cu Swift Package Manager.",
            "oss.math": "Bibliotec\u0103 de utilit\u0103\u021Bi matematice. 4 fork-uri pe GitHub.",
            "oss.geo": "Wrapper u\u0219or peste framework-ul iOS CoreLocation.",
            "oss.setup": "O list\u0103 de verificare pentru configurarea ma\u0219inilor noi de dezvoltare.",

            /* ── Education ── */
            "edu.label": "Educa\u021Bie",
            "edu.heading": "Parcurs academic",
            "edu.degree": "Licen\u021B\u0103 \u00EEn Informatic\u0103 \u0219i Ingineria Calculatoarelor",

            /* ── Off the clock ── */
            "offclock.label": "\u00CEn afara programului",
            "offclock.heading": "Dincolo de inginerie",
            "offclock.sports.title": "Fotbal, trasee \u0219i kilometri",
            "offclock.sports.desc": "Fotbal \u00EEn weekend, drumetii c\u00E2nd mun\u021Bii cheam\u0103, alergare c\u00E2nd nu cheam\u0103. Trateaz\u0103 corpul ca pe codul de produc\u021Bie -- f\u0103r\u0103 scurt\u0103turi, f\u0103r\u0103 datorie tehnic\u0103.<span class=\"aside\">// Ziua picioarelor nu are strategie de rollback</span>",
            "offclock.fuel.title": "Doar combustibil curat",
            "offclock.fuel.desc": "M\u0103n\u00E2nc\u0103 curat -- nu \u201E\u00EEn mare parte\u201D, ci chiar curat. F\u0103r\u0103 alcool, f\u0103r\u0103 fumat, f\u0103r\u0103 abateri. Consider\u0103 corpul un proces de lung\u0103 durat\u0103: gunoi la intrare, gunoi la ie\u0219ire.<span class=\"aside\">// Recomand\u0103 insistent \u0219i altora acela\u0219i stil de via\u021B\u0103</span>",
            "offclock.geo.title": "H\u0103r\u021Bi, bani \u0219i putere",
            "offclock.geo.desc": "Fascinat de schimb\u0103rile geopolitice, istorie, geografie \u0219i tendintele economice. \u00CEi place s\u0103 conecteze punctele \u00EEntre de ce s-au mutat grani\u021Bele \u0219i \u00EEncotro se \u00EEndreapt\u0103 pie\u021Bele.<span class=\"aside\">// Va deturna orice cin\u0103 \u00EEntr-o tez\u0103 macroeconomic\u0103</span>",
            "offclock.travel.title": "\u0218tampile \u00EEn pa\u0219aport",
            "offclock.travel.desc": "A colec\u021Bionat arsuri solare \u00EEn Asia de Sud-Est \u0219i nu numai. Crede c\u0103 cel mai bun debugging se face la 35.000 de picioare altitudine.",
            "offclock.photo.title": "Fotografie",
            "offclock.photo.desc": "\u00CEi place s\u0103 surprind\u0103 momente, mai ales c\u00E2nd c\u0103l\u0103tore\u0219te. Memoria telefonului: 80% fotografii, 15% cache Xcode, 5% spa\u021Biu liber.",
            "offclock.ideas.title": "Idei \u0219i construc\u021Bie",
            "offclock.ideas.desc": "Viseaz\u0103 constant la produse de construit. Are o aplica\u021Bie de noti\u021Be plin\u0103 de \u201Eidei de un milion\u201D -- ar fi frumos s\u0103 livreze una.<span class=\"aside\">// TODO: chiar s\u0103 livreze una dintre ele</span>",

            /* ── Contact ── */
            "contact.label": "Contact",
            "contact.heading": "Hai s\u0103 construim ceva",
            "contact.sub": "Deschis la conversa\u021Bii despre iOS, AI, idei de produs sau construc\u021Bie \u00EEmpreun\u0103.",
            "contact.alllinks": "Toate linkurile",

            /* ── Footer ── */
            "footer.text": "Proiectat \u0219i construit de Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profesional",
            "lo.portfolio": "Portofoliu",
            "lo.scan": "Scaneaz\u0103 &middot; Distribuie"
        },
        cs: {
            /* ── Nav ── */
            "nav.about": "O mn\u011B",
            "nav.experience": "Zku\u0161enosti",
            "nav.projects": "Projekty",
            "nav.skills": "Dovednosti",
            "nav.contact": "Kontakt",

            /* ── Hero ── */
            "hero.title": "<strong>In\u017Een\u00FDr a tv\u016Frce.</strong> P\u0159es den dod\u00E1v\u00E1 iOS aplikace,<br>v noci experimentuje s AI a produktov\u00FDmi n\u00E1pady.",
            "hero.location": "Bengaluru, Indie",
            "hero.builder": "Tv\u016Frce s podporou AI",
            "hero.cta": "Spojte se se mnou",

            /* ── About ── */
            "about.label": "O mn\u011B",
            "about.heading": "\u0158emeslo, zv\u011Bdavost<br>a k\u00F3d",
            "about.p1": "Vishal je <strong>hlavn\u00ED iOS in\u017Een\u00FDr</strong>, kter\u00FD r\u00E1d stav\u00ED v\u011Bci od nuly. Dodal produk\u010Dn\u00ED aplikace v oblastech <strong>fintech, health-tech, soci\u00E1ln\u00ED m\u00E9dia a e-commerce</strong> -- poka\u017Ed\u00E9 navrhl architekturu, kter\u00E1 \u0161k\u00E1luje a z\u016Fst\u00E1v\u00E1 udr\u017Eovateln\u00E1.",
            "about.p2": "P\u0159itahuje ho f\u00E1ze \u201Eod nuly k jedni\u010Dce\u201C produkt\u016F: stanovov\u00E1n\u00ED hranic modul\u016F, automatizace \u00FAmorn\u00FDch workflow pomoc\u00ED Swift skript\u016F a mentorov\u00E1n\u00ED t\u00FDm\u016F, aby se pohybovaly s jistotou. <strong>\u010Cist\u00FD k\u00F3d a znovupou\u017Eiteln\u00E9 komponenty</strong> jsou nep\u0159ekro\u010Diteln\u00E9.",
            "about.p3": "V sou\u010Dasnosti zkoum\u00E1 pr\u016Fse\u010D\u00EDk <strong>AI a mobiln\u00EDch technologi\u00ED</strong> -- u\u010D\u00ED se orchestrovat LLM, agenty a AI n\u00E1stroje pro n\u00E1soben\u00ED produktivity. Dlouhodob\u00FDm c\u00EDlem je <strong>dod\u00E1vat produkty rychleji</strong> kombinac\u00ED in\u017Een\u00FDrsk\u00E9ho \u0159emesla s workflow s podporou AI, a neust\u00E1le se u\u010Dit od druh\u00FDch.",
            "about.stat.apps": "Dodan\u00E9 aplikace",
            "about.stat.domains": "Dom\u00E9ny",
            "about.stat.scratch": "Postaveno od nuly",
            "about.stat.curiosity": "Zv\u011Bdavost",

            /* ── Career ── */
            "career.label": "Kari\u00E9ra",
            "career.heading": "Cesta dosud",
            "career.current": "sou\u010Dasnost",

            /* Turnip */
            "career.turnip.desc": "<ul><li>Sou\u010D\u00E1st zakl\u00E1daj\u00EDc\u00EDho in\u017Een\u00FDrsk\u00E9ho t\u00FDmu, stavba aplikace od nuly.</li><li>Spolupracuje nap\u0159\u00ED\u010D t\u00FDmy s produktem, designem, r\u016Fstem a in\u017Een\u00FDringem na kl\u00ED\u010Dov\u00FDch funkc\u00EDch: onboarding, feed, tvorba obsahu, notifikace a zpracov\u00E1n\u00ED obr\u00E1zk\u016F.</li></ul>",
            /* NovaSignal */
            "career.novasignal.desc": "<ul><li>Vytvo\u0159il iOS spole\u010Dnickou aplikaci od nuly pro robotick\u00E9 l\u00E9ka\u0159sk\u00E9 za\u0159\u00EDzen\u00ED m\u011B\u0159\u00EDc\u00ED mozkovou cirkulaci.</li><li>Navrhl architekturu pro \u0161k\u00E1lov\u00E1n\u00ED: znovupou\u017Eiteln\u00E9 UI komponenty, design s d\u016Frazem na testovatelnost, CI/CD pipeline p\u0159es Xcode Cloud.</li></ul>",
            /* Paytm Money */
            "career.paytm.desc": "<ul><li>Jeden ze senior in\u017Een\u00FDr\u016F v 13-16\u010Dlenn\u00E9m iOS t\u00FDmu pro vysoce hodnocenou fintech aplikaci (4,3 hv\u011Bzdi\u010Dky).</li><li>P\u0159epracoval domovskou obrazovku a modul pod\u00EDlov\u00FDch fond\u016F. Mentoroval in\u017Een\u00FDry a vedl code reviews.</li></ul>",
            /* CaaStle */
            "career.caastle.desc": "<ul><li>Vedl architekturu pro white-label SaaS platformu (Gwynnie Bee, Haverdash) pohán\u011Bj\u00EDc\u00ED p\u016Fj\u010Dovnu od\u011Bv\u016F v USA.</li><li>Navrhl dynamick\u00FD syst\u00E9m motiv\u016F automatizovan\u00FD pomoc\u00ED tabulek a intern\u00EDch Swift skript\u016F.</li><li>Zavedl framework pro unit testy a CI/CD pipeline. Mentoroval t\u00FDm a p\u0159ed\u00E1val znalosti architektury.</li></ul>",
            /* moldedbits */
            "career.moldedbits.desc": "<ul><li>Sou\u010Dasn\u011B dodal n\u011Bkolik aplikac\u00ED nap\u0159\u00ED\u010D podnikov\u00FDmi a kreativn\u00EDmi dom\u00E9nami (Apache Industrial, Duet App, PropCube).</li><li>Vyrostl z juniora na vedouc\u00EDho 2\u010Dlenn\u00E9ho iOS t\u00FDmu a mentora 4 nov\u00FDch koleg\u016F.</li></ul>",

            /* ── Projects ── */
            "projects.label": "Pr\u00E1ce",
            "projects.heading": "Dodan\u00E9 aplikace",
            "projects.domain.social": "Soci\u00E1ln\u00ED",
            "projects.domain.health": "Health-Tech",
            "projects.domain.fintech": "Fintech",
            "projects.domain.fashion": "M\u00F3da / SaaS",
            "projects.domain.enterprise": "Enterprise",
            "projects.domain.side": "Vedlej\u0161\u00ED projekt",
            "projects.turnip.desc": "Soci\u00E1ln\u00ED aplikace postaven\u00E1 od nuly -- onboarding, feed, tvorba obsahu, notifikace a zpracov\u00E1n\u00ED obr\u00E1zk\u016F. Mezit\u00FDmov\u00E1 spolupr\u00E1ce od prvn\u00EDho dne.",
            "projects.novasignal.desc": "iOS spole\u010Dn\u00EDk pro robotick\u00E9 l\u00E9ka\u0159sk\u00E9 za\u0159\u00EDzen\u00ED. Umo\u017E\u0148uje nemocnic\u00EDm p\u0159\u00EDstup k AI zpracovan\u00FDm dat\u016Fm o mozkov\u00E9 cirkulaci pro prevenci mrtvice.",
            "projects.paytm.desc": "Jedna z nejl\u00E9pe hodnocen\u00FDch investi\u010Dn\u00EDch aplikac\u00ED v Indii. Akcie, pod\u00EDlov\u00E9 fondy, IPO, F&O. P\u0159epracov\u00E1n\u00ED domovsk\u00E9 obrazovky a modulu fond\u016F slou\u017E\u00EDc\u00EDch milion\u016Fm u\u017Eivatel\u016F.",
            "projects.caastle.desc": "White-label platforma pro p\u016Fj\u010Dovnu od\u011Bv\u016F na americk\u00E9m trhu. Architektoval modul\u00E1rn\u00ED, tematicky p\u0159izp\u016Fsobitelnou SaaS platformu poh\u00E1n\u011Bj\u00EDc\u00ED v\u00EDce zna\u010Dkov\u00FDch aplikac\u00ED.",
            "projects.enterprise.desc": "Enterprise aplikace pro \u0159\u00EDzen\u00ED a monitorov\u00E1n\u00ED pracovn\u00ED s\u00EDly pro Apache Industrial Services, pou\u017E\u00EDvan\u00E1 v operac\u00EDch v USA.",
            "projects.xo3.desc": "Hra pi\u0161kvorky zkoumaj\u00EDc\u00ED SwiftUI, Combine a MultipeerConnectivity. Postavena s iOS 26+ a Swift 6.",
            "projects.appstore": "Zobrazit na App Store",
            "projects.github": "Zobrazit na GitHubu",

            /* ── Skills ── */
            "skills.label": "N\u00E1stroje",
            "skills.heading": "Technologie a dovednosti",
            "skills.ios": "iOS / Apple",
            "skills.architecture": "Architektura",
            "skills.ai": "AI a pr\u016Fzkum",
            "skills.tooling": "N\u00E1stroje a procesy",
            "skills.leadership": "Veden\u00ED",

            /* ── Open Source ── */
            "oss.label": "Open Source",
            "oss.heading": "Na GitHubu",
            "oss.timbaktoe": "Hra pi\u0161kvorky pro studium z\u00E1klad\u016F SwiftUI, Combine a MultipeerConnectivity.",
            "oss.school": "Startovn\u00ED aplikace pro pochopen\u00ED vzorc\u016F SwiftUI a Combine.",
            "oss.openpr": "CLI n\u00E1stroj pro vytv\u00E1\u0159en\u00ED pull request\u016F, postaven\u00FD se Swift Package Managerem.",
            "oss.math": "Knihovna matematick\u00FDch utilit. 4 forky na GitHubu.",
            "oss.geo": "Lehk\u00FD wrapper nad iOS CoreLocation frameworkem.",
            "oss.setup": "Kontroln\u00ED seznam pro konfiguraci nov\u00FDch v\u00FDvojov\u00FDch stroj\u016F.",

            /* ── Education ── */
            "edu.label": "Vzd\u011Bl\u00E1n\u00ED",
            "edu.heading": "Z\u00E1zem\u00ED",
            "edu.degree": "B.Tech, Informatika a in\u017Een\u00FDrstv\u00ED",

            /* ── Off the clock ── */
            "offclock.label": "Mimo pr\u00E1ci",
            "offclock.heading": "Nein\u017Een\u00FDrsk\u00E9 kousky",
            "offclock.sports.title": "Fotbal, stezky a kilometry",
            "offclock.sports.desc": "O v\u00EDkendech fotbal, turistika kdy\u017E volaj\u00ED hory, b\u011Bh kdy\u017E nevolaj\u00ED. K t\u011Blu p\u0159istupuje jako k produk\u010Dn\u00EDmu k\u00F3du -- \u017E\u00E1dn\u00E9 zkratky, \u017E\u00E1dn\u00FD technick\u00FD dluh.<span class=\"aside\">// Den noh nem\u00E1 strategii pro rollback</span>",
            "offclock.fuel.title": "Pouze \u010Dist\u00E9 palivo",
            "offclock.fuel.desc": "J\u00ED \u010Dist\u011B -- ne \u201Ev\u011Bt\u0161inou\u201C, opravdu \u010Dist\u011B. \u017D\u00E1dn\u00FD alkohol, \u017E\u00E1dn\u00E9 kou\u0159en\u00ED, \u017E\u00E1dn\u00E9 cheat mealy. T\u011Blo pova\u017Euje za dlouhodob\u011B b\u011B\u017E\u00EDc\u00ED proces: odpad dovnit\u0159 -- odpad ven.<span class=\"aside\">// Naléhav\u011B doporu\u010Duje tento \u017Eivotn\u00ED styl i ostatn\u00EDm</span>",
            "offclock.geo.title": "Mapy, pen\u00EDze a moc",
            "offclock.geo.desc": "Fascinov\u00E1n geopolitick\u00FDmi zm\u011Bnami, histori\u00ED, geografi\u00ED a ekonomick\u00FDmi trendy. R\u00E1d propojuje posuny hranic se sm\u011B\u0159ov\u00E1n\u00EDm trh\u016F.<span class=\"aside\">// Jak\u00FDkoli rozhovor u ve\u010De\u0159e p\u0159evede na makroekonomickou t\u00E9zi</span>",
            "offclock.travel.title": "Raz\u00EDtka v pase",
            "offclock.travel.desc": "Nashrom\u00E1\u017Edil \u00FA\u017Eehy po jihov\u00FDchodn\u00ED Asii a d\u00E1l. V\u011B\u0159\u00ED, \u017Ee nejlep\u0161\u00ED lad\u011Bn\u00ED prob\u00EDh\u00E1 ve v\u00FD\u0161ce 35 000 stop.",
            "offclock.photo.title": "Fotografie",
            "offclock.photo.desc": "R\u00E1d zachycuje okam\u017Eiky, zejm\u00E9na p\u0159i cestov\u00E1n\u00ED. Pam\u011B\u0165 telefonu: 80 % fotky, 15 % cache Xcode, 5 % voln\u00E9ho m\u00EDsta.",
            "offclock.ideas.title": "N\u00E1pady a tvorba",
            "offclock.ideas.desc": "Neust\u00E1le sn\u00ED o produktech k vytvo\u0159en\u00ED. Pozn\u00E1mky pln\u00E9 \u201En\u00E1pad\u016F za milion\u201C -- dodat alespo\u0148 jeden by bylo fajn.<span class=\"aside\">// TODO: opravdu dodat jeden z nich</span>",

            /* ── Contact ── */
            "contact.label": "Kontakt",
            "contact.heading": "Pojďme n\u011Bco vytvo\u0159it",
            "contact.sub": "Otev\u0159en\u00FD rozhovor\u016Fm o iOS, AI, produktov\u00FDch n\u00E1padech nebo spole\u010Dn\u00E9 tvorb\u011B.",
            "contact.alllinks": "V\u0161echny odkazy",

            /* ── Footer ── */
            "footer.text": "Navrhl a vytvo\u0159il Vishal Singh",

            /* ── Links Overlay ── */
            "lo.professional": "Profesn\u00ED",
            "lo.portfolio": "Portfolio",
            "lo.scan": "Skenovat &middot; Sd\u00EDlet"
        }
    };

    /* ── RTL Languages ── */
    const RTL_LANGS = ['ar', 'he'];

    /* ── Language Display Labels ── */
    const LANG_DISPLAY = {
        en: 'EN', hi: '\u0939\u093F', ar: '\u0639\u0631',
        he: '\u05E2\u05D1', zh: '\u4E2D', th: '\u0E44\u0E17',
        ru: '\u0420\u0423', es: 'ES', pt: 'PT', fr: 'FR',
        ja: '\u65E5', ko: '\uD55C', de: 'DE',
        it: 'IT', nl: 'NL', pl: 'PL',
        tr: 'TR', vi: 'VI', id: 'ID',
        ms: 'MS', sv: 'SV', da: 'DA',
        fi: 'FI', cs: 'CS', ro: 'RO',
        uk: '\u0423\u041A', el: '\u0395\u039B', hu: 'HU',
        bn: '\u09AC\u09BE', ta: '\u0BA4\u0BAE'
    };

    /* ── Engine ── */
    const STORAGE_KEY = 'lang-pref';

    function detectLang() {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && translations[saved]) return saved;
        const nav = (navigator.language || '').toLowerCase();
        const prefix = nav.split('-')[0];
        if (translations[prefix]) return prefix;
        return 'en';
    }

    function applyLang(lang) {
        const isRTL = RTL_LANGS.includes(lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
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
        if (display) display.textContent = LANG_DISPLAY[lang] || lang.toUpperCase();

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
