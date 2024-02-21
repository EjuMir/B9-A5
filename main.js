let total = 0;
function mainSeatId(){
    const mainSeat = document.getElementById('main-seat');
    let arr = [];
    for(let i=0; i<=mainSeat.childNodes.length-1; i++){
        if(mainSeat.childNodes[i].id !== undefined){
        arr.push(mainSeat.childNodes[i].id);
        }

    }
   return arr;    
}


let mainSeatIds = mainSeatId();
let arr1 = [];
let unique = [];
let count = 0;
for(let i=0; i <= mainSeatIds.length-1; i++){
    let thisSeat = String(mainSeatIds[i]);
    document.getElementById(thisSeat).addEventListener('click', function(){
     arr1.push(thisSeat);
      arr1.forEach(element => {
        if(!unique.includes(element) && (unique.length>=0 && unique.length<=3)){
            unique.push(element);
            setBackgroundColor(element);
            count=count+1;
            setInnerText('seat-chosen',count);
            setInnerText('seat-left', getInnerText('seat-left')-1);
            ticketRow('seat-name',element);
             total += 550;
             totalPrice();
            if(unique.length > 3){
                maximumSeatsWarning('warning');
            }
        }
       
     });
    })
}
function maximumSeatsWarning(id){
    const p = document.getElementById(id);
    const para = document.createElement('p');
    para.innerText = "*you cannot select anymore seats"
    p.appendChild(para);
    para.style.color = 'red';
}

function setInnerText(id,value) {
   const text = document.getElementById(id);
   text.innerText = value; 
}
function getInnerText(id){
    const text = document.getElementById(id);
    const get = text.innerText;
    return get;
}

function ticketRow(id, value){
    const tb = document.getElementById(id);
    const tr = document.createElement('tr');
    tb.appendChild(tr);
    const td = document.createElement('td');
    td.innerText = value;
    tr.appendChild(td);
    const tdc = document.createElement('td');
    tdc.innerText = "Economy";
    tr.appendChild(tdc);
    const tdp = document.createElement('td');
    tdp.classList.add('price');
    tdp.innerText = 550;
    tr.appendChild(tdp);

}
function totalPrice(){
    let totalPrice =  document.getElementById('total-price');
       totalPrice.innerText = total; 
       
}