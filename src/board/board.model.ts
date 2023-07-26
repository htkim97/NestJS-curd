export interface Board{
    id:string;
    title: string;
    description: string;
    status: BoardStatus ; // 게시물이 비공개,공개 따라 (public, private)
}

export enum BoardStatus{
    PUBLIC = 'PUBLIC',
    PRIVATE='PRIVATE'
}