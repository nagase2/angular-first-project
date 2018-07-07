
function print(val) {
  let el = document.createElement('p')
  el.innerText = val
  document.body.appendChild(el)
 // document.write('ssss')
}

const observable = Rx.Observable.create(observer => {
  observer.next('hellow')
  observer.next('world')
})

observable.subscribe(val => print(val))

var myarea = document.getElementById('myarea')

const clicks = Rx.Observable.fromEvent(document, 'mousemove')
clicks.subscribe(click => {
  console.log(click.x, click.y)
  myarea.innerHTML=click.x +" "+click.y 
})

var myarea2 = document.getElementById('myarea2')
const clicks2 = Rx.Observable.fromEvent(myarea2, 'click')
clicks2.subscribe(click => console.log(click.x, click.y))

