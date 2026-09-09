
/**
 * AUTO-GENERATED MOCK FIX
 * This file demonstrates a synchronization lock for token refresh.
 */
export class MockAuthService {
  private static isRefreshing = false;
  private static refreshPromise: Promise<string> | null = null;

  static async refreshSession(): Promise<string> {
    if (this.isRefreshing) {
      console.log('[Mock] Using in-flight refresh promise');
      return this.refreshPromise!;
    }

    console.log('[Mock] Starting new refresh cycle');
    this.isRefreshing = true;
    this.refreshPromise = new Promise((resolve) => {
      setTimeout(() => {
        this.isRefreshing = false;
        resolve('new-mock-token-' + Date.now());
      }, 1000);
    });

    return this.refreshPromise;
  }
}
