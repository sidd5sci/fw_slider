# [FW Slider](https://sidd5sci.github.io/fw_slider/)

FW slider is hussle free and easy to use slider with powerful features. fully customisable css and compatible with 'animate.css' and custom css can be used also.

## [live Demo](https://sidd5sci.github.io/fw_slider/docs/index.html)

 [![Build Status](https://travis-ci.org/tommyod/KDEpy.svg?branch=master)](https://travis-ci.org/tommyod/KDEpy) [![Documentation Status](https://readthedocs.org/projects/kdepy/badge/?version=latest)](http://kdepy.readthedocs.io/en/latest/?badge=latest) 
  [![Open Source Helpers](https://www.codetriage.com/sidd5sci/fw_slider/badges/users.svg)](https://www.codetriage.com/sidd5sci/fw_slider)
---------
FW Slider features 

  - No html required
  - No jquery reqiuired
  - Works on all browser
  - mobile responsive
  - Availible for Free and OpenSource

  
## Licensing

FP SLIDER is licensed under the [MIT license](LICENSE).

![MIT License](https://danielmiessler.com/images/mitlicense.png)

## Donate 
You can donate as small as $5 
[paypal](https://paypal.me/learnkevin) 

this is an open source project please support us for keep us running 

# how to use
- ## html 

Create a div tag with and id 
```
<div class="section" id="fw-slider">
        
</div>
```
- ## css

Inclide the main.css file in your page
```
<link rel="stylesheet" href="../css/main.css"/>
```
- ## js 

Include the fw-slider.js file in your page 
```
<script src="../js/fw-slider.js"></script>
```

then make a fw slider 
```
<script>

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
FWSlider.start();

</script>
```


## contribute
mail me at 
```
sidd5sci@gmail.com
```
## Donate 
You can donate as small as $5 
[paypal](https://paypal.me/learnkevin) 

this is an open source project please support us for keep us running 