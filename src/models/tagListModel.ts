const localStorageKeyName = 'tagList';
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetch: () => Tag[];
    create: (name: string) => number;
    save: () => void;
}
const tagListModel: TagListModel = {
    data: [],
    fetch() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]')
        return this.data;
    },

    create(name: string) {
        // 0 表示成功， 1 表示标签名重复
        const names = this.data.map(item => item.name);
        if (names.indexOf(name) >= 0) { return 1 }
        this.data.push({ id: name, name: name });
        this.save();
        return 0;
    },

    save() {
        window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
    }
}

export default tagListModel;