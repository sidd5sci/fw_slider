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
    this.forword = true; /** default direction */
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
    this.forword = true; /** default direction */
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
    slider.id = 'fp-slider-id';
    slider.setAttribute("data-direction",true);

    // create slides
    for(let i = 0;i<this.slidesToShow;i++){
      var slide = this.makeSlide(this.slides[i],i);
      slider.append(slide);
    }

    // controls
    let controls = document.createElement('div');
    controls.className = 'fp-controls';
    let container = document.createElement('div');
    container.className = 'fp-pin-container';
    container.style.width = (6.66 * this.slidesToShow) + '%';

    for(let i=0;i<this.slidesToShow;i++){
      var pin = document.createElement('div');
      pin.className = 'fp-pin';
      pin.setAttribute("data-pin",i);
      pin.addEventListener("click",this.controlsListner);
      container.append(pin);
    }

    controls.append(container);
    slider.append(controls);
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
    div.id = 'fp-slide-'+i;
    div.setAttribute('data-show',true);
    div.setAttribute('data-posx',this.windowWidth * i);
    div.setAttribute('data-slide',i);
    div.setAttribute('data-active',i==0?true:false);
    div.setAttribute('data-enter-animation-class',slide.enterAnimationClass);
    div.setAttribute('data-exit-animation-class',slide.exitAnimationClass);
    div.style.left = '0px';
    div.style.background = slide.color;
    div.style.zIndex = i * -1;
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
  controlsListner(){
    alert("hello",this.className); 
  }
  /**
   * 
   */
  run(slidesToShow,windowWidth){
      let slider = document.getElementById("fp-slider-id");

      let forword = slider.dataset.direction;
      let index = -1;
      // decide the direction 
      for(let div of document.querySelectorAll('[data-slide]')) {
        // backword
        if(div.dataset.active == 'true' ){
          index = div.dataset.slide ;
          div.dataset.active = false;
          div.className = 'fp-slide '+ div.dataset.exitAnimationClass;
          // setTimeout(function(){ document.querySelectorAll('[data-slide='+index+']').className = ''; }, 1000,index);
          break;
        }
       
      }
      index++;
      let next = document.getElementById('fp-slide-'+index);
      next.className = 'fp-slide '+ div.dataset.enterAnimationClass;
      next.dataset.active = true;
      console.log('index: ',next);
      
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





