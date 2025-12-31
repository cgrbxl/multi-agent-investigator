List all configured investigation projects.

Find all directories that contain investigation configurations:

```bash
find . -maxdepth 2 -name "investigation.json" -exec dirname {} \;
```

For each project found, display:
- Project name
- Investigation topic
- Number of time periods
- Date range
- Perspective
- Validation level
- Status (configured/in-progress/completed)

Show project details by reading config/investigation.json from each directory.
