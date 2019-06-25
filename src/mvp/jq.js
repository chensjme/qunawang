import $ from 'jquery'

  
/**
 *@constructor
 *
 *
 * 
 */
function page(){

}

$.extend(page.prototype,{
    init:function() {
       this.bindEvens();
    },

    /**
     *
     *绑定点击事件
     * @param {string} me
     */
    bindEvens:function(me) {
        var btn = $('#btn');
        btn.on('click',$.proxy(this.handleBtnClick,this))
    },
    handleBtnClick: function() {
        var input =$('#input');
        var ul = $('#list');
        ul.append('<li>'+input.val()+'</li>');
        input.val('');

    }
});

var p = new page();
p.init();