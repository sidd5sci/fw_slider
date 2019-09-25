

console.log(document.documentElement.clientWidth);

let FPSlider = new FP_Slider();
FPSlider.init({
  elementId: "fp-slider",
  dots: true,
  infinite: false,
  speed: 50,
  slidesToShow: 3,
  slidesToScroll: 3,
  controls:true,
  slides:[
    {
      title:'First slide',
      description:'lorem ipsum suet doler.',
      image: 'images/1.jpg'
    },
    {
      title:'Second slide',
      description:'lorem ipsum suet doler.',
      image: 'images/2.jpg'
    },
    {
      title:'Third slide',
      description:'lorem ipsum suet doler.',
      image: 'images/3.jpg'
    },
  ],
  
});
FPSlider.start();

