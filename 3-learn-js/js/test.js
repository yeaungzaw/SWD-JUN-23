const obj = {
    a: "aaa",
    // b: function() {
    //     return "this is b " + this.c;
    // },
    b() {
        return "this is b " + this.c;
    },
    c: "ccc"
}

// console.log(obj.a);
// console.log(obj.b());

const mySelf = {
    name: "ye aung zaw",
    age: 21,
    skills: ["HTML5", "CSS3", "JS", "Bootstrap", "Tailwind", "React", "Figma"],
    teach(x) {
        return "I can teach " + x;
    }
}

console.log(mySelf.name);
console.log(mySelf.teach("web development"));