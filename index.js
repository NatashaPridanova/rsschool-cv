const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map((char, i) =>
    `<span style="transform:rotate(${i*22}deg)">${char}</span>`).join('');
console.log('hi!')