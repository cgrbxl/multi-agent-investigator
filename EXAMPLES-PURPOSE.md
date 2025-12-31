# Investigation Purpose - Examples & Use Cases

## Overview

The "investigation purpose" feature allows you to define **specific objectives** that guide all agents throughout the research pipeline. This makes the framework adaptable to diverse use cases while maintaining ethical principles.

---

## Example 1: Investment Analysis

### Configuration
```
Topic: Tesla Inc.
Purpose: Evaluate ethical and economic worth for investment decisions
Type: Current news analysis
Keywords: tesla, electric vehicles, ESG, sustainability, labor practices, financial performance
Geographic Scope: Global
Perspective: Custom - "Ethical investment evaluation"
```

### How Purpose Guides Agents

**Explorer Agents** will prioritize:
- ESG (Environmental, Social, Governance) reports
- Financial performance metrics
- Labor practice investigations
- Supply chain ethics
- Environmental impact assessments
- Regulatory compliance news

**Analyzer Agent** will focus on:
- Financial stability indicators
- Ethical business practices
- Labor rights and worker welfare
- Environmental sustainability
- Long-term value creation
- Risk factors (reputational, regulatory, operational)

**Synthesizer Agent** will identify:
- Trends in ESG performance over time
- Financial health trajectory
- Emerging ethical concerns or improvements
- Investment risk/opportunity balance

**Visualizer Agent** will highlight:
- Investment-relevant KPIs
- ESG score evolution
- Risk indicators
- Comparative benchmarks

---

## Example 2: Democratic Assessment

### Configuration
```
Topic: Hungarian Government (2010-2024)
Purpose: Assess democratic values and human rights record
Type: Historical investigation
Keywords: democracy, rule of law, media freedom, judicial independence, elections
Geographic Scope: Hungary, European Union
Perspective: Democratic governance quality
```

### How Purpose Guides Agents

**Explorer Agents** will prioritize:
- EU reports on rule of law
- Freedom House democracy scores
- Judicial independence assessments
- Media freedom rankings
- Electoral process evaluations
- Human rights organization reports

**Analyzer Agent** will focus on:
- Democratic backsliding indicators
- Human rights violations
- Press freedom trends
- Judicial independence metrics
- Electoral integrity
- Minority rights protections

**Synthesizer Agent** will identify:
- Democratic erosion timeline
- Key inflection points (constitutional changes, laws passed)
- EU response and effectiveness
- Civil society resistance patterns

**Visualizer Agent** will highlight:
- Democracy index scores over time
- Comparison with EU peers
- Critical policy moments
- Human rights impact areas

---

## Example 3: Historical Figure Assessment

### Configuration
```
Topic: Winston Churchill
Purpose: Understand historical legacy and impact on modern society
Type: Historical investigation
Keywords: churchill, british empire, world war 2, colonialism, leadership
Geographic Scope: Global
Perspective: General citizen welfare (historical context)
```

### How Purpose Guides Agents

**Explorer Agents** will prioritize:
- Scholarly historical analyses
- Contemporary reevaluations
- Postcolonial perspectives
- WWII historiography
- Impact on former colonies
- Modern debates about statues/memorials

**Analyzer Agent** will focus on:
- Positive contributions (WWII leadership, anti-fascism)
- Negative impacts (Bengal famine, colonialism)
- Contested legacy elements
- Modern relevance and reinterpretation
- Impact on different populations

**Synthesizer Agent** will identify:
- How historical assessment has evolved
- Generational shifts in perspective
- Regional differences in legacy perception
- Contemporary relevance

**Visualizer Agent** will highlight:
- Timeline of major actions and consequences
- Geographic variation in legacy
- Evolution of scholarly consensus
- Key debates in modern context

---

## Example 4: Policy Effectiveness

### Configuration
```
Topic: Universal Basic Income Trials
Purpose: Determine policy effectiveness for citizen welfare
Type: Mixed (historical trials + current experiments)
Keywords: UBI, basic income, poverty reduction, employment, welfare
Geographic Scope: Global (multiple trial locations)
Perspective: General citizen welfare
```

### How Purpose Guides Agents

**Explorer Agents** will prioritize:
- Peer-reviewed trial results
- Participant outcome studies
- Economic impact assessments
- Employment data from trial regions
- Cost-benefit analyses
- Qualitative participant testimonies

**Analyzer Agent** will focus on:
- Poverty reduction metrics
- Employment effects (positive/negative)
- Health and wellbeing outcomes
- Educational attainment changes
- Economic multiplier effects
- Fiscal sustainability

**Synthesizer Agent** will identify:
- Success patterns across different contexts
- Failure modes and why they occurred
- Optimal implementation parameters
- Scalability considerations
- Long-term vs. short-term effects

**Visualizer Agent** will highlight:
- Outcome comparison across trials
- Cost-effectiveness metrics
- Citizen welfare improvements
- Policy recommendations based on evidence

---

## Example 5: Corporate Ethics Analysis

### Configuration
```
Topic: Fast Fashion Industry
Purpose: Evaluate ethical practices and sustainability for consumer decision-making
Type: Current news analysis
Keywords: fast fashion, labor rights, sustainability, supply chain, environmental impact
Geographic Scope: Global
Perspective: Workers + Environmental sustainability (dual perspective)
```

### How Purpose Guides Agents

**Explorer Agents** will prioritize:
- Labor rights investigations
- Factory safety reports
- Environmental impact studies
- Supply chain transparency audits
- Living wage assessments
- Greenwashing exposés

**Analyzer Agent** will focus on:
- Worker welfare and safety
- Fair wage practices
- Environmental footprint
- Supply chain ethics
- Transparency and accountability
- Greenwashing vs. genuine sustainability

**Synthesizer Agent** will identify:
- Industry leaders vs. laggards
- Improvement trends or worsening conditions
- Effective vs. performative sustainability
- Systemic issues requiring regulatory intervention

**Visualizer Agent** will highlight:
- Company-by-company ethical scorecard
- Consumer decision-making guide
- Industry-wide trends
- Best practices to support

---

## How to Use the Purpose Feature

### Step 1: Define Your Objective
Ask yourself: **"What specific question am I trying to answer?"**

Good purposes are:
- ✅ Specific and actionable
- ✅ Aligned with a clear outcome
- ✅ Relevant to the topic
- ✅ Compatible with ethical framework

Examples:
- ✅ "Assess whether Company X deserves ethical investment"
- ✅ "Determine if Policy Y effectively reduces poverty"
- ✅ "Understand how Figure Z's legacy is viewed by different communities"

Bad purposes:
- ❌ "Learn about stuff" (too vague)
- ❌ "Prove my pre-existing belief" (biased)
- ❌ "Find dirt on X" (not ethical investigation)

### Step 2: Tailor Your Configuration

Based on your purpose:
- **Keywords**: Choose terms relevant to your objective
- **Perspective**: Select the viewpoint that matches your purpose
- **Validation level**: High/Maximum for contested topics, Standard for straightforward ones

### Step 3: Review Generated Prompts

After wizard completes, check `agents/scout-*.md` to ensure:
- The "Investigation Objective" section makes sense
- The guidance aligns with your goal
- Agents know what to prioritize

### Step 4: Execute Investigation

During execution, agents will:
- Filter sources based on relevance to purpose
- Focus analysis on purpose-related dimensions
- Synthesize findings that answer your objective
- Visualize results that support decision-making

---

## Purpose + Ethical Framework

**Important**: The investigation purpose **does not override** the ethical framework.

### What the Purpose Does:
- ✅ Guides **what information** agents prioritize
- ✅ Shapes **how results** are synthesized
- ✅ Focuses **analysis** on specific dimensions
- ✅ Tailors **visualization** to decision needs

### What the Purpose Cannot Do:
- ❌ Override mandatory negative scoring (human rights violations always negative)
- ❌ Bypass validation requirements (evidence still required)
- ❌ Frame authoritarianism positively (prohibited framings still apply)
- ❌ Ignore democratic principles (transparency/accountability still paramount)

### Example Conflict Resolution

**Purpose**: "Assess economic benefits of authoritarian government efficiency"

**System Response**:
- ✅ Will collect economic data
- ✅ Will analyze efficiency claims
- ❌ Will NOT score authoritarianism positively
- ✅ Will flag human rights costs
- ✅ Will provide balanced view: economic claims vs. democratic/human costs

**Result**: Investigation shows economic data while maintaining ethical framework. The purpose guides **what to look at**, but ethics guide **how to evaluate it**.

---

## Advanced Use Cases

### Multi-Stakeholder Investigations

**Purpose**: "Evaluate policy impact on multiple stakeholder groups"

Configure:
- Perspective: Custom - "Multi-stakeholder impact assessment"
- Custom indicators: Different groups' welfare metrics
- Analysis focus: Differential impacts across groups

### Comparative Analysis

**Purpose**: "Compare democratic quality across EU member states"

Configure:
- Multiple time periods as different countries
- Perspective: Democratic governance quality
- Synthesis: Cross-country comparison framework

### Longitudinal Trend Analysis

**Purpose**: "Track evolution of climate policy over decades"

Configure:
- Time periods by decade (1990s, 2000s, 2010s, 2020s)
- Perspective: Environmental sustainability
- Synthesis: Long-term trajectory analysis

---

## Tips for Effective Purpose Statements

### Be Specific
- ❌ "Learn about climate change"
- ✅ "Assess effectiveness of EU emissions trading scheme for reducing carbon emissions"

### Be Outcome-Oriented
- ❌ "Investigate human rights"
- ✅ "Determine whether human rights conditions have improved under new government"

### Be Honest About Intent
- ❌ "Research investment" (when you mean "find reasons to invest")
- ✅ "Evaluate whether ethical and financial factors support investment"

### Align with Perspective
- Purpose: "Assess worker welfare"
- Perspective: Specific group (workers) ✅
- Perspective: Environmental sustainability ❌ (misaligned)

---

## Conclusion

The investigation purpose feature makes this framework adaptable to:
- 📊 Investment decisions
- 🗳️ Democratic assessments
- 📜 Historical evaluations
- 📋 Policy analysis
- 🏢 Corporate ethics reviews
- 🌍 Any evidence-based research question

**While maintaining**:
- ✅ Ethical principles (immutable)
- ✅ Validation rigor
- ✅ Multi-source verification
- ✅ Humanistic values

Define your purpose clearly, and the agents will adapt their approach to help you achieve it. 🚀
