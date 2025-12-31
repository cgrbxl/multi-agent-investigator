# Example Investigations

This document shows real-world examples of how to configure the Multi-Agent Investigator for different types of investigations.

---

## Example 1: Current News - "EU Migration Policy"

### Wizard Responses

```
1. Topic: European Union migration policy
2. Type: [1] Current news analysis
3. Keywords: migration, refugees, asylum, border control, EU migration pact
4. Geographic scope: European Union
5. Number of agents: 3

   Agent #1
   - Name: very-recent
   - From: 7 days ago
   - To: now
   - Description: Breaking news and immediate developments

   Agent #2
   - Name: recent-month
   - From: 30 days ago
   - To: 7 days ago
   - Description: Policy announcements and implementation news

   Agent #3
   - Name: quarterly
   - From: 3 months ago
   - To: 30 days ago
   - Description: Broader context and trend development

6. Perspective: [2] Specific group
   - Group: refugees and migrants
   - Focus: Human rights, safety, and integration outcomes

7. Validation: [3] Maximum
8. Flagged sources: breitbart.com, infowars.com
9. Project name: eu-migration-2024
```

### Key Configuration

- **3 parallel agents** tracking different time scales
- **Refugee-centered perspective** (humanistic focus)
- **Maximum validation** (migration is prone to misinformation)
- **Flagged sources** (known for anti-immigration bias)

### Expected Outcomes

- Dashboard showing sentiment evolution over 3 months
- Critical analysis of policy changes from refugee perspective
- Misinformation flagging on inflammatory claims
- Source credibility assessment for each article
- Trend analysis: improving/worsening conditions

---

## Example 2: Historical Investigation - "Rwandan Genocide 1994"

### Wizard Responses

```
1. Topic: Rwandan Genocide 1994
2. Type: [2] Historical investigation
3. Keywords: Rwanda, genocide, Hutu, Tutsi, UNAMIR, international response
4. Geographic scope: Rwanda, International
5. Number of agents: 5

   Agent #1
   - Name: pre-genocide
   - From: 1990-01-01
   - To: 1994-04-06
   - Description: Escalation period and warning signs

   Agent #2
   - Name: initial-weeks
   - From: 1994-04-07
   - To: 1994-05-01
   - Description: First month of genocide

   Agent #3
   - Name: peak-period
   - From: 1994-05-01
   - To: 1994-06-30
   - Description: Height of killings

   Agent #4
   - Name: ending
   - From: 1994-07-01
   - To: 1994-08-31
   - Description: RPF victory and genocide end

   Agent #5
   - Name: immediate-aftermath
   - From: 1994-09-01
   - To: 1995-12-31
   - Description: Humanitarian crisis and accountability beginnings

6. Perspective: [1] General citizen welfare
   - Focus: Human rights, humanitarian impact, prevention failures

7. Validation: [3] Maximum
   - This is critical: genocide denialism exists
   - Cross-reference all claims
   - Detect propaganda and denial

8. Flagged sources: (none specifically, but propaganda detection ON)
9. Project name: rwanda-genocide-1994
```

### Key Configuration

- **5 agents** covering progression of genocide
- **Maximum validation** to combat denialism
- **Humanistic perspective** (atrocity always negative)
- **Propaganda detection** for revisionist narratives

### Ethical Framework Application

**Automatic negative scoring** (-10):
- Genocide and mass killings (ALWAYS NEGATIVE)
- International failure to intervene (NEGATIVE)
- Hate propaganda inciting violence (ALWAYS NEGATIVE)

**Never positive framing**:
- "Ethnic tensions" → "Genocide"
- "Both sides" narratives minimizing organized genocide
- Victim-blaming of Tutsi population

### Expected Outcomes

- Timeline showing clear progression of atrocity
- Identification of international response failures
- Flagging of any genocide denial or minimization
- Humanitarian impact quantification
- Lessons for future prevention

---

## Example 3: Academic Research - "Climate Change Policy Evolution"

### Wizard Responses

```
1. Topic: Global climate change policy evolution
2. Type: [2] Historical investigation
3. Keywords: climate change, Paris Agreement, Kyoto Protocol, carbon emissions, IPCC, climate action
4. Geographic scope: Global
5. Number of agents: 4

   Agent #1
   - Name: early-awareness-1990s
   - From: 1990-01-01
   - To: 1999-12-31
   - Description: Kyoto Protocol era and early climate science

   Agent #2
   - Name: 2000s-debate
   - From: 2000-01-01
   - To: 2009-12-31
   - Description: Growing scientific consensus, political resistance

   Agent #3
   - Name: 2010s-action
   - From: 2010-01-01
   - To: 2019-12-31
   - Description: Paris Agreement, renewable energy growth

   Agent #4
   - Name: 2020s-urgency
   - From: 2020-01-01
   - To: now
   - Description: Climate crisis, net-zero commitments, extreme weather

6. Perspective: [3] Environmental sustainability
   - Focus: Long-term environmental health and human welfare

7. Validation: [2] High
   - Peer-reviewed research preferred
   - IPCC reports as primary sources
   - Flag climate denialism

8. Flagged sources: (climate denial sites if known)
9. Project name: climate-policy-evolution
```

### Key Configuration

- **4 agents** by decade
- **Academic focus** (peer-reviewed sources)
- **Environmental perspective** with human welfare priority
- **High validation** for scientific accuracy

### Validation Requirements

- Prefer peer-reviewed journals
- IPCC reports as gold standard
- Cross-reference policy claims with implementation data
- Flag unsubstantiated claims about climate science

### Expected Outcomes

- 30-year timeline of policy evolution
- Trend analysis: improving or worsening action
- Gap analysis: commitments vs implementation
- Identification of tipping points in policy
- Credibility assessment of sources

---

## Example 4: Policy Analysis - "Universal Basic Income Trials"

### Wizard Responses

```
1. Topic: Universal Basic Income experimental programs
2. Type: [3] Mixed (historical context + current)
3. Keywords: universal basic income, UBI, guaranteed income, Finland trial, Kenya GiveDirectly, cash transfers
4. Geographic scope: Global (multiple countries)
5. Number of agents: 6

   Agent #1
   - Name: finland-trial
   - From: 2017-01-01
   - To: 2018-12-31
   - Description: Finnish UBI experiment period

   Agent #2
   - Name: kenya-givedirectly
   - From: 2016-01-01
   - To: now
   - Description: Long-term UBI trial in Kenya

   Agent #3
   - Name: stockton-california
   - From: 2019-02-01
   - To: 2021-02-01
   - Description: Stockton Economic Empowerment Demonstration

   Agent #4
   - Name: spain-covid
   - From: 2020-03-01
   - To: 2021-12-31
   - Description: Spanish COVID-era guaranteed income

   Agent #5
   - Name: other-pilots
   - From: 2015-01-01
   - To: 2019-12-31
   - Description: Additional pilots (Netherlands, Canada, etc.)

   Agent #6
   - Name: current-developments
   - From: 2022-01-01
   - To: now
   - Description: Recent UBI discussions and new pilots

6. Perspective: [2] Specific group
   - Group: low-income workers and economically vulnerable
   - Focus: Economic security, welfare outcomes, dignity

7. Validation: [2] High
   - Peer-reviewed studies essential
   - Cross-reference claims about impacts
   - Flag ideological bias (both pro and anti UBI)

8. Flagged sources: (none)
9. Project name: ubi-trials-global
```

### Key Configuration

- **6 agents** for different UBI programs
- **Economically-focused perspective**
- **High validation** for impact claims
- **Mixed historical and current** approach

### Analysis Focus

**Positive indicators**:
- Reduced poverty and economic insecurity
- Improved mental health and wellbeing
- Increased educational attainment
- Entrepreneurship and risk-taking ability
- Reduced administrative burden vs traditional welfare

**Negative indicators**:
- Program cancellations harming participants
- Insufficient amount to meet basic needs
- Stigmatization or social division
- Work disincentive effects (if empirically shown)

### Expected Outcomes

- Comparative analysis across programs
- Evidence-based assessment of impacts
- Identification of design factors affecting success
- Policy recommendations based on evidence
- Timeline showing evolution of UBI discourse

---

## Example 5: Misinformation Analysis - "COVID-19 Origins"

### Wizard Responses

```
1. Topic: COVID-19 pandemic origins investigation
2. Type: [3] Mixed (historical + current)
3. Keywords: COVID-19, coronavirus, Wuhan, lab leak, zoonotic origin, WHO investigation
4. Geographic scope: Global
5. Number of agents: 4

   Agent #1
   - Name: initial-outbreak
   - From: 2019-12-01
   - To: 2020-03-31
   - Description: First cases and initial reporting

   Agent #2
   - Name: early-pandemic
   - From: 2020-04-01
   - To: 2020-12-31
   - Description: WHO investigation, early theories

   Agent #3
   - Name: investigation-phase
   - From: 2021-01-01
   - To: 2022-12-31
   - Description: Scientific studies, renewed debate

   Agent #4
   - Name: current-understanding
   - From: 2023-01-01
   - To: now
   - Description: Latest evidence and consensus

6. Perspective: [1] General citizen welfare
   - Focus: Public health, scientific accuracy, transparency

7. Validation: [3] Maximum
   - Extensive misinformation on this topic
   - Require peer-reviewed sources
   - Cross-reference all claims
   - Flag conspiracy theories
   - Detect propaganda from state actors

8. Flagged sources: conspiracy theory sites, state propaganda outlets
9. Project name: covid-origins-investigation
```

### Key Configuration

- **Maximum validation** (high misinformation)
- **4 temporal phases** tracking evolution
- **Scientific accuracy priority**
- **Propaganda detection** for geopolitical narratives

### Critical Analysis Requirements

**Evidence tiers**:
1. Peer-reviewed scientific papers (highest)
2. WHO and CDC official reports
3. Investigative journalism from credible outlets
4. Expert scientific commentary
5. Unverified claims (flagged, not used for analysis)

**Propaganda detection**:
- State-sponsored narratives (China, US, others)
- Conspiracy theories (bioweapon claims without evidence)
- Politicized framing of scientific questions
- Premature certainty on unresolved questions

**Ethical approach**:
- Acknowledge scientific uncertainty where it exists
- Distinguish evidence-based theories from speculation
- Flag xenophobic or racist framings
- Prioritize public health over geopolitical narratives

### Expected Outcomes

- Timeline showing evolution of scientific understanding
- Credibility assessment of different origin theories
- Identification of misinformation patterns
- Separation of evidence-based analysis from propaganda
- Public health implications of origins question

---

## Configuration Patterns

### High-Misinformation Topics

Use **Maximum Validation** for:
- Politically contested current events
- Topics with active disinformation campaigns
- Historical events with denial or revisionism
- Public health crises
- War and conflict (fog of war)

**Settings**:
- 3+ sources per claim
- Mandatory primary sources
- Propaganda detection ON
- Extensive credible source list
- Flagged source list (known propagandists)

### Academic/Research Topics

Use **High Validation** for:
- Scientific literature reviews
- Policy impact assessments
- Historical analysis with good documentation
- Comparative studies

**Settings**:
- 2+ sources per claim
- Peer-reviewed preference
- Primary source preference
- Bias detection ON

### General News Analysis

Use **Standard Validation** for:
- Low-controversy current events
- Straightforward policy announcements
- Well-documented situations

**Settings**:
- Credible source prioritization
- Basic fact-checking
- Source attribution required

---

## Perspective Selection Guide

### General Citizen Welfare
**Use when**: Broad public impact assessment
**Focus**: Human rights, quality of life, democratic participation
**Example topics**: Healthcare policy, economic reforms, education

### Specific Group
**Use when**: Particular population affected
**Groups**: Workers, refugees, youth, elderly, women, minorities
**Example topics**: Labor policy, migration, housing

### Environmental Sustainability
**Use when**: Ecological impact primary concern
**Focus**: Climate action, biodiversity, pollution, resource use
**Example topics**: Climate policy, renewable energy, conservation

### Democratic Governance
**Use when**: Institutional quality is central
**Focus**: Transparency, accountability, rule of law, participation
**Example topics**: Electoral systems, anti-corruption, press freedom

### Custom
**Use when**: None of the above fit
**Define**: Your own indicators and priorities
**Respect**: Humanistic and democratic principles still apply

---

## Common Pitfalls to Avoid

### ❌ Too Many Agents
**Problem**: 10+ agents creates overwhelming data
**Solution**: 3-6 agents usually optimal
**Exception**: Decade-by-decade historical (can go higher)

### ❌ Too Narrow Time Periods
**Problem**: Agent finds insufficient sources
**Solution**: Expand date ranges or broaden keywords

### ❌ Validation Too Low for Topic
**Problem**: Misinformation not detected
**Solution**: Increase validation for contested topics

### ❌ Validation Too High for Straightforward Topics
**Problem**: Excessive processing time
**Solution**: Standard validation fine for non-controversial news

### ❌ Vague Perspective
**Problem**: Inconsistent sentiment scoring
**Solution**: Be specific about what matters (e.g., "workers' rights" not "workers")

### ❌ Ignoring Ethical Framework
**Problem**: Attempting to frame violations positively
**Solution**: System will reject - principles are immutable

---

## Tips for Success

### ✅ Start with the Wizard
Let it guide you through configuration choices

### ✅ Review Generated Config
Check `config/investigation.json` before executing

### ✅ Adjust Agent Prompts
Customize `agents/*.md` for domain-specific needs

### ✅ Define Clear Perspective
Specific focus leads to consistent analysis

### ✅ Match Validation to Topic
High misinformation = Maximum validation

### ✅ Use Relative Dates for Current Topics
"30 days ago" better than "2024-12-01" for ongoing investigations

### ✅ Absolute Dates for Historical
"1994-04-07" clearer than "30 years ago"

### ✅ Review Credibility Flags
Check `data/analyzed/` for source assessments

### ✅ Share the Dashboard
`dashboard.html` is self-contained and shareable

---

These examples demonstrate the flexibility and rigor of the Multi-Agent Investigator template. Adapt them to your needs while maintaining ethical principles! 🚀
