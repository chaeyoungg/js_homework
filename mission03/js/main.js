const data = [
    {
        id: 1,
        src: "6기.png",
        alt: "블랙핑크 지수 닮은꼴 (웃으면 더 닮음)",
    },
    {
        id: 2,
        src: "7기.png",
        alt: "모태솔로라고 함, 틱톡 재직중 (연봉이 굉장히 높다고 함 군싹돌...)",
    },
    {
        id: 3,
        src: "10기.png",
        alt: "나솔에선 흔하지 않은 아이돌상",
    },
    {
        id: 4,
        src: "11기.png",
        alt: "모태솔로 옥순 또 등장, S대 출신 강사",
    },
    {
        id: 5,
        src: "12기.png",
        alt: "모태솔로 특집 옥순, 광수라는 이름에 PTSD 있을 수 있음",
    },
    {
        id: 6,
        src: "14기.png",
        alt: "할말 다 하는 돌직구 스타일, 약간 기 빨릴 수 있음",
    },
    {
        id: 7,
        src: "16기.png",
        alt: "보호본능 자극 부자집 딸st, 사귀면 슈퍼카 얻어타기 가능",
    },
    {
        id: 8,
        src: "17기.png",
        alt: "흑염소 수저, 사귀면 흑염소 진액으로 건강 지키기 가능",
    },
    {
        id: 9,
        src: "18기.png",
        alt: "MBTI 맹신론자, 'T' 라면 당장 돔황쳐야함",
    },
    {
        id: 10,
        src: "영숙.png",
        alt: "인생이 지루하여 하드모드에 돌입하고 싶다면 만나봄직함 대신 헤어지면 인스타로 저격글 올림",
    },
];



  const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 4000,
    },
    loop: true,
    speed: 2000,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    parallax: true,
    pagination: {
      el: ".pagination",
      clickable: true,
      bulletClass: "bullet",
      bulletActiveClass: "is-active",
      renderBullet: function (index, className) {
        return /* html */ `
          <span class="${className}">
            <img src="./옥순모음/${data[index].src}" alt="${data[index].alt}" />
          </span>
        `;
      },
      // type:'fraction'
    },
  });
  
  // const split = new SplitText('h3',{type:'chars'})
  
  
  // swiper
  // .on('slideChangeTransitionStart',function(){
  //   gsap.to(split.chars,{
  //     yPercent:120,
  //     stagger:0.05,
  //   })
  // })
  // .on('slideChangeTransitionEnd',function(){
  //   gsap.to(split.chars,{
  //     yPercent:0,
  //     stagger:0.05,
  //   })
  // })


  const imageInfo = document.querySelectorAll('.image-info');
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  function addInfo(){
    const swipers = [...swiperWrapper.children];

    for(i = 0; i < swipers.length; i++){
      imageInfo[i].textContent = data[i].alt;
    }
    console.log(swipers)
  }

  addInfo();



  
  var audio = document.querySelector(".audio");
  audio.volume = 0.5;