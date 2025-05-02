console.info("Thank you for using GrizelY !!")
console.info("GrizelY v0.2 by A.Senepart")
class Page{
  constructor(title = "Page",style = {}){
    this.style = style
    this.title = title
    document.title = this.title
    document.body.style.backgroundColor = style["background_color"]
  }
}
class Styledoc{
  constructor(font_color = "black",font_size="",backgroundColor = "",height="",width=""){
    this.height = height;
    this.width = width;
    this.font_color = font_color;
    this.font_size = font_size;
    this.backgroundColor = backgroundColor;
    this.data = {
      "font_color":this.font_color,
      "font_size":this.font_size,
      "background_color":this.backgroundColor,
      "height":this.height,
      "width":this.width
    }
    return this.data
  }
}
class Titre{
  constructor(order=1,text = "test",style={
    "font-color":"black"
  }){
    let node;
    this.order = order;
    this.text = text;
    this.style = style;
    switch(this.order){
      case 2:
        node = document.createElement("h2")
        break;
      case 3:
        node = document.createElement("h3")
        break
      case 4:
        node = document.createElement("h4")
        break;
      case 5:
        node = document.createElement("h5")
        break;
      case 6:
        node = document.createElement("h6")
        break;
      default:
        node = document.createElement("h1")
        break;
    }
    node.innerHTML = text
    node.style.color = style["font_color"]
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    document.body.appendChild(node)
  }
}
class Paragraph{
  constructor(text = "test",style={
    "font-color":"black"
  }){
    this.text = text;
    this.style = style;
    let node = document.createElement("p")
    node.innerHTML = text
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.style.color = style["font_color"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    document.body.appendChild(node)
  }
}

class Link{
  constructor(text = "test",url="/",style={
    "font-color":"black"
  }){
    this.url = url;
    this.text = text;
    this.style = style;
    let node = document.createElement("a")
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.innerHTML = text
    node.href = this.url
    node.style.color = style["font_color"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    document.body.appendChild(node)
  }
}
class Image{
  constructor(image="/",style={
    "font-color":"black"
  }){
    this.image = image;
    this.style = style;
    let node = document.createElement("img")
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.src = this.image
    
    document.body.appendChild(node)
  }
}
class Button{
  constructor(text="",action="",style={
    "font-color":"black"
  }){
    this.style = style;
    this.text = text;
    this.action = action;
    let node = document.createElement("button")
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.style.color = style["font_color"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    node.innerHTML = text;

    document.body.appendChild(node)
  }
}
class Input{
  constructor(text="",action="",style={
    "font-color":"black"
  }){
    this.style = style;
    this.text = text;
    this.action = action;
    let node = document.createElement("input")
    node.style.height = style["height"]
    node.style.width = style["width"]
    node.style.color = style["font_color"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    node.placeholder = this.text;
    document.body.appendChild(node)
  }
}