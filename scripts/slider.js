class Slider {
    constructor(id) {
      this._id = id;
      this._element = document.getElementById(id);
      this._photos = Array.from(this._element.children);
      this._numPhotos = this._photos.length;
      this._currentPhoto = 0;
  
      this.showPhoto();
  
      const leftBtn = this._element.appendChild(document.createElement("button"));
      const rightBtn = this._element.appendChild(
        document.createElement("button")
      );
  
      leftBtn.className = "slider__btn-left";
      rightBtn.className = "slider__btn-right";
  
      leftBtn.textContent = "˂";
      rightBtn.textContent = "˃";
  
      const index = this._element.appendChild(document.createElement("div"));
      index.className = "slider__index";
  
      for (let i = 0; i < this._numPhotos; i++) {
        let indicator = index.appendChild(document.createElement("p"));
        indicator.className = "slider__index__point";
        indicator.textContent = "•";
        indicator.addEventListener("click", () => {
          index.children[slider._currentPhoto].className = "slider__index__point";
          slider.changeToSelectedPhoto(i);
          index.children[slider._currentPhoto].className =
            "slider__index__point selected";
        });
      }
  
      index.children[this._currentPhoto].className =
        "slider__index__point selected";
  
      
  
      leftBtn.addEventListener("click", () => {
        this.previousImage();
      });
  
      rightBtn.addEventListener("click", () => {
        this.nextImage();
      });
  
      setInterval(() => {
        this.nextImage();
      }, 20000);
    }
  
    nextImage() {
      index.children[slider._currentPhoto].className = "slider__index__point";
      slider.nextPhoto();
      index.children[slider._currentPhoto].className =
        "slider__index__point selected";
    }

    previousImage() {
      index.children[slider._currentPhoto].className = "slider__index__point";
      slider.previousPhoto();
      index.children[slider._currentPhoto].className =
        "slider__index__point selected";
    }

    hidePhoto() {
      this._photos[this._currentPhoto].style.display = "none";
    }
  
    showPhoto() {
      this._photos[this._currentPhoto].style.display = "block";
    }
  
    changeToSelectedPhoto(n) {
      this.hidePhoto();
      this._currentPhoto = n;
      this.showPhoto();
    }
  
    nextPhoto() {
      this.hidePhoto();
      this._currentPhoto < this._numPhotos - 1 ? this._currentPhoto++ : (this._currentPhoto = 0);
      this.showPhoto();
    }
  
    previousPhoto() {
      this.hidePhoto();
      this._currentPhoto > 0 ? this._currentPhoto-- : (this._currentPhoto = this._numPhotos - 1);
      this.showPhoto();
    }
  }
  
  const images = new Slider("slider");
  