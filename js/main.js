

console.log(document.documentElement.clientWidth);

let FWSlider = new FW_Slider();
FWSlider.init({
  elementId: "fw-slider",
  dots: true,
  infinite: false,
  speed: 5000,
  slidesToShow: 4,
  slidesToScroll: 1,
  slidesCount:4,
  controls:true,
  slides:[
    { 
      name: '',
      title: 'First slide',
      description: 'lorem ipsum suet doler.',
      image: '../docs/images/2.jpg',
      color:'#ccc',
      enterAnimationClass:'animated slideInLeft',
      exitAnimationClass:'animated slideInLeft',
      interval:5000,
      layers:[
        { name:'1',
          left:50,
          top:20,
          width:100,
          height:100,
          animation:'animated slideInLeft',
          animationStart:2000,
          animationDuration:100,
          content: `<h1>text1</h1>`,
        },
        { name: '1',
          left:20,
          top:50,
          width:100,
          height:100,
          animation: 'animated flipInY',
          animationStart:200,
          animationDuration:100,  
          content: `<h1>text2</h1>`,
        }
      ]
    },
    { 
      name:'',
      title:'Second slide',
      description:'lorem ipsum suet doler.',
      image: '../docs/images/2.jpg',
      color:'#ccc',
      enterAnimationClass:'animated slideInLeft',
      exitAnimationClass:'animated slideInLeft',
      interval:5000,
      layers:[],
    },
    { 
      name:'',
      title:'Third slide',
      description:'lorem ipsum suet doler.',
      image: '../docs/images/3.jpg',
      color:'#ccc',
      enterAnimationClass:'animated slideInLeft',
      exitAnimationClass:'animated slideInLeft',
      interval:5000,
      layers:[],
    },
    { 
      name: '',
      title: 'Fouth slide',
      description: 'lorem ipsum suet doler.',
      image: '../docs/images/2.jpg',
      color:'#ccc',
      enterAnimationClass:'animated slideInLeft',
      exitAnimationClass:'animated slideInLeft',
      interval:5000,
      layers:[
        { name:'1',
          left:100,
          top:100,
          width:100,
          height:100,
          animation:'fade',
          animationStart:100,
          animationDuration:100,
          content: `<h1>text1</h1>`,
        },
        { name: '1',
          left:100,
          top:100,
          width:100,
          height:100,
          animation: 'fade',
          animationStart:200,
          animationDuration:100,  
          content: `<h1>text2</h1>`,
        }
      ]
    },
  ],
  
});
FWSlider.start();

