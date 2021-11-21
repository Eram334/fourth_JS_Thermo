const tempload = () => {
    let temp = document.getElementById('temp');
    temp.innerHTML = `&#xf2cb;`;
    setTimeout(() => {
        temp.innerHTML = `&#xf2ca`;
        temp.style.color="#f8b627";
    },1000);

    setTimeout(() => {
        temp.innerHTML = `&#xf2c9`;
        temp.style.color = "#00ff00";
    }, 2000);

    setTimeout(() => {
        temp.innerHTML = `&#xf2c7`;
        temp.style.color = "#fb0094";
    }, 3000);

    setTimeout(() => {
        temp.innerHTML = `&#xf2ca7`;
        temp.style.color = "#d63031";
    }, 4000);

}
tempload();
setInterval(tempload,5000);

//https://forkaweso.me/Fork-Awesome/cheatsheet/