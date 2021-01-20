//5 Find the largest element of an array/
var marks=[12,23,34,45,56,56,67,86,332,444,111,2222,4555,67775,653323,3424,433,3332,3233,43,2];
var  max=marks[0];
for(var i=0; i<marks.length;i++){
    var element=marks[i];
    if(element>max){
        max=element;
    }
}
console.log("height value:", max);
