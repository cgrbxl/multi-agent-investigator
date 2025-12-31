Run the interactive configuration wizard to set up a new investigation.

Execute:
```bash
node config-wizard.js
```

The wizard will ask you:
1. What topic to investigate
2. Current news or historical investigation
3. Keywords to search
4. Geographic scope
5. Number of time periods (agents)
6. Analysis perspective
7. Validation rigor level
8. Sources to flag
9. Project name

After completion, a complete investigation project will be generated with:
- Configuration files
- Agent prompts
- Data directories
- Orchestrator script
- Documentation

Navigate to the generated project and review config/investigation.json before executing.
