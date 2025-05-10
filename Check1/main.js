//問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
var cnt = 0;
var num = 0;
while (cnt <= numbers.length){
	if (numbers[cnt]%2==0){
		num = numbers[cnt];
		isEven()
	} 
	cnt++;
}
function isEven() {
    console.log(num + 'は偶数です');
}

//問2
class Car{
    //コンストラクタ
    constructor(gasorin,number) {
        this.gasorin = gasorin;
        this.number = number;
    }
    
    //中身メソッド（関数）作成
    getNumGas() {
        console.log('ガソリンは' + this.gasorin + 'です。ナンバーは'+ this.number + 'です');
    }
}

let gasnum = new Car('ハイオク','54697');
gasnum.getNumGas();
