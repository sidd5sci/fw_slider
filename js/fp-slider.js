/**
 * 
 * Frapwise Slider
 * License : MIT
 * Auther : Siddhartha Singh
 * Contact : sidd5sci@gmail.com
 * 
 */

class FW_Slider{

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
   * Init method to initialse the FW Slider 
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
    this.slidesCount = settings.slidesCount;
    this.execute();
  }

  /**
   * Auto excute method for initiatiating the slider and createing 
   * the DOM content for the slider
   */
  execute(){
    console.log(this.toString());
    let slider = document.createElement('div');
    slider.className = 'fw-slider';
    slider.id = 'fw-slider-id';
    slider.setAttribute("data-direction",true);

    // create slides
    for(let i = 0;i<this.slidesToShow;i++){
      var slide = this.makeSlide(this.slides[i],i);
      slider.append(slide);
    }

    // controls
    let controls = document.createElement('div');
    controls.className = 'fw-controls';
    let container = document.createElement('div');
    container.className = 'fw-pin-container';
    container.style.width = (6.66 * this.slidesToShow) + '%';

    for(let i=0;i<this.slidesToShow;i++){
      var pin = document.createElement('div');
      pin.className = 'fw-pin';
      pin.setAttribute("data-pin",i);
      
      container.append(pin);
    }

    controls.append(container);
    slider.append(controls);
    this.sliderElement.append(slider);
    console.log(slider);
    this.controlsListner();

  }

  /**
   * 
   * @param {*} slide 
   * @param {*} slideId 
   */
  makeLayers(slide,slideId){
    let i = 0;
    let layerGroup = document.createElement('div');
    layerGroup.className = 'fw-layer-group';
    slide.layers.forEach(function(l){

        let layer = document.createElement("div");
        layer.className = 'fw-layer';
        layer.setAttribute('id','layer_'+slideId+'_'+i);
        layer.setAttribute('data-type','text');
        layer.setAttribute('data-name',l.name);
        layer.setAttribute('data-left',l.left);
        layer.setAttribute('data-top',l.top);
        layer.setAttribute('data-width',l.width);
        layer.setAttribute('data-height',l.height);
        layer.setAttribute('data-animation',l.animation);
        layer.setAttribute('data-animation-start',l.animationStart);
        layer.setAttribute('data-animation-duration',l.animationDuration);
        layer.append(l.content);

        layerGroup.append(layer);
        i++;
    });
    
    return layerGroup;
    
  }

  /**
   * Create silde using silde paramenters provided by the user 
   * @param {*} slide 
   * @return div 
   */
  makeSlide(slide,i){
    
    let div = document.createElement('div');
    div.className = 'fw-slide';
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
    contentDiv.className = 'fw-slide-content';
    let heading = document.createElement('h2');
    heading.innerText = slide.title;  
    contentDiv.append(heading);
    let subtext = document.createElement('p');
    subtext.innerText = slide.description;  
    contentDiv.append(heading); 
    contentDiv.append(subtext);

    div.append(contentDiv);
    div.append(this.makeLayers(slide,i));
    console.log(this.slidesToShow);
   
    return div;
  }

  /**
   * main run method 
   * this keep executing the itself after the interval 
   * decleared by the user while defining the fw_slider 
   * init parameters.
   */
  run(slidesToShow,windowWidth){
      let slider = document.getElementById("fw-slider-id");

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
      //let pre = document.getElementById('fp-slide-'+index);
      //if(pre != undefined)
        //pre.className = 'fp-slide previous';
      
      index++;
      let next = document.getElementById('fp-slide-'+index);
      //next.className = 'fp-slide fp-active '+ next.dataset.enterAnimation;
      next.dataset.active = true;
      console.log('index: ',next);
      
  }

  /**
   * 
   */
  controlsListner = function(){

    for(let pin of document.getElementsByClassName('fw-pin')) {
      
      pin.addEventListener("click",function(){
        //alert(this.dataset.pin);
          for(let p of document.getElementsByClassName('fw-pin')){
            p.style.background = 'none';
          }
        this.style.background = '#ccc';
      });
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







