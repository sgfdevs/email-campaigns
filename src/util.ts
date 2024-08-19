export function _throw(msg: string): never {
    throw msg;
}

export function parseNumber(str?: string | null): number | undefined {
    const parsed = Number(str);

    return !isNaN(parsed) ? parsed : undefined;
}
