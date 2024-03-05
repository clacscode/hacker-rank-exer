// 1)
function aVeryBigSum(ar) {
	const sum = ar.reduce((acum, value) => Number(acum + value));
	return sum;
}

// 2)
function diagonalDifference0(arr) {
	let acum1 = 0;
	let acum2 = 0;
	let cursor = arr.length;

	for (let i = 0; i < arr.length; i++) {
		acum1 += arr[i][i];
	}

	for (let j = 0; j < arr.length; j++) {
		cursor--;
		acum2 += arr[j][cursor];
	}

	return Math.abs(acum1 - acum2);
}

function diagonalDifference(arr) {
	let primaryDiagonalSum = 0;
	let secondaryDiagonalSum = 0;
	let arrayLength = arr.length;

	for (let i = 0; i < arrayLength; i++) {
		primaryDiagonalSum += arr[i][i];
		secondaryDiagonalSum += arr[i][arrayLength - 1 - i];
	}

	return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);
}

const result = diagonalDifference([
	[1, 0, 4],
	[0, 2, 0],
	[5, 0, 3],
]);
// console.log(result);

// 3)
function plusMinus(arr) {
	let zero = 0;
	let possitive = 0;
	let negative = 0;
	let long = arr.length;

	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		if (element === 0) zero++;
		if (element > 0) possitive++;
		if (element < 0) negative++;
	}

	console.log(`${zero / long} - ${possitive / long} - ${negative / long}`);
}
// plusMinus([-2, -2, 1, 0, 0, -2]);

// 4)
function compareTriplets(a, b) {
	let scoreA = 0;
	let scoreB = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] > b[i]) scoreA++;
		if (a[i] < b[i]) scoreB++;
	}

	console.log("A", scoreA);
	console.log("B", scoreB);
}
// compareTriplets([7, 7, 2], [2, 2, 2]);

// 5)
function staircase(n) {
	let symbol = "#";
	let spaces = " ";
	for (let i = 1; i <= n; i++) {
		console.log(spaces.repeat(n - i) + symbol.repeat(i));
	}
}
//staircase(6);

// 6)
function miniMaxSum(arr: number[]): void {
	const maximo: number = Math.max(...arr);
	const minimo: number = Math.min(...arr);

	if (maximo === minimo) {
			const suma = arr.reduce((acum, value) => acum + value, 0);
			const resultado = suma - maximo;
			console.log(resultado, resultado);
	} else {
			const arrSinMax: number[] = arr.filter(numero => numero !== maximo)
			const calculateMin: number = arrSinMax.reduce((acum, value) => acum + value)

			const arrSinMin: number[] = arr.filter(numero => numero !== minimo);
			const calculateMax: number = arrSinMin.reduce((acum, value) => acum + value);

			console.log(calculateMin, calculateMax)
	}
}

// 7)
function birthdayCakeCandles(candles: number[]): number {
	const maximo: number = Math.max(...candles);
	let count: number = 0;

	for (let i = 0; i < candles.length; i++) {
			if (candles[i] === maximo) {
					count++;
			}
	}
	return count;
}

// 8)
function timeConversion(s: string): string {
	const arrString: string[] = s.split(':');

	let hora: string = arrString[0];
	const minutos: string = arrString[1];
	const segundos: string = arrString[2].replace(/(PM|AM)$/, '');

	const isPM: boolean = arrString[2].includes('PM');
	const isAM: boolean = arrString[2].includes('AM');

	hora = hora === '12' && isAM
			? '00'
			: hora;

	if (isPM && hora !== '12') {
			return `${Number(hora) + 12}:${minutos}:${segundos}`;
	}

	return `${hora}:${minutos}:${segundos}`;

}

// string.padStar -> Rellena una longitud con los parametros dados (cantidad, relleno)

// Refactor
function timeConversion(s: string): string {
    
	const arrString: string[] = s.split(':');

	let [hora, minutos, segundos] = s.split(':');
	
	const isPM: boolean = segundos.includes('PM');
	const isAM: boolean = segundos.includes('AM');
	
	segundos = segundos.replace(/(PM|AM)$/, '');

	hora = hora === '12' && isAM
			? '00'
			: hora;

	if (isPM && hora !== '12') {
			return `${Number(hora) + 12}:${minutos}:${segundos}`;
	}

	return `${hora}:${minutos}:${segundos}`;

}

