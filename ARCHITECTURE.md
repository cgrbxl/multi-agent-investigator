# Multi-Agent Investigator Architecture

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                   CONFIGURATION WIZARD                       │
│  Interactive questionnaire → Generates complete project      │
└─────────────────────────────────────────────────────────────┘
                              │
                              ├─→ config/investigation.json
                              ├─→ config/topic.json
                              ├─→ config/sentiment-rules.json
                              ├─→ agents/scout-*.md (N agents)
                              ├─→ validators/source-validation.md
                              └─→ orchestrator.js

┌─────────────────────────────────────────────────────────────┐
│                   MULTI-AGENT PIPELINE                       │
└─────────────────────────────────────────────────────────────┘

PHASE 1: DATA COLLECTION (PARALLEL)
┌────────────────┐  ┌────────────────┐  ┌────────────────┐
│ Scout Agent 1  │  │ Scout Agent 2  │  │ Scout Agent N  │
│ (Explore)      │  │ (Explore)      │  │ (Explore)      │
│                │  │                │  │                │
│ Time: Period 1 │  │ Time: Period 2 │  │ Time: Period N │
│ Search & collect│  │ Search & collect│  │ Search & collect│
│ Verify sources │  │ Verify sources │  │ Verify sources │
│ Flag misinfo   │  │ Flag misinfo   │  │ Flag misinfo   │
└───────┬────────┘  └───────┬────────┘  └───────┬────────┘
        │                   │                   │
        ├─→ data/raw/period1/articles.jsonl
        ├─→ data/raw/period2/articles.jsonl
        └─→ data/raw/periodN/articles.jsonl
                              │
                              ▼
PHASE 2: CRITICAL ANALYSIS (SEQUENTIAL)
┌─────────────────────────────────────────────────────────────┐
│            Analyzer Agent (General-purpose)                  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ For each article:                                     │  │
│  │  1. Read content                                      │  │
│  │  2. Apply ethical framework                           │  │
│  │  3. Score sentiment (-10 to +10)                      │  │
│  │  4. Extract entities                                  │  │
│  │  5. Verify credibility                                │  │
│  │  6. Flag misinformation                               │  │
│  │  7. Generate citizen-focused summary                  │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Ethical Framework Applied:                                 │
│  ✓ Positivistic (evidence-based)                            │
│  ✓ Humanistic (human welfare prioritized)                   │
│  ✓ Democratic (transparency valued)                         │
│                                                              │
│  Mandatory Negative Scoring:                                │
│  • Human rights violations                                  │
│  • Discrimination & persecution                             │
│  • Authoritarianism                                         │
│  • Violence against civilians                               │
│  • Corruption                                               │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ├─→ data/analyzed/articles.jsonl
                            └─→ data/analyzed/stats.json
                            │
                            ▼
PHASE 3: TIMELINE SYNTHESIS (SEQUENTIAL)
┌─────────────────────────────────────────────────────────────┐
│             Synthesizer Agent (Plan)                         │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Build Timeline:                                       │  │
│  │  1. Group articles by time periods                    │  │
│  │  2. Calculate sentiment per period                    │  │
│  │  3. Identify inflection points                        │  │
│  │  4. Detect trends (improving/worsening)               │  │
│  │  5. Extract persistent themes                         │  │
│  │  6. Identify emerging issues                          │  │
│  │  7. Generate predictions                              │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Output: Complete chronological analysis                    │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            └─→ data/synthesized/timeline.json
                            │
                            ▼
PHASE 4: VISUALIZATION (SEQUENTIAL)
┌─────────────────────────────────────────────────────────────┐
│          Visualizer Agent (General-purpose)                  │
│                                                              │
│  ┌──────────────────────────────────────────────────────┐  │
│  │ Generate Dashboard:                                   │  │
│  │  1. Timeline chart (sentiment over time)             │  │
│  │  2. Distribution chart (sentiment breakdown)         │  │
│  │  3. Key findings panels                              │  │
│  │  4. Entity rankings                                   │  │
│  │  5. Period-by-period analysis                        │  │
│  │  6. Interactive features                             │  │
│  │  7. Markdown summary report                          │  │
│  └──────────────────────────────────────────────────────┘  │
│                                                              │
│  Technologies: Chart.js, Tailwind CSS, HTML5               │
│  Self-contained: Embeds all data in HTML                   │
└───────────────────────────┬─────────────────────────────────┘
                            │
                            ├─→ data/visualizations/dashboard.html
                            └─→ data/visualizations/summary.md

┌─────────────────────────────────────────────────────────────┐
│                      FINAL OUTPUT                            │
│                                                              │
│  Interactive Dashboard (dashboard.html):                    │
│  • Timeline chart showing sentiment trajectory              │
│  • Distribution pie chart                                   │
│  • Key findings with color coding                           │
│  • Entity prominence rankings                               │
│  • Period summaries                                         │
│  • Fully shareable (self-contained)                         │
│                                                              │
│  Summary Report (summary.md):                               │
│  • Executive summary                                        │
│  • Positive achievements                                    │
│  • Negative challenges                                      │
│  • Timeline analysis                                        │
│  • Predictions and outlook                                  │
└─────────────────────────────────────────────────────────────┘
```

---

## Ethical Framework Architecture

```
┌──────────────────────────────────────────────────────────────┐
│              IMMUTABLE ETHICAL PRINCIPLES                     │
│           (Cannot be overridden by configuration)             │
└──────────────────────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ POSITIVISTIC │  │  HUMANISTIC  │  │  DEMOCRATIC  │
│              │  │              │  │              │
│ Evidence     │  │ Human welfare│  │ Transparency │
│ over opinion │  │ prioritized  │  │ & account-   │
│              │  │              │  │ ability      │
│ Verifiable   │  │ Dignity      │  │              │
│ facts        │  │ paramount    │  │ Citizen      │
│              │  │              │  │ empowerment  │
│ Multiple     │  │ Rights       │  │              │
│ sources      │  │ protected    │  │ Rule of law  │
└──────┬───────┘  └──────┬───────┘  └──────┬───────┘
       │                 │                 │
       └─────────────────┼─────────────────┘
                         │
                         ▼
              ┌────────────────────┐
              │  SCORING FRAMEWORK  │
              └────────────────────┘
                         │
        ┌────────────────┼────────────────┐
        │                │                │
        ▼                ▼                ▼
┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│   ALWAYS     │ │  CONFIGURABLE│ │   ALWAYS     │
│   POSITIVE   │ │  PERSPECTIVE │ │   NEGATIVE   │
│              │ │              │ │              │
│ • Human      │ │ • General    │ │ • Human      │
│   rights     │ │   citizens   │ │   rights     │
│   expansion  │ │ • Specific   │ │   violations │
│ • Reduced    │ │   group      │ │ • Discrim-   │
│   suffering  │ │ • Environment│ │   ination    │
│ • Education  │ │ • Democracy  │ │ • Author-    │
│   access     │ │ • Custom     │ │   itarianism │
│ • Healthcare │ │              │ │ • Violence   │
│ • Democracy  │ │ [User        │ │ • Corruption │
│   strengthen │ │  defines     │ │ • Oppression │
│ • Free press │ │  specific    │ │              │
│ • Environ-   │ │  focus]      │ │ [NEVER frame │
│   mental     │ │              │ │  these as    │
│   sustain-   │ │              │ │  positive]   │
│   ability    │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘

PROHIBITED POSITIVE FRAMINGS (Auto-rejected):
╔════════════════════════════════════════════════════╗
║ ✗ Authoritarianism as "stability"                  ║
║ ✗ Rights violations as "cultural differences"      ║
║ ✗ Discrimination as "traditional values"           ║
║ ✗ Censorship as "protecting harmony"               ║
║ ✗ Exploitation as "economic opportunity"           ║
║ ✗ Environmental destruction as "development"       ║
╚════════════════════════════════════════════════════╝
```

---

## Validation & Misinformation Detection Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                   VALIDATION PIPELINE                         │
└──────────────────────────────────────────────────────────────┘

LEVEL 1: STANDARD (Basic)
┌────────────────────────────────────────┐
│ • Credible source prioritization       │
│ • Source attribution required          │
│ • Basic fact-checking                  │
└────────────────────────────────────────┘

LEVEL 2: HIGH (Recommended)
┌────────────────────────────────────────┐
│ • Level 1 requirements +               │
│ • 2+ sources per claim                 │
│ • Primary source preference            │
│ • Bias detection enabled               │
│ • Cross-reference controversial claims │
│ • Flag conflicting narratives          │
└────────────────────────────────────────┘

LEVEL 3: MAXIMUM (High-risk topics)
┌────────────────────────────────────────┐
│ • Level 2 requirements +               │
│ • 3+ sources per claim (mandatory)     │
│ • Primary sources required             │
│ • Propaganda detection enabled         │
│ • Emotional language flagging          │
│ • Extensive cross-referencing          │
│ • State media identification           │
└────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│             PROPAGANDA TECHNIQUE DETECTION                    │
│                  (Levels 2 & 3 only)                         │
└──────────────────────────────────────────────────────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Loaded       │  │ Unsubstan-   │  │ Appeals to   │
│ Language     │  │ tiated       │  │ Fear/Emotion │
│              │  │ Claims       │  │              │
│ Emotionally  │  │              │  │ Bypassing    │
│ manipulative │  │ Assertions   │  │ rational     │
│ words        │  │ without      │  │ analysis     │
│              │  │ evidence     │  │              │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ Over-        │  │ Ad Hominem   │  │ Cherry-      │
│ simplification│  │              │  │ Picking      │
│              │  │ Attacking    │  │              │
│ Complex →    │  │ source not   │  │ Selective    │
│ black/white  │  │ addressing   │  │ favorable    │
│              │  │ claims       │  │ data         │
└──────────────┘  └──────────────┘  └──────────────┘

┌──────────────────────────────────────┐
│ False Dichotomy                      │
│                                      │
│ Presenting only two options          │
│ when more exist                      │
└──────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│              SOURCE CREDIBILITY ASSESSMENT                    │
└──────────────────────────────────────────────────────────────┘

VERIFIED (Highest Trust)
├─ Reuters, AP, AFP
├─ Peer-reviewed academic journals
├─ Official government statistics
├─ UN/EU institutional reports
└─ [Whitelisted credible sources]

CREDIBLE (Moderate Trust)
├─ Established newspapers (editorial standards)
├─ Think tank research (clear methodology)
├─ Reputable NGO reports
├─ Expert analysis (credentials verified)
└─ [Domain-specific credible sources]

QUESTIONABLE (Verify Carefully)
├─ Known political bias
├─ Self-published without peer review
├─ Anonymous sources (uncorroborated)
├─ State-controlled media (authoritarian)
├─ Content farms / clickbait
└─ [User-flagged sources]

FLAGGED (Avoid/Reject)
├─ Conspiracy theory sites
├─ Propaganda outlets
├─ Known misinformation sources
├─ [User-specified flagged sources]
└─ Automated misinformation detection

┌──────────────────────────────────────────────────────────────┐
│             CROSS-REFERENCE VERIFICATION                      │
└──────────────────────────────────────────────────────────────┘

For each key claim:
1. Identify claim
2. Search minimum N sources (2-3 based on level)
3. Compare factual consistency
   ├─ Consistent → High confidence
   ├─ Minor discrepancies → Note variations
   └─ Major contradictions → FLAG for review
4. Prioritize primary sources
5. Document verification in output

Example verification object:
{
  "claim": "Policy X passed on Date Y",
  "verification": {
    "sources": ["Source A", "Source B", "Source C"],
    "consistency": "high",
    "flags": [],
    "primarySource": "Official government record"
  }
}
```

---

## Data Flow Diagram

```
┌────────────────────────────────────────────────────────────┐
│                     INPUT CONFIGURATION                     │
└────────────────────────────────────────────────────────────┘
   │
   ├─→ Topic Definition
   ├─→ Time Period Specifications
   ├─→ Perspective Configuration
   ├─→ Validation Level
   └─→ Ethical Framework (immutable)
   │
   ▼
┌────────────────────────────────────────────────────────────┐
│                   PHASE 1: COLLECTION                       │
│                                                             │
│  [Scout 1]  [Scout 2]  [Scout 3]  ...  [Scout N]          │
│     │           │           │              │               │
│     └───────────┴───────────┴──────────────┘               │
│                      │                                      │
│              Raw Articles (JSONL)                          │
│              ├─ Title, URL, Date                           │
│              ├─ Content (full text)                        │
│              ├─ Source credibility                         │
│              └─ Initial verification                       │
└────────────────────────┬───────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│                   PHASE 2: ANALYSIS                         │
│                                                             │
│  Raw Articles → [Analyzer Agent]                           │
│                      │                                      │
│        ┌─────────────┼─────────────┐                      │
│        │             │             │                       │
│        ▼             ▼             ▼                       │
│   Sentiment    Entities      Verification                 │
│   Scoring      Extraction    & Credibility                │
│   (-10 to +10) (orgs, people, (sources, flags)            │
│                 policies)                                  │
│        │             │             │                       │
│        └─────────────┼─────────────┘                      │
│                      ▼                                      │
│              Analyzed Articles (JSONL)                     │
│              ├─ Original + Analysis                        │
│              ├─ Sentiment + Rationale                      │
│              ├─ Extracted entities                         │
│              ├─ Citizen-focused summary                    │
│              └─ Verification metadata                      │
└────────────────────────┬───────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│                  PHASE 3: SYNTHESIS                         │
│                                                             │
│  Analyzed Articles → [Synthesizer Agent]                   │
│                           │                                 │
│        ┌──────────────────┼──────────────────┐            │
│        │                  │                  │             │
│        ▼                  ▼                  ▼             │
│   Timeline          Trends            Themes              │
│   Construction      Analysis          Evolution           │
│   (chronological    (improving/       (persistent/        │
│    periods)         worsening)        emerging)           │
│        │                  │                  │             │
│        └──────────────────┼──────────────────┘            │
│                           ▼                                 │
│                   Timeline JSON                            │
│                   ├─ Period metrics                        │
│                   ├─ Inflection points                     │
│                   ├─ Trend analysis                        │
│                   ├─ Theme evolution                       │
│                   └─ Predictions                           │
└────────────────────────┬───────────────────────────────────┘
                         │
                         ▼
┌────────────────────────────────────────────────────────────┐
│                 PHASE 4: VISUALIZATION                      │
│                                                             │
│  Timeline JSON → [Visualizer Agent]                        │
│                       │                                     │
│        ┌──────────────┼──────────────┐                    │
│        │              │              │                     │
│        ▼              ▼              ▼                     │
│   Interactive    Summary      Export Formats              │
│   Dashboard      Report       (CSV, images)               │
│   (HTML +        (Markdown)                               │
│    Chart.js)                                              │
│        │              │              │                     │
│        └──────────────┼──────────────┘                    │
│                       ▼                                     │
│              Final Outputs                                 │
│              ├─ dashboard.html (interactive)              │
│              ├─ summary.md (comprehensive)                │
│              ├─ charts/*.png (static)                     │
│              └─ export.csv (data)                         │
└────────────────────────────────────────────────────────────┘
```

---

## Scalability & Performance

```
┌────────────────────────────────────────────────────────────┐
│                  PERFORMANCE CHARACTERISTICS                │
└────────────────────────────────────────────────────────────┘

PARALLEL EXECUTION (Phase 1):
┌─────────┐ ┌─────────┐ ┌─────────┐
│Scout 1  │ │Scout 2  │ │Scout 3  │  Time: ~5-10 min
│(5 min)  │ │(5 min)  │ │(5 min)  │  (NOT 15 min!)
└─────────┘ └─────────┘ └─────────┘

SEQUENTIAL EXECUTION (Phases 2-4):
Analyzer    → Synthesizer → Visualizer
(10-15 min)   (5-10 min)    (5-10 min)

TOTAL TIME:
Standard validation:  20-30 minutes
High validation:      25-40 minutes
Maximum validation:   35-60 minutes

SCALABILITY:
┌───────────────┬─────────────┬───────────────┐
│ Agents        │ Articles    │ Total Time    │
├───────────────┼─────────────┼───────────────┤
│ 3 agents      │ ~45-75      │ 20-30 min     │
│ 5 agents      │ ~75-125     │ 30-45 min     │
│ 10 agents     │ ~150-250    │ 45-75 min     │
└───────────────┴─────────────┴───────────────┘

BOTTLENECKS:
- WebSearch rate limits (Phase 1)
- Analysis depth (Phase 2)
- Validation level (all phases)

OPTIMIZATION:
✓ Keep agents at 3-6 for optimal performance
✓ Use High (not Maximum) validation when possible
✓ Run Phase 1 in parallel (critical!)
✓ Adjust target article counts based on topic
```

---

## Technology Stack

```
┌────────────────────────────────────────────────────────────┐
│                    TECHNOLOGY LAYERS                        │
└────────────────────────────────────────────────────────────┘

ORCHESTRATION LAYER:
├─ Node.js (orchestrator.js, wizard)
├─ Filesystem (project structure)
└─ Configuration files (JSON)

AGENT EXECUTION LAYER:
├─ Claude Code (subagent execution)
├─ Markdown prompts (agent instructions)
└─ Task tool (agent invocation)

AGENT TYPES:
├─ Explore: Read-only, fast web search
├─ General-purpose: Full tools, complex analysis
└─ Plan: Research and synthesis

DATA LAYER:
├─ JSONL: Streaming line-delimited JSON
├─ JSON: Structured configuration and output
└─ Markdown: Reports and documentation

VISUALIZATION LAYER:
├─ HTML5: Dashboard structure
├─ Chart.js: Interactive charts
├─ Tailwind CSS: Styling
└─ Vanilla JavaScript: Interactivity

VALIDATION LAYER:
├─ Source credibility assessment
├─ Multi-source verification
├─ Propaganda detection (NLP patterns)
└─ Cross-reference protocols

ETHICAL FRAMEWORK LAYER:
├─ Immutable principles (hardcoded)
├─ Configurable perspective
├─ Mandatory scoring rules
└─ Prohibited framings (auto-reject)
```

---

## File Format Specifications

### JSONL (JSON Lines)
```
One JSON object per line (no array wrapper)

Valid:
{"id": 1, "title": "Article 1"}
{"id": 2, "title": "Article 2"}

Invalid:
[
  {"id": 1, "title": "Article 1"},
  {"id": 2, "title": "Article 2"}
]

Benefits:
- Streamable
- Append-only
- Easy to parse line-by-line
- Fault-tolerant
```

### Investigation Configuration
```json
{
  "investigation": {
    "topic": "string",
    "type": "current|historical|mixed",
    "keywords": ["array", "of", "strings"],
    "geographicScope": "string"
  },
  "agents": {
    "explorers": [
      {
        "id": "scout-name",
        "name": "name",
        "dateRange": {"from": "date", "to": "date"},
        "description": "string",
        "targetArticles": {"min": number, "ideal": number}
      }
    ]
  },
  "perspective": {
    "type": "string",
    "description": "string",
    "focus": "string",
    "ethicalFramework": {...}
  },
  "validation": {
    "level": "standard|high|maximum",
    "credibleSources": ["array"],
    "flaggedSources": ["array"],
    "requirements": {...}
  }
}
```

---

This architecture ensures rigorous, ethical, and scalable investigations while maintaining flexibility for diverse research needs. 🚀
