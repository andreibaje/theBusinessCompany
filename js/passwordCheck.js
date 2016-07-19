 function checkPassword(str)
  {
    // at least one number, one lowercase and one uppercase letter and at least six characters
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(str);
  }