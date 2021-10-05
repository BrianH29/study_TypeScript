{
  type Video = {
    title: string;
    author: string;
    description: string; 
  };

  /**
   * OPTIONAL!!!! 
   */
  type Optional<T> = {
    [P in keyof T]?: T[P]; 
  }

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }

  type Nullable<T> = {
    [P in keyof T]:T[P] | null; 
  }

  const video: Optional<Video> = {
    title:'GoodMorning',
    author:'Brian Mack'
  }

  const vi: ReadOnly<Video> = {
    title: 'hello',
    author: 'brian',
    description: 'kkkkknopw'
  }

  const Video3: Nullable<Video> = {
    title: null,
    author: 'Jack',
    description: null, 
  }
  
  function updateList(video:Video, updateVideo:Partial<Video>):Video {
    return {
      ...video, 
      ...updateVideo
    }
  }

  const vv:Video = {
    title: 'goodnight',
    author: 'Craig',
    description: 'it is nothing like this',
  }
  const test = updateList(vv, {author: 'Jam'});

  type Product = 'cat' | 'dog';
  const res :Capitalize<Product> = 'Cat';  
  

}