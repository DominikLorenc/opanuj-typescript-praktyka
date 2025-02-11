import { type FeatureFlags } from './legacy-flags.ts';

type FlagsV2<T> = {
  [Props in keyof T as Props extends `${infer Start}V2${infer End}` ? `${Start}${End}` : never]: T[Props];
};
export type ModernFeatureFlags = FlagsV2<FeatureFlags>;



export function getFeatureFlagsV2(flags: FeatureFlags): ModernFeatureFlags {
  const flagsV2: ModernFeatureFlags = {} as ModernFeatureFlags;

  for (const key in flags) {
    const match = key.match(/^(.*)V2(.*)$/);
    if (match) {
      const newKey = `${match[1]}${match[2]}` as keyof ModernFeatureFlags;
      flagsV2[newKey] = flags[key as keyof FeatureFlags];
    }
  }

  return flagsV2;
}