function Thing() {

}

function add(one, two) {
    return one + two;
}

class Stuff {
    constructor() {

    }

    add(one, two) {
        return one + two;
    }
}

(function() {
    let t = Thing();
    let a = add(1, 2);
    let s = new Stuff();
    s.add(3, 4);
})();