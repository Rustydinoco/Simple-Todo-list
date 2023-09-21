const todo =document.querySelector('#TODO')
function add(){
    
    // mengambil nilai teks
    let newText=document.querySelector('#Newtext')
    // menyimpannya di list
    let NewList="<li ><span onclick='toggle(this)'>" + newText.value + "</span>"+
                "<span onclick='remove(this)'>[X]</span>"+"</li>"
    
    
    todo.insertAdjacentHTML("afterbegin",NewList)
    // menghilangtkan nilai
    newText.value= ""
}
function toggle(el){
el.classList.toggle('done')    

}
function remove(el){
    el.parentElement.remove()
}

preventdefault()