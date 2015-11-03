
//cxense
nvg21360.makeCustomSegment = function (){ var res = {}; this.cokCache = {}; var nvg_parms = new Array('gender', 'age', 'education', 'interest', 'product', 'income', 'marital', 'prolook'); for (nvg_i in nvg_parms) { var nvg_tmp_arr = ''; var nvg_tmp_nme = nvg_parms[nvg_i]; var nvg_tmp = this.getSegment(nvg_parms[nvg_i]); if (nvg_tmp.search(',') != -1) { res[ nvg_tmp_nme ] = nvg_tmp.split(','); } else if (nvg_tmp.search('-') != -1) { res[ nvg_tmp_nme ] = nvg_tmp.split('-'); } else if (nvg_tmp != '') { res[ nvg_tmp_nme ] = nvg_tmp; } } return res; };

var cX = cX || {}; cX.callQueue = cX.callQueue || [];

cX.callQueue.push(['setSiteId', '1146313359239572930']);

cX.callQueue.push(['setCustomParameters', { cxad_trail: 'conversion', cxad_ad_folder: '000000016254f2b3' }]);

cX.callQueue.push(['setUserProfileParameters', nvg21360.makeCustomSegment() ]);

cX.callQueue.push(['sendPageViewEvent']);


(function(d,s,e,t){e=d.createElement(s);e.type='text/java'+s;e.async='async';

e.src='http'+('https:'===location.protocol?'s://s':'://')+'cdn.cxense.com/cx.js';

t=d.getElementsByTagName(s)[0];t.parentNode.insertBefore(e,t);})(document,'script');
