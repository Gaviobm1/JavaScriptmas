
function Size(width = 80, height = 60) {
    this.width = width;
    this.height = height;
  }
  
Size.prototype.resize = function (width, height) {
    this.width = width;
    this.height = height;
  }

function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}

Position.prototype.move = function (newX, newY) {
  this.x= newX;
  this.y = newY;
}

class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(sized) {
    if (sized.width < 0 || sized.height < 0) {
      this.size.width = 1;
      this.size.height= 1;
    } else if (this.position.x + sized.width > this.screenSize.width || this.position.y + sized.height > this.screenSize.height){
      this.size.width = this.screenSize.width - this.position.x;
      this.size.height = this.screenSize.height - this.position.y;
   } else {
     this.size.width = sized.width;
     this.size.height= sized.height;
  }
}

  move(pos) {
    if (pos.x < 0 || pos.y < 0) {
      this.position.x = 0;
      this.position.y = 0;
    } else if (pos.x + this.size.width > this.screenSize.width || pos.y + this.size.height > this.screenSize.width) {
      this.position.x = this.screenSize.width - this.size.width;
      this.position.y = this.screenSize.height - this.size.height;
    } else {
      this.position.x = pos.x;
      this.position.y = pos.y;
    }
}
}

function changeWindow(obj) {
  const newSize = new Size(400, 300);
  const newPos = new Position(100, 150);
  obj.resize(newSize);
  obj.move(newPos);
  return obj
}



