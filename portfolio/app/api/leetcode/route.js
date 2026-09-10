const LEETCODE_GQL = 'https://leetcode.com/graphql';

const QUERY = `
  query getUserProfile($username: String!) {
    allQuestionsCount { difficulty count }
    matchedUser(username: $username) {
      profile { ranking }
      submitStats {
        acSubmissionNum { difficulty count }
      }
    }
  }
`;

export async function GET() {
  try {
    const res = await fetch(LEETCODE_GQL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Referer': 'https://leetcode.com',
      },
      body: JSON.stringify({
        query: QUERY,
        variables: { username: 'Adiejaiss2006' },
      }),
      next: { revalidate: 3600 },
    });

    const json = await res.json();
    const { allQuestionsCount, matchedUser } = json.data;

    const total   = allQuestionsCount.find(q => q.difficulty === 'All')?.count    ?? 0;
    const easy    = allQuestionsCount.find(q => q.difficulty === 'Easy')?.count   ?? 0;
    const medium  = allQuestionsCount.find(q => q.difficulty === 'Medium')?.count ?? 0;
    const hard    = allQuestionsCount.find(q => q.difficulty === 'Hard')?.count   ?? 0;

    const ac = matchedUser.submitStats.acSubmissionNum;
    const solved       = ac.find(q => q.difficulty === 'All')?.count    ?? 0;
    const easySolved   = ac.find(q => q.difficulty === 'Easy')?.count   ?? 0;
    const mediumSolved = ac.find(q => q.difficulty === 'Medium')?.count ?? 0;
    const hardSolved   = ac.find(q => q.difficulty === 'Hard')?.count   ?? 0;

    return Response.json({
      totalSolved: solved,
      totalQuestions: total,
      easySolved, totalEasy: easy,
      mediumSolved, totalMedium: medium,
      hardSolved, totalHard: hard,
      ranking: matchedUser.profile.ranking,
    });
  } catch (e) {
    return Response.json({ error: 'Failed to fetch LeetCode stats' }, { status: 500 });
  }
}
