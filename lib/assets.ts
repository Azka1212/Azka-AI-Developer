// src/lib/asset.ts
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (p: string) => `${BASE}${p.startsWith("/") ? p : `/${p}`}`;
