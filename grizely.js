let grizely_version = "0.1"
let grizely_credits = "Developped by Alexis Senepart"
class Page{
  constructor(title = "Page",style = {}){
    this.style = style
    this.title = title
    document.title = this.title
    document.body.style.backgroundColor = style["background_color"]
  }
}
class Styledoc{
  constructor(font_color = "black",font_size="",backgroundColor = ""){
    this.font_color = font_color;
    this.font_size = font_size;
    this.backgroundColor = backgroundColor;
    this.data = {
      "font_color":this.font_color,
      "font_size":this.font_size,
      "background_color":this.backgroundColor
    }
    return this.data
  }
}
class Titre{
  constructor(text = "test",style={
    "font-color":"black"
  }){
    this.text = text;
    this.style = style;
    let node = document.createElement("h1")
    node.innerHTML = text
    node.style.color = style["font_color"]
    node.style.fontSize = style["font_size"]
    node.style.backgroundColor = style["background_color"]
    document.body.appendChild(node)
  }
}