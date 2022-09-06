import type { CommitRaw } from "./types/CommitRaw";

/**
 * 커밋 사전 생성
 *
 * @param {CommitRaw[]} commits
 * @returns {Map<string, CommitRaw>}
 */
export const buildCommitDictionary = (commits: CommitRaw[]) =>
  commits.reduce(
    (dict, commit) => dict.set(commit.id, commit),
    new Map<string, CommitRaw>()
  );

export default {};
