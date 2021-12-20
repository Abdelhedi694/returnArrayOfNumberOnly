function listNumber(list) {
  let listChecked = [];
  list.forEach((element, index) => {
    if (typeof element != "string") {
      listChecked.push(element);
    }
  });
  return listChecked;
}
