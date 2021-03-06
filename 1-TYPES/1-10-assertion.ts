{
  /**
   * Type Assertions ๐
   * -> ํ์ ๊ฐ์ํ ๋ ์ฌ์ฉ
   */

  function jsStrFunc(): any {
    return 'hello'; 
  }

  /**
   * result.length ๋ฅผ ์ฒดํฌ ํ๊ณ  ์ถ์ง๋ง ํ์์ด 'any'์ด๊ธฐ ๋๋ฌธ์ string์ ๋ฉ์๋๋ฅผ ์ฌ์ฉํ  ์ ์๋ค. 
   * ๋ด๊ฐ result ๊ฐ string์ ๋ฐํ ํ๋ ๊ฒ์ ํ์  ํ  ๊ฒฝ์ฐ์ result length๋ฅผ ๊ผญ ์ฒดํฌ ํด์ผ ํ  ๊ฒฝ์ฐ์
   * type assertions๋ฅผ ์ฌ์ฉํด์ result์ ํ์์ ๋ณ๊ฒฝ ํ๋ ๊ฒ์ด๋ค. 
   */
  const result = jsStrFunc();
  console.log((result as string).length); 
  console.log((<string>result).length); 

  //ex2 - error โ
  const wrong : any = 5; 
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined; 
  }

  const numbers = findNumbers()!;
  numbers.push(2); // โ

}