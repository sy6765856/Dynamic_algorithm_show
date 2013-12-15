_genHeadContents = function()
{
   return '';
}
exports.content = function()
{
   var res = '<head>' + this._genHeadContents() + '</head>';

   return res;
}();
