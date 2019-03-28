https://repl.it/@andryshan/Messenger

// Контейнер для сообщений
var chatContainer = document.querySelector('.chat-content');

// Форма и поле ввода текста
var newMessageForm = document.querySelector('.chat-form');
var newMessageInput = newMessageForm.querySelector('.chat-form-input');

// Шаблон для сообщения
var messageTemplate = document.querySelector('#message-template').content;
var newMessageTemplate = messageTemplate.querySelector('.chat-message');

var addRemoveHandler = function(button, element){
  button.addEventListener('click', function(){
    element.remove();
  });
}

// Создание нового сообщения
newMessageForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  
  // Получаем текст из поля ввода
  var messageText = newMessageInput.value;
  // Клонируем шаблон сообщения
  var newMessage = newMessageTemplate.cloneNode(true);
  var messageDescription = newMessage.querySelector('.chat-message-text');
  messageDescription.textContent = messageText;
  // Находим кнопку
  var buttonRemove = newMessage.querySelector('.chat-message-button');
  
  addRemoveHandler(buttonRemove, newMessage);
  
  // Добавляем сообщение на страницу
  chatContainer.appendChild(newMessage);
  // Чистим содержимое поля ввода
  newMessageInput.value = '';
});

/* Техническое задание

Мяу! Нужно доработать мессенджер. Как должна работать программа:

- Шаблон сообщения находится в теге template с идентификатором message-template.
- В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.
- Новое сообщение добавляется в конец контейнера с классом chat-content.
- Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить».
- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.

*/
