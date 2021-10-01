//Error(Exception) Handling: try -> catch -> finally 

function readFile(fileName:string):string{
  if(fileName === 'not exists'){
    throw new Error(`file not exists! ${fileName}`)
  }
  return 'file contents';
}

function closeFile(fileName: string){

}

// const fileName = 'not exists';
// try{
//   console.log(readFile(fileName));
// } catch(error){
//   console.log(`catched!!`);
// } finally {
//   closeFile(fileName); 
//   console.log(`finally!!!`)
// }

//console.log('!!!!!');

function run(){
  const fileName = 'not exists';

  try {
    console.log(readFile(fileName))
  } catch (error) {
    console.log('catched!!!!')
    return; 
  }

  closeFile(fileName);
  console.log('closed!!!!')
}

function run2(){
  const fileName = 'not exists';

  try {
    console.log(readFile(fileName))
  } catch (error) {
    console.log('catched!!!!')
    return; 
  } finally {
    closeFile(fileName);
    console.log('closed!!!!')
  }

}

run();
run2();

/**
 * run() 과 run2() 차이
 * 
 * run() 은 finally 가 없는 상태이다.
 * -> catch 에서 return 이 있을 경우 아래에 있는 코드가 실행 되지 않는다.
 * -> return 없을 경우에는 아래코드 실행이 된다.
 * -> catch 에서 return 을 하고도 아래 코드를 마무리 하기 위해서는 run2() 와 같이 finally를 사용 해야한다. 
 */