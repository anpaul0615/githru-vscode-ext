import { buildCommitDictionary } from "./util";
import type { CommitRaw } from "./types/CommitRaw";

describe("util", () => {
  describe("buildCommitDictionary", () => {
    const commits = [
      { id: "1", message: "111" },
      { id: "2", message: "222" },
      { id: "3", message: "333" },
    ] as unknown as CommitRaw[];

    it("should return commit-dictionary", () => {
      const commitDict = buildCommitDictionary(commits);

      expect(commitDict).toBeInstanceOf(Map);

      expect(commitDict.get("1")).toEqual({ id: "1", message: "111" });
      expect(commitDict.get("2")).toEqual({ id: "2", message: "222" });
      expect(commitDict.get("3")).toEqual({ id: "3", message: "333" });

      expect(commitDict.get("4")).toBe(undefined);
    });
  });
});
