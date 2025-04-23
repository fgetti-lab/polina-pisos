document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Здесь можно добавить код для отправки данных на сервер
    console.log('Имя:', name);
    console.log('Email:', email);
    console.log('Сообщение:', message);

    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    
    // Очистка формы
    document.getElementById('contactForm').reset();
}); 