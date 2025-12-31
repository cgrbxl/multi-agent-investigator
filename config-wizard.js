#!/usr/bin/env node

/**
 * Multi-Agent Investigator - Configuration Wizard
 *
 * Interactive wizard that asks users about their investigation parameters
 * and generates a complete multi-agent research pipeline.
 *
 * Core Principles:
 * - Positivistic: Evidence-based, verifiable facts
 * - Humanistic: Human welfare and dignity prioritized
 * - Democratic: Transparency, accountability, citizen empowerment
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt utility
function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Configuration object
const config = {
  investigation: {},
  agents: {},
  perspective: {},
  validation: {},
  output: {}
};

// Ethical Framework - IMMUTABLE PRINCIPLES
const ETHICAL_FRAMEWORK = {
  name: "Humanistic Democratic Framework",
  version: "1.0.0",
  immutablePrinciples: {
    positivistic: {
      description: "Evidence-based, verifiable facts prioritized over opinion",
      rules: [
        "Claims must be supported by credible sources",
        "Multiple source verification required for controversial claims",
        "Primary sources preferred over secondary interpretations",
        "Statistical claims require methodology transparency"
      ]
    },
    humanistic: {
      description: "Human welfare and dignity are paramount",
      positiveIndicators: [
        "Expansion of human rights and freedoms",
        "Reduction of suffering and harm",
        "Increased access to education, healthcare, housing",
        "Protection of vulnerable populations",
        "Environmental sustainability for future generations",
        "Cultural diversity and expression protected"
      ],
      negativeIndicators: [
        "Violations of human rights (ALWAYS NEGATIVE)",
        "Discrimination based on identity (ALWAYS NEGATIVE)",
        "Authoritarianism and oppression (ALWAYS NEGATIVE)",
        "Violence against civilians (ALWAYS NEGATIVE)",
        "Exploitation of vulnerable groups (ALWAYS NEGATIVE)",
        "Environmental destruction harming human welfare (ALWAYS NEGATIVE)"
      ]
    },
    democratic: {
      description: "Transparency, accountability, and citizen empowerment",
      positiveIndicators: [
        "Increased transparency and access to information",
        "Strengthened democratic institutions and processes",
        "Citizen participation in decision-making",
        "Accountability mechanisms for power holders",
        "Free press and freedom of expression",
        "Rule of law and independent judiciary"
      ],
      negativeIndicators: [
        "Censorship and information control (ALWAYS NEGATIVE)",
        "Concentration of power without accountability (ALWAYS NEGATIVE)",
        "Suppression of dissent or opposition (ALWAYS NEGATIVE)",
        "Corruption undermining public trust (ALWAYS NEGATIVE)",
        "Voter suppression or electoral fraud (ALWAYS NEGATIVE)",
        "Erosion of checks and balances (ALWAYS NEGATIVE)"
      ]
    }
  },
  prohibitedPositiveFramings: [
    "Authoritarianism presented as 'stability'",
    "Human rights violations as 'cultural differences'",
    "Discrimination as 'traditional values'",
    "Censorship as 'protecting social harmony'",
    "Exploitation as 'economic opportunity'",
    "Environmental destruction as 'development'"
  ]
};

async function runWizard() {
  console.log('='.repeat(70));
  console.log('MULTI-AGENT INVESTIGATOR - Configuration Wizard');
  console.log('='.repeat(70));
  console.log('\nThis wizard will guide you through configuring your investigation.');
  console.log('The system adheres to positivistic, humanistic, and democratic principles.\n');

  // ===== SECTION 1: Investigation Topic =====
  console.log('\n' + '─'.repeat(70));
  console.log('SECTION 1: Investigation Topic');
  console.log('─'.repeat(70));

  config.investigation.topic = await ask('\n1. What topic do you want to investigate?\n   Example: "European migration policy", "Climate change action", "AI regulation"\n   > ');

  config.investigation.purpose = await ask('\n2. What is the PURPOSE of this investigation?\n   Example: "Assess democratic values and human rights record"\n           "Evaluate ethical and economic worth for investment decisions"\n           "Understand historical legacy and impact on modern society"\n           "Determine policy effectiveness for citizen welfare"\n   > ');

  config.investigation.type = await ask('\n3. What type of investigation is this?\n   [1] Current news analysis (recent developments)\n   [2] Historical investigation (past events)\n   [3] Mixed (historical context + current situation)\n   > ');

  const typeMap = {
    '1': 'current',
    '2': 'historical',
    '3': 'mixed'
  };
  config.investigation.type = typeMap[config.investigation.type] || 'mixed';

  config.investigation.keywords = await ask('\n4. Enter keywords (comma-separated):\n   Example: "migration, refugees, asylum policy, border control"\n   > ');
  config.investigation.keywords = config.investigation.keywords.split(',').map(k => k.trim());

  config.investigation.geographicScope = await ask('\n5. Geographic scope?\n   Example: "European Union", "Global", "United States"\n   > ');

  // ===== SECTION 2: Time Periods & Agents =====
  console.log('\n' + '─'.repeat(70));
  console.log('SECTION 2: Time Periods & Explorer Agents');
  console.log('─'.repeat(70));

  const numAgents = parseInt(await ask('\n6. How many explorer agents (time periods)?\n   Recommended: 3-5 agents\n   > '));

  config.agents.explorers = [];

  for (let i = 1; i <= numAgents; i++) {
    console.log(`\n--- Explorer Agent #${i} ---`);

    const periodName = await ask(`Name for this period (e.g., "recent", "mid-term-2023", "early-2020s"):\n   > `);

    const dateFrom = await ask(`Start date (YYYY-MM-DD or relative like "6 months ago"):\n   > `);

    const dateTo = await ask(`End date (YYYY-MM-DD or relative like "now", "1 month ago"):\n   > `);

    const description = await ask(`Brief description of this period:\n   > `);

    config.agents.explorers.push({
      id: `scout-${periodName}`,
      name: periodName,
      dateRange: {
        from: dateFrom,
        to: dateTo
      },
      description: description,
      targetArticles: {
        min: 10,
        ideal: 25
      }
    });
  }

  // ===== SECTION 3: Perspective Configuration =====
  console.log('\n' + '─'.repeat(70));
  console.log('SECTION 3: Analysis Perspective');
  console.log('─'.repeat(70));

  console.log('\nThe system evaluates topics from a perspective that prioritizes:');
  console.log('  ✓ Human welfare and dignity (humanistic)');
  console.log('  ✓ Evidence-based facts (positivistic)');
  console.log('  ✓ Democratic accountability (democratic)');

  const perspectiveType = await ask('\n7. What specific perspective should guide the analysis?\n   [1] General citizen welfare (broad human impact)\n   [2] Specific group (e.g., "workers", "refugees", "youth")\n   [3] Environmental sustainability\n   [4] Democratic governance quality\n   [5] Custom (define your own)\n   > ');

  const perspectiveMap = {
    '1': {
      type: 'general-citizen',
      description: 'General citizen welfare and quality of life',
      focus: 'Broad impact on human welfare, rights, and dignity'
    },
    '2': {
      type: 'specific-group',
      description: await ask('   Specify group (e.g., "workers", "students", "elderly"): '),
      focus: 'Impact on specific population with attention to vulnerability and rights'
    },
    '3': {
      type: 'environmental',
      description: 'Environmental sustainability and climate action',
      focus: 'Environmental impact with human welfare and future generations prioritized'
    },
    '4': {
      type: 'democratic',
      description: 'Democratic governance and institutional quality',
      focus: 'Transparency, accountability, and citizen empowerment'
    },
    '5': {
      type: 'custom',
      description: await ask('   Describe your perspective: '),
      focus: await ask('   What should be prioritized in analysis: ')
    }
  };

  config.perspective = perspectiveMap[perspectiveType] || perspectiveMap['1'];

  // Add ethical constraints
  config.perspective.ethicalFramework = ETHICAL_FRAMEWORK;
  config.perspective.mandatoryNegatives = [
    "Human rights violations",
    "Discrimination and persecution",
    "Authoritarianism and oppression",
    "Violence against civilians",
    "Corruption and abuse of power"
  ];

  // ===== SECTION 4: Critical Analysis & Validation =====
  console.log('\n' + '─'.repeat(70));
  console.log('SECTION 4: Critical Analysis & Misinformation Safeguards');
  console.log('─'.repeat(70));

  console.log('\nTo ensure research integrity, the system will:');
  console.log('  ✓ Verify sources for credibility');
  console.log('  ✓ Cross-reference claims across multiple sources');
  console.log('  ✓ Flag potential misinformation or propaganda');
  console.log('  ✓ Identify bias and conflicting narratives');

  const validationLevel = await ask('\n8. Validation rigor level?\n   [1] Standard (credible sources, basic verification)\n   [2] High (multiple source verification, bias detection)\n   [3] Maximum (extensive cross-checking, propaganda detection)\n   > ');

  const validationMap = {
    '1': 'standard',
    '2': 'high',
    '3': 'maximum'
  };

  config.validation = {
    level: validationMap[validationLevel] || 'high',
    credibleSources: [
      'Reuters', 'Associated Press', 'BBC', 'The Guardian',
      'Financial Times', 'The New York Times', 'Le Monde',
      'EU institutions', 'UN agencies', 'Academic journals',
      'Government official sources', 'NGO reports'
    ],
    flaggedSources: [], // User can add known unreliable sources
    requirements: {
      minimumSourcesPerClaim: validationLevel === '3' ? 3 : 2,
      requirePrimarySources: validationLevel !== '1',
      crossReferenceControversial: true,
      flagBiasedLanguage: validationLevel !== '1',
      detectPropaganda: validationLevel === '3'
    }
  };

  const addFlaggedSources = await ask('\n9. Any sources to flag as unreliable? (comma-separated, or press Enter to skip)\n   > ');
  if (addFlaggedSources) {
    config.validation.flaggedSources = addFlaggedSources.split(',').map(s => s.trim());
  }

  // ===== SECTION 5: Output Configuration =====
  console.log('\n' + '─'.repeat(70));
  console.log('SECTION 5: Output Configuration');
  console.log('─'.repeat(70));

  const projectName = await ask('\n10. Project name (filesystem-safe, e.g., "eu-migration-analysis"):\n   > ');

  config.output = {
    projectName: projectName,
    projectRoot: path.join(process.cwd(), projectName),
    generateDashboard: true,
    generateReport: true,
    exportFormats: ['html', 'markdown', 'json']
  };

  // ===== SECTION 6: Review & Generate =====
  console.log('\n' + '='.repeat(70));
  console.log('CONFIGURATION SUMMARY');
  console.log('='.repeat(70));

  console.log(`\n📋 Investigation: ${config.investigation.topic}`);
  console.log(`🎯 Purpose: ${config.investigation.purpose}`);
  console.log(`📅 Type: ${config.investigation.type}`);
  console.log(`🌍 Geographic Scope: ${config.investigation.geographicScope}`);
  console.log(`🔍 Keywords: ${config.investigation.keywords.join(', ')}`);
  console.log(`\n🤖 Explorer Agents: ${config.agents.explorers.length}`);
  config.agents.explorers.forEach((agent, idx) => {
    console.log(`   ${idx + 1}. ${agent.name}: ${agent.dateRange.from} → ${agent.dateRange.to}`);
  });
  console.log(`\n👁️  Perspective: ${config.perspective.description}`);
  console.log(`✅ Validation Level: ${config.validation.level.toUpperCase()}`);
  console.log(`📁 Project: ${config.output.projectName}`);

  const confirm = await ask('\n\nGenerate project? [Y/n]: ');

  if (confirm.toLowerCase() === 'n') {
    console.log('\n❌ Configuration cancelled.');
    rl.close();
    return;
  }

  // Generate project
  console.log('\n🚀 Generating project structure...\n');
  await generateProject(config);

  console.log('\n' + '='.repeat(70));
  console.log('✅ PROJECT GENERATED SUCCESSFULLY!');
  console.log('='.repeat(70));
  console.log(`\nProject location: ${config.output.projectRoot}`);
  console.log(`\nNext steps:`);
  console.log(`  1. cd ${projectName}`);
  console.log(`  2. Review config/investigation.json`);
  console.log(`  3. Run: node orchestrator.js`);
  console.log(`  4. Or tell Claude Code: "Execute the multi-agent investigation in ${projectName}"`);
  console.log('');

  rl.close();
}

async function generateProject(config) {
  const root = config.output.projectRoot;

  // Create directory structure
  const dirs = [
    'config',
    'config/templates',
    'agents',
    'data/raw',
    'data/analyzed',
    'data/synthesized',
    'data/visualizations',
    'validators',
    'docs'
  ];

  // Add subdirectories for each explorer
  config.agents.explorers.forEach(agent => {
    dirs.push(`data/raw/${agent.name}`);
  });

  dirs.forEach(dir => {
    fs.mkdirSync(path.join(root, dir), { recursive: true });
  });

  // Save configuration
  fs.writeFileSync(
    path.join(root, 'config/investigation.json'),
    JSON.stringify(config, null, 2)
  );

  // Generate files
  await generateInvestigationConfig(root, config);
  await generateSentimentRules(root, config);
  await generateAgentPrompts(root, config);
  await generateOrchestrator(root, config);
  await generateValidators(root, config);
  await generateREADME(root, config);
  await generateQuickStart(root, config);

  console.log('✓ Directory structure created');
  console.log('✓ Configuration files generated');
  console.log('✓ Agent prompts created');
  console.log('✓ Orchestrator configured');
  console.log('✓ Validators implemented');
  console.log('✓ Documentation written');
}

async function generateInvestigationConfig(root, config) {
  const investigationConfig = {
    topic: config.investigation.topic,
    purpose: config.investigation.purpose,
    type: config.investigation.type,
    keywords: config.investigation.keywords,
    geographicScope: config.investigation.geographicScope,
    languages: ["en"],
    timePeriods: config.agents.explorers.map(agent => ({
      name: agent.name,
      dateRange: agent.dateRange,
      description: agent.description
    }))
  };

  fs.writeFileSync(
    path.join(root, 'config/topic.json'),
    JSON.stringify(investigationConfig, null, 2)
  );
}

async function generateSentimentRules(root, config) {
  const sentimentRules = {
    description: `Sentiment scoring rules from ${config.perspective.description} perspective`,
    ethicalFramework: config.perspective.ethicalFramework,
    scoringScale: {
      range: [-10, 10],
      description: "-10 (very harmful to human welfare) to +10 (very beneficial to human welfare)"
    },
    perspective: {
      type: config.perspective.type,
      description: config.perspective.description,
      focus: config.perspective.focus
    },
    criteria: {
      positive: config.perspective.ethicalFramework.immutablePrinciples.humanistic.positiveIndicators.map((indicator, idx) => ({
        indicator: indicator,
        weight: 2,
        category: idx < 3 ? "critical" : "important"
      })),
      negative: config.perspective.ethicalFramework.immutablePrinciples.humanistic.negativeIndicators.map((indicator, idx) => ({
        indicator: indicator,
        weight: -2,
        category: "always-negative",
        note: "NEVER frame these positively regardless of context"
      }))
    },
    mandatoryNegatives: config.perspective.mandatoryNegatives,
    prohibitedFramings: config.perspective.ethicalFramework.prohibitedPositiveFramings,
    contextualFactors: [
      "Scope of impact (local, national, international)",
      "Number of people affected",
      "Timeframe (immediate vs long-term)",
      "Reversibility of changes",
      "Impact on vulnerable populations",
      "Democratic process quality",
      "Transparency and accountability"
    ],
    validationRequirements: {
      evidenceStandard: config.validation.level,
      minimumSources: config.validation.requirements.minimumSourcesPerClaim,
      requirePrimarySources: config.validation.requirements.requirePrimarySources,
      flagPropaganda: config.validation.requirements.detectPropaganda
    }
  };

  fs.writeFileSync(
    path.join(root, 'config/sentiment-rules.json'),
    JSON.stringify(sentimentRules, null, 2)
  );
}

async function generateAgentPrompts(root, config) {
  // Generate template for each explorer agent
  config.agents.explorers.forEach((agent, idx) => {
    const promptContent = `# Scout Agent: ${agent.name}

## Mission
Search for and collect information about "${config.investigation.topic}" from the period: ${agent.dateRange.from} to ${agent.dateRange.to}.

${agent.description}

## Investigation Parameters

**Topic**: ${config.investigation.topic}
**Purpose**: ${config.investigation.purpose}
**Keywords**: ${config.investigation.keywords.join(', ')}
**Geographic Scope**: ${config.investigation.geographicScope}
**Time Period**: ${agent.dateRange.from} → ${agent.dateRange.to}

## Investigation Objective

${config.investigation.purpose}

When searching and selecting sources, keep this objective in mind. Prioritize articles and information that are relevant to achieving this purpose. For example:
- If assessing democratic values: focus on governance, transparency, human rights, accountability
- If evaluating investment ethics: focus on ESG factors, labor practices, environmental impact, financial stability
- If understanding historical legacy: focus on long-term impacts, contemporary interpretations, scholarly analyses

## Search Strategy

1. **Source Selection** (CRITICAL FOR VALIDATION)
   - Prioritize credible sources: ${config.validation.credibleSources.slice(0, 5).join(', ')}
   - AVOID flagged sources: ${config.validation.flaggedSources.length > 0 ? config.validation.flaggedSources.join(', ') : 'None specified'}
   - Prefer primary sources when available
   - Cross-reference controversial claims

2. **Collection Criteria**
   - Published between ${agent.dateRange.from} and ${agent.dateRange.to}
   - Relevant to ${config.investigation.geographicScope}
   - From credible, verifiable sources
   - Substantial content (not just headlines)

3. **Data Extraction**
   For each source found, extract:
   - Title
   - Source/Publication name
   - URL
   - Publication date (YYYY-MM-DD format)
   - Full text or detailed summary (minimum 3-4 paragraphs)
   - Author (if available)
   - Article type (news, analysis, research, official statement)
   - **Source credibility indicator** (verified/credible/questionable)

4. **Quality Targets**
   - Minimum: ${agent.targetArticles.min} sources
   - Ideal: ${agent.targetArticles.ideal} sources
   - Diversity: Mix of source types and perspectives
   - Verification: Multiple sources for key claims

## Critical Analysis Safeguards

**Validation Level**: ${config.validation.level.toUpperCase()}

${config.validation.level !== 'standard' ? `
### Misinformation Detection
- Flag claims without source attribution
- Identify emotionally manipulative language
- Note conflicting narratives between sources
- Detect propaganda techniques:
  - Loaded language
  - Unsubstantiated assertions
  - Appeals to fear or emotion over facts
  - Oversimplification of complex issues
` : ''}

### Source Verification
- Check publication reputation
- Verify author credentials where possible
- Note if source is state-controlled media
- Identify potential conflicts of interest

## Output Format

Save to \`data/raw/${agent.name}/articles.jsonl\` (JSON Lines - one JSON per line):

\`\`\`jsonl
{"title": "...", "source": "...", "url": "...", "date": "YYYY-MM-DD", "content": "...", "author": "...", "type": "news", "credibility": "verified", "verification": {"sources": ["source1", "source2"], "flags": []}}
\`\`\`

## Ethical Framework Compliance

This investigation adheres to:
- **Positivistic**: Evidence-based, verifiable facts
- **Humanistic**: Human welfare and dignity prioritized
- **Democratic**: Transparency and accountability valued

**Mandatory Negative Indicators** (ALWAYS SCORE NEGATIVELY):
${config.perspective.mandatoryNegatives.map(n => `- ${n}`).join('\n')}

## Success Criteria
- All sources are from ${agent.dateRange.from} to ${agent.dateRange.to}
- Each source has complete metadata and verification data
- Content is substantial and relevant
- ${config.validation.level !== 'standard' ? 'Misinformation flags are documented\n- ' : ''}Output is valid JSONL format
- Source credibility is assessed
`;

    fs.writeFileSync(
      path.join(root, `agents/scout-${agent.name}.md`),
      promptContent
    );
  });

  console.log(`✓ Generated ${config.agents.explorers.length} scout agent prompts`);
}

async function generateOrchestrator(root, config) {
  const orchestratorContent = `#!/usr/bin/env node

/**
 * Multi-Agent Investigator - Orchestrator
 * Investigation: ${config.investigation.topic}
 * Generated: ${new Date().toISOString()}
 */

const fs = require('fs');
const path = require('path');

const CONFIG = {
  projectRoot: __dirname,
  investigation: ${JSON.stringify(config.investigation, null, 2)},
  agents: {
    explorers: ${JSON.stringify(config.agents.explorers, null, 2)}
  },
  perspective: {
    type: "${config.perspective.type}",
    description: "${config.perspective.description}"
  },
  validation: ${JSON.stringify(config.validation, null, 2)}
};

function main() {
  console.log('='.repeat(70));
  console.log('MULTI-AGENT INVESTIGATOR');
  console.log('='.repeat(70));
  console.log(\`\\nInvestigation: \${CONFIG.investigation.topic}\`);
  console.log(\`Purpose: \${CONFIG.investigation.purpose}\`);
  console.log(\`Type: \${CONFIG.investigation.type}\`);
  console.log(\`Perspective: \${CONFIG.perspective.description}\`);
  console.log(\`Validation Level: \${CONFIG.validation.level.toUpperCase()}\`);

  console.log('\\n' + '─'.repeat(70));
  console.log('EXECUTION PLAN');
  console.log('─'.repeat(70));

  console.log('\\nPhase 1: Data Collection (PARALLEL)');
  console.log(\`  \${CONFIG.agents.explorers.length} explorer agents:\`);
  CONFIG.agents.explorers.forEach((agent, idx) => {
    console.log(\`  \${idx + 1}. \${agent.name}: \${agent.dateRange.from} → \${agent.dateRange.to}\`);
  });

  console.log('\\nPhase 2: Critical Analysis (SEQUENTIAL)');
  console.log('  - Sentiment analysis with ethical framework');
  console.log('  - Source verification and credibility assessment');
  console.log(\`  - Misinformation detection (level: \${CONFIG.validation.level})\`);

  console.log('\\nPhase 3: Synthesis (SEQUENTIAL)');
  console.log('  - Timeline construction');
  console.log('  - Trend identification');
  console.log('  - Critical findings extraction');

  console.log('\\nPhase 4: Visualization (SEQUENTIAL)');
  console.log('  - Interactive dashboard');
  console.log('  - Summary report');
  console.log('  - Critical analysis report');

  console.log('\\n' + '='.repeat(70));
  console.log('To execute this investigation with Claude Code:');
  console.log('='.repeat(70));
  console.log(\`
Tell Claude:

"Execute the multi-agent investigation for: ${config.investigation.topic}

Phase 1: Launch these ${config.agents.explorers.length} explorer agents IN PARALLEL:
${config.agents.explorers.map((a, i) => `  ${i + 1}. Task(subagent_type="Explore", prompt=agents/scout-${a.name}.md, description="${a.description}")`).join('\n')}

Then run Phases 2-4 sequentially using the analyzer, synthesizer, and visualizer agents."
  \`);
}

if (require.main === module) {
  main();
}

module.exports = { CONFIG };
`;

  fs.writeFileSync(
    path.join(root, 'orchestrator.js'),
    orchestratorContent
  );
  fs.chmodSync(path.join(root, 'orchestrator.js'), '755');
}

async function generateValidators(root, config) {
  const validatorContent = `# Source Validation & Misinformation Detection

## Validation Level: ${config.validation.level.toUpperCase()}

### Credible Sources (Prioritize)
${config.validation.credibleSources.map(s => `- ${s}`).join('\n')}

### Flagged Sources (Avoid)
${config.validation.flaggedSources.length > 0 ? config.validation.flaggedSources.map(s => `- ${s}`).join('\n') : 'None specified'}

### Validation Requirements
- Minimum sources per claim: ${config.validation.requirements.minimumSourcesPerClaim}
- Require primary sources: ${config.validation.requirements.requirePrimarySources ? 'YES' : 'NO'}
- Cross-reference controversial claims: ${config.validation.requirements.crossReferenceControversial ? 'YES' : 'NO'}
- Flag biased language: ${config.validation.requirements.flagBiasedLanguage ? 'YES' : 'NO'}
- Detect propaganda: ${config.validation.requirements.detectPropaganda ? 'YES' : 'NO'}

## Misinformation Red Flags

${config.validation.level !== 'standard' ? `
### Propaganda Techniques to Detect
1. **Loaded Language**: Emotionally charged words designed to manipulate
2. **Unsubstantiated Claims**: Assertions without evidence
3. **Appeals to Fear**: Using fear to bypass rational analysis
4. **Oversimplification**: Complex issues reduced to black/white
5. **Ad Hominem**: Attacking sources rather than addressing claims
6. **Cherry-Picking**: Selective presentation of favorable data
7. **False Dichotomy**: Presenting only two options when more exist

### Bias Indicators
- One-sided coverage of controversial topics
- Consistent framing favoring one narrative
- Omission of contradictory evidence
- Emotional language vs neutral reporting
- Lack of source attribution
- Conflation of opinion with fact
` : ''}

## Credibility Assessment Rubric

**VERIFIED (Trust High)**
- Major international news agencies (AP, Reuters, AFP)
- Peer-reviewed academic journals
- Official government statistics
- UN/EU institutional reports

**CREDIBLE (Trust Moderate)**
- Established newspapers with editorial standards
- Think tank research with methodology
- NGO reports from reputable organizations
- Expert analysis with credentials

**QUESTIONABLE (Verify Carefully)**
- Sources with known political bias
- Self-published content without peer review
- Anonymous sources without corroboration
- State-controlled media from authoritarian regimes
- Content farms and clickbait sites

## Cross-Referencing Protocol

For ${config.validation.requirements.minimumSourcesPerClaim}+ sources required:
1. Identify key claim
2. Search for ${config.validation.requirements.minimumSourcesPerClaim}+ independent sources
3. Compare factual consistency
4. Note discrepancies and contradictions
5. Flag claim if sources conflict
6. Prioritize primary sources

## Ethical Framework Integration

All validation must respect:
- **Positivistic**: Facts over opinion
- **Humanistic**: Human welfare prioritized
- **Democratic**: Transparency valued

**Automatic Negative Scoring** (regardless of framing):
${config.perspective.mandatoryNegatives.map(n => `- ${n}`).join('\n')}
`;

  fs.writeFileSync(
    path.join(root, 'validators/source-validation.md'),
    validatorContent
  );
}

async function generateREADME(root, config) {
  const readme = `# ${config.output.projectName}

**Multi-Agent Investigation**: ${config.investigation.topic}

## Overview

This project uses a multi-agent research pipeline to investigate "${config.investigation.topic}" from ${config.perspective.description} perspective.

### Investigation Purpose

**${config.investigation.purpose}**

This purpose guides all agents in their data collection, analysis, and synthesis. Each phase of the investigation is tailored to achieve this objective while maintaining ethical principles.

### Ethical Framework

All analysis adheres to **immutable principles**:

✓ **Positivistic**: Evidence-based, verifiable facts prioritized
✓ **Humanistic**: Human welfare and dignity are paramount
✓ **Democratic**: Transparency, accountability, and citizen empowerment

**Mandatory Negative Indicators** (ALWAYS scored negatively):
${config.perspective.mandatoryNegatives.map(n => `- ${n}`).join('\n')}

## Investigation Parameters

- **Topic**: ${config.investigation.topic}
- **Purpose**: ${config.investigation.purpose}
- **Type**: ${config.investigation.type}
- **Geographic Scope**: ${config.investigation.geographicScope}
- **Keywords**: ${config.investigation.keywords.join(', ')}
- **Perspective**: ${config.perspective.description}
- **Validation Level**: ${config.validation.level.toUpperCase()}

## Agent Architecture

### Phase 1: Data Collection (PARALLEL)
${config.agents.explorers.length} explorer agents collecting data from different time periods:

${config.agents.explorers.map((a, i) => `${i + 1}. **${a.name}**: ${a.dateRange.from} → ${a.dateRange.to}
   - ${a.description}
   - Target: ${a.targetArticles.ideal} sources`).join('\n\n')}

### Phase 2: Critical Analysis (SEQUENTIAL)
- Sentiment scoring using ethical framework
- Source credibility assessment
- Misinformation detection (${config.validation.level} level)
- Cross-reference verification

### Phase 3: Timeline Synthesis (SEQUENTIAL)
- Chronological timeline construction
- Trend identification
- Critical inflection points
- Theme evolution analysis

### Phase 4: Visualization (SEQUENTIAL)
- Interactive dashboard with charts
- Summary report (Markdown)
- Critical analysis report
- Source credibility assessment

## Project Structure

\`\`\`
${config.output.projectName}/
├── config/
│   ├── investigation.json       # Complete configuration
│   ├── topic.json               # Investigation parameters
│   └── sentiment-rules.json     # Ethical framework & scoring rules
├── agents/
${config.agents.explorers.map(a => `│   ├── scout-${a.name}.md`).join('\n')}
│   ├── analyzer.md              # (to be created)
│   ├── synthesizer.md           # (to be created)
│   └── visualizer.md            # (to be created)
├── data/
│   ├── raw/                     # Explorer agent outputs
${config.agents.explorers.map(a => `│   │   └── ${a.name}/`).join('\n')}
│   ├── analyzed/                # Analyzer outputs
│   ├── synthesized/             # Synthesizer outputs
│   └── visualizations/          # Final dashboard
├── validators/
│   └── source-validation.md     # Validation guidelines
├── orchestrator.js              # Execution coordinator
├── QUICKSTART.md                # Quick start guide
└── README.md                    # This file
\`\`\`

## Quick Start

### Option 1: Automated Execution
\`\`\`bash
node orchestrator.js
\`\`\`

Then tell Claude Code:
\`\`\`
Execute the multi-agent investigation in ${config.output.projectName}.
Run all ${config.agents.explorers.length} explorer agents in parallel, then analyzer, synthesizer, and visualizer sequentially.
\`\`\`

### Option 2: Manual Step-by-Step

**Phase 1: Explorers (run in parallel)**
\`\`\`
Launch ${config.agents.explorers.length} Task calls in a SINGLE message:
${config.agents.explorers.map((a, i) => `${i + 1}. Task(subagent_type="Explore", prompt="agents/scout-${a.name}.md", description="${a.description}")`).join('\n')}
\`\`\`

**Phase 2-4**: Run analyzer, synthesizer, visualizer sequentially.

## Validation & Misinformation Safeguards

**Level**: ${config.validation.level.toUpperCase()}

- Minimum ${config.validation.requirements.minimumSourcesPerClaim} sources per claim
- Primary source preference: ${config.validation.requirements.requirePrimarySources ? 'Required' : 'Optional'}
- Cross-reference controversial claims: ${config.validation.requirements.crossReferenceControversial ? 'YES' : 'NO'}
- Propaganda detection: ${config.validation.requirements.detectPropaganda ? 'ENABLED' : 'DISABLED'}

### Credible Sources (Prioritized)
${config.validation.credibleSources.slice(0, 10).map(s => `- ${s}`).join('\n')}

### Flagged Sources (Avoided)
${config.validation.flaggedSources.length > 0 ? config.validation.flaggedSources.map(s => `- ${s}`).join('\n') : '_None specified_'}

## Outputs

After execution, you will find:

- \`data/visualizations/dashboard.html\` - Interactive dashboard
- \`data/visualizations/summary.md\` - Comprehensive report
- \`data/analyzed/articles.jsonl\` - All analyzed sources with credibility scores
- \`data/synthesized/timeline.json\` - Complete timeline and trends

## Ethical Principles (Immutable)

These principles **cannot be overridden** regardless of context:

### Human Rights (Always Positive)
- Expansion of freedoms and rights
- Protection of vulnerable populations
- Access to education, healthcare, housing
- Environmental sustainability

### Violations (Always Negative)
- Human rights abuses
- Discrimination and persecution
- Authoritarianism and oppression
- Violence against civilians
- Corruption and abuse of power

### Prohibited Framings
The system will **never** present these positively:
${config.perspective.ethicalFramework.prohibitedPositiveFramings.map(p => `- ${p}`).join('\n')}

## License

This investigation adheres to positivistic, humanistic, and democratic principles.
Generated by Multi-Agent Investigator Template v1.0.0
`;

  fs.writeFileSync(path.join(root, 'README.md'), readme);
}

async function generateQuickStart(root, config) {
  const quickstart = `# Quick Start Guide

## ${config.investigation.topic}

**Purpose**: ${config.investigation.purpose}

### 1. Review Configuration

\`\`\`bash
cat config/investigation.json
cat config/sentiment-rules.json
\`\`\`

### 2. Run Orchestrator

\`\`\`bash
node orchestrator.js
\`\`\`

### 3. Execute with Claude Code

Tell Claude:

\`\`\`
Execute the multi-agent investigation for "${config.investigation.topic}".

Phase 1 (PARALLEL): Launch ${config.agents.explorers.length} explorer agents:
${config.agents.explorers.map((a, i) => `${i + 1}. scout-${a.name} (${a.dateRange.from} → ${a.dateRange.to})`).join('\n')}

Phase 2: Analyzer agent with ${config.validation.level} validation
Phase 3: Synthesizer agent
Phase 4: Visualizer agent

Use prompts from agents/*.md files.
\`\`\`

### 4. View Results

\`\`\`bash
open data/visualizations/dashboard.html
cat data/visualizations/summary.md
\`\`\`

## Validation Level: ${config.validation.level.toUpperCase()}

${config.validation.level !== 'standard' ? `
This investigation includes:
- ${config.validation.requirements.minimumSourcesPerClaim}+ source verification per claim
- ${config.validation.requirements.requirePrimarySources ? 'Primary source requirements' : 'Mixed source acceptance'}
- ${config.validation.requirements.detectPropaganda ? 'Propaganda detection enabled' : 'Basic bias detection'}
- Source credibility scoring
` : 'Standard validation with credible source prioritization.'}

## Expected Timeline

- Phase 1: ~5-10 minutes (parallel execution)
- Phase 2: ~10-15 minutes (analysis + validation)
- Phase 3: ~5-10 minutes (synthesis)
- Phase 4: ~5-10 minutes (visualization)

**Total**: ~25-45 minutes

## Troubleshooting

**Issue**: Not enough sources found
- Broaden keywords in config/topic.json
- Expand date ranges
- Try different search terms

**Issue**: Validation too strict
- Lower validation level in config
- Add more credible sources to whitelist

**Issue**: Misinformation flags everywhere
- Review validators/source-validation.md
- Check if sources are genuinely questionable
- Adjust detection sensitivity if needed

## Next Steps

After completion:
1. Review dashboard for key insights
2. Check data/analyzed/ for credibility flags
3. Read summary.md for comprehensive analysis
4. Share findings (dashboard.html is self-contained)
`;

  fs.writeFileSync(path.join(root, 'QUICKSTART.md'), quickstart);
}

// Run wizard
runWizard().catch(console.error);
