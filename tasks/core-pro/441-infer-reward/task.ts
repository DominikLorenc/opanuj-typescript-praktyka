
export type RewardRadar<T extends string> = T extends `${string}⚡️[${infer Reward}]⚡️${string}`
    ? Reward : null;
