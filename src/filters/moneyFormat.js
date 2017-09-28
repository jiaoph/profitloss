export const formateMoney = (data) => {
  if (typeof data === 'number') {
    return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return data;
  }
}