function fibonacci(num) {
    if (num <= 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }
    var a = 1, b = 0, temp;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    return b;
}
