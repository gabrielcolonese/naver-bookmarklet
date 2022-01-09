javascript:(function()
{
  var p=prompt('Search on Naver:','');
  if(p)
  {
     var param = encodeURIComponent(p);
     window.open('https://en.dict.naver.com/#/search?query='+param, '_blank');
  }
})();