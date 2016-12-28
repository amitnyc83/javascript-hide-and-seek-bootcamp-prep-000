function getFirstSelector(selector){
  return document.querySelector(selector)
      }
function nestedTarget(){
  return document.querySelector('#nested .target')
  }
function increaseRankBy(n){
  const lis =document.querySelectorAll('.ranked-list')
  for (let i = 0, l = lis.length; i < l; i++)
  {
    lis[i].innerHTML= (i + n).toString()
  }
  return lis
}
function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
