function test(a) {
    if (a <= 1) {
        return a;
    }
    return a * test(a - 1);
}
