// 接口继承类
class Control {
  private state: any
}

interface SelectableControl extends Control{
  select():void
}

class Button extends Control implements SelectableControl{
  select(){

  }
}

class TextBox extends Control{
  select(){

  }
}

// wrong
// class ImageC implements SelectableControl{
//   select(){

//   }
// }