export async function GET() {
  const USERNAME = 'Adiejais2006';
  try {
    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${USERNAME}`, {
        headers: { 'Accept': 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }),
      fetch(`https://api.github.com/users/${USERNAME}/repos?per_page=100&sort=updated`, {
        headers: { 'Accept': 'application/vnd.github+json' },
        next: { revalidate: 3600 },
      }),
    ]);

    const profile = await profileRes.json();
    const repos   = await reposRes.json();

    // Count languages
    const langCount = {};
    for (const r of repos) {
      if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
    }
    const topLangs = Object.entries(langCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([lang, count]) => ({ lang, count }));

    const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);

    return Response.json({
      name:        profile.name || USERNAME,
      avatar:      profile.avatar_url,
      followers:   profile.followers,
      following:   profile.following,
      publicRepos: profile.public_repos,
      totalStars,
      topLangs,
    });
  } catch {
    return Response.json({ error: 'Failed to fetch GitHub stats' }, { status: 500 });
  }
}
