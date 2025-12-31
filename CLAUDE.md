# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the **Multi-Agent Investigator Template** - a configurable framework for conducting rigorous, multi-agent research investigations with built-in ethical safeguards and misinformation detection. It generates complete investigation projects based on user configuration.

### Core Purpose
- Wizard-driven configuration (`config-wizard.js`) generates investigation projects
- Projects use multi-agent architecture (explorers, analyzer, synthesizer, visualizer)
- Enforces immutable ethical framework: positivistic, humanistic, democratic principles
- Supports current news analysis, historical investigations, or mixed approaches

## Commands

### Configuration & Setup
```bash
# Run the configuration wizard (primary entry point)
node config-wizard.js

# Review execution plan for a generated project
cd <project-name>
node orchestrator.js
```

### Development
There are no build, test, or lint commands - this is a template that generates projects, not a compiled application.

## Recent Updates

### Investigation Purpose (Latest)
The wizard now asks for an "investigation purpose" (question 2) that defines the objective of the investigation. Examples:
- "Assess democratic values and human rights record"
- "Evaluate ethical and economic worth for investment decisions"
- "Understand historical legacy and impact on modern society"
- "Determine policy effectiveness for citizen welfare"

This purpose is embedded in:
- `config/topic.json` - Investigation configuration
- `agents/scout-*.md` - Explorer agent prompts (with guidance on how to tailor searches)
- Generated README and QUICKSTART files
- Orchestrator output

All agents should reference this purpose to tailor their approach while maintaining ethical framework compliance.

## Architecture

### Template Structure
- `config-wizard.js` - Interactive wizard that generates complete investigation projects
- `README.md`, `EXAMPLES.md`, `USAGE-GUIDE.md`, etc. - Documentation files
- No templates directory - all generation logic is embedded in config-wizard.js

### Generated Project Structure
When wizard runs, it creates a project with:
```
<project-name>/
├── config/
│   ├── investigation.json      # Complete configuration (includes purpose)
│   ├── topic.json              # Investigation parameters (includes purpose)
│   └── sentiment-rules.json    # Ethical framework + scoring rules
├── agents/
│   └── scout-*.md              # Generated prompts (N files, one per time period)
├── data/                       # Pipeline outputs (created during execution)
│   ├── raw/                    # Phase 1: Explorer agents output (JSONL)
│   ├── analyzed/               # Phase 2: Analyzer agent output (JSONL)
│   ├── synthesized/            # Phase 3: Synthesizer agent output (JSON)
│   └── visualizations/         # Phase 4: Visualizer agent output (HTML + MD)
├── validators/
│   └── source-validation.md    # Generated validation guidelines
├── orchestrator.js             # Execution coordinator
├── README.md                   # Project-specific documentation
└── QUICKSTART.md              # Execution guide
```

### Multi-Agent Pipeline (4 Phases)

**Phase 1: Data Collection (PARALLEL)**
- N explorer agents (user-configured, typically 3-6)
- Each agent covers a specific time period
- Use `Task(subagent_type="Explore")` to launch
- **CRITICAL: Must run all scouts in parallel** (single message with multiple Task calls)
- Output: `data/raw/<period>/articles.jsonl` (JSON Lines format)

**Phase 2: Critical Analysis (SEQUENTIAL)**
- Single analyzer agent processes all collected articles
- Use `Task(subagent_type="general-purpose")`
- Applies ethical framework from `config/sentiment-rules.json`
- Scores sentiment (-10 to +10), extracts entities, verifies sources
- Output: `data/analyzed/articles.jsonl` and `stats.json`

**Phase 3: Timeline Synthesis (SEQUENTIAL)**
- Synthesizer agent builds chronological timeline
- Use `Task(subagent_type="Plan")`
- Identifies trends, inflection points, theme evolution
- Output: `data/synthesized/timeline.json`

**Phase 4: Visualization (SEQUENTIAL)**
- Visualizer agent generates interactive dashboard
- Use `Task(subagent_type="general-purpose")`
- Creates HTML dashboard with Chart.js + Tailwind CSS
- Output: `data/visualizations/dashboard.html` and `summary.md`

### Ethical Framework (Immutable)

These principles are **hardcoded** and cannot be overridden:

**Positivistic**: Evidence-based, verifiable facts over opinion
- Multiple source verification required
- Primary sources preferred
- Statistical transparency

**Humanistic**: Human welfare and dignity prioritized
- ALWAYS POSITIVE: Rights expansion, reduced suffering, education/healthcare access
- ALWAYS NEGATIVE: Human rights violations, discrimination, authoritarianism, violence
- Prohibited positive framings: authoritarianism as "stability", censorship as "harmony"

**Democratic**: Transparency, accountability, citizen empowerment
- ALWAYS POSITIVE: Free press, democratic institutions, rule of law
- ALWAYS NEGATIVE: Censorship, power concentration, voter suppression

**What users can configure**: Specific perspective (general citizens, specific groups, environment, democracy, custom), validation level (standard/high/maximum), time periods, keywords

**What users cannot configure**: Core ethical principles, mandatory negative indicators, prohibited positive framings

## Working with Generated Projects

### When User Asks to Execute Investigation

1. **Check for orchestrator.js**: Run `node orchestrator.js` to see execution plan
2. **Read agent prompts**: Scout agents are in `agents/scout-*.md`
3. **Read configuration**: Check `config/investigation.json` and `config/sentiment-rules.json`
4. **Note the investigation purpose**: This guides what agents should focus on
5. **Execute Phase 1 in parallel**: Launch ALL explorer agents in a SINGLE message with multiple Task tool calls
6. **Execute Phases 2-4 sequentially**: Wait for each phase to complete before starting next

### Creating Agent Prompts for Phases 2-4

The wizard only generates scout (explorer) prompts. For analyzer, synthesizer, and visualizer:
- Read the configuration files to understand parameters
- **Pay attention to the investigation purpose** - tailor analysis/synthesis to this objective
- Apply the ethical framework from `config/sentiment-rules.json`
- Follow the data flow: raw → analyzed → synthesized → visualizations
- Use JSONL format (one JSON per line, not array) for streaming data

For example, if the purpose is "Evaluate ethical and economic worth for investment decisions":
- Analyzer should focus on ESG factors, financial metrics, labor practices
- Synthesizer should identify trends in corporate responsibility and financial performance
- Visualizer should highlight investment-relevant findings

### Data Formats

**JSONL (JSON Lines)**: One JSON object per line, no array wrapper
```jsonl
{"id": 1, "title": "Article 1"}
{"id": 2, "title": "Article 2"}
```

**NOT valid**:
```json
[{"id": 1}, {"id": 2}]
```

Benefits: Streamable, append-only, fault-tolerant

### Validation Levels

**Standard**: Credible sources, basic verification
**High** (recommended): 2+ sources per claim, bias detection, cross-referencing
**Maximum**: 3+ sources required, propaganda detection, emotional language flagging

When validation is High or Maximum, detect propaganda techniques:
- Loaded language, unsubstantiated claims, appeals to fear
- Oversimplification, ad hominem, cherry-picking, false dichotomy

### Common Mistakes to Avoid

1. **Running Phase 1 sequentially** - MUST run scouts in parallel (saves 10-15 minutes)
2. **Ignoring ethical framework** - sentiment-rules.json is mandatory, not optional
3. **Using JSON arrays instead of JSONL** - Phase outputs must be JSON Lines format
4. **Trying to override immutable principles** - Human rights violations are always negative
5. **Creating analyzer/synthesizer/visualizer prompts without reading config** - Must respect user's configured perspective and validation level

### File Reading Priority

When executing an investigation:
1. First read: `config/investigation.json` (understand full configuration)
2. Then read: `config/sentiment-rules.json` (understand ethical framework)
3. Then read: `agents/scout-*.md` (understand what scouts will do)
4. For each phase: Read outputs from previous phase before proceeding

### Performance Expectations

- 3 agents: ~20-30 minutes total
- 5 agents: ~30-45 minutes total
- 10 agents: ~45-75 minutes total

Parallel execution of Phase 1 is critical - reduces what would be 15-30 minutes sequential time to 5-10 minutes parallel.

## Key Implementation Details

### Wizard Generation Logic (config-wizard.js)

The wizard is a single 969-line JavaScript file that:
1. Asks 9 questions across 5 sections
2. Validates user input
3. Creates directory structure (lines 324-343)
4. Generates configuration files (lines 346-437)
5. Generates N scout agent prompts (lines 439-542)
6. Generates orchestrator.js (lines 544-630)
7. Generates validators and docs (lines 632-965)

### Ethical Framework Embedding

Lines 43-103 define `ETHICAL_FRAMEWORK` - this object is embedded in every generated `sentiment-rules.json` and cannot be modified by user configuration.

### Scout Agent Prompt Template

Lines 442-533 contain the template for scout agents. Each scout gets:
- Time period specification
- Search strategy with credible sources list
- Data extraction requirements
- Critical analysis safeguards (varies by validation level)
- Output format specification (JSONL with verification metadata)

### Orchestrator Purpose

The generated `orchestrator.js` (lines 545-627) is NOT for automated execution - it's a reference script that prints the execution plan and example Claude Code prompts. It shows users what to tell Claude Code to do.

## Tips for Claude Code Instances

- When asked to "execute investigation", read orchestrator.js output, then execute the plan it describes
- Always confirm Phase 1 scouts are running in parallel by checking you used a single message with multiple Task calls
- The ethical framework is the heart of the system - treat it as immutable during analysis
- JSONL format is non-negotiable for data pipeline - don't use JSON arrays
- Validation level determines how rigorous source checking must be - respect this in analyzer phase
- Dashboard must be self-contained HTML (embed all data, no external dependencies)
