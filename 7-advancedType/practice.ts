{
    type Video = {
        title: string,
        author: string,
    }

    type Optional<T> = {
        [P in keyof T]? : T[P];
    }

    type ReadOnly<T> = {
        readonly [P in keyof T] : T[P];
    }

    type Nullable<T> = {
        [P in keyof T] : T[P] | null
    }

    type VideoOptional = Optional<Video>;
    type VideoRead = ReadOnly<Video>

    const videoOpt: VideoOptional = {
        title : 'this is the movie',
    }

    const videoOpt2: Optional<Video> = {
        author : 'Jack Brown'
    }
    console.log('video : ', videoOpt.title);
    console.log('video : ', videoOpt2.author, videoOpt2.title);

    const videoRead: ReadOnly<Video> = {
        title : 'hello there ',
        author : 'JACKA'
    }
    // videoRead.title = 'check';

    console.log('readOnly : ', videoRead)

    const videoNullable: Nullable<Video> = {
        title: null,
        author: 'Jack Brown',
    }

    console.log('nullable : ', videoNullable.title, videoNullable.author);

}