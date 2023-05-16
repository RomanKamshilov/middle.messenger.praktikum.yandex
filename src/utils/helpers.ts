type Indexed<T = unknown> = {
    [key in string]: T;
};

export function set<T extends Indexed | unknown>(object: T, path: string, value: unknown): T {
    if (typeof object !== "object" || object === null) {
        return object;
    }

    const parts = path.split(".");
    let current: Indexed | unknown = object;

    for (let i = 0; i < parts.length - 1; i++) {
        const part = parts[i];
        if (typeof current !== "object" || current === null) {
            current = {};
        } else if (!(part in current)) {
            (current as Indexed)[part] = {};
        }
        current = (current as Indexed)[part];
    }

    (current as Indexed)[parts[parts.length - 1]] = value;

    return object;
}

export function merge(lhs: Indexed, rhs: Indexed): Indexed {
    const result: Indexed = {};
    const keys = new Set(Object.keys(lhs).concat(Object.keys(rhs)));

    for (const key of keys) {
        const lhsValue = lhs[key];
        const rhsValue = rhs[key];

        if (typeof lhsValue === "object" && typeof rhsValue === "object" && lhsValue !== null && rhsValue !== null) {
            result[key] = merge(lhsValue as Indexed, rhsValue as Indexed);
        } else if (rhsValue !== undefined) {
            result[key] = rhsValue;
        } else {
            result[key] = lhsValue;
        }
    }

    return result;
}

export function trim(string: string, chars?: string): string {
    if (string && !chars) {
        return string.trim();
    }


    const reg = new RegExp(`[${chars}]`, "gi");
    return string.replace(reg, "");
}

export function isEqual(a: object, b: object): boolean {
    if (typeof a !== "object" || a === null || typeof b !== "object" || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (const key of keysA) {
        if (!keysB.includes(key)) {
            return false;
        }

        const valueA = (a as never)[key];
        const valueB = (b as never)[key];

        if (typeof valueA === "object" && typeof valueB === "object") {
            if (!isEqual(valueA, valueB)) {
                return false;
            }
        } else if (valueA !== valueB) {
            return false;
        }
    }

    return true;
}
