# github-index-bot

App/bot that creates new issues in my [repository index](https://github.com/bfred-it/index) every time I create a repo.

## Notice

This repo has my user hard coded at the moment. https://github.com/bfred-it/index-github-bot/issues/1

## Setup

1. Register a [GitHub Integration](https://github.com/settings/integrations).
    _This will call your deployed app every time some repo is created._
2. Generate a [personal access token](https://github.com/settings/tokens).  
    _Needed because I don't want to mess with GH Integrations' OAuth right now._
3. Create a `.env` file and add your access token as `GITHUB_TOKEN=202394304...`
4. Deploy via [`now --dotenv`](https://github.com/zeit/now-cli)  
5. Visit your [GitHub Integration](https://github.com/settings/integrations)
    1. Select `Repository` in the Webhook events
    2. Add your now URL to `Webhook URL`
6. _Go forth and create repos!_
