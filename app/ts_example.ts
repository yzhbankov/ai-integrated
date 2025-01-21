function ts_example(a: number): number {
    if (a <= 1) {
        return a;
    }
    const memo = new Map<number, number>();
    function fibonacci(n: number): number {
        if (memo.has(n)) {
            return memo.get(n);
        }
        const result = n * fibonacci(n - 1);
        memo.set(n, result);
        return result;
    }
    return fibonacci(a);
}
