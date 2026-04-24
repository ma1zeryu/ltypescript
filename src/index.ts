interface Singable {
  sing(): void;
}

class Person implements Singable {
  name = "yxc";
  sing(): void {
    console.log("找工作呀找工作");
  }
}

const person = new Person();
console.log(person.name);
