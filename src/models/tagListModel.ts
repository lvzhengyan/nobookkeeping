const localStorageKeyName = 'tagList';
type TagListModel = {
    data: string[];
    fetch: () => string[];
    create: (name: string) => number;
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    fetch(){
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data;
    },

    create(name: string){
        // 0 表示成功， 1 表示标签名重复
        if(this.data.indexOf(name) >= 0) {return 1}
        this.data.push(name);
        this.save();
        return 0;
    },

    save(){
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;