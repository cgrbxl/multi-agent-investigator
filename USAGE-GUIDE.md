# Multi-Agent Investigator - Complete Usage Guide

## Table of Contents

1. [Installation & Setup](#installation--setup)
2. [Running the Configuration Wizard](#running-the-configuration-wizard)
3. [Understanding the Generated Project](#understanding-the-generated-project)
4. [Executing an Investigation](#executing-an-investigation)
5. [Interpreting Results](#interpreting-results)
6. [Advanced Customization](#advanced-customization)
7. [Troubleshooting](#troubleshooting)
8. [Best Practices](#best-practices)

---

## Installation & Setup

### Prerequisites

- **Node.js 14+**: `node --version`
- **Claude Code**: Latest version
- **Web browser**: For viewing dashboards

### Initial Setup

```bash
# Clone or download the template
cd multi-agent-investigator

# Make wizard executable
chmod +x config-wizard.js

# Verify setup
node config-wizard.js --help
```

---

## Running the Configuration Wizard

### Step-by-Step Walkthrough

```bash
node config-wizard.js
```

The wizard asks 9 questions in 5 sections:

### Section 1: Investigation Topic (Questions 1-4)

**Q1: What topic do you want to investigate?**
```
Examples:
✓ "European migration policy"
✓ "Climate change action in the EU"
✓ "Universal Basic Income trials"
✓ "COVID-19 pandemic response"
✗ Too vague: "politics"
✗ Too broad: "everything"
```

**Q2: What type of investigation?**
```
[1] Current news - Recent developments (weeks to months)
[2] Historical - Past events (years to decades)
[3] Mixed - Context + current situation
```

**Q3: Enter keywords**
```
Comma-separated list:
✓ "migration, refugees, asylum policy, border control"
✗ Single word: "migration"

Tip: 4-8 keywords is optimal
```

**Q4: Geographic scope?**
```
Examples:
✓ "European Union"
✓ "United States"
✓ "Global"
✓ "East Africa"
✗ Too vague: "somewhere"
```

### Section 2: Time Periods & Agents (Question 5)

**Q5: How many explorer agents?**
```
Recommended ranges:
- Current news: 3-4 agents
- Historical: 4-6 agents
- Academic: 4-8 agents (by decade)

Optimal: 3-5 agents
Maximum reasonable: 10 agents
```

**For each agent, you'll specify:**

1. **Name**: Descriptive identifier
   ```
   Examples:
   ✓ "very-recent" / "last-week" / "breaking"
   ✓ "pre-2020" / "early-pandemic" / "2021-recovery"
   ✗ "agent1" (not descriptive)
   ```

2. **Start date**: When period begins
   ```
   Relative dates (for current):
   ✓ "7 days ago"
   ✓ "1 month ago"
   ✓ "3 months ago"

   Absolute dates (for historical):
   ✓ "2020-01-01"
   ✓ "1994-04-07"
   ```

3. **End date**: When period ends
   ```
   Current:
   ✓ "now"
   ✓ "1 week ago" (for mid-period agent)

   Historical:
   ✓ "2020-12-31"
   ✓ "1994-07-15"
   ```

4. **Description**: What this period covers
   ```
   ✓ "Initial outbreak and first responses"
   ✓ "Policy implementation and mid-term results"
   ✗ "Period 1" (not informative)
   ```

### Section 3: Analysis Perspective (Question 6)

**Q6: What perspective should guide analysis?**

```
[1] General citizen welfare
    → Broad human impact, quality of life
    → Use for: Most policy and news topics

[2] Specific group
    → Focus on particular population
    → Examples: workers, refugees, youth, elderly
    → Use for: Group-specific impact assessment

[3] Environmental sustainability
    → Ecological health and climate action
    → Use for: Climate, energy, conservation topics

[4] Democratic governance quality
    → Transparency, accountability, rule of law
    → Use for: Electoral systems, anti-corruption

[5] Custom
    → Define your own perspective
    → Useful for specialized investigations
```

**If you choose [2] Specific group:**
```
Specify group: "refugees and asylum seekers"
              "low-wage workers"
              "rural communities"
              "people with disabilities"
```

**If you choose [5] Custom:**
```
Describe perspective: "Technology impact on labor markets"
Prioritize: "Worker rights, employment quality, wage trends"
```

### Section 4: Validation & Misinformation (Questions 7-8)

**Q7: Validation rigor level?**

```
[1] Standard
    → Credible sources, basic verification
    → Use for: Low-controversy topics
    → Speed: Fastest

[2] High (RECOMMENDED)
    → Multiple source verification (2+ sources)
    → Bias detection enabled
    → Use for: Most investigations
    → Speed: Moderate

[3] Maximum
    → 3+ source verification
    → Propaganda detection
    → Use for: High-misinformation topics
    → Speed: Slower but thorough
```

**When to use Maximum:**
- War and conflict reporting
- Politically contested events
- Public health crises (COVID-19)
- Topics with active disinformation
- Historical events with denial (Holocaust, genocides)

**Q8: Flagged sources?**
```
Optional: Sources to avoid
Examples:
"breitbart.com, infowars.com" (far-right bias)
"russia-today.com" (state propaganda)
"conspiracysite.com" (known misinformation)

Press Enter to skip if none known.
```

### Section 5: Output Configuration (Question 9)

**Q9: Project name?**
```
Filesystem-safe name:
✓ "eu-migration-2024"
✓ "covid-origins-investigation"
✓ "climate-policy-evolution"
✗ "EU Migration (2024)!" (special characters)

Tip: Use lowercase, hyphens, no spaces
```

### Review & Generate

The wizard shows a summary. Confirm with `Y` or cancel with `n`.

---

## Understanding the Generated Project

### Directory Structure

```
your-investigation/
├── config/                      # Configuration files
│   ├── investigation.json       # Complete wizard responses
│   ├── topic.json               # Investigation parameters
│   └── sentiment-rules.json     # Ethical framework + perspective
│
├── agents/                      # Agent prompts (generated)
│   ├── scout-period1.md
│   ├── scout-period2.md
│   └── scout-periodN.md
│
├── data/                        # Data pipeline outputs
│   ├── raw/                     # Phase 1: Scout outputs
│   │   ├── period1/
│   │   ├── period2/
│   │   └── periodN/
│   ├── analyzed/                # Phase 2: Analyzer outputs
│   │   ├── articles.jsonl
│   │   └── stats.json
│   ├── synthesized/             # Phase 3: Synthesizer outputs
│   │   └── timeline.json
│   └── visualizations/          # Phase 4: Visualizer outputs
│       ├── dashboard.html       # Main output!
│       └── summary.md
│
├── validators/                  # Validation guidelines
│   └── source-validation.md
│
├── docs/                        # Empty (for your notes)
│
├── orchestrator.js              # Execution script
├── README.md                    # Project-specific documentation
└── QUICKSTART.md               # Quick execution guide
```

### Key Configuration Files

#### `config/investigation.json`
Complete wizard configuration. Review to verify all settings.

#### `config/topic.json`
```json
{
  "topic": "Your investigation topic",
  "type": "current|historical|mixed",
  "keywords": ["keyword1", "keyword2"],
  "geographicScope": "Geographic area",
  "timePeriods": [...]
}
```

#### `config/sentiment-rules.json`
The ethical framework and perspective definition. **Critical file** - defines scoring rules.

---

## Executing an Investigation

### Option 1: Quick Execution (Recommended)

1. **Run orchestrator** to see the plan:
   ```bash
   cd your-investigation
   node orchestrator.js
   ```

2. **Tell Claude Code**:
   ```
   Execute the multi-agent investigation in [project-name].

   Phase 1: Run all [N] explorer agents IN PARALLEL
   Phase 2: Run analyzer agent
   Phase 3: Run synthesizer agent
   Phase 4: Run visualizer agent

   Use prompts from agents/*.md
   ```

3. **Wait** ~25-45 minutes (depends on agent count and validation level)

4. **View results**:
   ```bash
   open data/visualizations/dashboard.html
   ```

### Option 2: Manual Step-by-Step

**Phase 1: Explorers (PARALLEL)**

Tell Claude:
```
In a SINGLE message, launch these [N] Task calls in parallel:

1. Task(
     subagent_type="Explore",
     prompt=<read agents/scout-period1.md>,
     description="Scout period 1"
   )

2. Task(
     subagent_type="Explore",
     prompt=<read agents/scout-period2.md>,
     description="Scout period 2"
   )

[... etc for all agents]

All agents should write to their respective data/raw/[period]/ directories.
```

**Phase 2: Analyzer (SEQUENTIAL)**

After Phase 1 completes:
```
Launch analyzer agent:

Task(
  subagent_type="general-purpose",
  prompt=<create analyzer prompt based on config/sentiment-rules.json>,
  description="Analyze all collected articles"
)

Read all articles from data/raw/*/
Apply ethical framework from config/sentiment-rules.json
Write to data/analyzed/
```

**Phase 3: Synthesizer (SEQUENTIAL)**

After Phase 2 completes:
```
Launch synthesizer agent:

Task(
  subagent_type="Plan",
  prompt=<create synthesizer prompt>,
  description="Build timeline and identify trends"
)

Read data/analyzed/articles.jsonl and stats.json
Build chronological timeline
Write to data/synthesized/timeline.json
```

**Phase 4: Visualizer (SEQUENTIAL)**

After Phase 3 completes:
```
Launch visualizer agent:

Task(
  subagent_type="general-purpose",
  prompt=<create visualizer prompt>,
  description="Generate dashboard"
)

Read data/synthesized/timeline.json
Create interactive HTML dashboard
Write to data/visualizations/dashboard.html
```

### Monitoring Progress

Watch for agent completion:
```bash
# Check scout outputs
ls -lh data/raw/*/

# Check analyzer output
wc -l data/analyzed/articles.jsonl

# Check synthesizer output
cat data/synthesized/timeline.json | jq .metadata

# Final dashboard
open data/visualizations/dashboard.html
```

---

## Interpreting Results

### Dashboard Components

#### 1. Header Metrics
- **Overall Sentiment**: Average score (-10 to +10)
  - Green (+6 to +10): Very positive
  - Light green (+3 to +5): Positive
  - Yellow (0 to +2): Neutral
  - Orange (-3 to -5): Negative
  - Red (-6 to -10): Very negative

- **Trend Direction**: ↑ improving, ↓ declining, → stable
- **Volatility**: How much sentiment fluctuates

#### 2. Timeline Chart
- **X-axis**: Time periods
- **Y-axis**: Sentiment score
- **Data points**: Each period's average sentiment
- **Annotations**: Major inflection points

**How to read:**
- **Upward trend**: Situation improving for your perspective
- **Downward trend**: Worsening conditions
- **Sharp spikes**: Major events causing sudden change
- **Flat line**: Stable situation

#### 3. Sentiment Distribution
Pie chart showing article breakdown:
- **Very Positive (20%)**: Highly beneficial developments
- **Positive (30%)**: Generally beneficial
- **Neutral (15%)**: Mixed or minimal impact
- **Negative (25%)**: Harmful developments
- **Very Negative (10%)**: Severely harmful

#### 4. Key Findings Panels
Color-coded insights:
- **Green panels**: Achievements, positive developments
- **Red panels**: Challenges, negative developments
- **Yellow panels**: Mixed or contextual findings

#### 5. Entity Rankings
Shows prominence of:
- **Organizations**: Who are key actors?
- **People**: Who are influential figures?
- **Policies**: What are major policies discussed?

#### 6. Period-by-Period Analysis
Detailed breakdown of each time period with:
- Sentiment score badge
- Article count
- Dominant category
- Summary narrative

### Summary Report (`summary.md`)

Comprehensive text report with:
- **Executive Summary**: High-level findings
- **Positive Achievements**: What went well
- **Negative Challenges**: What went poorly
- **Sentiment Timeline**: Period-by-period analysis
- **Theme Evolution**: How topics changed over time
- **Predictions**: What to expect next

### Analyzed Data (`data/analyzed/articles.jsonl`)

Each line is one analyzed article:
```json
{
  "id": "uuid",
  "original": {
    "title": "...",
    "source": "...",
    "url": "...",
    "date": "2024-12-01",
    "credibility": "verified"
  },
  "analysis": {
    "sentimentScore": 7,
    "sentimentRationale": "Why this score...",
    "entities": {...},
    "summary": "Citizen-focused summary",
    "verification": {
      "sources": ["source1", "source2"],
      "flags": [] // Misinformation flags
    }
  }
}
```

**Look for**:
- `verification.flags`: Misinformation detected
- `credibility`: "verified" vs "questionable"
- `sentimentRationale`: Why score was assigned

---

## Advanced Customization

### Modifying Agent Prompts

Edit `agents/scout-*.md` to:
- Add domain-specific sources
- Adjust search strategies
- Change target article counts
- Add specialized instructions

### Custom Sentiment Rules

Edit `config/sentiment-rules.json`:

```json
{
  "criteria": {
    "positive": [
      {
        "indicator": "Your custom positive indicator",
        "weight": 2,
        "category": "critical"
      }
    ],
    "negative": [
      {
        "indicator": "Your custom negative indicator",
        "weight": -2,
        "category": "always-negative"
      }
    ]
  }
}
```

### Adding Custom Validators

Create new validator in `validators/`:
```markdown
# Custom Domain Validator

## Domain-Specific Credibility

Credible sources in [your domain]:
- Source 1
- Source 2

Red flags:
- Indicator 1
- Indicator 2
```

---

## Troubleshooting

### Problem: Not enough articles found

**Causes**:
- Keywords too narrow
- Date range too restrictive
- Topic has limited coverage

**Solutions**:
- Broaden keywords in `config/topic.json`
- Expand date ranges for agents
- Try different search terms
- Lower target article counts in agent prompts

### Problem: Too many misinformation flags

**Causes**:
- Validation level too high for topic
- Over-sensitive propaganda detection
- Legitimate controversy flagged

**Solutions**:
- Review flagged articles manually
- Lower validation level if appropriate
- Adjust `validators/source-validation.md`
- Some controversy is expected - don't suppress

### Problem: Inconsistent sentiment scores

**Causes**:
- Perspective not clearly defined
- Ethical framework misalignment
- Analyzer misinterpreting context

**Solutions**:
- Review `config/sentiment-rules.json`
- Make perspective more specific
- Check sentiment rationales in analyzed data
- Ensure humanistic principles are applied

### Problem: Dashboard not rendering

**Causes**:
- Invalid JSON in timeline.json
- Missing data files
- Browser compatibility

**Solutions**:
```bash
# Validate JSON
cat data/synthesized/timeline.json | jq .

# Check all files exist
ls data/analyzed/articles.jsonl
ls data/synthesized/timeline.json

# Try different browser
```

### Problem: Agents running too slowly

**Causes**:
- Too many agents
- Validation level too high
- Large article targets

**Solutions**:
- Reduce number of agents
- Lower validation level
- Reduce target articles per agent
- Ensure parallel execution (Phase 1)

---

## Best Practices

### ✅ DO

1. **Start with wizard** - Don't manually create config
2. **Review generated config** - Check `config/investigation.json`
3. **Match validation to topic** - High misinformation = Maximum level
4. **Use relative dates** for current topics
5. **Use absolute dates** for historical investigations
6. **Run explorers in parallel** - Saves significant time
7. **Review credibility flags** - Check source assessments
8. **Share self-contained dashboard** - `dashboard.html` works offline
9. **Document your findings** - Add notes to `docs/`
10. **Respect ethical framework** - It's non-negotiable

### ❌ DON'T

1. **Don't skip the wizard** - Manual config error-prone
2. **Don't use too many agents** - 3-6 is optimal for most cases
3. **Don't use maximum validation for everything** - Slows process
4. **Don't ignore misinformation flags** - They're there for a reason
5. **Don't override ethical principles** - System will reject
6. **Don't trust single sources** - Always cross-reference
7. **Don't frame violations positively** - Humanistic principles are immutable
8. **Don't mix current/historical dates** - Be consistent
9. **Don't use vague perspectives** - Be specific
10. **Don't run agents sequentially** - Use parallel for Phase 1

---

## Execution Checklist

### Before Starting

- [ ] Wizard completed successfully
- [ ] Config reviewed (`config/investigation.json`)
- [ ] Sentiment rules make sense (`config/sentiment-rules.json`)
- [ ] Agent prompts generated (`agents/scout-*.md`)
- [ ] Data directories created

### During Execution

- [ ] Phase 1 agents launched IN PARALLEL
- [ ] All scouts completed successfully
- [ ] Raw data files written (`data/raw/*/articles.jsonl`)
- [ ] Analyzer completed
- [ ] Analyzed data created (`data/analyzed/articles.jsonl`)
- [ ] Synthesizer completed
- [ ] Timeline created (`data/synthesized/timeline.json`)
- [ ] Visualizer completed
- [ ] Dashboard generated (`data/visualizations/dashboard.html`)

### After Completion

- [ ] Dashboard opens in browser
- [ ] Timeline chart displays correctly
- [ ] Summary report readable
- [ ] Credibility flags reviewed
- [ ] Findings make sense given perspective
- [ ] Ethical principles applied consistently

---

## Example Execution Transcript

```bash
# 1. Generate project
$ node config-wizard.js
# [Answer wizard questions]
✅ PROJECT GENERATED: eu-migration-2024

# 2. Review configuration
$ cd eu-migration-2024
$ cat config/investigation.json
$ node orchestrator.js

# 3. Execute with Claude Code
# Tell Claude to run the investigation

# 4. Monitor progress
$ watch ls -lh data/raw/*/        # Scout progress
$ watch wc -l data/analyzed/*.jsonl  # Analyzer progress

# 5. View results
$ open data/visualizations/dashboard.html
$ less data/visualizations/summary.md

# 6. Share findings
$ cp data/visualizations/dashboard.html ~/Desktop/
# Email or share the self-contained HTML file
```

---

## Getting Help

### Documentation Files

- `README.md` - Template overview
- `EXAMPLES.md` - Real-world examples
- `USAGE-GUIDE.md` - This file
- Project-specific `README.md` - Generated project docs

### Common Questions

**Q: Can I change the ethical framework?**
A: No. Humanistic and democratic principles are immutable. You can customize *perspective* but not core values.

**Q: How do I handle conflicting sources?**
A: The system flags contradictions. Review manually and prioritize credible sources.

**Q: Can I investigate topics the framework would score negatively?**
A: Yes! Investigate authoritarianism, human rights violations, etc. The framework scores *impact on citizens*, not the investigation itself.

**Q: What if I disagree with a sentiment score?**
A: Review the `sentimentRationale` in analyzed data. The framework is consistent but you can note disagreements.

**Q: Can I re-run phases?**
A: Yes, just delete the relevant `data/` subdirectory and re-run that phase.

---

**You're ready to investigate!** Follow this guide and the wizard will help you create rigorous, ethical, multi-agent investigations. 🚀
