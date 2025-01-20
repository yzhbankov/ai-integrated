def test_py(a):
    if a <= 1:
        return a
    else:
        return a * test_py(a - 1)

