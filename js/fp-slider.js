/**
 * 
 * Frapwise Slider
 * License : MIT
 * Auther : Siddhartha Singh
 * Contact : sidd5sci@gmail.com
 * 
 */

class FP_Slider{

  /**
   * Default constructor
   */
  constructor(){
    this.sliderElement = null;
    this.dots = true;
    this.infinite = false;
    this.speed = 300;
    this.slidesToShow = 3;
    this.slidesToScroll = 3;
    this.controls = true;
    this.slides = null;
    this.windowWidth = document.documentElement.clientWidth;
    this.windowHeight = document.documentElement.clientHeight;
    this.pageWidth = document.body.clientWidth;
    this.pageHeight = document.body.clientHeight;
    this.interval = null;

  }

  /**
   * Init method to initialse the FP Slider 
   * @param {*} settings 
   */
  init(settings){
    this.sliderElement = document.getElementById(settings.elementId);
    this.dots = settings.dots;
    this.infinite = settings.infinite;
    this.speed = settings.speed;
    this.slidesToShow = settings.slidesToShow;
    this.slidesToScroll = settings.slidesToScroll;
    this.controls = settings.controls;
    this.slides = settings.slides;
    this.execute();
  }

  /**
   * Auto excute method for initiatiating the slider and createing 
   * the DOM content for the slider
   */
  execute(){
    console.log(this.toString());
    let slider = document.createElement('div');
    slider.className = 'fp-slider';
    // create slides
    
    for(let i = 0;i<this.slidesToShow;i++){
      var slide = this.makeSlide(this.slides[i],i);
      slider.append(slide);
    }

    console.log(slider);
    this.sliderElement.append(slider);
  }

  /**
   * Create silde using silde data provided by the user 
   * @param {*} slide 
   * @return div 
   */
  makeSlide(slide,i){
    
    let div = document.createElement('div');
    div.className = 'fp-slide';
    div.setAttribute('data-show',true);
    div.setAttribute('data-posx',this.windowWidth * i);
    div.setAttribute('data-slide',i);
    div.setAttribute('data-active',i==0?true:false);
    div.style.left = this.windowWidth * i + "px";
    // creating image
    let image = document.createElement('img');
    image.src = slide.image;
    div.append(image);
    
    // creating slide content
    let contentDiv = document.createElement('div');
    contentDiv.className = 'fp-slide-content';
    let heading = document.createElement('h2');
    heading.innerText = slide.title;  
    contentDiv.append(heading);
    let subtext = document.createElement('p');
    subtext.innerText = slide.description;  
    contentDiv.append(heading); 
    contentDiv.append(subtext);

    div.append(contentDiv);
    console.log(this.slidesToShow);

    return div;
  }

  /**
   * 
   */
  run(slidesToShow,windowWidth){
      let i = 1, forward = true;
      //windowWidth =  100;
      for(let div of document.querySelectorAll('[data-slide]')) {
        
        // document.body.dataset.about
        console.log("before: ",div.dataset.slide,div.style.left);
        
        // moves forword
        if(div.dataset.slide == 0 && parseInt(div.style.left) <= 0){
          if(div.dataset.active == true)
            forward = true;
        }
        // 
        if(div.dataset.slide == slidesToShow-1 && parseInt(div.style.left) <= 0 ){
          if(div.dataset.active == 1)
             forward = false;
          // div.dataset.active == true
        }
        


        if(forward){
          console.log("f");
          div.style.left = parseInt(div.style.left) - windowWidth +"px";
        }else{
          div.style.left = parseInt(div.style.left) + windowWidth +"px";
          console.log("b");
        }
        

        div.dataset.active = false;
        if(div.style.left == "0px"){
          div.dataset.active = true;
        }

      }
      
  }

  /**
   * Start slider
   */
  start(){
    this.interval = setInterval(this.run, this.speed,this.slidesToShow,this.windowWidth);
  }

  /**
   * Stop slider 
   */
  stop() {
    clearInterval(this.interval);
  }

  /**
   * Converts the object to json
   */
  toString(){
    return JSON.stringify(this);
  }






}






// ;(function() {

//   var slider = function() {
    
//     var backImg = [];
//     backImg[0] = "http://www.matejmichalik.com/black-and-white-photography/galleries/post-427/full/Black-and-white-photo-Tanah-lot-bali.jpg";
//     backImg[1] = "http://cdn.digital-photo-secrets.com/images/black-white-dendelion-large.jpg";
//     backImg[2] = "http://picturescollections.com/wp-content/uploads/2012/04/Black_And_White_Pictures.jpg";
    
//     var i = 0;
//     var x = (backImg.length) - 1;
//     var int = 3500;
    
//     interval = setInterval(showNext, int); // hoist?
    
//     var elements = {
//       slider: document.querySelector('.slider'),
//       btn: { 
//         left: document.querySelector('.btnLeft'),
//         right: document.querySelector('.btnRight')
//       }
//     }
    
//     var startInterval = function() {
//        interval = setInterval(showNext, int);
//     }
    
//     var stopInterval = function() {
//       clearInterval(interval);
//     }
    
//     var attachEvents = function() {
//       elements.btn.left.onclick = function() { showPrevious(); };
//       elements.btn.right.onclick = function() {  showNext(); };
//       elements.slider.addEventListener("mouseenter", stopInterval);
//       elements.slider.addEventListener("mouseleave", startInterval);
//     };
    
//     var changeImg = function() {
//       elements.slider.style.backgroundImage = 'url(' + backImg[i] + ')';
//     }
    
//     var initialize = (function() {
//       attachEvents();
//       changeImg(i);
//     })();

//     var showPrevious = function() {
//       (i <= 0) ? i = 3 : i--;
//       changeImg(i);
//     };

//     var showNext = function() {
//       (i >= x) ? i = 0 : i++;
//       changeImg(i);
//     };

//   };

//   slider();

// })();