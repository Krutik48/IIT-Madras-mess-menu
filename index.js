var today = new Date();
var hours = today.getHours();
var day = today.getDay();
var selector = document.getElementById("selector");

if(hours>=5 && hours<12){
    document.getElementById("greeting").innerText = "Hello, Good Morning";
}
else if(hours>=12 && hours<4){
    document.getElementById("greeting").innerText = "Hello, Good Afternoon";
}
else if(hours>=4 && hours<6){
    document.getElementById("greeting").innerText = "Hello, Good Evening";
}
else{
    document.getElementById("greeting").innerText = "Hello, Good Night";
}

const oddmenu = [[["Breakfast-Time","<li>Brown & White Bread<li>Pineapple Jam<li>Corn flakes (Veg)<li>Tea/Coffee/Milk<li>Boiled Black Chana Sprouts<li>Mixed Paratha<li>Curd<li>Green Chutney & Sauce"],["Lunch-Time","<li>Veg Biryani (Basmati)<li>Phulka<li>Dal Fry<li>Mutter Paneer<li>Icecream cup(1)Corneto(3)<li>Boondi Raita<li>Fryums<li>Mixed Salad<li>Mixed Veg Pickle"],["Night-Time","<li>Plain Rice<li>Bhatura(1)/Methi Poon(3)<li>Chole(1)/Aloo Dum(3)<li>Masoor Dal<li>Masala Papad<li>Salad<li>Mango Pickle<li>Seasonal Fruit"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Mango Jam<li>OatMeal (Veg)<li>Tea/Coffee/Milk<li>Green Mong Sprouts<li>Rava Khichdi (1)<li>Curd<li>Coconut Chutney"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Dal Tadka<li>Carrot Beans Dry<li>Soyabean Chunk Curry<li>Curd<li>Papad<li>Salad<li>Lemon Pickle"],["Night-Time","<li>Mixed Veg Fried Rice<li>Methi Chapati<li>Dal Fry<li>Mix Veg(1)/Gobhi(3)<li>Manchurian<li>Fryums<li>Salad<li>Mix Veg Pickle<li>Banana"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Mixed fruit Jam<li>Corn flakes (Veg)<li>Tea/Coffee/Milk<li>Peanut Sundal<li>Poha + Lemon&Onion + Jalebi<li>Curd<li>Tamrind Chutney"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Rajma Dal<li>Karela Bhujia Crispy<li>Mixed Saag <li>Fryums<li>Lassi<li>Salad<li>Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Dal Makhani<li>Aloo Bhindi Bhujiya<li>Papad<li>Salad<li>Pickle<li>Pineapple Keshri(1)<li>Kheer(3)"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Pineapple Jam<li>Corn flakes (Veg)<li>Tea/Coffee/Milk<li>Black Chnana Sprout<li>Daliya(1)/Macroni(3)<li>Curd<li>Chutney(1)/Ketchup(3)"],["Lunch-Time","<li>Peas Pulao<li>Phulka<li>Dal Fry<li>Aloo Gobhi Mutter Dry<li>Kadhai Paneer<li>Curd<li>Papad<li>Salad<li>Mango Pickle"],["Night-Time","<li>Plain Rice<li>Mix Veg Paratha<li>Rajma Masala<li>Green Chutney & Curd<li>Masala Papad<li>Salad<li>Lemon Pickle<li>WaterMelon"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Strawberry Jam<li>OatMeal (Veg)<li>Tea/Coffee/Milk<li>White Channa Chaat<li>Mix Veg Uthappam<li>Curd<li>Coconut Chutney + Sambhar"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Green Moong Dal<li>Red Pumpkin Chana<li>Aloo Long Beans Dry<li>Curd<li>Fryums<li>Mixed Salad<li>Mixed Veg Pickle"],["Night-Time","<li>Ghee Rice (Basmati)<li>Phulka<li>Moong Dal<li>Mix Veg Dry<li>Fryums<li>Salad<li>Mix Veg Pickle<li>Moong Dal Halwa(1)<li>Parapu Payasam(3)"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Mango Jam<li>OatMeal (Veg)<li>Tea/Coffee/Milk<li>Boiled Moong Sprouts<li>Idly + Vada<li>Curd<li>Coconut Chutney + Sambhar"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Dal Tadka<li>Brinjal Bharta<li>Palak Paneer<li>Curd<li>Papad<li>Salad<li>Lemon Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Dal Fry<li>Raw Banana Karamani<li>Masala Papad<li>Salad<li>Mango Pickle<li>MuskMelon"]],
                    [["Breakfast-Time","<li>Brown & White Bread<li>Mixed fruit Jam<li>Corn flakes (Veg)<li>Tea/Coffee/Milk<li>Mixed Sprouts<li>Plain Dosa + Aloo Masala<li>Curd<li>Green Chutney & Sauce"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Dal Makhani<li>Cabbage Mutter Dry<li>Bhindi Do Pyaza<li>Curd<li>Papad<li>Salad<li>Mango Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Palak Dal<li>Tava Mix Veg Dry<li>Papad<li>Salad<li>Lemon Pickle<li>Banana+Bournvita Milk"]]];

const evenmenu = [[["Breakfast-Time","<li>Brown & White Bread<li>Pineapple Jam<li>Corn flakes (Veg)<li>Tea/Coffee/Milk<li>Boiled Black Chana Sprouts<li>Mixed Paratha<li>Curd<li>Green Chutney & Sauce"],["Lunch-Time","<li>Veg Biryani (Basmati)<li>Phulka<li>Dal Fry<li>Mutter Paneer<li>Icecream cup(1)Corneto(3)<li>Boondi Raita<li>Fryums<li>Mixed Salad<li>Mixed Veg Pickle"],["Night-Time","<li>Plain Rice<li>Bhatura(1)/Methi Poon(3)<li>Chole(1)/Aloo Dum(3)<li>Masoor Dal<li>Masala Papad<li>Salad<li>Mango Pickle<li>Seasonal Fruit"]],
                    [["Breakfast-Time","<li>OatMeal (Veg)<li>Green Mong Sprouts<li>Moong Dal Cheela<li>Tomato Chutney"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Dal Tadka<li>Carrot Beans Dry<li>Soyabean Chunk Curry<li>Curd<li>Papad<li>Salad<li>Lemon Pickle"],["Night-Time","<li>Mixed Veg Fried Rice<li>Methi Chapati<li>Dal Fry<li>Mix Veg(1)/Gobhi(3)<li>Manchurian<li>Fryums<li>Salad<li>Mix Veg Pickle<li>Banana"]],
                    [["Breakfast-Time","<li>Peanut Sundal<li>Poha +Lemon&Onion<li>Jalebi<li>Tamrind Chutney"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Rajma Dal<li>Karela Bhujia Crispy<li>Mixed Saag <li>Fryums<li>Lassi<li>Salad<li>Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Dal Makhani<li>Aloo Bhindi Bhujiya<li>Papad<li>Salad<li>Pickle<li>Pineapple Keshri(1)<li>Kheer(3)"]],
                    [["Breakfast-Time","<li>White Channa Chaat<li>Maggi Dry"],["Lunch-Time","<li>Peas Pulao<li>Phulka<li>Dal Fry<li>Aloo Gobhi Mutter Dry<li>Kadhai Paneer<li>Curd<li>Papad<li>Salad<li>Mango Pickle"],["Night-Time","<li>Plain Rice<li>Mix Veg Paratha<li>Rajma Masala<li>Green Chutney & Curd<li>Masala Papad<li>Salad<li>Lemon Pickle<li>WaterMelon"]],
                    [["Breakfast-Time","<li>Pav Bhaji<li>Black Chnana Sprout"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Green Moong Dal<li>Red Pumpkin Chana<li>Aloo Long Beans Dry<li>Curd<li>Fryums<li>Mixed Salad<li>Mixed Veg Pickle"],["Night-Time","<li>Ghee Rice (Basmati)<li>Phulka<li>Moong Dal<li>Mix Veg Dry<li>Fryums<li>Salad<li>Mix Veg Pickle<li>Moong Dal Halwa(1)<li>Parapu Payasam(3)"]],
                    [["Breakfast-Time","<li>Oatmeal (Veg)<li>Boiled Moong Sprouts<li>Kachori(2)Semiya Upma(4)<li>Aloo Sabji(2)Coconut<li>Chutney(4)"],["Lunch-Time","<li>Plain Rice<li>Phulka<li>Moong Dal<li>Mixed Sag+Badi<li>Aloo Muttor Curry<li>Curd<li>Papad<li>Salad<li>Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Dal Fry<li>Raw Banana Karamani<li>Masala Papad<li>Salad<li>Mango Pickle<li>MuskMelon"]],
                    [["Breakfast-Time","<li>Mixed Sprouts<li>Poori<li>Chole"],["Lunch-Time","<li>Moong Dal Khichdi<li>Phulka<li>Aloo Chokha (Musturd Oil)<li>Red Pumpkin black Chana<li>Curd<li>Papad<li>Salad<li>Pickle"],["Night-Time","<li>Plain Rice<li>Phulka<li>Palak Dal<li>Tava Mix Veg Dry<li>Papad<li>Salad<li>Lemon Pickle<li>Banana+Bournvita Milk"]]];


if(hours>=10 && hours<3){
    document.getElementById("card-title").innerText = oddmenu[day][1][0];
    document.getElementById("card-text").innerHTML = oddmenu[day][1][1];
}
else if(hours>=3 && hours<10){
    document.getElementById("card-title").innerText = oddmenu[day][2][0];
    document.getElementById("card-text").innerHTML = oddmenu[day][2][1];
}
else{
    document.getElementById("card-title").innerText = oddmenu[day][0][0];
    document.getElementById("card-text").innerHTML = oddmenu[day][0][1];
    
}

selector.onchange = function(){
    if(selector.value==1){
        if(hours>=10 && hours<3){
            document.getElementById("card-title").innerText = oddmenu[day][1][0];
            document.getElementById("card-text").innerHTML = oddmenu[day][1][1];
        }
        else if(hours>=3 && hours<10){
            document.getElementById("card-title").innerText = oddmenu[day][2][0];
            document.getElementById("card-text").innerHTML = oddmenu[day][2][1];
        }
        else{
            document.getElementById("card-title").innerText = oddmenu[day][0][0];
            document.getElementById("card-text").innerHTML = oddmenu[day][0][1];
            
        }
    }
    else{
        if(hours>=10 && hours<3){
            document.getElementById("card-title").innerText = evenmenu[day][1][0];
            document.getElementById("card-text").innerHTML = evenmenu[day][1][1];
        }
        else if(hours>=3 && hours<10){
            document.getElementById("card-title").innerText = evenmenu[day][2][0];
            document.getElementById("card-text").innerHTML = evenmenu[day][2][1];
        }
        else{
            document.getElementById("card-title").innerText = evenmenu[day][0][0];
            document.getElementById("card-text").innerHTML = evenmenu[day][0][1];
        }
    }
}
                    




