function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  if (yourLeft + yourRight === friendsLeft + friendsRight) {
    if (yourLeft === friendsLeft || yourLeft === friendsRight) return true;
  }

  return false;
}
