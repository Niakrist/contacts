type User = {
  name: string;
  age: number;
  group: string;
};

type Admin = {
  name: string;
  age: number;
  role: string;
};

type Person = User | Admin;

const persons: Person[] = [
  {
    name: "Иван Петров",
    age: 27,
    group: "SEO-специалист",
  },
  {
    name: "Марат Aляуддинов",
    age: 20,
    group: "Музыкант",
  },
  {
    name: "Вася Пупкин",
    age: 35,
    group: "Строитель",
  },
  {
    name: "Игорь Иванович",
    age: 60,
    group: "Почтальон",
  },
  {
    name: "Павлик Морозов",
    age: 12,
    group: "Школьник",
  },
  {
    name: "Admin Admin",
    age: 30,
    role: "Admin",
  },
];

const logPerson = (person: Person): void => {
  if ("role" in person) {
    console.log(`${person.name}, ${person.age}, ${person.role}`);
  } else {
    console.log(`${person.name}, ${person.age}, ${person.group}`);
  }
};

persons.forEach(logPerson);
