{
  //Array ์ ์
  const fruits:string[] = ['๐','๐'];
  const scores: number[]  = [1,3,5];
  const scores2: Array<number> = [1,3,5];

  function printArray(fruits: string[]) {
    fruits.push('๐');
  }
  //๋ฐฐ์ด์ ๋ด์ฉ์ ๋ฐ๊พธ์ง ์๊ฒ ํ๊ธฐ ์ํด์ readonly๋ฅผ ์ ์ฉํ๋ค. 
  function printArray2(fruits: readonly string[]) {
    //readonly๋ฅผ ๋ถ์์ ๊ฒฝ์ฐ์๋ push ์๋์ ์ค๋ฅ๊ฐ ๋ฌ๋ค. 
    fruits.push('๐');
  }

  //readonly๋ฅผ ์ฌ์ฉํ๊ธฐ ์ํด์๋ string[] ํ์์ ์ฌ์ฉํด์ผ ํ๋ค. 
  //์ผ๊ด์ฑ์๊ฒ ์ฌ์ฉํ๊ธฐ ์ํด์๋ string[]์ผ๋ก ํต์ผํ๋๊ฒ ์ข์๊ฑฐ ๊ฐ๋ค. 
  function printArry3(fruits: readonly Array<string>) {
    fruits.push('๐ฅ');
  }
 
  /**
   * Tuple - array์ ๋ค๋ฅด๊ฒ tuple์ ์๋ก ๋ค๋ฅธ ํ์์ ๋ด์ ์ ์๋ค. 
   * -> index์ ๋ฌด์์ด ๋ค์ด ์๋์ง ํ์ธํ๊ธฐ ์ด๋ ต๊ธฐ ๋๋ฌธ์ ๊ฐ๋์ฑ์ด ๋จ์ด์ง๋ค.
   * -> interface, type alias, class๋ก ๋์ฒดํ ์ ์๋ค. 
   */
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123

  //ํด๊ฒฐ๋ฐฉ๋ฒ object destructuring 
  const [name, age] = student; 


}