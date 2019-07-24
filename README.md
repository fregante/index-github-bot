# github-index-bot

App/bot that creates new issues in my [repository index](https://github.com/fregante/index) every time I create a repo.

## Setup

1. Register a [GitHub Integration](https://github.com/settings/integrations)
    _This will call your deployed app every time some repo is created._
1. Generate a [personal access token](https://github.com/settings/tokens)
1. Deploy via [`now`](https://github.com/zeit/now-cli) specifying your token
    ```sh
    now --env GITHUB_USERNAME=yourname --env GITHUB_TOKEN=202394304...
    ```
1. Visit your [GitHub Integration](https://github.com/settings/integrations)
    1. Select `Repository` in the Webhook events
    2. Add your now URL to `Webhook URL`
1. _Go forth and create repos!_
