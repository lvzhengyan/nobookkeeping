type RootState = {
    recordList: RecordItem[];
    tagList: Tag[];
    currentTag?: Tag;
}

type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createdAt?: string;
};

type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => number;
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    save: () => void;
    remove: (id: string) => boolean;
}

interface Window {
    store: {
        tagList: Tag[];
        createTag: (name: string) => void;
        removeTag: (id: string) => boolean;
        //updateTag: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
        updateTag: TagListModel['update']; // TS 提供的简便写法，具体含义同上
        findTag: (id: string) => Tag | undefined;
        recordList: RecordItem[];
        createRecord: (record: RecordItem) => void;
    };
}