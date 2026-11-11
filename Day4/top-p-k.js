
import { ask, sleep } from "./helpers.js";

const prompt = "Complete the sentence with one word: The weather today is very";

const settings = [
  { label: "topK=1 (sabse likely hi)", topK: 1 },
  { label: "topK=40", topK: 40 },
  { label: "topP=0.1 (bahut tight)", topP: 0.1 },
  { label: "topP=0.95 (wide)", topP: 0.95 },
];

for (const { label, ...cfg } of settings) {
  console.log(`\n=== ${label} ===`);
  for (let i = 1; i <= 3; i++) {
    try {
      const res = await ask(prompt, { temperature: 1, ...cfg });
      console.log(`Run ${i}: ${res.text?.trim()}`);
    } catch (err) {
      console.log(`Run ${i}: ERROR -> ${err.message}`);
    }
    await sleep(1000);
  }
}


// Output:

// === topK=1 (sabse likely hi) ===
// Run 1: nice
// Run 2: nice.
// Run 3: nice.

// === topK=40 ===
// Run 1: nice.
// Run 2: nice.
// Run 3: nice.

// === topP=0.1 (bahut tight) ===
// Run 1: ERROR -> {"error":{"code":429,"message":"You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://aistudio.google.com/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. \n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit:5, model: gemini-3.6-flash, description: Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.\nPlease retry in 58.190057231s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://aistudio.google.com/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"description":"Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.","quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"model":"gemini-3.6-flash","location":"global"},"quotaValue":"5"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"58s"}]}}
// Run 2: ERROR -> {"error":{"code":429,"message":"You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://aistudio.google.com/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. \n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit:5, model: gemini-3.6-flash, description: Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.\nPlease retry in 56.801244575s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://aistudio.google.com/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"description":"Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.","quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-3.6-flash"},"quotaValue":"5"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"56s"}]}}
// Run 3: nice.

// === topP=0.95 (wide) ===
// Run 1: ERROR -> {"error":{"code":429,"message":"You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://aistudio.google.com/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. \n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit:5, model: gemini-3.6-flash, description: Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.\nPlease retry in 51.445455189s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://aistudio.google.com/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"description":"Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.","quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"model":"gemini-3.6-flash","location":"global"},"quotaValue":"5"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"51s"}]}}
// Run 2: ERROR -> {"error":{"code":429,"message":"You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://aistudio.google.com/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. \n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit:5, model: gemini-3.6-flash, description: Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.\nPlease retry in 50.062557095s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://aistudio.google.com/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"description":"Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.","quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"model":"gemini-3.6-flash","location":"global"},"quotaValue":"5"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"50s"}]}}
// Run 3: ERROR -> {"error":{"code":429,"message":"You exceeded your current quota, please check your plan and billing details. For more information on this error, head to: https://aistudio.google.com/docs/rate-limits. To monitor your current usage, head to: https://ai.dev/rate-limit. \n* Quota exceeded for metric: generativelanguage.googleapis.com/generate_content_free_tier_requests, limit:5, model: gemini-3.6-flash, description: Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.\nPlease retry in 48.65916276s.","status":"RESOURCE_EXHAUSTED","details":[{"@type":"type.googleapis.com/google.rpc.Help","links":[{"description":"Learn more about Gemini API quotas","url":"https://aistudio.google.com/docs/rate-limits"}]},{"@type":"type.googleapis.com/google.rpc.QuotaFailure","violations":[{"description":"Generate content requests per minute limit exceeded on Free Tier. See https://aistudio.google.com/docs/rate-limits.","quotaMetric":"generativelanguage.googleapis.com/generate_content_free_tier_requests","quotaId":"GenerateRequestsPerMinutePerProjectPerModel-FreeTier","quotaDimensions":{"location":"global","model":"gemini-3.6-flash"},"quotaValue":"5"}]},{"@type":"type.googleapis.com/google.rpc.RetryInfo","retryDelay":"48s"}]}}
                   