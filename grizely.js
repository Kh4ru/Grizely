class Page{
  constructor(title = "Page"){
    this.title = title
    document.title = this.title
  }
}
class Styledoc{
  constructor(font_color = "black",font_size="50px"){
    this.font_color = font_color;
    this.font_size = font_size;
    this.data = {
      "font_color":this.font_color,
      "font_size":this.font_size
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
    document.body.appendChild(node)
  }
}
let style = new Styledoc("black","50px")
let mon_titre = new Titre("Comment ça va ?",style)