let button = document.querySelector('#button');

button.addEventListener('click', (e) => {
    e.preventDefault();
    let link = document.querySelector('#link').value;

    if (!/^https?:\/\//i.test(link)) link = `http://${link}`;

    window.location.href = link;
});