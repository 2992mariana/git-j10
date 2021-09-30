/*Declaraciones*/
    const d = document
    const menuBtn = d.querySelector('nav .btn')
    const menuLst = d.querySelector('nav .menu')
    const mapBtn = d.querySelector('.map .btn')
    const mapFrm = d.querySelector('.map iframe')

    menuBtn.onclick = () => menuLst.classList.toggle('active') ? menuBtn.innerHTML = '&times;' : menuBtn.innerHTML = '&equiv;'

    mapBtn.onclick = () => mapFrm.classList.toggle('active') ? mapBtn.classList.replace('icon-max', 'icon-min') : mapBtn.classList.replace('icon-min', 'icon-max') 