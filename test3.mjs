
function add(x) {
    let i = x


    return function(y) {
        return i + y
    }
}

const addOne = add(1);
const addTwo = add(2);

