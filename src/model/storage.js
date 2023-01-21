export const storage = {
    setItem: (name, value) => {
        localStorage.setItem(name, JSON.stringify(value));
    },
    getItem: (name) => {
        const item = localStorage.getItem(name);
        if (item) {
            return JSON.parse(item);
        }
        return;
    }
}