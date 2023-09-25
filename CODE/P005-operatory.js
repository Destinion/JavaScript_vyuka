//Operátory v JavaScriptu
//Operátory jsou základním nástrojem pro práci s daty v JavaScriptu.
//Operátory se dělí na:
//1. Aritmetické operátory
    let x = 5;
    let y = 2;
    //sčítání
    let z = x + y;
    console.log(z);

    //odčítání
    z = x - y;
    console.log(z);

    //násobení
    z = x * y;
    console.log(z);

    //dělení
    z = x / y;
    console.log(z);

    //modulo
    z = x % y;
    console.log(z);

//2. Přiřazovací operátory
//Přiřazovací operátory slouží k přiřazení hodnoty do proměnné.
//Přiřazovací operátory se dělí na:
    //I. Přiřazení hodnoty
    x = 10;
    x += 5;
    console.log(x);

    //II. Přiřazení hodnoty a zároveň jejího zvětšení o 1
    x++;
    console.log(x);

    //III. Přiřazení hodnoty a zároveň jejího zmenšení o 1
    x--;
    console.log(x);


//3. Porovnávací operátory
//Porovnávací operátory slouží k porovnání dvou hodnot.
//Porovnávací operátory se dělí na:
    //I. Porovnání hodnoty
    x = 5;
    y = 2;
    console.log(x == y);

    //II. Porovnání hodnoty a jejího typu
    console.log(x === y);

    //III. Porovnání hodnoty a jejího typu
    console.log(x !== y);

    //IV. Porovnání hodnoty a jejího typu
    console.log(x > y);

    //V. Porovnání hodnoty a jejího typu
    console.log(x < y);

    //VI. Porovnání hodnoty a jejího typu
    console.log(x >= y);

    //VII. Porovnání hodnoty a jejího typu
    console.log(x <= y);


//4. Logické operátory
//Logické operátory slouží k porovnání dvou hodnot.
//Logické operátory se dělí na:
    //I. Logické AND
    x = 5;
    y = 2;
    console.log(x == 5 && y == 2);

    //II. Logické OR
    console.log(x == 5 || y == 2);

    //III. Logické NOT
    console.log(!(x == 5 && y == 2));

//5. Bitové operátory
//Bitové operátory slouží k porovnání dvou hodnot.
//Bitové operátory se dělí na:
    //I. Bitové AND
    x = 5;
    y = 2;
    console.log(x & y);

    //II. Bitové OR
    console.log(x | y);

    //III. Bitové XOR
    console.log(x ^ y);

    //IV. Bitové NOT
    console.log(~x);

    //V. Bitové posun vlevo
    console.log(x << 1);

    //VI. Bitové posun vpravo
    console.log(x >> 1);

    //VII. Bitové posun vpravo s výplní nulami
    console.log(x >>> 1);

//6. Operátory řetězců
//Operátory řetězců slouží k porovnání dvou hodnot.
//Operátory řetězců se dělí na:
    //I. Operátor pro spojení dvou řetězců
    let text1 = "Ahoj";
    let text2 = "světe";
    console.log(text1 + text2);

    //II. Operátor pro přidání řetězce na konec jiného řetězce
    text1 += text2;
    console.log(text1);

    //III. Operátor pro porovnání řetězců
    console.log(text1 == text2);

    //IV. Operátor pro porovnání řetězců
    console.log(text1 === text2);

    //V. Operátor pro porovnání řetězců
    console.log(text1 != text2);

    //VI. Operátor pro porovnání řetězců
    console.log(text1 !== text2);

    //VII. Operátor pro porovnání řetězců
    console.log(text1 > text2);

    //VIII. Operátor pro porovnání řetězců
    console.log(text1 < text2);

    //IX. Operátor pro porovnání řetězců
    console.log(text1 >= text2);

    //X. Operátor pro porovnání řetězců
    console.log(text1 <= text2);

//7. Operátory pro přístup k prvkům pole
//Operátory pro přístup k prvkům pole slouží k porovnání dvou hodnot.
//Operátory pro přístup k prvkům pole se dělí na:
    //I. Operátor pro přístup k prvkům pole
    let pole = [1, 2, 3, 4, 5];
    console.log(pole[0]);

    //II. Operátor pro přístup k prvkům pole
    console.log(pole[1]);


