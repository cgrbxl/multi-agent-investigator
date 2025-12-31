# 🚀 Get Started with Multi-Agent Investigator

## What You've Got

A **complete, configurable template** for conducting rigorous multi-agent investigations with built-in ethical safeguards and misinformation detection.

---

## 📦 Template Contents

### Core Files (112 KB total)

| File | Size | Purpose |
|------|------|---------|
| `config-wizard.js` | 34 KB | Interactive configuration wizard |
| `README.md` | 12 KB | Template overview & principles |
| `USAGE-GUIDE.md` | 19 KB | Complete usage instructions |
| `EXAMPLES.md` | 14 KB | Real-world investigation examples |
| `ARCHITECTURE.md` | 33 KB | System architecture & data flow |

### What It Does

✅ **Asks you questions** about what to investigate
✅ **Generates complete project** with all agents configured
✅ **Enforces ethical principles** (positivistic, humanistic, democratic)
✅ **Detects misinformation** with configurable rigor
✅ **Creates interactive dashboards** automatically

---

## ⚡ Quick Start (3 Steps)

### Step 1: Run the Wizard (5 minutes)

```bash
cd multi-agent-investigator
chmod +x config-wizard.js
node config-wizard.js
```

Answer 9 questions:
1. What to investigate?
2. Current news or historical?
3. Keywords?
4. Geographic scope?
5. How many time periods?
6. Analysis perspective?
7. Validation rigor?
8. Any sources to flag?
9. Project name?

### Step 2: Review Generated Project

```bash
cd your-investigation-name
cat config/investigation.json  # Check configuration
node orchestrator.js           # See execution plan
```

### Step 3: Execute with Claude Code

```
Tell Claude:

"Execute the multi-agent investigation in [project-name].
Run all explorer agents in parallel, then analyzer, synthesizer, and visualizer."
```

Wait ~25-45 minutes, then:

```bash
open data/visualizations/dashboard.html
```

---

## 🎯 Key Features

### 1. Fully Configurable

```
Number of agents:    1 to 10+ (you choose)
Time periods:        Flexible dates (relative or absolute)
Investigation type:  Current news, historical, or mixed
Perspective:         General citizens, specific groups, custom
Validation level:    Standard, High, or Maximum
```

### 2. Immutable Ethical Framework

**Always Positive** ✓:
- Human rights expansion
- Reduced suffering
- Democratic strengthening
- Environmental sustainability

**Always Negative** ✗ (Never framed positively):
- Human rights violations
- Discrimination & persecution
- Authoritarianism
- Violence against civilians
- Corruption

**Prohibited Framings** (Auto-rejected):
- Authoritarianism as "stability"
- Rights violations as "cultural differences"
- Discrimination as "traditional values"
- Censorship as "protecting harmony"

### 3. Misinformation Detection

**Standard Level**:
- Credible source prioritization
- Basic fact-checking

**High Level** (Recommended):
- 2+ sources per claim
- Bias detection
- Cross-reference verification

**Maximum Level** (High-risk topics):
- 3+ sources required
- Propaganda detection
- Emotional language flagging
- Extensive cross-checking

---

## 📖 Documentation Guide

### For First-Time Users

1. **Start here**: `README.md` - Template overview
2. **Then read**: `USAGE-GUIDE.md` - Step-by-step instructions
3. **See examples**: `EXAMPLES.md` - Real-world configurations

### For Understanding the System

- `ARCHITECTURE.md` - How everything works together
- Technical diagrams and data flow

### When You Need Help

- **Troubleshooting**: `USAGE-GUIDE.md` (bottom section)
- **Configuration tips**: `EXAMPLES.md` (best practices)
- **Execution checklist**: `USAGE-GUIDE.md` (checklist section)

---

## 🌟 Example Investigations You Can Do

### Current News Analysis
```
Topic: "EU Climate Policy"
Agents: 3 (last week, last month, last 3 months)
Perspective: Environmental sustainability
Validation: High
Time: ~25 minutes
```

### Historical Investigation
```
Topic: "Rwandan Genocide 1994"
Agents: 5 (pre-genocide → aftermath)
Perspective: Human rights
Validation: Maximum (combat denialism)
Time: ~45 minutes
```

### Academic Research
```
Topic: "Climate Change Policy Evolution"
Agents: 4 (by decade: 1990s, 2000s, 2010s, 2020s)
Perspective: Environmental + citizen welfare
Validation: High (peer-reviewed preference)
Time: ~35 minutes
```

### Policy Analysis
```
Topic: "Universal Basic Income Trials"
Agents: 6 (different UBI programs)
Perspective: Economic welfare of vulnerable groups
Validation: High (evidence-based)
Time: ~40 minutes
```

---

## ✅ What Makes This Template Special

### vs. Manual Research
✓ **Automated multi-source collection**
✓ **Systematic sentiment analysis**
✓ **Timeline synthesis automatically**
✓ **Interactive visualization generated**
✗ Manual: Hours of work, no standardization

### vs. Simple News Aggregation
✓ **Critical analysis with ethical framework**
✓ **Misinformation detection built-in**
✓ **Source credibility assessment**
✓ **Cross-reference verification**
✗ Aggregators: No analysis, trust all sources equally

### vs. Single AI Query
✓ **Multiple specialized agents**
✓ **Parallel data collection (faster)**
✓ **Validation at multiple levels**
✓ **Comprehensive timeline view**
✗ Single query: Limited scope, no verification

---

## 🛡️ Ethical Guarantees

**You CAN configure:**
- Number of agents
- Time periods to investigate
- Specific perspective (which citizens, what focus)
- Validation rigor level
- Sources to prioritize or flag

**You CANNOT override:**
- Human rights violations → Always negative
- Authoritarianism → Always negative
- Democratic principles → Always prioritized
- Evidence requirements → Always enforced
- Humanistic values → Always paramount

**The system will reject** attempts to:
- Frame oppression positively
- Ignore human rights violations
- Bypass evidence verification
- Score discrimination favorably

---

## 📊 What You Get as Output

### Interactive Dashboard (`dashboard.html`)
- Timeline chart (sentiment over time)
- Distribution pie chart
- Key findings panels
- Entity rankings
- Period summaries
- **Fully shareable** (self-contained HTML file)

### Summary Report (`summary.md`)
- Executive summary
- Positive achievements list
- Negative challenges list
- Timeline analysis
- Theme evolution
- Predictions & outlook

### Analyzed Data (`articles.jsonl`)
- Every article with sentiment score
- Source credibility assessment
- Misinformation flags (if any)
- Entity extraction
- Verification metadata

### Timeline Data (`timeline.json`)
- Complete chronological analysis
- Trend identification
- Inflection points
- Theme evolution
- Statistical breakdowns

---

## 🎓 Learning Path

### Beginner (First Investigation)
1. Run wizard with simple topic
2. Use **3 agents** (recent, mid-term, historical)
3. Choose **general citizen perspective**
4. Set validation to **High**
5. Execute and review dashboard

### Intermediate (Refine Your Approach)
1. Try different perspectives
2. Experiment with agent counts
3. Customize generated agent prompts
4. Adjust validation for topic sensitivity
5. Compare results across investigations

### Advanced (Custom Configurations)
1. Define custom perspectives
2. Add domain-specific sources
3. Create specialized validators
4. Modify sentiment rules for niche domains
5. Build investigation workflows

---

## 💡 Pro Tips

### ✅ DO

1. **Start with the wizard** - Don't skip it
2. **Review generated config** before executing
3. **Match validation to topic** - Contested topics need Maximum
4. **Use 3-6 agents** - Optimal sweet spot
5. **Run Phase 1 in parallel** - Saves 10-15 minutes
6. **Check credibility flags** - Learn from source assessments
7. **Share dashboards** - They're self-contained HTML
8. **Document custom changes** - For reproducibility

### ❌ AVOID

1. **Too many agents** (10+) - Diminishing returns
2. **Vague perspectives** - Be specific
3. **Under-validation** for controversial topics
4. **Over-validation** for straightforward topics
5. **Ignoring misinformation flags** - They're there for a reason
6. **Trying to bypass ethical framework** - It won't work
7. **Running Phase 1 sequentially** - Wastes time
8. **Skipping configuration review** - Leads to surprises

---

## 📁 File Organization

```
multi-agent-investigator/          # This template
├── config-wizard.js               # Run this to start!
├── README.md                      # Template overview
├── USAGE-GUIDE.md                 # Complete instructions
├── EXAMPLES.md                    # Real-world examples
├── ARCHITECTURE.md                # System design
├── GET-STARTED.md                 # This file
└── [Empty directories for structure]

After running wizard:

your-investigation/                # Generated project
├── config/
│   ├── investigation.json         # Your configuration
│   ├── topic.json                 # Investigation params
│   └── sentiment-rules.json       # Ethical framework
├── agents/
│   ├── scout-*.md                 # N agent prompts (generated)
│   └── [analyzer/synthesizer/visualizer to be created]
├── data/                          # Pipeline outputs
│   ├── raw/                       # Scout outputs
│   ├── analyzed/                  # Analyzer outputs
│   ├── synthesized/               # Synthesizer outputs
│   └── visualizations/            # Final dashboard!
├── validators/
│   └── source-validation.md       # Validation guidelines
├── orchestrator.js                # Execution coordinator
├── README.md                      # Project-specific docs
└── QUICKSTART.md                  # Execution guide
```

---

## 🚦 Status Indicators in Dashboard

### Sentiment Score Colors

| Score | Color | Meaning |
|-------|-------|---------|
| +7 to +10 | Dark Green | Very beneficial for citizens |
| +3 to +6 | Light Green | Beneficial |
| 0 to +2 | Yellow | Neutral / Mixed impact |
| -3 to -5 | Orange | Harmful |
| -6 to -10 | Dark Red | Very harmful |

### Trend Indicators

| Symbol | Meaning |
|--------|---------|
| ↑ | Improving (sentiment increasing) |
| ↓ | Declining (sentiment decreasing) |
| → | Stable (sentiment steady) |

### Credibility Levels

| Level | Trust | When to Use |
|-------|-------|-------------|
| VERIFIED | Highest | Reuters, AP, peer-reviewed |
| CREDIBLE | Moderate | Established newspapers, NGOs |
| QUESTIONABLE | Low | Verify carefully, known bias |
| FLAGGED | Avoid | Misinformation, propaganda |

---

## ⏱️ Expected Timelines

### By Agent Count

| Agents | Articles | Total Time |
|--------|----------|------------|
| 3 | ~45-75 | 20-30 min |
| 5 | ~75-125 | 30-45 min |
| 10 | ~150-250 | 45-75 min |

### By Validation Level

| Level | Processing | Use When |
|-------|------------|----------|
| Standard | Fastest | Low-controversy topics |
| High | Moderate | Most investigations (recommended) |
| Maximum | Slower | High misinformation risk |

### By Phase

| Phase | Time | Parallel? |
|-------|------|-----------|
| 1: Scouts | 5-10 min | YES (critical!) |
| 2: Analyzer | 10-15 min | No |
| 3: Synthesizer | 5-10 min | No |
| 4: Visualizer | 5-10 min | No |

---

## 🎯 Success Checklist

After your first investigation, you should have:

- [ ] Generated project with wizard
- [ ] Reviewed `config/investigation.json`
- [ ] Executed all 4 phases successfully
- [ ] `dashboard.html` opens in browser
- [ ] Timeline chart displays correctly
- [ ] Sentiment distribution makes sense
- [ ] Key findings are relevant
- [ ] Summary report is comprehensive
- [ ] Credibility flags are reasonable
- [ ] Ethical principles were applied consistently

---

## 🆘 Getting Help

### Common Issues

**"Wizard won't run"**
→ `chmod +x config-wizard.js` first

**"No articles found"**
→ Broaden keywords, expand date ranges

**"Too many misinformation flags"**
→ Review manually, may be over-sensitive

**"Sentiment scores inconsistent"**
→ Check `sentiment-rules.json`, clarify perspective

**"Dashboard won't load"**
→ Validate `timeline.json` with `cat timeline.json | jq .`

### Documentation References

| Question | Read |
|----------|------|
| How do I run it? | `USAGE-GUIDE.md` |
| What can I configure? | `README.md` + `EXAMPLES.md` |
| How does it work? | `ARCHITECTURE.md` |
| Real-world examples? | `EXAMPLES.md` |
| Troubleshooting? | `USAGE-GUIDE.md` (bottom) |

---

## 🎊 You're Ready!

This template transforms complex, multi-agent research into a simple wizard-driven process.

### Next Steps:

1. **Run the wizard**: `node config-wizard.js`
2. **Pick a topic** you're curious about
3. **Answer the questions**
4. **Execute the investigation**
5. **Explore your dashboard**

The system handles:
- ✅ Agent generation
- ✅ Ethical framework enforcement
- ✅ Misinformation detection
- ✅ Timeline synthesis
- ✅ Interactive visualization

You focus on:
- 🎯 Choosing what to investigate
- 🎯 Defining your perspective
- 🎯 Interpreting the results

---

**Ready to investigate?** Run the wizard and let the agents do the work! 🚀

```bash
node config-wizard.js
```
