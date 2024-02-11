console.log(data);

/* 

1. 클릭 이벤트 활성화 v
2. nav 클릭시 배경 색상 변경 v
3. 이미지 변경v
4. 텍스트 변경v
5. 함수 분리v

*/


const navigation = document.querySelector('ul');
const image = document.querySelector('.visual img');
const nickName = document.querySelector('.nickName');


function handleSlide(e){
    e.preventDefault();
    const target = e.target.closest('li');
    const list = [...navigation.children];

    if(!target) return;

    list.forEach((li) => {
        li.classList.remove('is-active');
    })
    target.classList.add('is-active');

    let index = +target.getAttribute('data-index');
    setBgColor(index);
    setImage(index);
    setNameText(index);

}
navigation.addEventListener('click',handleSlide);




/* ------------------------------ 배경 색상 변경 함수 ------------------------------ */
const bg = document.querySelector('body');
function setBgColor (n) {

    switch(n){
        case 1:
            bg.style.background = `linear-gradient(to bottom,${data[n-1].color})`;
            break;
        case 2:
            bg.style.background = `linear-gradient(to bottom,${data[n-1].color})`;
            break;
        case 3:
            bg.style.background = `linear-gradient(to bottom,${data[n-1].color})`;
            break;
        case 4:
            bg.style.background = `linear-gradient(to bottom,${data[n-1].color})`;
            break;
    }
}








/* ----------------------------------- 이미지 변경 함수 ---------------------------------- */

function setImage (n) {
    const srcName = data[n-1].name.toLowerCase();
    image.setAttribute('src',`./assets/${srcName}.jpeg`)
}


/* ----------------------------------- 텍스트 변경 함수 ---------------------------------- */
function setNameText(n) {
    const imgName = data[n-1].name;
    nickName.textContent = imgName;
}









