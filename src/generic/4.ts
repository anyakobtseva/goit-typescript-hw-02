/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<{title: string}> {
  pageInfo () {
    console.log(this.props.title);
  }
}

const page: Page = new Page({ title: 'blbla'})

page.pageInfo()
