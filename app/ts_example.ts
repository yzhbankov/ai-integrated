function ts_example(a) {
    if (a <= 1) {
        return a
    }
    return c * ts_example(a - 1)
}
