# Multi-Agent Investigator Template

**Configurable, Ethical, Multi-Agent Research System**

## Overview

This template provides a complete framework for conducting rigorous, multi-agent investigations on any topic while maintaining strict ethical principles.

### Core Principles (Immutable)

✓ **Positivistic**: Evidence-based, verifiable facts over opinion
✓ **Humanistic**: Human welfare and dignity are paramount
✓ **Democratic**: Transparency, accountability, citizen empowerment

**These principles cannot be overridden.** The system will **never** present human rights violations, discrimination, authoritarianism, or oppression positively, regardless of context.

---

## Features

### 🎯 Fully Configurable
- **Investigation purpose** - Define specific objectives (assess democracy, evaluate investments, understand historical legacy, etc.)
- **Custom number of explorer agents** (1-10+)
- **Flexible time periods** (relative or absolute dates)
- **Any investigation topic** (news, historical, academic)
- **Customizable perspective** (citizens, specific groups, environment, etc.)
- **Adjustable validation rigor** (standard, high, maximum)

### 🛡️ Critical Analysis Safeguards
- **Source credibility assessment**
- **Misinformation detection**
- **Propaganda technique identification**
- **Cross-reference verification**
- **Bias flagging**

### 🤖 Multi-Agent Architecture
- **Parallel explorer agents** for data collection
- **Critical analyzer** with ethical framework
- **Timeline synthesizer** for trend identification
- **Interactive visualizer** for dashboard generation

### ✅ Ethical Framework
- **Mandatory negative scoring** for human rights violations
- **Prohibited positive framings** (e.g., "stability" for authoritarianism)
- **Humanistic value prioritization**
- **Democratic accountability focus**

---

## Quick Start

### 1. Run Configuration Wizard

```bash
cd multi-agent-investigator
chmod +x config-wizard.js
node config-wizard.js
```

The wizard will ask you:
1. **What to investigate** (topic, purpose, keywords, geographic scope)
2. **Time periods** (number of agents, date ranges)
3. **Perspective** (general citizens, specific groups, custom)
4. **Validation level** (standard, high, maximum)
5. **Project configuration** (name, output formats)

See `EXAMPLES-PURPOSE.md` for detailed examples of investigation purposes.

### 2. Generated Project

The wizard creates a complete project with:
```
your-investigation/
├── config/
│   ├── investigation.json       # Your configuration
│   ├── topic.json               # Investigation parameters
│   └── sentiment-rules.json     # Ethical framework
├── agents/
│   ├── scout-period1.md         # Explorer agent prompts
│   ├── scout-period2.md
│   └── ...
├── data/                        # Output directories
├── validators/
│   └── source-validation.md     # Misinformation safeguards
├── orchestrator.js              # Execution script
├── README.md                    # Project-specific docs
└── QUICKSTART.md               # Execution guide
```

### 3. Execute Investigation

```bash
cd your-investigation
node orchestrator.js
```

Then tell Claude Code:
```
Execute the multi-agent investigation.
Run all explorer agents in parallel, then analyzer, synthesizer, and visualizer sequentially.
```

### 4. View Results

```bash
open data/visualizations/dashboard.html
```

---

## Configuration Examples

### Example 1: Current News Analysis

```
Topic: "EU Climate Policy"
Type: Current news analysis
Agents: 3 (last week, last month, last 3 months)
Perspective: Environmental sustainability
Validation: High
```

### Example 2: Historical Investigation

```
Topic: "Arab Spring 2011"
Type: Historical investigation
Agents: 4 (pre-uprising, early 2011, mid 2011, aftermath)
Perspective: Democratic governance quality
Validation: Maximum (misinformation was prevalent)
```

### Example 3: Mixed Timeline

```
Topic: "COVID-19 Pandemic Response"
Type: Mixed (historical + current)
Agents: 5 (2020 early, 2020 peak, 2021, 2022-2023, 2024)
Perspective: General citizen welfare
Validation: Maximum (lots of misinformation)
```

---

## Ethical Framework Details

### Positivistic Principle

**Evidence-based analysis**:
- Claims must be sourced
- Multiple source verification for controversial claims
- Primary sources preferred
- Statistical transparency required

### Humanistic Principle

**Always Positive Indicators**:
- Expansion of human rights and freedoms
- Reduction of suffering and harm
- Increased access to education, healthcare, housing
- Protection of vulnerable populations
- Environmental sustainability
- Cultural diversity protection

**Always Negative Indicators** (NEVER framed positively):
- Human rights violations
- Discrimination based on identity
- Authoritarianism and oppression
- Violence against civilians
- Exploitation of vulnerable groups
- Environmental destruction harming humans

### Democratic Principle

**Positive Indicators**:
- Transparency and information access
- Strengthened democratic institutions
- Citizen participation in decision-making
- Accountability for power holders
- Free press and expression
- Rule of law and independent judiciary

**Negative Indicators** (NEVER framed positively):
- Censorship and information control
- Power concentration without accountability
- Suppression of dissent
- Corruption undermining public trust
- Voter suppression or fraud
- Erosion of checks and balances

### Prohibited Framings

The system will **automatically flag and reject** these framings:
- Authoritarianism as "stability"
- Human rights violations as "cultural differences"
- Discrimination as "traditional values"
- Censorship as "protecting social harmony"
- Exploitation as "economic opportunity"
- Environmental destruction as "development"

---

## Validation & Misinformation Detection

### Three Validation Levels

#### **Standard**
- Credible source prioritization
- Basic fact-checking
- Source attribution required

#### **High** (Recommended)
- Multiple source verification (2+ sources)
- Primary source preference
- Bias detection enabled
- Conflicting narrative flagging

#### **Maximum** (For high-risk topics)
- 3+ source verification
- Mandatory primary sources
- Propaganda technique detection
- Extensive cross-referencing
- Emotional language flagging

### Propaganda Techniques Detected

When validation level is High or Maximum:

1. **Loaded Language**: Emotionally manipulative words
2. **Unsubstantiated Claims**: Assertions without evidence
3. **Appeals to Fear**: Bypassing rational analysis
4. **Oversimplification**: Complex issues as black/white
5. **Ad Hominem**: Attacking sources vs addressing claims
6. **Cherry-Picking**: Selective favorable data
7. **False Dichotomy**: Only two options when more exist

### Source Credibility Tiers

**VERIFIED** (Highest trust):
- Reuters, AP, AFP
- Peer-reviewed journals
- Official government statistics
- UN/EU institutional reports

**CREDIBLE** (Moderate trust):
- Established newspapers with editorial standards
- Think tank research with methodology
- Reputable NGO reports
- Expert analysis with credentials

**QUESTIONABLE** (Verify carefully):
- Known political bias
- Self-published without peer review
- Anonymous sources without corroboration
- State-controlled media (authoritarian regimes)
- Content farms

---

## Agent Architecture

### Phase 1: Explorer Agents (PARALLEL)

**Configurable aspects**:
- Number of agents (1-10+)
- Time period for each (relative or absolute)
- Target article counts
- Geographic scope
- Source credibility requirements

**Each explorer**:
- Searches specific time period
- Collects articles with full metadata
- Assesses source credibility
- Flags potential misinformation
- Cross-references key claims

### Phase 2: Analyzer Agent (SEQUENTIAL)

**Fixed ethical framework**:
- Scores sentiment -10 to +10
- Applies humanistic/democratic principles
- Mandatory negative scoring for violations
- Extracts entities and themes

**Configurable**:
- Perspective (general citizens, specific group, custom)
- Validation rigor level
- Minimum sources per claim

### Phase 3: Synthesizer Agent (SEQUENTIAL)

**Builds timeline**:
- Chronological organization
- Trend identification
- Inflection point detection
- Theme evolution analysis

### Phase 4: Visualizer Agent (SEQUENTIAL)

**Generates**:
- Interactive HTML dashboard
- Timeline charts
- Distribution graphs
- Summary reports
- Credibility assessments

---

## Use Cases

### 🗞️ News Analysis
Track current events with critical analysis and misinformation detection.

**Example**: "AI Regulation in the EU"
- Agents: Last week, last month, last 3 months
- Validation: High
- Perspective: Citizen rights and protections

### 📜 Historical Investigation
Analyze past events with source verification and bias detection.

**Example**: "Rwandan Genocide 1994"
- Agents: Pre-1994, April 1994, May-July 1994, Aftermath
- Validation: Maximum
- Perspective: Human rights and humanitarian impact

### 🔬 Academic Research
Multi-source literature review with credibility assessment.

**Example**: "Climate Change Mitigation Strategies"
- Agents: By decade (1990s, 2000s, 2010s, 2020s)
- Validation: Maximum
- Perspective: Environmental sustainability

### ⚖️ Policy Analysis
Evaluate policy impact from citizen perspective.

**Example**: "Universal Basic Income Trials"
- Agents: By country/program
- Validation: High
- Perspective: Economic welfare and equality

---

## Advanced Configuration

### Custom Perspectives

Beyond the wizard presets, you can define custom perspectives by editing `config/sentiment-rules.json`:

```json
{
  "perspective": {
    "type": "custom",
    "description": "Your perspective description",
    "focus": "What to prioritize in analysis",
    "positiveIndicators": [
      "Custom positive indicator 1",
      "Custom positive indicator 2"
    ],
    "negativeIndicators": [
      "Custom negative indicator 1",
      "Custom negative indicator 2"
    ]
  }
}
```

### Custom Validation Sources

Add or remove credible/flagged sources in `validators/source-validation.md`.

### Agent Customization

Modify generated agent prompts in `agents/*.md` to:
- Add specific search strategies
- Include domain-specific sources
- Adjust target article counts
- Refine collection criteria

---

## Limitations & Considerations

### What This System Does Well
✅ Rigorous multi-source verification
✅ Ethical framework consistency
✅ Misinformation detection
✅ Timeline and trend analysis
✅ Scalable investigation architecture

### What Requires Human Judgment
⚠️ **Final interpretation of complex events**
⚠️ **Context-specific ethical dilemmas**
⚠️ **Emerging situations with limited sources**
⚠️ **Highly contested narratives requiring deep expertise**

### Ethical Safeguards Are Non-Negotiable
🛡️ Human rights violations: **Always negative**
🛡️ Democratic principles: **Always prioritized**
🛡️ Evidence-based analysis: **Always required**

**You cannot configure the system to:**
- Score authoritarianism positively
- Ignore human rights violations
- Present discrimination favorably
- Bypass evidence requirements

---

## Technical Requirements

- **Node.js** 14+ (for orchestrator and wizard)
- **Claude Code** (for agent execution)
- **Web browser** (for viewing dashboard)

---

## License

MIT License

**Ethical Framework**: Non-negotiable adherence to positivistic, humanistic, and democratic principles.

---

## Support & Contribution

### Reporting Issues
- Misinformation not detected? Report the case
- Ethical framework violation? Critical bug
- Configuration problems? Enhancement request

### Contributing
- New validation techniques
- Additional propaganda detection patterns
- Perspective templates
- Documentation improvements

---

## Version

**Template Version**: 1.0.0
**Generated**: 2024-12-31
**Based on**: EU News Pulse multi-agent system

---

## Next Steps

1. **Run the wizard**: `node config-wizard.js`
2. **Review generated project**
3. **Execute investigation** with Claude Code
4. **Analyze results** in dashboard
5. **Share findings** (self-contained HTML)

The system ensures your investigation is rigorous, ethical, and transparent. Start investigating! 🚀
