const user = {
    name: "",
    number: "",
    email: "",
};
const btnElement = document.querySelector(".textarea5");
const inputName = document.querySelector(".textarea2");
const inputNumber = document.querySelector(".textarea3");
const inputEmail = document.querySelector(".textarea4");

// Отримуємо посилання на всі текстові області з атрибутом name="story"
var textareas = document.querySelectorAll('[name="story"]');
// Проходимося по кожному елементу з колекції
textareas.forEach(textarea => {
    textarea.style.textAlign = 'center';
  // Зберігаємо початковий плейсхолдер для поточної текстової області
    var originalPlaceholder = textarea.placeholder;

  // Додаємо обробник події для наведення миші
    textarea.addEventListener('click', function(event) {
    // Очищаємо значення текстової області
    textarea.value = '';
    });
});



btnElement.addEventListener('click', function(){
    user.name = inputName.value;
    user.number = inputNumber.value;
    user.email = inputEmail.value;
    console.log(user);
    confirm("Ви хочете відправити повідомлення?")
})

