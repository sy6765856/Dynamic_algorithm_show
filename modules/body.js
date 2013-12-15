_genBodyContents = function()
{
   return 'hello';
}
exports.content = function()
{
   var res = '<body>'+ this._genBodyContents() +'</body>';

   return res;
}();
