export declare const DEFAULT_SHARD_COUNT = 16;
export declare const add: import("convex/server").RegisteredMutation<"public", {
    shard?: number | undefined;
    shards?: number | undefined;
    count: number;
    name: string;
}, Promise<number>>;
export declare const count: import("convex/server").RegisteredQuery<"public", {
    name: string;
}, Promise<number>>;
export declare const rebalance: import("convex/server").RegisteredMutation<"public", {
    shards?: number | undefined;
    name: string;
}, Promise<void>>;
export declare const reset: import("convex/server").RegisteredMutation<"public", {
    name: string;
}, Promise<void>>;
export declare const estimateCount: import("convex/server").RegisteredQuery<"public", {
    shards?: number | undefined;
    readFromShards?: number | undefined;
    name: string;
}, Promise<number>>;
export declare const list: import("convex/server").RegisteredQuery<"public", {
    limit?: number | undefined;
    cursor: string | null;
}, Promise<import("convex/server").PaginationResult<{
    _id: import("convex/values").GenericId<"counters">;
    _creationTime: number;
    name: string;
    shard: number;
    value: number;
}>>>;
export declare const updateNamesBatch: import("convex/server").RegisteredMutation<"public", {
    updates: {
        id: import("convex/values").GenericId<"counters">;
        newName: string;
    }[];
}, Promise<void>>;
//# sourceMappingURL=public.d.ts.map