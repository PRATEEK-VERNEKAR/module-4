var arrName=new Array();
arrName[0]="Janardhan";
arrName[1]="Rahul";
arrName[2]="prabha";
arrName[3]="jayadeep";
arrName[4]="Jyothi";
arrName[5]="Kamalesh";
arrName[6]="john";
arrName[7]="Kartik";
arrName[8]="bhuvan";
arrName[9]="James";
arrName[10]="Anderson";


arrName.forEach(element=>{
    if(element.charAt(0)==='J' || element.charAt(0)==='j'){
        console.log("\tGoodbye "+ element)    
    }
    else{
        console.log("\tHello "+ element)
    }
})