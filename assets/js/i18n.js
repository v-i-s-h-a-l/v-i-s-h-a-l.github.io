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
