{
  type PageInfo = {
    title: string;
  };

  type Page = 'home' | 'about' | 'contact' ; 

  /**
   * 어떤 하나와 하나를 연결할때 하나는 key로 사용 
   * map 과 비슷하게 하나와 어떤 하나를 연결하고 싶을때 하나를 키로 쓰고 다른 하나를 다른 타입으로 묶고 싶을때 
   */
  const nav: Record<Page, PageInfo> = {
    home : {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'},
  }

  console.log(nav); 
}