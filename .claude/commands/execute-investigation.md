Execute a multi-agent investigation from a configured project.

**Prerequisites**: Project must be generated first using `/configure`

**Usage**:
```
/execute-investigation [project-path]
```

**Execution Steps**:

1. **Phase 1: Data Collection (PARALLEL)**
   - Launch all explorer agents simultaneously
   - Each agent collects articles from its time period
   - Agents perform source verification
   - Output: data/raw/*/articles.jsonl

2. **Phase 2: Analysis (SEQUENTIAL)**
   - Launch analyzer agent
   - Apply ethical framework to all articles
   - Generate sentiment scores and entity extraction
   - Output: data/analyzed/articles.jsonl + stats.json

3. **Phase 3: Synthesis (SEQUENTIAL)**
   - Launch synthesizer agent
   - Build chronological timeline
   - Identify trends and inflection points
   - Output: data/synthesized/timeline.json

4. **Phase 4: Visualization (SEQUENTIAL)**
   - Launch visualizer agent
   - Generate interactive dashboard
   - Create summary report
   - Output: data/visualizations/dashboard.html

**Expected Duration**: 25-45 minutes depending on:
- Number of agents (3-6 optimal)
- Validation level (Standard/High/Maximum)
- Article target counts

**View Results**:
```bash
open data/visualizations/dashboard.html
cat data/visualizations/summary.md
```
