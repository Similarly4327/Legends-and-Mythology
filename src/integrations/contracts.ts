/** Future adapters live outside presentation components. No account data is stored yet. */
export interface UserProgress {
  creatureId: string;
  chapterId: string;
  stepId: string;
  completed: boolean;
  updatedAt: string;
}

export interface ReaderPreferences {
  textSize: 'standard' | 'large';
  motion: 'system' | 'reduced';
}

export interface Entitlements {
  packageIds: readonly string[];
  creatureIds: readonly string[];
  blackBookUnlocked: boolean;
}

export interface ProgressAdapter {
  getProgress(creatureId: string): Promise<UserProgress | null>;
  saveProgress(progress: UserProgress): Promise<void>;
  getFavorites(): Promise<readonly string[]>;
  setFavorite(creatureId: string, favorite: boolean): Promise<void>;
}

export interface EntitlementAdapter {
  getEntitlements(): Promise<Entitlements>;
}

export interface IdentityAdapter {
  getCurrentUser(): Promise<{ id: string; parentProfileId?: string } | null>;
}
