void 0===Craft.IconPicker&&(Craft.IconPicker={}),function(e){Craft.IconPicker.Input=Garnish.Base.extend({container:null,$selectize:null,init:function(t){this.options=t;var s=this;this.loadSpriteSheets(),this.loadFonts(),this.container=e("#"+t.inputId+"-field"),this.$selectize=this.container.find(".icon-picker-select"),this.$selectize.selectize({maxItems:1,maxOptions:100,create:!1,dropdownParent:"body",render:{item:function(e,t){if("svg"==e.type)var s='<img src="'+e.url+'" alt="'+t(e.text)+'" />';else if("sprite"==e.type)var s='<svg viewBox="0 0 1000 1000"><use xlink:href="#'+e.url+'" /></svg>';else if("glyph"==e.type)var s='<span class="icon-picker-font font-face-'+e.name+'">'+e.url+"</span>";else if("css"==e.type)var s='<span class="icon-picker-font '+e.classes+'">'+e.url+"</span>";return'<div class="icon-picker-thumb"><div class="icon-picker-thumb-icon">'+s+"</div><span>"+t(e.text)+"</span></div>"},option:function(e,t){if("svg"==e.type)var i='<img src="'+e.url+'" alt="'+t(e.text)+'" title="'+t(e.text)+'" />';else if("sprite"==e.type)var i='<svg viewBox="0 0 1000 1000"><use xlink:href="#'+e.url+'" /></svg>';else if("glyph"==e.type)var i='<span class="icon-picker-font font-face-'+e.name+'">'+e.url+"</span>";else if("css"==e.type)var i='<span class="icon-picker-font '+e.classes+'">'+e.url+"</span>";var n;return'<div class="icon-picker-item"><div class="icon-picker-item-wrap"><div class="icon-picker-item-icon">'+i+'</div><span class="icon-picker-item-label">'+(s.options.settings.showLabels?t(e.text):"")+"</span></div></div>"}}})},loadFonts:function(){for(var t=0;t<this.options.fonts.length;t++){var s=this.options.fonts[t];if(-1==e.inArray(s.name,Craft.IconPicker.Cache.fonts))if(Craft.IconPicker.Cache.fonts.push(s.name),"local"==s.type){var i='@font-face {font-family: "'+s.name+'";src: url("'+s.url+'");font-weight: normal;font-style: normal;}.'+s.name+' {font-family: "'+s.name+'" !important;}';e("head").append('<style type="text/css">'+i+"</style>")}else"remote"==s.type&&e("head").append('<link rel="stylesheet" type="text/css" href="'+s.url+'">')}},loadSpriteSheets:function(){for(var t=0;t<this.options.spriteSheets.length;t++){var s=this.options.spriteSheets[t];-1==e.inArray(s.name,Craft.IconPicker.Cache.stylesheets)&&(Craft.IconPicker.Cache.stylesheets.push(s.name),e.get(s.url,function(t){var i=document.createElement("div");i.innerHTML=(new XMLSerializer).serializeToString(t.documentElement),$svg=e(i).find("> svg"),$svg.attr("id","icon-picker-spritesheet-"+s.name),$svg.css("display","none").prependTo("body")}))}}})}(jQuery);
//# sourceMappingURL=icon-picker.js.map