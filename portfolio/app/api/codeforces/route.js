export async function GET() {
  const HANDLE = 'aditya.jaiswal04';
  try {
    const res = await fetch(
      `https://codeforces.com/api/user.rating?handle=${HANDLE}`,
      { next: { revalidate: 3600 } }
    );
    const json = await res.json();
    if (json.status !== 'OK') throw new Error('CF API error');

    const contests = json.result.slice(-6).map(c => ({
      name:      c.contestName,
      rank:      c.rank,
      oldRating: c.oldRating,
      newRating: c.newRating,
      change:    c.newRating - c.oldRating,
    }));

    const latest = json.result[json.result.length - 1];
    return Response.json({
      currentRating: latest.newRating,
      maxRating:     Math.max(...json.result.map(c => c.newRating)),
      contests,
    });
  } catch {
    return Response.json({ error: 'Failed to fetch Codeforces data' }, { status: 500 });
  }
}
