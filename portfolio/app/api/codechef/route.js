export async function GET() {
  const USERNAME = 'adii_06';
  try {
    const res = await fetch(`https://www.codechef.com/users/${USERNAME}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html',
      },
      next: { revalidate: 3600 },
    });

    const html = await res.text();

    // Extract rating from the page
    const ratingMatch = html.match(/"currentRating"\s*:\s*(\d+)/);
    const maxRatingMatch = html.match(/"highestRating"\s*:\s*(\d+)/);
    const starsMatch = html.match(/(\d)\s*★/);

    // Extract rating history JSON embedded in the page
    const ratingDataMatch = html.match(/var\s+all_rating\s*=\s*(\[.*?\]);/s)
      || html.match(/"ratingData"\s*:\s*(\[.*?\])/s);

    let contests = [];
    if (ratingDataMatch) {
      try {
        const raw = JSON.parse(ratingDataMatch[1]);
        contests = raw.slice(-6).map(c => ({
          name:      c.name || c.code || 'Contest',
          rank:      c.rank || c.global_rank || 0,
          oldRating: c.rating - (c.diff || 0),
          newRating: c.rating || c.new_rating || 0,
          change:    c.diff || 0,
        }));
      } catch { /* ignore parse errors */ }
    }

    const currentRating = ratingMatch ? parseInt(ratingMatch[1]) : null;
    const maxRating     = maxRatingMatch ? parseInt(maxRatingMatch[1]) : null;
    const stars         = starsMatch ? parseInt(starsMatch[1]) : 3;

    return Response.json({
      username:      USERNAME,
      currentRating: currentRating ?? 1750,
      maxRating:     maxRating ?? 1750,
      stars,
      contests,
    });
  } catch (e) {
    return Response.json({ error: 'Failed to fetch CodeChef data' }, { status: 500 });
  }
}
