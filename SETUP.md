# Multi-Agent Investigator - Setup Complete ✅

## Location
```
/Users/Shared/projects/investigator
```

## What's Installed

### Template Files (112 KB)
- ✅ `config-wizard.js` - Interactive configuration wizard
- ✅ `GET-STARTED.md` - Quick start guide
- ✅ `README.md` - Template overview
- ✅ `USAGE-GUIDE.md` - Complete instructions
- ✅ `EXAMPLES.md` - Real-world examples
- ✅ `ARCHITECTURE.md` - System design

### Claude Code Integration (.claude/)
- ✅ **Agents** (4 agent definitions)
  - `explorer-agent.md` - Data collection template
  - `analyzer-agent.md` - Sentiment analysis
  - `synthesizer-agent.md` - Timeline synthesis
  - `visualizer-agent.md` - Dashboard generation

- ✅ **Commands** (3 slash commands)
  - `/configure` - Run wizard
  - `/execute-investigation` - Run pipeline
  - `/list-projects` - Show projects

- ✅ **Memory**
  - `investigator-context.md` - System context for Claude

- ✅ **Settings**
  - `settings.local.json` - Permissions configured

## Quick Start

### 1. Configure New Investigation

```bash
cd /Users/Shared/projects/investigator
node config-wizard.js
```

Or use slash command:
```
/configure
```

### 2. Execute Investigation

After wizard generates project:

```bash
cd [your-project-name]
node orchestrator.js  # View plan
```

Then tell Claude:
```
Execute the multi-agent investigation in [project-name].
Run all explorer agents in parallel, then analyzer, synthesizer, visualizer.
```

Or use slash command:
```
/execute-investigation [project-name]
```

### 3. View Results

```bash
open data/visualizations/dashboard.html
cat data/visualizations/summary.md
```

## Directory Structure

```
/Users/Shared/projects/investigator/
├── .claude/                      # Claude Code integration
│   ├── agents/
│   │   ├── explorer-agent.md
│   │   ├── analyzer-agent.md
│   │   ├── synthesizer-agent.md
│   │   └── visualizer-agent.md
│   ├── commands/
│   │   ├── configure.md          # /configure
│   │   ├── execute-investigation.md  # /execute-investigation
│   │   └── list-projects.md      # /list-projects
│   ├── memory/
│   │   └── investigator-context.md
│   └── settings.local.json
│
├── config/                       # Template config files
├── agents/                       # Template agent prompts
├── validators/                   # Validation templates
├── src/                          # (Empty for future extensions)
├── docs/                         # (Empty for your notes)
│
├── config-wizard.js              # ⭐ Start here!
├── GET-STARTED.md                # Quick guide
├── README.md                     # Template overview
├── USAGE-GUIDE.md                # Complete instructions
├── EXAMPLES.md                   # Real-world examples
├── ARCHITECTURE.md               # System design
└── SETUP.md                      # This file
```

## Workflow

```
1. /configure (or node config-wizard.js)
   ↓
2. Answer 9 questions
   ↓
3. Project generated in subdirectory
   ↓
4. Review config/investigation.json
   ↓
5. /execute-investigation or tell Claude to run
   ↓
6. Wait ~25-45 minutes
   ↓
7. View dashboard.html
```

## Ethical Framework

### Immutable Principles

**Always Positive** ✅:
- Human rights expansion
- Reduced suffering
- Democratic strengthening
- Environmental sustainability

**Always Negative** ❌ (Never framed positively):
- Human rights violations
- Discrimination
- Authoritarianism
- Violence against civilians
- Corruption

**Auto-Rejected Framings**:
- Authoritarianism as "stability"
- Rights violations as "cultural differences"
- Discrimination as "traditional values"
- Censorship as "protecting harmony"

## Slash Commands

### /configure
Runs the configuration wizard to set up new investigation.

### /execute-investigation [path]
Executes a configured investigation project.

### /list-projects
Shows all configured investigation projects.

## Example Investigation

```bash
# 1. Configure
node config-wizard.js

# Answer questions:
Topic: "European Climate Policy"
Type: Current news
Keywords: climate policy, Green Deal, carbon neutrality
Scope: European Union
Agents: 3 (last week, last month, last quarter)
Perspective: Environmental sustainability
Validation: High
Project: eu-climate-2024

# 2. Execute
cd eu-climate-2024
# Tell Claude to execute

# 3. Results
open data/visualizations/dashboard.html
```

## Configuration Options

### Number of Agents
- **3-4**: Optimal for current news
- **4-6**: Good for historical investigations
- **6-8**: Academic/decade-by-decade research

### Validation Levels
- **Standard**: Low-controversy topics (fastest)
- **High**: Most investigations (recommended)
- **Maximum**: High-misinformation topics (slowest, most thorough)

### Perspectives
- **General citizen welfare**: Broad human impact
- **Specific groups**: Workers, refugees, youth, etc.
- **Environmental**: Climate and sustainability
- **Democratic**: Governance and accountability
- **Custom**: Define your own

## Documentation Guide

| When | Read |
|------|------|
| **Starting** | GET-STARTED.md |
| **Configuring** | USAGE-GUIDE.md |
| **Examples** | EXAMPLES.md |
| **Understanding** | README.md + ARCHITECTURE.md |

## Support

- **Wizard issues**: Check config-wizard.js permissions
- **Execution problems**: See USAGE-GUIDE.md troubleshooting
- **Ethical questions**: Review investigator-context.md
- **Technical details**: Read ARCHITECTURE.md

## Next Steps

1. ✅ **Setup complete** - Template installed with Claude integration
2. 🎯 **Run wizard** - `node config-wizard.js` or `/configure`
3. 📊 **Execute investigation** - Follow generated project's QUICKSTART.md
4. 🎉 **View results** - Interactive dashboard in your browser

---

**Ready to investigate!** The template is configured and Claude Code knows how to use it. 🚀

```bash
cd /Users/Shared/projects/investigator
node config-wizard.js
```
