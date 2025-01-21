def test_py(a):
    if a >= 1:
        return a * test_py(a - 1)
    else:
        return 1
