function sumNumbers(num1, num2) {
    return num1 + num2;

}

console.log(sumNumbers(40, 20));

//array loop
for(let i = 0;i<10; i++){
    console.log(i);
}

// const array = ["a","b","c","d",5,6,7,8,9,10];

// for(i in array){
//     console.log(i);
// }

// console.log(array[5]);


//nested array
// const array =[1,2,3,4,5,6,["a",5,69],7,8,[8,9,["a0","b2"]]];
// for(i in array){
//         console.log("array index:", i);
//     }
//     // console.log(array);

//     for (i of array){
//         console.log("array element: ", i)
//     }
   
    //ES6
    //arrow function

    function somefunction(){
        console.log();
    }

    const arrowfunction = ( data,args) =>{
        console.log(data, args);
    }
  //anonomyous function
    ()=>{}
     const name = "john";
     const age = 23;
     const isMarried = false;

     const arrowfunction2 = ( name,age,isMarried) =>{
        console.log(`My name is ${name}, My age is ${age},and am i even married?${isMarried}`); //templete leterals eg:
     }

     arrowfunction2 ( name,age,isMarried);
//destructuring
     const array1 =[1,2,3,4,5];

     const person={

        objName:"sandhya",
        objAge: 23,
        objEmail:"sandhyamajhi77@gmail.com",

     };

     console.log(array[2]);
     console.log(person.objAge);

     const {objName,objAge,objEmail}= person;
     console.log(objName,objAge,objEmail);

     const[a,b,c,d,e] = array;
     console.log(c);

     //spread operator
     const array2 = [...array,6,7,8,9,10];
     console.log(array2);

     const person2 = {...person};
     console.log(person2);

     //promises
     const fs = require("fs");
     //callback
     fs.readFile("./file.text","utf-8", (err,data)=>{
        if(data){
            console.log(data);

        }else{
            console.log(err);
        }
        

     });

     let promise = new promise((resolve,reject)=>{
        fs.readFile("./file.txt","utf-8",(errr,data)=>{
            if(resolve)resolve(data);
            else reject(err);
        })
    });

    promise.then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    });

const readTxtFile = async ()=>{
    const data = await fs.promise.readFile("./File.txt","utf-8");

    try{
    console.log(data);

    }catch(err){
        console.log(err);
    }
};

  readTxtFile();

     