const stars=document.querySelectorAll(".star");
const output=document.querySelector("#output");

for(let i=0;i<stars.length;i++){
  console.log(stars[i]);
stars[i].starValue=(i+1);

["click","mouseover","mouseout"].forEach((e) => {
stars[i].addEventListener(e,starrate)
});

}


function starrate(e){
  const evetype= e.type;
  const starvalue=this.starValue;

  if(evetype==="click"){
      if(starvalue>1){
        output.innerHTML=`<h3>You have given <span> ${starvalue} star </span> to the product</h3>`;
  }
else {
output.innerHTML=`<h3>You have given <span>1 star</span> to the product</h3>`;
}

}

stars.forEach((item, i) => {
  if(evetype==="click"){
    if(i<starvalue){
      item.classList.add("orange");
    }
    else {
      item.classList.remove("orange");
    }
}

if(evetype==="mouseover"){
  if(i<starvalue){
    item.classList.add("yellow");
  }
  else {
    item.classList.remove("yellow");
  }
}

if(evetype==="mouseout"){
    item.classList.remove("yellow");}
});
}
