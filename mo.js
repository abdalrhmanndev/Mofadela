 
const tb =[
   {"name":"تحضيرية" , "num":2330},
   {"name":" تحضيرية موازي"  ,num:2310},
   {name:"الهندسة الطبية" ,num:2260},
   {name:"كلية الهندسة الحيوية" , num:2000},
   {name:"المعهد تعويضات سنية" , num:2080},
   {name:"كلية العلوم الصحية" , num:2000},
   {name:"كلية الكيمياء" , num:1700},
   {name:"كلية الجلوجيا" , num:1700},
   {name:"كلية الطب البيطري" , num:1700},
   {name:"كلية الزراعة" , num:1700},
   {name:"كلية العلوم " , num:1590},
   {name:"كلية علم الاجتماع" , num:1450},
   {name:"المعهد الزراعي" , num:1160},
   {name:"المعهد البيطري" , num:1160},
   {name:"المعهد الصحي" , num:1160},
   {name:"مدرسة التمريض" , num:1160},  
   
   ]
   
const teach =[
   {"name":"تحضيرية" , "num":2330},
   {"name":" تحضيرية موازي"  ,num:2310},
   {name:"الهندسة الغذائية" , num:2000},
   {name:"كلية العلوم الصحية" , num:2000 },
   {name:"تعويضات سنية" , num:2080},
   {name:"الاعلام" , num:1970},
   {name:"كلية الحقوق" , num:1870},
   {name:"كلية العلوم السياسية" , num:1700},
   {name:"كلية الاحصاء الرياضي" , num:1700 },
   {name:"كلية السياحة" , num:1590},
   {name:"كلية التربية" , num:1450},
   {name:"كلبة الأداب" , num:1450},
   {name:"كلية الشريعة" , num:1440},
   {name:"المعهد المتوسط للشرعية" , num:1250},
   {name:"كلية التربية الرياضية" , num:1200},
   {name:"المعهد الفندقي" , num:1160},
   {name:"معهد الحاسوب" , num:1160},
   {name:"المعهد القانوني" , num:1160},
   
   ]
   
   const cs =[
   {"name":"الهندسة المعلوماتية" , "num":2260 },
   {"name":"هندسة الحاسوب" , num: 2190},
   {name:"هندسة الانصالات" , num:2190 },
   {name:"الهندسة الكهربائية" , num:2160 },
   {name:"هندسة المكاترونيكس" , num:2120 },
   {name:"الكلية التطبيقية" , num:2000 },
   {name:"كلية التحكم الألي" , num:2000 },
   {name:"كلية الاقتصاد" , num:1870 },
   {name:"كلية الاحصاء الرياضي" , num:1700 },
   {name:"كلية الفيزياء" , num:1590 },
   {name:"كلية الرياضيات" , num:1590 },
   {name:"كلية العلوم الادارية" , num:1250 },
   {name:"معهد الحاسوب" , num:1160 },
   {name:"المعهد الاحصائي" , num:1160 },
   {name:"المعهد المالي" , num:1160 },
   
   ]
   
   
   const goe=[
   {"name":"الهندسة الطبية" , "num":2260},
   {"name":"الهندسة المدنية" , num:2190},
   {name:"هندسة الاتصالات" , num:2190},
   {name:"هندسة الالكترونات" , num:2160},
   {name:"هندسة المكاترونيكس" , num:2120 },
   {name:"الندسة البتروكيمائية" , num:2080},
   {name:"الهندسة الكيميائية" , num:2080},
   {name:"هندسة البترول" , num:2080},
   {name:"الهندسة المعمارية" , num:2000},
   {name:"الهندسة الكهرباثية" , num:2000},
   {name:"هندسة الغزل" , num:1970},
   {name:"المعهد النفط" , num:1970},
   {name:"الهندسة المكانيكية" , num:1870},
   {name:"كلية الرياضيات" , num:1870 },
   {name:"كلية الكيمياء" , num:1700},
   {name:"كلية الاحصاء الرياضي" , num:1700 },
   {name:"كلية الفيزياء" , num:1590 },
   {name:"كلية الجولوجيا" , num:1450 },
   {name:"المعهد الهندسي" , num:1160},
   {name:"المعهد البحري" , num:1160},
   {name:"المعهد الكهربائي" , num:1160},
   {name:"المعهدالصناعي" , num:1160},
   
   ]

   let table = document.getElementById('table');
   
   // table.style.display="block";
        
let input =document.getElementById('total');


      let but = document.getElementById('but');  
   but.addEventListener('click',()=>{

   // alert(input.value.length);
     
   
if(input.value.length==4 && 2400<=input.value<=1160){

  
//    let load =document.getElementById('load');

//    // alert(input.value);
   
 
//    load.style.visibility='visible';  
 
 
//    setTimeout(()  =>{
 
//     load.style.display='none';  
//    table.style.visibility="visible";
 
//  } ,7000);
   


      // let select =selectedValue1+selectedValue2+selectedValue3 +selectedValue4 +selectedValue5 +selectedValue6 
      // +selectedValue7 +selectedValue8 +selectedValue9 +selectedValue10 +selectedValue11 +selectedValue12;
      
      
      var selectedValue1 = document.querySelector('input[name="one"]:checked').value;
      var selectedValue2 = document.querySelector('input[name="tow"]:checked').value;
      var selectedValue3 = document.querySelector('input[name="three"]:checked').value;
      var selectedValue4 = document.querySelector('input[name="four"]:checked').value;
      var selectedValue5 = document.querySelector('input[name="five"]:checked').value;
      var selectedValue6 = document.querySelector('input[name="six"]:checked').value;
      var selectedValue7 = document.querySelector('input[name="seven"]:checked').value;
      var selectedValue8 = document.querySelector('input[name="eight"]:checked').value;
      var selectedValue9 = document.querySelector('input[name="nine"]:checked').value;
      var selectedValue10= document.querySelector('input[name="ten"]:checked').value;
      var selectedValue11= document.querySelector('input[name="eleven"]:checked').value;
      var selectedValue12= document.querySelector('input[name="twelve"]:checked').value;
      
      // alert(selectedValue1+selectedValue2+selectedValue3 +selectedValue4 +selectedValue5 +selectedValue6 
      // +selectedValue7 +selectedValue8 +selectedValue9 +selectedValue10 +selectedValue11 +selectedValue12)
      
      let select = selectedValue1+selectedValue2+selectedValue3 +selectedValue4 +selectedValue5 + selectedValue6
        +selectedValue7 +selectedValue8 +selectedValue9 +selectedValue10 +selectedValue11 +selectedValue12;
      alert(select)
      
      if(select.length = 12){

         
   let load =document.getElementById('load');

   // alert(input.value);
   
 
   load.style.visibility='visible';  
   document.getElementById('but').style.display='none';
 
 
   setTimeout(()  =>{

    load.style.display='none';  
   table.style.visibility="visible";
 
 } ,7000);
   

      
      //alert(select.includes('d'));
      var a = (select.match(/1/g) || []).length;
      var b = (select.match(/2/g) || []).length;
      var c = (select.match(/3/g) || []).length;
      var d = (select.match(/4/g) || []).length;
      
      // alert(a);
      // alert(b);
      // alert(c);
      // alert(d);
      
      
      if(a>=b && a>=c && a>=d ){
         
       
    //     table.style.display="block";
         
   let table =document.getElementById('table');
  
   
const filtertb =tb.filter((item)=>{
   return item.num <= input.value ;
})

filtertb;

   for(var i=0 ; i<filtertb.length ;i++){
   
   // 1
   
   
         let tr =document.createElement('tr');
   
         let td1 =document.createElement('td');
         let hash_txt = document.createTextNode(i+1);
         td1.appendChild(hash_txt);
         tr.appendChild(td1);
   
         // 2
   
         let td2 =document.createElement('td');
         let name_txt = document.createTextNode(filtertb[i].name);
         td2.appendChild(name_txt);
         tr.appendChild(td2);
   
         // 3
   
         let td3 =document.createElement('td');
         let num_txt = document.createTextNode(filtertb[i].num);
         td3.appendChild(num_txt);
         tr.appendChild(td3);
   
    
   table.appendChild(tr);   
           //let ins = teach;
   }
   

   


         }else if(b>=a && b>=c && b>=d ){

          //  table.style.display="block";

   let table =document.getElementById('table');

   // table.style.visibility="visible";
   
   const filterteach =teach.filter((item)=>{
      return item.num <= input.value ;
   })
   
   filterteach;
   
      for(i=0 ; i<filterteach.length ;i++){
      
      // 1
      
      
            let tr =document.createElement('tr');
      
            let td1 =document.createElement('td');
            let hash_txt = document.createTextNode(i+1);
            td1.appendChild(hash_txt);
            tr.appendChild(td1);
      
            // 2
      
            let td2 =document.createElement('td');
            let name_txt = document.createTextNode(filterteach[i].name);
            td2.appendChild(name_txt);
            tr.appendChild(td2);
      
            // 3
      
            let td3 =document.createElement('td');
            let num_txt = document.createTextNode(filterteach[i].num);
            td3.appendChild(num_txt);
            tr.appendChild(td3);
      
       
      table.appendChild(tr);
      
               }
          
         }
         





      else if(c>=a && c>=b && c>=d ){
         
         // table.style.display="block";
  
         let table =document.getElementById('table');
         // table.style.visibility="visible";
   
         const filtercs =cs.filter((item)=>{
            return item.num <= input.value ;
         })
         
         filtercs;
         
            for(i=0 ; i<filtercs.length+1 ;i++){
            
            // 1
            
            
                  let tr =document.createElement('tr');
            
                  let td1 =document.createElement('td');
                  let hash_txt = document.createTextNode(i+1);
                  td1.appendChild(hash_txt);
                  tr.appendChild(td1);
            
                  // 2
            
                  let td2 =document.createElement('td');
                  let name_txt = document.createTextNode(filtercs[i].name);
                  td2.appendChild(name_txt);
                  tr.appendChild(td2);
            
                  // 3
            
                  let td3 =document.createElement('td');
                  let num_txt = document.createTextNode(filtercs[i].num);
                  td3.appendChild(num_txt);
                  tr.appendChild(td3);
            
             
            table.appendChild(tr);
            
               
      
                     }
              
                    
      
          }


          else if(d>=a && d>=b && d>=c ){

           // table.style.display="block";
      
   let table =document.getElementById('table');
   // table.style.visibility="visible";
   
   const filtergoe =goe.filter((item)=>{
      return item.num <= input.value ;
   })
   
      filtergoe;
   
      for(i=0 ; i<filtergoe.length ;i++){
      
      // 1
      
      
            let tr =document.createElement('tr');
      
            let td1 =document.createElement('td');
            let hash_txt = document.createTextNode(i+1);
            td1.appendChild(hash_txt);
            tr.appendChild(td1);
      
            // 2
      
            let td2 =document.createElement('td');
            let name_txt = document.createTextNode(filtergoe[i].name);
            td2.appendChild(name_txt);
            tr.appendChild(td2);
      
            // 3
      
            let td3 =document.createElement('td');
            let num_txt = document.createTextNode(filtergoe[i].num);
            td3.appendChild(num_txt);
            tr.appendChild(td3);
      
       
      table.appendChild(tr);
      
               }
               
         }
        
   }else{alert('تأكد من ادخال جميع البيانات المطلوبة');
}
      }else{
         alert('ادخل مجموعك بشكل صحيح (4 خانات) ')
      }
   
      });
      
   
   
   // b_table(tb);
   
   // function b_table(data){
   //    let table = document.getElementById("table");
      
   //    for(var i=0 ; i<data.length ; i++){
   
      
   //       var row =  ` <tr>
            
   //          <td>${data[i].name}</td>
   //          <td>${data[i].num}</td>
   //           </tr> `
         
   //          alert(row);
   //       table.innerHTML += row;
   //    }                 
         
   // 
   
   // let table =document.getElementById('table');

   // for(i=0 ; i<tb.length ;i++){
   
   // // 1
   
   //       let tr =document.createElement('tr');
   
   //       let td1 =document.createElement('td');
   //       let hash_txt = document.createTextNode(i+1);
   //       td1.appendChild(hash_txt);
   //       tr.appendChild(td1);
   
   //       // 2
   
   //       let td2 =document.createElement('td');
   //       let name_txt = document.createTextNode(tb[i].name);
   //       td2.appendChild(name_txt);
   //       tr.appendChild(td2);
   
   //       // // 3
   
   //       let td3 =document.createElement('td');
   //       let num_txt = document.createTextNode(tb[i].num);
   //       td3.appendChild(num_txt);
   //       tr.appendChild(td3);
   
    
   // table.appendChild(tr);
   
         // }
   
         



   // let table =document.getElementById('table');

   // for(i=0 ; i<tb.length ;i++){
   
   // // 1
   
   //       let tr =document.createElement('tr');
   
   //       let td1 =document.createElement('td');
   //       let hash_txt = document.createTextNode(i+1);
   //       td1.appendChild(hash_txt);
   //       tr.appendChild(td1);
   
   //       // 2
   
   //       let td2 =document.createElement('td');
   //       let name_txt = document.createTextNode(tb[i].name);
   //       td2.appendChild(name_txt);
   //       tr.appendChild(td2);
   79
   //       // // 3
   
   //       let td3 =document.createElement('td');
   //       let num_txt = document.createTextNode(tb[i].num);
   //       td3.appendChild(num_txt);
   //       tr.appendChild(td3);
   
    
   // table.appendChild(tr);
   
   //       }
   