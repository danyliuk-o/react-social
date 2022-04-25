export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map((item) => {
        if (item.id === itemId) {
            return {...item, ...newObjProps};
        }
        return item
    })
}