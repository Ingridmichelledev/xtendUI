Xt.init.push({ // on DOM ready and on content added to DOM
  matches: '.slider',
  fnc: sliderInit
});

function sliderInit(main, index) {

  // vars

  let time = .6;
  let size = 200;

  let timeContent = .6;
  let delayContent = .15;
  let sizeContent = 50;
  let delayContentMax = delayContent * 2;
  let durationContent = timeContent + delayContentMax;

  let timeDesign = .6;
  let delayDesign = .15;
  let sizeDesign = 50;
  let delayDesignMax = delayDesign * 2;
  let durationDesign = timeDesign + delayDesignMax;

  CustomEase.create('easeIn', '.41, .1, .175, 1');
  CustomEase.create('easeOut', '.77, 0, .175, 1');

  // slider

  let slider = new Xt.Slider(main, {
    "auto": 6000,
    "durationOn": time * 1000,
    "durationOff": time * 1000
  });

  let dragger = slider.dragger;

  // drag event

  dragger.addEventListener('drag.xt.slider', function (e) {
    let self = e.detail.object;
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let contents = slide.querySelectorAll('.card_content > *');
    let designs = slide.querySelectorAll('.card_design');
    let ratio = Math.abs(self.detail.xStart - self.detail.xCurrent) / slide.clientWidth;
    // mask
    TweenMax.set(slide, {x: -self.detail.xDist + 'px', opacity: 1 - ratio});
    TweenMax.set(dragger, {x: self.detail.xDist});
    // direction
    if (self.detail.xStart - self.detail.xCurrent > 0) {
      // content
      for (let content of contents) {
        let ratioWithDelay = (durationContent - parseFloat(content.dataset.tlDelay)) * ratio / timeContent;
        TweenMax.set(content, {x: -sizeContent * ratioWithDelay, opacity: 1 - ratioWithDelay});
      }
      // design
      for (let design of designs) {
        let ratioWithDelay = (durationDesign - parseFloat(design.dataset.tlDelay)) * ratio / timeDesign;
        TweenMax.set(design, {x: -sizeDesign * ratioWithDelay, opacity: 1 - ratioWithDelay});
      }
    } else {
      // content
      for (let content of contents) {
        let ratioWithDelay = (durationContent - parseFloat(content.dataset.tlDelay)) * ratio / timeContent;
        TweenMax.set(content, {x: sizeContent * ratioWithDelay, opacity: 1 - ratioWithDelay});
      }
      // design
      for (let design of designs) {
        let ratioWithDelay = (durationDesign - parseFloat(design.dataset.tlDelay)) * ratio / timeDesign;
        TweenMax.set(design, {x: sizeDesign * ratioWithDelay, opacity: 1 - ratioWithDelay});
      }
    }
  });

  // dragend event

  dragger.addEventListener('dragend.xt.slider', function (e) {
    let slide = slider.targets.filter(x => x.classList.contains('active'))[0];
    let contents = slide.querySelectorAll('.card_content > *');
    let designs = slide.querySelectorAll('.card_design');
    // mask
    TweenMax.to(slide, time, {x: 0, opacity: 1, ease: 'easeOut'});
    TweenMax.to(dragger, time, {x: 0, ease: 'easeOut'});
    // content
    for (let content of contents) {
      TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeOut'});
    }
    // design
    for (let design of designs) {
      TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeOut'});
    }
  });

  // slider items

  for (let slide of slider.targets) {

    // on event

    slide.addEventListener('on.xt', function (e) {
      let xMax = slide.clientWidth;
      let contents = slide.querySelectorAll('.card_content > *');
      let designs = slide.querySelectorAll('.card_design');
      // content
      for (let [i, content] of contents.entries()) {
        content.dataset.tlDelay = Math.min(delayContent * i, delayContentMax).toString();
      }
      // design
      for (let [i, design] of designs.entries()) {
        design.dataset.tlDelay = Math.min(delayDesign * i, delayDesignMax).toString();
      }
      // if inital stop, don't do animation
      if (e.detail.object.detail.initial) {
        return false;
      }
      // setup drag position
      TweenMax.set(slide, {opacity: 0});
      if (!slide.classList.contains('xt-inverse')) {
        // mask
        TweenMax.set(slide, {x: -xMax});
        TweenMax.set(dragger, {x: xMax});
        TweenMax.set(dragger.children[0], {x: size});
        TweenMax.to(dragger.children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let content of contents) {
          TweenMax.set(content, {x: sizeContent, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of designs) {
          TweenMax.set(design, {x: sizeDesign, opacity: 0});
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.set(slide, {x: xMax});
        TweenMax.set(dragger, {x: -xMax});
        TweenMax.set(dragger.children[0], {x: -size});
        TweenMax.to(dragger.children[0], time, {x: 0, ease: 'easeIn'});
        // content
        for (let content of contents) {
          TweenMax.set(content, {x: -sizeContent, opacity: 0});
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of designs) {
          TweenMax.set(design, {x: -sizeDesign, opacity: 0});
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: 0, opacity: 1, ease: 'easeIn'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      }
      // drag position
      TweenMax.to(slide, time, {x: 0, opacity: 1, ease: 'easeIn'});
      TweenMax.to(dragger, time, {x: 0, ease: 'easeIn'});
    });

    // off event

    slide.addEventListener('off.xt', function (e) {
      let xMax = slide.clientWidth;
      let contents = slide.querySelectorAll('.card_content > *');
      let designs = slide.querySelectorAll('.card_design');
      // complete drag
      if (!slide.classList.contains('xt-inverse')) {
        // mask
        TweenMax.to(slide, time, {x: xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(dragger, time, {x: -xMax, ease: 'easeOut'});
        // content
        for (let content of contents) {
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: -sizeContent, opacity: 0, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of designs) {
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: -sizeDesign, opacity: 0, ease: 'easeOut'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      } else {
        // mask
        TweenMax.to(slide, time, {x: -xMax, opacity: 0, ease: 'easeOut'});
        TweenMax.to(dragger, time, {x: xMax, ease: 'easeOut'});
        // content
        for (let content of contents) {
          setTimeout(function () {
            TweenMax.to(content, timeContent, {x: sizeContent, opacity: 0, ease: 'easeOut'});
          }, parseFloat(content.dataset.tlDelay) * 1000);
        }
        // design
        for (let design of designs) {
          setTimeout(function () {
            TweenMax.to(design, timeDesign, {x: sizeDesign, opacity: 0, ease: 'easeOut'});
          }, parseFloat(design.dataset.tlDelay) * 1000);
        }
      }
    });

  }

}