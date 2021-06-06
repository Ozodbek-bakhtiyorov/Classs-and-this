window.addEventListener("DOMContentLoaded", () =>{
    class MenuCard {
        constructor(src, alt , title, descr,price,  parentSelector, ...classes){
            this.src = src;
            this.alt = alt; 
            this.title = title; 
            this.descr = descr;
            this.price = price;  
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 10500;
            this.changeToUSD();
        }
        changeToUSD(){
            this.price = Math.floor(this.price/this.transfer);
            
        }
        
        render(){
            const element = document.createElement('div');
            if(this.classes.length === 0 ){
                this.classes = 'menu__item';
                element.classList.add(this.classes);
            }
            else this.classes.forEach(className => element.classList.add(className));


             
            element.innerHTML = `
            <div class="menu__item">
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
                ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Price:</div>
                <div class="menu__item-total"><span>${this.price}</span>$</div>
            </div>
        </div>`;
        this.parent.append(element);

        }
    } 
// calling classes

new MenuCard(
    'img/tabs/audi.jpg', 
    'audi', 
    'Audi', 
    ' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore.', 
    '1200000000', 
    '.menu .container'

).render();

new MenuCard(
    'img/tabs/bmw.jpg',
    'bmw',
    'BMW',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '150000000',
    '.menu .container'
).render();
new MenuCard(
    'img/tabs/lada.jpg',
    'lada',
    'Lada',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '2000000000',
    '.menu .container'
).render();
new MenuCard(
    'img/tabs/lamborghini.png',
    'lamborghini',
    'Lamborghini',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '1000000000',
    '.menu .container'
).render();
new MenuCard(
    'img/tabs/mercedes.jpg',
    'mercedes',
    'Mercedes Bens',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '4000000000',
    '.menu .container'
).render();
new MenuCard(
    'img/tabs/lada.jpg',
    'ferrari',
    'Ferrari',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '40000000000',
    '.menu .container'
).render();
new MenuCard(
    'img/tabs/RT.jpg',
    'RT',
    'RT',
    'lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae ipsa suscipit perspiciatis qui cum voluptates quibusdam ad dolor officiis at illum fuga numquam a voluptas voluptate quaerat nobis possimus soluta omnis ea, vero culpa? Et sed ad nobis id tempore',
    '50000000000',
    '.menu .container'
).render();

});
