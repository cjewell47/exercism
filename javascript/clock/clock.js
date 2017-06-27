var at = function(h, m) {
  if(h >= 24) {
    h -= 24;
  }
  if( m && m >= 60) {
    m -= 60;
  }
  if(h < 10) {
    '0' + h;
  }
  if(m && m < 10) {
    '0' + m;
  }
  // if(!m) {
  //   m = '00';
  // }
};

module.exports = at;
