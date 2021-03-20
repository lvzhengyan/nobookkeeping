import tagListStore from '@/store/tagStore'
import recordListStore from '@/store/recordStore'

const store = {
    ...tagListStore,
    ...recordListStore
};

export default store;