

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
      enterAnimationClass:'animated zoomIn',
      exitAnimationClass:'animated slideOutUp',
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
    { 
      name:'',
      title:'Second slide',
      description:'lorem ipsum suet doler.',
      image: '../docs/images/2.jpg',
      color:'#ccc',
      enterAnimationClass:'animated zoomIn',
      exitAnimationClass:'animated rollOut',
      layers:[],
    },
    { 
      name:'',
      title:'Third slide',
      description:'lorem ipsum suet doler.',
      image: '../docs/images/3.jpg',
      color:'#ccc',
      enterAnimationClass:'animated zoomIn',
      exitAnimationClass:'animated slideOutRight',
      layers:[],
    },
    { 
      name: '',
      title: 'Fouth slide',
      description: 'lorem ipsum suet doler.',
      image: '../docs/images/2.jpg',
      color:'#ccc',
      enterAnimationClass:'animated zoomIn',
      exitAnimationClass:'animated slideOutUp',
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
// FWSlider.start();

