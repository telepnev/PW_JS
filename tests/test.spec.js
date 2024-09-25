import { test, expect } from '@playwright/test';
import { reverse } from 'dns';
/*
test('test', async ({ page }) => {
  const name = 'telepnev2';
  const email = 'telepnev21@ya.ru';
  const password = '12345678';

  await page.goto('https://realworld.qa.guru/#/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByPlaceholder('Your Name').click();
  await page.getByPlaceholder('Your Name').fill(name);
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign up' }).click();
 // await expect(page.getByRole('img', { name: name })).toBeVisible();
  await expect(page.getByText(name)).toBeVisible();
  await expect(page.getByRole('navigation')).toContainText(name);
});


test('test', async ({ page }) => {
const name = 'arya231312312312';
const capitalize = (text) => `${text[0].toUpperCase()}${text.slice(1)}`;
//const capitalize =(str) => str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
console.log(capitalize(name));

const isPensioner = (age) => age >= 60;
console.log(isPensioner(23));

const isInternationalPhone =(str)=> str[0] === '+';
console.log(isInternationalPhone('+3243242342342'));

const isLeapYear = (year) => year % 400 === 0 ||  (year % 4 === 0 && year % 100 !== 0); 
*/


// Полиндром ......................

test.skip('test', async ({ page }) => {

  const reverse = (s) => s.split('').reverse().join('');
  let text = 'ana0';

  const isPalindrome = (word) => {
    const lowerWord = word.toLowerCase();
    return lowerWord === reverse(lowerWord);
  };
  
  const isNotPalindrome = (word) => !isPalindrome(word);

  console.log(isPalindrome(text));
  console.log(isNotPalindrome(text));
});

test.skip('test1', async ({ page }) => {

  // ПОЛИНДРОМ
 // const reverse = (s) => s.split('').reverse().join('');
 // split('') - разбивает строку на символы
 // join('') - соединяет символы в строку
 // reverse() - переворачивает строку задом на перед
 // slice() - беред символы по идексам

  const reverse = (s) => s.split('');
  const reverse1 = (s) => s.split('').reverse();
  const reverse2 = (s) => s.split('').reverse().join('');
  let text = 'ana0';

  console.log(reverse(text));
  console.log(reverse1(text));
  console.log(reverse2(text));
  
});

test.skip('test11234', async ({ page }) => {

  const name = 'Hexlet';

  const getLetter = (text, position) => text[position - 1] || '';

  console.log(getLetter(name, 13));

  
});

test.skip('1123454', async ({ page }) => {

  const name = 'Hexlet';

  const getLetter = (text, position) => text[position - 1];

  console.log(getLetter(name, 1));

  const arr = [1,2,2,3]

  console.log(arr[10]);
});

test.only('Примеры с  массивами и обьектами', async ({ page }) => {

  // Простая версия
let musicianSoft = {
  name: "Вячеслав",
  surmame: "Бутусов",
  year: 1961,
  genre: "Рок",
  group: "Наутилус-Помпилиус",
  "available for booking": false,
};
// Смотрим содержимое объекта
console.log(musicianSoft);

// Обращаемся к свойствам объекта
console.log(musicianSoft.name);
console.log(musicianSoft["available for booking"]);

// Сложная версия
let musicianHard = {
  name: "Вячеслав",
  surmame: "Бутусов",
  year: 1961,
  genre: "Рок",
  group: "Наутилус-Помпилиус",
  "available for booking": false,
  "all is ok": () => {
    console.log("У вас все получится!");
  },
  getText: () => {
    console.log("И у меня все получится!");
  },
  getAlbums: () => {
    const albums = ["Атлантида", "Крылья", "Титаник"];
    return albums;
  },
};
// Смотрим содержимое объекта
console.log(musicianHard);

// Обращаемся к свойствам объекта. Вызываем методы, дергаем методы
musicianHard["all is ok"];
musicianHard.getText();

// Если обратиться к свойству, которого не существует получим undefined
console.log(musicianHard.something);

// Получим массив
console.log(musicianHard.getAlbums());

// Выведем длинну массива
console.log(musicianHard.getAlbums().length);

// Выведем третий элемент массива 
console.log(musicianHard.getAlbums()[2]);

// Правильно копируем объекты
let trueCopy = structuredClone(musicianSoft);
console.log(trueCopy);
});


