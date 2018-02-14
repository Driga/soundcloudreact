export function filter(filterBy) {
  if (filterBy) {
    return {
      type: 'FILTER',
      payload: filterBy
    }
  } else {
    return {
      type: 'SHOW_ALL',
      payload: {}
    }
  }
}
