const {json} = require('micro');
const github = require('gh-got');
const stripIndent = require('common-tags/lib/stripIndent');

module.exports = async req => {
	const {action, repository: repo} = await json(req);
	if (action === 'created' && !repo.fork && !repo.private) {
		return await github.post(`repos/${process.env.GITHUB_USERNAME}/index/issues`, {
			body: {
				title: `Add ${repo.name}`,
				body: stripIndent`
				\`\`\`md
				[${repo.name}](${repo.html_url}) - ${repo.description || ''}
				\`\`\`

				[Edit readme](../edit/master/README.md)
				`
			}
		}).then(() => 'OK', error => {
			throw error.response.body
		});
	}
	return 'meh';
}
