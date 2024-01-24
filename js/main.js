const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
const wrapItemID = ['logo', 'heading', 'content'];
let wrapItem;
for (let i = 0; i < wrapItemID.length; i++) {
    wrapItem = document.createElement('div');
    wrapItem.classList.add('wrap__item');
    wrapItem.id = wrapItemID[i];
    wrapper.appendChild(wrapItem);
}
const logo = document.getElementById('logo');
for (let i = 0; i < 2; i++) {
    const element = document.createElement('div');
    element.classList.add('logo__item');
    logo.appendChild(element);
}
const logoText = document.createElement('span');
logoText.classList.add('logo__text');
logoText.textContent = 'logo';
logo.appendChild(logoText);
const heading = document.getElementById('heading');
const h1 = document.createElement('h1');
h1.textContent = 'Всё для Серёжки';
heading.appendChild(h1);
const content = document.getElementById('content');
const cubeWrap = document.createElement('div');
cubeWrap.classList.add('cube--wrap');
content.appendChild(cubeWrap);
const cube = document.createElement('div');
cube.classList.add('cube');
cubeWrap.appendChild(cube);
for (let i = 0; i < 6; i++) {
    const arr = ['front', 'back', 'left', 'right', 'top', 'bottom'];
    const side = document.createElement('div');
    side.classList.add('side', arr[i]);
    cube.appendChild(side);
}
const tabsList = document.createElement('ul');
tabsList.classList.add('tabs__list');
content.appendChild(tabsList);
const footer = document.createElement('footer');
footer.classList.add('footer');
footer.textContent = '\u24B82015';
content.appendChild(footer);
const tabsContentList = document.createElement('ul');
tabsContentList.classList.add('tabs-content__list');
content.appendChild(tabsContentList);
for (let i = 0; i < 7; i++) {
    const tabItem = document.createElement('li');
    tabItem.classList.add('tab__item');
    const tabLink = document.createElement('a');
    tabLink.classList.add('tab__link');
    tabLink.setAttribute('href', `#item${i + 1}`);
    tabLink.textContent = `item ${i + 1}`;
    tabItem.appendChild(tabLink);
    tabsList.appendChild(tabItem);
    const tabCont = document.createElement('li');
    tabCont.classList.add('tab-content__item');
    tabCont.id = `item${i + 1}`;
    tabsContentList.appendChild(tabCont);
}
const contentItem1 = document.getElementById('item1');
contentItem1.textContent =
    'Аниме – японская анимация, характеризующаяся ярким стилем и разнообразными жанрами. Родилось в 20-х веке, но получило популярность в мировой культуре с 1960-х. Включает в себя арт, кино, и телесериалы.';
const contentItem2 = document.getElementById('item2');
contentItem2.textContent =
    'Европа — второй по площади и третий по населению континент. Расположена на северо-западе Евразии. Обладает богатой историей, разнообразными культурами, языками и архитектурой. Европейский Союз, экономическое и политическое объединение, является важным игроком в мировых делах. Европа известна своими искусством, наукой, и кухней, а также разнообразием природных ландшафтов от Альп до Северного моря.';
const contentItem3 = document.getElementById('item3');
contentItem3.textContent =
    'Взрослым рекомендуется спать 7-9 часов в сутки, чтобы обеспечить оптимальное физическое и психическое здоровье. Сон важен для восстановления организма, укрепления иммунитета, обработки информации, и регуляции эмоционального состояния. Недостаток сна может привести к проблемам со здоровьем и повысить риск различных заболеваний.';
const contentItem4 = document.getElementById('item4');
contentItem4.textContent =
    'Неносение очков или линз при плохом зрении может вызвать утомление глаз, головные боли, и затруднения в фокусировке. Это также может ухудшить зрение и привести к прогрессированию болезней глаз, таких как близорукость или дальнозоркость.';
const contentItem5 = document.getElementById('item5');
contentItem5.textContent =
    'Убеждение, поощрение и создание комфортных условий могут помочь заставить человека носить носки и очки. Объясните пользу: защита ног и глаз от травм, сохранение зрения. Поддерживайте положительное отношение, выбирая стильные очки и удобные носки. Постепенное привыкание к носке сделает это привычным поведением.';
const contentItem6 = document.getElementById('item6');
contentItem6.textContent =
    'Вежливо, но решительно сообщите, что вам нужно время или пространство для себя. Выразите свои границы и просите уважать их. Можно сказать: "Я ценю твою компанию, но сейчас я занят/устал. Давай поговорим позже." Важно быть ясным и твердым, не создавая конфликта.';
const contentItem7 = document.getElementById('item7');
contentItem7.textContent = '\u{1F608}';
const tabLinksArr = document.querySelectorAll('.tab__link');
const tabsContentArr = document.querySelectorAll('.tab-content__item');
tabLinksArr.forEach((item) => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const tabContentHref = item.getAttribute('href').replace('#', '');
        tabsContentArr.forEach((item) => {
            item.classList.remove('show');
        });
        document.getElementById(tabContentHref).classList.add('show');
    });
    $(function () {
        $('.tab__link').click(function () {
            tabLinksArr.forEach((item) => {
                item.setAttribute('style', '');
            });
            $(this).css({
                border: '0',
                backgroundColor: 'transparent',
            });
        });
    });
    $(function () {
        $('.tab__link')[0].click();
    });
});
