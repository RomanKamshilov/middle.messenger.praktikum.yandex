# Проектная работа первого спринта
Макет: https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=1%3A616&t=hL7liuwfgHCsErgc-0https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=1%3A616&t=hL7liuwfgHCsErgc-0  
Деплой проекта на Netlify: https://messenger-kamsh.netlify.app/  
Pull-requests: https://github.com/RomanKamshilov/middle.messenger.praktikum.yandex/pull/2


  
## Скрипты:  
`npm run dev` - локальная сборка для отслеживания на дев-сервере. Проект доступен по адресу: http://localhost:1234  
`npm run build` - сборка проекта в папку dist.  
`npm run start` - сборка проекта в папку dist и запуск сервера express js. Проект доступен по адресу: http://localhost:3000
  
## Навигация по сайту представлена на главной странице с роутом `/`.

## Доступные роуты:  
`/sign-in` - Страница авторизации  
`/sign-up` - Страница регистрации  
`/userSettings` - Страница профиля  

``Примечание: чтобы увидеть локально страницу изменения информации о пользователе, то Вам необходимо перейти в файл src/pages/userSettings/index.js. Далее, необходимо в 159ой строке поставить значение false, в 162ой поставить true, в 164ой оставить false.  
Если Вы хотетие увидеть страницу изменения пароля, то в этом же файле измените в 159ой строке на false, в 162ой строке на false, в 164ой строке на true. ``

`/chat` - Страница списка чатов и переписки  

``Примечание: если запустить проект локально и изменить файл src/pages/chat/mainSection/index.js, закомментировав 7-ю строку, то Вы сможете увидеть заглушку, которая будет, когда ни один чат не выбран``  

`/404` - Страница ошибки 4**  
`/500` - страница ошибки 5**
