require('colors');

module.exports = () => {
  const date = new Date();

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).substr(-2);
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = ('0' + date.getSeconds()).substr(-2);

  return `${hour}h ${minute}m ${second}s`.yellow + ` ${day}d ${month}m ${year}`.blue
}
