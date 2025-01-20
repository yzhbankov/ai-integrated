function test_func(a) {
    if (a <= 1) {
        return a
    }
    return b * test_func(a - 1);
}
