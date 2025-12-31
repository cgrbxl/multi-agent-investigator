# Multi-Agent Investigator Context

## Project Purpose

This is a **configurable multi-agent research system** for conducting rigorous investigations with built-in ethical safeguards and misinformation detection.

## Core Principles (Immutable)

### Positivistic
- Evidence-based analysis
- Verifiable facts prioritized over opinion
- Multiple source verification required
- Statistical transparency

### Humanistic
- Human welfare and dignity are paramount
- **Always positive**: Rights expansion, reduced suffering, democracy, sustainability
- **Always negative**: Rights violations, discrimination, authoritarianism, violence, corruption
- **Never** frame violations positively regardless of context

### Democratic
- Transparency and accountability valued
- Citizen empowerment prioritized
- Free press and expression supported
- Rule of law respected

## System Architecture

### 4-Phase Pipeline

**Phase 1: Data Collection (PARALLEL)**
- Multiple explorer agents (Explore type)
- Each covers specific time period
- Web search and source verification
- Output: data/raw/*/articles.jsonl

**Phase 2: Analysis (SEQUENTIAL)**
- Single analyzer agent (General-purpose)
- Sentiment scoring with ethical framework
- Entity extraction
- Output: data/analyzed/articles.jsonl

**Phase 3: Synthesis (SEQUENTIAL)**
- Single synthesizer agent (Plan)
- Timeline construction
- Trend identification
- Output: data/synthesized/timeline.json

**Phase 4: Visualization (SEQUENTIAL)**
- Single visualizer agent (General-purpose)
- Interactive dashboard generation
- Summary reports
- Output: data/visualizations/dashboard.html

## Configuration Workflow

1. **Run wizard**: `node config-wizard.js`
2. **Answer 9 questions** about investigation
3. **Project generated** with all files
4. **Review config**: `config/investigation.json`
5. **Execute pipeline** with Claude Code
6. **View dashboard**: `data/visualizations/dashboard.html`

## Agent Definitions

All agents are defined in `.claude/agents/`:
- `explorer-agent.md` - Template for time-period scouts
- `analyzer-agent.md` - Sentiment and entity analysis
- `synthesizer-agent.md` - Timeline and trends
- `visualizer-agent.md` - Dashboard generation

## Slash Commands

- `/configure` - Run configuration wizard
- `/execute-investigation [path]` - Execute investigation
- `/list-projects` - Show all configured projects

## Key Features

✓ Configurable: 1-10+ agents, any time period, any topic
✓ Ethical: Immutable humanistic/democratic principles
✓ Critical: Misinformation detection (3 validation levels)
✓ Rigorous: Multi-source verification
✓ Visual: Interactive dashboards automatically generated
✓ Shareable: Self-contained HTML outputs

## When Helping Users

1. **First time**: Direct to `GET-STARTED.md` or run `/configure`
2. **Understanding**: Explain ethical framework is non-negotiable
3. **Configuration**: Guide through 9 wizard questions
4. **Execution**: Use Task tool to launch agents appropriately
5. **Phase 1 critical**: Always run explorers IN PARALLEL
6. **Results**: Help interpret dashboard and summary report

## Important Reminders

- **Human rights violations**: ALWAYS scored negatively
- **Authoritarianism**: NEVER framed as "stability"
- **Discrimination**: NEVER framed as "traditional values"
- **Evidence required**: No unsubstantiated claims accepted
- **Source credibility**: Always assess and document
- **Misinformation**: Flag and document, don't ignore

## Success Criteria

An investigation is successful when:
- Ethical framework applied consistently
- Multiple sources verify key claims
- Misinformation is flagged
- Sentiment scores have clear rationales
- Timeline shows clear trends
- Dashboard is interactive and informative
- Results are shareable and actionable
