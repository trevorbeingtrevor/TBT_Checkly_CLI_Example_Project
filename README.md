# Checkly Monitoring-as-code: Advanced Project

This example project shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow. It was generated using the `npm checkly create`command and selecting the `An advanced TypeScript project with multiple examples and best practices (recommended)` option for the template. The file `./src/__checks__/check-from-dashboard.check.ts` has been added to demonstrate how to bring in previous projects from the dashboard and implement email alerts.

We are using the https://checklyhq.com website as a monitoring target.

1. Write API Checks and Playwright-powered Browser Checks.
2. Add Alert Channels, and dry-run your Checks on 20+ global locations.
3. Test -> Deploy: now you have your app monitored around the clock. All from your code base.

## Project Structure

This project has examples of all Checkly check types and showcases some advanced features. It also adds a GitHub Actions workflow.

- Running `npx checkly test` will look for `.check.ts` files and `.spec.ts` in `__checks__` directories and execute them in a dry run.

- Running `npx checkly deploy` will deploy your checks to Checkly, attach alert channels, and run them on a 10m schedule in the 
region `us-east-1` and `eu-west-1`

- An example GitHub Actions workflow is in the `.github/workflow.yml` file. It triggers all the checks in the project and deploys
them if they pass.

## CLI Commands

Run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

## Adding and running `@playwright/test`

You can add `@playwright/test` to this project to get full code completion and run `.spec.ts` files for local debugging.
It's best to install the Playwright npm package version that matches your [Checkly runtime](https://www.checklyhq.com/docs/cli/npm-packages/).

```bash
npm install --save-dev @playwright/test@1.38.1
```

## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or 
join our [Slack community](https://checklyhq.com/slack).
