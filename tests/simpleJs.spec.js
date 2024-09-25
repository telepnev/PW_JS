import { test, expect } from '@playwright/test';
import { reverse } from 'dns';

test.skip('test1', async ({ page }) => {

    await page.goto('https://anna.vkd.lab/');
    
  });

  test.skip('login to VKD', async ({ page }) => {
    test.setTimeout(120000)

    await page.goto('https://anna.vkd.lab/');
    await page.getByRole('id', { name: 'username' }).click();
    await page.getByRole('id', { name: 'username' }).fill('Afonya4');
    await page.getByRole('id', { name: 'password' }).click();
    await page.getByRole('id', { name: 'password' }).fill('ms4isvVgMrvR2');
    await page.getByRole('button', { name: 'Вход' }).click();
   
    await page1.goto('https://sms.sec.lab/show?pass=qazxcvfrew');
    await page1.getByRole('link', { name: 'Показать детали' }).click();
    await page1.getByRole('link', { name: 'перейти на сайт' }).click();
    await page1.getByText('text: Your verification code: 078199. Please do not disclose this code to').click();
  });


  // -----------------------------------------------------------

  test.skip('Lessons', async ({ page }) => {
    const name = 'Hexlet';
    const index = 2;

    const getLetter = (name, index) => {

      const resultText = name[index];
      return console.log(resultText);
    };

    getLetter(name, index);

  });