//การสร้างออบเจ็กต์
new Vue({
    el:"#Advertising-lose-weight", //อ้างอิงid
    data:{ //ข้อมูลที่จะนำมาแสดง
        sentence: "This website will help you to improve to lose weight",
        navbar1: "Exercise",
        navbar2: "Food",
        navbar3: "Body Measurement",
        eandf: "Exercise & Food",
        firstmeasure: "First, Let's check body measurement",
        filthebl: "Please fill in the blanks",
        fname: "Firstname :",
        lname: "Lastname :",
        age: "Age :",
        gender: "Gender : ",
        weight: "Your weight : ",
        height: "Your height : ",
        result: "Your BMI are ::", 
        steptwo: "Second, Let's see your BMI that in any rate",
        bmichart: "This is BMI chart"
    },
    methods:{ //สร้างmethodเพื่อเป็นการกำหนดค่าให้ข้อมูลให้กับตัวใหม่ได้
        getSentence: function(){
            return this.sentence
        },
        setSentence: function(n){
            return this.sentence=n;
        }
    }
   
})
     